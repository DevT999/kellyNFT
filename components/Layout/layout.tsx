import Navbar from '../Navbar/Navbar';
import Topbar from '../Topbar/Topbar';
import Head from "next/head"
import type { ReactElement, ReactNode  } from 'react';
import { CssBaseline, Hidden } from '@material-ui/core';
import Particles from 'react-tsparticles';
import useStyles from './layout.style';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import { PARTICLES_CONFIG } from '../../constants/particles';
import { paths } from '../../constants/particles2';
import React, { useEffect, useState, createContext } from "react";

/**
 * The property types which are used by the `Layout` container
 */


 export interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): ReactElement {
  const classes = useStyles();
  const [reverse, setReverse] = useState(false);

  return (
    <>
      <Head>
        <title>Fateful Youth</title>
        <meta
          name="description"
          content="This is Fateful Youth NFT dapp for SOL."
        />

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
        <link href="https://www.dafontfree.net/embed/ZXVyb3N0aWxlLWJsYWNrLWl0YWxpYy1pdGFsaWMmZGF0YS8yNC9lLzEyMzg0Ni9FVVJPU0JJSS50dGY" rel="stylesheet" type="text/css"/>
        <link rel="icon" href="/img/sol.png" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      {/* <CssBaseline /> */}
      {/* <SocialLinks /> */}
      <Topbar />
      {/* <Topbar /> */}
      <Navbar />
      <main className={classes.root} onClick={() => setReverse(!reverse)}>
        {/* <Particles
          id="particles-js"
          className={classes.particles}
          options={PARTICLES_CONFIG}
        /> */}
        <section className={classes.content}>{children}</section>
      </main>
    </>
  )
}