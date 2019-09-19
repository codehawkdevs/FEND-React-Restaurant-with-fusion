import React, { Component } from 'react';
import { Breadcrumb, Row, Col, Modal, FormGroup, Label, Input, ModalHeader, ModalBody, Form, Button, BreadcrumbItem, Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.fullname, values.message);
        // event.preventDefault();
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-comment fa-lg"></span> Add Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Add a comment here...</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={2}>Select</Label>
                                <Control.select model=".rating">
                                    <option value="1" selected>1</option>
                                    <option value="2" >2</option>
                                    <option value="3" >3</option>
                                    <option value="4" >4</option>
                                    <option value="5" >5</option>
                                </Control.select>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="fullname" md={2}>Full Name</Label>
                                <Col md={10}>
                                    <Control.text model=".fullname" id="fullname" name="fullname"
                                        placeholder="Full Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".fullname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Button type="submit" color="primary">
                                Submit Comment
                            </Button>
                        </ LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}


const RenderDish = ({ dish }) => {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

const RenderComments = ({ comments, addComment, dishId }) => {
    const list = comments.map((comment) => {
        return (
            <ListGroupItem key={comment.id}>
                <p>{comment.comment}</p>
                <p>--{comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
            </ListGroupItem>
        )
    })
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardBody>
                    <h3><CardTitle>Comments</CardTitle></h3>
                    <ListGroup>
                        {list}
                    </ListGroup>
                    <br />
                    <CommentForm dishId={dishId} addComment={addComment} />
                </CardBody>
            </Card>
        </div>
    )
}


const DishDetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {props.dish ? <RenderDish dish={props.dish} /> : <div></div>}
                {props.comments ? <RenderComments comments={props.comments}
                    addComment={props.addComment}
                    dishId={props.dish.id}
                /> : <div></div>}
            </div>
        </div >
    )
}

export default DishDetail;