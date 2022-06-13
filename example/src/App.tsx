import React from 'react';
import {LocaleControlProvider} from 'bear-react-locale';

import Dashboard from 'views/Dashoboard';
import NotComponent from 'views/NotComponent';
import {DEFAULT_LOCALE, localeDictionaries} from './config/locale';
import {Col, Container, GridThemeProvider, Row} from 'bear-react-grid';


function App() {

    return (
        <GridThemeProvider gridTheme={{}}>
            <LocaleControlProvider
                localeDictionaries={localeDictionaries}
                defaultLocale={DEFAULT_LOCALE}
                persistKey="persist:bear-example"
            >
                <Container>
                    <Row>
                        <Col col={24}>
                            <h2>Component Render</h2>
                            <Dashboard/>
                        </Col>
                    </Row>
                    <Row>
                        <Col col={24}>
                            <h2>Not Component Global</h2>
                            <NotComponent/>
                        </Col>
                    </Row>

                </Container>
            </LocaleControlProvider>
        </GridThemeProvider>

    );
}

export default App;

