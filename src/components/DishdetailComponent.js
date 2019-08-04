import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    renderComments(comments) {
        const list = comments.map((comment) => {
            return (
                <ListGroupItem key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>--{comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                </ListGroupItem>
            )
        })
        return list;
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <Card>

                        <CardBody>
                            <h3><CardTitle>Comments</CardTitle></h3>
                            <ListGroup>
                                {this.renderComments(this.props.dish.comments)}
                            </ListGroup>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}

export default DishDetail;