import React from 'react';
import { Avatar, Container } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
/* import { Test } from './Educations.styles'; */

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const schools = {
  'f2i': <Avatar alt="Institut F2i" src="https://media-exp1.licdn.com/dms/image/C560BAQFFauEIAIjyTg/company-logo_100_100/0/1519867457176?e=1625097600&v=beta&t=hTiv-mZ2LvLMTz8y6Dl7M5OaZJUPNSmCt688CGtB4aA" />,
  'fst': <Avatar alt="FST" src="https://media-exp1.licdn.com/dms/image/C4D0BAQFbX1a43x8z5w/company-logo_100_100/0/1574962028635?e=1625097600&v=beta&t=clOPYArAyDUYmGgyRYURBp5y696rQF2f_1jBr9fNz4A" />,
  'isgi': <Avatar alt="ISGI">ISGI</Avatar>,
  'men': <Avatar alt="Al Azhar">Azhar</Avatar>,
}

function Educations() {
  const classes = useStyles();
  return (
    <Container className="pt-5 " maxWidth="sm">
      <Typography variant="h4" className="mt-5 mx-auto mb-3 pb-3" >Educations</Typography>
      <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>
        <ListItem button>
          <ListItemIcon>
            {schools.f2i}
          </ListItemIcon>
          <ListItemText primary="Institut F2i - Master II, Digital Expert - Web Architect" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            {schools.f2i}
          </ListItemIcon>
          <ListItemText primary="Institut F2i - Master I, Consultant Web & Mobile Developer" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            {schools.fst}
          </ListItemIcon>
          <ListItemText primary="FST Settat - Bachelor Degree in MIAGE" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            {schools.isgi}
          </ListItemIcon>
          <ListItemText primary="ISGI - Associate Degree" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            {schools.men}
          </ListItemIcon>
          <ListItemText primary="High School Al Azhar - High school diploma" />
        </ListItem>
      </List>
    </Container>
  );
}

export default Educations;
