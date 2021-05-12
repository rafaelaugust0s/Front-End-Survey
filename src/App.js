import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import MySurvey from './components/views/surveyOne'
import Header from './components/common/Header'
import Footer from "./components/common/Footer"
import myForm from './components/views/myForm'

function App() {
  return (
      <div class= "container">
          <div class= 'row'>
              <div class= "col-12">
                  <Header/>
              </div>
              <BrowserRouter>
                  <Switch>
                      <Route path="/" >
                   <MySurvey/>
                      </Route>
                      <Route path="/myForm" >
                        <myForm/>
                      </Route>
                  </Switch>
              </BrowserRouter>
              <div path ="/myForm">
                  <myForm/>
              </div>
              <div className="col-12">
                  <Footer/>
              </div>
          </div>
      </div>

  );
}

export default App;
