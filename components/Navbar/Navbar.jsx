import React from 'react'
import { Nav } from 'react-bootstrap';
import Link from 'next/link'
import { useRouter } from 'next/router'
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
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useEffect, useState } from "react";
import clsx from 'classnames';
import useStyles from './Navbar.style.ts';

export default function Navbar() {
  const router = useRouter();
  const classes = useStyles();
  const theme = useTheme();
  const [isPurchase, setPurchase] = useState(true);
  const [isCollect, setCollect] = useState(false);
  /** If the navigation bar should enable shrink mode */
  const shouldShrink = useMediaQuery(theme.breakpoints.down('md'));
  return (
      <ul className="navbar-nav mr-auto flex items-center flex-row absolute z-20" style={{top: '113px'}}>
        <li className={["nav-item active", clsx(classes.link)].join(" ")} style={{backgroundColor: router.pathname=='/'?'rgb(75, 20, 77)':'rgb(140, 94, 124)'}}>
          <Link href="/">
            <a className={clsx(classes.navLink)} style={{color: router.pathname=='/'?'white':'rgb(174, 159, 169)'}}>PURCHASE</a>
          </Link>
        </li>
        <li className={["nav-item", clsx(classes.link)].join(" ")} style={{backgroundColor: router.pathname=='/collection'?'rgb(75, 20, 77)':'rgb(140, 94, 124)'}}>
          <Link href="/collection" >
            <a className={clsx(classes.navLink)} style={{color: router.pathname=='/collection'?'white':'rgb(174, 159, 169)'}}>COLLECTION</a>
          </Link>
        </li>
      </ul>
  )
}