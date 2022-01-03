import { Component } from "react";
import axios from'axios';

export class UrlForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.urlToState = this.urlToState.bind(this);
  }

  urlToState() {
    console.log("Succesfully called!");
  }



  render() {
    return (

      <form className="Url-form" onSubmit={this.urlToState}>
        <label className="Url-form">YouTube Video URL: 
          <input type="text" id="linkInput" className="Url-form" />
        </label>
        <input type="submit" value="Check URL" />
      </form>
        
    );
  }
}
