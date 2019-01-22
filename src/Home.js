import React from 'react'
import { Link } from 'react-router-dom'
import { getAll } from './BooksAPI'
import Shelfs from './Shelfs';



class Home extends React.Component {

    state = {
        books: [],
        currentlyReading:  [],
        wantToRead: [],
        read: []
    }

    async componentDidMount()  {
        const allBooks = await getAll();
        const currentlyReading = allBooks.filter((cR) => cR.shelf === "currentlyReading");
        const wantToRead = allBooks.filter((wR) => wR.shelf === "wantToRead");
        const read = allBooks.filter((R) => R.shelf === "read");
        this.setState({allBooks,currentlyReading,wantToRead,read})
    }

    updateShelfs = async () => {
        const allBooks = await getAll();
        const currentlyReading = allBooks.filter((cR) => cR.shelf === "currentlyReading");
        const wantToRead = allBooks.filter((wR) => wR.shelf === "wantToRead");
        const read = allBooks.filter((R) => R.shelf === "read");
        this.setState({allBooks,currentlyReading,wantToRead,read})
        
    }

    

    render() {
        console.log(this.state.read);
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Readings</h1>
                </div>
                <Shelfs title="Currently Reading" books={this.state.currentlyReading} handleChange={this.updateShelfs}/>
                <Shelfs title="Want to Read" books={this.state.wantToRead} handleChange={this.updateShelfs}/>
                <Shelfs title="Read" books={this.state.read} handleChange={this.updateShelfs}/>
                <Link to="/search" className="open-search">
                    <button>Add a book</button>
                </Link>
            </div>
                   
        )
        
    } 
}

export default Home