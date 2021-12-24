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
    display: "flex",
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  particles: {
    height: '100%',
    position: 'fixed',
    width: '100%',
    zIndex: 0,
  },
  root: {
    top: '0px',
    backgroundImage: `url('/img/top.png')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    position: 'fixed',
    width: '100%',
    zIndex: 0,
    overflow: 'auto',
    maxHeight: '100%;',
  },
}));
