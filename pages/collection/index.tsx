/* eslint-disable react-hooks/exhaustive-deps */

import Head from "next/head";
import { useEffect, useState } from "react";

import { Box, Grid, Paper } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import useCandyMachine from "../../hooks/useCandyMachine";
import useWalletBalance from "../../hooks/useWalletBalance";
import { useWallet } from "@solana/wallet-adapter-react";
import Layout from '../../components/Layout/layout';
import { BasicView, DynamicCard, Loading, Title } from '../../components';
import { Toaster } from "react-hot-toast";
import Countdown from "react-countdown";
import useWalletNfts from "../../hooks/useWalletNFTs";
import AnNFT from "../../components/AnNFT/AnNFT";
import useStyles from './Collection.style';
import { motion } from "framer-motion";

const AMOUNT_PER_PAGE = 12;

export default function Collection() {
    const classes = useStyles();

    const [balance] = useWalletBalance();
    const {
      isSoldOut,
      mintStartDate,
      isMinting,
      startMint,
      startMintMultiple,
      nftsData,
    } = useCandyMachine();
  
    const [isLoading, nfts] = useWalletNfts();
  
    const { connected } = useWallet();
  
    const [isMintLive, setIsMintLive] = useState(false);
  
    const paginate = (newDirection: number) => {
      console.log(newDirection);
    };
  
    useEffect(() => {
      if (new Date(mintStartDate).getTime() < Date.now()) {
        setIsMintLive(true);
      }
    }, []);
  
    return (
      <Layout>
        {/* <BasicView
          title="My NFTs"
          subtitle=""
          maxWidth="lg"
          otherFont
          className={classes.fullScreen}
        > */}
        <Title 
          title='My NFTs' 
          subtitle=""
          maxWidth="lg"
          otherFont
        />
        <div className="hidden" id="story">
          <div className="story">
            <div data-aos="fade-right" className="crowncontainer aos-init aos-animate">				
              <div className="theCrown">
                <img className="shiner" id="shine1" src="../cards/1.jpg"/>
                <img className="shiner" id="shine2" src="../cards/2.jpg"/>
                <img className="shiner" id="shine3" src="../cards/3.jpg"/>
                <img className="shiner" id="shine4" src="../cards/7.png"/>
                <img className="shiner" id="shine5" src="../cards/8.png"/>
                <img className="shiner" id="shine6" src="../cards/9.png"/>
                <img className="crownImage" src="../cards/10.jpg"/>			
              </div>
            </div>
            <div data-aos="fade-left" className="cardinfo aos-init aos-animate">					
              <h2>Solomons Story</h2>
              <p>Once a righteous and wise king</p>
            </div>
          </div>
        </div>

        <div className="hidden" id="event">
          <div className="event">
            <div data-aos="fade-right" className="eventInfo aos-init aos-animate">					
              <h2>Here are my NFT collections.</h2>
              <p>As a collective NFT experience.</p>
            </div>
            <div data-aos="fade-left" className="eventPhotos aos-init aos-animate">
              <img src="./cards/7.png" id="grafitti1"/>
              <img src="../cards/8.png" id="grafitti2"/>
              <img src="../cards/9.png" id="grafitti3"/>				
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full items-center">
          <div className="flex flex-col w-full">
            <div className="flex mt-3 gap-x-2">
              {(nfts as any).map((nft: any, i: number) => {
                return <AnNFT key={i} nft={nft} />;
              })}
            </div>
          </div>
        </div>
      </Layout>
    );
}