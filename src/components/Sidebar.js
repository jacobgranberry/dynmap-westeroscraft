import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

class Sidebar extends Component {
    render() {
        return (
            <Menu
                customBurgerIcon={ false }
                noOverlay
                isOpen={this.props.isOpen}
            >
            {this.props.content}
            </Menu>
        )
    }
}

export default Sidebar;