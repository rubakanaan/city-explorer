import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export class Weather extends Component {
    render() {
        return (
            <div>

                {this.props.weatherData.map((value) => {
                    return (
                        <Card border="light" style={{ width: '35rem' }}>
                             <Card.Text>
                                description": "Low of {value.low}, High of {value.high} with  {value.description}"
                                </Card.Text>
                           <Card.Text>
                                date": {value.date}
                           </Card.Text>
                        
                        </Card>
        )
    })
}
            </div >
        )
    }
}

export default Weather
