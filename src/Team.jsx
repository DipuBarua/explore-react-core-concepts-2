import { useState } from "react"

export default
    function Team() {
    const teamStyle = {
        border: '2px solid purple',
        borderRadius: '5px',
        background: 'pink',
        margin: '10px',
    }
    const [team, setTeam] = useState(11);
    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    const handleRemove = () => {
        const newTeam = team - 1;
        setTeam(newTeam);
    }

    return (
        <div style={teamStyle}>
            <h2>Players:{team}</h2>
            <button style={{ background: 'blue', color: 'white', margin: '5px' }} onClick={handleAdd}>Add</button>
            <button style={{ background: 'blue', color: 'white', margin: '5px' }} onClick={handleRemove}>Remove</button>
        </div>
    )
}