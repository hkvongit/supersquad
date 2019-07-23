import character_json from "../data/character.json"
import { ADD_CHARACTER,REMOVE_CHARACTER } from "../actions"
import {combineReducers} from "redux"

const characters=(state=character_json, action)=>{
  let characters=[]
  switch(action.type){
    case ADD_CHARACTER:
      characters=state.filter(item=>item.id !== action.id)
      return characters;
    case REMOVE_CHARACTER:
      characters= [...state,createCharacter(action.id)] //createCharacter is helper function prgrammed below
      return characters;
    default:
      return state;
  }
}
const heroes =(state=[],action)=>{
  let heroes=[]
  switch(action.type){
    case ADD_CHARACTER:
      heroes =[...state, createCharacter(action.id)]
      return heroes;
    case REMOVE_CHARACTER:
      heroes= state.filter(item=>item.id !== action.id)
      return heroes;
    default:
      return state;
  }
}

const createCharacter=(id)=>{
  let character =character_json.find(c=>c.id===(id))
  return character 
}

const rootReducer = combineReducers({
  characters,
  heroes
})

export default rootReducer