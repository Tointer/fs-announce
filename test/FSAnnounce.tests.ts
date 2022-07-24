// This is an example test file. Hardhat will run every *.js file in `test/`,
// so feel free to add new ones.

// Hardhat tests are normally written with Mocha and Chai.

// We import Chai to use its asserting functions here.
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect, use } from "chai";
import { BigNumber, Contract, Wallet } from "ethers";
import { ethers, userConfig } from "hardhat";
import { FSAnnounce, ERC721Dummy } from "../typechain-types";

describe("FS announce", function () {

    let announce : FSAnnounce;
    let erc721: ERC721Dummy;
    let wallets: SignerWithAddress[];

    beforeEach(async function () {
      const FSAnnounce = await ethers.getContractFactory("FSAnnounce");
      announce = await FSAnnounce.deploy();

      const ERC721Dummy = await ethers.getContractFactory("ERC721Dummy");
      erc721 = await ERC721Dummy.deploy();

      wallets = await ethers.getSigners();;

      erc721.safeMint(wallets[0].address);
    });

    it("Write/Read Posts", async function () {
      await announce.newPost(erc721.address, 
        "0x000000000000000000000000bb9bc244d798123fde783fcc1c72d3bb8c189413",
        "0x000000000000000000000000bb9bc244d798123fde783fcc1c72d3bb8c189413");

      expect(await announce.getPostsCount(wallets[0].address, erc721.address)).to.be.equal(1);

      await announce.newPost(erc721.address, 
        "0x01",
        "0x01");

      expect(await announce.getPostsCount(wallets[0].address, erc721.address)).to.be.equal(2);

      expect((await announce.getPostByIndex(wallets[0].address, erc721.address, 1))[1]).to.be.equal("0x01");
    });

});
