import NavbarHeader from "../../components/navbar/navBar";
import InfoPriceCoin from "../../components/infoChart/InfoPriceCoin";
import ChartEthereum from "../../components/chart/ChartEthereum";

function ScreenEthereum() {
    return (
        <container>

            <header>
                <NavbarHeader/>
            </header>

            <middle>
                <h1>Ethereum</h1>
                <h3>Preço atual:</h3>
                {InfoPriceCoin('ETHUSD')}
                <ChartEthereum/>
            </middle>

            <footer>

            </footer>

        </container>
    )
}

export default ScreenEthereum;