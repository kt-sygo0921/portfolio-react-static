import React from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';
import { Router } from '@reach/router';
import { createGlobalStyle } from 'styled-components';
import { StylesProvider } from '@material-ui/styles';
import styled from 'styled-components';
import { Header } from './components/Header';
import { Loading } from './components/Loading';
import { Footer } from './components/Footer';
import { MainContent } from './components/MainContent';
import Dynamic from 'containers/Dynamic';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

const GlobalStyle = createGlobalStyle`
    html {
        font-family:Source Sans Pro,Helvetica,sans-serif;
    }
    body {
        margin: 0;
    }
`;

const StyledMainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    min-height: 100vh;
    background: #212121;
    color: #dadada;
    padding-bottom: 40px;
    box-sizing: border-box;
`;

function App() {
    return (
        <Root>
            <StylesProvider injectFirst>
                <StyledMainWrapper>
                    <GlobalStyle />
                    <Header />
                    <MainContent>
                        <React.Suspense fallback={<Loading />}>
                        <Router>
                            <Dynamic path="dynamic" />
                            <Routes path="*" />
                        </Router>
                        </React.Suspense>
                    </MainContent>
                    <Footer />
                </StyledMainWrapper>
            </StylesProvider>
        </Root>
    );
}

export default App;
