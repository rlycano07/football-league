import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar} from 'react-bootstrap';
import image from './a.PNG';
import React, {useState, useEffect} from 'react';
import HashLoader from "react-spinners/HashLoader";


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
            <table class="table table-hover table-striped table-bordered">
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
                    <td class="flexible">Penshurst United</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td class="flexible">FC Rockdale</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
            </tbody>
            </table>
          </div>
        </div>
        
        <div class="single-component">
          <div class="table-responsive">
            <div class="table-heading-content">
              <h2 class="table-heading">Squad</h2>
            </div>
            <div class="squad-table">
              <div class="squad-table-head">
                <div class="squad-table-head-content">
                  Penshurst United
                </div>
                <div class="squad-table-head-content">
                  FC Rockdale
                </div>
              </div>
              <div class="squad-table-body">
                <div class="lineups">
                    <p>Ram</p>
                    <p>Shyam</p>
                    <p>Laxman</p>
                    <p>Hari</p>
                    <p>Dron</p>
                </div>
                <div class="lineups">
                    <p>Kartik</p>
                    <p>Bhism</p>
                    <p>Kans</p>
                    <p>Nakul</p>
                    <p>Sahadev</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        <div class="update-container">
        <em><p2>League Table last updated on: 27/02/2022</p2></em><br/>
        <em><p2>© Sunday League 2022</p2></em>

        </div>
      </div> 
    }
    
    </div>
  );
}

export default App;
