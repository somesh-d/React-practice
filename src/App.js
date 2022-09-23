import React, { Component,Suspense } from "react";
import { render } from "react-dom";
import axios from "axios";
import { get } from "lodash";

import {Card} from "./Card/Card";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      data: {
      }
    };
  }
  componentDidMount() {
     let self = this;
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=pune&appid=3ec8ad6ee1756bfb9fb4388506647115&units=metric',{'Content-Type': 'application/json'})
     .then(function (response) {
       self.setState({data: response.data})
     })
    .catch(function (error) {
       console.log(error);
    });
  }

  render() {
    return <div>{get(this.state.data,"main",false)&&<Card data={get(this.state,"data","")}/>}</div>;
  }
}
export default App;
