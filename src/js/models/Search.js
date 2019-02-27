import axios from 'axios';

export default class Search {
    constructor(query){
        this.query = query;
        
    }

     async getResults() {
        const key = '82643ebe3de98ca2bd26b3272d08f8f4';

        try {
        const response = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
         this.results = response.data.recipes;
        }
        catch (err){
            alert(err)
        }
    }
}