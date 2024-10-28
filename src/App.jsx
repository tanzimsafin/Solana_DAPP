import { RequestAirDrop } from './RequestAirDrop';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';

import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';


// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

import './App.css'

function App() {
  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/cHoM2bnzBlP2k9MAYnYPtBDAzaEjJqnK"}>
        <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider>
              <div style={{display:"flex",justifyContent: "space-between",gap:"20px"}}> 
                 <WalletMultiButton />
                 <WalletDisconnectButton />
              </div>
              <br/>
              <RequestAirDrop/>
            </WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>
);

}

export default App
