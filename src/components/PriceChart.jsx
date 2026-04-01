function PriceChart({ coins }) {
  const topCoins = coins.slice(0, 5);
  const highestPrice = Math.max(...topCoins.map((coin) => coin.current_price));

  return (
    <section>
      <h2>Prijs grafiek</h2>
      <div className="chart-box">
        {topCoins.map((coin) => {
          const barWidth = (coin.current_price / highestPrice) * 100;

          return (
            <div key={coin.id} className="chart-row">
              <div className="chart-label">{coin.name}</div>

              <div className="chart-bar-wrapper">
                <div
                  className="chart-bar"
                  style={{ width: `${barWidth}%` }}
                ></div>
              </div>

              <div className="chart-value">
                ${coin.current_price.toFixed(2)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default PriceChart;