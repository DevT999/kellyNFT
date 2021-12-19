import React, { useEffect, useState, createContext } from "react";
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
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import clsx from 'classnames';
import useStyles from './Topbar.style.ts';
// import { WalletMultiButton } from '../wallet-adapter-react-ui';
import Wallet from "../WalletButton/Wallet";

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as walletAction from '../../redux/actions/Wallet';

//  crate a createContext for passing state data in every component
export const checkWalletDetails = createContext();

function Topbar({...props}) {
  const classes = useStyles();
  const theme = useTheme();
  const { connected } = useWallet();
  
  /** If the navigation bar should enable shrink mode */
  const shouldShrink = useMediaQuery(theme.breakpoints.down('lg'));

  const [isSolana, setIsSolana] = useState();
  const [walletAddress, setWalletAddress] = useState({
    publicKey: "",
    loading: true,
    error: null,
    message: "",
  });

  //solana check in window
  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;
      
      if (solana) {
        if (solana.isPhantom) {
          setIsSolana(solana);
          const response = await solana.connect({ onlyIfTrusted: true });
          console.log("response.publicKey.toString()====>", response.publicKey.toString())
          props.walletAction.setKey(response.publicKey.toString());
          // set values in state
          setWalletAddress({
            ...walletAddress,
            publicKey: response.publicKey.toString(),
            loading: false,
            message: "Phantom wallet is found",
          });
        }
      }
    } catch (error) {
      // set values in state
      setWalletAddress({
        ...walletAddress,
        loading: true,
        message: "Phantom wallet is not found",
        error: error.message,
      });
    }
  };

  var walletButton = document.querySelector("#__next > div > header > div > div > ul > li > button")
    if (walletButton) {
      walletButton.innerHTML = 'CONNECT WALLET'
      walletButton.style.backgroundColor = 'rgb(208, 20, 138)'
      walletButton.style.border = '0.2rem solid black'
    }
  var walletButtonAfter = document.querySelector("#__next > div > header > div > div > ul > li > div > button") 
  if (walletButtonAfter) {
    walletButtonAfter.style.backgroundColor = 'rgb(208, 20, 138)'
    walletButtonAfter.style.border = '0.2rem solid black'
  }

  if (connected && walletButton) {
    walletButton.style.display = 'none'
  }

  useEffect(() => {
    // var walletButton = document.getElementsByClassName("wallet_button")
    // walletButton.innerText = 'CONNECT WALLET'
    // walletButton.innerHTML = 'CONNECT WALLET'
    // var walletButton = document.querySelector("#__next > div:nth-child(2) > header > div > div > ul > li > button")
    // if (walletButton) {
    //   walletButton.innerHTML = 'CONNECT WALLET'
    //   walletButton.style.backgroundColor = 'rgb(208, 20, 138)'
    // }

    // calling checkIfWalletIsConnected() function for checking solana in window or not
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };

    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
  <Nav className="navbar navbar-expand-lg pt-0 pb-0">
    <AppBar className={classes.root}>
      <Toolbar>
        {/* <Container className={clsx({ 'no-padding': shouldShrink })}> */}
          <Grid container alignItems="center">
            <Link href="/">
              <a className="navbar-brand text-black">
                <Typography
                  className={clsx(classes.logoText, 'no-select')}
                  variant="h5"
                >
                  <div className='flex flex-row items-center'>
                    <img src='img/sol.png'></img>
                    <div className='pl-2 logo-title tracking-wider'>FATEFUL YOUTH</div>
                  </div>
                  <div className='flex flex-row items-center'>
                    <div style={{width: '72px'}}></div>
                    <div className='logo-sub-title bg-black px-2 mb-2'>SOLANA COLLECTION</div>
                  </div>
                </Typography>
              </a>
            </Link>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> */}

            <div className={classes.grow} />
            <Hidden smDown>
              <ul className="navbar-nav mr-auto flex flex-column items-center">
                <li className="nav-item mt-2">
                  {/* <checkWalletDetails.Provider
                    value={{ ...walletAddress, setWalletAddress, isSolana }}
                  >
                    <Wallet />
                  </checkWalletDetails.Provider> */}
                  <WalletMultiButton className='wallet_button' />
                  {/* <WalletMultiButton style={{visibility: connected?'visible':'hidden', background: connected&&'transparent', color: connected&&'black'}}/> */}
                </li>
                <ul className="navbar-nav mr-auto w-100 flex justify-center flex-row py-2">
                  <li className="nav-item pl-2 pr-2">
                    <a
                      href="https://discord.gg/kspUghEFad"
                      target="_blank"
                      rel="noreferrer"
                      className='tracking-widest'
                      style={{fontFamily: 'eurostile-black-italic-italic, sans-serif'}}
                    >
                      DISCORD
                    </a>
                  </li>
                  <li className="nav-item pl-4">
                    <a
                      href="https://twitter.com/fatefulyouth_"
                      target="_blank"
                      rel="noreferrer"
                      className='tracking-widest'
                      style={{fontFamily: 'eurostile-black-italic-italic, sans-serif'}}
                    >
                      TWITTER
                    </a>
                  </li>
                </ul>
              </ul>
            </Hidden>
          </Grid>
        {/* </Container> */}
      </Toolbar>
    </AppBar>
  </Nav>
  )
}

const mapStateToProps = ({wallet})=>({wallet})
const mapDispatchToProps = (dispatch) => ({
  walletAction: bindActionCreators({...walletAction}, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);