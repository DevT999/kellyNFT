import type { ReactElement } from 'react';

import { Grid } from '@material-ui/core';

import { StaticCard, StaticCardProps } from '../StaticCard/StaticCard';

import useStyles from './StaticCardDisplay.style';

export interface StaticCardDisplayProps {
  items: [StaticCardProps, StaticCardProps, StaticCardProps];
}

/**
 * A component that displays three cards in a presentational way
 *
 * @param items The list of cards to display
 *
 * @returns The `StaticCardDisplay` component
 */
export function StaticCardDisplay({
  items,
}: StaticCardDisplayProps): ReactElement {
  const classes = useStyles({ items });

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="stretch"
      className={classes.root}
    >
      {items.map((item, index) => (
        <StaticCard
          key={item.path}
          path={item.path}
          width={item.width}
          className={`${classes.card}-${index}`}
        />
      ))}
    </Grid>
  );
}
