import { BulbFilled } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ipfsAPI = require('ipfs-http-client');
const ipfs = ipfsAPI({host: 'ipfs.infura.io', port: '5001', protocol: 'https' });



export default function (data){
    

    const [singleTokenData, setSingleTokenData] = useState()
    const [singleTokenImage, setSingleTokenImage] = useState()
    const [singleTokenClaimer, setSingleTokenClaimer] = useState()
    const [singleTokenName, setSingleTokenName] = useState()
    const [singleTokenDescription, setSingleTokenDescription] = useState()
    const [singleTokenUri, setSingleTokenUri] = useState()



    

    const card = {
        width: "260px",

        border: "none!important",
        boxShadow: "0px 4px 30px 2px rgba(229, 230, 237, 0.5)",
        borderRadius: "20px!important",
        marginBottom: "10%"
    }

    const fileFormat = {
        float: "right"
    }
    const addressFrom = {
        maxWidth: "80%",
        whiteSpace: "nowrap",
        width: "80%",
        overflow: "hidden",
        textOverflow: "ellipsis",
    }
    const claimButton = {
        padding: "1px 20px 10px 10px",
        fontFamily: "Whyte",
        margin: "15px",
        borderRadius: "20px",
        border: "none",
        borderRadius: "20px",
        // width: "260px",
        background: "rgba(255, 255, 255, 1)"


    }
    const authorEarning = {
        textAlign: "left",
        paddingLeft:  "15px"

    }
    const titleEarning = {
        textAlign: "left",
        fontFamily: "Whyte",
        fontStyle: "normal",
        marginLeft:"5px",
        paddingTop: "5px",
        fontWeight: "normal",
        fontSize: "21px",
        color: "#313439"
    }  
    const cardGroup = {
        borderRadius: "20px"
    }
    const earningPrice = {
        margin: "0 auto",
        marginTop: "40px",
        borderTop: "1px solid rgba(215, 218, 241, 1)"
    }
    const listedPriceEarning = {
        textAlign: "left"
    }

    const leftPartEarning = {
        textAlign: "left",
        borderRight: "1px solid rgba(215, 218, 241, 1)",
        marginTop: "15px",
        minHeight: "60px"
    
    }
    const listedPriceDescEarning = {
        textAlign: "left",
        color: "#D7DAF1",
        fontFamily: "Whyte",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        textTransform: "uppercase",
        lineHeight: "120%"
    
    }
    const rightPartEearning = {
        textAlign: "left",
        marginTop: "15px",
        minHeight: "50px"
    }
    const patronageEarning = {
        textAlign: "left",
        textTransform: "uppercase",
        color: "#313439",
        paddingLeft: "20px"
    
    }
    const cardImgTop = {
        background: "linear-gradient(0deg, #F0F1F9, #F0F1F9), #FFFFFF",
        width: "260px",
        border: "none",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
        height: "260px"
    }
    
    const nftPrice = {
        margin: "0 auto",
        marginTop: "90px",
        borderTop: "1px solid rgba(215, 218, 241, 1)"
    }
    const cardBody = {
        borderRadius: "20px",
        background: "rgba(255, 255, 255, 1) ",
        borderBottomLeftRadius: "20px"

    }
    const patronageDescEarning = {
        textAlign: "left",
        marginLeft: "20px",
        color: "#D7DAF1",
        fontFamily: "Whyte",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        textTransform: "uppercase",
        lineHeight: "120%"
    }

    async function claimNFT(e){



        const claimTokenData ={
            claimer: data.data.claimer,
            index: data.index,
            tokenID: data.data.tokenID,
            uri: singleTokenUri
        }

        data.handleClaim(claimTokenData)
    }

    useEffect( () =>{

        console.log("data", data)

        async function fetchSingleTokenData (){
            
            const singleToken = await fetch(`https://ethereum-api-dev.rarible.org/v0.1/nft/items/0xB0EA149212Eb707a1E5FC1D2d3fD318a8d94cf05:${data.data.tokenID}/lazy`)
            
            
            const singleTokenMeta = await singleToken.json()


            setSingleTokenUri(singleTokenMeta.uri)

            // console.log("single token claimer on API" , data.data.claimer)
            setSingleTokenClaimer(data.data.claimer)




            let singleTokenIPFS =  await fetch(`https://ipfs.io/${singleTokenMeta.uri}`)
            singleTokenIPFS = await singleTokenIPFS.json()

            
            const singleTokenImageLink = `https://ipfs.io/ipfs/${singleTokenIPFS.image}`

            setSingleTokenImage(singleTokenImageLink)

            // console.log(singleTokenImageLink)



            setSingleTokenClaimer()

            // console.log("single", data.data.tokenID, singleTokenMeta.uri)

            
        }

        fetchSingleTokenData()


    },[])
    
    return(
        <div>
                <div style={card}>
                    <img style={cardImgTop} alt="" src={singleTokenImage}>
                    </img>
                    <div  style={cardBody}>
                            <div className="row" style={titleEarning}>
                                <div className="col-md-8 col-lg-8">
                                    {data.data.name}
                                </div>
                                <div className="col-md-4 col-lg-4">
                                    <span className="file-format">
                                        <svg width="42" height="25" viewBox="0 0 42 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="42" height="25" rx="12.5" fill="#EDEFFF"/>
                                            <path d="M10.798 13.114C10.798 16.222 12.282 18.14 14.69 18.14C16.034 18.14 17.014 17.482 17.574 16.334L17.686 18H18.568V13.128H14.788V14.15H17.392C17.308 15.956 16.412 17.048 14.816 17.048C13.094 17.048 12.114 15.648 12.114 13.114C12.114 10.552 13.108 9.166 14.858 9.166C16.174 9.166 16.944 9.978 17.21 11.49L18.456 11.238C18.05 9.166 16.86 8.06 14.872 8.06C12.324 8.06 10.798 9.95 10.798 13.114ZM21.1126 18H22.4006V8.2H21.1126V18ZM25.4121 18H26.6861V13.884H30.4661V12.778H26.6861V9.292H30.9281V8.2H25.4121V18Z" fill="#B2B2C1"/>
                                        </svg>
                                    </span>
                                </div>

                            </div>
                        <div >
                            <div style={authorEarning}>TokenID:
                            <div style={addressFrom}>
                                {data.data.tokenID} 
                             </div>
                             </div>
                            {/* <div style={authorEarning}>Name: 
                            <div style={addressFrom}>
                                {data.data.meta.name} 
                             </div>                            
                            </div> */}

                        </div>
                        <div className="row" style={earningPrice}>

                                <button style={claimButton} onClick={claimNFT}>
                                    Claim
                                </button>

                        </div>
                    </div>
                </div>
        </div>
    )


}