import React, { useState, useEffect ,useContext} from 'react'; 
import axios from 'axios';
import { Link } from 'react-router-dom';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import DoneIcon from '@mui/icons-material/Done';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import AlarmOffIcon from '@mui/icons-material/AlarmOff';
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './busSeven.css';

import {UserContext} from './context';

export default function Buslistapi(props) {
  const [busDetailsList, setBusDetailsList] = useState([]); 
  const {user}=useContext(UserContext);

  useEffect(() => 
  {
    const fetchData = async () => 
    {
      try 
      {
        const response = await axios.get(`http://localhost:10000/getbuses/${user.from}/${user.to}`);
        const data = response.data;
        setBusDetailsList(data);
      } 
      catch (error) 
      {
        console.error('Error fetching bus details:', error);
      } 
    };
  
    fetchData();
  }, [user.from, user.to]); 
  
  const handleSubmit = (busName) => 
  {
    user.setBname(busName);
  };
  return (
    <div className='secondfull'>
    {busDetailsList.map((busDetails, index) => 
      (
        <div className='eightypercent2'> 
                            <div className='busbooking'>
                                                                        <div className='busbooking1'>
                                                                                <div className='divofdiv'>
                                                                                    <div>
                                                                                      <div>{busDetails.bname}</div>
                                                                                      <div style={{fontSize:'15px'}}>AC Sleeper(2+1)</div>
                                                                                    </div>
                                                                                </div>
                                                                                
                                                                                <div className='divofdiv'>
                                                                                    <div>
                                                                                      <div style={{fontSize:'15px'}}>{props.dater}</div>
                                                                                      <div style={{fontSize:'15px'}}>{busDetails.fromtime}</div>
                                                                                    </div>
                                                                                </div>

                                                                                <div className='divofdiv'>
                                                                                  <div>
                                                                                    <div style={{fontSize:'15px'}}>3H15M</div>
                                                                                  </div>
                                                                                </div>

                                                                                <div className='divofdiv'>
                                                                                  <div>
                                                                                  <div style={{fontSize:'15px'}}>{props.dater}</div>
                                                                                    <div>{busDetails.totime}</div>
                                                                                  </div>
                                                                                </div>

                                                                                <div className='divofdiv'>
                                                                                  <div>
                                                                                    <div>Rating</div>
                                                                                    <div className='nearicon'>
                                                                                      <div ><StarIcon style={{height:'15px', width:'15px'}}/></div>
                                                                                      <div style={{fontSize:'12px', padding:'1px'}}>{busDetails.rating}</div>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>

                                                                                <div className='divofdiv'>
                                                                                  <div>
                                                                                    <div>PRICE</div>
                                                                                    <div className='nearicon'>
                                                                                      <div ><CurrencyRupeeIcon style={{height:'17px', width:'1px'}}/></div>
                                                                                      <div style={{fontSize:'15px'}}>{busDetails.price}</div>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                        </div>

                      
              
                                                                          <div className='busbooking1'>
                                                                                  <div className='divofdiv'>
                                                                                    <div>
                                                                                      <div style={{fontSize:'15px'}}>Avaliable Seats</div>
                                                                                      <div className='nearicon'>
                                                                                        <div ><AirlineSeatIndividualSuiteIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                                                                                        <div style={{fontSize:'12px', padding:'5px'}}>{busDetails.availseats}</div>
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>

                                                                                  <div className='divofdiv'>
                                                                                    <div>
                                                                                      <div style={{fontSize:'12px'}}>Cancellation</div>
                                                                                      <div className='nearicon'>
                                                                                      <div ><DoneIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                                                                                      <div style={{fontSize:'12px', padding:'5px'}}>{busDetails.cancellation}</div>
                                                                                    </div>
                                                                                    </div>
                                                                                  </div>

                                                                                  <div className='divofdiv'>
                                                                                    <div>
                                                                                      <div style={{fontSize:'12px'}}>Cancellation Before</div>
                                                                                      <div className='nearicon'>
                                                                                      <div ><AlarmOffIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                                                                                      <div style={{fontSize:'12px', padding:'5px'}}>{busDetails.cancelbefore}Hrs before Departure</div>
                                                                                    </div>
                                                                                    </div>
                                                                                  </div>

                                                                                  <div className='divofdiv'>
                                                                                    <div>
                                                                                      <div style={{fontSize:'12px'}}>Live Tracking</div>
                                                                                      <div className='nearicon'>
                                                                                      <div ><ShareLocationIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                                                                                      <div style={{fontSize:'12px', padding:'5px'}}>{busDetails.livetracking}</div>
                                                                                    </div>
                                                                                    </div>
                                                                            </div>
                                                                          </div>
                              </div>

          
         
          <div className='buttonforbook'>
              <Link to={{ pathname:'/SeatBook', state: { busName: busDetails.bname } }}>
                <button className="button-32" onClick={() => handleSubmit(busDetails.bname)}>Book Now</button>
              </Link>
            </div>
    </div>
          ))}

      
    </div>
  );
}
