import React from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {},
  title: {
    display: "flex",
    justifyContent: "center",
  },
  centered: {
    margin: "100px auto",
    width: "600px",
    backgroundColor: "#fcfcfc",
    padding: "20px 50px 40px",
    boxShadow: "1px 4px 10px 1px #aaa",
  },
  container: {
    width: "100%",
  },
  desc: {
    marginBottom: "20px",
  },
  email: {
    marginBottom: "20px",
  },
  name: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
});

function Form() {
  const styles = useStyles();
  return (
    <div>
      <div className={styles.centered}>
        <div className={styles.title}>
          <h3>Simple Form</h3>
        </div>
        <div className={styles.container}>
          <div className={styles.name}>
            <TextField required id="outlined-required" label="First Name" />
            <TextField required id="outlined-required" label="Last Name" />
          </div>
          <div className={styles.desc}>
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              fullWidth
            />
          </div>

          <div className={styles.email}>
            <TextField id="outlined-required" label="Email" fullWidth />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
