
import * as types from './types';
let axios = require('axios');

export const itemsFetchData = (url)=>{
    const  Endpoints=[
        {id:1,titre:"toto",Leafs:
                               [{index:1,title:"Leaf1-1"},
                               {index:2,title:"Leaf1-2"}]},
        {id:2,titre:"bobo",Leafs:
                               [{index:1,title:"Leaf2-1"},
                               {index:2,title:"Leaf2-2"}]},
                              
        {id:3,titre:"lolo",Leafs:
                               [{index:1,title:"Leaf3-1"},
                               {index:2,title:"Leaf3-2"}]}
        ]
console.log(url);
    return (dispatch) => {
        console.log(url);
        dispatch(itemsIsLoading(true))
        return axios.get(url)
        /////////////
       
        .then((response) => response.json())
        .then((items) => {dispatch(itemsFetchDataSuccess(Endpoints))
            console.log(response);})
            }
        }
            
/////////////////////////////

    

    export let itemsFetchDataSucces = (devsArray) => {
        return {
            type : types.LOAD_STATE,
            Endpoints : devsArray
        }
    }
    

    export const itemsIsLoading = (flag) => {
    {
        type : types.LOADING_ITEM;
        flag : flag;
    }
    
    }

    export function itemHasErrored(bool){
        return {
            type :types.ITEMS_HAS_ERRORED,
            hasErrored : bool
        };
    

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