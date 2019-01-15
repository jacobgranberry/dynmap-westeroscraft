import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Checkbox extends Component {
    state = {
        checked: false
    }

    handleCheckboxClick(e) {
        e.preventDefault();
        this.setState({ checked: !this.state.checked })
    }

    render() {
        const checked = this.state.checked;
        const styles = {
            'cursor': 'pointer',
            'fontSize': '24px'
        }
        return (
            <Fragment>
                {checked ?
                    <FontAwesomeIcon
                        onClick={(e) => this.handleCheckboxClick(e)}
                        icon={['far', 'check-square']}
                        color="#E4C778"
                        style={styles}
                    />
                    :
                    <FontAwesomeIcon
                        onClick={(e) => this.handleCheckboxClick(e)}
                        icon={['far', 'square']}
                        color="#E4C778"
                        style={styles}
                    />
                }
            </Fragment>
        )
    }
}

export default Checkbox;