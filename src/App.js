import React from 'react';
import {useStateValue} from './state'
import SearchView from './views/SearchView'
import DetailView from './views/DetailView'
import HeaderBar from './components/HeaderBar'
import 'semantic-ui-css/semantic.min.css'
import './App.css'

function App() {
	const [{view}] = useStateValue()
	return (
		<div className="App">
			<HeaderBar withBackButton={view === 'comic'} />
			{{
				search: <SearchView />,
				comic: <DetailView />
			}[view || 'search']}
		</div>
	);
}

export default App;
