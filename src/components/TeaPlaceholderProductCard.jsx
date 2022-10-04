import { Card, Placeholder } from "react-bootstrap";

const TeaPlaceholderProductCard = () => {
  return (
    <div>
      <Card className="text-center">
        <Card.Img variant="top" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TeaPlaceholderProductCard
