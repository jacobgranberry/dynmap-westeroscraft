import React, { Component } from 'react';
import styled from 'styled-components';
import colors from '../theme/colors';
import ControlPanelIcons from './ControlPanelIcons';

const PanelWrapper = styled.div`
    background-color: ${colors.main};
    height: 100%;
    width: 75px;
    left: 0;
    position: absolute;
    z-index: 1000;
`


class ControlPanel extends Component {

    render() {
        return (
            <PanelWrapper>
                <ControlPanelIcons />
            </PanelWrapper>
        )
    }
}

export default ControlPanel;