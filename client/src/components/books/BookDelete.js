import React from 'react';
import DeleteModal from '../DeleteModal';
import { connect } from 'react-redux';
import history from '../../history';
import { fetchBook, deleteBook } from '../../actions';

class DeleteBook extends React.Component {
    componentDidMount() {
        this.props.fetchBook(this.props.match.params.id);
    }

    renderActions() {
        const id = this.props.match.params.id;
        return (
            <div className="buttons">
                <button onClick={() => this.props.deleteBook(id)} className="buttons buttons__delete">Delete</button>
                <button onClick={() => history.push('/')} className="buttons buttons__cancel">Cancel</button>
            </div>
        );
    }

    renderContent() {
        if(!this.props.book) {
            return 'Are you sure you want to delete this book?'
        }

        return `Are you sure you want to delete the book with title: ${this.props.book.title}?`;
    }

    render() {
        if(!this.props.book) {
            return <div>Loading</div>
        };

        return ( 
            <div>
                <DeleteModal
                    content={this.renderContent()}
                    actions={this.renderActions()}
                />
            </div>
        );
    }   
};

const mapStateToProps = (state, ownProps) => {
    return { book: state.books[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchBook, deleteBook })(DeleteBook);