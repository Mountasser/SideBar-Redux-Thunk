
import * as types from './types';
let axios = require('axios');


    

    export let itemsFetchDataSucces = (devsArray) => {
        return {
            type : types.LOAD_STATE,
            Endpoints : devsArray
        }
    }
    

    export let select_item = (id) => {
        return {
            type : types.SELECT_API_ITEM,
            id:id
        }
    }
    
    // reducer to indicate we have received all our data from the api
    export let select_section = (id) => {
        return {
            type : types.SELECT_SECTION,
            id:id
        }
    }
    
    

//reducer to indicate that our api call has started
export let startDevSearch = () => {
    return {
        type : 'Start_Dev_Search'
    }
}

// reducer to indicate we have received all our data from the api
export let endDevSearch = (devsArray) => {
    return {
        type : 'End_Dev_Search',
        devsArray
    }
}


//here we actually do the fetching
export let fetchDev = () => {

    let url = "http://www.mocky.io/v2/5afc3a923100004b007c5d69"
    return (dispatch) => {
       dispatch(startDevSearch())
        return axios.get(url).then(
            (response) => {
                let devsArr = response.data    
   

                dispatch(itemsFetchDataSucces(devsArr))
                
           },
            (err) => {
                console.log(err);
            }
        )

    }
}