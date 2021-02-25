import React from 'react';
import {
	BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import WhoAmI from './pages/WhoAmI/WhoAmI';
import Projects from './pages/Projects/Projects';
import UserProvider from './contexts/UserContext';
import ExperienceAndSkills from './pages/ExperienceAndSkills/ExperienceAndSkills';

const App = () => (
	<UserProvider>
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
					path="/experience-and-skills"
					component={ExperienceAndSkills}
				/>
				<Route
					path="/projects"
					component={Projects}
				/>
			</Switch>
		</BrowserRouter>
	</UserProvider>
);

export default App;
