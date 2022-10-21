import React, { Component } from 'react';
import Search from './Components/Search';
import Result from './Components/Result'

class App extends Component {
 
  state = {
    data : '',    
    image : [],
    page : ''
  }

  scroll = () =>{
    const element = document.querySelector('.jumbotron');
    element.scrollIntoView('smooth', 'end');
  }

  previousp = () => {
    //leer el state de la pagina actual
    let page = this.state.page;
    //si es uno saltar
    if(page === 1) return null
    //resta uno a la pagina actual
    page-=1;
    //agregar el cambio al state
    this.setState({
      page
    }, () =>{
      this.consultApi();
      this.scroll();
    });    
  }

  nextp = () => {
     //leer el state de la pagina actual
     let page = this.state.page;
     //sumar uno a la pagina actual
     page+=1;
     //agregar el cambio al state
     this.setState({
       page
    }, () =>{
      this.consultApi();
      this.scroll();
    });    
  }
  
  consultApi = () =>{
   const page= this.state.page;
   const data =  this.state.data;
   const url = 'https://pixabay.com/api/?'+ new URLSearchParams({
     key:'19152404-b78c20d6e13f8b6fdb0b737ae',
     q:data ,
     per_page:12,
     page:page});
   
      
   fetch(url)
    .then(ans => ans.json() )
    .then(result => this.setState({image : result.hits}) ) 
   
  }

  datasearch = (data) => {
    this.setState({
      data : data,
      page : 1
    }, () => {
      this.consultApi();
    })
  }

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Image search engine</p>
          <Search 
           datasearch={this.datasearch}           
          />
        </div>
        <div className="row justify-content-center">
          <Result
           image={this.state.image}
           previousp={this.previousp}
           nextp={this.nextp}
          />
        </div>
      </div>
    );  
  }
}

export default App;
