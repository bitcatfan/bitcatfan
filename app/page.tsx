"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Tweet } from "react-tweet";
import toast, { Toaster } from "react-hot-toast";

export default function MemePage() {
  const [tabs] = useState([
    { name: "CoinMarketCap", url: "https://coinmarketcap.com/dexscan/solana/EJUgQQABcKXEiERGkUFXM45swGvSFoi8p7fnAcyErTDK/", icon: "/icons/coinmarketcap.svg" },
    { name: "DexScreener", url: "https://dexscreener.com/solana/ejugqqabckxeiergkufxm45swgvsfoi8p7fnacyertdk", icon: "/icons/dexscreener.svg" },
    { name: "Twitter", url: "https://x.com/bitcatfans", icon: "/icons/x.svg" },
    { name: "Bitcoin", url: "https://x.com/Bitcoin/status/1857419117025808830", icon: "/icons/bitcoin.svg" },
    { name: "Medium", url: "https://medium.com/@bitcatfan/the-bitcat-phenomenon-a-market-revolution-combining-bitcoin-and-meme-culture-9317e79f8258", icon: "/icons/medium.svg" },
    { name: "Github", url: "https://github.com/bitcatfan/bitcatfan", icon: "/icons/github.svg" },
  ]);

  const [isTabListOpen, setIsTabListOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const contractAddress = "4j9bDg7iWNah1Qa61rrqwWZMtEdqV3fV56SzyhfNpump";
  const tokenSupply = "1,000,000,000";

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast('Contract address copied to clipboard!');
  };

  const toggleTabList = () => setIsTabListOpen(!isTabListOpen);

  return (
    <div style={{
      maxWidth: "100vw",
      width: "100vw",
      overflowX: "hidden",
      margin: "0 auto",
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
      backgroundImage: "url('/icons/bg.svg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}>
      {isMobile ? (
        <div style={{ alignSelf: "flex-end" }}>
          <button style={{ background: "transparent", border: "none", cursor: "pointer", padding: "8px" }} onClick={toggleTabList}>
            <Image src="/icons/menu.svg" alt="Menu" width={30} height={30} />
          </button>
        </div>
      ) : (
        <div style={{ display: "flex", gap: "10px", flexDirection: "row", marginBottom: "20px", width: "100%", flexWrap: "wrap" }}>
          {tabs.map((tab, index) => (
            <a key={index} href={tab.url} target="_blank" rel="noopener noreferrer" style={{
              display: "flex",
              alignItems: "center",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "#0070f3",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "30px",
              flex: "1 1 calc(16% - 10px)",
              justifyContent: "center",
              minWidth: "100px"
            }}>

              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Image src={tab.icon} alt={`${tab.name} Icon`} width={40} height={40} />
                {tab.name}
              </div>
            </a>
          ))}
        </div>
      )}

      {isMobile && isTabListOpen && (
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          background: "#f0f0f0",
          padding: "10px",
          borderRadius: "5px",
          width: "100%",
          maxWidth: "300px",
          position: "absolute",
          top: "50px",
          right: "20px",
          zIndex: 10
        }}>
          {tabs.map((tab, index) => (
            <a key={index} href={tab.url} target="_blank" rel="noopener noreferrer" style={{
              display: "flex",
              alignItems: "center",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "#0070f3",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "30px",
              flex: "1 1 calc(16% - 10px)",
              justifyContent: "center",
              minWidth: "100px"
            }}>
              <Image src={tab.icon} alt={`${tab.name} Icon`} width={20} height={20} />
              {tab.name}
            </a>
          ))}
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", maxWidth: "1200px", width: "100%", gap: "20px", padding: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", maxWidth: "600px", padding: "20px" }}>
          <h1 style={{ fontSize: "60px", fontWeight: "bold", color: "#333", margin: "0", textAlign: "left" }}>
            $BITCAT
          </h1>
          <p style={{ fontSize: "30px", color: "#333", textAlign: "left", marginTop: "10px", lineHeight: 1.5, maxWidth: "500px", whiteSpace: "normal" }}>
            The perfect fusion of Bitcoin and meme coins - introducing BITCAT, the Bitcoin mascot. All aboard!
          </p>
        </div>

        <Tweet id="1857419117025808830" />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "flex-start", width: "100%" }}>
        <div style={{ fontSize: "30px", display: "flex", alignItems: "center", width: "100%", flexWrap: "wrap", textAlign: "center" }}>
          <p style={{ color: "#555", fontSize: "30px", fontWeight: "bold", margin: "0", flex: "1 1 40%", cursor: "pointer", textAlign: "center" }}>Contract Address:</p>
          <p onClick={() => copyToClipboard(contractAddress)} style={{ color: "#000000", margin: "0", flex: "1 1 60%", cursor: "pointer", textAlign: "center" }}>{contractAddress}</p>
        </div>
        <div style={{ fontSize: "30px", display: "flex", alignItems: "center", width: "100%", flexWrap: "wrap", textAlign: "center" }}>
          <p style={{ color: "#555", fontSize: "30px", fontWeight: "bold", margin: "0", flex: "1 1 40%", textAlign: "center" }}>Token Supply:</p>
          <p style={{ color: "#000000", margin: "0", flex: "1 1 60%", textAlign: "center" }}>{tokenSupply}</p>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}
