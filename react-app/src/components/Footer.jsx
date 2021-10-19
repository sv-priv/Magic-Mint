import React from "react";


const footerText = {
    color: "white",
    paddingTop: "20px"

}
const footer = {
    width:"100%",
    height:"60px",  
    textAlign: "center",
    backgroundColor: "black",
    fontFamily: "Grtsk Zetta"

}

export default function Footer(){


    return(
        <div style={footer}>
            <div style={footerText}>
                Copyright © Rarible DAO
            </div>
        </div>
    )
}
