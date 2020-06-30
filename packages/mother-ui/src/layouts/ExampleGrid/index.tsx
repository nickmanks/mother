import * as React from 'react';
import Container from '../../atoms/Container';
import Row from '../../atoms/Row';
import Col from '../../atoms/Col';
import { Inner } from './styled';

const ExampleGrid: React.FC<unknown> = () => (
    <Container>
        <Row>
            <Col size={1}>
                <Inner>1/12</Inner>
            </Col>
            <Col size={1}>
                <Inner>1/12</Inner>
            </Col>
            <Col size={1}>
                <Inner>1/12</Inner>
            </Col>
            <Col size={1}>
                <Inner>1/12</Inner>
            </Col>
            <Col size={1}>
                <Inner>1/12</Inner>
            </Col>
            <Col size={1}>
                <Inner>1/12</Inner>
            </Col>
            <Col size={1}>
                <Inner>1/12</Inner>
            </Col>
            <Col size={1}>
                <Inner>1/12</Inner>
            </Col>
            <Col size={1}>
                <Inner>1/12</Inner>
            </Col>
            <Col size={1}>
                <Inner>1/12</Inner>
            </Col>
            <Col size={1}>
                <Inner>1/12</Inner>
            </Col>
            <Col size={1}>
                <Inner>1/12</Inner>
            </Col>
        </Row>
        <Row>
            <Col size={2}>
                <Inner>2/12</Inner>
            </Col>
            <Col size={2}>
                <Inner>2/12</Inner>
            </Col>
            <Col size={2}>
                <Inner>2/12</Inner>
            </Col>
            <Col size={2}>
                <Inner>2/12</Inner>
            </Col>
            <Col size={2}>
                <Inner>2/12</Inner>
            </Col>
            <Col size={2}>
                <Inner>2/12</Inner>
            </Col>
        </Row>
        <Row>
            <Col size={3}>
                <Inner>3/12</Inner>
            </Col>
            <Col size={3}>
                <Inner>3/12</Inner>
            </Col>
            <Col size={3}>
                <Inner>3/12</Inner>
            </Col>
            <Col size={3}>
                <Inner>3/12</Inner>
            </Col>
        </Row>
        <Row>
            <Col size={4}>
                <Inner>4/12</Inner>
            </Col>
            <Col size={4}>
                <Inner>4/12</Inner>
            </Col>
            <Col size={4}>
                <Inner>4/12</Inner>
            </Col>
        </Row>
        <Row>
            <Col size={5}>
                <Inner>5/12</Inner>
            </Col>
            <Col size={5}>
                <Inner>5/12</Inner>
            </Col>
            <Col size={2}>
                <Inner>2/12</Inner>
            </Col>
        </Row>
        <Row>
            <Col size={6}>
                <Inner>6/12</Inner>
            </Col>
            <Col size={6}>
                <Inner>6/12</Inner>
            </Col>
        </Row>
        <Row>
            <Col size={7}>
                <Inner>7/12</Inner>
            </Col>
            <Col size={3}>
                <Inner>3/12</Inner>
            </Col>
            <Col size={2}>
                <Inner>2/12</Inner>
            </Col>
        </Row>
        <Row>
            <Col size={8}>
                <Inner>8/12</Inner>
            </Col>
            <Col size={3}>
                <Inner>3/12</Inner>
            </Col>
            <Col size={1}>
                <Inner>1/12</Inner>
            </Col>
        </Row>
        <Row>
            <Col size={9}>
                <Inner>9/12</Inner>
            </Col>
            <Col size={2}>
                <Inner>2/12</Inner>
            </Col>
            <Col size={1}>
                <Inner>1/12</Inner>
            </Col>
        </Row>
        <Row>
            <Col size={10}>
                <Inner>10/12</Inner>
            </Col>
            <Col size={2}>
                <Inner>2/12</Inner>
            </Col>
        </Row>
        <Row>
            <Col size={11}>
                <Inner>11/12</Inner>
            </Col>
            <Col size={1}>
                <Inner>2/12</Inner>
            </Col>
        </Row>
        <Row>
            <Col size={12}>
                <Inner>12/12</Inner>
            </Col>
        </Row>
    </Container>
);

export default ExampleGrid;
