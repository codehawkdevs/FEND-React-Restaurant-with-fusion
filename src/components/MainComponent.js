import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }
    renderDish(dish) {
        if (dish != null) {
            return (
                <DishDetail dish={this.state.dishes.filter((dish) =>
                    dish.id === this.state.selectedDish)[0]} />
            );
        };
    }
    render() {
        return (
            <div>
                <Navbar dark color='info'>
                    <div className='container'>
                        <NavbarBrand href='/'>Resaturant with Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} onClick={(dishId) =>
                    this.onDishSelect(dishId)
                } />
                {this.renderDish(this.state.selectedDish)}
            </div>
        );
    }
}

export default Main;
