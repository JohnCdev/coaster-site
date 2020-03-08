import React from 'react';
import { Container, Row, Col } from '../components/Grid/Grid'
import Jumbotron from '../components/Jumbotron/Jumbotron';

class Home extends React.Component {

    state = {
        newCust: true
    }

    render() {
        return (
            <>
                <Jumbotron>
                    <h1>Home</h1>
                </Jumbotron>
                <Container>
                    <p>
                        
                    </p>
                </Container>
            </>

        );
    }
}

export default Home;