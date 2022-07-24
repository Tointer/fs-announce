export async function getWalletNftCollections(
  chainId: number,
  address: string
) {
  const url = `https://api.covalenthq.com/v1/${chainId}/address/${address}/balances_v2/?key=ckey_4918c7e8f74246d98490a898e41&nft=true&no-nft-fetch=true`;
  const response = await fetch(url);
  const result = await response.json();
  const data = result.data.items.filter((item: any) => item.type === "nft");
  console.log(data);
  return data;
}
