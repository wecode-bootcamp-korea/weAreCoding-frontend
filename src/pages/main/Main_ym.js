import React, { Component } from "react";
import './Main_ym.scss';
import Nav from '../../components/nav/Nav_ym';
import Feeds from './feeds/Feeds_ym';
import MainRight from './main_right/MainRight_ym';

class Main_ym extends Component {
    constructor() {
        super()
    }

    render() {
        return(
        <div className = "wrap">
          <Nav />
          <div className = "unite">
            <div><Feeds /></div>  
            <div className="right"><MainRight /></div>
          </div>
        </div>
        )
    }
};

export default Main_ym;