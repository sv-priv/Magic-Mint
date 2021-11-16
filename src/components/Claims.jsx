import React, { useEffect, useState } from "react";
import SingleClaim from "./partials/singleClaim";


export default function Claims (props){

    const [ userOwnedItems , setUserOwnedItems ] = useState();
    const [ userClaimableItems , setUserClaimableItems ] = useState();

    const  bodyStyle = {
        minHeight: "700px"
    }

    const noClaimsAvailable = {
        textAlign: "center",
        fontSize: "25px",
        marginTop: "50px",
        fontFamily: "Whyte",
        fontWeight: "500",
        textTransform: "uppercase"
    }


    const claimsRow = []
    const myAddress = "0x559441FEf78b7E27b66db69C11e5B3827e1aea96"

    async function fetchData(){
        // const response  = await fetch(`https://ethereum-api.rarible.org/v0.1/nft/items/byOwner?owner=${props.accountAddress}&includeMeta=false`);
        // const userOwnedNfts = await response.json();
        // const  items = userOwnedNfts.items;
        // console.log("itemi", items)
        // setUserOwnedItems(items)



        const claimAddress = props.accountAddress;
        console.log(claimAddress)

        const allClaimableItemsByAddress = await fetch(`https://magic-mint-api.herokuapp.com/api/721/single_lazy_mint_controller/claimer?claimerAddress=${props.accountAddress}`);

        const allClaimableItemsJson =  await allClaimableItemsByAddress.json()
        setUserClaimableItems(allClaimableItemsJson)

        console.log("claims", allClaimableItemsJson)
    }

    useEffect(() => {

        fetchData()

    }, []);



    async function handleClaim(claimTokenData){

        //mint and transfer here

        // console.log("onaction",props.writeContracts)

        const tx = await props.writeContracts.ERC721Rarible.mintAndTransfer([
                claimTokenData.tokenID,
                claimTokenData.uri,
                [[claimTokenData.claimer, 10000]], // You can assign one or add multiple creators, but the value must total 10000
                [[claimTokenData.claimer, 1000]], // Royalties are set as basis point, so 1000 = 10%. 
                ["0x"]
              ],
              claimTokenData.claimer
        );
        console.log(tx)
        
        let filtered = userClaimableItems.filter(function(userClaimableItem, index) {
            if(claimTokenData.index == index){

            }else{
                return claimTokenData.index != index;

            }
          })
        setUserClaimableItems(filtered)
    }   




    if(userClaimableItems){
        userClaimableItems.map((userClaimableItem, index) => {
            claimsRow.push(
                <div className="col-md-3 col-lg-3">
                    
                <SingleClaim index={index} data={userClaimableItem} handleClaim={handleClaim}/>
                </div> 
            )   
        })
    }else{
        claimsRow.push(
            <div style={noClaimsAvailable} className="col-md-12 col-lg-12">
                    No items to claim. :(
            </div>  
        )
    }





    return(

        <div style={bodyStyle}>

            <div className="row" style={{width: "1300px", margin: "0px 300px 0px 0px", marginTop:"6%"} } >
                {claimsRow}
            </div>
        </div>
    )
}