import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
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

  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

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

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email);
  }

  function handleEmail(e) {
    if (!isValidEmail(e.target.value)) {
      setError("Invalid email format");
    } else {
      setError(null);
    }
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className={styles.centered}>
      <div className={styles.title}>
        <h3>Simple Form</h3>
      </div>
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
            value={email}
            onChange={handleEmail}
          />
          {error && <p className={styles.emailErr}>{error}</p>}
        </div>

        {imageUrl && selectedImg && (
          <Box mt={2} textAlign="start">
            <img src={imageUrl} alt={selectedImg.name} height="200px" />
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
          {values.fName && values.lName && values.desc && email && !error ? (
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
