import React,{Component} from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';

class Pricebox extends Component{
  constructor(props){
    super(props);
    this.state ={
        ticker:'TSLA',
        date: '2018-02-05',
        price: '',
        newPrice: ''
        }
      document.title = "Price Box";
  }


changeTicker() {
  this.setState({ticker: this.state.newTicker});
}

changeDate() {
  this.setState({date: this.state.newDate});
}

  priceReceive(){
       const BASE_URL = 'http://127.0.0.1:5000/price?';
        let FETCH_URL = `${BASE_URL}ticker=${this.state.ticker}&dt=${this.state.date}`;

      fetch(FETCH_URL,{
        method: 'GET'
      })
      .then(response => response.json())
      .then(json => {
       console.log('Price:', json);
        this.setState({price: json});
  })
}


render(){
      return(

              <div className="Pricebox">
                <div className="App-title">
                          <div>
                              Enter the Ticker:
                                <FormControl
                                  className="Ticker-input"
                                  placeholder='Enter Ticker'
                                  onChange={event => this.setState({newTicker: event.target.value})}
                                />
                                <Button onClick={() => this.changeTicker()}>Hit</Button>
                              </div>
                              <div>
                                Enter the Date:
                                <FormControl
                                  className="Date-input"
                                  placeholder='Enter Date'
                                  onChange={event => this.setState({newDate: event.target.value})}
                                />
                                <Button onClick={() => this.changeDate()}>Hit</Button>

                              </div>
                              <div>
                                <Button onClick={() => this.priceReceive()}>The market price is!</Button>
                              </div>
                                <div>{this.state.ticker}:</div>
                                <div>{this.state.price}</div>

                            </div>

            </div>
            )
        }
}

export default Pricebox;
