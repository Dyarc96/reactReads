import React from 'react';
import './BookStyle.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBooks } from '../../actions';

class BooksRead extends React.Component {
    componentDidMount() {
        this.props.fetchBooks();
    }

    renderList() {
        return this.props.books
        .filter(book => book.bookShelf === 'read')
        .filter(book => book.userId === this.props.currentUserId)
        .map(book => {
                return (
                    <div className="book" key={book.id}>
                    <div className="content">
                        <h2 className="heading-primary">{book.title}</h2>
                        <div className="description">
                            {book.author}<br></br>
                            {book.bookType}
                        </div>
                        
                    </div>
                    <div className="buttons">
                        <Link to={`/edit/${book.bookShelf}/${book.id}`} className="buttons buttons__edit">
                            Edit
                        </Link>
                        <Link to={`/deleteBook/${book.id}`} className="buttons buttons__delete">
                            Delete
                        </Link>
                        </div>
                    </div>
                );
            });
        };
    
    render() {
        return (
            <div className="section-container">
            <h2 className="heading-secondary">Read books</h2>
            <div>{this.renderList()}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { 
        books: Object.values(state.books),
        currentUserId: state.auth.userId 
    };
};

export default connect(mapStateToProps, { fetchBooks })(BooksRead);