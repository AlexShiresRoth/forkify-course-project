// Global app controller
import Search from './models/Search';
import * as SearchView from './views/SearchView';
import { elements, renderLoader, clearLoader } from './views/base';
import Recipe from './models/Recipe';
//global state obj
//search object 
//current recipe obj
//shopping list obj
//liked recipes

const state = {};

const controlSearch = async () => {
    //get quey from view
    const query = SearchView.getInput();

    if(query){
        //new search obj and add to state
        state.search = new Search(query)
        //prepare ui for results
        SearchView.clearInput();
        SearchView.clearResults();
        renderLoader(elements.searchRes);
        try{
            //search for recipes
            await state.search.getResults();

            //render results to ui
            clearLoader();
            SearchView.renderResults(state.search.results);
        }
        catch(err){
            alert(err, 'Something went wrong with the search... :0')
            clearLoader();
        }
    }

}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    
    const btn = e.target.closest('.btn-inline');
    console.log(btn);
    if(btn){
        const goToPage = parseInt(btn.dataset.goto, 10);
        SearchView.clearResults();
        SearchView.renderResults(state.search.results, goToPage);
        console.log(goToPage);
    }
})

//Recipe Controller///////////////////////////////////////////////////////////////////////////////////////////////////////
const controlRecipe = async () => {
    //get id from url 
    const id = window.location.hash.replace('#','');
    console.log(id);

    if(id){
        //prepare ui for changes

        //create a new recipe object
        state.recipe = new Recipe(id);

        try{
        //get recipe data
        await state.recipe.getRecipe()
        //calculate servings and time
        state.recipe.calcTime();
        state.recipe.calcServings();
        //render recipe
        console.log(state.recipe);
        }
        catch(err){
            alert(err, 'Something went wrong!')
        }
    }
}

// for these two event types call addeventlistener events on them
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));





