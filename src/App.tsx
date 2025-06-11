//src/App.tsx
import { createAppKit } from '@reown/appkit/react';
import { networks, projectId, metadata, ethersAdapter } from './config/index.tsx';
import { ActionButtonList } from './components/ActionButtonList.tsx';
import { SmartContractActionButtonList } from './components/SmartContractActionButtonList.tsx';
import { InfoList } from './components/InfoList.tsx';
//import { bsc } from '@reown/appkit/networks';
import { useState } from 'react';

import "./App.css"

// Initialize AppKit *outside* the component render cycle
// Create a AppKit instance
createAppKit({
	adapters: [ethersAdapter],
	// Pass networks directly (type is now correctly inferred from config)
	networks,
//	defaultNetwork: bsc, // Or your preferred default
	metadata,
	// Use non-null assertion `!` as projectId is checked runtime, needed for TypeScript
	projectId,
	themeMode: 'light',
	features: {
	analytics: true
	}, // Optional features
})

export function App() {
	const [transactionHash, setTransactionHash] = useState('');
	const [signedMsg, setSignedMsg] = useState('');
	const [balance, setBalance] = useState('');

	const receiveHash = (hash: string) => {
	setTransactionHash(hash); // Update the state with the transaction hash
	};

	const receiveSignedMsg = (signedMsg: string) => {
	setSignedMsg(signedMsg); // Update the state with the transaction hash
	};

	const receiveBalance = (balance: string) => {
	setBalance(balance)
	}

	return (
	<div className={"pages"}>
		<h1>Jetset</h1>
		<appkit-button />
		<ActionButtonList sendHash={receiveHash} sendSignMsg={receiveSignedMsg} sendBalance={receiveBalance} />
		<SmartContractActionButtonList />
		<InfoList hash={transactionHash} signedMsg={signedMsg} balance={balance} />
	</div>
	)
}

export default App

