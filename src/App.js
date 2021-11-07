import React, {useState} from 'react';
import './App.css';


export default class CustomerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: {
        firstName: props.firstName,
        lastName: props.lastName,
        status: props.status
      }
    }
  }

  handleFirstNameChanged(event) {
    var customer        = this.state.customer;
    customer.firstName  = event.target.value;

    this.setState({ customer: customer });
  }

  handleLastNameChanged(event) {
    var customer      = this.state.customer;
    customer.lastName = event.target.value;

    this.setState({ customer: customer });
  }

  handleStatusChanged(event) {
    var customer    = this.state.customer;
    customer.status = event.target.value;

    this.setState({ customer: customer });
  }

  handleButtonClicked() {
    console.log(this.state.customer);
  }

  render() {
    return (
      <div>
        <label>
          First Name: 
        </label>
        <input type="text" value={this.state.customer.firstName} onChange={this.handleFirstNameChanged.bind(this)}/>
        <br/>
        <label>
          Last Name:
        </label>
        <input type="text" value={this.state.customer.lastName} onChange={this.handleLastNameChanged.bind(this)}/>
        <br/>
        <label>
          Status:
        </label>
        <select value={this.state.customer.status} onChange={this.handleStatusChanged.bind(this)}>
          <option value="PENDING">
            Pending
          </option>
          <option value="APPROVED">
            Approved
          </option>
        </select>
        <hr/>
        <button onClick={this.handleButtonClicked.bind(this)}>
          Save Record
        </button>
      </div>
    );
  }
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {name: ""};

//     this.onChange = this.onChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   onChange(e) {
//     var val = e.target.value;
//     this.setState({name: val});
// }

//   handleSubmit(e) {
//     e.preventDefault();
//     alert("Имя: " + this.state.name);
//   }

//   render() {
//     return (
//         <form onSubmit={this.handleSubmit}>
//             <p>
//                 <label>Введи свое имя:</label><br />
//                 <input type="text" value={this.state.name} onChange={this.onChange}/>
//             </p>
//             <input type="submit" value="Отправить" />
//         </form>
//     );
//   }
// }

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

// export default App;
