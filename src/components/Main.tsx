import Image from "next/image";
import LogoImg from "../assets/fs-announce-logo.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import classNames from "classnames";
import { useEffect, useState } from "react";

import CollectionMockImg from "../assets/collection-mock.png";
import { getWalletNftCollections } from "../dapp/getWalletNftCollections";
import { useAccount } from "wagmi";

const Main = () => {
  const { address, isConnected } = useAccount();

  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    if (document) {
      const body = document.querySelector("body");
      // @ts-expect-error
      body.style = "overflow:hidden";
    }
  }, []);

  const [loadingNFT, setLoadingNFT] = useState(false);
  const [loadingAnnounces, setLoadingAnnounces] = useState(false);
  const [loadingAnalytics, setLoadingAnalytics] = useState(false);
  const [nifties, setNifties] = useState<any>([]);

  useEffect(() => {
    if (!(isConnected && address)) {
      return;
    }

    console.log({ address });
    const getNifties = async () => {
      setLoadingNFT(true);
      try {
        const data = await getWalletNftCollections(1, address);
        setNifties(data);
      } finally {
        setLoadingNFT(false);
      }
    };
    getNifties();
  }, [isConnected]);

  console.log({ nifties });

  return (
    <>
      <header className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <Image src={LogoImg} alt="" width={64} height={64} />
          <ConnectButton />
        </div>
      </header>
      <main className="mt-4">
        <div className="container mx-auto">
          <div className="flex items-start">
            <button
              onClick={() => setActiveTab("home")}
              className={classNames(
                "relative w-[260px] inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-xl group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
              )}
            >
              <span
                className={classNames(
                  "relative flex items-center space-x-2 px-5 py-2.5 transition-all ease-in duration-75 w-full rounded-[10px] group-hover:bg-opacity-0 group-hover:text-white",
                  activeTab === "home"
                    ? "text-white bg-transparent"
                    : "text-black bg-white"
                )}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span>Home of Announces</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab("create")}
              className={classNames(
                "relative w-[260px] inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-xl group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
              )}
            >
              <span
                className={classNames(
                  "relative flex items-center space-x-2 px-5 py-2.5 transition-all ease-in duration-75 w-full rounded-[10px] group-hover:bg-opacity-0 group-hover:text-white",
                  activeTab === "create"
                    ? "text-white bg-transparent"
                    : "text-black bg-white"
                )}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span>Create Announce</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab("analytics")}
              className={classNames(
                "relative w-[260px] inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-xl group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
              )}
            >
              <span
                className={classNames(
                  "relative flex items-center space-x-2 px-5 py-2.5 transition-all ease-in duration-75 w-full rounded-[10px] group-hover:bg-opacity-0 group-hover:text-white",
                  activeTab === "analytics"
                    ? "text-white bg-transparent"
                    : "text-black bg-white"
                )}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  />
                </svg>
                <span className="relative">
                  Announce Analytics{" "}
                  <div className="absolute -right-14 badge-xs p-2 top-1/2 -translate-y-1/2 badge badge-warning badge-outline">
                    beta
                  </div>
                </span>
              </span>
            </button>
          </div>
          <div></div>
        </div>
        <div className="mt-4">
          {activeTab === "home" ? (
            <div className="border-t border-b p-4 overflow-auto max-h-screen">
              <div className="flex flex-col space-y-4 container mx-auto">
                {!isConnected ? (
                  <div className="text-center text-xl">
                    Please, connect wallet
                  </div>
                ) : loadingAnnounces ? (
                  <div role="status" className="mx-auto py-4 text-center">
                    <svg
                      className="inline mr-2 w-12 h-12 text-gray-200 animate-spin fill-pink-500"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  [1, 2, 3, 4, 5, 6, 7, 8, 9].map((v) => (
                    <div
                      key={v}
                      className="rounded-xl border p-4 w-[600px] max-w-full"
                    >
                      <p className="font-bold">
                        <span className="bg-gradient-to-br from-pink-500 to-orange-400 text-white px-2 py-1 rounded-xl font-semibold">
                          Crypto Punks
                        </span>{" "}
                        Collection
                      </p>
                      <div className="space-x-2 flex mt-3">
                        <Image
                          src={CollectionMockImg}
                          alt=""
                          className="w-16 h-16 rounded"
                          width={64}
                          height={64}
                        />
                        <div className="flex flex-col justify-between">
                          <div>Some message description bla bla bla</div>
                          <div className="font-semibold text-xs">
                            12:30 05/07/2022
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          ) : activeTab === "create" ? (
            <div className="border-t border-b p-4 overflow-auto max-h-screen">
              <div className="flex flex-col space-y-4 container mx-auto">
                {!isConnected ? (
                  <div className="text-center text-xl">
                    Please, connect wallet
                  </div>
                ) : loadingNFT ? (
                  <div role="status" className="mx-auto py-4 text-center">
                    <svg
                      className="inline mr-2 w-12 h-12 text-gray-200 animate-spin fill-pink-500"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <div>
                    <div className="flex flex-wrap items-center space-x-2">
                      {nifties.map((v) => (
                        <div key={v.contract_address} className="rounded-xl">
                          <img src={v.logo_url} alt="" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="border-t border-b p-4 overflow-auto max-h-screen">
              <div className="flex flex-col space-y-4 container mx-auto">
                {!isConnected ? (
                  <div className="text-center text-xl">
                    Please, connect wallet
                  </div>
                ) : loadingAnalytics ? (
                  <div role="status" className="mx-auto py-4 text-center">
                    <svg
                      className="inline mr-2 w-12 h-12 text-gray-200 animate-spin fill-pink-500"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <div>Analytics</div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Main;
