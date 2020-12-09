import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  button: {
    borderRadius: 10,
    backgroundColor: "#3399FF",
    color: "#FFFFFF",
    fontSize: 16,
    height: 48,
    marginButton: 16,
    width: 256,
  },
});

const PrimaryButton = ({ label, onClick }) => {
  const classes = useStyles();

  return (
    <div>
      <Button
        className={classes.button}
        variant="contained"
        onClick={() => onClick()}
      >
        {label}
      </Button>
    </div>
  );
};

export default PrimaryButton;
