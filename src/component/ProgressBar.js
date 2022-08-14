import React from "react";
import { makeStyles } from "@mui/styles";
import { LinearProgress } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {},
  loadingTitle: {
    display: "flex",
    justifyContent: "center",
    fontSize: "24px",
    color: "white",
  },
  linearBar: {
    margin: "300px auto",
    width: "20%",
  },
  overlay: {
    position: "fixed",
    zIndex: "999" /* Sit on top */,
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    overflow: "auto" /* Enable scroll if needed */,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
}));

function ProgressBar(props) {
  const styles = useStyles();

  return (
    <div>
      {/* uploading form component */}
      {props.onLoad && (
        <div className={styles.overlay}>
          <div className={styles.linearBar}>
            <p className={styles.loadingTitle}>Uploading Form</p>
            <LinearProgress />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProgressBar;
