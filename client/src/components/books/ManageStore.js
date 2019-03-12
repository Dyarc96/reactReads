// FIRST SIMPLE ADD
import React from 'react';
import { addBook } from '../../actions';
import { connect } from 'react-redux';
import BookForm from './BookForm';
import './BookStyle.css';

class ManageStore extends React.Component {
    formSubmit = formValues => { 
        this.props.addBook(formValues);
    }

    render() {
        return (
            <div className="manage-store">
                <BookForm onSubmit={this.formSubmit} />
            </div>
        );
    }
}

export default connect(null, { addBook })(ManageStore);