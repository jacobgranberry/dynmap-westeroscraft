import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ControlPanelIconContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ControlPanelIconWrapper = styled.div`
    padding: 8px;
`

const ControlPanelIcons = () => (
    <ControlPanelIconContainer>
        <ControlPanelIconWrapper>
            <FontAwesomeIcon icon="globe" size="2x" color="white"/>
        </ControlPanelIconWrapper>
        <ControlPanelIconWrapper>
            <FontAwesomeIcon icon="layer-group" size="2x" color="white"/>
        </ControlPanelIconWrapper>
        <ControlPanelIconWrapper>
            <FontAwesomeIcon icon="user" size="2x" color="white"/>
        </ControlPanelIconWrapper>
        <ControlPanelIconWrapper>
            <FontAwesomeIcon icon="street-view" size="2x" color="white"/>
        </ControlPanelIconWrapper>
        <ControlPanelIconWrapper>
            <FontAwesomeIcon icon="search" size="2x" color="white"/>
        </ControlPanelIconWrapper>
    </ControlPanelIconContainer>
)

export default ControlPanelIcons;