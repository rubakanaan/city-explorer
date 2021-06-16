import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export class Movie extends Component {
  

    render() {
        return (
            <div>

                {this.props.movieData.map((value) => {
                    return (
                        <Card border="info" style={{ width: '35rem' }} bg={'light'} text={'primary'}      >
                            <Card.Text>
                                Movie Title: " {value.title}"
                            </Card.Text>
                            <Card.Text>
                               Average votes: " {value.average_votes}"
                            </Card.Text>
                            <Card.Text>
                            Total votes: " {value.total_votes}"
                            </Card.Text>
                        </Card>
                    )
                })
                }
            </div >
        )
    }
}

export default Movie