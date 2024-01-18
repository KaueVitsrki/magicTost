import NavbarHeader from "../../components/navbar/navBar";
import ChartBitcoin from "../../components/chart/ChartBitcoin";
import InfoPriceCoin from "../../components/infoChart/InfoPriceCoin";

function ScreenBitcoin(){


    return (
        <container>

            <header>
                <NavbarHeader/>
            </header>

            <middle>
                <h1>Bitcoin</h1>
                <h3>Preço atual:</h3>
                {InfoPriceCoin('BTCUSD')}
                    <ChartBitcoin />
            </middle>

            <footer>

            </footer>

        </container>
    )
}

export default ScreenBitcoin;