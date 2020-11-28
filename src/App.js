import React, { Component } from 'react';
import { render } from 'react-dom';
import { DatePicker, message } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      coinData : []
    }
  }
  getCoinData(){
    fetch('http://127.0.0.1:5000/api/market-data')
    .then(response => response.json())
    .then(data =>  this.setState({ coinData : JSON.parse(data).data}));
  }
  componentWillMount(){
    this.getCoinData();
  }
  render(){
    return(
      <ul>
        {this.state.coinData.map(obj =>{
          console.log(obj)
          return(
          <li>{obj.name}</li>
          )
        })}
      </ul>
    )
  }
}

export default App;
