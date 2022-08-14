import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { TextField, Button, IconButton, Box } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Header from "./Header";
import EmailNotice from "./EmailNotice";
import ProgressBar from "./ProgressBar";

const useStyles = makeStyles((theme) => ({
  root: {},
  btn: {
    display: "flex",
    justifyContent: "flex-end",
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
}));

function Form() {
  const styles = useStyles();
  const [values, setValues] = useState({
    fName: "",
    lName: "",
    desc: "",
    email: "",
  });

  // email validation
  const [emailError, setEmailError] = useState(null);

  // uoload image
  const [selectedImg, setSelectedImg] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  // uploading form
  const [loading, setLoading] = useState(false);
  const timer = React.useRef();

  // email sent pop-up
  const [submitted, setSubmitted] = useState(false);

  // create img url for selected img
  useEffect(() => {
    if (selectedImg) {
      setImageUrl(URL.createObjectURL(selectedImg));
    }
  }, [selectedImg]);

  function handleFName(e) {
    setValues({ ...values, fName: e.target.value });
  }

  function handleLName(e) {
    setValues({ ...values, lName: e.target.value });
  }

  function handleDesc(e) {
    setValues({ ...values, desc: e.target.value });
  }

  function isValidEmail(values) {
    const email = values;
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email);
  }

  function handleEmail(e) {
    if (!isValidEmail(e.target.value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError(null);
    }
    setValues({ ...values, email: e.target.value });
  }

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!loading) {
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 2000);
      handleClear();
    }
  }

  // after submission, input will be cleared
  function handleClear() {
    setValues({ fName: "", lName: "", desc: "", email: "" });
    setImageUrl("");
  }

  return (
    <>
      {/* uploading form component */}
      <ProgressBar onLoad={loading} />
      {/* prompt email is sent notice */}
      <EmailNotice onSubmit={submitted} />

      {/* form component */}
      <Header />
      <form className={styles.container} onSubmit={handleSubmit}>
        <div className={styles.name}>
          <TextField
            id="outlined-required"
            name="firstName"
            label="First Name"
            value={values.fName}
            onChange={handleFName}
          />
          <TextField
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
            fullWidth
            value={values.email}
            onChange={handleEmail}
          />
          {emailError && <p className={styles.emailErr}>{emailError}</p>}
        </div>

        {/* preview image */}
        {imageUrl && selectedImg && (
          <Box mt={2} textAlign="start">
            <img src={imageUrl} alt={selectedImg} height="200px" />
          </Box>
        )}

        <div className={styles.btn}>
          <IconButton
            htmlFor="select-img"
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input
              hidden
              id="select-img"
              accept="image/*"
              type="file"
              onChange={(e) => setSelectedImg(e.target.files[0])}
            />
            <AddPhotoAlternateIcon />
          </IconButton>
          {values.fName &&
          values.lName &&
          values.desc &&
          values.email &&
          !emailError ? (
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
    </>
  );
}

export default Form;
