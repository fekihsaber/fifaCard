// Player.jsx
import React from 'react';
import './player.css';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    return (
        <div className="player">
            <img src={imageUrl} alt={name} />
            <div className="player-info">
                <h3>{name}</h3>
                <p>Team: {team}</p>
                <p>Nationality: {nationality}</p>
                <p>Jersey Number: {jerseyNumber}</p>
                <p>Age: {age}</p>
            </div>
        </div>
    );
};

export default Player;
