import Navbar from '../Navbar/Navbar';
import type { ReactElement, ReactNode  } from 'react';
import { useState } from 'react';
import { CssBaseline, Hidden } from '@material-ui/core';
import Particles from 'react-tsparticles';
import useStyles from './layout.style';
import { SocialLinks } from '../SocialLinks/SocialLinks';
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
      <SocialLinks />
      <Navbar />
      <main className={classes.root} onClick={() => setReverse(!reverse)}>
        <Particles
          id="particles-js"
          className={classes.particles}
          options={PARTICLES_CONFIG}
        />
        <section className={classes.content}>{children}</section>
      </main>
    </>
  )
}