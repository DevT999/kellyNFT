import type { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import type { CreateCSSProperties } from '@material-ui/core/styles/withStyles';

/**
 * A function that generates the effect for a navigation bar link
 *
 * @param theme The theme to use
 * @param enabled If the current navigation link is enabled or not
 *
 * @returns The CSS properties based on the given arguments
 */
const createNavLinkEffect = (
  theme: Theme,
  enabled = true,
): CreateCSSProperties => {
  if (enabled)
    return {
      borderBottom: `2px solid #444749`,
      color: '#444749',
    };
  return {
    borderBottom: '2px solid transparent',
    color: '#555',
  };
};

/**
 * The styles which are used by the `Navbar` component
 */
export default makeStyles((theme) => ({
  button: {
    '&:hover': {
      backgroundColor: 'rgba(17, 25, 40, 0.4)',
      // opacity: 0.9,
    },
    margin: theme.spacing(0, 1),
    backdropFilter: 'blur(12px) saturate(200%)',
    // backgroundColor: 'rgba(17, 25, 40, 0.5)',
    backgroundColor: 'rgba(253, 14, 53, 0.72)',
    borderRadius: 12,
    boxShadow:
      '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    zIndex: 999,
  },
  grow: {
    flexGrow: 1,
  },
  icon: {
    [theme.breakpoints.down('xs')]: {
      height: 35,
      width: 35,
    },
    backgroundImage: `url('/assets/smartBannerIcon.png')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    height: 45,
    width: 45,
  },
  logoText: {
    color: '#000',
    fontWeight: 'bold',
    marginLeft: theme.spacing(1),
    textTransform: 'uppercase',
    textDecoration: 'unset',
    // fontFamily: 'SuperStar',
  },
  logoTextWrapper: {
    textDecoration: 'unset',
  },
  menuIcon: {
    color: 'white',
  },
  navLink: {
    '&:hover': createNavLinkEffect(theme),
    borderBottom: '2px solid transparent',
    color: '#999',
    fontSize: '1rem',
    fontWeight: 'bold',
    margin: theme.spacing(0, 2.5),
    textDecoration: 'none',
    textTransform: 'uppercase',
    transition: theme.transitions.create(['border-bottom', 'color'], {
      duration: theme.transitions.duration.complex,
    }),
  },
  navLinkActive: createNavLinkEffect(theme),
  navLinkDisabled: {
    '&:hover': createNavLinkEffect(theme, false),
    color: '#555',
    cursor: 'not-allowed',
  },
  root: {
    // backgroundColor: theme.palette.common.white,
    backgroundColor: 'white',//'white',
    opacity: 0.8,
    color: '#000',
    boxShadow: 'none',
    height: '113px',
    padding: "0 20px",
    [theme.breakpoints.down('sm')]: {
      height: "193px",
      padding: "0px",
    },
  },
}));
