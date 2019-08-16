import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
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

const RenderComments = ({ comments }) => {
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
                {props.comments ? <RenderComments comments={props.comments} /> : <div></div>}
            </div>
        </div >
    )
}

export default DishDetail;