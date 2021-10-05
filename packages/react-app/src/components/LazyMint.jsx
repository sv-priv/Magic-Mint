import React, { useState } from "react";
import { Button, Input, Card, Divider } from "antd";
import {AddressInput} from './'
import { createLazyMint, generateTokenId, putLazyMint } from "../rarible/createLazyMint";

export default function LazyMint(props) {


  const titleMint = {
      fontFamily: "Whyte-Inktrap",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "35px",
      lineHeight: "100%",   
      letterSpacing: "-0.02em",
      textTransform: "uppercase",
      color: "#313439",
      marginBottom: "25px",
      textAlign: "center"
  }

  const active = {
    backgroundColor:"rgba(73, 70, 230, 1)",
    color: "white!important"

  }
  const buttonMint = {
      width: "429px",
      height: "110px",
      textAlign: "center",
      marginTop: "20px",
      fontFamily: "Grtsk-Zetta",
      margin: "0 auto",
      fontSize: "14px",
      lineHeight: "17px",
      marginBottom: "50px",
      color: "white",
      alignItems: "center",
      letterSpacing: "0.02em",
      textTransform: "uppercase",
      background: "linear-gradient(87.79deg, #8794FF 5.12%, #3B50FF 99.11%)",
      borderRadius: "30px"
  }
      
  const nftDroparea = {
      width: "500px",
      height: "170px",
      margin: "0 auto",
      textAlign: "center",
      background: "#F0F1F9",
      borderRadius: "50px",
      marginBottom: "34px",
      fontFamily: "calibri",
      padding: "10px",
      overflow: "hidden",
      cursor: "pointer"
  }

  const nftDropareaDesc = {
      fontFamily: "Whyte",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "20px",
      lineHeight: "25px",
      textAlign: "center",
      letterSpacing: "0.02em",
      textTransform: "uppercase",
      color: "#313439",
      flex: "none",
      paddingTop: "10%"
  }
  const allowedFormats = {
      textAlign: "center",
      marginTop: "10%"
  }
  const format = {
      padding: "10px",
      width: "89px",
      height: "35px",
      marginRight: "20px",
      background: "#FFFFFF",
      borderRadius: "50px",
      fontFamily: "Grtsk-Zetta",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "15px",
      letterSpacing: "0.02em",
      textTransform: "uppercase",
      color: "#B2B2C1"
  }

  const nftInfo = {
      marginLeft: "28%"
  }
  const nftDesc = {
      width: "500px",
      height: "150px",
      border: "none",
      paddingLeft: "20px",
      paddingBottom: "45px",
      background: "#F0F1F9",
      borderRadius: "20px",
      marginBottom: "20PX",
      fontFamily: "Grtsk-Zetta",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "15px",
      letterSpacing: "0.02em",
      textTransform: "uppercase",
      color: "#4A4E52"
  }
  const nftCopies = {
    border: "none",
    width: "500px",
    height: "54px",
    background: "#F0F1F9",
    borderRadius: "20px",
    marginBottom: "20px",
    fontFamily: "Grtsk-Zetta",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "15px",
    letterSpacing: "0.02em",
    textTransform: "uppercase",
    color: "#4A4E52"
  }

  const nftName = {    
    border: "none",
    width: "500px",
    height: "54px",
    background: "#F0F1F9",
    borderRadius: "20px",
    marginBottom: "20px",
    fontFamily: "Grtsk-Zetta",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "15px",
    letterSpacing: "0.02em",
    textTransform: "uppercase",
    color: "#4A4E52"
  }

  const nftMintpatronage = {
      border: "none",
      width: "500px",
      paddingLeft: "20px",
      height: "125px",
      background: "#F0F1F9",
      borderRadius: "20px",
      marginBottom: "20px",
      fontFamily: "Grtsk-Zetta",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "15px",
      letterSpacing: "0.02em",
      textTransform: "uppercase",
      color: "#4A4E52"
  }

  const nftPricing = {
      textAlign: "center"
  }
  const collections = {
      marginTop: "5%",
      marginBottom: "163px",
      textAlign: "center"
  }
  const singleButtonChoose = {
    border: "none",
    padding: "21px",
    fontFamily: "Grtsk Zetta",
    margin: "10px",
    textTransform: "uppercase",
    fontSize: "14px",
    borderRadius: "21px"
  }
  const buttonsChoose = {
    marginTop: "50px",
    marginBottom:"50px"
  }


  const [erc721ContractAddress, setErc721ContractAddress] = React.useState();


  //single ERC721

  const [singleErc721IpfsHash, setSingleErc721IpfsHash] = React.useState();
  const [singleErc721File, setSingleErc721File] = React.useState();
  const [singleErc721Title, setSingleErc721Title] = React.useState();
  const [singleErc721Description, setSingleErc721Description] = React.useState();
  const [singleErc721Royalties, setSingleErc721Royalties] = React.useState();
  const [singleErc721Collection, setSingleErc721Collection] = React.useState();
  const [singleErc721TokenId, setSingleErc721TokenId] = React.useState();
  const [singleSending721, setSingleSending721] = React.useState();

  // multiple ERC721

  const [multipleErc721IpfsHash, setMultipleErc721IpfsHash] = React.useState();
  const [multipleErc721File, setMultipleErc721File] = React.useState();
  const [multipleErc721Title, setMultipleErc721Title] = React.useState();
  const [multipleErc721Description, setMultipleErc721Description] = React.useState();
  const [multipleErc721Royalties, setMultipleErc721Royalties] = React.useState();
  const [multipleErc721Collection, setMultipleErc721Collection] = React.useState();
  const [multipleErc721TokenId, setMultipleErc721TokenId] = React.useState();
  const [multipleErc721NumberCopies, setMultipleErc721NumberCopies] = React.useState();

  const [multipleSending721, setMultipleSending721] = React.useState();



  
  // const [erc1155IpfsHash, setErc1155IpfsHash] = React.useState();
  // const [erc1155TokenId, setErc1155TokenId] = React.useState();
  // const [sending1155, setSending1155] = React.useState();
  // const [erc1155ContractAddress, setErc1155ContractAddress] = React.useState();





  console.log({writeContracts: props.writeContracts})


  const [singleNFT, setIsSingle] = useState(true)
  const [multipleNFT, setIsMultiple] = useState(false)

  const onChangeType = () => {
      setIsSingle(!singleNFT)
  };


  return (
    <div>
      <div style={buttonsChoose}>
          <button  style={singleButtonChoose} onClick={onChangeType}>
               Single NFT
          </button>
          <button style={singleButtonChoose} onClick={onChangeType}>
             Multiple NFTs
          </button>
        </div>

    { singleNFT ? 
    <div>
        <Input
          value={singleErc721File}
          placeholder=""
          type="file"
          style={nftDroparea}
          onChange={e => {
            setSingleErc721File(e.target.value);
          }}
        />
        <Input
          value={singleErc721Title}
          placeholder="Title"
          type="text"
          style={nftName}
          onChange={e => {
            setSingleErc721Title(e.target.value);
          }}
        />
        <Input
          value={singleErc721Description}
          placeholder="Description"
          style={nftDesc}
          onChange={e => {
            setSingleErc721Description(e.target.value);
          }}
        />
        <Input
          value={singleErc721Royalties}
          placeholder="Royalties"
          type="text"
          style={nftName}
          onChange={e => {
            setSingleErc721Royalties(e.target.value);
          }}
        />
        <Input
          value={singleErc721Collection}
          placeholder="Choose collection"
          type="text"
          style={nftMintpatronage}
          onChange={e => {
            setSingleErc721Collection(e.target.value);
          }}
        />


          <br/>
        <Button
          style={buttonMint}
          loading={singleSending721}
          size="large"
          shape="round"
          type="primary"
          onClick={async () => {


            // send to IPFS

            // get ipfs hash back
            console.log("aaaaa")
            console.log(singleErc721Description)
            console.log(singleErc721File)


            if (!props.writeContracts) return
            setSingleSending721(true);
            const newTokenId = await generateTokenId(props.writeContracts.ERC721Rarible.address, props.accountAddress)
            setSingleErc721TokenId(newTokenId)
            setErc721ContractAddress(props.writeContracts.ERC721Rarible.address)
            // console.log("sending");
            const form = await createLazyMint(newTokenId, props.provider, props.writeContracts.ERC721Rarible.address, props.accountAddress, singleErc721IpfsHash, 'ERC721')
            await putLazyMint(form)
            setSingleSending721(false);
          }}
        >
          Mint
        </Button>

          {/* <Card title={
              <div>
                <span style={{ fontSize: 16, marginRight: 8 }}>Token ID: {erc721TokenId}</span>
              </div>
            } X>
            <div>
              <p>Contract: {erc721ContractAddress}</p>
            </div>
          </Card> */}


          <div>

          </div>

    </div>
    :
    <div>
      <div>
        Create
      </div>
      <Input
        value={multipleErc721File}
        placeholder=""
        type="file"
        style={nftDroparea}
        onChange={e => {
          setMultipleErc721File(e.target.value);
        }}
      />
      <Input
        value={multipleErc721Title}
        placeholder="Title"
        type="text"
        style={nftName}
        onChange={e => {
          setMultipleErc721Title(e.target.value);
        }}
      />
      <Input
        value={multipleErc721Description}
        placeholder="Description"
        style={nftDesc}
        onChange={e => {
          setMultipleErc721Description(e.target.value);
        }}
      />
      <Input
        value={multipleErc721Collection}
        placeholder="Choose collection"
        type="text"
        style={nftMintpatronage}
        onChange={e => {
          setMultipleErc721Collection(e.target.value);
        }}
      />
      <Input
          value={multipleErc721Royalties}
          placeholder="Royalties"
          type="text"
          style={nftName}
          onChange={e => {
            setMultipleErc721Royalties(e.target.value);
          }}
      />
      <Input
          value={multipleErc721NumberCopies}
          placeholder="Number of copies"
          type="text"
          style={nftName}
          onChange={e => {
            setMultipleErc721NumberCopies(e.target.value);
          }}
      />



        <br/>
        <Button
          style={buttonMint}
          loading={multipleSending721}
          size="large"
          shape="round"
          type="primary"
          onClick={async () => {
            if (!props.writeContracts) return
            setMultipleSending721(true);
            const newTokenId = await generateTokenId(props.writeContracts.ERC721Rarible.address, props.accountAddress)
            setMultipleErc721TokenId(newTokenId)
            setErc721ContractAddress(props.writeContracts.ERC721Rarible.address)
            console.log("sending");
            const form = await createLazyMint(newTokenId, props.provider, props.writeContracts.ERC721Rarible.address, props.accountAddress, multipleErc721IpfsHash, 'ERC721')
            await putLazyMint(form)
            setMultipleSending721(false);
          }}
        >
          Mint
        </Button>

        {/* <Card

          title={
            <div>
              <span style={{ fontSize: 16, marginRight: 8 }}>Token ID: {singleErc721TokenId}</span>
            </div>
            } 
          >
          <div>
            <p>Contract: {erc721ContractAddress}</p>
          </div>
        </Card> */}

  </div>

  }

  </div>
    
  );
}
