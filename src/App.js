/** @format */

import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";
import Pagination from "./Pagination";
//axios in order to call api


function App() {
	//set up the initial/current state, starting empty in this case. then the method to update it
	//default state on the right of =, will show up on first render
  const [pokemon, setPokemon] = useState([]);
  
  //make it so app is dynamic, change which page we are on...
  //tracks current page we are on
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon/")

  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()

  //need to set up the loading screen, true so that by default application is loading
  const [loading, setLoading] = useState(true)

	useEffect(() => {

    //to reset it each time
    setLoading(true)
    let cancel;


		//this line below will make a fetch request and return us a promise
		  //the promise will have the response for our request variable that gets returned
		    //the property of 'data' will hold all the json data from the api
		axios.get(currentPageUrl, {
      //takes function, the cancel token that we need
      cancelToken: new axios.CancelToken(c => cancel = c )
    }).then((res) => {

    //set loading to false when rendering is happening 
    setLoading(false)


    //grab 'next' variable from the request on the pokeapi site
    setNextPageUrl(res.data.next)
    setPrevPageUrl(res.data.previous)
        //alll three these being done every time make fetch request

			//map through to get name from each one
			//set pokemon variable to that value
			setPokemon(res.data.results.map((p) => p.name));
    })
    
    //make sure we cancel every old request every tiume user makes a new request
    return () => cancel()

	}, [currentPageUrl]);
	//we gotta add useEffect (wrap it around)to make this all work properly though
	//we can run it anytime we want based on the props that we pass it as the second argument
	//ifwe only want it to run/render once-  we use an empty array '[]'
// in this case we want to change our current url, we want to refetch pokemon.. so gets passed as parameter to use effect
    //so its saying everytime url changes- re render the effect, if it doesnt change, than dont bother doing it



function gotoNextPage() {
  setCurrentPageUrl(nextPageUrl)
}

function gotoPrevPage() {
  setCurrentPageUrl(prevPageUrl)
}

    //show little thing during loading
    if(loading) return "Loading..."

	return (
		// pass pokemon down to our pokemon list
		<PokemonList pokemon={pokemon} />

    <Pagination
    // pass the functions to it...
    gotoNextPage={gotoNextPage}
    gotoPrevPage={gotoPrevPage}

    />
	);
}

export default App;
