import React from 'react';
import logo from './logo.svg';
import './App.css';
import Index from './pages';
import { rootCertificates } from 'tls';
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Index />
			</header>
		</div>
	);
}

export default App;
