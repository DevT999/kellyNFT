import React, { useContext,  useState } from "react";
import { checkWalletDetails } from "../Topbar/Topbar";
import WalletNft from "./WalletNft";
import { useDispatch, useSelector } from 'react-redux'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as walletAction from '../../pages/redux/actions/Wallet';

const Wallet = (props) => {
  // use the useContext for get the all state value from App.js Component
  const { publicKey, loading, setWalletAddress, isSolana } =
    useContext(checkWalletDetails);
  const dispatch = useDispatch()
  const [connected, setConnected] = useState(false);

  // function for connect Phantom wallet
  const connectWallet = async () => {
    try {
      if (loading) {
        const connect = await isSolana.connect();
        setConnected(true);
        // dispatch({connected: connected})
        props.walletAction.setConnected(true)
        // set values in state
        return setWalletAddress({
          publicKey: connect.publicKey.toString(),
          loading: false,
          message: "Phantom wallet is found",
        });
      }
    } catch (error) {
      // set values in state
      return setWalletAddress({
        loading: true,
        message: "Phantom wallet is not found",
        error: error.message,
      });
    }
  };

  const disconnectWallet = async () => {
    const connect = await isSolana.disconnect();
    setConnected(false);
    props.walletAction.setConnected(false)
    return setWalletAddress({
      publicKey: undefined,
      loading: true,
      message: "Phantom wallet is not found",
    });
  }

  return (
    <>
      <section className="wallet">
        <div className="container-fluid">
          <div className="mt-2 pl-5 pr-5">
            <div className="create_mint_right d-flex justify-content-end">
              {!publicKey && (
                <button onClick={connectWallet}>CONNECT WALLET</button>
              )}
              {publicKey && <button className="pub_key" onClick={disconnectWallet}>{publicKey}</button>}
            </div>
          </div>
        </div>
        {/* <WalletNft /> */}
      </section>
    </>
  );
};

const mapStateToProps = ({wallet})=>({wallet})
const mapDispatchToProps = (dispatch) => ({
  walletAction: bindActionCreators({...walletAction}, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
