import { Link } from "react-router-dom";

function FavoriteList({ favorites, removeFavorite }) {
  return (
    <section>
      <h2>Mijn favorieten</h2>

      {favorites.length > 0 ? (
        favorites.map((coin) => (
          <div key={coin.id} className="coin-card">
            <Link to={`/coin/${coin.id}`} className="coin-link">
              <h3>{coin.name}</h3>
              <p>Symbool: {coin.symbol.toUpperCase()}</p>
              <p>Prijs: ${coin.current_price}</p>
            </Link>

            <button
              onClick={() => removeFavorite(coin.id)}
              className="remove-button"
            >
              Verwijder
            </button>
          </div>
        ))
      ) : (
        <p>Je hebt nog geen favoriete coins.</p>
      )}
    </section>
  );
}

export default FavoriteList;