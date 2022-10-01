import { Card } from "react-bootstrap"

const TeaProductCard = ({ tea }) => {
    console.log('Product card: ', tea)
    console.log('Type of: ', typeof tea);
    return (
        <div>
            <Card className="text-center" >
                <a href={tea.productUrl} >
                <Card.Img variant="top" src={tea.imageLink} href={tea.productUrl} />
                </a>
                <Card.Body>
                    <a href={tea.productUrl} >
                    <Card.Title >{tea.name}</Card.Title>
                    </a>
                    <Card.Text>{tea.description}</Card.Text>
                    <Card.Text>{tea.price}</Card.Text>
                </Card.Body>

            </Card>
        </div>
    )
}

export default TeaProductCard