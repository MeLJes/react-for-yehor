import React from 'react';
import Shop from './Shop'
// import Counter from './Counter'
// import Form from './Form'

// let name = 'Vitalii'

function List ({ length }) {
  let array = Array.from({ length }, (element, index) => index + 1)

  return (
    <ul>
      {array.map(n => (
        <ListItem key={n} number={n} />
      ))}
    </ul>
  )
}

function ListItem (props) {
  return (
    <li>Text {props.number}</li>
  )
}

function App() {
  return (
    <div>
      {/* Hello {name}!
      <List length={3} />
      <Counter id={1} />
      <Form /> */}
      <Shop />
    </div>
  );
}

export default App;
