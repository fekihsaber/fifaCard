import React from 'react';
import Player from './Player';
import playersData from './players';

const PlayersList =() =>{
    return(
        <div className='players-list'>
            {playersData.map((player,index)=>(
                <Player
                key={index}
                name={player.name}
                team={player.team}
                nationality={player.nationality}
                jerseyNumber={player.jerseyNumber}
                age={player.age}
                imageUrl={player.imageUrl}
                 />
              
            ))}
        </div>
    );
};

export default PlayersList;