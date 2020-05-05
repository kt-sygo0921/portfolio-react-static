import React from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';
import { Router } from '@reach/router';
import { createGlobalStyle } from 'styled-components';
import { StylesProvider } from '@material-ui/styles';
import { Header } from './components/Header';
import { Loading } from './components/Loading';
import { Footer } from './components/Footer';
import Dynamic from 'containers/Dynamic';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

const GlobalStyle = createGlobalStyle`
    html {
        background: #212121;
        color: #dadada;
        font-family:Source Sans Pro,Helvetica,sans-serif;
        max-width: 100%;
    }
    body {
        margin: 0;
    }
`;

function App() {
    return (
        <Root>
        <StylesProvider injectFirst>
            <GlobalStyle />
            <Header />
            <React.Suspense fallback={<Loading />}>
            <Router>
                <Dynamic path="dynamic" />
                <Routes path="*" />
            </Router>
            </React.Suspense>
            <Footer />
        </StylesProvider>
        </Root>
    );
}

export default App;
