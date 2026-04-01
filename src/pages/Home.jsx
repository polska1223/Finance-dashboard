import { useEffect, useState } from "react";
import CoinList from "../components/CoinList";
import SearchBar from "../components/SearchBar";
import FavoriteList from "../components/FavoriteList";
import PriceChart from "../components/PriceChart";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [coins, setCoins] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCoins() {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        );
        const data = await response.json();
        setCoins(data);
      } catch (error) {
        console.log("Fout bij ophalen van coins:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCoins();
  }, []);

  function addFavorite(coin) {
    const bestaatAl = favorites.find((favorite) => favorite.id === coin.id);

    if (!bestaatAl) {
      setFavorites([...favorites, coin]);
    }
  }

  function removeFavorite(id) {
    const nieuweFavorieten = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(nieuweFavorieten);
  }

  return (
    <div>
      <h2>Welkom op mijn dashboard</h2>
      <p>Hieronder zie je een overzicht van coins uit de API.</p>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {loading ? (
        <p>Data wordt geladen...</p>
      ) : (
        <>
          <PriceChart coins={coins} />
          <CoinList
            coins={coins}
            searchTerm={searchTerm}
            addFavorite={addFavorite}
          />
        </>
      )}

      <FavoriteList favorites={favorites} removeFavorite={removeFavorite} />
    </div>
  );
}

export default Home;