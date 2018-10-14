import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MediaCard from './MediaCard.js';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Top Companies</Paper>
        </Grid>
        
        <Grid item xs={3}>
          <MediaCard>
          </MediaCard>
        </Grid>
        <Grid item xs={3}>
          <MediaCard>
          </MediaCard>
        </Grid>
        <Grid item xs={3}>
          <MediaCard>
          </MediaCard>
        </Grid>
        <Grid item xs={3}>
          <MediaCard>
          </MediaCard>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);