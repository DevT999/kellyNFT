import type { ReactElement } from 'react';

import { Box, Typography } from '@material-ui/core';
import clsx from 'classnames';

import useStyles from './Loading.style';

/**
 * The property types which are used by the `Loading` component
 */
export interface LoadingProps {
  fullScreen?: boolean;
}

/**
 * A component that displays a loading animation
 *
 * @param fullScreen If the loader should be displayed in full screen
 *
 * @returns The `Loading` component
 */
export function Loading({ fullScreen = true }: LoadingProps): ReactElement {
  const classes = useStyles();

  return (
    <Box
      className={clsx(classes.root, {
        [classes.fullScreen]: fullScreen,
      })}
    >
      <img
        src={`${process.env.PUBLIC_URL}/assets/loading.gif`}
        alt="Art Loader"
        className={classes.loader}
      />
    </Box>
  );
}
