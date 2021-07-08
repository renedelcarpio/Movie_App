import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Kids from './pages/Kids';
import Movies from './pages/Movies';
import NotFound from './pages/NotFound';
import Series from './pages/Series';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/Movies' component={Movies} />
					<Route exact path='/Series' component={Series} />
					<Route exact path='/Kids' component={Kids} />
					<Route exact path='' component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}
export default App;
