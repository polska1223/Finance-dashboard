import { Link } from "react-router-dom";

function CoinList({ coins, searchTerm, addFavorite }) {
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section>
      <h2>Coin overzicht</h2>

      {filteredCoins.length > 0 ? (
        filteredCoins.map((coin) => (
          <div key={coin.id} className="coin-card">
            <Link to={`/coin/${coin.id}`} className="coin-link">
              <h3>{coin.name}</h3>
              <p>Symbool: {coin.symbol.toUpperCase()}</p>
              <p>Prijs: ${coin.current_price}</p>
              <p>
                24 uur verschil:{" "}
                {coin.price_change_percentage_24h?.toFixed(2)}%
              </p>
            </Link>

            <button onClick={() => addFavorite(coin)} className="favorite-button">
              Voeg toe aan favorieten
            </button>
          </div>
        ))
      ) : (
        <p>Geen coins gevonden.</p>
      )}
    </section>
  );
}

export default CoinList;