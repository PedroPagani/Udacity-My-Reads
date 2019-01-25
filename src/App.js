import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home.js'
import Search from './Search'
import { getAll } from './BooksAPI'
import './App.css'


class BooksApp extends React.Component {

  //Aqui é o STATE onde fica guardado todos os livros e o valor do seletor das estantes
  state = {
    books: [],
    currentlyReading:  [],
    wantToRead: [],
    read: [],
    
}

async componentDidMount()  {
    const allBooks = await getAll();
    const currentlyReading = allBooks.filter((cR) => cR.shelf === "currentlyReading");
    const wantToRead = allBooks.filter((wR) => wR.shelf === "wantToRead");
    const read = allBooks.filter((R) => R.shelf === "read");
    this.setState({books: allBooks,currentlyReading,wantToRead,read})
}
// Esta função é chamada no componente Books, que vai chamar todos os livros atualizados novamente


updateShelfs = async () => {
  const allBooks = await getAll();
  const currentlyReading = allBooks.filter((cR) => cR.shelf === "currentlyReading");
  const wantToRead = allBooks.filter((wR) => wR.shelf === "wantToRead");
  const read = allBooks.filter((R) => R.shelf === "read");
  this.setState({books: allBooks,currentlyReading,wantToRead,read})
  
}


  render() {
    
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <Home
            booksInShelfs={this.state.books}
            stateCurrentlyReading={this.state.currentlyReading}
            stateWantToRead={this.state.wantToRead}
            stateRead={this.state.read}
            updateShelfs={this.updateShelfs}
            />
        )}/>
        <Route exact path="/search" render={() => (
          <Search
            updateShelfs={this.updateShelfs}
            booksInShelfs={this.state.books}
          />
        )}/>
      </div>
    );
  }
}

export default BooksApp