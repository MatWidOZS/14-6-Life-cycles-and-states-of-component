var Counter = React.createClass({
	getInitialState: function() {
		return {
			counter: 0
		};
	},

	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		});
	},

	render: function() {
		return React.createElement('div', {},
			React.createElement('button', {className: 'increment', onClick: this.increment}, "Increment"),
			React.createElement('button', {className: 'decrement', onClick: this.decrement}, "Decrement"),
			React.createElement('span', {}, 'Licznik: ' + this.state.counter)
		);
	}
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));