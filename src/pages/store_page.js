import React from "react"
import { Container, Card, CardColumns } from 'react-bootstrap';

const ItemCard = ({ item }) => {
    return (
        <Card bg="primary" text="white" style={{ height: "200px" }}>
            <Card.Body>
                {item.title}
                {item.price}
                {item.description}
                {item.image}
                {item.category}
            </Card.Body>
        </Card>
    );
}

function StorePage() {
    return (
        <div id="store_page" className="App-page App-header">
            <Container>
                <CardColumns>
                    {this.props.items.map((item, i) => {
                        return <ItemCard item={item} key={i}/>
                    })}
                </CardColumns>
            </Container>
        </div>
    )
}

export default StorePage