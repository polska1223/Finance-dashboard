import { useParams } from "react-router-dom";

function CoinDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>Coin detailpagina</h2>
      <p>Je hebt geklikt op coin: {id}</p>
    </div>
  );
}

export default CoinDetail;