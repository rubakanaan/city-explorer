import React, { Component } from 'react';
import axios from 'axios';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      cityData: {},
      display: false,
    }
  }

  updateCity = (e) => {
    console.log(e.target.value);
    this.setState({
      cityName: e.target.value,
    });
    console.log(this.state);
  }

  getData = async (e) => {
    e.preventDefault();
    const axiosData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.88bdc34a015f169659efd4fa8583736c&q=${this.state.cityName}&format=json`)
    console.log(axiosData);
    this.setState({
      cityData: axiosData.data[0],
      display: true,
    })
  }


  render() {
    return (
      <div className="App">
        <header >
          <h1>City Explorer </h1>
        </header>
        <main>
          <Form onSubmit={this.getData}>
            <Form.Group className="mb-3" controlId="formBasicEmail" 	 >
              <Form.Label>City Name</Form.Label>
              <Form.Control type="text" placeholder="Enter City Name" onChange={this.updateCity} size={'sm'} />
            </Form.Group>
            <Button variant="primary" type="submit" >
              Explore!
            </Button>
          </Form>
          {this.state.display &&
            <div>
              <p>
                {this.state.cityData.display_name}
              </p>
              
              <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.88bdc34a015f169659efd4fa8583736c&center=${this.state.cityData.lat},${this.state.cityData.lon}`} rounded />
            </div>
          }

        </main>
      </div>
    );
  }
}

export default App;
