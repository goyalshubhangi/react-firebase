import React from 'react'
import './App.css';
import Button from './components/Button'
import Navbar from './components/Navbar';
import RequestNotification from './utils/RequestNotification';

function App() {
	return (
		<div className="App wrapper">
			<Navbar />
			<Button />
			<RequestNotification />
		</div>
	);
}

export default App