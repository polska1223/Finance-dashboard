import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function CoinDetail() {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCoinDetail() {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}`
        );
        const data = await response.json();
        setCoin(data);
      } catch (error) {
        console.log("Fout bij ophalen van coin details:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCoinDetail();
  }, [id]);

  if (loading) {
    return <p>Coin details worden geladen...</p>;
  }

  if (!coin) {
    return <p>Geen coin gegevens gevonden.</p>;
  }

  return (
    <div className="coin-detail-page">
      <Link to="/" className="back-link">
        Terug naar overzicht
      </Link>

      <h2>{coin.name}</h2>

      {coin.image && (
        <img
          src={coin.image.large}
          alt={coin.name}
          className="coin-detail-image"
        />
      )}

      <p>Symbool: {coin.symbol.toUpperCase()}</p>
      <p>Rank: {coin.market_cap_rank}</p>
      <p>Huidige prijs: ${coin.market_data.current_price.usd}</p>
      <p>Market cap: ${coin.market_data.market_cap.usd}</p>
      <p>Hoogste prijs ooit: ${coin.market_data.ath.usd}</p>
      <p>Laagste prijs 24 uur: ${coin.market_data.low_24h.usd}</p>
      <p>Hoogste prijs 24 uur: ${coin.market_data.high_24h.usd}</p>
    </div>
  );
}

export default CoinDetail;