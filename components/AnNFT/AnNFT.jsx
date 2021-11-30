/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { Accordion, Card, Button, Row } from 'react-bootstrap';
import styled from 'styled-components'
import InfoRow from '../InfoRow'

const DetailsButton = styled(Button).attrs({ variant: 'text', fullWidth: true })`
  height: auto;
  padding: 0px 5px;
  color: rgb(138, 135, 135);
  letter-spacing: 0.25em !important;
  white-space: nowrap;
  font-size: 12px;
  font-family: 'eurostile-black-italic-italic', sans-serif;
  &:hover:not(:disabled):not(:active) {
    background-color: rgb(138, 135, 135);
  }
`

const InfoBlock = styled.div`
  padding: 0 5px 5px;
`

export default function AnNFT({ key, index, selectedIndex, onClick, nft }) {
  const [isOpen, setOpen] = useState(false)
  useEffect(() => {
    console.log(key, nft);
  }, []);

  const handleClick = async () => {
    onClick(index)
    setOpen(!isOpen)
  }
  return (
    <div className="col-lg-4 col-md-4 col-sm-12 p-8">
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
              <DetailsButton> 
                GENISIS COLLECTION
              </DetailsButton>
              <div className="text-lg" style={{color: 'rgb(138, 135, 135)'}}>
                <i className={["bi", isOpen?"bi-chevron-compact-up":"bi-chevron-compact-down"].join(" ")} onClick={handleClick}></i>  
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
    </div>
  );
}
