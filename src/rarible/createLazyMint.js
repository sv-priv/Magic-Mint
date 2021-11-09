import { utils } from "ethers";
import { sign } from "./lazyMint";
import { RARIBLE_BASE_URL } from "../constants";

export async function generateTokenId(contract, minter) {
	console.log("generating tokenId for", contract, minter)
  const raribleTokenIdUrl = `${RARIBLE_BASE_URL}nft/collections/${contract}/generate_token_id?minter=${minter}`
  const res = await fetch(raribleTokenIdUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resJson = await res.json();
  console.log({resJson})
	return resJson.tokenId
}

async function createLazyMintForm(tokenId, contract, minter, ipfsHash, type, supply) {
  // const tokenId = await generateTokenId(contract, minter)
	// console.log("generated tokenId", tokenId)
  if (type == "ERC721") {
	return {
		"@type": "ERC721",
		contract: contract,
		tokenId: tokenId,
		uri: `/ipfs/${ipfsHash}`,
		creators: [{ account: minter, value: "10000" }],
		royalties: []
	}

  }
  else if (type == "ERC1155") {
	return {
		"@type": "ERC1155",
		contract: contract,
		tokenId: tokenId,
		uri: `/ipfs/${ipfsHash}`,
		creators: [{ account: minter, value: "10000" }],
		royalties: [],
    supply: supply
	}

  }
}

export async function createLazyMint(tokenId, provider, contract, minter, ipfsHash, type, supply) {

  console.log("in")
  const form = await createLazyMintForm(tokenId, contract, minter, ipfsHash, type, supply)

  console.log("the nft forrm", form)
  const signature = await sign(provider, 3, contract, form, minter, type)
  console.log("what is the signature " + signature)
	return { ...form, signatures: [signature] }
}

export async function putLazyMint(form) {

  console.log("we are here")
  console.log("oh its the forn", form)
  const raribleMintUrl = `${RARIBLE_BASE_URL}nft/mints`

  console.log(raribleMintUrl)
  const raribleMintResult = await fetch("https://api-staging.rarible.com/protocol/v0.1/ethereum/nft/mints", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });
  console.log({raribleMintResult})
}