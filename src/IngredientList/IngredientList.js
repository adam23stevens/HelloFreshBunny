import React, { Component } from 'react';
import axios from '../axios-base';

class IngredientList extends Component {

    state = {
        ingredientState: null,
        error: false
    }

    componentDidMount() {
        axios.get('https://hf-app-23.firebaseio.com/ingredients.json')
        .then(response => {
            this.setState({ingredientState: response.data});
        })
        .catch(error => {
            this.setState({error: true})
        })
    }
    
    renderItem = (text, quantity) => {
        return (
            <li>
            <h3>{text} : ({quantity})</h3>
            </li>
        )
    }

    render() {
        let allIngredients = [];
        if (this.state.ingredientState) {
            allIngredients = (Object.keys(this.state.ingredientState).map(vKey => {
                return this.state.ingredientState[vKey];
            }));
            allIngredients = allIngredients.map(i => this.renderItem(i.text, i.quantity));
        }        

        return (
            <ul>
                {allIngredients}
            </ul>
        )
    }

}

export default IngredientList;