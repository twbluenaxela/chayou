import { useState, useEffect } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import teaService from "../services/teas";
import TeaProductCard from "../components/TeaProductCard";
import TeaPlaceholderProductCard from "../components/TeaPlaceholderProductCard";

const TeaSearchResults = ({ teaToSearchFor }) => {
  const [teaResults, setTeaResults] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    teaService.fetchTeas(teaToSearchFor).then((fetchedTeas) => {
      console.log("Retrieved teas from server: ", fetchedTeas);
      setTeaResults(fetchedTeas);
      setLoading(false)
    });
  }, [teaToSearchFor]);

  return (
    <div style={{ marginLeft: "40px", marginRight: "40px" }} >
      <h1 style={{ textAlign: "center", margin: "10px" }} >茶</h1>
      <Row xs={1} md={4} className="g-4">
        {loading === false ? 
          teaResults.map((tea) => (
            <Col>
              <TeaProductCard tea={tea} />
            </Col>
          ))
          : 
          <div style={{ position: "fixed", top: "50%", left: "50%" }} >
            <Spinner animation="grow" />
          </div>
        }
      </Row>
    </div>
  );
};

export default TeaSearchResults;
