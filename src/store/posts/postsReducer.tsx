import { FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from './postsTypes'
import { StoreType } from './postsReducerTypes'
import { ActionType } from './postsActionsTypes'

const initialState:StoreType = {
  loading: false,
  data: [],
  error: ''
}

const postReducer = (state = initialState, action: ActionType) : StoreType  => {
  switch(action.type){
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_POSTS_SUCCESS:
      return {
        loading: false,
        data: action.payload!,
        error: ''
      }
    case FETCH_POSTS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload!
      }
    default: return state
  }

}


export default postReducer