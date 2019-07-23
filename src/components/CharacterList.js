import React, { Component } from 'react'
import {connect} from "react-redux"
// import {bindActionCreators} from "redux"
import {addCharacterById,removeCharacterById} from  "../actions"
class CharacterList extends Component {
  render() {
    console.log("this.props access to characterlist comp",this.props)
    return (
      <div>
        <h4>Characters</h4>
        <ul>
          {
            this.props.char.map(c=>{
              return(
                <li key={c.id}>{c.name}
                  <button onClick={()=>this.props.addCharacterById(c.id)}>
                    ADD THIS TO HEROES
                  </button>
                </li>
                
              )
            })
          }
        </ul>
        <h4>Heroes</h4>
        <ul>
          {
            this.props.heroes.map(c=>{
              return(
                <li key={c.id}> {c.name}
                    <button onClick={()=>this.props.removeCharacterById(c.id)}>
                    REMOVE FROM HEROES
                  </button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return {
    char:state.characters,
    heroes:state.heroes
  }
}
// To make updates in store -- we make dispatch
// dispatchToState 

// const mapDispatchToProps=(dispatch)=>{
//   return bindActionCreators({addCharacterById}, dispatch)
// }

//we want to bind action creators to our dispatch , redux provides a bind method to do that, bindActionCreator takes to Argiments (i)_ActionCreator (ii)_dispatch
// to bind an action creator we need to import thatactioncreator inside this component
export default connect(mapStateToProps, {addCharacterById,removeCharacterById})(CharacterList)
// this is the easy way of passing actionCreator to the Parent React Component 