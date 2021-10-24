import './App.css';
import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      subject:{title:"WEB", sub:"world wide web!"}
    }

  }
  render(){
    return(
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML은 하이퍼텍스트 마크업 랭귀지이다."></Content>
      </div>
    );
  }
}

export default App;
