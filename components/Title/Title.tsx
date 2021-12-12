import type {
  ReactElement,
  ReactNode,
  DetailedHTMLProps,
  HTMLAttributes,
} from 'react';

import { Box, Container, Grid, Typography } from '@material-ui/core';
import useStyles from './Title.style';
import clsx from 'classnames';

export interface TitleProps {
  title: string;
  subtitle?: string;
  otherFont?: false | true;
  maxWidth?: false | 'md' | 'xs' | 'sm' | 'lg' | 'xl' | undefined;
  mobileMultiLine?: string[];
}

export function Title({ 
  subtitle,
  title,
  maxWidth,
  otherFont,
  mobileMultiLine,
  ...rest }: TitleProps): ReactElement{
  const classes = useStyles();
  
  return (
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
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
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
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
