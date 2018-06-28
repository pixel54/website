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
    //    this.GetData();

    }

    GetData(){
        fetch('https://github.com/pixel54/pixel54.github.io/commits/master.atom')
        .then(data => data.text())
        .then((data) => {
            let str = data
            let xmlDoc = $.parseXML(str)
            let $xml = $(xmlDoc)
            let $title = $xml.find("id")
            this.setState({ github: $title[1]})
        })

    }
 
    



    render() {
        // console.log(this.state.github)
        return(
            <div style={PullLeft}>
<<<<<<< Updated upstream
                {/* <p style={green}>{this.state.github}</p> */}
=======
                <p style={green}>{this.state}</p>
>>>>>>> Stashed changes
            </div>    
        )
    }

}

export default GithubVersion; 