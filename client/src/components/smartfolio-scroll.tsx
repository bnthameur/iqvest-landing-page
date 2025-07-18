import { useState, useEffect } from "react";

const cryptoLogos = [
  { name: "Bitcoin", symbol: "BTC", color: "#F7931A" },
  { name: "Ethereum", symbol: "ETH", color: "#627EEA" },
  { name: "Binance", symbol: "BNB", color: "#F3BA2F" },
  { name: "Cardano", symbol: "ADA", color: "#0033AD" },
  { name: "Solana", symbol: "SOL", color: "#9945FF" },
  { name: "Polkadot", symbol: "DOT", color: "#E6007A" },
  { name: "Avalanche", symbol: "AVAX", color: "#E84142" },
  { name: "Chainlink", symbol: "LINK", color: "#375BD2" },
  { name: "Polygon", symbol: "MATIC", color: "#8247E5" },
  { name: "Cosmos", symbol: "ATOM", color: "#2E3148" },
  { name: "Near", symbol: "NEAR", color: "#00EC97" },
  { name: "Algorand", symbol: "ALGO", color: "#000000" },
  { name: "Tezos", symbol: "XTZ", color: "#2C7DF7" },
  { name: "Fantom", symbol: "FTM", color: "#1969FF" },
  { name: "Arbitrum", symbol: "ARB", color: "#28A0F0" },
  { name: "Optimism", symbol: "OP", color: "#FF0420" },
  { name: "ImmutableX", symbol: "IMX", color: "#0B0E11" },
  { name: "StarkNet", symbol: "STRK", color: "#0C0C4F" },
  { name: "Sui", symbol: "SUI", color: "#4DA2FF" },
  { name: "Aptos", symbol: "APT", color: "#000000" }
];

// Duplicate the array to create seamless infinite scroll
const infiniteLogos = [...cryptoLogos, ...cryptoLogos, ...cryptoLogos];

export default function SmartfolioScroll() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev - 1) % (cryptoLogos.length * 120)); // 120px per item
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-transparent via-white/5 to-transparent py-8 rounded-xl border border-white/10">
      <div className="mb-4 text-center">
        <h3 className="text-lg font-semibold text-foreground mb-2">Smartfolio Multi-Chain Support</h3>
        <p className="text-sm text-muted-foreground">Supporting 100+ blockchains and thousands of cryptocurrencies</p>
      </div>
      
      <div 
        className="flex space-x-8 transition-none"
        style={{ transform: `translateX(${position}px)` }}
      >
        {infiniteLogos.map((crypto, index) => (
          <div
            key={`${crypto.symbol}-${index}`}
            className="flex-shrink-0 flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10"
            style={{ minWidth: "120px" }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{ backgroundColor: crypto.color }}
            >
              {crypto.symbol.slice(0, 2)}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">{crypto.symbol}</span>
              <span className="text-xs text-muted-foreground">{crypto.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}