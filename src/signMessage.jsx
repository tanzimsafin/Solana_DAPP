import { useWallet } from "@solana/wallet-adapter-react";
import { ed25519 } from '@noble/curves/ed25519';
import { errors } from "web3";
import bs58 from 'bs58';
export function SignMsg(){
    const wallet=useWallet();
    async function signTheMessage(){
      const msg=document.getElementById("msg").value;
      const Encodedmessage=new TextEncoder().encode(msg);
      const signature=await wallet.signMessage(Encodedmessage);
      if(!ed25519.verify(signature,Encodedmessage,wallet.publicKey.toBytes())){
        throw new errors("Sorry Invalid signature!!")
      }
      alert(`Your signature ${bs58.encode(signature)} is verified!`)
    }
    return(
        <div style={{display:"flex",gap:"20px"}}>
            <input id="msg" type="text" placeholder="message........"/>
            <button onClick={signTheMessage}>Sign Message</button>
        </div>
    )
}