import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'


export class FormDisplay extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <Card style={{ width: '38rem' }}>
                    <Form onSubmit={this.props.getData}>
                        <Form.Group className="mb-3" controlId="formBasicEmail" 	 >
                            <Form.Label>City Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter City Name" onChange={this.props.updateCity} size={'sm'} />
                        </Form.Group>
                        <Button variant="primary" type="submit" >
                            Explore!
                        </Button>
                    </Form>
                </Card>

                {this.props.display &&
                    <div>
                        <p>
                            {this.props.cityData.display_name}
                        </p>
                        <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.88bdc34a015f169659efd4fa8583736c&center=${this.props.cityData.lat},${this.props.cityData.lon}&zoom=10`} rounded />
                        <p>
                            {`latitude: ${this.props.cityData.lat}, longitude: ${this.props.cityData.lon}`}
                        </p>
                    </div>

                }
            </div>

        )
    }
}

export default FormDisplay
