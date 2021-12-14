/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { Box, Button, Grid, Paper, Typography } from "@material-ui/core";
import ReactLoading from "react-loading";
import styled from 'styled-components'

import useStyles from './AnNFT.style';

export default function AnNFT({ index, selectedIndex, onClick, nft, setDetail, cardOnly }) {
  const [isOpen, setOpen] = useState(false)
  // const classes = useStyles({ width });
  const classes = useStyles();

  useEffect(() => {
    console.log(nft);
  }, []);

  const cardDisplay = (
    <Paper className={classes.root}>
      <div className="my-card">
        <video autoPlay muted loop playsInline className={classes.background}>
          <source src={`../mp4/sol.mp4`} type="video/mp4" />
        </video>
        <div className="d-flex flex-column" style={{height: '90px', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
          <ReactLoading
            type="bars"
            color="grey"
            height={20}
            width={25}
          />
        </div>
      </div>
    </Paper>
  );
  return (
    <Box p={1}>
      {cardOnly ? (
        cardDisplay
      ) : (
      <Paper className={classes.root}>
        <div className="my-card">
          <div className="p-0">
            <img src={nft.image} className="w-full" alt={nft.name} style={{height: '300px', resizeMode: 'cover'}}/>
          </div>
          <div className="">
            <div className="my-card-header">
              <div className="text-lg text-white font-sm text-left tracking-wider">{nft.name}</div>
                {/* <div className="text-md text-gray-400">{nft.symbol}</div> */}
            </div>
            <div className="my-card-footer">
              <div className="footer-title">
              FATAL YOUTH
              </div>
              <div className="d-flex flex-row items-center">
                <div className="detail-btn cursor-pointer" onClick={()=>setDetail(selectedIndex, nft.description)}> 
                  Detail{/* GENISIS COLLECTION */}
                </div>
                <div className="text-lg hidden" style={{color: 'rgb(138, 135, 135)'}}>
                  <i className={["bi", isOpen?"bi-chevron-compact-up":"bi-chevron-compact-down"].join(" ")} onClick={()=>setDetail(selectedIndex, nft.name, nft.image, nft.description)/*handleClick*/}></i>  
                </div>
              </div>
              {isOpen && index===selectedIndex && 
                <div className="px-2">
                  <div className="text-yellow-400" style={{ textAlign: 'start' }}>
                    {nft.description}
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </Paper>)}
    </Box>
  );
}
