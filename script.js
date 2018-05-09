var Counter = React.createClass({
	getInitailState: function() {
		return {
			counter: 0
		};
	},

	render: function() {
		return React.createElement('div', {},
			React.createElement('span', {} 'Licznik ' + this.state.counter)
		);
	}
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));