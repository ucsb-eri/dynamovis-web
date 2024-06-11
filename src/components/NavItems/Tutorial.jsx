import tutorial from "../../assets/videos/Tutorial.mp4"
import styles from "./Tutorial.module.css";
import Container from "react-bootstrap/esm/Container";
import Header from "../Landing/Header";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";


const Tutorial = (props) => {
    return (
        <div>
            <div id="wrapper">
                <div id={styles.Landing}>
                    <Header />

                    <div id="banner" class="mb-50">
                        <Container className="d-flex align-items-center justify-content-center ">
                            
                            <Container className = " d-flex justify-content-center mt-20">
                                <video src={tutorial} width="750" height="500" controls></video>
                            </Container>
                        </Container>
                        <Container style={{ height: '10rem' }}>
                        </Container>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Tutorial;