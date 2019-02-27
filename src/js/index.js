// Global app controller
import Search from './models/Search';
import * as SearchView from './views/SearchView';
import { elements } from './views/base';
//global state obj
//search object 
//current recipe obj
//shopping list obj
//liked recipes

const state = {};

const controlSearch = async () => {
    //get quey from view
    const query = SearchView.getInput();
    console.log(query)

    if(query){
        //new search obj and add to state
        state.search = new Search(query)
        //prepare ui for results

        //search for recipes
        await state.search.getResults();

        //render results to ui
        console.log(state.search.results)
    }

}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})







