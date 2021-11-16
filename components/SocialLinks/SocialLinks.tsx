import { ReactElement } from 'react';

import { AppBar, Container, Grid, Toolbar, Box } from '@material-ui/core';
// import GitHubIcon from '@material-ui/icons/GitHub';
import Facebook from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
// import RedditIcon from '@material-ui/icons/Reddit';
// import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedIn from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

import useStyles from './SocialLinks.style';

/**
 * A component that handles user navigation at the top of the screen
 *
 * @returns The `Navbar` component
 */
export function SocialLinks(): ReactElement {
  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Container>
          <Grid container>
            <Box className={classes.links} alignItems="right">
              <a
                href="https://instagram.com/artbasel"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon style={{ fill: 'white' }} />
              </a>
              <a
                href="https://www.facebook.com/artbasel"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook style={{ fill: 'white' }} />
              </a>
              <a
                href="https://twitter.com/ArtBasel"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon style={{ fill: 'white' }} />
              </a>
              <a
                href="https://www.linkedin.com/company/art-basel"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIn style={{ fill: 'white' }} />
              </a>
              {/* <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.reddit.com/r/RisingSunToken"
                target="_blank"
                rel="noreferrer"
              >
                <RedditIcon />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <GitHubIcon />
              </a> */}
            </Box>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
