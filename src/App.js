import './App.css';
import { Component } from 'react';

class Subject extends Component{
  render(){
    return(
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}
class TOC extends Component{
  render(){
    return(
      <nav>
        <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}
class Content extends Component{
  render(){
    return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}
class App extends Component{
  render(){
    return(
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML은 하이퍼텍스트 마크업 랭귀지이다."></Content>
      </div>
    );
  }
}

export default App;
