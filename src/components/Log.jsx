export default function Log({ turns }){


    const logText = 
        turns.map((turn) => (
            <li key={`${turn.square.row},${turn.square.col}`}>Player {turn.player} selected {turn.square.row},{turn.square.col} square</li>
        ))
   

    return <ol id="log">
            {logText}
         </ol>
}