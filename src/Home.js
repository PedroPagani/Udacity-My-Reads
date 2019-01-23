import React from 'react'
import { Link } from 'react-router-dom'
import { getAll } from './BooksAPI'
import Shelfs from './Shelfs';




const Home = (props) => (
    <div className="list-books">
        <div className="list-books-title">
            <h1>My Readings</h1>
        </div>
        <Shelfs title="Currently Reading" books={props.stateCurrentlyReading} updateShelfs={props.updateShelfs} optionsValue={props.optionsValue}/>
        <Shelfs title="Want to Read" books={props.stateWantToRead} updateShelfs={props.updateShelfs} optionsValue={props.optionsValue}/>
        <Shelfs title="Read" books={props.stateRead} updateShelfs={props.updateShelfs} optionsValue={props.optionsValue}/>
        <Link to="/search" className="open-search">
            <button>Add a book</button>
        </Link>
    </div>

)

export default Home