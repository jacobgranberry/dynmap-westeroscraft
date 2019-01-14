import React, { Fragment } from 'react';
import PanelContentWrapper from './PanelContentWrapper';
import PanelItemWrapper from './PanelItemWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
    'cursor': 'pointer',
    'fontSize': '24px',
}
const Maps = () => (


    <Fragment>
        <PanelContentWrapper text="Maps">
            <p>Westeros</p>
            <PanelItemWrapper roomy>
                <FontAwesomeIcon
                    icon="map"
                    size="1x"
                    color="white"
                    style={styles}
                />
                <FontAwesomeIcon
                    icon="dice-d6"
                    size="1x"
                    color="white"
                    style={styles}
                />
                <FontAwesomeIcon
                    icon="dice-d20"
                    size="1x"
                    color="white"
                    style={styles}
                />
            </PanelItemWrapper>

            <p>WesterosOld</p>
            <PanelItemWrapper roomy>
                <FontAwesomeIcon
                    icon="map"
                    size="1x"
                    color="white"
                    style={styles}
                />
                <FontAwesomeIcon
                    icon="dice-d6"
                    size="1x"
                    color="white"
                    style={styles}
                />
                <FontAwesomeIcon
                    icon="dice-d20"
                    size="1x"
                    color="white"
                    style={styles}
                />
            </PanelItemWrapper>

            <p>Test</p>
            <PanelItemWrapper roomy>
                <FontAwesomeIcon
                    icon="map"
                    size="1x"
                    color="white"
                    style={styles}
                />
                <FontAwesomeIcon
                    icon="dice-d6"
                    size="1x"
                    color="white"
                    style={styles}
                />
                <FontAwesomeIcon
                    icon="dice-d20"
                    size="1x"
                    color="grey"
                    style={styles}
                />
            </PanelItemWrapper>

            <p>Old Map</p>
            <PanelItemWrapper roomy>
                <FontAwesomeIcon
                    icon="map"
                    size="1x"
                    color="white"
                    style={styles}
                />
                <FontAwesomeIcon
                    icon="dice-d6"
                    size="1x"
                    color="grey"
                    style={styles}
                />
                <FontAwesomeIcon
                    icon="dice-d20"
                    size="1x"
                    color="grey"
                    style={styles}
                />
            </PanelItemWrapper>
        </PanelContentWrapper>

    </Fragment>
)

export default Maps;