import type {
  ReactElement,
  ReactNode,
  DetailedHTMLProps,
  HTMLAttributes,
} from 'react';

import { Box, Container, Grid, Typography } from '@material-ui/core';
import clsx from 'classnames';

import useStyles from './BasicView.style';

/**
 * The property types which are used by the `BasicView` component
 */
interface MultiLine {
  text: string;
}

export interface BasicViewProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  title: string;
  subtitle?: string;
  children: ReactNode;
  otherFont?: false | true;
  maxWidth?: false | 'md' | 'xs' | 'sm' | 'lg' | 'xl' | undefined;
  mobileMultiLine?: string[];
}

/**
 * A component that creates a basic view for the client
 *
 * @param title     The title to display in the view
 * @param subtitle  The subtitle to display in the view
 * @param children  The items to display in the view
 *
 * @returns The `BasicView` component
 */
export function BasicView({
  children,
  subtitle,
  title,
  maxWidth,
  otherFont,
  mobileMultiLine,
  ...rest
}: BasicViewProps): ReactElement {
  const classes = useStyles();

  const generalTitleComponent = (
    <svg
      height="100"
      stroke="black"
      strokeWidth="2"
      className="text-line"
      width="100%"
    >
      <text x="50%" dominantBaseline="middle" textAnchor="middle" y="50%">
        {title}
      </text>
    </svg>
  );

  return (
    <article {...rest} className={classes.root}>
      <Container maxWidth={maxWidth}>
        <Grid container justifyContent="center" direction="column">
          <Grid item xs={12}>
            <Typography
              variant="h2"
              className={clsx({
                [classes.title]: true,
                [classes.superStarFont]: otherFont,
              })}
            >
              <Box sx={{ display: { sm: 'block', lg: 'none', md: 'none' } }}>
                {mobileMultiLine
                  ? mobileMultiLine.map((line) => (
                      <svg
                        height="50"
                        stroke="black"
                        strokeWidth="2"
                        className="text-line mobileText"
                        width="75%"
                      >
                        <text
                          x="50%"
                          dominantBaseline="middle"
                          textAnchor="middle"
                          y="50%"
                        >
                          {line}
                        </text>
                      </svg>
                    ))
                  : generalTitleComponent}
              </Box>
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                {generalTitleComponent}
              </Box>
            </Typography>
            {subtitle && (
              <Typography variant="h4" className={classes.subtitle}>
                {subtitle}
              </Typography>
            )}
          </Grid>
          <Box my={3} />
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </article>
  );
}

/**
 * The default property values which are used by the `BasicView` component
 */
BasicView.defaultProps = {
  subtitle: undefined,
  maxWidth: 'md',
};
