import React, { Component } from 'react'
import CharacterList from "./CharacterList"
import Squadstats from "./SquadStats"
export default class App extends Component {
  render() {
    return (
      <div>
        <h2>SuperSquad</h2>
        <CharacterList/>
        <Squadstats/>
      </div>
    )
  }
}

