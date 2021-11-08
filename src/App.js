import React, {Component} from 'react';
import './App.css';

const PLACES = [
  { name: "Palo Alto", zip: "94303" },
  { name: "San Jose", zip: "94088" },
  { name: "Santa Cruz", zip: "95062" },
  { name: "Honolulu", zip: "96803" }
];

class WeatherDisplay extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null
    };
  }
  componentDidMount() {
    const zip = this.props.zip;
    const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
      zip +
      "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial";
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({ weatherData: json });
    });
  }
  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div>Loading</div>;
    const weather = weatherData.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <div>
        <h1>
          {weather.main} in {weatherData.name}
          <img src={iconUrl} alt={weatherData.description} />
        </h1>
        <p>Current: {weatherData.main.temp}°</p>
        <p>High: {weatherData.main.temp_max}°</p>
        <p>Low: {weatherData.main.temp_min}°</p>
        <p>Wind Speed: {weatherData.wind.speed} mi/hr</p>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        {PLACES.map((place, index) => (
          <button
            key={index}
            onClick={() => {
              this.setState({ activePlace: index });
            }}
          >
            {place.name}
          </button>
        ))}
        <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} />
      </div>
    );
  }
}


// export default class CustomerForm extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       customer: {
//         firstName: props.firstName,
//         lastName: props.lastName,
//         status: props.status
//       }
//     }
//   }

//   handleFirstNameChanged(event) {
//     var customer        = this.state.customer;
//     customer.firstName  = event.target.value;

//     this.setState({ customer: customer });
//   }

//   handleLastNameChanged(event) {
//     var customer      = this.state.customer;
//     customer.lastName = event.target.value;

//     this.setState({ customer: customer });
//   }

//   handleStatusChanged(event) {
//     var customer    = this.state.customer;
//     customer.status = event.target.value;

//     this.setState({ customer: customer });
//   }

//   handleButtonClicked() {
//     console.log(this.state.customer);
//   }

//   render() {
//     return (
//       <div>
//         <label>
//           First Name: 
//         </label>
//         <input type="text" value={this.state.customer.firstName} onChange={this.handleFirstNameChanged.bind(this)}/>
//         <br/>
//         <label>
//           Last Name:
//         </label>
//         <input type="text" value={this.state.customer.lastName} onChange={this.handleLastNameChanged.bind(this)}/>
//         <br/>
//         <label>
//           Status:
//         </label>
//         <select value={this.state.customer.status} onChange={this.handleStatusChanged.bind(this)}>
//           <option value="PENDING">
//             Pending
//           </option>
//           <option value="APPROVED">
//             Approved
//           </option>
//         </select>
//         <hr/>
//         <button onClick={this.handleButtonClicked.bind(this)}>
//           Save Record
//         </button>
//       </div>
//     );
//   }
// }

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

export default App;
