import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function RequestAirDrop(){
    const {connection}=useConnection();
    const wallet=useWallet();
    async function Airdrop(){
       const amount=document.getElementById("amount").value;
       console.log(amount);
       await connection.requestAirdrop(wallet.publicKey,amount*LAMPORTS_PER_SOL);
       alert(`${amount*LAMPORTS_PER_SOL} is sent to ${wallet.publicKey.toBase58()}`);
    }
    return(
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <input id="amount" type="text" placeholder="amount..."/>
            <button onClick={Airdrop}>Request Air Drop</button>
        </div>
    )
}