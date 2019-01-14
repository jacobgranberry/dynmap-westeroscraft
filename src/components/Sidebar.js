import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Filters from './Panels/Filters';
import Warps from './Panels/Warps';
import Maps from './Panels/Maps';
import Players from './Panels/Players';
import Search from './Panels/Search';

class Sidebar extends Component {

    renderContent(param) {
        switch(param) {
            case 'Filters':
              return <Filters />;
            case 'Warps':
                return <Warps />;
            case 'Maps':
                return <Maps />;
            case 'Players':
                return <Players />;
            case 'Search':
                return <Search />;
            default:
              return null;
          }
    }

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