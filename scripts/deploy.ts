// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.

import path from "path";
import { ethers, network, artifacts } from "hardhat";
import { BigNumber, Contract, Wallet } from "ethers";
import { FSAnnounce } from "../typechain-types";

async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const FSAnnounce = await ethers.getContractFactory("FSAnnounce");
  const announce = await FSAnnounce.deploy();
  await announce.deployed();

  console.log("FSAnnounce address:", announce.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
