import NavbarHeader from "../../components/navbar/navBar";
import CardCoin from "../../components/cardCoin/cardCoin";

function ScreenHome(){
    return (
        <container >
            <header>
                <NavbarHeader/>
            </header>

            <middle>
                <CardCoin/>
            </middle>

            <footer>

            </footer>

        </container >
    )
}

export default ScreenHome;