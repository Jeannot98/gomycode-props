import React from 'react'
import { players } from './Players'
import Player from './Player'

const PlayerList = () => {
  return (
    <>
        {
            players.map(player=> (
                <div key={player.id} style={{marginBottom:10}}>
                    <Player name={player.name} team={player.nationality} jerseyNumber={player.jerseyNumber} age={player.age} img={player.profileImage} background={player.background} border={player.border}/>
                </div>
            ))
        }
    </>
  )
}

export default PlayerList