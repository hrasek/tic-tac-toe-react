import { useState } from 'react';

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick(isEditing) {
        setIsEditing(!isEditing)
    }

    let playerName = <span className="player-name">{name}</span>;
    if (isEditing){
        playerName = <input type="text" required></input>;    
    }
    return (
        <li>
            <span>
                {playerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => handleEditClick(isEditing)}>{isEditing? 'Save' : 'Edit' }</button>
        </li>
    )
}