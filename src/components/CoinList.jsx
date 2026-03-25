function CoinList({ searchTerm }) {
  const coins = [
    { id: 1, name: "Bitcoin", price: "$65,000", change: "+2.4%" },
    { id: 2, name: "Ethereum", price: "$3,200", change: "-1.1%" },
    { id: 3, name: "Solana", price: "$140", change: "+4.8%" },
  ];

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section>
      <h2>Coin overzicht</h2>

      {filteredCoins.map((coin) => (
        <div key={coin.id}>
          <h3>{coin.name}</h3>
          <p>Prijs: {coin.price}</p>
          <p>Verandering: {coin.change}</p>
        </div>
      ))}
    </section>
  );
}

export default CoinList;