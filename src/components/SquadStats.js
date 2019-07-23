import {connect} from "react-redux"
import React, { Component } from 'react'

class SquadStats extends Component {
  strength=()=>{
    let strength=0;
    this.props.heroes.forEach(hero=>strength=strength+hero.strength)
    return strength
  }
  intelligence=()=>{
    let intelligence=0
    this.props.heroes.forEach(hero=>intelligence+=hero.intelligence)
    return intelligence
  }
  speed=()=>{
    let speed=0
    this.props.heroes.forEach(hero=>speed+=hero.speed)
    return speed
  }
  render() {
    return (
      <div>
        <h4>SquadStats</h4>
        <ul>
          <li>Overal Strength :{this.strength()}</li>
          <li>Overal intelligence :{this.intelligence()}</li>
          <li>Overal speed :{this.speed()}</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  console.log("state in squadstats",state.heroes)
  return{
    heroes: state.heroes
  }
}

export default connect(mapStateToProps,null)(SquadStats)