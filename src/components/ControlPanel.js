import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import colors from '../theme/colors';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from './Logo';
import { GlobeIcon, LayerIcon, UserIcon, WarpIcon, SearchIcon, ChatIcon } from '../components/FontAwesomeIcons';

const PanelWrapper = styled.div`
    background-color: ${colors.main};
    height: 100%;
    width: 75px;
    left: 0;
    position: absolute;
    z-index: 1200;
`
const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
`

const IconWrapper = styled.div`
    padding: 16px 8px;

    &:hover svg {
        cursor: pointer;
        transition: all 0.3s ease;
        color: ${colors.yellow}
    }
`


class ControlPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false,
            panel: ''
        }
    }

    handleIconClick (e, item) {
        e.preventDefault();
        this.setState({menuOpen: !this.state.menuOpen, panel: item})
    }

    render() {
        return (
            <Fragment>
                <Sidebar
                    isOpen={this.state.menuOpen}
                    content={this.state.panel}
                    />
                <PanelWrapper>
                    <IconContainer>
                        <div>
                            <Logo />
                        </div>
                        <div>
                            <IconWrapper>
                                <GlobeIcon />
                            </IconWrapper>
                            <IconWrapper>
                                <LayerIcon />
                            </IconWrapper>
                            <IconWrapper>
                                <UserIcon />
                            </IconWrapper>
                            <IconWrapper>
                                <WarpIcon />
                            </IconWrapper>
                            <IconWrapper>
                                <SearchIcon />
                            </IconWrapper>
                        </div>
                        <div>
                            <IconWrapper>
                                <ChatIcon />
                            </IconWrapper>
                        </div>
                    </IconContainer>
                </PanelWrapper>
            </Fragment>
        )
    }
}

export default ControlPanel;