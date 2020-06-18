const Person = (props) => {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}

const card = (
  <div>
    <Person name="Dave" age="33" />
    <Person name="Dan" age="32" />
    <Person name="Dom" age="37" />
  </div>
);

ReactDOM.render(card, document.querySelector("#card"));
