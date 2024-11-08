import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  ListItemButton,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SurfaceFeature, WorkSurface } from '@shared/interfaces';
import { setFilterFeatures } from '@states/work-surface.slice';
import { removedFeatureSelector } from '@states/selectors';
import { hasFeature } from '@/shared/utils';
import styles from './proposal-block.module.scss';

interface ProposalBlockProps {
  proposalId: number;
  data: WorkSurface;
}

export function ProposalBlock(props: ProposalBlockProps) {
  const dispatch = useDispatch();
  const removedFeatures = useSelector(removedFeatureSelector);

  const { data } = props;
  const features = data.features;
  const [expanded, setExpanded] = useState<boolean>(true);

  const checkBoxChanged = (feature: SurfaceFeature) => {
    dispatch(setFilterFeatures(feature));
  };

  const isChecked = useCallback((feature: SurfaceFeature) => !hasFeature(removedFeatures, feature), [removedFeatures]);

  return (
    <Accordion expanded={expanded} onChange={() => setExpanded((value) => !value)} data-testid="proposal-bock">
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>{data.type}</AccordionSummary>
      <AccordionDetails>
        {features.map((feature, i) => (
          <ListItemButton key={i} className={styles['item-button']}>
            <FormControlLabel
              value="end"
              className={styles['checkbox']}
              control={<Checkbox checked={isChecked(feature)} onChange={() => checkBoxChanged(feature)} />}
              label={feature.type}
              labelPlacement="end"
              data-testid="feature-name"
            />
          </ListItemButton>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}
