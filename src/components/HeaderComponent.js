import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar dark color='info'>
                    <div className='container'>
                        <NavbarBrand href='/'>Resaturant with Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Resaturant with Fusion</h1>
                                <p>We take inspiration from the world's best cuisines, and create a unique experience. Our lispsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;