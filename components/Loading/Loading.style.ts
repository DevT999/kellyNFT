import { makeStyles } from '@material-ui/core';

/**
 * The styles which are used by the `Loading` component
 */
export default makeStyles((theme) => ({
  fullScreen: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    // position: 'fixed',
    // width: '100vw',
    // left: 0,
    // [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
    //   top: 48,
    //   height: `calc(100vh - 48px)`,
    // },
    // [theme.breakpoints.up('sm')]: {
    //   top: 64,
    //   height: `calc(100vh - 64px)`,
    // },
    // top: 0,
    // height: '100vh',
    // zIndex: 2,
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  loader: {
    minWidth: 100,
    width: '30vw',
    maxWidth: 300,
    // zIndex: 10,
    zIndex: 2,
    // animation: '$spin 2s linear infinite',
  },
  text: {
    marginTop: theme.spacing(2),
    color: 'black',
  },
  '@keyframes spin': {
    '0%': {
      transform: 'rotateY(0)',
    },
    '100%': {
      transform: 'rotateY(359deg)',
    },
  },
}));
