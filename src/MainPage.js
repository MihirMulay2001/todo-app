import React, {Component} from 'react'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import SignupPage from './SignupPage'
import TodoPage from './TodoPage'

class MainPage extends Component{
  constructor(){
    super()
    this.state = {
        userName: '',
        userEmail: '',
        phnum: '',
        password : ''
    }
    this.handleChange= this.handleChange.bind(this)
  }
  handleChange(props){
      this.setState({
        userName: props.userName,
        userEmail: props.userEmail,
        phnum: props.phnum,
        password : props.password

      })
  }
  render(){
    let { userName, userEmail, phnum, password} = this.state
    return(
        <div className="container">
            <Router>
                <Switch>
                <Route exact path='/'>
                    <div className="row justify-content-center">
                        <div className=" col-lg-5 col-12" id="signup-page">
                            <SignupPage props={{ userName, userEmail, phnum, password}} func={this.handleChange} />
                        </div>
                    </div>
                    
                </Route>
                <Route path='/todolist'>
                    <div className="col-12 col-lg-12" id="todo-page">
                        <TodoPage props={{ userName, userEmail, phnum, password}}/>
                    </div>
                </Route> 
                </Switch>
            </Router>
        </div>
    )
  }
  
}

export default MainPage;
