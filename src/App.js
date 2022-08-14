import React from "react";
import { makeStyles } from "@mui/styles";
import Form from "./component/Form";

const useStyles = makeStyles((theme) => ({
  root: {},
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
}));

function App() {
  const styles = useStyles();
  return (
    <div className="App">
      <div className={styles.centered}>
        <Form />
      </div>
    </div>
  );
}

export default App;
