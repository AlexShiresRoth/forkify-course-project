import axios from 'axios';
import { key } from '../config';

export default class Search {
    constructor(query){
        this.query = query;
        
    }

    async getResults() {
        

        try {
        const response = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
         this.results = response.data.recipes;
        }
        catch (err){
            alert(err)
        }
    }
}