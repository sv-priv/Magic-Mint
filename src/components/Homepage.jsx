import React from "react";
import { Link } from "react-router-dom";


export default function Homepage (props){

    const image = {
        marginTop:"1%",
        width:"20%"
    }
    const buttonsLanding = {
        backgroundColor: "white",
        borderRadius: "0px 60px 0px 60px",
        textTransform: "uppercase",
        width: "100%",
        marginTop: "5%",
        marginBottom: "3%",
        fontFamily: "Grtsk Zetta"

    }

    const buttonText = {
        marginTop: "77px",

        color: "white"
    }
    const description = {
        textTransform: "uppercase",
        fontFamily: "Grtsk Zetta"

    }

    const protocolLink = {
        textTransform: "uppercase",
        fontFamily: "Grtsk Zetta"

    }
    const documentationButton = {
        height: "180px",
        color: "white",
        textTransform: "uppercase",
        border: "none",
        borderRadius: "42px",
        background: "linear-gradient(87.79deg, #8794FF 5.12%, #3B50FF 99.11%)",
        "&:hover": {
            background: "linear-gradient(87.79deg, #3B50FF 5.12%, #8794FF 98.62%)"
        }
    }

    const browseButton = {
        marginLeft: "20px",
        height: "180px",
        borderRadius: "42px",
        textTransform: "uppercase",
        border: "none",
        background: "#EDEFFF",
        "&:hover": {
            background: "#BAC2FF"
        }
    }
    const textLink = {
        fontFamily: "Grtsk Zetta",
        color: "white"
    }
    const textLinkBlack = {
        fontFamily: "Grtsk Zetta",
        color: "black"
    }


  
    return(
        <div>
            <div className="App-header">
                <img 
                style={image}
                src="https://rarible-protocol.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F73d99785-c372-4294-9b69-d9ade82a2ff3%2FBlack2x.png?table=block&id=9e4dc353-375c-4e93-bb95-f496ddb66c54&spaceId=afc9e5bf-dd06-4d0f-8064-0aaf0daeba44&width=2000&userId=422a70d3-652d-44d6-a84a-9a946d8905ef&cache=v2"
                className="App-logo"
                alt="logo" />
                <p style={description}>
                Use lazy minting the way you want. Create and claim lazy minted NFTs.
                </p>
                <a
                className="App-link"
                href="https://rarible.org"
                target="_blank"
                style={protocolLink}
                rel="noopener noreferrer"
                >
                Rarible Protocol
                </a>
                {/* <div>
                <Link to="/menu">
                    Use the protocol
                </Link>
                </div> */}
            </div>
            <div  style={buttonsLanding} className="row">
                    <div className="col-lg-1 col-md-1"></div>
                    <button style={documentationButton} className="col-lg-5 col-md-5 read-documentation-button">
                        <div className="button-text">
                        <Link  style={textLink}  to="/lazyMint">
                                Create an NFT
                        </Link>
                        
                        </div>
                    </button>
                    <button  style={browseButton} className="col-lg-5 col-md-5 browse-button">
                        <div className="button-text">
                            <Link style={textLinkBlack} to="/claims">
                                Claim an NFT 
                            </Link>
                        </div>
                    </button>
                    <div className="col-lg-1 col-md-1"></div>

                </div>
        </div>
    )

}