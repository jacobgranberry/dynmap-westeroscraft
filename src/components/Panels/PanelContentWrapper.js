import React, { Fragment } from 'react';
import styled from 'styled-components';

const Title = styled.h2`
    font-family: trajan-pro-3, serif;
    font-weight: 200;
    text-align: center;
`

const PanelContentWrapper = (props) => (
    <Fragment>
        <Title>{props.text}</Title>
        {props.children}
    </Fragment>
)

export default PanelContentWrapper