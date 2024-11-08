import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Accordion, AccordionDetails, AccordionSummary, IconButton, ListItemButton, Tooltip } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { SavedPolygonState } from '@shared/interfaces';
import { savedPolygonesSelector } from '@states/selectors';
import { openRightPanel } from '@states/panel.slice';
import { setSelectedPolygon } from '@states/saved-geometry.slice';
import styles from './saved-proposal.module.scss';

interface SavedProposalProps {
  openEditModal: (_: SavedPolygonState) => void;
}

export function SavedProposalBlock(props: SavedProposalProps) {
  const dispatch = useDispatch();
  const savedPolygones = useSelector(savedPolygonesSelector);

  const { openEditModal } = props;
  const [expanded, setExpanded] = useState<boolean>(true);

  const viewFeature = (polygone: SavedPolygonState) => {
    dispatch(setSelectedPolygon(polygone));
    dispatch(openRightPanel());
  };

  return (
    <Accordion expanded={expanded} onChange={() => setExpanded((value) => !value)} data-testid="proposal-bock">
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>Saved Proposals</AccordionSummary>
      <AccordionDetails>
        {!savedPolygones.length ? (
          <p className={styles['empty-text']}>No saved polygon found</p>
        ) : (
          savedPolygones.map((polygone, i) => (
            <ListItemButton key={i} className={styles['item-button']}>
              <span>{polygone.name}</span>

              <div>
                <Tooltip title="Edit feature" placement="top">
                  <IconButton aria-label="view" onClick={() => openEditModal(polygone)}>
                    <DriveFileRenameOutlineIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="View feature" placement="right">
                  <IconButton aria-label="view" onClick={() => viewFeature(polygone)}>
                    <VisibilityIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </ListItemButton>
          ))
        )}
      </AccordionDetails>
    </Accordion>
  );
}
