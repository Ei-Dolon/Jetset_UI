import { useDisconnect, useAppKit, useAppKitNetwork, useAppKitAccount, useAppKitProvider, useAppKitNetworkCore, type Provider } from '@reown/appkit/react'
import { BrowserProvider, JsonRpcSigner, parseUnits, formatEther } from 'ethers'
import { networks } from '../config/index.tsx'

// test transaction
const TEST_TX = {
	to: "0x7c4a36b206a0dc2f7c1bff0a3c6e6acad1d323c7",
	value: parseUnits('0.0001', 'gwei')
}

interface ActionButtonListProps {
	sendHash: (hash: string) => void;
	sendSignMsg: (hash: string) => void;
	sendBalance: (balance: string) => void;
}

export const ActionButtonList = ({ sendHash, sendSignMsg, sendBalance }: ActionButtonListProps) => {
	const { disconnect } = useDisconnect(); // AppKit hook to disconnect
	const { open } = useAppKit(); // AppKit hook to open the modal
	const { chainId } = useAppKitNetworkCore();
	const { switchNetwork } = useAppKitNetwork(); // AppKithook to switch network
	const { address, isConnected } = useAppKitAccount() // AppKit hook to get the address and check if the user is connected
	const { walletProvider } = useAppKitProvider<Provider>('eip155')


	const handleDisconnect = async () => {
		try {
			await disconnect();
		} catch (error) {
			console.error("Failed to disconnect:", error);
		}
	};

	// function to send a tx
	const handleSendTx = async () => {
		if (!walletProvider || !address) throw Error('user is disconnected');

		const provider = new BrowserProvider(walletProvider, chainId);
		const signer = new JsonRpcSigner(provider, address)

		const tx = await signer.sendTransaction(TEST_TX);
		await tx.wait(); // This will wait for the transaction to be mined

		sendHash(tx.hash);
	}
	/*
		const { data: gas } = useEstimateGas({ ...TEST_TX }); // Wagmi hook to estimate gas
		const { data: hash, sendTransaction, } = useSendTransaction(); // Wagmi hook to send a transaction
		const { signMessageAsync } = useSignMessage() // Wagmi hook to sign a message
		const { refetch } = useBalance({
			address: address as Address
		}); // Wagmi hook to get the balance
	
	   
		useEffect(() => {
			if (hash) {
				sendHash(hash);
			}
		}, [hash]);
	
		// function to send a tx
		const handleSendTx = () => {
			try {
				sendTransaction({
					...TEST_TX,
					gas // Add the gas to the transaction
				});
			} catch (err) {
				console.log('Error sending transaction:', err);
			}
		}
	*/
	// function to sign a msg 
	const handleSignMsg = async () => {
		if (!walletProvider || !address) throw Error('user is disconnected');

		const provider = new BrowserProvider(walletProvider, chainId);
		const signer = new JsonRpcSigner(provider, address);
		const sig = await signer?.signMessage('Authenticate access token');

		sendSignMsg(sig);
	}


	// function to get the balance
	const handleGetBalance = async () => {
		if (!walletProvider || !address) throw Error('user is disconnected')

		const provider = new BrowserProvider(walletProvider, chainId)
		const balance = await provider.getBalance(address);
		const bnb = formatEther(balance);
		sendBalance(`${bnb} BNB`);
		//		sendBalance(balance?.data?.value.toString() + " " + balance?.data?.symbol.toString())
	}
	return (
		<div >
			{isConnected ? (
				<div>
					<button onClick={() => open()}>Open</button>
					<button onClick={handleDisconnect}>Disconnect</button>
					<button onClick={() => switchNetwork(networks[1])}>Switch</button>
					<button onClick={handleSignMsg}>Sign msg</button>
					<button onClick={handleSendTx}>Send tx</button>
					<button onClick={handleGetBalance}>Get Balance</button>
				</div>
			) : null}
		</div>
	)
}
