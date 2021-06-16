import React, { Component } from 'react'
import axios from 'axios';
import Alertmsg from './Alertmsg';
import Weather from './Weather';
import Movie from './Movie'
import FormDisplay from './FormDisplay';


export class Forms extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      cityData: {},
      display: false,
      error: "",
      alert: false,
      weatherData: [],
      lat: '',
      lon: '',
      movieData: []
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
      await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.88bdc34a015f169659efd4fa8583736c&q=${this.state.cityName}&format=json`).then(axiosData => {
        this.setState({
          cityData: axiosData.data[0],
          lat: axiosData.data[0].lat,
          lon: axiosData.data[0].lon,
        })

        axios.get(`${process.env.REACT_APP_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}`).then(apiReq => {
          this.setState({
            weatherData: apiReq.data,
            display: true,
            alert: false,
          })
        });
      })
    } catch (error) {
      this.setState({
        errot: error.message,
        alert: true
      })
    }

    axios.get(`${process.env.REACT_APP_URL}/movie?query=amman`).then(apiReq => {
      console.log(this.state.cityData);
      this.setState({
        movieData: apiReq.data,

      })
    });
  }


  render() {
    return (
      <div>

        <Alertmsg
          alert={this.state.alert}
        />

        <FormDisplay
          updateCity={this.updateCity}
          getData={this.getData}
          display={this.state.display}
          cityData={this.state.cityData}
        />

        <Weather
          weatherData={this.state.weatherData}
        />

        <Movie
          movieData={this.state.movieData}
        />

      </div>

    )
  }
}

export default Forms;
