import NavbarHeader from "../../components/navbar/navBar";
import ChartXrp from "../../components/chart/ChartXrp";
import InfoPriceCoin from "../../components/infoChart/InfoPriceCoin";

function ScreenXrp(){
    return (
        <container>

            <header>
                <NavbarHeader/>
            </header>

            <middle>
                <h1>XRP</h1>
                <h3>Preço atual:</h3>
                {InfoPriceCoin('XRPUSD')}
                <ChartXrp/>
            </middle>

            <footer>

            </footer>

        </container>
    )
}

export default ScreenXrp;