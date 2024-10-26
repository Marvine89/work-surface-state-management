import { Chip, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  featureCoordinatesSelector,
  featurePropertySelector,
} from "@states/selectors";
import { clearFeatureSelection } from "@states/work-surface.slice";
import "./right-panel.scss";

export function RightPanel() {
  const dispatch = useDispatch();
  const cordinates = useSelector(featureCoordinatesSelector);
  const properties = useSelector(featurePropertySelector);
  const propertyKeys = Object.keys(properties);

  return (
    <aside className="right-panel">
      <div className="right-panel__header">
        <h3>Selected Solution</h3>

        <IconButton
          aria-label="close"
          color="warning"
          onClick={() => dispatch(clearFeatureSelection())}
        >
          <CloseIcon className="right-panel__header-icon" />
        </IconButton>
      </div>

      <div className="right-panel__body">
        <div className="right-panel__coordinates">
          <h4>Coordinates</h4>

          <div className="right-panel__coordinate-list">
            {cordinates?.map((cord, i) => (
              <Chip
                key={i}
                label={`${cord[0]}, ${cord[1]}`}
                color="warning"
                variant="outlined"
                icon={
                  <LocationOnIcon
                    className="right-panel__coordinate-icon"
                    fontSize="small"
                  />
                }
              />
            ))}
          </div>
        </div>

        <div className="right-panel__properties">
          <h4>Properties</h4>

          {propertyKeys.length ? (
            propertyKeys.map((key, i) => (
              <div className="right-panel__properties-list" key={i}>
                <div key={key} className="right-panel__properties-row">
                  <div className="right-panel__properties-key">{key}</div>
                  <div className="right-panel__properties-value">
                    {properties[key]}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="right-panel__empty-value">No properties available</p>
          )}
        </div>
      </div>
    </aside>
  );
}
