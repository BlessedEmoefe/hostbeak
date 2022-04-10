import React, { useState, useEffect, useRef } from "react";
import { SliderContainer } from "./Slider.styles";
import { generateID } from "../../infrastructure/lib/generateID";

const Slider = ({ sliderArray, ...otherProps }) => {
  const [state, setState] = useState({
    translate: 0,
    slides: sliderArray,
    Automatic: null
  });

  const AutomaticRef = useRef();

  useEffect(() => {
    AutomaticRef.current = AutomateSlide;
  });

  useEffect(() => {
    const AutomaticFunction = () => {
      AutomaticRef.current();
    };
    const interval = setInterval(AutomaticFunction, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleTranslate = dotNavigator => {
    setState({
      ...state,
      translate: state.slides.indexOf(dotNavigator == 0 ? 1 : dotNavigator)
    });
  };
  const handleActiveDotNavigation = dotNavigator => {
    return state.slides.indexOf(dotNavigator) === state.translate
      ? "active"
      : "unActive";
  };

  const AutomateSlide = () => {
    if (state.translate === state.slides.length - 1) {
      setState({ ...state, translate: 0 });
    } else {
      setState({ ...state, translate: state.translate + 1 });
    }
  };
  return (
    <SliderContainer translate={state.translate} {...otherProps}>
      <div className="SliderBox">
        {state.slides.map(slideItem => (
          <div
            key={generateID(15)}
            className="slide"
            style={{
              backgroundImage: `url("${slideItem.image}")`
            }}
          >
            <div className="TitleContainer">{slideItem.text}</div>
          </div>
        ))}
      </div>
      <div className="dotContainer">
        {state.slides.map(dotNavigator => (
          <div
            key={generateID(14)}
            className={handleActiveDotNavigation(dotNavigator)}
            onClick={() => {
              handleTranslate(dotNavigator);
            }}
          />
        ))}
      </div>
    </SliderContainer>
  );
};

export default Slider;
