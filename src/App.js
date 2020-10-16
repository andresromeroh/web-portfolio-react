import React from 'react';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import About from './pages/About';
import Projects from './pages/Projects';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <NavigationBar />
                <Switch>
                    <Route path="/" exact component={About} />
                    <Route path="/projects" exact component={Projects} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
