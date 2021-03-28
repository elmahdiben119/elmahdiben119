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

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const experiences = {
  'eyefiz': <Avatar alt="Eyefiz Digital" src="https://media-exp1.licdn.com/dms/image/C560BAQEybmFyeyJBmg/company-logo_100_100/0/1608041019999?e=1625097600&v=beta&t=HVwsYO3LfV6XDbalEt9iLqS1x8bsxvJumA6gEnAeXbc" />,
  'nhs': <Avatar alt="NHS" src="https://media-exp1.licdn.com/dms/image/C4D0BAQHYiU3HFNkPuA/company-logo_100_100/0/1609356803136?e=1625097600&v=beta&t=HfXM6K-KJeROcfPES-gg0dXWlGzIucag0qmhTntnt38" />,
  'educa': <Avatar>E</Avatar>,
  'ocp': <Avatar alt="OCP" src="https://media-exp1.licdn.com/dms/image/C4E0BAQFmRldoOZ_TNQ/company-logo_100_100/0/1519904254247?e=1625097600&v=beta&t=wCx5_HQ2UTKG4OyjdnYJUEYPm1qalhjLGBCn6LGpAhI" />,
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
            <Paper elevation={1} className={classes.paper}>
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
            <Paper elevation={1} className={classes.paper}>
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
            <Paper elevation={1} className={classes.paper}>
              <Typography variant="h6" component="h1">
                OCP SA
            </Typography>
              <Typography>Software Developer - Internship</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
}

export default Experiences;