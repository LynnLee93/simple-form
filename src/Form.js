import React from "react";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

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
  btn: {
    display: "flex",
    justifyContent: "flex-end",
  },
});

function Form() {
  const styles = useStyles();
  return (
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
      <div className={styles.btn}>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input hidden accept="image/*" type="file" />
          <AddPhotoAlternateIcon />
        </IconButton>
        <Button variant="contained">Send</Button>
      </div>
    </div>
  );
}

export default Form;
