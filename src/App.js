import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
