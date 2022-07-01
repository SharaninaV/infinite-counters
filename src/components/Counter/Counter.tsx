import React from "react"
import { Container, Row, Button } from "react-bootstrap"

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
        <Container>
                <Row>
                    { index + 1 }
                    <Button onClick={ handleDecreaseCounter }>-</Button>
                    { value }
                    <Button onClick={ handleIncreaseCounter }>+</Button>
            </Row>
        </Container>
    )
})