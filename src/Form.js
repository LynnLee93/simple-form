import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import {
  TextField,
  Button,
  Box,
  IconButton,
  LinearProgress,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles((theme) => ({
  root: {},
  btn: {
    display: "flex",
    justifyContent: "flex-end",
  },
  centered: {
    margin: "100px auto",
    width: "600px",
    backgroundColor: "#fcfcfc",
    borderRadius: "10px",
    padding: "20px 50px 40px",
    boxShadow: "1px 4px 10px 1px #aaa",
    fontFamily: "Ubuntu",
    fontWeight: "Bold",
    color: "#484848",
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
  name: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
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
  formTitle: {
    display: "flex",
    justifyContent: "center",
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
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

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
      }, 3000);
    }
  }

  return (
    <div className={styles.centered}>
      {/* uploading form component */}
      {loading && (
        <div className={styles.overlay}>
          <div className={styles.linearBar}>
            <p className={styles.loadingTitle}>Uploading Form</p>
            <LinearProgress />
          </div>
        </div>
      )}

      {submitted && (
        <div className={styles.overlay}>
          <Card
            sx={{
              width: "30%",
              margin: "270px auto",
              borderRadius: "10px",
              boxShadow: "1px 4px 10px 1px #484848",
            }}
          >
            <CardContent>
              <Typography
                className={styles.emailNoticeTitle}
                variant="h6"
                component="div"
                sx={{
                  display: "flex",
                  fontFamily: "Ubuntu",
                  fontWeight: "Bold",
                  color: "#484848",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                Email Sent
                <CloseIcon />
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Ubuntu",
                  color: "#484848",
                  marginTop: "15px",
                }}
              >
                🎉 Email is successfully sent, please check your inbox for the
                form details.
              </Typography>
            </CardContent>
          </Card>
        </div>
      )}

      {/* form component */}
      <div className={styles.formTitle}>
        <h2>Simple Form</h2>
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
