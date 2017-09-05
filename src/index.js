import React from 'react'
import ReactDOM from 'react-dom'
import App from './js/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App/>, document.getElementById('root'))
registerServiceWorker()

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// // import { Router, Route, Link, Switch } from 'react-router';
// import {
// 	HashRouter,
// 	Route,
// 	Link,
// 	Switch
// } from 'react-router-dom';
//
// class App extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>App</h1>
// 				<ul>
// 					<li><Link to="/">Home</Link></li>
// 					<li><Link to="/about">About</Link></li>
// 					<li><Link to="/inbox">Inbox</Link></li>
// 				</ul>
// 				{this.props.children}
//
// 			</div>
// 		);
// 	}
// }
//
// const About = () => (
// 	<div>
// 		<h3>About</h3>
// 	</div>
// )
//
// const Home = () => (
// 	<div>
// 		<h3>Home</h3>
// 	</div>
// )
//
// const Message = ({ match }) => (
// 	<div>
// 		<h3>new messages</h3>
// 		<h3>{match.params.id}</h3>
// 	</div>
// )
//
// class ABC extends Component {
// 	render() {
// 		console.log(this.props.match.params.id)
// 		return <div style={{backgroundColor: 'red'}}>
// 			11111111
// 		</div>
// 	}
// }
//
// const Inbox = ({ match }) => (
// 	<div>
// 		<h2>Topics</h2>
// 		<Route path={`${match.url}/messages/:id`} component={ABC}/>
//
// 	</div>
// )
//
// ReactDOM.render(
// 	(<HashRouter>
// 		<App>
// 			<Route exact path="/" component={Home} />
// 			<Route path="/about" component={About} />
// 			<Route path="/inbox" component={Inbox} />
// 			<Route path="/messages/:id" component={ABC}/>
// 		</App>
// 	</HashRouter>),
// 	document.getElementById('root')
// );


