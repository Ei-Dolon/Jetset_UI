# Jetset_UI
Jetset DApp frontend - includes _**TipTap**_ (A Jetset DApp for easy crypto transfer for tipping/donation), onramp crypto purchasing by _**Flooz**_.  

##  The _Jetset Project_ 
is a BNB Chain based platform for a luxury lifestyle and wellness utility token, leveraging the power of NFT's.  
Started by Maverick - Media Personality (successful actor, then successful musician, now successful entrepreneur combining WEB3 Real Estate & Luxury Blockchain Rentals).  
- *LUX*ury property rentals in Los Angeles, Las Vegas, and Miami.
- *LUX*ury vehicle rentals
- Exclusive GetAway Packages in Los Angeles, Las Vegas, and Miami.
- Music (Teddy Riley)
- Artwork (The Art House Las Vegas)
- Spa's
- Restaurants
  
On the roadmap:  
 - Jetset-only holders VIP access to private events in Los Angeles, Las Vegas, and Miami.
 - Night club in Vegas...
 - Pixel Bosses collection by 'The Goat'.
  
  
### Technical Details:
The platform has been up and running since 2021 and has a strong Telegram community, it is a utility token (not a meme coin or a SEC target) on the BNB Chain (previously BNB Smart Chain [BSC]).  
The Fungible Token is a BEP-20 token called [Jetset (JTS)](https://jetsettoken.com) that has been active since 2021.  
The Non-Fungible Token (NFT) is hosted at [Jetset LUX](https://jetsetlux.com).  
  
BNB Chain - Binance Smart Chain contract v2: 0x405be90996e7f995a08c2fbd8d8822ef5b03466c  
  
**Note:** For security and to future-proof the project the contract was updated to the latest upgradeable proxy using OpenZeppelin, the popular open-source framework used for writing secure and scalable smart contracts in the Solidity programming language.
When the contract was updated to the new secure form, the token had it's symbol set in some dex's as JET even though it is JTS.  
  

#### DApp
- Vite v5.12 bundler and HMR
- React v18.2 front-end using JSX files and following typescript coding practices
- Reown AppKit for WalletConnect protocol to support full range of wallet types.
- Ethers.js v6.12.1 blockchain interaction

#### API's:
- BSCScan API - contract instantiatiion and balances
- CoinGecko API - priceData
- Qucicknode API - TipTap transaction submission
  
Clone this repository: [https://github.com/Ei-Dolon/Jetset_Wallet.git](https://github.com/Ei-Dolon/Jetset_Wallet.git)  
Start linux terminal, change directory (cd) to installation directory, list (ls -aL) directory to ensure you see this file.  
Install dependencies:  
`$ npm install`  
Run development:  
`$npm run dev`  
Build project:  
`$npm run build`  
  
See the node.js build at Render: [Jetset UI](https://jetset.onrender.com)  
- Currently shows a basic working example.
- Buy button links to Flooz
- TipTap button links to the TipTap frontend.
- TipTap's bottom navbar returns to the wallet view.

  
