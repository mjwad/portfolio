import { useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Represents the Loader component.
 * Displays an animated loader with SVG icons.
 *
 * @component
 * @param {function} setShowLoader - A function to set whether the loader should be displayed.
 */

const Loader = ({ setShowLoader }) => {
  useEffect(() => {
    // Automatically hide the loader after a delay
    setTimeout(() => {
      setShowLoader(false);
    }, 2800);
  }, [setShowLoader]);

  const spanVariant = {
    hidden: {
      scale: 20,
      opacity: 1,
    },
    visible: {
      stroke: "rgb(243, 243, 243)",
      strokeWidth: 3,
      scale: 0,
      opacity: 0,
      transition: {
        default: { duration: 3, ease: "easeIn" },
        fill: { duration: 3, ease: [1, 0, 0.8, 1] },
        stroke: { duration: 3, ease: [1, 0, 0.8, 1] },
        scale: { duration: 3, ease: [1, 1, 0.5, 0] },
      },
    },
  };

  const fontFamilyStyle = {
    fontFamily: "TAN meringuo",
  };


  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "150px", alignItems: "center", height: "100vh" }}>
      <motion.span
        style={{
          ...fontFamilyStyle,
          fontWeight: 400,
          fontStyle: "normal",
          color: "rgb(0, 151, 178)",
          textDecoration: "none",
          display: "inline-block",
        }}
        variants={spanVariant}
        initial="hidden"
        animate="visible"
      >
        M
      </motion.span>
      <motion.span
      style={{
        ...fontFamilyStyle,
        fontWeight: 400,
        fontStyle: "normal",
        color: "#737373",
        textDecoration: "none",
        display: "inline-block",
      }}
      variants={spanVariant}
      initial="hidden"
      animate="visible"
    >
      J
    </motion.span>
    </div>
  );
};

export default Loader;

<span class="OYPEnA" style="font-weight: 400; font-style: normal; color: rgb(0, 151, 178); text-decoration: none;">M</span>