import CoinList from "../components/CoinList";

function Home() {
  return (
    <div>
      <h2>Welkom op mijn dashboard</h2>
      <p>Hieronder zie je een eerste overzicht van coins.</p>
      <CoinList />
    </div>
  );
}

export default Home;