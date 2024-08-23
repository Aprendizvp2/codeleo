import React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";

interface ScrollColorProps {
  threshold?: number;
  bgColorBefore?: string;
  bgColorAfter?: string;
  textColorBefore?: string;
  textColorAfter?: string;
  fadeIn?: string;
  fadeOut?: string;
  paddingBefore?: string;
  paddingAfter?: string;
  fontSizeBefore?: string;
  fontSizeAfter?: string;
  window?: () => Window;
  children: React.ReactElement;
}

export default function ScrollColor(props: ScrollColorProps) {
  const {
    threshold = 0,
    bgColorBefore = "transparent",
    bgColorAfter = "black",
    textColorBefore = "white",
    textColorAfter = "black",
    fadeIn = "0.3s ease-in",
    fadeOut = "0.3s ease-out",
    paddingBefore = "1rem",
    paddingAfter = "0.5rem",
    fontSizeBefore = "16px",
    fontSizeAfter = "14px",
    children,
    window,
    ...other
  } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    style: {
      boxShadow: trigger ? "none" : "none",
      paddingTop: trigger ? paddingAfter : paddingBefore,
      paddingBottom: trigger ? paddingAfter : paddingBefore,
      backgroundColor: trigger ? bgColorAfter : bgColorBefore,
      color: trigger ? textColorAfter : textColorBefore,
      transition: trigger ? fadeIn : fadeOut,
      fontSize: trigger ? fontSizeAfter : fontSizeBefore,
    },
    ...other,
  });
}
