import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import colors from '../theme/colors';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from './Logo';
import PanelContentWrapper from './PanelContentWrapper';

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
    cursor: pointer;

    &:hover path {
        transition: all 0.3s ease;
        color: ${colors.yellow}
    }
`


class ControlPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    handleIconClick (e) {
        e.preventDefault();
        this.setState({menuOpen: !this.state.menuOpen})
    }

    render() {
        return (
            <Fragment>
                <Sidebar
                    isOpen={this.state.menuOpen}
                    content={<PanelContentWrapper text="Filters" />}
                    />
                <PanelWrapper>
                    <IconContainer>
                        <div>
                            <Logo />
                        </div>
                        <div>
                            <IconWrapper>
                                <FontAwesomeIcon
                                    onClick={this.handleIconClick.bind(this)}
                                    icon="globe"
                                    size="2x"
                                    color="white"
                                />
                            </IconWrapper>
                            <IconWrapper>
                                <FontAwesomeIcon
                                    onClick={this.handleIconClick.bind(this)}
                                    icon="layer-group"
                                    size="2x"
                                    color="white"/>
                            </IconWrapper>
                            <IconWrapper>
                                <FontAwesomeIcon
                                onClick={this.handleIconClick.bind(this)}
                                icon="user"
                                size="2x"
                                color="white"/>
                            </IconWrapper>
                            <IconWrapper>
                                <FontAwesomeIcon
                                onClick={this.handleIconClick.bind(this)}
                                icon="street-view"
                                size="2x"
                                color="white"/>
                            </IconWrapper>
                            <IconWrapper>
                                <FontAwesomeIcon
                                onClick={this.handleIconClick.bind(this)}
                                icon="search"
                                size="2x"
                                color="white"/>
                            </IconWrapper>
                        </div>
                        <div>
                            <IconWrapper>
                                <FontAwesomeIcon icon="comment" size="2x" color="white"/>
                            </IconWrapper>
                        </div>
                    </IconContainer>
                </PanelWrapper>
            </Fragment>
        )
    }
}

export default ControlPanel;