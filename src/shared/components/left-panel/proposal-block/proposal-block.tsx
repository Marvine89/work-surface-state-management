import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  IconButton,
  ListItemButton,
  Tooltip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { SurfaceFeature, WorkSurface } from "@shared/interfaces";
import { setFilterFeatures } from "@states/work-surface.slice";
import { removedFeatureSelector } from "@states/selectors";
import { setSelectedFeature } from "@states/work-surface.slice";
import { openRightPanel } from "@states/panel.slice";
import { hasFeature } from "@/shared/utils";
import styles from "./proposal-block.module.scss";

interface ProposalBlockProps {
  proposalId: number;
  data: WorkSurface;
  openEditModal: (_: SurfaceFeature) => void;
}

export function ProposalBlock(props: ProposalBlockProps) {
  const dispatch = useDispatch();
  const removedFeatures = useSelector(removedFeatureSelector);

  const { data, proposalId, openEditModal } = props;
  const features = data.features;
  const proposalName = `${data.type} - ${proposalId}`;
  const [expanded, setExpanded] = useState<boolean>(true);

  const checkBoxChanged = (feature: SurfaceFeature) => {
    dispatch(setFilterFeatures(feature));
  };

  const isChecked = useCallback(
    (feature: SurfaceFeature) => !hasFeature(removedFeatures, feature),
    [removedFeatures]
  );

  const viewFeature = (feature: SurfaceFeature) => {
    dispatch(setSelectedFeature(feature));
    dispatch(openRightPanel());
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={() => setExpanded((value) => !value)}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {proposalName}
      </AccordionSummary>
      <AccordionDetails>
        {features.map((feature, i) => (
          <ListItemButton key={i} className={styles["item-button"]}>
            <FormControlLabel
              value="end"
              className={styles["checkbox"]}
              control={
                <Checkbox
                  checked={isChecked(feature)}
                  onChange={() => checkBoxChanged(feature)}
                />
              }
              label={`${feature.type} - ${feature.id}`}
              labelPlacement="end"
            />

            <Tooltip title="Edit feature" placement="top">
              <IconButton
                aria-label="view"
                onClick={() => openEditModal(feature)}
              >
                <DriveFileRenameOutlineIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="View feature" placement="right">
              <IconButton
                aria-label="view"
                onClick={() => viewFeature(feature)}
              >
                <VisibilityIcon />
              </IconButton>
            </Tooltip>
          </ListItemButton>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}
