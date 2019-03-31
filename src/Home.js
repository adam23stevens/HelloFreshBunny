import React, {Component} from 'react';

class Home extends Component {

    render() {
        return (
            <div>
            <h1>Hello fresh ingredient list</h1>

            <ul>
            <li>
                <a href='/recipes'>
                Recipes
                </a>
            </li>


            <li>
                <a href='/ingredients'>
                Ingredients
                </a>
            </li>
            </ul>
            </div>
        )
    }
}

export default Home;