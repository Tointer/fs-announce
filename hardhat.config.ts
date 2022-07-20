import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import '@openzeppelin/hardhat-upgrades';
import "@nomicfoundation/hardhat-toolbox";

dotenv.config();

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");

const accounts = process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [];

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.15",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      },
    }
  },
  networks: {
    hardhat: {
      accounts: {
        count: 100 //it's convenient to have more accounts for large simulation tests
      },
      chainId: 1337, // We set 1337 to make interacting with MetaMask simpler
    },
    eth_mainnet: {
      url: process.env.ETH_MAINNET_API ?? "",
      accounts,
      chainId: 1
    },
    rinkeby: {
      url: process.env.ETH_RINKEBY_API ?? "",
      accounts,
      chainId: 4
    },
    goerli: {
      url: process.env.ETH_GOERLI_API ?? "",
      accounts,
      chainId: 5
    },
    bsc_mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      accounts,
    },
    bsc_testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      accounts,
    }
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
    coinmarketcap: process.env.CMCAP_KEY,
    token: "ETH",
  },
  etherscan: {
    apiKey: process.env.SCAN_API_KEY,
  },
  mocha: {
    timeout: 60000
  },
};
