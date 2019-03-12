import React from 'react';
import { Router, Route} from 'react-router-dom';
import LandingPage from './books/LandingPage';
import BookDelete from './books/BookDelete';
import BooksRead from './books/BooksRead';
import BooksReading from './books/BooksReading';
import BooksToRead from './books/BooksToRead';
import ManageStore from './books/ManageStore';
import EditBook from './books/EditBook';
import Header from './Header';
import history from '../history';
import './App.css';

const App = () => {
    return (
        <div>
        <div className="bg-container"></div>
            <div className="main-container">
                <Router history={history}>
                <div>
                    <Header/>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/read" exact component={BooksRead} />
                    <Route path="/reading" exact component={BooksReading} />
                    <Route path="/toread" exact component={BooksToRead}/>
                    <Route path="/managestore" exact component={ManageStore} />
                    <Route path="/deletebook/:id" exact component={BookDelete} />
                    <Route path="/edit/:bookshelf/:id" exact component={EditBook} />
                </div>
                </Router>
            </div>
            </div>
    );
}

export default App;