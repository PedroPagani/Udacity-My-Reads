import React from 'react'
import { Link } from 'react-router-dom'
import { search } from './BooksAPI'
import Books from './Books'
//import { updateShelfs } from './Home'


class Search extends React.Component {

    state = {
        query: "",
        books: [],
        
    
    }

    // Esta função é chamada no onChange da tag <input>
    searchBook = async (e) => {
  
        const query = e.target.value;
        this.setState({query});

        //.trim() remove os espaços em branco de uma string
        if(query.trim()) {
            const results = await search(query);
            this.setState({books: results})
            // Aqui verifica se a busca returnou algum erro
            if (results.error) {
                this.setState({books: []})
            } else {
                this.setState({books: results})
            }
        } else {
            this.setState({books: [] })
        }

        

    }




    render() {
      return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/">
                    <button className="close-search" >Close</button>
                </Link>
                <div className="search-books-input-wrapper">        
                    <input type="text" placeholder="Search by title or author" onChange={this.searchBook} value={this.state.query}/>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.state.books.length > 0 &&
                    this.state.books.map((b) => {
                        const found = this.props.booksInShelfs.find((s) => s.id === b.id)
                        
                        // found.shelf só funciona quando esta dentro do if(found), fora do if, ele emite um erro de que shelf não esta definido
                        if (found) {    
                            b.shelf = found.shelf;
                        } else {
                            b.shelf = "none";
                        }
                        
                        return <Books 
                            key={b.id} 
                            teste={b}
                            updateShelfs={this.props.updateShelfs}
                            
                        />
                    })}
                </ol>
            </div>
        </div>
      )
    }
  }
  
  export default Search