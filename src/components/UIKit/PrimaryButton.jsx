import React from 'react';
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  "button": {
    backgroundColor: "#3399FF",
    color: "#000",
    fontSize: 16,
    height: 48,
    marginButton: 16,
    width: 256,
  }
})

const PrimaryButton = (props) => {

  const classes = useStyles()

  return (
    <div>
      <Button className={classes.button} variant="contained" onClick={() => props.onClick()}>
        {props.label}
      </Button>
    </div>
  );
};

export default PrimaryButton;
