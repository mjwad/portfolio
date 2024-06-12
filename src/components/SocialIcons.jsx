import { motion } from "framer-motion";
import { ReactComponent as Upwork }from "../images/upwork.svg";

/**
 * Represents a component displaying social media icons.
 *
 * This component displays social media icons with animation effects.
 *
 * @component
 */

const SocialIcons = () => {
  // Define styles for the icons
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon h-10 w-10" style={styles.icon} href="https://www.upwork.com/freelancers/~01de9422cf0d596fe6?mp_source=share">
        {/* Upwork Icon */}
        <motion.svg
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
          style={{
            height: "23px",
            width: "23px",
            backgroundColor: "#f0f0f0", // Replace with your desired background color
            borderRadius: "2px",
            padding: "2px 2px 0px 2px"
          }}
          aria-hidden="true"
          title="Muhammad Jawad's Upwork Profile"
        >
          <Upwork />
        </motion.svg>
      </a>
      <a className="icon" style={styles.icon} href="https://github.com/mjwad">
        {/* GitHub Icon */}
        <motion.i
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
          className="fa-brands fa-github"
          aria-hidden="true"
          title="Muhammad Jawad' GitHub Profile"
        ></motion.i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/mjwad/">
        {/* LinkedIn Icon */}
        <motion.i
          initial={{ y1: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.5, type: "spring" }}
          className="fa-brands fa-linkedin"
          aria-hidden="true"
          title="Muhammad Jawad' LinkedIn Profile"
        ></motion.i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/mjwad/">
        {/* Instagram Icon */}
        <motion.i
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5, type: "spring" }}
          className="fa-brands fa-instagram"
          aria-hidden="true"
          title="Muhammad Jawad' Instagram Profile"
        ></motion.i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/mjwad">
        {/* Twitter Icon */}
        <motion.i
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
          className="fa-brands fa-twitter"
          aria-hidden="true"
          title="Muhammad Jawad' Twitter Profile"
        ></motion.i>
      </a>
    </div>
  );
};

export default SocialIcons;
