import { makeStyles } from '@material-ui/core';

/**
 * The styles which are used by the `Layout` container
 */
export default makeStyles(() => ({
  content: {
    // position: 'relative',
    // zIndex: 1,
    // minHeight: 'calc(100vh - 2px)',
    paddingTop: 84,
  },
  particles: {
    height: '100%',
    position: 'fixed',
    width: '100%',
    zIndex: 0,
  },
  root: {
    // [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
    //   marginTop: 48,
    //   minHeight: `calc(100vh - 48px)`,
    // },
    // [theme.breakpoints.up('sm')]: {
    //   marginTop: 64,
    //   minHeight: `calc(100vh - 64px)`,
    // },
    // backgroundImage: `url('/assets/wallpaper.gif')`,
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: '100%',
    // marginTop: '-64px',
    // backgroundColor: '#000',
    // paddingTop: 36,
  },
}));
