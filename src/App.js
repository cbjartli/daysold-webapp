import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DateSelector from './DateSelector';
import DaysOld from './DaysOld';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                <Navbar bg="light" fixed="top" expand="lg">
                    <Navbar.Brand className="mx-auto">DAYSOLD.COM</Navbar.Brand>
                </Navbar>
                <Container>
                    <Row>
                        <Col className="page-content">
                            <Route path="/" exact component={DateSelector} />
                            <Route path="/date/:date" exact component={DaysOld} />
                        </Col>
                    </Row>
                </Container>
                </div>
            </Router>
        );
    }
}

export default App;
