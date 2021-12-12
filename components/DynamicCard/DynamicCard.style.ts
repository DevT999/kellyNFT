import { makeStyles } from '@material-ui/core';

import { CARD_ASPECT_RATIO } from '../../constants/variables';

/**
 * The accepted properties of the styles which are used by the `DynamicCard` component
 */
interface StyleProps {
  width: number | string;
}

/**
 * The styles which are used by the `DynamicCard` component
 */
export default makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1.5),
  },
  wrapper: {
    position: 'relative',
    height: (props: StyleProps) =>
      `calc(${props.width} * ${CARD_ASPECT_RATIO})`,
    [theme.breakpoints.down('xs')]: {
      height: (props: StyleProps) => `calc(${props.width} * 0.5)`,
    },
    width: (props: StyleProps) => props.width,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: 'inherit',
    height: 'inherit',
    pointerEvents: 'none',
  },
  specialty: {
    width: 20,
    height: 20,
    '&:not(:last-of-type)': {
      marginRight: theme.spacing(0.5),
    },
  },
  character: {
    position: 'absolute',
    width: 'inherit',
    height: '100%',
    zIndex: 2,
  },
  id: {
    textAlign: 'right',
  },
  currency: {
    width: 20,
    height: 20,
  },
  price: {
    textAlign: 'right',
    marginRight: theme.spacing(0.5),
  },
  button: {
    '&:hover': {
      backgroundColor: 'rgba(17, 25, 40, 0.4)',
    },
    fontSize: '1.5em',
    backdropFilter: 'blur(12px) saturate(200%)',
    backgroundColor: 'rgba(253, 14, 53, 0.72)',
    borderRadius: 12,
    boxShadow:
      '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
  },
}));
