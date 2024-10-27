import Modal from '@mui/material/Modal';
import { Box, Button, IconButton, Input, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Form, Formik } from 'formik';
import { object, string, InferType } from 'yup';
import { SurfaceFeature } from '@/shared/interfaces';
import styles from './edit-feature-modal.module.scss';
import { useDispatch } from 'react-redux';
import { updateFeature } from '@/shared/states/work-surface.slice';

interface EditFeatureModalProps {
  feature: SurfaceFeature | null;
  onClose: () => void;
}

const FORM_SCHEMA = object().shape({
  name: string().required('Feature name is required'),
  description: string(),
  location: string(),
});

type FormValues = InferType<typeof FORM_SCHEMA>;

export function EditFeatureModal({ feature, onClose }: EditFeatureModalProps) {
  const dispatch = useDispatch();
  const initialValues: FormValues = {
    name: feature?.type || '',
    description: feature?.properties?.description || '',
    location: feature?.properties?.location || '',
  };

  const onSubmit = ({ name, description, location }: FormValues) => {
    if (!feature) return;

    const properties = {
      ...feature?.properties,
      ...(description && { description: description }),
      ...(location && { location: location }),
    };

    dispatch(updateFeature({ ...feature, type: name, properties }));
    onClose();
  };

  return (
    <Modal open={!!feature} onClose={onClose}>
      <Box className={styles['edit-feat-modal']}>
        <div className={styles['modal-header']}>
          <h3 className={styles['feature-title']}>{feature?.type}</h3>
          <IconButton aria-label="close" color="warning" onClick={onClose}>
            <CloseIcon className={styles['header-icon']} />
          </IconButton>
        </div>

        <Formik initialValues={initialValues} validationSchema={FORM_SCHEMA} onSubmit={onSubmit}>
          {({ values, handleChange, handleBlur, touched, errors }) => (
            <Form className={styles['form']}>
              <div className={styles['form-inputs']}>
                <TextField
                  required={true}
                  label="Name (type)"
                  variant="standard"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!touched.name && !!errors.name}
                />
                <Input
                  multiline
                  placeholder="Description"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <TextField
                  label="Location"
                  variant="standard"
                  name="location"
                  value={values.location}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <Button type="submit" className={styles['button']}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
}
