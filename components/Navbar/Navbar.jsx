import React from 'react'
import { Nav } from 'react-bootstrap';
import Link from 'next/link'

import {
  AppBar,
  Container,
  Grid,
  Hidden,
  IconButton,
  Toolbar,
  useTheme,
  useMediaQuery,
  Button,
  Typography,
} from '@material-ui/core';
import clsx from 'classnames';
import useStyles from './Navbar.style.ts';

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  /** If the navigation bar should enable shrink mode */
  const shouldShrink = useMediaQuery(theme.breakpoints.down('md'));
  return (
  <Nav className="navbar navbar-expand-lg">
    <AppBar position="absolute" className={classes.root}>
      <Toolbar>
        <Container className={clsx({ 'no-padding': shouldShrink })}>
          <Grid container alignItems="center">
            <Link href="/">
              <a className="navbar-brand text-black">
                <Typography
                  className={clsx(classes.logoText, 'no-select')}
                  variant="h5"
                >
                  KM | NFT
                </Typography>
              </a>
            </Link>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> */}

            <div className={classes.grow} />
            <Hidden smDown>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link href="/">
                    <a className={clsx(classes.navLink)}>HOME</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/solana">
                    <a className={clsx(classes.navLink)}>SOL NFT</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/ethereum">
                    <a className={clsx(classes.navLink)}>ETH NFT</a>
                  </Link>
                </li>
              </ul>
            </Hidden>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  </Nav>
  )
}