/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { getSortedPostsData } from '../lib/posts'
import Navbar from '../components/Navbar/Navbar';
import Layout from '../components/Layout/layout';
import { StaticCardDisplay, Title } from '../components';
import { Marquee } from '../components';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import useCandyMachine from "../hooks/useCandyMachine";
import useWalletBalance from "../hooks/useWalletBalance";
import { useWallet } from "@solana/wallet-adapter-react";
import { Toaster } from "react-hot-toast";
import Countdown from "react-countdown";
import useWalletNfts from "../hooks/useWalletNFTs";
import AnNFT from "../components/AnNFT/AnNFT";
import ReactLoading from 'react-loading';
import { motion } from "framer-motion";

import {
  Box,
  Button,
  Divider,
  FormControl,
  Paper,
  Typography,
  Grid,
} from '@material-ui/core';

export default function Home() {
 
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

  const router = useRouter()
  
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
          <meta
            name="description"
            content="NFT Eggs, on solana"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <div className="flex flex-col items-center min-h-screen mx-6">
          <Toaster />
          <div className="flex items-center justify-start w-full mt-3">
          {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" width="24">
          <path d="M462.411,92.274c-29.294-51.592-66.951-80.001-106.035-80.001c-51.075,0-93.527,48.959-119.298,107.668   c6.115-0.528,12.281-1.175,18.186-1.175c6.254,0,12.294,0.406,18.228,1.005c21.271-42.257,51.543-73.945,82.893-73.945   c26.098,0,54.116,22.97,76.855,63.02c22.011,38.772,35.685,88.112,35.685,128.767c0,38.412-12.1,74.39-34.087,101.292   c-20.778,25.423-47.992,39.553-76.786,40.088c-5.482,11.204-11.62,22.025-18.146,32.465c5.416,0.731,10.897,1.189,16.472,1.189   c39.672,0,76.766-18.652,104.438-52.51c26.868-32.881,41.672-76.396,41.664-122.524C502.485,190.797,487.502,136.46,462.411,92.274   z"/>
      <path d="M330.015,179.09c-17.507-17.513-43.36-26.77-74.751-26.77c-60.905,0-139.924,34.823-187.904,82.803   c-68.245,68.247-77.42,170.102-20.455,227.068c24.199,24.208,57.9,37.537,94.894,37.537c47.153,0,95.329-21.136,132.176-57.991   c33.11-33.103,60.938-82.115,74.447-131.095C364.191,253.448,357.654,206.73,330.015,179.09z M316.071,301.722   c-11.853,42.982-37.075,87.546-65.82,116.29c-30.604,30.606-70.131,48.162-108.452,48.162c-28.434,0-53.042-9.576-71.169-27.706   c-43.885-43.883-34.701-124.459,20.455-179.623c41.598-41.597,112.178-72.973,164.18-72.973c22.619,0,39.788,5.702,51.027,16.941   C324.747,221.271,328.31,257.322,316.071,301.722z"/>  </svg>
            <h1 className="text-2xl font-bold text-black ml-2">MetaEggs.city</h1> */}
            <div className="flex items-start ml-auto mr-24 hidden">
              {connected && (
                <div className="bg-white rounded-md mr-2 " style={{height: '50px'}}>
                
                <div className="flex justify-center items-center m-4 ">
                 
                  <div  className="text-xs text-gray-400">balance</div>
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
          <Title 
            title='PURCHASE' 
            subtitle=""
            maxWidth="lg"
            otherFont
          />
        <div className="hidden h-full flex-1 justify-center items-center flex w-full pt-8">
          <div className="w-2/6 text-center flex-col flex items-center justify-center pl-6">
            <Paper className="card">
            {connected && (
              <p className="text-sm">
                <span className="font-bold">Available / Minted / Total:</span>{" "}
                {nftsData.itemsRemaining} / {nftsData.itemsRedeemed} / {nftsData.itemsAvailable}
              </p>
            )}
            <div className="mb-4">
              <div className="h-1 mx-auto w-1/6 opacity-25 my-0 py-0 rounded-t" ></div>
            </div>
            <div>
            <div className="pl-4 pr-4">
              <h4 className="my-4 text-lg font-extrabold text-center text-white">
            A unique NFT experience from a collective of writers, game designers, filmmakers, and illustrators from a variety of disciplines who share a passion for unique, meaningful art and blockchain technology.
              </h4>
            </div>
            </div>
            {!connected&&<div className='blink'>&#128161; Connect your wallet.</div>}
            {/* {!connected&&<Marquee title='Connect your wallet.'/>} */}
            {!connected&&<div className="hidden border border-black rounded w-full w-auto"><p className="m-2">&#128161; Connect your wallet</p></div>}
        {/* <div className="pt-4">
           
            <p className="text-center">7777 eggs, balblzai bflaze bfezl bfzbeizefblifezilb</p>
            <p className="text-center">balarbl brlzlbzelb bfzleb</p>
            <p className="text-center">fezezezf !</p>
          </div> */}
            
            <div className="flex items-start justify-center  my-10">
              <>
                {new Date(mintStartDate).getTime() < Date.now() ? (
                  <>
                    <div className="flex flex-col pr-4">
                      {/* <h1 className="mb-10 text-3xl font-bold">&#128296 Mint an Egg</h1> */}
                      {isSoldOut ? <div className="border border-black rounded w-auto"><p className="m-2">&#9888; Sold out</p></div>:
                      <button
                        onClick={startMint}
                        disabled={isMinting||!connected}
                        className={["z-10 px-4 py-2 mx-auto font-bold text-white transition-opacity rounded-lg from-green-300 via-blue-500 to-purple-600", (isMinting||!connected)?'cursor-not-allowed bg-gray-400 border border-black':'cursor-allowed hover:opacity-70 bg-gradient-to-br'].join(' ')}
                      >
                        {isMinting ? <ReactLoading type="bars" color="white" height={20} width={20}/>:'Mint'}
                      </button>}
                    </div>
                    {/* <div className="flex flex-col w-1/2">
                      <h1 className="mb-10 text-3xl font-bold">Mint Many</h1>
                      <MintMany />
                    </div> */}
                  </>
                ) : (
                  <Countdown
                    date={mintStartDate}
                    onMount={({ completed }) => completed && setIsMintLive(true)}
                    onComplete={() => setIsMintLive(true)}
                  />
                )}
              </>
            </div>

            <div className="hidden">
              <div className="hero-cta">
                <a className="cta" href="" target="_blank"><img className="cta-img" src="/img/twitter.svg" /></a>
                <a className="cta" href="" target="_blank"><img className="cta-img" src="/img/telegram.svg" /></a>
              </div>
            </div>
            </Paper>
          </div>
          <div className="w-4/6 flex items-center justify-start">
            
            <StaticCardDisplay
              items={[
                {
                  path: '/cards/6.png',
                  width: '26vw',
                }, 
                {
                  path: '/cards/3.png',
                  width: '28vw',
                },
                {
                  path: '/cards/7.png',
                  width: '24vw',
                },
              ]}
            />
            
          </div>
        </div>

        <div className="h-full flex-1 justify-center items-center flex w-full pt-8" id="event">
          <div className="event">
            <div data-aos="fade-right" className="eventInfo aos-init aos-animate ml-4">					
              <h2 className="text-center mt-16">{!connected&&<div className='blink'>&#128161; Connect your wallet.</div>}</h2>
              <h4 className="my-4 text-lg font-extrabold text-center text-white p-4">A unique NFT experience from a collective of writers, game designers, filmmakers, and illustrators from a variety of disciplines who share a passion for unique, meaningful art and blockchain technology.</h4>
              <div className="flex items-start justify-center  my-10">
                <>
                  {new Date(mintStartDate).getTime() < Date.now() ? (
                    <>
                      <div className="flex flex-col pr-4">
                        {/* <h1 className="mb-10 text-3xl font-bold">&#128296 Mint an Egg</h1> */}
                        {isSoldOut ? <div className="border border-black rounded w-auto"><p className="m-2">&#9888; Sold out</p></div>:
                        <button
                          onClick={startMint}
                          disabled={isMinting||!connected}
                          className={["z-10 px-4 py-2 mx-auto font-bold text-white transition-opacity rounded-lg from-green-300 via-blue-500 to-purple-600", (isMinting||!connected)?'cursor-not-allowed bg-gray-400 border border-black':'cursor-allowed hover:opacity-70 bg-gradient-to-br'].join(' ')}
                        >
                          {isMinting ? <ReactLoading type="bars" color="white" height={20} width={20}/>:'Mint'}
                        </button>}
                      </div>
                      {/* <div className="flex flex-col w-1/2">
                        <h1 className="mb-10 text-3xl font-bold">Mint Many</h1>
                        <MintMany />
                      </div> */}
                    </>
                  ) : (
                    <Countdown
                      date={mintStartDate}
                      onMount={({ completed }) => completed && setIsMintLive(true)}
                      onComplete={() => setIsMintLive(true)}
                    />
                  )}
                </>
              </div>
            </div>
            <div data-aos="fade-left" className="eventPhotos aos-init aos-animate">
              <img className="event-img" src="./cards/7.png" id="grafitti1"/>
              <img className="event-img" src="../cards/8.png" id="grafitti2"/>
              <img className="event-img" src="../cards/9.png" id="grafitti3"/>	
              <img className="event-img" src="./cards/11.png" id="grafitti4"/>
              <img className="event-img" src="../cards/6.png" id="grafitti5"/>
              <img className="event-img" src="../cards/10.jpg" id="grafitti6"/>			
            </div>
          </div>
        </div>
         
        <div className="hidden flex flex-col w-full">
          <h2 className="text-2xl font-bold text-black">My Eggs</h2>
          <div className="flex mt-3 gap-x-2">
            {(nfts as any).map((nft: any, i: number) => {
              return <AnNFT key={i} nft={nft} />;
            })}
          </div>
        </div>
      </div>
  
        <div>
          &nbsp;
          </div>
  
       
      <footer className="hidden bg-white border-t border-black">
        <div className="container mx-auto mt-2 px-8">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" width="24">
            <path d="M462.411,92.274c-29.294-51.592-66.951-80.001-106.035-80.001c-51.075,0-93.527,48.959-119.298,107.668   c6.115-0.528,12.281-1.175,18.186-1.175c6.254,0,12.294,0.406,18.228,1.005c21.271-42.257,51.543-73.945,82.893-73.945   c26.098,0,54.116,22.97,76.855,63.02c22.011,38.772,35.685,88.112,35.685,128.767c0,38.412-12.1,74.39-34.087,101.292   c-20.778,25.423-47.992,39.553-76.786,40.088c-5.482,11.204-11.62,22.025-18.146,32.465c5.416,0.731,10.897,1.189,16.472,1.189   c39.672,0,76.766-18.652,104.438-52.51c26.868-32.881,41.672-76.396,41.664-122.524C502.485,190.797,487.502,136.46,462.411,92.274   z"/>
      <path d="M330.015,179.09c-17.507-17.513-43.36-26.77-74.751-26.77c-60.905,0-139.924,34.823-187.904,82.803   c-68.245,68.247-77.42,170.102-20.455,227.068c24.199,24.208,57.9,37.537,94.894,37.537c47.153,0,95.329-21.136,132.176-57.991   c33.11-33.103,60.938-82.115,74.447-131.095C364.191,253.448,357.654,206.73,330.015,179.09z M316.071,301.722   c-11.853,42.982-37.075,87.546-65.82,116.29c-30.604,30.606-70.131,48.162-108.452,48.162c-28.434,0-53.042-9.576-71.169-27.706   c-43.885-43.883-34.701-124.459,20.455-179.623c41.598-41.597,112.178-72.973,164.18-72.973c22.619,0,39.788,5.702,51.027,16.941   C324.747,221.271,328.31,257.322,316.071,301.722z"/> </svg>
            <h1 className="text-2xl font-bold text-black ml-2">MetaEggs.city</h1>
            </div>
  
            <div className="flex-2 ml-auto">
              <p className="uppercase font-extrabold text-gray-500 md:mb-0">Made with love by egg lovers</p>
              <p className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500">Made with love by egg lovers</p>
            </div>
            
         
          </div>
        </div>
      </footer>
  
        </body>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}