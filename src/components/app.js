import React, { Component } from 'react';
import logo from '../../public/images/blog-application-logo.png';
import PostList from './PostList';
import '../styles/index.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        // Get the posts from the service
    }

    render() {
        const { posts } = this.state;

        return (
            <div>
                <nav className="navbar">
                    <div className="navbar-brand">
                        <span className="navbar-item" to="/">
                            <img
                                className="app-navbar-image"
                                src={logo}
                                alt="Blog Application"
                            />
                        </span>
                    </div>
                </nav>

                <div className="app">
                    <PostList
                        posts={posts}
                    />
                </div>
            </div>
        )
    }
}

export default App;
