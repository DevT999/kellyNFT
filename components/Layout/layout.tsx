import Navbar from '../Navbar/Navbar'
import type { ReactElement, ReactNode  } from 'react';
import { useState } from 'react';
import { CssBaseline, Hidden } from '@material-ui/core';
import Particles from 'react-tsparticles';
import useStyles from './layout.style';

import { PARTICLES_CONFIG } from '../../constants/particles';
import { paths } from '../../constants/particles2';
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
      <CssBaseline />
      <Navbar />
      <main className={classes.root} onClick={() => setReverse(!reverse)}>
        {/* <Particles
          id="particles-js"
          className={classes.particles}
          options={PARTICLES_CONFIG}
        />
        <section className={classes.content}>{children}</section> */}
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        clip-path="url(#clip)"
        className={[classes.particles, reverse ? "reverse" : ""].join(" ")}
        style={{zIndex: -10, position: 'absolute'}}
        >
          <defs>
            <clipPath id="clip" clipPathUnits="objectBoundingBox">
              <rect x="0" y="0" width="400" height="400" />
            </clipPath>
          </defs>
          {paths.map((path: any, index: number) => (
            <g
              key={index}
              className={
                !reverse ? ` cl-${index}  reverse` : `cl-${index}  initial`
              }
            >
              {path}
            </g>
          ))}
        </svg>
        <section className={classes.content}>{children}</section>
      </main>
    </>
  )
}