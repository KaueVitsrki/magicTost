import Card from 'react-bootstrap/Card';
import InfoPriceCoin from '../infoChart/InfoPriceCoin.jsx'

function CardCoin(){
    return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
        <div style={{ display: 'flex', gap: '20px' }}>
            <Card border="dark" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/Image/cardBitcoin.png" />
                <Card.Body>
                <Card.Title>Bitcoin</Card.Title>
                <Card.Text>
                    {InfoPriceCoin('BTCUSD')}
                </Card.Text>
                </Card.Body>
            </Card>

            <Card border="dark" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/Image/cardEthereum.png" />
                    <Card.Body>
                    <Card.Title>Ethereum</Card.Title>
                    <Card.Text>
                        {InfoPriceCoin('ETHUSD')}
                    </Card.Text>
                    </Card.Body>
            </Card>

            <Card border="dark" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/Image/cardXRP.png" />
                    <Card.Body>
                    <Card.Title>XRP</Card.Title>
                    <Card.Text>
                        {InfoPriceCoin('XRPUSD')}
                    </Card.Text>
                    </Card.Body>
            </Card>
        </div>
      </div>
    )

}

export default CardCoin;