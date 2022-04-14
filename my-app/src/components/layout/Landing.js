import React, { Component } from 'react'
// import { connect } from 'react-redux'

export class Landing extends Component {
  render() {
    return (
      <div className="a-landing">
          <section id="intro" className="common-section">
            <div className="container">
                <div className="flex justify-between">
                    <img  src="/img/cashfox-logo-white.svg" alt="Logo" className="h-4"/>
                    <a className="flex text-400 disabled:items-center text-white no-underline">
                        <font className="a-vertical-in">
                            <font className="a-vertical-in">For registration</font>
                        </font>
                        <span>
                            ->
                        </span>
                        {/* <div aria-label="arrow-right" className="fox-icon" style={{fontSize: "18px"}}>
                            <svg data-v-06964c94="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="icon-inner block w-full h-full" style="color: rgb(255, 255, 255);"><path data-v-06964c94="" fill="#1B1919" d="M16.086 11l-2.51-2.51a.4.4 0 010-.566l.848-.848a.4.4 0 01.566 0l4.641 4.641a.4.4 0 010 .566l-4.641 4.641a.4.4 0 01-.566 0l-.848-.848a.4.4 0 010-.566l2.51-2.51H5.4a.4.4 0 01-.4-.4v-1.2c0-.22.18-.4.4-.4h10.686z"></path></svg>
                        </div> */}
                    </a>
                </div>
                <div className="relative">
                    <h1>Simply be liquid with Cashfox</h1>
                    <img  src="/img/cashfox_interface_preview.png" alt="Cashfox Interface Preview" className="preview" data-xblocker="passed" ></img>
                    <ul  className="checks">
                     <li  className="text-white xl:text-md leading-relaxed">
                        <div aria-label="checkmark circle" className="fox-icon flex-shrink-0 mr-2" style={{fontSize: "18px"}}>
                           <font  className="a-vertical-in">
                               <font  className="a-vertical-in">Immediate liquidity for small and medium-sized companies, freelancers and the self-employed
                               </font>
                            </font>
                        </div>
                    </li>
                     <li  className="text-white xl:text-md leading-relaxed">
                        <div aria-label="checkmark circle" className="fox-icon flex-shrink-0 mr-2" style={{fontSize: "18px"}}>
                           <font  className="a-vertical-in">
                               <font  className="a-vertical-in">Immediate liquidity for small and medium-sized companies, freelancers and the self-employed
                               </font>
                            </font>
                        </div>
                    </li>
                     <li  className="text-white xl:text-md leading-relaxed">
                        <div aria-label="checkmark circle" className="fox-icon flex-shrink-0 mr-2" style={{fontSize: "18px"}}>
                           <font  className="a-vertical-in">
                               <font  className="a-vertical-in">Immediate liquidity for small and medium-sized companies, freelancers and the self-employed
                               </font>
                            </font>
                        </div>
                    </li>
                     <li  className="text-white xl:text-md leading-relaxed">
                        <div aria-label="checkmark circle" className="fox-icon flex-shrink-0 mr-2" style={{fontSize: "18px"}}>
                           <font  className="a-vertical-in">
                               <font  className="a-vertical-in">Immediate liquidity for small and medium-sized companies, freelancers and the self-employed
                               </font>
                            </font>
                        </div>
                    </li>

                    </ul>
                    <div className="py-4 max-w-md mx-auto xl:mx-0">
                        <button type="button" className="a-btn fox-button w-full xl:w-auto btn-primary" id="home-fox-button-1">
                            <span data-v-06a07fb5="" className="flex items-center pointer-events-none">
                                <font className="a-vertical-in">
                                    <font className="a-vertical-in">Secure liquidity now</font>
                                </font>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            
          </section>
          <section className="a-second-section">
            <svg className="part1" xmlns="http://www.w3.org/2000/svg" width="1903px" height="128px">
              <polygon fill="rgba(12,92,81,1)" points="0,0 951.5,0 1903,0 1903,0 1903,0 256,128 0,24 0,12"></polygon>
            </svg>
            <div className="a-content justify-center text-fox flex-col mb-16">
                <h2
                className="head-500 md:head-700 xl:text-center m-auto">
                    <font className="a-vertical-in">
                        <font className="a-vertical-in a-font">
                            In 3 steps to liquidity</font>
                    </font>
                </h2>
                <div className="row a-green">
                    <div className="col-md-4">
                        <h1 className='a-se-num a-f-700'>1</h1>
                        <h3 className="a-se-title a-f-700">to register</h3>
                        <p className="a-se-p">Register for Cashfox together with your personal advisor.</p>
                    </div>
                    <div className="col-md-4">
                        <h1 className='a-se-num a-f-700'>2</h1>
                        <h3 className="a-se-title a-f-700">upload</h3>
                        <p className="a-se-p">Log in to our protected platform with your access data and upload your invoices online.</p>
                    </div>
                    <div className="col-md-4">
                        <h1 className='a-se-num a-f-700'>3</h1>
                        <h3 className="a-se-title a-f-700">to receive money</h3>
                        <p className="a-se-p">Receive the invoice amount within 24 hours.</p>
                    </div>
                </div>
            </div>
          </section>
          <section className="relative a-third-section common-section">
            <div className="fox-polygon absolute " id="lexoffice-polygon-benefits-top">
                <svg xmlns="http://www.w3.org/2000/svg" width="1903px" height="96px" className='a-svg'>
                    <polygon fill="rgba(12,92,81,1)" points="0,72 1615,0 1903,96 1903,96 1903,96 951.5,96 0,96"></polygon>
                </svg>
            </div>
            <div className="container">
                <div className='row'>
                    <div className='col-md-4'>
                        <h2 className='col-white mb-30'><b>your benefits</b><br/>
                        at a glance</h2>
                        <button type="button" className="a-btn fox-button w-full xl:w-auto btn-primary" id="home-fox-button-1">
                            <span data-v-06a07fb5="" className="flex items-center pointer-events-none">
                                <font className="a-vertical-in">
                                    <font className="a-vertical-in">Secure liquidity now</font>
                                </font>
                            </span>
                        </button>
                    </div>
                    <div className='col-md-4'>
                        <div>
                            <h2>Together to the goal</h2>
                            <p>Receive your financing approval within a few minutes . The first registration takes place within 10 minutes - together with your personal consultant .</p>
                        </div>
                        <div>
                            <h2>Maximum flexibility</h2>
                            <p>Factoring on an individual invoice basis - you decide for yourself which invoices you submit and which not. These can be both commercial and private customer invoices .</p>
                        </div>
                        <div>
                            <h2>Simple & transparent</h2>
                            <p>Keep an eye on the status of your submitted invoices at all times .</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div>
                            <h2>Absolutely discreet</h2>
                            <p>Cashfox stays in the background, your customer doesn't know anything about the sale of your invoice.</p>
                        </div>
                        <div>
                            <h2>Fast & reliable</h2>
                            <p>Receive 100% of the withdrawal amount within 24 hours .</p>
                        </div>
                       
                    </div>
                   
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <h2 className='col-white mb-30'><b>Cashfox</b><br/>
                        simply explained</h2>
                       
                    </div>
                    <div className='col-md-4'>
                        <video width={"100%"} poster="/img/video_poster.jpg" controls="controls" >
                            <source src="/Cashfox_Landingpage_h264.mp4" type="video/mp4"/>
                        </video>
                    </div>
                    <div className='col-md-4'>
                      
                       
                    </div>
                   
                </div>
            </div>
          </section>
          <section className="a-second-section">
            <svg className="part1 " xmlns="http://www.w3.org/2000/svg" width="1903px" height="128px">
              <polygon fill="rgba(12,92,81,1)" points="0,0 951.5,0 1903,0 1903,0 1903,0 256,128 0,24 0,12"></polygon>
            </svg>
            <div className="a-content justify-center text-fox flex-col mb-16">
                <div className='row'>
                    <div className="col-md-6">
                        <h2 className='col-red mb-30 ' style={{textAlign: "left"}}><b>Trust in<br/>
                        more than 40 years of<br/>
                        experience
                        </b></h2>
                        <div style={{textAlign: "left", paddingTop: '30px'}} className="a-font1">
                            <p>
                            Behind Cashfox stands <b>abcfinance</b>-<br></br>
    your strong partner for medium-sized companies.
                            </p>
                            <ul className='a-custom-ul'>
                                <li>Financing expert for almost all industries</li>
                                <li>Financing expert for almost all industries</li>
                                <li>Financing expert for almost all industries</li>
                                <li>Financing expert for almost all industries</li>
                            </ul>
                        </div>
                        <div className="flex" style={{marginTop: '20px',height:'135px'}}>
                        <img data-v-e6f908ba="" src="/img/handelsblatt_top_service_logo.jpg" alt="Handelsblatt Top Service Logo" className="h-16 xl:mr-2" style={{width:'100px !important'}}/>
                        <img  src="/img/deutscher_factoring_verband_logo.jpg" alt="German factoring association logo" className="h-16" style={{width:"60%"}} ></img>
                        </div>
                        
                    </div>
                    <div className='col-md-2'></div>
                    <div className='col-md-4'  style={{textAlign: "left"}}>
                    <img data-v-e6f908ba="" src="/img/abcfinance-logo.svg" alt="abcfinance Logo" class="abcfinance_logo h-4 mb-2"/>
                        <h2 className='col-red mb-30 ' style={{textAlign: "left"}}><b>in numbers
                            <br/><br/><br/>
                        </b ></h2>
                        <h2 className='col-red mb-30 ' style={{textAlign: "left"}}><b>1.500.000+
                       
                        </b ></h2>
                        <p className="a-font1"> purchased invoices annually</p>
                        <h2 className='col-red mb-30 ' style={{textAlign: "left"}}><b>17 locations
                       
                        </b ></h2>
                        <p className="a-font1">in Germany, Austria and the Netherlands</p>
                        <h2 className='col-red mb-30 ' style={{textAlign: "left"}}><b>3.500.000.000+ €
                       
                        </b ></h2>
                        <p className="a-font1"> Factoringvolumen 2020</p>

                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <button type="button" className="a-btn fox-button w-full xl:w-auto btn-primary width-100" id="home-fox-button-1">
                            <span data-v-06a07fb5="" className="flex items-center pointer-events-none m-auto">
                                <font className="a-vertical-in" style={{margin: 'auto'}}>
                                    <font className="a-vertical-in">Become a customer now</font>
                                </font>
                            </span>
                        </button>
                    </div>
                </div>
                <div style={{marginTop:'20px'}} className='a-font1'>
                    <span>Ein Product</span>
                    <ul className='custom-ul' >
                        <li>abc</li>
                        <li>abc</li>
                        <li>abc</li>
                        <li>abc</li>
                        <li>abc</li>
                    </ul>
                </div>
                <br/>
                
            </div>
           
          </section>
      </div>
    )
  }
}


export default Landing;

// export default connect(mapStateToProps, mapDispatchToProps)(Landing)