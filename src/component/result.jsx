import React, {Component} from 'react';


class Result extends Component{
    render(){
        return(
          <center>
        <div className="result">
          <p>{this.props.result}</p>
        </div>
        </center>
        );
    }
}
export default Result;