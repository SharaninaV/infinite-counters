import React, { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"

interface IIntervalCounterProps {
    value: number,
    index: number,
    id: number,
    updateCounter: (id: number, dynamicValue: number) => void
}

export default React.memo(function IntervalCounter({value, index, id, updateCounter}: IIntervalCounterProps) {
    const [intervalValue, setIntervalValue] = useState(value)

    useEffect(() => {
        const interval = setInterval(() => setIntervalValue((prevIntervalValue) => prevIntervalValue + 1), 1000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        updateCounter(id, intervalValue)
    }, [intervalValue])

    useEffect(() => {
        setIntervalValue(value)
    }, [value])

    return(
        <Container>
                <Row>
                    {index + 1}
                    {value}
                </Row>
        </Container>
    )
})