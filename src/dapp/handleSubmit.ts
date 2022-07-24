import { create } from "ipfs-http-client";
import Lit from "./litHelper";

export async function handleSubmit(contractAddress: string, message: string) {
  const client = create({ url: "https://ipfs.infura.io:5001/api/v0" });

  try {
    const created = await client.add(message);
    const url = `https://ipfs.infura.io/ipfs/${created.path}`;

    const encrypted = await Lit.encryptString(url, contractAddress);

    // console.log("ENCRYPTED:");
    // console.log(encrypted.encryptedFile);
    // console.log(encrypted.encryptedSymmetricKey);

    return encrypted;
  } catch (error) {
    /* @ts-ignore */
    console.log(error.message);
  }
}
