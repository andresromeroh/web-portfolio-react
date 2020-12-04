import React from 'react';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import About from './pages/About';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <React.Fragment className='App'>
                <NavigationBar />
                <Switch>
                    <Route path='/' exact component={About} />
                    <Route path='/projects' exact component={Projects} />
                    <Route path='/*' component={NotFound} />
                </Switch>
                <Footer />
            </React.Fragment>
        </Router>
    );
}

export default App;
