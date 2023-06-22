## Experiment-12
## Aim:
To create a simple calculator built with React.

## Algorithm:
1.Start React project,using "create-react-app projectName".

2.To create the folder,go to the folder using "code .".

3.To start the website using localhost,npm start.

4.Edit the components in the folder,for the project.

5.Edit App.js and enter the HTML code in the return and render.
## Program:
### App.js
```
import React, {
  Component
} from "react";
import Buttons from './buttons';
import Result from './result';
import "./calc.css";
/**this is the main class */
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: "0",
    }
    this.handleclicks = this.handleclicks.bind(this);
  }

  handleclicks = (value) => {
    switch (value) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
      case '+':
      case '-':
      case '/':
      case '*':
        if (this.state.result === "0") {
          this.setState({
            result: value
          });

        } else {
          this.setState({
            result: this.state.result + value
          });
        }
        break;
      case '=':
        //todo add a regex test to see if the statment is correct before passing it to eval
        //todo limit the result  to 14
        console.log(this.state.result);
        this.setState({
          result: eval(this.state.result)
        })
        break;
      case 'c':
        this.setState({
          result: ''
        })
        break;
      case '+/-':
        this.setState({
          result: parseInt(this.state.result, 10) * -1
        });
        break;
      case '%':
        this.setState({
          result: parseFloat(this.state.result, 10) / 100
        });
        break;
      default:
        break;
    }

  }

  render() {
    return ( <
      div className = "myCalculator" >
      <
      Result result = {
        this.state.result
      }
      /> <
      Buttons Buttonclicked = {
        this.handleclicks
      }
      /> <
      /div>
    );
  }
}

export default App;

```
### calc.css
```
#root{
    background: #000;
    color: white;
    font-family: 'Orbitron', sans-serif;
    border-radius: 10px;
}

.myCalculator{
    width: 315px;
}

.buttons{
    display: inline-block;
    margin: 23px 15px;
}

.btn{
    background: #323232;
    color: white;
    padding: 5%;
    border: 0px;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin: 5px;
    font-size: 25px;
    cursor: pointer;
    outline: none;
}
.btn:focus{
    background: white;
    color: #323232;
 }

.btn-calc{
    background: #8ef606;
  
}
.btn-action{
    background: #A6A6A6;
    color: #323232;
}

.btn-0{
    background: #323232;
    color: white;
    border: 0px;
    margin: 5px;
    padding: 5%;
    width: 130px;
    border-radius: 30px;
    height: 60px;
    font-size: 25px;
    cursor: pointer;
    outline: none;
}
.btn-0:focus{
    background: white;
    color: #323232;
}
.result{
    width: 100%;
    height: 62px;
    margin-top: 30px;
    background: #f32703e0;
}   

.result p{
    text-align: right;
    font-size: 26px;
    margin-bottom: 4px;
    padding-top: 14px;
    padding-right: 10px;
}
```
### result.jsx
```
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
```
## Output:
![image](https://github.com/balaji-21005757/Calculator-using-react/assets/94372294/5beece11-e4ab-491f-aeb7-bc5f4f6e27ab)


## Result:
Therefore we have succesfully created a simple calculator built with React.
