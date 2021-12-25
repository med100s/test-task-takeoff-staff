import React, { useState } from 'react';


const Login = () => <div><Form directory="register" method="POST"/><Form directory="login" method="POST"/></div>;



class Form extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {value: '', value2:''};
      this.handleChange = this.handleChange.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleChange2(event) {
        this.setState({value2: event.target.value});
      }
    handleSubmit(event) {
      alert('Отправленное имя: ' + this.state.value + ' ' + this.state.value2);var url = "https://reqbin.com/echo/post/json";

      var url = `http://localhost:3000/${this.props.directory}`;

      var xhr = new XMLHttpRequest();
      xhr.open("POST", url);
      
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader("Content-Type", "application/json");
      
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
          localStorage.setItem('logInData', xhr.responseText);
        }};
      
      var data = `{
        "email": "${this.state.value}",
        "password": "${this.state.value2}"
      }`
      xhr.send(data);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Имя:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Имя:
            <input type="text" value={this.state.value2} onChange={this.handleChange2} />
          </label>
          <input type="submit" value="Отправить" />
        </form>
      );
    }
  }
  
export default Login;
