import React, { Fragment } from 'react';
import PanelContentWrapper from './PanelContentWrapper';
import PanelItemWrapper from './PanelItemWrapper';
import Checkbox from './Checkbox';

const labels = ['Players', 'Great Castles', 'Minor Castles', 'Cities', 'Towns', 'Villages', 'Holdfasts', 'Keeps', 'Landmarks', 'Ruins'];
const items = labels.map((label, index) =>
    <PanelItemWrapper key={index}>
        <p>{label}</p>
        <Checkbox />
    </PanelItemWrapper>
)

const Filters = () => (

    <Fragment>
        <PanelContentWrapper text="Filters">
            {items}
        </PanelContentWrapper>
    </Fragment>
)

export default Filters;