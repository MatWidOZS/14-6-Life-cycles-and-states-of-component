var FirstCounter = React.createClass({
	getDefaultProps: function() {
		console.log('getDefaultProps - Dodanie domyślnych wartości propsów, które nie zostały przekazane do komponentu');
	},

	getInitialState: function() {
		console.log('getInitialState - określanie początkowego stanu komponentu');
		return {
			counter: 0
		};
		console.log('getInitialState - określanie początkowego stanu komponentu');
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

	componentWillMount: function() {
		console.log('componentWillMount - wywoływane przed "render", można ustawić w niej stan, nie spowoduje to przerenderowania komponentu');
	},

	render: function() {
		console.log('render - zwraca potrzebny do wyświetlenia ReactElement');
		return React.createElement('div', {className: 'container'},
			React.createElement('button', {className: 'increment', onClick: this.increment}, "Increment"),
			React.createElement('button', {className: 'decrement', onClick: this.decrement}, "Decrement"),
			React.createElement('span', {}, 'First Counter: ' + this.state.counter)
		);
	},

	componentDidMount: function() {
		console.log('componentDidMount - zostaje wywołana zaraz po metodzie render. W nim można wykonywać różne manipulacje, używać jQuerry, pobierać dane. Dane pobiera się dopiero w tym miejscu, ponieważ najpierw trzeba wyświetlić komponenty użytkownikowi, co zapobiegnie "zawieszeniu" działania strony przez oczekiwanie na odpowiedź serwera.');
	},

	componentWillReceiveProps: function() {
		console.log('componentWillReceiveProps - (faza aktualizacji) - metoda ta zostaje wywołana, gdy komponent dostaje nowe właściwości (po fazie pierwszego renderowania). Metoda pozwala na aktualizację stanu na podstawie nadchodzących właściwości.');
	},

	shouldComponentUpdate: function() {
		console.log('shouldComponentUpdate - ta metoda jest wywoływana w fazie aktualizacji przed metodą render. Pozwala sprawdzić, czy konieczne jest przerysowanie komponentu. Pozwala to zoptymalizować aplikację - operacje na DOM zużywają dużo zasobów.');
		return true;
	},

	componentWillUpdate: function() {
		console.log('componentWillUpdate - ta metoda zostaje wywołana, jeśli shouldComponentUpdate zwróci "true". Służy do przygotowania na nadchodzące zmiany. (metoda setState tutaj nie działa)');
	},

	componentDidUpdate: function() {
		console.log('componentDidUpdate  - zostaje wywołana na końcu fazy aktualizacji. Można w niej wykonywać np. manimulacje DOM (podobnie jak w componentDidMount');
	},

	componentWillUnmount: function() {
		console.log('componentWillUnmount - (faza usuwania) - w tej metodzie można wykonywać rzeczy związane z odpinaniem timerów, nasłuchiwaniem zdarzeń na elementach DOM, itp.');
	}
});

var SecondCounter = React.createClass({
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
		return React.createElement('div', {className: 'container'},
			React.createElement('button', {className: 'increment', onClick: this.increment}, "Increment"),
			React.createElement('button', {className: 'decrement', onClick: this.decrement}, "Decrement"),
			React.createElement('span', {}, 'Second Counter: ' + this.state.counter)
		);
	}
});

var ThirdCounter = React.createClass({
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
		return React.createElement('div', {className: 'container'},
			React.createElement('button', {className: 'increment', onClick: this.increment}, "Increment"),
			React.createElement('button', {className: 'decrement', onClick: this.decrement}, "Decrement"),
			React.createElement('span', {}, 'Third Counter: ' + this.state.counter)
		);
	}
});

var FourthCounter = React.createClass({
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
		return React.createElement('div', {className: 'container'},
			React.createElement('button', {className: 'increment', onClick: this.increment}, "Increment"),
			React.createElement('button', {className: 'decrement', onClick: this.decrement}, "Decrement"),
			React.createElement('span', {}, 'Fourth Counter: ' + this.state.counter)
		);
	}
});

var App = React.createClass({
	render: function() {
		return (
			React.createElement('div', {},
				React.createElement(FirstCounter, {}),
				React.createElement(SecondCounter, {}),
				React.createElement(ThirdCounter, {}),
				React.createElement(FourthCounter, {})
			)
		);
	}
});

var app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));