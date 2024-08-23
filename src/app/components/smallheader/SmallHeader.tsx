import React, { ReactElement, useState } from "react";
import { AppBar, IconButton, useScrollTrigger } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ScrollColor from "../scrollcolor/ScrollColor";
import MenuDrawer from "../menudrawer/MenuDrawer";
import icon from "../../assets/logo/code-leo-logo.png";

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

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

interface SmallHeaderProps {
  window?: () => Window;
}

export default function SmallHeader(props: SmallHeaderProps) {
  const [openMenuDrawer, setOpenMenuDrawer] = useState<boolean>(false);

  const handleOpenMenuDrawer = () => {
    setOpenMenuDrawer(!openMenuDrawer);
  };

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
              className="px-12 py-4"
              position="fixed"
              color="transparent"
              elevation={0}
            >
              <div className="flex justify-between items-center">
                <img src={icon} className="w-8" alt="icon" />
                <div>
                  <MenuDrawer
                    open={openMenuDrawer}
                    toggleMenuDrawer={handleOpenMenuDrawer}
                  />
                  <IconButton onClick={handleOpenMenuDrawer}>
                    <MenuIcon className="text-red-700" />
                  </IconButton>
                </div>
              </div>
            </AppBar>
          </ScrollColor>
        ) : (
          <ScrollColor>
            <AppBar
              className="px-12 py-4"
              position="fixed"
              elevation={0}
            >
              <div className="flex justify-between items-center">
                <img src={icon} className="w-8" alt="icon" />
                <div>
                  <MenuDrawer
                    open={openMenuDrawer}
                    toggleMenuDrawer={handleOpenMenuDrawer}
                  />
                  <IconButton onClick={handleOpenMenuDrawer}>
                    <MenuIcon className="text-red-700" />
                  </IconButton>
                </div>
              </div>
            </AppBar>
          </ScrollColor>
        )}
      </ElevationScroll>
    </>
  );
}
