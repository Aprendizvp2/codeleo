import { cloneElement, ReactElement } from "react";
import PropTypes from "prop-types";
import { AppBar, useScrollTrigger } from "@mui/material";
import icon from "../../assets/logo/code-leo-logo.png";
import ScrollColor from "../scrollcolor/ScrollColor";

interface ElevationScrollProps {
  children: ReactElement;
  window?: () => Window;
}

function ElevationScroll(props: ElevationScrollProps) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

interface HeaderProps {
  window?: () => Window;
}

export default function SmallHeader(props: HeaderProps) {
  const { window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });
  
  return (
    <>
      <ElevationScroll {...props}>
        {trigger ? (
          <ScrollColor>
            <AppBar
              className="px-32 py-4"
              position="fixed"
              elevation={0}
              color="transparent"
            >
              <div className="flex justify-between items-center">
                <a href="/">
                  <img src={icon} className="w-12" alt="icon" />
                </a>
                <div className="flex gap-8">
                  <a
                    className="text-white hover:text-red-600 transition duration-300 ease-in-out"
                    href="#home"
                  >
                    Home
                  </a>
                  <a
                    className="text-white hover:text-red-600 transition duration-300 ease-in-out"
                    href="#skills"
                  >
                    Skills
                  </a>
                  <a
                    className="text-white hover:text-red-600 transition duration-300 ease-in-out"
                    href="#contact"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </AppBar>
          </ScrollColor>
        ) : (
          <ScrollColor>
            <AppBar
              className="px-32 py-4"
              position="fixed"
              elevation={0}
              color="transparent"
            >
              <div className="flex justify-between items-center">
                <a href="/">
                  <img src={icon} className="w-12" alt="icon" />
                </a>
                <div className="flex gap-8">
                  <a
                    className="text-white hover:text-red-600 transition duration-300 ease-in-out"
                    href="#home"
                  >
                    Home
                  </a>
                  <a
                    className="text-white hover:text-red-600 transition duration-300 ease-in-out"
                    href="#skills"
                  >
                    Skills
                  </a>
                  <a
                    className="text-white hover:text-red-600 transition duration-300 ease-in-out"
                    href="#contact"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </AppBar>
          </ScrollColor>
        )}
      </ElevationScroll>
    </>
  );
}
