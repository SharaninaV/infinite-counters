import React from "react"
import { Container, Row, Button, Col } from "react-bootstrap"

interface ICounterProps {
    value: number,
    index: number,
    id: number,
    updateCounter: (id: number, dynamicValue: number) => void
}

export default React.memo(function Counter({value, index, id, updateCounter}: ICounterProps) {

    const handleIncreaseCounter = () => {
        updateCounter(id, value + 1)
    }

    const handleDecreaseCounter = () => {
        updateCounter(id, value - 1)
    }

    return(
        <Container style={{ marginTop: 10, marginBottom: 10 }}>
            <Row className="align-items-center">
                <Col>
                    { index + 1 }
                </Col>
                <Col>
                    <Button variant="outline-info" onClick={ handleDecreaseCounter }>-</Button>
                </Col>
                <Col>
                    { value }
                </Col>
                <Col>
                    <Button variant="outline-info" onClick={ handleIncreaseCounter }>+</Button>
                </Col>
            </Row>
        </Container>
    )
})