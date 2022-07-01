import React, { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"

export default React.memo(function IntervalCounter({value, index, id, updateCounter}) {
    const [intervalValue, setIntervalValue] = useState(value)

    useEffect(() => {
        const interval = setInterval(() => setIntervalValue((prevIntervalValue) => prevIntervalValue + 1), 2000)
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
                    {intervalValue}
                </Row>
        </Container>
    )
})