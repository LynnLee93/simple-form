import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  formTitle: {
    display: "flex",
    justifyContent: "center",
  },
}));

function Header() {
  const styles = useStyles();
  return (
    <div className={styles.formTitle}>
      <h2>Simple Form</h2>
    </div>
  );
}

export default Header;
