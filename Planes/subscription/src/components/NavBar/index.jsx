import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import AppBar from './../elements/AppBar';
import Toolbar, { styles as toolbarStyles } from './../elements/ToolBar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  title: {
    fontSize: 24,
    color: theme.palette.common.white,
    underline: 'none'
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    backgroundColor: '#282c34',
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left}>
          <Link to="/" >
          <Typography className={classes.title} variant="h6" component="h2">{'T E K  -  R I S K'}</Typography>
          </Link>
          </div>
          <div className={classes.right}>
            <Link
              className={classes.rightLink}
              to="/signIn"
            >
              {'Sign In'}
            </Link>
            <Link
              className={clsx(classes.rightLink, classes.linkSecondary)}
              to="/subs"
            >
              {'Sign Up'}
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);