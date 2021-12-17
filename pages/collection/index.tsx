/* eslint-disable react-hooks/exhaustive-deps */

import Head from "next/head";
import { useEffect, useState } from "react";

import { Box, Grid, Paper } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import ReactLoading from 'react-loading';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import useCandyMachine from "../../hooks/useCandyMachine";
import useWalletBalance from "../../hooks/useWalletBalance";
import { useWallet } from "@solana/wallet-adapter-react";
import Layout from '../../components/Layout/layout';
import DetailModal from '../../components/DetailModal';
import { BasicView, DynamicCard, Loading, Title } from '../../components';
import ReactPlayer from "react-player";
import SweetAlert from "react-bootstrap-sweetalert";

import { Toaster } from "react-hot-toast";
import Countdown from "react-countdown";
import useWalletNfts from "../../hooks/useWalletNFTs";
import AnNFT from "../../components/AnNFT/AnNFT";
import NftGrid from "../../components/NftGrid";
import NftCard from "../../components/NftCard";
import useStyles from './Collection.style';
import { motion } from "framer-motion";


const AMOUNT_PER_PAGE = 12;

export default function Collection() {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = useState(-1)
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
    const [playing, setPlaying] = useState(false);
    const [showDetail, setShowDetail] = useState([]);
    const [selectedName, setSelectedName] = useState("");
    const [selectedImg, setSelectedImg] = useState("");
    const [selectedDescription, setSelectedDescription] = useState("");
    const { connected } = useWallet();
  
    const [isMintLive, setIsMintLive] = useState(false);
  
    const paginate = (newDirection: number) => {
      console.log(newDirection);
    };
    console.log("===>", isLoading, nfts)

    const handleOnReady = () => {
      setTimeout(()=>setPlaying(true), 100)
    }

    const hideAlert = (index) => {
      const tmp_details = [...showDetail]
      tmp_details[index] = false;
      setShowDetail(tmp_details)
    }

    const setDetail = (index, name, img, description) => {
      const tmp_details = [...showDetail]
      tmp_details[index] = true;
      setSelectedName(name)
      setSelectedImg(img)
      setSelectedDescription(description)
      setShowDetail(tmp_details)
    }

    const onOk = () => {
      const tmpDetails = [...showDetail];
      tmpDetails[selectedIndex] = false;
      setShowDetail(tmpDetails);
    };
  
    const onClose = () => {
      const tmpDetails = [...showDetail];
      tmpDetails[selectedIndex] = false;
      setShowDetail(tmpDetails);
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
        {/* <Title 
          title='My NFTs' 
          subtitle=""
          maxWidth="lg"
          otherFont
        /> */}
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

        {/* {(
          <DetailModal
            title='NFT'
            img="../cards/1.jpg"
            onOk={onOk}
            onClose={onClose}
          />
        )} */}
        {/* <NftGrid>
          {(nfts as any).map((nft: any, i: number) => {
            return <NftCard key={i} nft={nft} />;
          })}
        </NftGrid> */}    
        <div className="d-flex w-75 flex-column justify-content-center align-items-center" style={{ padding: "30px" }}>
          {!isLoading ?
            // <div className={classes.playerWrapper}>
            //   <ReactPlayer
            //     url={`/mp4/sol.mp4`}
            //     volume={0}
            //     onReady={handleOnReady}
            //     playing={playing}
            //     loop
            //     width="150px"
            //     height="150px"
            //   />
            // </div>
            <div className="d-flex mt-24 flex-column col-lg-12 col-md-12 col-sm-12">
              <Grid container>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <AnNFT 
                    index={0} 
                    onClick={(e:number)=>{setSelectedIndex(e)}} 
                    selectedIndex={selectedIndex} 
                    nft={null} 
                    setDetail={setDetail} 
                    width="100%"
                    cardOnly />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <AnNFT 
                    index={1} 
                    onClick={(e:number)=>{setSelectedIndex(e)}} 
                    selectedIndex={selectedIndex} 
                    nft={null} 
                    setDetail={setDetail} 
                    width="100%"
                    cardOnly />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <AnNFT 
                    index={2} 
                    onClick={(e:number)=>{setSelectedIndex(e)}} 
                    selectedIndex={selectedIndex} 
                    nft={null} 
                    setDetail={setDetail} 
                    width="100%"
                    cardOnly />
                </Grid>
              </Grid>
            </div>
          :
            <div className="d-flex mt-24 flex-column col-lg-12 col-md-12 col-sm-12">
              {(nfts as any).length>0?
              <Grid container>
              {(nfts as any).map((nft: any, i: number) => {
                
                return (
                <Grid key={i} item xs={12} sm={6} md={4} lg={4}>
                  <AnNFT key={i} index={i} onClick={(e:number)=>{setSelectedIndex(e)}} selectedIndex={selectedIndex} nft={nft} setDetail={setDetail} width="100%" cardOnly={false}/>
                  {showDetail[selectedIndex] && (
                    <DetailModal
                      title={selectedName}
                      img={selectedImg}
                      onOk={onOk}
                      onClose={onClose}
                    />
                  )}
                </Grid>)
              })}
              </Grid>
              :
              <div className="nores-box-container">
                <div className="nores-box">
                  <span className="text-lg text-gray-400 tracking-widest">There is no nft collection.</span>
                </div>
              </div>   
              }
            </div>
          }
        </div>
      </Layout>
    );
}