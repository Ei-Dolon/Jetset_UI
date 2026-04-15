// src/config/config.ts
import { createConfig, http, fallback, unstable_connector, createStorage } from 'wagmi';
import { bsc } from "wagmi/chains";
import {
  injected,
  walletConnect,
  metaMask,
  coinbaseWallet,
} from "wagmi/connectors";
import { DAPP_NAME, DAPP_DESCRIPTION, DAPP_URL, JETSETUI_SVG_URL } from './consts.ts';

declare module 'wagmi' {
	interface Register {
		config: typeof config;
	}
}

const projectId = import.meta.env.VITE_JETSETUI_WC_ID;
if (!projectId) {
	console.error('WalletConnect Initialization Error: Project ID is missing.');
	// Optionally throw an error or render fallback UI
	throw new Error('Project ID is missing, or expired, check cloud.reown.com');
}

//SSR / Netlify-safe storage
const storage = typeof window !== 'undefined' ? createStorage({ storage: window.localStorage }) : undefined;

const bscRpc = [
  "https://bsc-dataseed1.binance.org",
  "https://bsc-dataseed2.defibit.io",
  "https://bsc-dataseed3.ninicoin.io",
];

export const connectors = [
  	injected({ shimDisconnect: true }),

	  walletConnect({
			projectId,
			metadata: {
				name: DAPP_NAME,
				description: DAPP_DESCRIPTION,
				url: DAPP_URL,
				icons: [JETSETUI_SVG_URL],
			},
			showQrModal: true, // critical for mobile
		}),
		
	metaMask({
			dappMetadata: {
				name: DAPP_NAME,
				url: DAPP_URL,
				iconUrl: JETSETUI_SVG_URL,
			},
		}),

		coinbaseWallet({
			appName: DAPP_NAME,
			appLogoUrl: JETSETUI_SVG_URL,
		}),
;

export const config = createConfig({
	storage,
	multiInjectedProviderDiscovery: true,
	chains: [bsc],
	connectors,
	transports: {
    [bsc.id]: fallback([
			// wallet RPC first (MetaMask / Trust / WC wallets)
			unstable_connector(injected),
			// public fallback for pre-connect reads
			http('https://rpc.ankr.com/bsc'),
			http(bscRpc),
			http(), // wagmi default
		]),
	ssr: true,
});
