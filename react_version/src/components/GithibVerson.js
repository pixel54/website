import React, { Component } from 'react';
import $ from 'jquery/dist/jquery';

const green = { color:'#fff', textAlign:'left' } 
const PullLeft = {textAlign:'left' }

class GithubVersion extends Component {
    constructor(props) {
       super()
       this.state = {
           github : ''
       }
       this.GetData();

    }

    GetData(){
        fetch('https://github.com/pixel54/pixel54.github.io/commits/master.atom')
        .then(data => data.text())
        .then(data => this.setState({ github:data}))
    }
 
    



    render() {
       let m = this.state.github
        console.log($.parseXML(m))
        return(
            <div style={PullLeft}>
                <span style={green}>{this.m}</span>
            </div>    
        )
    }

}

export default GithubVersion; 