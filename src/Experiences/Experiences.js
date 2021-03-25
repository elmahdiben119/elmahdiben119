import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Avatar, Container } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const experiences = {
  'eyefiz': <Avatar alt="Eyefiz Digital" src="https://eyefiz-digital.com/images/logo-eyefiz.png" />,
  'nhs': <Avatar alt="NHS" src="https://nhs.ma/images/logo.png" />,
  'educa': <Avatar>E</Avatar>,
  'ocp': <Avatar alt="OCP" src="https://seeklogo.com/images/O/ocp-logo-4F7287992D-seeklogo.com.png" />,
}

const schools = {
  'f2i': <Avatar alt="Eyefiz Digital" src="https://eyefiz-digital.com/images/logo-eyefiz.png" />,
  'fst': <Avatar alt="NHS" src="https://nhs.ma/images/logo.png" />,
  'isgi': <Avatar>E</Avatar>,
  'men': <Avatar alt="OCP" src="https://seeklogo.com/images/O/ocp-logo-4F7287992D-seeklogo.com.png" />,
}

function Experiences() {
  const classes = useStyles();

  return (
    <Container className="pt-5" maxWidth="lg">
      <Typography variant="overline" color="initial">
        Curious, autonomous, rigorous developer, I like simple, fast and efficient applications.
        A sense of listening and service reinforced by more than a year of experience working on various projects, a technical expertise constantly growing thanks to a perpetual training. Motivated by the need to always do better and supported by solid foundations acquired during my journey, I take pleasure in taking on new challenges.
      </Typography>
      <Divider className="mt-5" />
      <Timeline align="alternate">
        <Typography variant="h4" className="mt-5 mb-3 pb-3" >Experiences</Typography>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              January 2020 - Present
          </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined">
              {experiences.eyefiz}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={2} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Eyefiz Digital
            </Typography>
              <Typography>Laravel Full Stack Developer - Internship</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              Sep 2019 - Oct 2020
          </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined">
              {experiences.nhs}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={2} className={classes.paper}>
              <Typography variant="h6" component="h1">
                NHS Agency
            </Typography>
              <Typography>Laravel Full Stack Developer - Full time</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined">
              {experiences.educa}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={2} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Educa
            </Typography>
              <Typography>Android Developer - Internship</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined">
              {experiences.ocp}
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                OCP SA
            </Typography>
              <Typography>Software Developer - Internship</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>

      <Container maxWidth="sm">
        <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>
          <ListItem button>
            <ListItemIcon>
              {schools.f2i}
            </ListItemIcon>
            <ListItemText primary="Institut F2i" />
            <ListItemText primary="Master 1, Consultant and Web & Mobile Developer" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              {schools.fst}
            </ListItemIcon>
            <ListItemText primary="FST Settat" />
            <ListItemText primary="Bachelor Degree in MIAGE" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              {schools.isgi}
            </ListItemIcon>
            <ListItemText primary="ISGI" />
            <ListItemText primary="Associate Degree" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              {schools.men}
            </ListItemIcon>
            <ListItemText primary="High School Al Azhar" />
            <ListItemText primary="High School Degree" />
          </ListItem>
        </List>
      </Container>

    </Container>
  );
}

export default Experiences;