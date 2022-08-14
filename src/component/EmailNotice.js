import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles((theme) => ({
  root: {},
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

function EmailNotice(props) {
  const styles = useStyles();

  return (
    <div>
      {props.onSubmit && (
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
                <IconButton>
                  <CloseIcon />
                </IconButton>
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
    </div>
  );
}

export default EmailNotice;
