import type { ReactElement } from 'react';

import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { getRoute } from '../../router';
import { formatCardNumber } from '../../utils/formatting';

import useStyles from './DynamicCard.style';

/**
 * The property types which are used by the `DynamicCard` component
 */
export interface DynamicCardProps {
  id: number | string;
  width?: number | string;
  // characterPath: string;
  backgroundPath: string;
  cardOnly?: boolean;
  name?: string;
}

export function DynamicCard({
  id,
  width = 200,
  // characterPath,
  backgroundPath,
  cardOnly = false,
  name = 'Samurai',
}: DynamicCardProps): ReactElement {
  const classes = useStyles({ width });
  const history = useHistory();

  /**
   * A function that handles redirection to the details of a card
   */
  const handleViewCard = () =>
    history.push(getRoute('details').path.replace(':id', id.toString()));

  /**
   * The component that handles the card displaying and layering logic
   */
  const cardDisplay = (
    <Box className={classes.wrapper}>
      {backgroundPath.includes('.jpg') || backgroundPath.includes('.png') ? (
        <img
          src={backgroundPath}
          alt="Background"
          className={classes.background}
        />
      ) : (
        <video autoPlay muted loop playsInline className={classes.background}>
          <source src={backgroundPath} type="video/mp4" />
        </video>
      )}
      {/* <img
        src={characterPath}
        alt="Samurai Character"
        className={classes.character}
      /> */}
    </Box>
  );

  return (
    <Box p={1}>
      {cardOnly ? (
        cardDisplay
      ) : (
        <Paper className={classes.root}>
          {cardDisplay}
          <Box py={1}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item xs={6}>
                <Typography variant="h5">{name}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" className={classes.id}>
                  {formatCardNumber(id)}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleViewCard}
              >
                View Details
              </Button>
            </Grid>
          </Grid>
        </Paper>
      )}
    </Box>
  );
}
