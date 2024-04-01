import React from 'react'
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import DoneIcon from '@mui/icons-material/Done';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import AlarmOffIcon from '@mui/icons-material/AlarmOff';
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import './busSeven.css';
import { Link } from 'react-router-dom';

export default function busSeven(props) {
  return (
    <div>
    <div className='secondfull'>
    <div className='eightypercent2'> 
          <div className='busbooking'>
                                                                        <div className='busbooking1'>
                                                                                <div className='divofdiv'>
                                                                                    <div>
                                                                                      <div>A-B-C Trvelz</div>
                                                                                      <div style={{fontSize:'10px'}}>AC Sleeper(2+1)</div>
                                                                                    </div>
                                                                                </div>
                                                                                
                                                                                <div className='divofdiv'>
                                                                                    <div>
                                                                                      <div style={{fontSize:'10px'}}>{props.dater}</div>
                                                                                      <div style={{fontSize:'15px'}}>10.15AM</div>
                                                                                    </div>
                                                                                </div>

                                                                                <div className='divofdiv'>
                                                                                  <div>
                                                                                    <div style={{fontSize:'10px'}}>3H15M</div>
                                                                                  </div>
                                                                                </div>

                                                                                <div className='divofdiv'>
                                                                                  <div>
                                                                                  <div style={{fontSize:'10px'}}>{props.dater}</div>
                                                                                    <div>01.30PM</div>
                                                                                  </div>
                                                                                </div>

                                                                                <div className='divofdiv'>
                                                                                  <div>
                                                                                    <div>Rating</div>
                                                                                    <div className='nearicon'>
                                                                                      <div ><StarIcon style={{height:'15px', width:'15px'}}/></div>
                                                                                      <div style={{fontSize:'9px', padding:'3px'}}>4.5</div>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>

                                                                                <div className='divofdiv'>
                                                                                  <div>
                                                                                    <div>PRICE</div>
                                                                                    <div className='nearicon'>
                                                                                      <div ><CurrencyRupeeIcon style={{height:'15px', width:'15px'}}/></div>
                                                                                      <div style={{fontSize:'13px', padding:'3px'}}>999</div>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                        </div>

                      
              
                                                                          <div className='busbooking1'>
                                                                                  <div className='divofdiv'>
                                                                                    <div>
                                                                                      <div style={{fontSize:'12px'}}>Avaliable Seats</div>
                                                                                      <div className='nearicon'>
                                                                                        <div ><AirlineSeatIndividualSuiteIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                                                                                        <div style={{fontSize:'9px', padding:'8px'}}>10</div>
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>

                                                                                  <div className='divofdiv'>
                                                                                    <div>
                                                                                      <div style={{fontSize:'12px'}}>Cancellation</div>
                                                                                      <div className='nearicon'>
                                                                                      <div ><DoneIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                                                                                      <div style={{fontSize:'9px', padding:'8px'}}>Avaliable</div>
                                                                                    </div>
                                                                                    </div>
                                                                                  </div>

                                                                                  <div className='divofdiv'>
                                                                                    <div>
                                                                                      <div style={{fontSize:'12px'}}>Cancellation Before</div>
                                                                                      <div className='nearicon'>
                                                                                      <div ><AlarmOffIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                                                                                      <div style={{fontSize:'9px', padding:'8px'}}>5Hrs before Departure</div>
                                                                                    </div>
                                                                                    </div>
                                                                                  </div>

                                                                                  <div className='divofdiv'>
                                                                                    <div>
                                                                                      <div style={{fontSize:'12px'}}>Live Tracking</div>
                                                                                      <div className='nearicon'>
                                                                                      <div ><ShareLocationIcon style={{height:'20px', width:'20px',paddingTop:'4px'}}/></div>
                                                                                      <div style={{fontSize:'9px', padding:'8px'}}>Yes</div>
                                                                                    </div>
                                                                                    </div>
                                                                            </div>
                                                                          </div>
          </div>

          <div className='buttonforbook'>
                  <Link to={{pathname:'/SeatBook'}}><button className="button-32" >Book Now</button></Link>
          </div>
          
    </div>
</div> 


</div>
  )
}
