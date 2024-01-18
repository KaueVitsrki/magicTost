import axios from "axios";
import { useEffect, useState } from "react";

const InfoPriceCoin = (coin) => {
  const convertCoinUrl = coin.substring(0,3) + '-' +coin.substring(3,6);  
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  async function InfoCoin() {
    try {
      const response = await axios.get(`http://economia.awesomeapi.com.br/json/last/${convertCoinUrl}`);
      const updatedValue = response.data[`${coin}`].bid;
      setPost(updatedValue);
    } catch (error) {
      console.error("Não foi possivel acessar os dados da api", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    InfoCoin();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="post">
          <h5>{'$' + post}</h5>
        </div>
      )}
    </div>
  );
};

export default InfoPriceCoin;