import React from 'react'
import Books from './Books'



class Shelfs extends React.Component {

    render() {
        console.log(this.props.books)
        return (
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">{this.props.title}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.props.books.map((b) => (
                                    <Books 
                                        teste={b} 
                                        key={b.id}  
                                        updateShelfs={this.props.updateShelfs} 
                                        optionsValue={this.props.optionsValue}/>
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