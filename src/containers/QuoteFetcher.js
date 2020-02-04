import React, { Component } from 'react';
import { fetchQuote } from '../services/quoteAPI';
import Quote from '../components/Quote';
import Button from '../commons/Button';



export default class QuoteFetcher extends Component {
  state = {
    quote: { text: '', name: '', img: '' }
  }

  fetch = () => {
    return fetchQuote()
      .then (quote => this.setState({ quote }));
  }

  componentDidMount() {
    // this.fetch();
  }



  render() {
    const { quote } = this.state;

    return (
      <>
        <Button text="Get a new one" onClick={this.fetch} />
        <Quote {...quote} />
      </>
    );
  }
}
