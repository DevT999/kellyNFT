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
        <div className="flex flex-col w-full items-center">
          <Title title='My NFTs'/>
        </div>
          <div className="flex flex-col w-full">
            <div className="flex mt-3 gap-x-2">
              {(nfts as any).map((nft: any, i: number) => {
                return <AnNFT key={i} nft={nft} />;
              })}
            </div>
          </div>
        {/* </BasicView> */}
      </Layout>
    );
}