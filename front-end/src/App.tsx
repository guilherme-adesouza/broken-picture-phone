import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import pageRoutes from './pages/PageRoutes';

function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <Switch>
                    {pageRoutes.map((pageRouter) => {
                        const Component = pageRouter.component;
                        return (
                            pageRouter.routes.map((route, idx) =>
                                <Component key={idx} {...route}/>
                            )
                        )
                    })}
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
