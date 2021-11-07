import React, {useState} from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ""};

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(e) {
    var val = e.target.value;
    this.setState({name: val});
}

  handleSubmit(e) {
    e.preventDefault();
    alert("Имя: " + this.state.name);
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <p>
                <label>Введи свое имя:</label><br />
                <input type="text" value={this.state.name} onChange={this.onChange}/>
            </p>
            <input type="submit" value="Отправить" />
        </form>
    );
  }
}

// function Welcome(props) {
//   return <h1>Привет, {props.name}</h1>;
// }

// function App() {
//   let [isOpen, SetIsOpen] = useState(false);
//   return (
//     <div>
//       <button onClick = {() => SetIsOpen(!isOpen)}>Нажми сюда</button>
//       {isOpen && (
//         <Welcome name="Илья" />
//       )}
//     </div>
    
//   );
// }

export default App;
