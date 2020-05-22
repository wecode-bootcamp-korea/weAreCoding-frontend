import React, { Component } from "react";
import './MainRight_ym.scss';

class MainRight_ym extends Component {
    constructor() {
        super()
    }

    render() {
        return (
        <main>
          <div className='mainWrap'>
            <div className='main-right'>
                <div className='account-right'>
                  <img className ='wecodeAccount' src='data:image/png;base64,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' alt='위코드' />
                  <div className='accountName'>
                    wecode_bootcamp <span className='accountKor'>WeCode | 위코드</span>
                  </div>
                </div>
                <div className='story'>
                  <div className='storyNav'>
                    <div>스토리</div>
                    <div className='viewAll'>모두보기</div>
                  </div>
                  <div className='storyAcc'>
                    <img className='storyImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSC26U6ZYL4Sc7BTtB8Zrn04jb5bTovweXccPbBq5_7Jsk7LPxN&usqp=CAU' alt='최익현' />
                    <div className='storyName'>
                      gyeongjuChoi35<span className='storyTime'>14시간전</span>
                    </div>
                  </div>
                  <div className='storyAcc'>
                    <img className='storyImg' src='https://i.imgur.com/592spcZ.jpg' alt='정청' />
                    <div className='storyName'>
                      ComeOnInComeOnIn<span className='storyTime'>19시간전</span>
                    </div>
                  </div>
                  <div className='storyAcc'>
                    <img className='storyImg' src='https://t1.daumcdn.net/cfile/tistory/9953103359D0C59E11' alt='4달러' />
                    <div className='storyName'>
                      fourDollars<span className='storyTime'>4시간전</span>
                    </div>
                  </div>
                  <div className='storyAcc'>
                    <img className='storyImg' src='https://pbs.twimg.com/profile_images/1196339022366306305/aJ8qiZ_e_400x400.jpg' alt='아이언드래곤' />
                    <div className='storyName'>
                      AskandgototheBlue<span className='storyTime'>6시간전</span>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </main>  
      )  
    }  
};  

export default MainRight_ym;