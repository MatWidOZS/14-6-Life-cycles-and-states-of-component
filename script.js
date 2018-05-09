var Counter = React.createClass({
	getInitialState: function() {
		return {
			firstCounter: 0,
			secondCounter: 5,
			thirdCounter: -3
		};
	},

	increment: function() {
		this.setState({
			firstCounter: this.state.firstCounter + 1,
			secondCounter: this.state.secondCounter + 1,
			thirdCounter: this.state.thirdCounter + 1
		});
	},

	decrement: function() {
		this.setState({
			firstCounter: this.state.firstCounter - 1,
			secondCounter: this.state.secondCounter - 1,
			thirdCounter: this.state.thirdCounter - 1
		});
	},

	render: function() {
		return React.createElement('div', {},
			React.createElement('button', {className: 'increment', onClick: this.increment}, "Increment"),
			React.createElement('button', {className: 'decrement', onClick: this.decrement}, "Decrement"),
			React.createElement('span', {}, 'First counter: ' + this.state.firstCounter),
			React.createElement('span', {}, 'Second counter: ' + this.state.secondCounter),
			React.createElement('span', {}, 'Third counter: ' + this.state.thirdCounter)
		);
	}
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));