import React, { Component } from "react";
import logo from '../../images/ym/logo_text.png'
import "./Login_ym.scss"


class Login_ym extends Component {
    constructor() {
        super()
        this.state = {
          name: "",
          password: "",
          backColor: ""
        }
    }

    consoleID = (event) => {
      this.setState({
        name: event.target.value
      }//, () => console.log(this.state)
      )
    }

    consolePW =(event) => {
      this.setState({
        password: event.target.value
      })
    }

    
    colorChange =() => {
      if(this.state.name.length >= 5 && this.state.password.length >= 5){
      this.setState({
        backColor: 'blue'
      })
        
      }
    }
/*
    showValue =() => {
      console.log("id : ",this.state.name, "pw : ", this.state.password)
      this.props.history.push('/main') 
    }
*/
    login =() => {
     
      fetch('http://10.58.4.59:8000/user/login/', {
        method: "POST",
        headers: {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify({
          name: this.state.name,
          password: this.state.password
        })
      })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        
        if(response.token){
          localStorage.setItem('token', response.token);
          this.props.history.push('/main');
        }else if(response.message === 'INVALID_USERNAME'){
          alert (response.message)
        }else if (response.message === 'INVALID_PASSWORD'){
          alert (response.message)
        }
        
        /*
        else if(!response.token){
          alert ('아이디 또는 비밀번호를 확인해주세요.');
        }*/
      })
           
    }

    goSignup =() => {
      this.props.history.push('/signup')
    }

    render(){
        return(
        <div className="login-wrapper">
          <div className="login-box">
            <div className = "box1">
              <div className = "box1_logo">
                <img className = 'instaLogo' src={logo} alt="인스타그램로고" />
              </div>
              <div className="box1_form">
                <div className="input">
               
                    <input className = "id" type="text" placeholder= "전화번호, 사용자 이름 또는 이메일"
                    onChange={this.consoleID} />
                    <input className= "password" type="password" placeholder="비밀번호"
                    onChange={this.consolePW} />
                
                    <button className= {this.state.name.length > 5 && this.state.password.length > 5 ? "button active" : "button inactive"}  type ='button'
                  // style={{backgroundColor: this.state.backColor}}
                  // style={{backgroundColor: this.state.id > 5 && this.state.pw > 5 ? "blue" : "red"}}
                  onClick={this.login}>로그인</button>
                </div>
                <div className="or">
                  <div><hr/></div>
                  <div>또는</div>
                  <div><hr/></div>
                </div>
                <button className="facebook" type="text">facebook으로 로그인</button>
                <div className="forpass">비밀번호를 잊으셨나요?</div>
              </div>
            </div>
            <div className= "box2">
              <div className="join"> 계정이 없으신가요? <span onClick={this.goSignup}>가입하기</span></div>
            </div>
          </div>
        </div>
        )
    }
};

export default Login_ym;