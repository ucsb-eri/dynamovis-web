import Container from "react-bootstrap/esm/Container";
import Header from "../Landing/Header";
import styles from "./Sponsor.module.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import nsf from "../../assets/nsf.png";


const Sponsor = (props) => {
    return (
        <div>
            <div id="wrapper">
                <div id={styles.Landing}>
                    <Header />
                    <div id="banner" class="mb-50">
                        <Container  className = "d-flex align-items-center justify-content-center">
                            <Col style={{ justifyContent: 'center', alignItems: 'center' }}>
                            
                                    <h1 style={{ textAlign: 'center' }}>
                                        This project is sponsored by the <br></br>National Science Foundation <br></br>Award # BCS-1853681
                                    </h1>
                                
                                <Row className = "justify-content-center">
                                
                                        
                                            <Card style={{ width: '20rem' }}>
                                                <Card.Img variant="top" src={nsf} title="Image" />
                                            </Card>
                                        
                                    
                                    
                                </Row>
                            </Col>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Sponsor;