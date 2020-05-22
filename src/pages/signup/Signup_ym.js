import React, { Component } from "react";
import logo from "../../images/ym/logo_text.png"
import "./Signup_ym.scss"


class Signup_ym extends Component {
    constructor() {
        super()
        this.state = {
          email: "",
          password: "",
          name: "",
          userName: "",
          backColor: ""
        }
    }
    
    emailSet = (event) => {
      if(event.target.value.includes('@')){
      this.setState({
        email: event.target.value
      })
    } 
    }

    passwordSet = (event) => {
      this.setState({
        password: event.target.value
      })
    }

    nameSet =(event) => {
      this.setState({
        name: event.target.value
      })
    }

    userNameSet =(event) => {
      this.setState({
        userName: event.target.value
      })
    }

    handleSubmit = () => {
      if(this.state.email.length < 5 || this.state.name.length < 5 || this.state.password.length < 5 ){
        alert ('잘못된 형식입니다. 5글자 이상으로 작성해주세요')
      }
      fetch('http://10.58.4.59:8000/user/', {
        method: "POST",
        headers: {
          'Content-type' : 'application/json'
        },

        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
          name: this.state.name
        })
      })
      .then(response => response.json())
      .then(response => {
        console.log(response);

        // response에 따른 결과 (alert)
        if (response.message === "SUCCESS"){
          alert (response.message)
          this.props.history.push('/');
        } else if (response.message === 'Already registered username'){
          alert (response.message)
        } else if (response.message === 'Already registered email'){
          alert (response.message)
        }
      })

    }

    render(){
      console.log(this.state
        )
        return(
        <div className="login-wrapper">
          <div className="login-box">
            <div className = "box1">
              <div className = "box1_logo">
                <img className = 'instaLogo' src={logo} alt="인스타그램로고" />
              </div>
              <div className="box1_form">
                <div className="invitation">친구들의 사진과 동영상을 보려면<br/>가입하세요.</div>
                <button className="facebookbutt"  type ='button'
                  onClick={this.showValue}>
                  Facebook으로 로그인</button>
                <div className="or">
                  <div><hr/></div>
                  <div>또는</div>
                  <div><hr/></div>
                </div>
                <div className="input">
                    <input className = "email" type="text" placeholder= "휴대폰 번호 또는 이메일 주소"
                    onChange={this.emailSet} />
                    <input className= "name" type="text" placeholder="성명"
                    onChange={this.nameSet} />
                     <input className= "userName" type="text" placeholder="사용자 이름"
                    onChange={this.userNameSet} />
                     <input className= "password" type="password" placeholder="비밀번호"
                    onChange={this.passwordSet} />
                    <button className= {this.state.email.length >= 5 && this.state.name.length >= 5 && this.state.password.length >= 5 ? "button active" : "button inactive"}
                    type ='button' onClick={this.handleSubmit}>가입</button>
                </div>
                <div className="forpass">가입하면 Instagram의 <strong>약관, 데이터 정책</strong> 및 <strong>쿠키</strong><br /><strong>정책</strong>에 동의하게 됩니다.</div>
              </div>
            </div>
            <div className= "box2">
              <div className="join"> 계정이 있으신가요? 
                <span className='box2Join'>로그인</span>
              </div>
            </div>
          </div>
        </div>
        )
    }
};

export default Signup_ym;