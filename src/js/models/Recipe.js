import axios from 'axios';
import { key } from '../config';

export default class Recipe {
    constructor(id){
        this.id = id;
    }

    async getRecipe() {
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&rId=${this.id}`);
            console.log(res);
            this.title = res.data.recipes.title;
            this.author = res.data.recipes.publisher;
            this.img = res.data.recipes.image_url;
            this.url = res.data.recipes.source_url;
            this.ingredients = res.data.recipes.ingredients;
            console.log(this.ingredients)
        }
        catch(err){
            alert(`${err} Something went wrong! :(`);
            console.log(err)
        }
    }
    calcTime() {
        //Assuming that we need 15 min for each 3 ingredients
        const numImg = this.ingredients.length;
        const periods = Math.ceil(numImg / 3);
        this.time = periods * 15;
    }
    calcServings() {
        this.servings = 4;
    }
}