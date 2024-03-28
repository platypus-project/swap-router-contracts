import '@typechain/hardhat'

import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import 'hardhat-watcher'
import 'dotenv/config'

import '@solarity/hardhat-migrate'

import * as dotenv from 'dotenv'
dotenv.config()

const accounts = process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : undefined

const DEFAULT_COMPILER_SETTINGS = {
  version: '0.7.6',
  settings: {
    evmVersion: 'istanbul',
    optimizer: {
      enabled: true,
      runs: 1_000_000,
    },
    metadata: {
      bytecodeHash: 'none',
    },
  },
}

export default {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    arbitrumRinkeby: {
      url: `https://rinkeby.arbitrum.io/rpc`,
    },
    arbitrum: {
      url: `https://arb1.arbitrum.io/rpc`,
    },
    optimismKovan: {
      url: `https://kovan.optimism.io`,
    },
    optimism: {
      url: `https://mainnet.optimism.io`,
    },
    piccadilly: {
      url: `https://rpc1.piccadilly.autonity.org/`,
      accounts
    },
    qdevnet: {
      url: `https://rpc.qdevnet.org`,
      accounts
    },
    qtestnet: {
      url: `https://rpc.qtestnet.org`,
      accounts
    },
    qmainnet: {
      url: `https://rpc.q.org`,
      accounts
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: {
      piccadilly: 'abc',
      qdevnet: 'abc',
      qtestnet: 'abc',
      qmainnet: 'abc',
    },
    customChains: [
      {
        network: 'qdevnet',
        chainId: 35442,
        urls: {
          apiURL: 'http://54.73.188.73:8080/api',
          browserURL: 'http://54.73.188.73:8080',
        },
      },
      {
        network: 'qtestnet',
        chainId: 35443,
        urls: {
          apiURL: 'https://explorer-old.qtestnet.org/api',
          browserURL: 'https://explorer-old.qtestnet.org',
        },
      },
      {
        network: 'qmainnet',
        chainId: 35441,
        urls: {
          apiURL: 'https://explorer.q.org/api',
          browserURL: 'https://explorer.q.org',
        },
      },
      {
        network: `piccadilly`,
        chainId: 65100002,
        urls: {
          apiURL: 'https://piccadilly.autonity.org/api',
          browserURL: 'https://piccadilly.autonity.org',
        },
      },
    ],
  },
  solidity: {
    compilers: [DEFAULT_COMPILER_SETTINGS],
  },
  watcher: {
    test: {
      tasks: [{ command: 'test', params: { testFiles: ['{path}'] } }],
      files: ['./test/**/*'],
      verbose: true,
    },
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
    alwaysGenerateOverloads: true,
    discriminateTypes: true,
  },
}
