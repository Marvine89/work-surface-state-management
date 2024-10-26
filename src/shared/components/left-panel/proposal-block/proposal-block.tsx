import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  ListItemButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import { WorkSurface } from "../../../interfaces";

interface ProposalBlockProps {
  index: number;
  data: WorkSurface;
}

export function ProposalBlock({ data, index }: ProposalBlockProps) {
  const features = data.features;
  const [expanded, setExpanded] = useState<boolean>(true);
  const [checkboxValues, setCheckboxValues] = useState<boolean[]>([]);

  useEffect(() => {
    setCheckboxValues(features.map(() => true));
  }, [features]);

  const checkBoxChanged = (index: number) => {
    const changedValue = !checkboxValues[index];

    setCheckboxValues((values) => {
      values[index] = changedValue;
      return [...values];
    });
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={() => setExpanded((value) => !value)}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {`${data.type} - ${index}`}
      </AccordionSummary>
      <AccordionDetails>
        {features.map((feature, i) => (
          <ListItemButton key={i} onClick={() => checkBoxChanged(i)}>
            <FormControlLabel
              value="end"
              control={<Checkbox checked={checkboxValues[i] ?? false} />}
              label={`${feature.type} - ${i + 1}`}
              labelPlacement="end"
            />
          </ListItemButton>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}
