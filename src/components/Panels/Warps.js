import React, { Fragment } from 'react';
import PanelContentWrapper from './PanelContentWrapper';
import PanelItemWrapper from './PanelItemWrapper';
import Checkbox from './Checkbox';

const labels = ['Great Castles', 'Minor Castles', 'Cities', 'Towns', 'Villages', 'Holdfasts', 'Keeps', 'Landmarks', 'Ruins', 'Miscellaneous'];
const items = labels.map((label, index) =>
    <PanelItemWrapper key={index}>
        <p>{label}</p>
        <Checkbox />
    </PanelItemWrapper>
)


const Warps = () => (
    <Fragment>
        <PanelContentWrapper text="Warps">
            {items}
        </PanelContentWrapper>
    </Fragment>
)

export default Warps;