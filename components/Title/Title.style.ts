import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1, 0),
    },
    padding: theme.spacing(5, 0),
  },
  subtitle: {
    color: grey[400],
    // fontSize: '2.2rem',
    textAlign: 'center',
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem',
    },
    color: theme.palette.common.black,
    textAlign: 'center',
    wordWrap: 'break-word',
  },
  superStarFont: {
    fontFamily: 'Helvetica',
  },
  mobileText: {
    fontSize: '1.2em',
  },
}));
