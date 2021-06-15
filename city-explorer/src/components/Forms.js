import React, { Component } from 'react'
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Alertmsg from './Alertmsg';
import Weather from './Weather';
import Card from 'react-bootstrap/Card'


export class Forms extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      cityData: {},
      display: false,
      error: "",
      alert: false,
      weatherData: []
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
    try {
      console.log(process.env.REACT_APP_URL);
      const axiosData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.88bdc34a015f169659efd4fa8583736c&q=${this.state.cityName}&format=json`)
      const appRes = await axios.get(`${process.env.REACT_APP_URL}/weather`);
      console.log(axiosData);
      console.log(appRes);
      this.setState({
        cityData: axiosData.data[0],
        display: true,
        alert: false,
        weatherData: appRes.data

      })

    } catch (error) {
      this.setState({
        errot: error.message,
        alert: true
      })
    }
  }


  render() {
    return (
      <div>

        <Alertmsg
          alert={this.state.alert}
        />
         <Card style={{ width: '38rem' }}>
        <Form onSubmit={this.getData}>
          <Form.Group className="mb-3" controlId="formBasicEmail" 	 >
            <Form.Label>City Name</Form.Label>
            <Form.Control type="text" placeholder="Enter City Name" onChange={this.updateCity} size={'sm'} />
          </Form.Group>
          <Button variant="primary" type="submit" >
            Explore!
          </Button>
        </Form>
         </Card>

        {this.state.display &&
          <div>
            <p>
              {this.state.cityData.display_name}
            </p>
            <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.88bdc34a015f169659efd4fa8583736c&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=10`} rounded />
            <p>
              {`latitude: ${this.state.cityData.lat}, longitude: ${this.state.cityData.lon}`}
            </p>
           
            <Weather
            weatherData={this.state.weatherData}
            />
          </div>

        }
      </div>
    )
  }
}

export default Forms;
