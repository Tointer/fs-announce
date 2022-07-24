export async function getNiftiesInfo(
  chain: string = "ethereum",
  accountAddress: string
) {
  const url = `https://api.nftport.xyz/v0/accounts/${accountAddress}?chain=${chain}&include=contract_information&include=metadata`;
  const response = await fetch(url, {
    headers: {
      Authorization: "c81f98b8-a902-40c6-bbb8-ba2dcecd33ed",
    },
  });
  const result = await response.json();
  let data = result.nfts;
  if (data && data.length) {
    const result = [];
    data.forEach((v) => {
      if (
        !result.find((p) => p.contract_address === v.contract_address) &&
        v.metadata
      ) {
        result.push(v);
      }
    });
    data = result;
  }
  console.log(data);
  return data;
}
