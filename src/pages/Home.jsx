import { useState } from "react";
import CoinList from "../components/CoinList";
import SearchBar from "../components/SearchBar";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <h2>Welkom op mijn dashboard</h2>
      <p>Hieronder zie je een eerste overzicht van coins.</p>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CoinList searchTerm={searchTerm} />
    </div>
  );
}

export default Home;