import type { DetailedHTMLProps, ImgHTMLAttributes, ReactElement } from 'react';

import clsx from 'classnames';

import useStyles from './StaticCard.style';

/**
 * The property types which are used by the `StaticCard` component
 */
export interface StaticCardProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  path: string;
  width: number | string;
}

/**
 * A component that displays a static card
 *
 * @param path The path to the card image
 * @param width The width of the element
 *
 * @returns The `StaticCard` component
 */
export function StaticCard({
  path,
  width,
  ...rest
}: StaticCardProps): ReactElement {
  const classes = useStyles({ width });

  return (
    <img
      {...rest}
      src={path}
      alt="Card display"
      className={clsx(classes.root, 'no-select', 'no-drag', rest.className)}
    />
  );
}
