

function ListGroup() {
    const items = [
        'New York',
        'San Francisco',
        'Tokyo',
        "London",
        'Paris'
    ]

    return (
    <>
        <h1>List</h1>
        <ul className="list-group">
            {items.map(items => 
            <li>{items}</li>
            )}
        </ul>
    </>
    )
}

export default ListGroup