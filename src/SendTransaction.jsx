import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

export function SendTransaction(){
  const {connection}=useConnection();
  const wallet=useWallet();
  async function sendSol(){
     const to=document.getElementById("to").value;
     const amount=document.getElementById("amount").value;
     const transaction=new Transaction();
     transaction.add(SystemProgram.transfer({
        fromPubkey:wallet.publicKey,
        toPubkey:new PublicKey(to),
        lamports:amount*LAMPORTS_PER_SOL
     }));
    await wallet.sendTransaction(transaction,connection);
    alert(`Trasaction Successfull!!! ${amount} SOL is sent to ${to}`);
  }
  return(
    <div>
        <div style={{display:"flex",gap:"20px"}}>
            <input id="amount" type="text" placeholder="amount....."/>
            <input id="to" type="text" placeholder="receiver address"/>
            <button onClick={sendSol}>Send</button>
        </div>  
    </div>
  )
}