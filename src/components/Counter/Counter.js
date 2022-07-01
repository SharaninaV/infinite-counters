import React, { useEffect, useState } from "react"
import { Container, Row, Button } from "react-bootstrap"

export default React.memo(function Counter({value, index, id, updateCounter}) {
    const [dynamicValue, setDynamicValue] = useState(value)

    const handleIncreaseCounter = () => {
        setDynamicValue((prevDynamicValue) => prevDynamicValue + 1)
    }

    const handleDecreaseCounter = () => {
        setDynamicValue((prevDynamicValue) => prevDynamicValue - 1)
    }

    useEffect(() => {
        updateCounter(id, dynamicValue)
    }, [dynamicValue])

    useEffect(() => {
        setDynamicValue(value)
    }, [value])

    return(
        <Container>
                <Row>
                    {index + 1}
                    <Button onClick={handleDecreaseCounter}>-</Button>
                    {dynamicValue}
                    <Button onClick={handleIncreaseCounter}>+</Button>
            </Row>
        </Container>
    )
})