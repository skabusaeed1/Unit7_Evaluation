import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const styles = {
  border: "none",
  padding: "8px 15px",
  color: "white",
  backgroundColor: "red",
  borderRadius: "8px",
  fontSize: "18px",
};

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "40px",
        marginTop: "20px",
        marginLeft: "20px",
      }}
    >
      <Link to="/">
        <Button style={styles}>Home</Button>
      </Link>
      <Link to="/signup">
        <Button style={styles}>Signup</Button>
      </Link>
      <Link to="/login">
        <Button style={styles}>Login</Button>
      </Link>
    </div>
  );
}

export default Navbar;
