import React from "react";
import styles from "./LoginHeader.module.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const LoginHeader: React.FC = ({}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };

  return (
    <header className={styles.header}>
      <h1>Just The Freakin Recipes</h1>
      <div className={styles.spacer}></div>
      <Button
        className={styles.loginbutton}
        variant="contained"
        onClick={handleClick}
      >
        Login
      </Button>
    </header>
  );
};

export default LoginHeader;
