import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";

import Queries from './Queries'

const client = new ApolloClient({
  link: createHttpLink({ uri: "https://localhost:4000" }),
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ApolloProvider client={client}>
            <h1>React + Apollo Hooks</h1>
            <Queries />
          </ApolloProvider>
        </header>
      </div>
    );
  }
}

export default App;
