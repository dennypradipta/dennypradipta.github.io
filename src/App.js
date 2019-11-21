import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from 'react-bulma-components/lib/components/container';

import IndexPage from './pages/IndexPage';
import NotFoundPage from "./pages/NotFoundPage"
import './App.scss';

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<Router>
					<Container>
						<Switch>
							<Route path="/" exact>
								<IndexPage></IndexPage>
							</Route>
							<Route path="*">
								<NotFoundPage></NotFoundPage>
							</Route>
						</Switch>
					</Container>
				</Router>
			</header>
		</div>
	);
}

export default App;