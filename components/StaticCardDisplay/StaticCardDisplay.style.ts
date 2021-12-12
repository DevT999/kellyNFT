import { makeStyles, Theme } from '@material-ui/core';
import type { CreateCSSProperties } from '@material-ui/core/styles/withStyles';

import { CARD_ASPECT_RATIO } from '../../constants/variables';
import { StaticCardProps } from '../StaticCard/StaticCard';

/**
 * The property types which are used by the `StaticCardDisplay` style properties
 */
interface StyleProps {
  items: [StaticCardProps, StaticCardProps, StaticCardProps];
}

/**
 * A function that generates the styles for the card items
 *
 * @param theme The theme to use
 * @param props The properties which are passed to the `makeStyles` hook
 *
 * @returns The styles for the cards
 */
const generateCardStyles = (
  theme: Theme,
  props: StyleProps,
): CreateCSSProperties<StyleProps> => {
  const cardRoot: CreateCSSProperties = {
    position: 'absolute',
    transition: theme.transitions.create(['transform', 'filter'], {
      duration: theme.transitions.duration.complex * 1.5,
    }),
  };

  props.items.forEach((item, index) => {
    let offset: string | number = '0';

    if (index === 0) offset = `calc(-${item.width} / 2)`;
    if (index === props.items.length - 1) offset = `calc(${item.width} / 2)`;

    if (index === 1) {
      cardRoot[`&-${index}`] = {
        ...cardRoot,
        zIndex: 2,
      };
    } else {
      cardRoot[`&-${index}`] = {
        ...cardRoot,
        filter: 'blur(6px)',
        transform: `translateX(${offset}) scale(0.8)`,
        '&:hover': {
          filter: 'blur(0)',
          // transform: `translateX(calc(${offset} * 1.75)) scale(1)`,
          transform: `translateX(calc(${offset} * 1.5)) scale(0.9)`,
        },
      };
    }
  });

  return cardRoot;
};

/**
 * The styles which are used by the `StaticCardDisplay` component
 */
export default makeStyles((theme) => ({
  card: (props: StyleProps) => generateCardStyles(theme, props),
  root: {
    height: `calc(20vw * ${CARD_ASPECT_RATIO})`,
    maxHeight: 400 * CARD_ASPECT_RATIO,
    minHeight: 75 * CARD_ASPECT_RATIO,
  },
}));
