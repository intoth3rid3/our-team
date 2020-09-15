import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/Content';

function App() {
	const times = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	return (
		<div className="App">
			<h1> Our Team </h1>
			<div className="row">{times.map((object, i) => <Content obj={object} key={i} />)}</div>
		</div>
	);
}

export default App;
