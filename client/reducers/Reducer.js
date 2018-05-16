
import * as types from '../actions/types';



export let devsReducer = (state={loading : false, Endpoints : []},action) => {
  switch(action.type){
    case types.ITEMS_HAS_ERRORED:
    return {...state,
            loading : action.hasErrored,
            Endpoints : []
           }
 case types.LOADING_ITEM:
    return {...state,
            loading : action.flag,
            Endpoints : []
           }
 case types.LOAD_STATE:
 {console.log("mozo");
 console.log(state);
 let state2 =    {...state,
   loading : true,
   Endpoints : action.Endpoints

            }
         let state3 = "bobo"
  
return state2; 

          }
  case types.SELECT_SECTION:
    return {...state,
            currentSection : state.Endpoints.find(section => section.id == action.id),
             Endpoints : []
          }
 case types.SELECT_API_ITEM :
   return {...state,
            loading : action.Endpoints,
            currentItemApi : state.Endpoints.find(item => item.id == item.id),
          }
  default :
  return state
  }
}