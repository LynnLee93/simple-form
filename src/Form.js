import React, { useState } from "react";
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
  emailErr: {
    color: "red",
    marginTop: "10px",
    fontSize: "12px",
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

  const [values, setValues] = useState({
    fName: "",
    lName: "",
    desc: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState({});
  console.log("emailError", emailError);

  function handleFName(e) {
    setValues({ ...values, fName: e.target.value });
  }

  function handleLName(e) {
    setValues({ ...values, lName: e.target.value });
  }

  function handleDesc(e) {
    setValues({ ...values, desc: e.target.value });
  }

  function handleEmail(e) {
    setValues({ ...values, email: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEmailError(validate(values));
    setSubmitted(true);
  }

  function validate(values) {
    console.log("values", values);
    const error = {};
    console.log("error", error);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!regex.test(values.email)) {
      error.email = "Invalid email format";
    }
    return error;
  }

  return (
    <div className={styles.centered}>
      {submitted && Object.keys(emailError).length === 0 ? (
        <div>Email is successfully sent</div>
      ) : null}
      <div className={styles.title}>
        <h3>Simple Form</h3>
      </div>
      <form className={styles.container} onSubmit={handleSubmit}>
        <div className={styles.name}>
          <TextField
            required
            id="outlined-required"
            name="firstName"
            label="First Name"
            value={values.fName}
            onChange={handleFName}
          />
          <TextField
            required
            id="outlined-required"
            name="lastName"
            label="Last Name"
            value={values.lName}
            onChange={handleLName}
          />
        </div>
        <div className={styles.desc}>
          <TextField
            id="outlined-multiline-static"
            name="desc"
            label="Description"
            multiline
            rows={4}
            required
            fullWidth
            value={values.desc}
            onChange={handleDesc}
          />
        </div>
        <div className={styles.email}>
          <TextField
            id="outlined-required"
            name="email"
            label="Email"
            required
            fullWidth
            value={values.email}
            onChange={handleEmail}
          />
          <p className={styles.emailErr}>{emailError.email}</p>
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
          {values.fName && values.lName && values.desc && values.email ? (
            <Button variant="contained" type="submit">
              Send
            </Button>
          ) : (
            <Button disabled variant="contained" type="submit">
              Send
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Form;
