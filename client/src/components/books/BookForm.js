// FIRST SIMPLE ADD
import React from 'react';
import './AddBook.css';
import { Field, reduxForm } from 'redux-form';


class BookForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="form-error">
                    <h2 className="error__header">{error}</h2>
                </div>
            );
        }
    }


    renderInput = ({ input, label, meta }) => {
        return (
        <div className="form__line">
            <div className="field form__item">
                <label className="form__label">{label}</label>
                <input className="form__input" {...input} autoComplete="off" />
            </div>
                <div>{this.renderError(meta)}
            </div>
        </div>
        );
    }

    renderRatio = ({ input, label, meta }) => {
        return (
        <div className="form__line">
            <div className="form__item">
                <label className="form__label">{label}</label>
                <select {...input} className="form__select">
                    <option></option>
                    <option value="action">Action and Adventure</option>
                    <option value="alternate">Alternate History</option>
                    <option value="childrensliterature">Children literature</option>
                    <option value="comic">Comic book</option>
                    <option value="crime">Crime</option>
                    <option value="drama">Drama</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="novel">Novel</option>
                    <option value="historicalfiction">History ficition</option>
                    <option value="horror">Horror</option>
                    <option value="mystery">Mystery</option>
                    <option value="romance">Romance</option>
                    <option value="pictures">Picture book</option>
                    <option value="poetry">Poetry</option>
                    <option value="politicalthriller">Political thriller</option>
                    <option value="satire">Satire</option>
                    <option value="scifi">Science Fiction</option>
                    <option value="short">Short story</option>
                    <option value="thriller">Thriller</option>
                    <option value="art">Art</option>
                    <option value="biography">Biography</option>
                    <option value="religion">Religion/Spirituality</option>
                    <option value="encyclopedia">Encyclopedia</option>
                    <option value="guide">Guide</option>
                    <option value="history">History</option>
                </select>
                </div>
                <div className="form__error">{this.renderError(meta)}
            </div>
            </div>
        );
    }

    renderShelf = ({ input, label, meta }) => {
        return (
            <div className="form__line">
            <div className="form__item">
            <label className="form__label">{label}</label>
                <select {...input}  className="form__input" autoComplete="off">
                    <option></option>
                    <option value="read">Books that you read</option>
                    <option value="reading">Books currently read</option>
                    <option value="toread">Books that you want to read</option>
                </select>
            </div>
                <div className="form__error">{this.renderError(meta)}</div>
            
            </div>
        );
    }

    // Przesyłanie do action creatora
    onSubmit = (formValues) => { 
            this.props.onSubmit(formValues)
    }

    render() {
        return (
            <div className="form-container">
                <form className="form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field className="form__item" name="title" component={this.renderInput} label="Enter title"/>
                    <Field className="form__item" name="author" component={this.renderInput} label="Enter author"/>
                    <Field className="form__item" name="bookType" component={this.renderRatio} label="Select type"/>
                    <Field className="form__item" name="bookShelf" component={this.renderShelf} label="Shelf to store" />
                    <button className="form__button">Submit</button>
                </form>
            </div>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    
    if(!formValues.title) {
        // Zadziała gdy uzytkownik nie wpisze tytułu ksiąki
         errors.title = 'You must enter title';
    }
    if(!formValues.author) {
        //Zadziała gdy uzytkownik nie wpisze autora
        errors.author = 'You must enter author';
    }

    if(!formValues.bookType  || formValues.bookType == null) {
        errors.bookType = 'Please select type of book';
    }

    if(!formValues.bookShelf  || formValues.bookShelf == null) {
        errors.bookShelf = 'Please select shelf to store';
    }

    return errors;
}

export default  reduxForm({
    form: 'bookForm',
    validate: validate
})(BookForm);

