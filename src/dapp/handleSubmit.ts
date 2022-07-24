import { create } from "ipfs-http-client";
import Lit from "./litHelper";

export async function handleSubmit(contractAddress: string, message: string) {
  const client = create({ url: "https://ipfs.infura.io:5001/api/v0" });

  try {
    const created = await client.add(message);
    const url = `https://ipfs.infura.io/ipfs/${created.path}`;

    const encrypted = await Lit.encryptString(url, contractAddress);

    return encrypted;
  } catch (error) {
    /* @ts-ignore */
    console.log(error.message);
  }
}
