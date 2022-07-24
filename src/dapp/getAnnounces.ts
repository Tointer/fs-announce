import { getWalletNftCollections } from "./getWalletNftCollections";
import { create } from "ipfs-http-client";
import  Lit  from "./litHelper"
import { ethers, network, artifacts } from "hardhat";
import { FSAnnounce } from "../../typechain-types";
import { Contract } from "ethers";
  
export async function getAnnounces(owner: string, tokenAddress: string){
    const FSAnnounce = await ethers.getContractFactory("FSAnnounce");
    const announce: FSAnnounce = new Contract("0xe415D14F42fDF0c08785303d1EA796469e1FdcEb", 
    FSAnnounce.interface, 
    FSAnnounce.signer) as FSAnnounce

    const result: any[] = []

    const count = (await announce.getPostsCount(owner, tokenAddress)).toNumber();
    for (let i = 0; i < count; i++) {
        const data = await announce.getPostByIndex(owner, tokenAddress, i)
        result.push(await Lit.decryptString(data[0], data[1], tokenAddress))
    }

    return result;
}