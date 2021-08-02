import "./App.css";
import Dropdown from "./HTML/body/Dropdown";
import Footer from "./HTML/footer/Footer";
import Header from "./HTML/header/Header";


function App() {
  return (
      <>
        <head>
          <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0"/> 
          <title>Website Paice</title>
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
