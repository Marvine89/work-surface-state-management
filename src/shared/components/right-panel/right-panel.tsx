import CloseIcon from "@mui/icons-material/Close";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Chip, IconButton } from "@mui/material";
import "./right-panel.scss";

export function RightPanel() {
  return (
    <aside className="right-panel">
      <div className="right-panel__header">
        <h3>Selected Solution</h3>

        <IconButton aria-label="close" color="warning">
          <CloseIcon className="right-panel__header-icon" />
        </IconButton>
      </div>

      <div className="right-panel__body">
        <div className="right-panel__coordinates">
          <h4>Coordinates</h4>

          <div className="right-panel__coordinate-list">
            <Chip
              label="2.2945010662078857, 48.85822111955489"
              color="warning"
              variant="outlined"
              icon={
                <LocationOnIcon
                  className="right-panel__coordinate-icon"
                  fontSize="small"
                />
              }
            />
            <Chip
              label="2.2945010662078857, 48.85822111955489"
              color="warning"
              variant="outlined"
              icon={
                <LocationOnIcon
                  className="right-panel__coordinate-icon"
                  fontSize="small"
                />
              }
            />
            <Chip
              label="2.2945010662078857, 48.85822111955489"
              color="warning"
              variant="outlined"
              icon={
                <LocationOnIcon
                  className="right-panel__coordinate-icon"
                  fontSize="small"
                />
              }
            />
          </div>
        </div>

        <div className="right-panel__properties">
          <h4>Properties</h4>

          <div className="right-panel__properties-list">
            <div className="right-panel__properties-row">
              <div className="right-panel__properties-key">Lorem ipsum</div>
              <div className="right-panel__properties-value">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                eos aspernatur animi odit labore corrupti reprehenderit totam
                soluta architecto delectus culpa.
              </div>
            </div>
            <div className="right-panel__properties-row">
              <div className="right-panel__properties-key">Lorem ipsum</div>
              <div className="right-panel__properties-value">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                eos aspernatur animi odit labore corrupti reprehenderit totam
                soluta architecto delectus culpa.
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
