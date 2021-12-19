/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getSortedPostsData } from "../lib/posts";
import Navbar from "../components/Navbar/Navbar";
import Layout from "../components/Layout/layout";
import { StaticCardDisplay, Title } from "../components";
import { Marquee } from "../components";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import useCandyMachine from "../hooks/useCandyMachine";
import useWalletBalance from "../hooks/useWalletBalance";
import { useWallet } from "@solana/wallet-adapter-react";
import { Toaster } from "react-hot-toast";
import Countdown from "react-countdown";
import useWalletNfts from "../hooks/useWalletNFTs";
import AnNFT from "../components/AnNFT/AnNFT";
import ReactLoading from "react-loading";
import { motion } from "framer-motion";
import { default as Slider, Settings, CustomArrowProps } from "react-slick";
import ReactTooltip from "react-tooltip";

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as walletAction from '../redux/actions/Wallet';

import {
  Box,
  Button,
  Divider,
  FormControl,
  Paper,
  Typography,
  Grid,
  Portal,
} from "@material-ui/core";

const responsive = {
  desktop: {
    breakpoint: { max: 1000, min: 640 },
    items: 1,
    slidesToSlide: 1,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
    paritialVisibilityGutter: 30,
  },
};
function Home({...props}) {
  
  const defaultSettings: Settings = {
    className: "carousel-body",
    accessibility: true,
    adaptiveHeight: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false,
    centerPadding: "50px",
    cssEase: "ease",
    customPaging: (i: number) => {
      return <button>{i + 1}</button>;
    },
    dots: false,
    dotsClass: "slick-dots",
    draggable: true,
    easing: "linear",
    edgeFriction: 0.35,
    fade: false,
    focusOnSelect: false,
    infinite: true,
    initialSlide: 0,
    lazyLoad: "progressive",
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1000, settings: "unslick" },
      { breakpoint: 2000, settings: { arrows: false } },
    ],
    rtl: false,
    slide: "div",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    swipe: true,
    swipeToSlide: false,
    touchMove: true,
    touchThreshold: 5,
    useCSS: true,
    variableWidth: false,
    vertical: false,
    verticalSwiping: false,
    waitForAnimate: true,
    afterChange: (currentSlide: number) => {},
    beforeChange: (currentSlide: number, nextSlide: number) => {},
    onEdge: (swipeDirection: string) => {},
    onInit: () => {},
    swipeEvent: (swipeDirection: string) => {},
    // nextArrow: <LeftNavArrow />,
    // prevArrow: <RightNavArrow />
  };
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

  const [leftTime, setLeftTime] = useState("")

  const { connected } = useWallet();
//   const [connected, setConnected] = useState(props.wallet.connected);
 
  const [isMintLive, setIsMintLive] = useState(false);

  const paginate = (newDirection: number) => {
    console.log(newDirection);
  };

  useEffect(() => {
    // props.setConnected();
    if (new Date(mintStartDate).getTime() < Date.now()) {
      setIsMintLive(true);
    } else {
      setIsMintLive(false);
    }
    
    // time counter
    const intervalId = setInterval(() => {

      var today = Math.round((new Date()).getTime()/1000)
      var diff = parseInt(process.env.NEXT_PUBLIC_CANDY_START_DATE!, 10) - today;

      var daysDifference = Math.floor(diff/60/60/24);
      diff -= daysDifference*60*60*24

      var hoursDifference = Math.floor(diff/60/60);
      diff -= hoursDifference*60*60

      var minutesDifference = Math.floor(diff/60);
      diff -= minutesDifference*60

      var secondsDifference = Math.floor(diff);

      //  Format Hours
      var hourtext = '00';
      if (hoursDifference > 0){ hourtext = String(hoursDifference);}
      if (hourtext.length == 1){hourtext = '0' + hourtext};

      //  Format Minutes
      var mintext = '00';
      if (minutesDifference > 0){ mintext = String(minutesDifference);}
      if (mintext.length == 1) { mintext = '0' + mintext };

      //  Format Seconds
      var sectext = '00';
      if (secondsDifference > 0) { sectext = String(secondsDifference); }
      if (sectext.length == 1) { sectext = '0' + sectext };

      var time = daysDifference + " : " + hourtext + " : " + mintext + " : " + sectext;
      setLeftTime(time)
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const MintMany = () => {
    const [mintCount, setMintCount] = useState(5);

    return (
      <>
        <button
          onClick={() => startMintMultiple(mintCount)}
          disabled={isMinting}
          className="px-4 py-2 mx-auto font-bold text-white transition-opacity rounded-lg hover:opacity-70 bg-gradient-to-br from-green-300 via-blue-500 to-purple-600"
        >
          {isMinting ? "loading" : `mint ${mintCount}`}
        </button>

        <input
          disabled={isMinting}
          type="number"
          min={2}
          max={10}
          className="px-2 mx-auto mt-5 font-bold text-white bg-gray-500"
          value={mintCount}
          onChange={(e) => setMintCount((e.target as any).value)}
        />
        <p className="mx-auto mt-2">min 2; max 10;</p>
      </>
    );
  };

  const router = useRouter();

  return (
    <Layout>
      <body className="w-100 leading-relaxed tracking-wide flex flex-col bg-transparent">
        <Head>
          {/* <title>MetaEggs.city</title> */}
          <meta name="description" content="NFT Eggs, on solana" />
          <link rel="icon" href="/img/sol.png" />
          <link
            rel="stylesheet"
            type="text/css"
            // charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
          />
        </Head>

        <div className="flex flex-col items-center mx-6">
          <Toaster />
          
          <div className="time-box" style={{display: isMintLive?'none':'flex'}}>
            <span className="text-lg text-gray-400">Time until NFT minting starts</span>
            <span className="text-lg text-white tracking-widest" style={{ paddingTop: '10px', paddingBottom: '5px', fontWeight: 800 }}>{leftTime}</span>
            <span className="text-lg text-gray-400 tracking-tighter">Days : Hours : Minutes : Seconds</span>
          </div>            

          <div
            className="h-100 w-100 flex flex-row justify-center"
            style={{ marginTop: isMintLive?"180px":"50px", padding: "0 100px" }}
          >
            <div className="w-50 justify-center items-center">
              <div className="eventInfo">
                <div className="mint-box flex flex-col">
                  {/* {connected && (
                  <p className="mr-auto text-sm">
                    <span className="font-bold">Available / Minted / Total:</span>{" "}
                    {nftsData.itemsRemaining} / {nftsData.itemsRedeemed} / {nftsData.itemsAvailable}
                  </p>
                  )} */}
                  {/* <h2 className="text-center mt-16">{!connected&&<div className='blink'>&#128161; Connect your wallet.</div>}</h2>
                  <h4 className="my-4 text-lg font-extrabold text-center text-white p-4">A unique NFT experience from a collective of writers, game designers, filmmakers, and illustrators from a variety of disciplines who share a passion for unique, meaningful art and blockchain technology.</h4> */}
                  <div className="flex flex-row items-center w-100 pl-8">
                    <h5 className="text-lg text-white text-left px-4 py-3 tracking-widest">
                      Mint Cost :{" "}
                    </h5>
                    <div className="text-lg text-white tracking-widest">
                      3 SOL
                    </div>
                  </div>
                  <div className="flex flex-row items-center w-100 pl-8">
                    <h5 className="text-lg text-white text-left px-4 py-3 tracking-widest">
                      Supply :{" "}
                    </h5>
                    <div className="text-lg text-gray-400 tracking-widest">
                      {nftsData.itemsRemaining} / {nftsData.itemsAvailable}
                    </div>
                  </div>
                  <div className="flex flex-row items-center w-100 pl-8">
                    <h5 className="text-lg text-white text-left px-4 py-3 tracking-widest">
                      Sale :{" "}
                    </h5>
                    <div className="text-lg text-gray-400 tracking-widest">
                      Whitelist / Public
                    </div>
                  </div>
                  <div className="flex items-start justify-center my-10">
                    <>
                      {new Date(mintStartDate).getTime() < Date.now() ? (
                        <>
                          <div className="flex flex-col pr-4">
                            <ReactTooltip
                              id="mint-info"
                              type="dark"
                              effect="solid"
                              place="bottom"
                              className="tooltip"
                            >
                              <div>Please connect your wallet.</div>
                            </ReactTooltip>
                            {/* <h1 className="mb-10 text-3xl font-bold">&#128296 Mint an Egg</h1> */}
                            {isSoldOut ? (
                              <div className="border border-black rounded">
                                <p className="m-2 text-lg text-center text-gray-400 tracking-widest">
                                  &#9888; Sold out
                                </p>
                              </div>
                            ) : (
                              <button
                                onClick={startMint}
                                disabled={isMinting || !connected}
                                style={{
                                  width: "250px",
                                  height: "70px",
                                  border: "3px solid rgb(190, 24, 93)",
                                }}
                                className={[
                                  "mint-button tracking-widest flex items-center justify-center z-10 mx-auto font-bold bg-pink-50 text-pink-700 rounded-2xl",
                                  isMinting || !connected
                                    ? "cursor-not-allowed"
                                    : "cursor-allowed hover:opacity-70",
                                ].join(" ")}
                              >
                                {isMinting ? (
                                  <ReactLoading
                                    type="bars"
                                    color="red"
                                    height={20}
                                    width={25}
                                  />
                                ) : (
                                  <div style={{
                                    fontFamily: 'eurostile-black-italic-italic, sans-serif', 
                                    letterSpacing: '0.25rem',
                                    fontSize: '14px',
                                    fontWeight: 600
                                  }}>MINT</div>
                                )}
                              </button>
                            )}
                            {!connected && (
                              <div
                                data-tip
                                data-for="mint-info"
                                className="blink text-center"
                              >
                                &#128161; Connect your wallet.
                              </div>
                            )}
                          </div>
                          {/* <div className="flex flex-col w-1/2">
                          <h1 className="mb-10 text-3xl font-bold">Mint Many</h1>
                          <MintMany />
                        </div> */}
                        </>
                      ) : (
                        <Countdown
                          date={mintStartDate}
                          onMount={({ completed }) =>
                            completed && setIsMintLive(true)
                          }
                          onComplete={() => setIsMintLive(true)}
                        />
                      )}
                    </>
                  </div>
                  <div className="pb-6 pr-4 w-full">
                    <div className="text-sm text-white text-right tracking-widest">
                      <Link href="/">BACK TO HOMEPAGE</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="w-50 justify-center items-center">
              <div className="container-carousel">
                <div className="carousel-main">
                  <div className="carousel__face">
                    {/* <span>This is something</span> */}
                  </div>
                  <div className="carousel__face">
                    {/* <span>Very special</span> */}
                  </div>
                  <div className="carousel__face">
                    {/* <span>Special is the key</span> */}
                  </div>
                  <div className="carousel__face">
                    {/* <span>For you</span> */}
                  </div>
                  <div className="carousel__face">
                    {/* <span>Just give it</span> */}
                  </div>
                  <div className="carousel__face">
                    {/* <span>A try</span> */}
                  </div>
                  <div className="carousel__face">
                    {/* <span>And see</span> */}
                  </div>
                  <div className="carousel__face">
                    {/* <span>How IT Works</span> */}
                  </div>
                  <div className="carousel__face">
                    {/* <span>Woow</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>&nbsp;</div>
      </body>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const mapStateToProps = ({wallet})=>({wallet})
const mapDispatchToProps = (dispatch: any) => ({
  walletAction: bindActionCreators({...walletAction}, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);

