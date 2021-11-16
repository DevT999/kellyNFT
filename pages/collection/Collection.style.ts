import { makeStyles } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

/**
 * The styles which are used by the `Details` view
 */
export default makeStyles((theme) => ({
  attributeIcon: {
    width: 50,
    marginRight: theme.spacing(1),
  },
  attributesItem: {
    fontSize: '1rem',
    '& *': {
      textTransform: 'capitalize',
    },
    marginBottom: theme.spacing(0.8),
  },
  attributeTitle: {
    textAlign: 'left',
    fontWeight: 500,
  },
  attributeDescription: {
    textAlign: 'right',
    fontWeight: 600,
  },
  attributeRare: {
    color: purple[700],
  },
  attributeUnavailable: {
    opacity: 0.5,
  },
  number: {
    fontWeight: 'bold',
    fontSize: '1.8rem',
    opacity: 0.4,
    fontStyle: 'italic',
  },
  fullScreen: {
    minHeight: '100vh',
  },
}));
