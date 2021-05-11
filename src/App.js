import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import MySurvey from './components/views/surveyOne'
import Header from './components/common/Header'
import Footer from "./components/common/Footer"

function App() {
  return (
      <div class= "container">
          <div class= 'row'>
              <div class= "col-12">
                  <Header/>
              </div>
              <BrowserRouter>
                  <Switch>
                      <Route path="/">
                   <MySurvey/>
                      </Route>
                  </Switch>
              </BrowserRouter>
              {/*<div className="App" class= "col-12">*/}
              {/*    <MySurvey/>*/}
              {/*</div>*/}
              <div className="col-12">
                  <Footer/>
              </div>
          </div>
      </div>

  );
}

export default App;
