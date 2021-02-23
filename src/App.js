import React from 'react';
import {
	BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';

const App = () => (
	<BrowserRouter>
		<Navbar/>
		<Switch>
			<Route
				path="/"
				component={Home}
			/>
		</Switch>
	</BrowserRouter>
);

export default App;
