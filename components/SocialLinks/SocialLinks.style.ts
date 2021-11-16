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
      borderBottom: `2px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
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
    margin: theme.spacing(0, 1),
    backgroundColor: '#444749',
    backgroundImage: 'linear-gradient(315deg, #444749 0%, #444749 74%)',
    border: '0.1rem solid white',
  },
  grow: {
    flexGrow: 1,
  },
  icon: {
    [theme.breakpoints.down('xs')]: {
      height: 35,
      width: 35,
    },
    backgroundImage: `url('/assets/logo.jpg')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    height: 45,
    width: 45,
  },
  logoText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: theme.spacing(1),
    textTransform: 'uppercase',
  },
  menuIcon: {
    color: theme.palette.text.primary,
  },
  navLink: {
    '&:hover': createNavLinkEffect(theme),
    borderBottom: '2px solid transparent',
    color: 'white',
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
    backgroundColor: '#1d2327',
    backgroundImage: 'linear-gradient(315deg, #1d2327 0%, #1d2327 74%)',
    color: 'white',
    boxShadow: 'none',
    height: 36,
  },
  links: {
    textAlign: 'right',
    width: '100%',
    '& a': {
      color: '#000',
      marginRight: '11px',
    },
  },
  toolbar: {
    minHeight: 40,
  },
  mediumIcon: {
    textDecoration: 'unset',
  },
}));
