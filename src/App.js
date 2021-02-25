import React from 'react';
import {
	BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import WhoAmI from './pages/WhoAmI/WhoAmI';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';

const App = () => (
	<BrowserRouter>
		<Navbar/>
		<Switch>
			<Route
				exact path="/"
				component={Home}
			/>
			<Route
				path="/who-am-i"
				component={WhoAmI}
			/>
			<Route
				path="/experience"
				component={Experience}
			/>
			<Route
				path="/projects"
				component={Projects}
			/>
		</Switch>
	</BrowserRouter>
);

export default App;
