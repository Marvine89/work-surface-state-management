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
import { SurfaceFeature, WorkSurface } from "@shared/interfaces";
import { setFilterFeatures } from "@states/maps.slice";
import { removedFeatureSelector } from "@states/selectors";
import { setSelectedFeature } from "@states/work-surface.slice";
import { openRightPanel } from "@states/panel.slice";
import { hasFeature } from "@/shared/utils";
import "./proposal-block.scss";

interface ProposalBlockProps {
  proposalId: number;
  data: WorkSurface;
}

export function ProposalBlock({ data, proposalId }: ProposalBlockProps) {
  const dispatch = useDispatch();
  const removedFeatures = useSelector(removedFeatureSelector);

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
          <ListItemButton key={i} className="proposal-block__item-button">
            <FormControlLabel
              value="end"
              className="proposal-block__checkbox"
              control={
                <Checkbox
                  checked={isChecked(feature)}
                  onChange={() => checkBoxChanged(feature)}
                />
              }
              label={`${feature.type} - ${feature.id}`}
              labelPlacement="end"
            />

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
