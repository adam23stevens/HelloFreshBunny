import React, { Component } from 'react';
import axios from '../axios-base';

class RecipeList extends Component {
    state = {
        recipeState: null,
        error: false
    }
    componentDidMount() {
        axios.get('https://hellofresh-23.firebaseio.com/recipes.json')
        .then(response => {
            this.setState({recipeState: response.data});
        })
        .catch(error => {
            this.setState({error: true})
        })
    }

    addRecipe = (ingredients) => {
        axios.post('https://hellofresh-23.firebaseio.com/ingredients.json', ingredients)
        .then(response => {
            alert('added to list')
        })
        .catch(error => {
            alert('error')
        });
    }
    
    renderItem = (recipe) => {
        return (
            <li>
                <div className='flex flex-row'>
                <h3>{recipe.name} </h3>

                <button className='btn btn-primary' onClick={() => this.addRecipe(recipe.ingredients)}> Add </button>
                </div>
            

            </li>
        )
    }

    render() {
        let allRecipes = [];
        if (this.state.recipeState) {
            allRecipes = (Object.keys(this.state.recipeState).map(vKey => {
                return this.state.recipeState[vKey];
            }));
            allRecipes = allRecipes.map(i => this.renderItem(i));
        }        

        return (

            <div>
                <a href='/'>Back to home</a>
            
            <ul>
                {allRecipes}
            </ul>

            </div>
        )
    }
}

export default RecipeList;