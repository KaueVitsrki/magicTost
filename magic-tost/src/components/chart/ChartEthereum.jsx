import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

function ChartEthereum() {
  var day = new Date().getDate() + 1;
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  

  async function InfoChartEthereum(){
    var data = [["Dia", "Alta", "Baixa"]];

    try {
      const response = await axios.get("https://economia.awesomeapi.com.br/json/daily/ETH-USD/30");
      const responseTratado = response.data;
      console.log(responseTratado);
      for(let i = 0;i <= 30; i++){
        day --;
        day = day < 1 ? day + new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate() : day;
        data.push([day.toString() , parseFloat(responseTratado[i].high), parseFloat(responseTratado[i].low)])
        setChartData(data);
      }
    } catch (error) {
      console.log("Não foi possivel encotrar sua API!!!")
    } finally {
      setLoading(false);
    }

  };

    useEffect(() => {
      InfoChartEthereum();
    }, []);

    const options = {
      title: "Ethereum",
      legend: { position: "bottom" },
    };

    return (
      <div>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div>
          <Chart
            chartType="Bar"
            width="90%"
            height="400px"
            data={chartData}
            options={options}
          />
        </div>
      )}
    </div>
    );
  
}

export default ChartEthereum;