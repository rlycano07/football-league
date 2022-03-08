import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import image from './aa.png';
import teamLogo from './team-logo.png';
import boot from './boot.png';
import gloves from './gloves.png';
import teamLogo2 from './team-logo-2.png';
import React, {useState, useEffect} from 'react';
import HashLoader from "react-spinners/HashLoader";
import {Carousel} from "react-bootstrap";


function App() {
  const [loading, setLoading] =useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 8000)
  }, [])

  return (
    <div className="App">
      {
        loading ?

        <div class="loading-animation">
          <HashLoader 
          // css={override}
          size={80}
          color={"#9875D1"}
          loading={loading}
        
          />
          <div class="table-image-background">
              {/* <img class="img-fluid table-image" alt="Responsive image" src='logo192.png'/> */}
              <img src={image}  class="img-fluid table-image" alt="Responsive image"/>
          </div>
        </div> 

        :
      <div>  
        <div class="single-component">
          <div class="table-responsive">
            <div class="table-image-background">
              {/* <img class="img-fluid table-image" alt="Responsive image" src='logo192.png'/> */}
              <img src={image}  class="img-fluid table-image" alt="Responsive image"/>
            </div>
            <div class="table-heading-content">
              <h2 class="table-heading">Standings</h2>
            </div>
            <table class="table table-hover table-striped table-bordered standings">
            <thead class="table-head">
                <tr>
                  <th>#</th>
                  <th class="flexible">Club</th>
                  <th>MP</th>
                  <th>W</th>
                  <th>D</th>
                  <th>L</th>
                  <th>GF</th>
                  <th>GA</th>
                  <th>GD</th>
                  <th>Pts</th>
                </tr>
            </thead>
            <tbody class="tbody-contents">
                
                <tr>
                    <th scope="row">1</th>

                    {/* place first team */}


                    <td class="flexible">
                      <div class="teams">
                        {/* <img src={teamLogo2}  class="team-logo-image img-fluid table-image" alt="Responsive image"/> */}
                        FCR
                      </div>
                    </td>
                    <td>2</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>4</td>
                    <td>4</td>
                    <td>0</td>
                    <td>3</td>



                </tr>
                <tr>
                    <th scope="row">2</th>

                    {/* place second team */}
                    <td class="flexible">
                      <div class="teams">
                        {/* <img src={teamLogo}  class="team-logo-image img-fluid table-image" alt="Responsive image"/> */}
                        HMD
                      </div>
                    </td>
                    <td>2</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>4</td>
                    <td>4</td>
                    <td>0</td>
                    <td>3</td>


                </tr>
            </tbody>
            </table>
          </div>
        </div>
        
        

        <div class="single-component">
          <div class="table-responsive">
            <div class="table-heading-content">
              <h2 class="table-heading fixtures">Fixtures</h2>
            </div>
            
            
            
            <div class="squad-table-fixtures">
              <div class="matchday">
                <em><p3>MatchDay 1 of 24 Date: 6/03/2022</p3></em><br/>
              </div>
              <div class="squad-table-head matchday-border">
                <div class="squad-table-head-content">
                  <div class="teams">
                        <img src={teamLogo}  class="team-logo-image img-fluid table-image" alt="Responsive image"/>Himalayan Dukes
                  </div>
                </div>
                <div class="score">
                  <div class="teams">
                        2
                  </div>                  
                </div>
                <div class="squad-table-head-content">
                  <div class="teams">
                        -
                  </div>                  
                </div>
                <div class="score">
                  <div class="teams">
                        3
                  </div>                  
                </div>
                <div class="squad-table-head-content">
                  <div class="teams">
                        <img src={teamLogo2}  class="team-logo-image img-fluid table-image" alt="Responsive image"/>FC Rockdale
                  </div>                  
                </div>
              </div>
            </div>




            <div class="squad-table-fixtures">
              <div class="matchday">
                <em><p3>MatchDay 2 of 24 Date: 7/03/2022</p3></em><br/>
              </div>
              <div class="squad-table-head matchday-border">
                <div class="squad-table-head-content">
                  <div class="teams">
                        <img src={teamLogo}  class="team-logo-image img-fluid table-image" alt="Responsive image"/>Himalayan Dukes
                  </div>
                </div>
                <div class="score">
                  <div class="teams">
                        2
                  </div>                  
                </div>
                <div class="squad-table-head-content">
                  <div class="teams">
                        -
                  </div>                  
                </div>
                <div class="score">
                  <div class="teams">
                        1
                  </div>                  
                </div>
                <div class="squad-table-head-content">
                  <div class="teams">
                        <img src={teamLogo2}  class="team-logo-image img-fluid table-image" alt="Responsive image"/>FC Rockdale
                  </div>                  
                </div>
              </div>
            </div>




          </div>
        </div>

        {/* //Goals  */}

        <div class="single-component-goals goals">
          <div class="table-responsive">
            <div class="table-heading-content">
              <h2 class="table-heading">Goals</h2>
            </div>
            <table class="table table-hover table-striped table-bordered">
            <thead class="table-head">
                <tr>
                  <th>#</th>
                  <th class="flexible">Name</th>
                  <th class="flexible">Club</th>
                  <th>Goals</th>
                </tr>
            </thead>
            <tbody class="tbody-contents">
                
                <tr>
                    <th scope="row">1</th>
                    <td class="flexible">
                      <div class="teams">
                        Anish <img src={boot}  class="team-logo-image img-fluid table-image" alt="Responsive image"/>
                      </div>
                    </td>
                    <td class="flexible">
                      <div class="teams">
                        HMD
                      </div>
                    </td>
                    <td>2</td>
                </tr>

                <tr>
                    <th scope="row">2</th>
                    <td class="flexible">
                      <div class="teams">
                        Dharma 
                      </div>
                    </td>
                    <td class="flexible">
                      <div class="teams">
                        FCR
                      </div>
                    </td>
                    <td>1</td>
                </tr>

                <tr>
                    <th scope="row">3</th>
                    <td class="flexible">
                      <div class="teams">
                        Rajendra
                      </div>
                    </td>
                    <td class="flexible">
                      <div class="teams">
                        FCR
                      </div>
                    </td>
                    <td>1</td>
                </tr>

                <tr>
                    <th scope="row">4</th>
                    <td class="flexible">
                      <div class="teams">
                        Rushan 
                      </div>
                    </td>
                    <td class="flexible">
                      <div class="teams">
                        FCR
                      </div>
                    </td>
                    <td>1</td>
                </tr>

                <tr>
                    <th scope="row">5</th>
                    <td class="flexible">
                      <div class="teams">
                        Sudeep
                      </div>
                    </td>
                    <td class="flexible">
                      <div class="teams">
                      HMD
                      </div>
                    </td>
                    <td>1</td>
                </tr>

                <tr>
                    <th scope="row">6</th>
                    <td class="flexible">
                      <div class="teams">
                        Sagar
                      </div>
                    </td>
                    <td class="flexible">
                      <div class="teams">
                      HMD / FCR
                      </div>
                    </td>
                    <td>1</td>
                </tr>

                <tr>
                    <th scope="row">7</th>
                    <td class="flexible">
                      <div class="teams">
                        Anjan
                      </div>
                    </td>
                    <td class="flexible">
                      <div class="teams">
                      HMD
                      </div>
                    </td>
                    <td>1</td>
                </tr>
            </tbody>
            </table>
          </div>
        </div>



        <div class="single-component">
          <div class="table-responsive squad">
            <div class="table-heading-content squad">
              <h2 class="table-heading squad">Squad</h2>
            </div>
            <div class="squad-table">
              <div class="squad-table-head">
                <div class="squad-table-head-content">
                  <div class="teams">
                        <img src={teamLogo}  class="team-logo-image img-fluid table-image" alt="Responsive image"/>Himalayan Dukes
                  </div>
                  
                </div>
                <div class="squad-table-head-content">
                  <div class="teams">
                        <img src={teamLogo2}  class="team-logo-image img-fluid table-image" alt="Responsive image"/>FC Rockdale
                  </div>                  
                </div>
              </div>
              <div class="squad-table-body">
                <div class="lineups">
                    <p>Prawshant</p>
                    <p>Sudeep</p>
                    <p>Anish</p>
                    <p>Dipsagar</p>
                    <p>Nabeen</p>
                    <p>Ujjwal</p>
                    <p>Bidur</p>
                    <p>Anjan</p>
                </div>
                <div class="lineups">
                    <p>Prabhu</p>
                    <p>Saroj</p>
                    <p>Rushan</p>
                    <p>Rajendra</p>
                    <p>Subash</p>
                    <p>Dharma</p>
                    <p>Sameer</p>
                    <p>Sagar</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="update-container">
        <em><p2>League Table last updated on: 8/03/2022</p2></em><br/>
        <em><p2>© Sunday League 2022</p2></em>
        </div>
      </div> 
    }
    
    </div>
  );
}

export default App;
