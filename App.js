import React,{Component} from "react";



class App extends Component{
  render(){
    const navbar=(
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">Web Scraper</a>
        </nav>
    );
    return(
      <div className="App">
        {navbar}
        <scraper></scraper>
        </div>

    );
  }
}



  export default App;