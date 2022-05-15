import { Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

    const Tarjeta = (props) => {
        const { personaje } = props;
        const {
          name,
          image,
          species,
          gender,
          origin,
          location,
          status,
          episode,
          id,
        } = personaje;
        return (
          <div className="col-12 col-md-4 mb-5">
            <Card className="tarjeta" border="info">
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div className="col-6">
                    <Card.Img variant="top" src={image} className="foto" />
                    </div>
                <Card.Title className="col-5">
                  Name : <br /> {name} <br />
                  Code : <span className="get">0{id}</span> 
                </Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem className="file">Species : {species}</ListGroupItem>
                <ListGroupItem className="file">Gender : {gender}</ListGroupItem>
                <ListGroupItem className="file">
                  Native dimension : <br /> {origin?.name}
                </ListGroupItem>
                <ListGroupItem className="file">
                  Location : <br /> {location?.name}
                </ListGroupItem>
                <ListGroupItem className="file">Status : {status}</ListGroupItem>
                <ListGroupItem className="file">
                  First appearance : {episode?.[0]}
                </ListGroupItem>
              </ListGroup>
            </Card>
          </div>
        );
      };

export default Tarjeta;