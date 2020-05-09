import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import {Wrapper} from './Wrapper';
import {Button} from '@material-ui/core';

const StyledWrapper = styled(Wrapper)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;   
`;

const StyledTitle = styled.h1`
    font-size: 20px;
`;

const StyledTitleBUtton = styled(Button)`
    background: #212121;
    color: #dadada;
    font-weight: bold;
`;

const StyledLink = styled(Link)`
    margin: 0 5px;
    text-decoration: none;
`;

const StyledNaviButton = styled(Button)`
    background: #212121;
    color: #dadada;
`;

const Header = () => (
    <StyledWrapper>
        <StyledTitle>
            <StyledLink to="/">
                <StyledTitleBUtton>Kato Shogo</StyledTitleBUtton>
            </StyledLink>
        </StyledTitle>
        <nav>
            <StyledLink to="/about">
                <StyledNaviButton>About</StyledNaviButton>
            </StyledLink>
            <StyledLink to="/blog">
                <StyledNaviButton>Blog</StyledNaviButton>
            </StyledLink>
            <StyledLink to="/dynamic">
                <StyledNaviButton>Dynamic</StyledNaviButton>
            </StyledLink>
        </nav>
    </StyledWrapper>
)

export {Header};
