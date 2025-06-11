import { bsc } from '@reown/appkit/networks'
import type { AppKitNetwork } from '@reown/appkit/networks'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'


// Get projectId from https://cloud.reown.com
export const projectId = process.env.VITE_PROJECT_ID || "9f0984b9286c65678805e20af26c292d";
// Add a check for projectId for type safety, although config throws error already.
if (!projectId) {
  console.error("AppKit Initialization Error: Project ID is missing.");
  // Optionally throw an error or render fallback UI
  throw new Error('Project ID is not defined');
}

export const metadata = {
  name: 'Jetset',
  description: 'Jetset Frontend DApp',
  //  url: typeof window !== 'undefined' ? window.location.origin : import.meta.env.JETSET_URL,
  //  icons: [import.meta.env.JETSET_ICON_URL],
  url: 'https://dapp.jetsettoken.com',
  icons: ['https://jetsettoken.com/dapp/favicon.ico']
}

export const networks = [bsc] as [AppKitNetwork, ...AppKitNetwork[]]
export const ethersAdapter = new EthersAdapter();
