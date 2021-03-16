import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Avatar } from '@material-ui/core';
import mypic from './assets/images/elmahdibenbrahim.jpg';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Experiences from './Experiences/Experiences';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Brightness4TwoToneIcon from '@material-ui/icons/Brightness4TwoTone';

const obj = {
  firstName: "El Mahdi",
  lastName: "Benbrahim",
  age: 22,
  position: "Laravel Developer",
  email: "benbrahim.elmahdi@gmail.com",
  phone: "+33769242104",
};

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#000000',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="default">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Avatar alt={obj.firstName + ' ' + obj.lastName} src={mypic} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {obj.firstName + ' ' + obj.lastName}
          </Typography>
          <FormControlLabel
            control={<IOSSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />}
            label={<Brightness4TwoToneIcon />}
          />
        </Toolbar>
      </AppBar>
      <CssBaseline />
      <Container maxWidth="md">
        <Experiences></Experiences>
      </Container>
    </div>
  );
}

export default App;