import { makeStyles } from '@material-ui/core';

/**
 * The accepted properties of the styles which are used by the `StaticCard` component
 */
interface StyleProps {
  width: number | string;
}

/**
 * The styles which are used by the `StaticCard` component
 */
export default makeStyles((theme) => ({
  root: {
    height: 'auto',
    // maxWidth: 800,
    minWidth: 75,
    width: (props: StyleProps) => props.width,
    [theme.breakpoints.up('md')]: {
      maxWidth: '30vw',
    },
  },
}));
