import React from 'react'
import Books from './Books'



class Shelfs extends React.Component {

    render() {
        
        return (
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">{this.props.title}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.props.books.map((b) => (
                                    <Books teste={b} key={b.id}  handleChange={this.props.handleChange}/>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div> 
            </div> 
                      
        )
        
    } 
}

export default Shelfs