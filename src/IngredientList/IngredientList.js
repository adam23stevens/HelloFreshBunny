import React, { Component } from 'react';
import axios from '../axios-base';

class IngredientList extends Component {

    state = {
        ingredientState: null,
        error: false
    }

    componentDidMount() {
        axios.get('https://hellofresh-23.firebaseio.com/ingredients.json')
        .then(response => {
            this.setState({ingredientState: response.data});
        })
        .catch(error => {
            this.setState({error: true})
        })
    }

    clearList = () => {
        axios.delete('https://hellofresh-23.firebaseio.com/ingredients.json').then(response => {
            this.setState({ingredientState: response.data});
        })
        .catch(error => {
            this.setState({error: true})
        })
    }
    
    renderItem = (ingredient) => {

        if (ingredient != null) 
        return (
            <li>
            <h3>{ingredient.name} : ({ingredient.quantity})</h3> <input type = 'checkbox'></input>
            </li>
        )
    }

    render() {
        let allIngredients = [];
        if (this.state.ingredientState) {
            allIngredients = (Object.keys(this.state.ingredientState).map(vKey => {
                return this.state.ingredientState[vKey];
            }));

            allIngredients = allIngredients.reduce(function(arr, line) {
    
                let lineKeys = (Object.keys(line).map(vKey => {
                    return line[vKey]
                }));
            
                arr.push(lineKeys);
                return arr;
            }, []);

            allIngredients = [].concat.apply([], allIngredients);
            // console.log(allIngredients);
            // allIngredients = allIngredients.reduce(function(arr, line) {
            //     if (line === null) return arr;
            //     console.log(arr);
            //     let obj = arr.find(function(obj) {
            //         return obj.name === line.name
            //     });
            //     if (!obj) {
            //         obj = {
            //             name: line.name,
            //             quantity: line.quantity
            //         };
            //         arr.push(obj);
            //     } else {
            //         line.quantity++;
            //    }
            // }, []);

            allIngredients = allIngredients.map(i => this.renderItem(i));
        }        

        return (
            <div>
                <a href='/'>Back to home</a>

                <br/>

                <button className='btn btn-secondary' onClick={() => this.clearList()}>Clear</button>
            <ul>
                {allIngredients}
            </ul>

            </div>
        )
    }

}

export default IngredientList;