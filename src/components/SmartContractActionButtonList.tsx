import { useAppKitNetwork, useAppKitAccount, useAppKitProvider } from '@reown/appkit/react'
import { Contract, BrowserProvider } from 'ethers'
import type { Provider } from '@reown/appkit/react'

const jetsetABI = [{ "inputs": [{ "internalType": "address", "name": "account_", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }]

export const SmartContractActionButtonList = () => {
	const { isConnected } = useAppKitAccount() // AppKit hook to get the address and check if the user is connected
	const { chainId } = useAppKitNetwork()
	const { walletProvider } = useAppKitProvider<Provider>('eip155')

	const jetsetContract = "0x405be90996e7f995a08c2fbd8d8822ef5b03466c";

	const handleReadSmartContract = async () => {
		console.log("Read BNB Smart Chain Smart Contract");
		const ethersProvider = new BrowserProvider(walletProvider);
		//      const signer = await ethersProvider.getSigner()
		const contract = new Contract(jetsetContract, jetsetABI, ethersProvider);
		const data = await contract.retrieve();
		console.log("data: ", data)
	}

	//    const handleWriteSmartContract = async () => {
	//		console.log("Write BNB Smart Chain Smart Contract")
	//		const ethersProvider = new BrowserProvider(walletProvider);
	//			const signer = await ethersProvider.getSigner()
	//			const contract = new Contract(jetsetContract, jetsetABI, signer);
	//			const data = await contract.store(1n);
	//			console.log("data: ", data)
	//    }		
	/*		writeContract({
				address: storageSC,
				abi: storageABI,
				functionName: 'store',
				args: [123n],
			})
		}
		const { writeContract, isSuccess } = useWriteContract()
		const readContract = useReadContract({
			address: storageSC,
			abi: storageABI,
			functionName: 'retrieve',
			query: {
				enabled: false, // disable the query in onload
			}
		})
	
		useEffect(() => {
			if (isSuccess) {
				console.log("contract write success");
			}
		}, [isSuccess])
	
	*/

	return (
		isConnected && chainId === 56 && (
			<div >
				<button onClick={handleReadSmartContract}>Read BNB Smart Chain Smart Contract</button>
			</div>
		)
	)
}
