import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import MySurvey from './components/views/surveyOne'
import Header from './components/common/Header'
import Footer from "./components/common/Footer"
import MyForm from './components/views/MyForm'
import Update from './components/views/update'

function App() {
  return (
      <div class= "container">
          <div class= 'row'>
              <div class= "col-12">
                  <Header/>
              </div>
              <BrowserRouter>
                  <Switch>
                      <Route path="/" exact >
                   <MySurvey/>
                      </Route>

                      <Route path="/MyForm" exact>
                        <MyForm/>
                      </Route>
                      <Route path="/update" exact>
                          <Update/>
                      </Route>
                  </Switch>
              </BrowserRouter>
              {/*<div className ="col-12">*/}
              {/*    <MyForm/>*/}
              {/*</div>*/}
              <div className="col-12">
                  <Footer/>
              </div>
          </div>
      </div>

  )
}

export default App;
