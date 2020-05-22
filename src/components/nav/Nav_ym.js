import React, {Component} from "react";
import './Nav_ym.scss';
import logo from '../../images/ym/logo_text.png'
import explore from '../../images/ym/explore.png'
import heart from '../../images/ym/heart.png'
import profile from '../../images/ym/profile.png'

class Nav_ym extends Component {
    constructor(){
        super()
    }

    render() {
        return (
        <nav>
          <div className="navWrap">
            <div className ="navLeft">
              <img className= "logo" src={logo} alt="인스타그램로고" />
            </div>
            <div className ="navCenter">
              <input className="search" type="text" placeholder="검색" />
            </div>
            <div className ="navRight">
              <div className="iconCollection">
                <img className= "explore" src={explore} alt="둘러보기" />
                <img className= "heart" src={heart} alt="좋아요" />
                <img className="profileImg" src={profile} alt="프로필사진" />
              </div>
            </div>
          </div>
        </nav>
        )
    }
}

export default Nav_ym;