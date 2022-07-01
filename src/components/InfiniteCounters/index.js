import { Button, Container, Row } from "react-bootstrap"
import CounterContainer from "../../containers/CounterContainer"
import React from "react"
import IntervalCounterContainer from "../../containers/IntervalCounterContainer"

export const InfiniteCounters = ({counters, addCounter, deleteCounter}) => {

    const handleAddCounter = () => {
        const countersValuesSum = counters.reduce((accumulator, counter) => accumulator + counter.value, 0)
        addCounter(counters.concat({id: counters[counters.length - 1].id + 1, value: countersValuesSum}))
    }

    const handleDeleteCounter = (event, id) => {
        deleteCounter(id)
    }

    return (
        <Container>
            <h1>Infinite Counters</h1>
            <Button onClick={handleAddCounter}>Add Counter</Button>
            {
                counters && counters.map((counter, index) => (
                    ((index + 1) % 4) !== 0 ?
                        <Row key={index + 9}>
                            <CounterContainer value={counter.value} key={index} index={index} id={counter.id}/>
                            <Button onClick={(event) => handleDeleteCounter(event, counter.id)}>Delete</Button>
                        </Row>:
                        <Row key={index + 9}>
                            <IntervalCounterContainer value={counter.value} key={index} index={index} id={counter.id}/>
                            <Button onClick={(event) => handleDeleteCounter(event, counter.id)}>Delete</Button>
                        </Row>
                ))
            }
        </Container>
    )
}