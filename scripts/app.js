// app.js
'use strict'; // Делает код более безопасным и оптимизированным. и от неявных классов

const e = React.createElement; // Вместо React.createElement('div') можно писать e

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return e(
      'div',
      null,
      [
        e('h1', null, 'Счётчик: ' + this.state.count),
        e(
          'button',
          { 
            onClick: () => this.setState({ count: this.state.count + 1 }),

          },
          'Увеличить'
        )
      ]
    );
  }
}

// Находим контейнер и монтируем React-приложение
const domContainer = document.querySelector('#react-app');
ReactDOM.render(e(Counter), domContainer);