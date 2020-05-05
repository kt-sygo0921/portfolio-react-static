import React from 'react';
import styled from 'styled-components';
import {Wrapper} from './Wrapper';

const StyledMainContent = styled.main`
    padding: 40px 0;
    flex: 1;
    display: flex;
    box-sizing: border-box;
`;

interface Iprops {
    children: React.ReactNode;
    className?: string;
}

const MainContent = (props: Iprops) => {
    const {children, className} = props;

    return (
        <StyledMainContent className={className}>
            <Wrapper>
            {children}
            </Wrapper>
        </StyledMainContent>
    )
}

export {MainContent};
