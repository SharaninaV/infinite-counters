import { Button, Container, Row, Col, Stack } from "react-bootstrap"
import CounterContainer from "../containers/CounterContainer"
import React from "react"
import IntervalCounterContainer from "../containers/IntervalCounterContainer"
import { ICounter } from "../types"

interface IInfiniteCountersProps {
    counters: ICounter[],
    addCounter: (newCounters: ICounter[]) => void,
    deleteCounter: (id: number) => void
}

export const InfiniteCounters = ({counters, addCounter, deleteCounter}: IInfiniteCountersProps) => {

    const handleAddCounter = () => {
        const countersValuesSum = counters.reduce((accumulator, counter) => accumulator + counter.value, 0)
        const maxId = counters.length === 0 ? 0 : counters[counters.length - 1].id
        addCounter(counters.concat({ id: maxId + 1, value: countersValuesSum }))
    }

    const handleDeleteCounter = (id: number) => {
        deleteCounter(id)
    }

    return (
        <Container style={{ width: "50%" }}>
            <Row>
                <h1 style={{ textAlign: "center" }}>Infinite Counters</h1>
            </Row>
            <Row className="justify-content-md-center">
                <Button variant="success" onClick={ handleAddCounter }>Add Counter</Button>
            </Row>
            {
                counters && counters.map((counter, index) => (
                    ((index + 1) % 4) !== 0 ?
                        <Stack>
                        <Row className="bg-light border align-items-center" key={index + 9}>
                            <Col>
                                <CounterContainer
                                    value={ counter.value }
                                    key={ index }
                                    index={ index }
                                    id={ counter.id }
                                />
                            </Col>
                            <Col>
                                <Button
                                    style={{ marginTop: 10, marginBottom: 10 }}
                                    variant="danger"
                                    onClick={() => handleDeleteCounter(counter.id)}
                                >
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                        </Stack>:
                        <Stack>
                        <Row className="bg-light border align-items-center" key={ index + 9 }>
                            <Col>
                                <IntervalCounterContainer
                                    value={ counter.value }
                                    key={ index }
                                    index={ index }
                                    id={ counter.id }
                                />
                            </Col>
                            <Col>
                                <Button
                                    style={{ marginTop: 10, marginBottom: 10 }}
                                    variant="danger"
                                    onClick={() => handleDeleteCounter(counter.id)}
                                >
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                        </Stack>
                ))
            }
        </Container>
    )
}