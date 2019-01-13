import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
    font-family: trajan-pro-3, serif;
    font-weight: 200;
`

const PanelContentWrapper = (props) => (
    <Title>{props.text}</Title>
)

export default PanelContentWrapper