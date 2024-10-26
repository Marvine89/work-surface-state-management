import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  ListItemButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./left-panel.scss";
import { useState } from "react";

export function LeftPanel() {
  const [expanded, setExpanded] = useState<boolean[]>([true, true]);

  const onChange = (panel: 1 | 2) => {
    setExpanded((value) => {
      return panel === 1 ? [!value[0], value[1]] : [value[0], !value[1]];
    });
  };

  return (
    <aside className="left-panel">
      <h3 className="left-panel__title">Proposal Solution(s)</h3>
      <Accordion expanded={expanded[0]} onChange={() => onChange(1)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          First Proposal
        </AccordionSummary>
        <AccordionDetails>
          <ListItemButton>
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="End"
              labelPlacement="end"
            />
          </ListItemButton>
          <ListItemButton>
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="End"
              labelPlacement="end"
            />
          </ListItemButton>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded[1]} onChange={() => onChange(2)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Second Proposal
        </AccordionSummary>
        <AccordionDetails>
          <ListItemButton>
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="End"
              labelPlacement="end"
            />
          </ListItemButton>
        </AccordionDetails>
      </Accordion>
    </aside>
  );
}
