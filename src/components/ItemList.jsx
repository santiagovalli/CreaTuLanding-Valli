import Item from "./Item"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function Itemlist({ items }) {
    return (

        <Container>
            <Row>
                {items.map(products => (
                    <Item products={products} key={products.id} />
                ))}
            </Row>

        </Container>
    )
}

export default Itemlist