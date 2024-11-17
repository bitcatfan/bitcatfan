
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Tweet } from "react-tweet";
import styled from "styled-components";

const Container = styled.div`
  max-width: 100vw;
  width: 100vw;
  overflow-x: hidden;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-image: url("/icons/bg.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const MobileMenuButtonContainer = styled.div`
  align-self: flex-end;
`;

const MobileMenuButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
`;

const DesktopTabContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  width: 100%;
  flex-wrap: wrap;
`;

const TabLink = styled.a`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  background-color: #0070f3;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 30px;
  flex: 1 1 calc(16% - 10px);
  justify-content: center;
  min-width: 100px;
`;

const TabIcon = styled(Image)`
  margin-right: 8px;
`;

const MobileTabList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  max-width: 300px;
  position: absolute;
  top: 50px;
  right: 20px;
  z-index: 10;
`;


const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  width: 100%;
`;

const InfoRow = styled.div`
  font-size: 30px;
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  text-align: center;
`;

const Label = styled.p`
  color: #555;
  font-size: 30px;
  font-weight: bold;
  margin: 0;
  flex: 1 1 40%;
  cursor: pointer;
  text-align: center;
`;

const Value = styled.p`
  color: #000000;
  margin: 0;
  flex: 1 1 60%;
  cursor: pointer;
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  max-width: 1200px;
  width: 100%;
  gap: 20px;
  padding: 20px;
`;

const LeftContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 600px;
  padding: 20px;
`;

const TitleText = styled.h1`
  font-size: 60px;
  font-weight: bold;
  color: #333;
  margin: 0;
  text-align: left;
`;

const IntroText = styled.p`
  font-size: 30px;
  color: #333;
  text-align: left;
  margin-top: 10px;
  line-height: 1.5;
  max-width: 500px;
  white-space: normal;
`;
export default function MemePage() {
  const [tabs] = useState([
    { name: "CoinMarketCap", url: "https://coinmarketcap.com/dexscan/solana/EJUgQQABcKXEiERGkUFXM45swGvSFoi8p7fnAcyErTDK/", icon: "/icons/coinmarketcap.svg" },
    { name: "DexScreener", url: "https://dexscreener.com/solana/ejugqqabckxeiergkufxm45swgvsfoi8p7fnacyertdk", icon: "/icons/dexscreener.svg" },
    { name: "Twitter", url: "https://x.com/Bitcoin", icon: "/icons/x.svg" },
    { name: "Bitcoin", url: "https://bitcoin.org/", icon: "/icons/bitcoin.svg" },
    { name: "Medium", url: "https://medium.com/@bitcatfan/the-bitcat-phenomenon-a-market-revolution-combining-bitcoin-and-meme-culture-9317e79f8258", icon: "/icons/medium.svg" },
    { name: "Github", url: "https://github.com/bitcatfan/bitcatfan", icon: "/icons/github.svg" },
  ]);



  const [isTabListOpen, setIsTabListOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const contractAddress = "4j9bDg7iWNah1Qa61rrqwWZMtEdqV3fV56SzyhfNpump";
  const tokenSupply = "1,000,000.000";

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Contract address copied to clipboard!");
  };

  const toggleTabList = () => setIsTabListOpen(!isTabListOpen);

  return (
    <Container>
      {isMobile ? (
        <MobileMenuButtonContainer>
          <MobileMenuButton onClick={toggleTabList}>
            <Image src="/icons/menu.svg" alt="Menu" width={30} height={30} />
          </MobileMenuButton>
        </MobileMenuButtonContainer>
      ) : (
        <DesktopTabContainer>
          {tabs.map((tab, index) => (
            <TabLink key={index} href={tab.url} target="_blank" rel="noopener noreferrer">
              <TabIcon src={tab.icon} alt={`${tab.name} Icon`} width={40} height={40} />
              {tab.name}
            </TabLink>
          ))}
        </DesktopTabContainer>
      )}

      {isMobile && isTabListOpen && (
        <MobileTabList>
          {tabs.map((tab, index) => (
            <TabLink key={index} href={tab.url} target="_blank" rel="noopener noreferrer">
              <TabIcon src={tab.icon} alt={`${tab.name} Icon`} width={20} height={20} />
              {tab.name}
            </TabLink>
          ))}
        </MobileTabList>
      )}

      <ContentWrapper>
        <LeftContentWrapper>
          <TitleText>
            $BITCAT
          </TitleText>
          <IntroText>
            The perfect fusion of Bitcoin and meme coins - introducing BITCAT, the Bitcoin mascot. All aboard!
          </IntroText>
        </LeftContentWrapper>

        <Tweet id="1857419117025808830" />
      </ContentWrapper>

      <InfoContainer>
        <InfoRow>
          <Label>Contract Address:</Label>
          <Value onClick={() => copyToClipboard(contractAddress)}>{contractAddress} </Value>
        </InfoRow>
        <InfoRow>
          <Label>Token Supply:</Label>
          <Value>{tokenSupply}</Value>
        </InfoRow>
      </InfoContainer>
    </Container>
  );
}
