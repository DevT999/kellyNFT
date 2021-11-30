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
import * as walletAction from './redux/actions/Wallet';

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

  const { connected } = useWallet();
//   const [connected, setConnected] = useState(props.wallet.connected);
//  console.log("props.wallet.connected====>", props.wallet.connected)
  const [isMintLive, setIsMintLive] = useState(false);

  const paginate = (newDirection: number) => {
    console.log(newDirection);
  };

  useEffect(() => {
    // props.setConnected();
    if (new Date(mintStartDate).getTime() < Date.now()) {
      setIsMintLive(true);
    }
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
      {/* <div className="flex flex-row justify-center items-center min-h-screen">
        <button
          onClick={()=>router.push('/')}
          className="px-4 py-2 mx-auto font-bold text-white transition-opacity rounded-lg hover:opacity-70 bg-gradient-to-br from-green-300 via-blue-500 to-purple-600"
        >
          PURCHASE
        </button>
        <button
          onClick={()=>router.push('/collection')}
          className="px-4 py-2 mx-auto font-bold text-white transition-opacity rounded-lg hover:opacity-70 bg-gradient-to-br from-green-300 via-blue-500 to-purple-600"
        >
          COLLECTION
        </button>
      </div> */}
      <body className="gradient leading-relaxed tracking-wide flex flex-col bg-transparent">
        <Head>
          {/* <title>MetaEggs.city</title> */}
          <meta name="description" content="NFT Eggs, on solana" />
          <link rel="icon" href="/favicon.ico" />
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
          <div className="flex items-center justify-center w-full mt-3 hidden">
            <div className="flex items-start ml-auto mr-24 hidden">
              {connected && (
                <div
                  className="bg-white rounded-md mr-2 "
                  style={{ height: "50px" }}
                >
                  <div className="flex justify-center items-center m-4 ">
                    <div className="text-xs text-gray-400">balance</div>
                    <div className="mx-1 font-bold leading-none">
                      {balance.toFixed(2)}
                    </div>
                    <div
                      className="font-bold leading-none text-transparent bg-clip-text"
                      style={{
                        backgroundImage: `linear-gradient(to bottom right, #00FFA3, #03E1FF, #DC1FFF)`,
                      }}
                    >
                      SOL
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          

          <div
            className="h-full w-full flex justify-center px-16 mt-16 grid grid-cols-2 gap-4" style={{marginTop: '200px'}}
          >
            <div className="w-50 justify-center items-center">
              <div className="eventInfo">
                <div className="mint-box flex flex-column">
                  {/* {connected && (
                  <p className="mr-auto text-sm">
                    <span className="font-bold">Available / Minted / Total:</span>{" "}
                    {nftsData.itemsRemaining} / {nftsData.itemsRedeemed} / {nftsData.itemsAvailable}
                  </p>
                  )} */}
                  {/* <h2 className="text-center mt-16">{!connected&&<div className='blink'>&#128161; Connect your wallet.</div>}</h2>
                  <h4 className="my-4 text-lg font-extrabold text-center text-white p-4">A unique NFT experience from a collective of writers, game designers, filmmakers, and illustrators from a variety of disciplines who share a passion for unique, meaningful art and blockchain technology.</h4> */}
                  <div className="d-flex flex-row items-center w-100 pl-8">
                    <h5 className="text-lg text-white text-left p-4 pt-8 tracking-widest">
                      Mint Cost :{" "}
                    </h5>
                    <div className="text-lg text-white tracking-widest">
                      3 SOL
                    </div>
                  </div>
                  <div className="d-flex flex-row items-center w-100 pl-8">
                    <h5 className="text-lg text-white text-left p-4 tracking-widest">
                      Supply :{" "}
                    </h5>
                    <div className="text-lg text-gray-400 tracking-widest">
                      {nftsData.itemsRemaining} / {nftsData.itemsAvailable}
                    </div>
                  </div>
                  <div className="d-flex flex-row items-center w-100 pl-8">
                    <h5 className="text-lg text-white text-left p-4 tracking-widest">
                      Sale :{" "}
                    </h5>
                    <div className="text-lg text-gray-400 tracking-widest">
                      Whitelist / Private / Public
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
                                  "tracking-widest flex items-center justify-center z-10 mx-auto font-bold bg-pink-50 text-pink-700 rounded-2xl",
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
           
            <div className="w-50 justify-center items-center mt-4 ml-16 pl-32">
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

        <footer className="hidden bg-white border-t border-black">
          <div className="container mx-auto mt-2 px-8">
            <div className="w-full flex flex-col md:flex-row py-6">
              <div className="flex mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  width="24"
                >
                  <path d="M462.411,92.274c-29.294-51.592-66.951-80.001-106.035-80.001c-51.075,0-93.527,48.959-119.298,107.668   c6.115-0.528,12.281-1.175,18.186-1.175c6.254,0,12.294,0.406,18.228,1.005c21.271-42.257,51.543-73.945,82.893-73.945   c26.098,0,54.116,22.97,76.855,63.02c22.011,38.772,35.685,88.112,35.685,128.767c0,38.412-12.1,74.39-34.087,101.292   c-20.778,25.423-47.992,39.553-76.786,40.088c-5.482,11.204-11.62,22.025-18.146,32.465c5.416,0.731,10.897,1.189,16.472,1.189   c39.672,0,76.766-18.652,104.438-52.51c26.868-32.881,41.672-76.396,41.664-122.524C502.485,190.797,487.502,136.46,462.411,92.274   z" />
                  <path d="M330.015,179.09c-17.507-17.513-43.36-26.77-74.751-26.77c-60.905,0-139.924,34.823-187.904,82.803   c-68.245,68.247-77.42,170.102-20.455,227.068c24.199,24.208,57.9,37.537,94.894,37.537c47.153,0,95.329-21.136,132.176-57.991   c33.11-33.103,60.938-82.115,74.447-131.095C364.191,253.448,357.654,206.73,330.015,179.09z M316.071,301.722   c-11.853,42.982-37.075,87.546-65.82,116.29c-30.604,30.606-70.131,48.162-108.452,48.162c-28.434,0-53.042-9.576-71.169-27.706   c-43.885-43.883-34.701-124.459,20.455-179.623c41.598-41.597,112.178-72.973,164.18-72.973c22.619,0,39.788,5.702,51.027,16.941   C324.747,221.271,328.31,257.322,316.071,301.722z" />{" "}
                </svg>
                <h1 className="text-2xl font-bold text-black ml-2">
                  MetaEggs.city
                </h1>
              </div>

              <div className="flex-2 ml-auto">
                <p className="uppercase font-extrabold text-gray-500 md:mb-0">
                  Made with love by egg lovers
                </p>
                <p className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500">
                  Made with love by egg lovers
                </p>
              </div>
            </div>
          </div>
        </footer>
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

