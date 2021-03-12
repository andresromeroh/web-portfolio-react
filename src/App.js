import React from 'react';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Router>
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
