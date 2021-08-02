import "./App.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Dropdown from "./body/Dropdown";

function App() {
  return (
      <>
        <head>
          <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0"/> 
        </head> 
        <Header/>
        <div class='container'>
          <Dropdown/>
        </div>
        <Footer/>
      </>
  );
}

export default App;
