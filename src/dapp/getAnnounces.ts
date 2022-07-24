import Lit from "./litHelper";
import { ethers } from "ethers";
import { MUMBAI_CONTRACT_ADDRESS } from "./contracts";
import FSAnnounceABI from "./FSAnnounceABI.json";

export async function getAnnounces(
  owner: string,
  tokenAddress: string,
  provider: any
) {
  const announce = new ethers.Contract(
    MUMBAI_CONTRACT_ADDRESS,
    FSAnnounceABI,
    new ethers.providers.JsonRpcProvider(
      "https://polygon-mumbai.g.alchemy.com/v2/R7xBXk5L6mjOaziNji0aU5oSzn5BW21i"
    )
  );

  const result: any[] = [];

  try {
    const count = (
      await announce.getPostsCount(owner, tokenAddress)
    ).toNumber();
    for (let i = 0; i < count; i++) {
      const data = await announce.getPostByIndex(owner, tokenAddress, i);

      const base64 = await fetch(data[0]);
      const blob = await base64.blob();
      result.push(await Lit.decryptString(blob, data[1], tokenAddress));
    }

    return result;
  } catch (err) {
    console.error(err);
  }
}
