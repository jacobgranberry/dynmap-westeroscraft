import styled from 'styled-components';
import colors from '../../theme/colors';

const PanelItemWrapper = styled.div`
    background-color: ${colors.main};
    padding: .25rem 1rem;
    margin: .75rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export default PanelItemWrapper;