import './App.css';
import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';


class App extends Component{
  render(){
    return(
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML은 하이퍼텍스트 마크업 랭귀지이다."></Content>
      </div>
    );
  }
}

export default App;
