import './Friend.css'
export default
    function Friend({ friend }) {
    const { id, name, email } = friend;
    return (
        <div className='friendBox'>
            <h3>friend_{id}</h3>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    )
}