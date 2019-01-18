import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Filters from './Panels/Filters';
import Warps from './Panels/Warps';
import Maps from './Panels/Maps';
import Players from './Panels/Players';
import Search from './Panels/Search';

class Sidebar extends Component {

    renderContent = (panel) => ({
            "Filters": <Filters />,
            "Warps": <Warps />,
            "Maps": <Maps />,
            "Players": <Players />,
            "Search": <Search />
    })[panel] || null;

    render() {
        return (
            <Menu
                customBurgerIcon={ false }
                noOverlay
                isOpen={this.props.isOpen}
            >
            {this.renderContent(this.props.content)}
            </Menu>
        )
    }
}

export default Sidebar;