import styled from 'styled-components';
import { Col, Card } from 'react-bootstrap';
const ColStyled = styled(Col)`
    background-color: ${props => `#${props.color}`};
`
const CardStyled = styled(Card)`
    background-color: ${props => `#${props.color}`};
`
export { ColStyled, CardStyled }