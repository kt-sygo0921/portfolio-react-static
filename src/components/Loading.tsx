import React from 'react';
import {CircularProgress} from '@material-ui/core';
import styled from 'styled-components';

const StyledLoader = styled(CircularProgress)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
`;

const Loading = () => (
    <StyledLoader />
)

export {Loading};
