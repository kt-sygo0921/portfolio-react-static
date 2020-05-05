import React from 'react';
import styled from 'styled-components';
// import {Wrapper} from './Wrapper';

const StyledWrapper = styled.section`
    position: absolute;
    bottom: 0;
    left: 50;
    width: 100%;
`;

const StyledCopyRight = styled.p`
    margin: 0;
    text-align: center;
    height: 40px;
    line-height: 40px;
`;

const Footer: React.FC = () => (
    <StyledWrapper>
        <StyledCopyRight>
            &copy; 2020 Shogo Kato
        </StyledCopyRight>
    </StyledWrapper>
)

export {Footer};
