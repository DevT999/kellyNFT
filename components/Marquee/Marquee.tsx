import type { ReactElement } from 'react';

import { Box, Typography } from '@material-ui/core';
import clsx from 'classnames';

/**
 * The property types which are used by the `Marquee` component
 */
export interface MarqueeProps {
  title: string;
}

/**
 * A component that displays a loading animation
 *
 * @param fullScreen If the loader should be displayed in full screen
 *
 * @returns The `Marquee` component
 */
export function Marquee({ title }: MarqueeProps): ReactElement {
  
  return (
    <p className="marquee">
      <span>
          {title}
      </span>
   </p>
  );
}
