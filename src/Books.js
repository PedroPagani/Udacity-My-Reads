import React from 'react'
import { update } from './BooksAPI'



class Books extends React.Component {

    change = async (e) => {
            const shelf = e.target.value;
            const book = this.props.teste;
            await update(book, shelf);
            this.props.updateShelfs();
    }

    render() {
        return (
            <li>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, 
                        backgroundImage: `url(${this.props.teste.imageLinks ? this.props.teste.imageLinks.thumbnail : ""})` }}></div>
                    <div className="book-shelf-changer">
                      <select onChange={this.change} value={this.props.teste.shelf}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{this.props.teste.title}</div>
                  <div className="book-authors">{this.props.teste.authors}</div>
                  <div>{this.props.teste.language}</div>
                </div>
            </li>
                      
        )
        
    } 
}

export default Books