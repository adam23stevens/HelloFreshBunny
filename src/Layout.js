import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import IngredientList from './IngredientList/IngredientList';
import RecipeList from './recipeList/recipes';
import Home from './Home';

class Layout extends Component {


    render() {

        return (
        <main>
            <Route path='/' exact component = {Home}/>
            <Route path='/ingredients' component={IngredientList}/>
            <Route path='/recipes' component={RecipeList}/>
        </main>)
    }
}

export default Layout;