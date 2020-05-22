import React, {Component} from "react";
import './Feeds_ym.scss';
import vanSelfie from '../../../images/ym/van_selfie.jpg'
import vanPainting from '../../../images/ym/van_painting.jpg';
import heart from '../../../images/ym/heart.png';
import Reply from './Reply_ym';


class Feeds_ym extends Component {
    constructor(){
        super()

        
        this.state = {
          replyList : [ ],
          value : "",
        }
    }
    //댓글 보기
    componentDidMount(){
      const token = localStorage.getItem('token')
      console.log(token)
      fetch('http://10.58.4.59:8000/feed/comment/', {
        method: "GET",
        headers: {
          'Content-type' : 'application/json',
          Authorization : token
        }
      })
      .then(response => response.json())
      .then(response => {
        
        let comlist = [];


        response.comments.map((comment)=>{
          comlist.push(comment.content)
        })

        this.setState({
          replyList: comlist
        })
      })
      
    }

    //value 설정
    setValue = (event) => {
      this.setState({
        value : event.target.value
      })
    }

    //댓글 달기
    
    sendReply = (event) => {
      const token = localStorage.getItem('token')
      fetch('http://10.58.4.59:8000/feed/comment/', {
        method: "POST",
        headers: {
          'Content-type' : 'application/json',
          Authorization : token
        },
        body: JSON.stringify({
          content: this.state.value
        })
      })
      .then(response => response.json())
      .then(response => console.log(response))
    }
    
    /*
    pushList = (event) => {
      this.setState({
        replyList: this.state.replyList.concat(this.state.value),
        value: ""
      })
    }
    
    pushListKey = (event) => {
      if(event.key === 'Enter'){
        this.setState({
          replyList: this.state.replyList.concat(this.state.value),
          value: ""
        })
      }
    }
    */

    render() {
      console.log(this.state)
        return (
          <main>
            <div className="mainWrap">
              <div className="feedsWrap">
                  <article className="article">
                      <div className="articleNav">
                          <div>
                            <img className="selfie" src={vanSelfie} alt="반고흐" />
                          </div>
                          <div className="account">Vincent_Van_Gogh_____</div>
                          <img className="threeDots" src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png' alt="세점" />
                      </div>
                      <div className="articleImg">
                        <img className ="feedsImg"src={vanPainting} alt="반고흐그림" />
                      </div>
                      <div className="imgBottom">
                        <div className="articleIcon">
                          <div className="frontIcon">
                            <img className="heart2" src={heart} alt="좋아요버튼" />
                            <img className="speechBubble" src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png' alt="말풍선" />
                            <img className='share' src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png' alt="공유버튼" />
                          </div>
                            <img className='bookmark' src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png' alt='북마크' />
                        </div>
                        <div className='likeNumber'>
                          좋아요 79,401,888개
                        </div>
                        <div className='articleAccount'>
                          <span className="bold">Vincent_Van_Gogh_____</span>
                          <div className='comment'>my work.</div>
                        </div>
                        <div className='articleRe'>
                          <div className='allRe'>댓글모두보기</div>
                          <div className='reply'>
                            <ul className = 'replylist' type='none' >
                              <li><span className="bold">PabloPicasso</span>
                              <span className='comment'>great!</span></li>
                              <Reply replyList={this.state.replyList} />
                            </ul>
                          </div>
                        </div>
                        <div className='articleTime'>
                          1889년
                        </div>
                        <div className='commenting'>
                            <div>
                              <input className='commenting_input' type="text" placeholder="댓글달기..." 
                                onChange={this.setValue} 
                                onKeyPress={this.pushListKey} value={this.state.value} />
                                {/*onChange={this.pushListKey} />*/}
                            </div>
                              <button className='commenting_button' onClick={this.sendReply}>게시</button>
                        </div>
                      </div>
                  </article>
                  <article className='article'>
                    <div className='articleNav'>
                        <div>
                          <img className='selfie' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBSRsOBUoI1NGPjtXPx1hV4KKmA97a_PAwnQB2OJsvsv-t8zGW&usqp=CAU" alt='타노스' />
                        </div>
                        <div className='account'>THANOS</div>
                        <img className='threeDots' src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png' alt='세점' />
                    </div>
                    <div className='articleImg'>
                    <img className="feedsImg" src='https://img.insight.co.kr/static/2019/05/03/700/8jh242p680k4qcoh7xwy.jpg' alt='타노스' />
                    </div>
                    <div className='imgBottom'>
                      <div className='articleIcon'>
                        <div className='frontIcon'>
                          <img className='heart2' src={heart} alt='좋아요버튼' />
                          <img className='speechBubble' src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png' alt='말풍선' />
                          <img className='share' src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png' alt='공유버튼' />
                        </div>
                          <img className='bookmark' src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png' alt='북마크' />
                      </div>
                      <div className='likeNumber'>좋아요 88개</div>
                      <div className='articleAccount'><span className="bold">THANOS</span><div className='comment'>Selfie, I'm inevitable </div><span className="hashtag">#good#guntlet</span></div>
                      <div className='articleRe'>
                        <div className='allRe'>댓글모두보기</div>
                          <div className='reply'>
                            <ul className='replylist' type='none'>
                              <li><span className="bold">tonyStark</span>
                              <span className='comment'>I am Iron Man</span></li>
                              <li><span className="bold">captainUSA</span>
                              <span className='comment'>I can do this all day</span></li>
                            </ul>
                          </div>
                          
                      </div>
                      <div className='articleTime'>
                        2018년 4월 25일
                      </div>
                      <div className='commenting'>
                        <div>
                          <input className='commenting_input' type="text" placeholder="댓글달기..." />
                        </div>
                          <input className='commenting_button' type="button" value='게시' />
                      </div>
                    </div>
                </article>
              </div>
            </div>
        </main>
        )
    }
}

export default Feeds_ym;