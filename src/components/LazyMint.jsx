import React, { useEffect, useState } from "react";
import { Button, Input, Card, Divider } from "antd";
import {AddressInput} from '.'
import { BufferList } from "bl";
import { createLazyMint, generateTokenId, putLazyMint } from "../rarible/createLazyMint";
import { is } from "@babel/types";
import axios from "axios";
import { createRaribleSdk } from "@rarible/protocol-ethereum-sdk"
import { EthereumWallet } from "@rarible/sdk-wallet"

const ipfsAPI = require('ipfs-http-client');
const ipfs = ipfsAPI({host: 'ipfs.infura.io', port: '5001', protocol: 'https' });


export default function LazyMint(props) {

  const sdk = createRaribleSdk(props.provider, "mainnet", { fetchApi: fetch })


  const titleMint = {
      fontFamily: "Whyte-Inktrap",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "35px",
      lineHeight: "100%",   
      letterSpacing: "-0.02em",
      textTransform: "uppercase",
      color: "#313439",
      textAlign: "center"
  }

  const active = {
    backgroundColor:"rgba(73, 70, 230, 1)",
    color: "white!important"

  }

  const createDesc = {

    fontSize: "20px",
    textTransform: "uppercase",
    fontWeight: "600",
    marginBottom: "60px"

  }
  const chooseLabel = {
    margniTop: "50px"
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
      width: "200px",
      height: "50px",
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
      fontSize: "15px",
      lineHeight: "25px",
      textAlign: "center",
      letterSpacing: "0.02em",
      textTransform: "uppercase",
      color: "#313439",
      flex: "none",
      paddingTop: "10%",
      color: "rgb(178, 178, 193)"
  }
  const allowedFormats = {
      textAlign: "center",
      marginTop: "10%",
      marginBottom: "13%"

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

  const nftDragDrop = {
    width: "500px",
    height: "300px",
    margin: " 0 auto",
    background: "#F0F1F9",
    borderRadius: "110px",
    marginBottom: "34px"
  }

  const label = {
    display: "inline-block",
    backgroundColor: "indigo",
    color: "white",
    padding: "0.5rem",
    fontFamily: "sans-serif",
    borderRadius: "0.3rem",
    cursor: "pointer",
    marginTop: "80px",
  }
  
  const getFromIPFS = async hashToGet => {
    for await (const file of ipfs.get(hashToGet)) {
      console.log(file.path)

      if (!file.content) continue;
      const content = new BufferList();
      for await (const chunk of file.content) {
        content.append(chunk);
      }
      return content;
    }
  };
  const getFromIpfsGateway = async hashToGet => {
    const response = await fetch(`https://ipfs.io/ipfs/${hashToGet}`);
  
    return response.json();
  };
  
  

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
  const [singleClaimerAddress721, setSingleClaimerAddress721] = React.useState();





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


  const [singleNFT, setIsSingle] = useState(true)
  const [formData, setFormData] = useState()
  const [isMint, setIsMint] = useState(false)
  const [multipleNFT, setIsMultiple] = useState(false)

  const onChangeTypeSingle = () => {
        setIsSingle(true)
        setIsMultiple(false)
      
  };
  const onChangeTypeMultiple = () => {
      setIsSingle(false)
      setIsMultiple(true)
  };


  
  // on every render
  useEffect( ()=>{
    
  })

  // on first render/mount
  useEffect(()=>{
    // const creations = sdk.apis.item.getItemsByCreator({ creator: "0x559441FEf78b7E27b66db69C11e5B3827e1aea96" })
    // console.log("apis",sdk.apis.nftItem.getNftItemsByCreator("0x559441FEf78b7E27b66db69C11e5B3827e1aea96" ))
    console.log("on first  render/ mount")
    console.log("napisani dog", props.writeContracts)

  },[])

  // on first render +  whenever dependency formData is updated
  useEffect(()=>{

      console.log("from use effect IPFS HASH", singleErc721File)

  },[ formData])

  return (
    <div>


    <div>
      <div style={createDesc}>
        Create NFT
      </div>

      <div style={nftDragDrop}>
        <form>
        <div style={nftDropareaDesc}>
            Upload your NFT content image
        </div>

        <div style={allowedFormats}>
            <span style={format}>
                JPEG
            </span>
            <span style={format}>
                PNG
            </span>
            <span style={format}>
                GIF
            </span>
        </div>

        
        <input type="file" id="upload" 
        onChange={ e => {
          e.preventDefault();
          console.log(e.target.files[0])
          const file = e.target.files[0]
         setSingleErc721File(e.target.files[0])
       }}
        hidden/>
        <label for="upload" style={chooseLabel}>Choose file</label>

        {/* <Input
          placeholder=""
          type="file"
          id="upload"
          style={nftDroparea}
           onChange={ e => {
             e.preventDefault();
            const file = e.target.files[0]
            setSingleErc721File(e.target.files[0])
          }}
        /> */}

        </form>

      </div>

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
        <div>Claimer:</div>
        <Input
          value={singleClaimerAddress721}
          placeholder="Enter an Ethereum address"
          type="text"
          style={nftName}
          onChange={e => {
            setSingleClaimerAddress721(e.target.value);
          }}
        />
      <br/>
        <div>Choose Collection</div>
        <label>
          <Input
            value={singleErc721Collection}
            placeholder=""
            type="checkbox"
            onChange={e => {
              setSingleErc721Collection("Rarible");
            }}
          />
        Rarible
        </label>


          <br/>
        <Button
          style={buttonMint}
          loading={singleSending721}
          size="large"
          shape="round"
          type="primary"
          onClick={async () => {


            const r = await ipfs.add(singleErc721File)

            console.log("rrrrrr",r)
            setSingleErc721File(r.path)
            
            console.log("image on ipfs ", singleErc721File)

             const formData = {
              name: singleErc721Title,
              description: singleErc721Description,
              image: r.path,
              attributes:{
              }
            }
            setFormData(formData)

            console.log("dataform to be uploadedd to ipfs" ,formData)
            
            const ipfsMetadataHash= await ipfs.add(JSON.stringify(formData))

            console.log( "full data uploaded to ipfs ", ipfsMetadataHash.path)



            if (!props.writeContracts) return
            setSingleSending721(true);
            const newTokenId = await generateTokenId(props.writeContracts.ERC721Rarible.address, props.accountAddress)
            setSingleErc721TokenId(newTokenId)

            console.log("this is the single token ID", newTokenId)

            setErc721ContractAddress(props.writeContracts.ERC721Rarible.address)

            console.log("sending");

            const form = await createLazyMint(newTokenId, props.provider, props.writeContracts.ERC721Rarible.address, props.accountAddress, ipfsMetadataHash.path, 'ERC721', singleClaimerAddress721)

            console.log("the form set to lazyminting", form)



            await putLazyMint(form)

            const mintDatabaseForm = {
              tokenID: newTokenId,
              creator: props.accountAddress,
              constract: props.writeContracts.ERC721Rarible.address,
              claimer: singleClaimerAddress721,
            }

            const mintToDatabase = await fetch("https://magic-mint-api.herokuapp.com/api/721/single_lazy_mint_controller/create", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(mintDatabaseForm),
            });

            setSingleSending721(false);


            const response  = await fetch(`https://ethereum-api-dev.rarible.org/v0.1/nft/items/${props.writeContracts.ERC721Rarible.address}:${newTokenId}/lazy`)

            console.log("fetched data", response.json())



          }}
        >
          Mint
        </Button>




          <div>

          </div>

    </div>


  </div>
    
  );
}
