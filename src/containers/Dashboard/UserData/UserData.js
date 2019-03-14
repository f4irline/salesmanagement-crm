import React from 'react';
import { Component } from 'react';
import './UserData.css';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import { List, ListItemText, ListItem } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

const styles = {
  listItem: {
    padding: '0.5vh 1vw'
  },
  paper: {
    margin: '1vw',
    padding: '1vw'
  },
  header: {
    margin: '1vh 0.5vw 0 0.5vw',
    padding: '0 0.5vw',
    textTransform: 'uppercase',
    fontWeight: 800
  },
  login: {
    margin: '0 1vw',
    padding: '0 1vw'
  }
};

class UserData extends Component {
  constructor(props) {
    super(props);
    console.log('UserData constructor');

    this.state = {user: props.user, name: props.name, userData: props.userData};
  }

  render() {

    const { classes } = this.props;

    console.log('UserData render');
    return (
      <Grid item xs={12} lg={6} className='UserData'>
        <Typography variant='h2' classes={{root: classes.header}}>
          Hello, {this.state.user.name}
        </Typography>
        <Typography variant="h5" classes={{root: classes.login}}>
          Your last login: {this.state.user.lastLogin}
        </Typography>
        <Paper elevation={5} classes={{root: classes.paper}}>
          <div>
            <List>
              <ListItem classes={{root: classes.listItem}}>
                <Grid item xs={6}>
                  <ListItemText primary={'Hitrate:'}></ListItemText>
                </Grid>
                <Grid item xs={6}>
                  <ListItemText primary={this.state.userData.hit_rate}></ListItemText>
                </Grid>
              </ListItem>
              <Divider variant='middle'/>
              <ListItem classes={{root: classes.listItem}}>
                <Grid item xs={6}>
                  <ListItemText primary={'Average sales:'}></ListItemText>
                </Grid>
                <Grid item xs={6}>
                  <ListItemText primary={this.state.userData.avg_sales}></ListItemText>
                </Grid>
              </ListItem>
              <Divider variant='middle'/>
              <ListItem classes={{root: classes.listItem}}>
                <Grid item xs={6}>
                  <ListItemText primary={'Total sales:'}></ListItemText>
                </Grid>
                <Grid item xs={6}>
                  <ListItemText primary={this.state.userData.total_sales}></ListItemText>
                </Grid>
              </ListItem>
              <Divider variant='middle'/>
              <ListItem classes={{root: classes.listItem}}>
                <Grid item xs={6}>
                  <ListItemText primary={'Contacts amount:'}></ListItemText>
                </Grid>
                <Grid item xs={6}>
                  <ListItemText primary={this.state.userData.contacts_amount}></ListItemText>
                </Grid>
              </ListItem>
              <Divider variant='middle'/>
              <ListItem classes={{root: classes.listItem}}>
                <Grid item xs={6}>
                  <ListItemText primary={'Meetings amount:'}></ListItemText>
                </Grid>
                <Grid item xs={6}>
                  <ListItemText primary={this.state.userData.meetings_amount}></ListItemText>
                </Grid>
              </ListItem>
              <Divider variant='middle'/>
              <ListItem classes={{root: classes.listItem}}>
                <Grid item xs={6}>
                  <ListItemText primary={'Offers amount:'}></ListItemText>
                </Grid>
                <Grid item xs={6}>
                  <ListItemText primary={this.state.userData.offers_amount}></ListItemText>
                </Grid>
              </ListItem>
              <Divider variant='middle'/>
              <ListItem classes={{root: classes.listItem}}>
                <Grid item xs={6}>
                  <ListItemText primary={'Deals amount:'}></ListItemText>
                </Grid>
                <Grid item xs={6}>
                  <ListItemText primary={this.state.userData.deals_amount}></ListItemText>
                </Grid>
              </ListItem>
              <Divider variant='middle'/>
              <ListItem classes={{root: classes.listItem}}>
                <Grid item xs={6}>
                  <ListItemText primary={'Goal:'}></ListItemText>
                </Grid>
                <Grid item xs={6}>
                  <ListItemText primary={this.state.userData.goal}></ListItemText>
                </Grid>
              </ListItem>
            </List>
          </div>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(UserData);