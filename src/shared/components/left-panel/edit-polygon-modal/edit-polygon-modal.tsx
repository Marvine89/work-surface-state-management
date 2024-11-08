import { useDispatch } from 'react-redux';
import Modal from '@mui/material/Modal';
import { Box, Button, IconButton, Input, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Form, Formik } from 'formik';
import { object, string, InferType } from 'yup';
import { SavedPolygonState } from '@/shared/interfaces';
import { updatePolygon } from '@states/saved-geometry.slice';
import styles from './edit-polygon-modal.module.scss';

interface EditPolygonModalProps {
  polygon: SavedPolygonState | null;
  onClose: () => void;
}

const FORM_SCHEMA = object().shape({
  name: string().required('Feature name is required'),
  description: string(),
});

type FormValues = InferType<typeof FORM_SCHEMA>;

export function EditPolygonModal({ polygon, onClose }: EditPolygonModalProps) {
  const dispatch = useDispatch();
  const initialValues: FormValues = {
    name: polygon?.name || '',
    description: polygon?.description || '',
  };

  const onSubmit = ({ name, description }: FormValues) => {
    if (!polygon) return;

    const properties = {
      ...polygon,
      name,
      description: description || '',
    };

    dispatch(updatePolygon(properties));
    onClose();
  };

  return (
    <Modal open={!!polygon} onClose={onClose}>
      <Box className={styles['edit-feat-modal']}>
        <div className={styles['modal-header']}>
          <h3 className={styles['feature-title']}>Edit Polygon</h3>
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
              </div>

              <Button type="submit" className={styles['button']} color="primary" variant="contained">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
}
