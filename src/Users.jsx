import { useEffect, useState } from "react"

// Hooks: UseEffect().
export default
    function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div style={{ border: '2px solid purple', borderRadius: '5px' }}>
            <h2>users data loading...</h2>
            <h3>users:{users.length}</h3>
            <h3>Name:{users[0]?.name}</h3>
            <h3>Name:{users[1]?.name}</h3>
            <h3>Name:{users[2]?.name}</h3>
            <h3>Name:{users[3]?.name}</h3>
        </div>
    )
}