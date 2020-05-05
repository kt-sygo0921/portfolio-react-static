import React from 'react';
import styled from 'styled-components';
import {Wrapper} from './Wrapper';

const StyledInnerContent = styled.div`
    position: relative;
    padding: 40px 0;
`;

interface Iprops {
    children: React.ReactNode;
    className?: string;
}

const InnerContent = (props: Iprops) => {
    const {children, className} = props;

    return (
        <Wrapper>
            <StyledInnerContent className={className}>
                {children}
            </StyledInnerContent>
        </Wrapper>
    )
}

export {InnerContent};
