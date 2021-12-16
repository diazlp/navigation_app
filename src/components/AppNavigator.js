import React from "react";
import { Button, Box, AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "white",
  },
}));

const AppNavigator = () => {
  const classes = useStyle();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} style={{ top: 0 }}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/colorScreen/red" className={classes.link}>
              <Button color="inherit">Red</Button>
            </Link>
            <Link to="/colorScreen/green" className={classes.link}>
              <Button color="inherit">Green</Button>
            </Link>
            <Link to="/colorScreen/blue" className={classes.link}>
              <Button color="inherit">Blue</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default AppNavigator;
