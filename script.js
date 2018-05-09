var Counter = React.createClass({
	getDefaultProps: function() {
		console.log('getDefaultProps - Dodanie domyślnych wartości propsów, które nie zostały przekazane do komponentu');
	},

	getInitialState: function() {
		console.log('getInitialState - określanie początkowego stanu komponentu');
		return {
			firstCounter: 0,
			secondCounter: 5,
			thirdCounter: -3.5
		};
		console.log('getInitialState - określanie początkowego stanu komponentu');
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

	componentWillMount: function() {
		console.log('componentWillMount - wywoływane przed "render", można ustawić w niej stan, nie spowoduje to przerenderowania komponentu');
	},

	render: function() {
		console.log('render - zwraca potrzebny do wyświetlenia ReactElement');
		return React.createElement('div', {},
			React.createElement('button', {className: 'increment', onClick: this.increment}, "Increment"),
			React.createElement('button', {className: 'decrement', onClick: this.decrement}, "Decrement"),
			React.createElement('span', {}, 'First counter: ' + this.state.firstCounter),
			React.createElement('span', {}, 'Second counter: ' + this.state.secondCounter),
			React.createElement('span', {}, 'Third counter: ' + this.state.thirdCounter)
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

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));