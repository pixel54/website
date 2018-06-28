import React, { Component } from 'react';
import $ from 'jquery/dist/jquery';

const green = { color: '#fff', textAlign: 'left' }
const PullLeft = { textAlign: 'left' }

class GithubVersion extends Component {
    constructor(props) {
        super()
        this.state = {
            github: []
        }
    }

    componentDidMount() {
        this.GetData();

    }

    GetData() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://github.com/pixel54/pixel54.github.io/commits/master.atom"; // site that doesn’t send Access-Control-*
        fetch(proxyurl + url)
            .then(data => data.text())
            .then((data) => {
                let str = data
                let xmlDoc = $.parseXML(str)
                let $xml = $(xmlDoc)
                let $title = $xml.find("id")
                console.log($title[1])
                this.setState({ github: [...$title] })

            })
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

    }


    render() {
        return (
            <div style={PullLeft}>
                <div id="gitcommit"></div>
            </div>
        )
    }

}

export default GithubVersion; 