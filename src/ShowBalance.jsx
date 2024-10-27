import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function ShowBalance(){
    const wallet=useWallet();
    const {connection}=useConnection();

    async function getBalance(){
        if(wallet.publicKey){
           const balance=await connection.getBalance(wallet.publicKey);
           document.getElementById("balance").innerHTML=balance/LAMPORTS_PER_SOL+" "+"SOL";
           
        }         
    }
    return (
        <div>
          <button onClick={getBalance}>Show Balance</button>
          <p>Your SOL Balance Is: </p> 
          <div id="balance"></div>
        </div>
    )
}