import { Chip, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  animated,
  useSpring,
  useSpringRef,
  useTransition,
} from "@react-spring/web";
import CloseIcon from "@mui/icons-material/Close";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { closeRightPanel } from "@states/panel.slice";
import {
  featureCoordinatesSelector,
  featurePropertySelector,
  rightPanelSelector,
} from "@states/selectors";
import "./right-panel.scss";
import { useEffect } from "react";

export function RightPanel() {
  const dispatch = useDispatch();
  const rightPanel = useSelector(rightPanelSelector);
  const cordinates = useSelector(featureCoordinatesSelector);
  const properties = useSelector(featurePropertySelector);
  const propertyKeys = Object.keys(properties);

  const sidePanelAnimate = useSpring({
    keys: null,
    right: rightPanel ? 16 : -400,
  });

  const transRef = useSpringRef();
  const transitions = useTransition(cordinates?.length, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transition: "opacity 60ms ease" },
    enter: { opacity: 1 },
  });

  useEffect(() => {
    transRef.start();
  }, [cordinates?.length, transRef]);

  return (
    <animated.aside style={sidePanelAnimate} className="right-panel">
      <div className="right-panel__header">
        <h3>Selected Solution</h3>

        <IconButton
          aria-label="close"
          color="warning"
          onClick={() => dispatch(closeRightPanel())}
        >
          <CloseIcon className="right-panel__header-icon" />
        </IconButton>
      </div>

      {transitions((style) => (
        <animated.div className="right-panel__body" style={style}>
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
              <p className="right-panel__empty-value">
                No properties available
              </p>
            )}
          </div>
        </animated.div>
      ))}
    </animated.aside>
  );
}
