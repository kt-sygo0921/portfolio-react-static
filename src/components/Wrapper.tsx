import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    width: 1024px;
    margin: 0 auto;
`;

interface Iprops {
    children: Element;
    className: string;
}

const Wrapper: React.FC= (props: Iprops) => {
    const {children, className} = props;
    return (
        <StyledSection className={className}>
            {children}
        </StyledSection>
    )
}

export {Wrapper};
