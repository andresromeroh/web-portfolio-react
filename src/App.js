import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import LinkPreview from './assets/images/link_preview.png';

function App() {
    return (
        <Router>
            <Helmet>
                <title>Andresromero.dev</title>
                <link rel='canonical' href='https://andresromero.dev/' />
                <meta name='description' content='Andrés Romero - Software Engineer' />
                <meta property='og:image' content={LinkPreview} />
            </Helmet>
            <Container className='App'>
                <NavigationBar />
                <Switch>
                    <Route path='/' exact component={About} />
                    <Route path='/projects' exact component={Projects} />
                    <Route path='/contact' exact component={Contact} />
                    <Route path='/*' component={NotFound} />
                </Switch>
                <Footer />
            </Container>
        </Router>
    );
}

export default App;
