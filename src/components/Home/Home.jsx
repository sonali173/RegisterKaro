import React from "react";
import "./Home.css";
import { assets } from "../../assets/assets"

const Home = () => {
    return (
        <div className="hero-section ">
            <div className="home-section d-flex">
                <div className="BannerContainer" id="Home">

                    < div className="GoogleRating d-flex">
                        <div className="singleStar d-flex">
                            <li className="single">
                                <i class="fa-solid fa-star"></i></li>
                            <p>Google Rating</p></div>
                        <div className="rating">
                            <ul>
                                <li> <i class="fa-solid fa-star"></i></li>
                                <li> <i class="fa-solid fa-star"></i></li>
                                <li> <i class="fa-solid fa-star"></i></li>
                                <li> <i class="fa-solid fa-star"></i></li>
                                <li> <i class="fa-solid fa-star"></i></li>
                            </ul>
                        </div>
                    </div>

                    <div className="home-content">
                        <h1>Your trusted partner <br />
                            <u>for</u> compliance business needs</h1>


                        <p>
                            An online business compliance platform that helps entrepreneurs and
                            other individuals with various, <b> registrations, tax filings, </b> and other <b>legal</b>
                            <b> matters.  </b>     </p>

                        <div className="performance d-flex">
                            <div className="StatsContainer1 d-flex">
                                <div className="icon"><i class='bx bxs-grid-alt'></i></div>
                                <h4>4.5+</h4>
                                <p1>Customer Rating</p1>
                            </div>

                            <div className=" client StatsContainer1 d-flex">
                                <div className="icon"> <i class="fa-solid fa-users"></i></div>
                                <h4>20,000+</h4>
                                <p1>Clients</p1>
                            </div>

                            <div className=" client2 StatsContainer1 d-flex">
                                <div className="icon"> <i class="fa-solid fa-handshake"></i></div>
                                <h4>99.8%</h4>
                                <p1>Financial Stability</p1>
                            </div>
                        </div>
                    </div>
                    <div className="button expert-button d-flex">

                        <button className="expert">Talk An Expert</button><li><i class="fa-solid fa-circle-play"></i></li>
                        <button className="see">See how it works</button>
                    </div>
                </div>
                <div className="center_img1">
                    <div className="center_img">
                        <img src={assets.hero_img} alt="image" />
                    </div>
                </div>
                <div className="side-annual ">
                    <div className="all-botton">
                        <ul>
                            <li>Annual Compliance</li>
                            <li>Payroll Services</li>
                            <li>Company Formation</li>
                            <li>Annual Compliance</li>
                        </ul>

                    </div>

                    <div className="goal_img">
                        <img src={assets.goal_img} loading="lazy" alt="" />
                    </div>

                </div>
            </div>
            <div className="trusted">
                <div className="trusted-heading">
                    <p> Trusted By Over 100+ Startups and freelance business </p>
                </div>
                <div className="trusted-company d-flex">
                    <div className="oracle"><img src={assets.oracle_img} alt="" /></div>
                    <div className="Morpheus"><img src={assets.morphisus_img} alt="" /></div>
                    <div className="Morpheus"><img src={assets.morphisus_img} alt="" /></div>
                    <div className="samsung"><img src={assets.samsung_img} alt="" /></div>
                    <div className="monday"><img src={assets.monday_img} alt="" /></div>
                    <div className="monday"><img src={assets.segment_img} alt="" /></div>
                </div>
            </div>
            <div className="all-cards-container">
                <div className="card-section row">
                    <div className="card-heading">
                        <p> WELCOME TO REGISTERKARO.IN</p>
                        <h6> Explore Our Services</h6>
                    </div>
                    <div className="cards  col-4">
                        <img src={assets.card1_img} alt="" />
                        <h5> Company Formation </h5>
                        <p> Build web-based solutions that
                            enhance customer experience.</p>
                        <button>Learn more <i class='bx bx-right-arrow-circle'></i></button>
                    </div>
                    <div className="cards lineCard col-4">

                        <img src={assets.card2_img} alt="" />
                        <h5>  Company Secretarial Services </h5>
                        <p> Make data-driven decisions and
                            utilize technology to reach
                            business goals.</p>
                        <button>Learn more <i class='bx bx-right-arrow-circle'></i></button>
                    </div>
                    <div className="cards col-4">
                        <img src={assets.card3_img} alt="" />
                        <h5> Virtual Office Address</h5>
                        <p>  Foster customer relationships by
                            effectively serving your market.</p>
                        <button>Learn more <i class='bx bx-right-arrow-circle'></i></button>
                    </div>
                    <div className="cards col-4">

                        <img src={assets.card4_img} alt="" />
                        <h5> Annual Compliance Service </h5>
                        <p>Turn your ideas into modern
                            products with our design experts</p>
                        <button>Learn more <i class='bx bx-right-arrow-circle'></i></button>
                    </div>
                    <div className="cards lineCard col-4">

                        <img src={assets.card5_img} alt="" />
                        <h5>  Payroll Services </h5>
                        <p>  Expand your business across the
                            globe with minimal effort</p>
                        <button>Learn more <i class='bx bx-right-arrow-circle'></i></button>
                    </div>
                    <div className="cards col-4">
                        <img src={assets.card6_img} alt="" />
                        <h5> Bookkeeping Services </h5>
                        <p>  Steering user behaviours with
                            creative design, data insights &
                            technology.</p>
                        <button>Learn more <i class='bx bx-right-arrow-circle'></i></button>
                    </div>
                </div>
                <div className="btn1 d-flex">
                    <div className="btn">
                        <button>See All Service</button></div>
                </div>
            </div>
            {/* about-section */}

            <div className="about-section ">
                <div className="about-row row d-flex">
                    <div className="about-content col-6">
                        <p1> WELCOME TO REGISTERKARO.IN</p1>
                        <h6>About <span2> Register Karo</span2></h6>
                        <p>We have been using Intelegencia as our DevOps vendor for our field service
                            applications over the last couple of years and I’m extremely pleased with
                            their performance, ability to execute, and willingness to adapt in our ever changing
                            environment. Perry is an outstanding leader who is fanatical about
                            customer satisfaction. He has built a solid team which has consistently delivered
                            on projects thereby exceeding everyone’s expectations.
                        </p><p>I would strongly recommend their services to any organization that is looking for
                            solid, reliable, and predictable outcomes.</p>
                        <div className="btn2 ">
                            <div className="btn">
                                <button> Learn more  <i class='bx bx-right-arrow-circle'></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="about_img col-4">
                        <img src={assets.about_img} alt="about img" />
                    </div>
                    <div className="side_img col-2 d-flex">
                        <div className="side1">
                            <img src={assets.side_img} alt="image" />
                        </div>
                        <div className="dot_img">
                            <img src={assets.dot_img} alt="image" />
                        </div>
                    </div>
                </div>


            </div>
            {/* /why-section */}

            <div className="why-section container">
                <div className="why-row row ">
                    <div className="why-content col-6 ">
                        <p1>WHY REGIDTERKARO.IN</p1>
                        <h6>Why Choose Register Karo</h6>
                        <p> It is with consistent services and results that build trust with the people and that in
                            turn help us to serve the business better.</p>
                    </div>

                    <div className="confident-card color1 col-3">
                        <div className="cardIcon"> <li><i class="fa-solid fa-shield-halved"></i></li> </div>
                        <h6>Confidential & Safe</h6>
                        <p>All your private information is safe
                            with us</p>
                    </div>

                    <div className="confident-card color2 col-3">
                        <div className="cardIcon color2"><li> <i class="fa-solid fa-circle-check"></i> </li></div>
                        <h6>No Hidden Fee</h6>
                        <p>Everything is put before you with
                            no hidden charges or conditions</p>
                    </div>
                </div>
                <div className="card-off d-flex">
                    <div className="confident-card color3 col-3 offset-3">
                        <div className="cardIcon"> <li><i class="fa-solid fa-face-smile"></i></li> </div>
                        <h6>Guaranteed Satisfaction</h6>
                        <p>We ensure that you stay 100%
                            satisfied with our offered services</p>
                    </div>
                    <div className="confident-card color4 col-3">
                        <div className="cardIcon "><li> <i class="fa-solid fa-user-tie"></i></li> </div>
                        <h6>Expert CA/CS Assistance</h6>
                        <p>Prompt support from our in-house
                            expert professionals</p>
                    </div>
                    <div className="confident-card color5 col-3">
                        <div className="cardIcon"><li><i class="fa-solid fa-shield-halved"></i> </li></div>

                        <h6>Confidential & Safe</h6>
                        <p> All your private information is safe
                            with us</p>
                    </div>
                </div>
            </div>
            {/* video-section */}

            <div className="video-section d-flex">
                <div className="video-content ">
                    <h2>Our Video Introductions</h2>
                    <p> Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
                        vulputate pellentesque a diam tincidunt apis dui.</p>
                    <div className="explore d-flex ">
                        <div className="explore1">
                            <li><i class="fa-solid fa-lightbulb"></i></li>
                        </div>
                        <div className="explore2">
                            <h2>Explore ideas together</h2>
                            <p>Engage audience segments and finally create actionable insights.
                                Amplify vertical integration</p></div>
                    </div>
                    <div className="explore d-flex ">
                        <div className="explore1">
                            <li><i class="fa-solid fa-desktop"></i></li>
                        </div>
                        <div className="explore2">
                            <h2>Bring those ideas to life</h2>
                            <p>Engage audience segments and finally create actionable insights.
                                Amplify vertical integration</p></div>
                    </div>
                </div>
                <div className="video-img">
                    <a href="https://youtu.be/UdG1AA2gWQs?si=QU8cOlsPijo3WNRw" target="_blank"> <img src={assets.video_img} alt="video" /></a>
                </div>
            </div>

            <div className="happy-clients">
                <img src={assets.happy_img} alt="image" />
            </div>
            {/* application-client */}

            <div className="application d-flex">
                <div className="form form1 d-flex">
                    <li><i class="fa-solid fa-file-invoice"></i></li>
                    <h4>Fill up Application </h4>
                </div>
                <div className="form form2 d-flex">
                    <li><i class="fa-solid fa-credit-card"></i></li>
                    <h4>Make Online Payment </h4>
                </div>
                <div className="form form3  d-flex">
                    <li><i class="fa-solid fa-headset"></i></li>
                    <h4>Executive will process Application </h4>
                </div>
                <div className="form form4 d-flex">
                    <li><i class="fa-solid fa-envelope"></i></li>
                    <h4>Get Confirm Mail </h4>
                </div>
            </div>


            {/* Bussiness cards */}

            <div className="business-all-cards">

                <div class="container ">
                    <div className="busy-text">
                        <p>EXPLORE OUR BLOG</p>
                        <h4>Accelerate Digital Transformation</h4>
                    </div>
                    <div className="business-section container">
                        <div className="business-row row">
                            <div className="business-section container col-4">
                                <div className="business-row row">
                                    <div class="business-card">
                                        <img src={assets.image1_img} alt="Business" />
                                        <div class="card-content">
                                            <p className="author">Prabhash Mishra • 1 Jan 2023 • Today </p>
                                            <h3>Small business & Startup</h3><li><i class="fa-solid fa-arrow-up"></i></li>
                                            <p>Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</p>
                                            <div class="tags d-flex">
                                                <div class="tag1" >Tax & Audit</div>
                                                <div class="tag2" >Management</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="business-section container col-4">
                                <div className="business-row row">
                                    <div class="business-card">
                                        <img src={assets.image2_img} alt="Business" />
                                        <div class="card-content">
                                            <p className="author">Prabhash Mishra • 1 Jan 2023 • Today </p>
                                            <h3>Small business & Startup</h3><li><i class="fa-solid fa-arrow-up"></i></li>
                                            <p>Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</p>
                                            <div class="tags d-flex">
                                                <div class="tag1" >Tax & Audit</div>
                                                <div class="tag2" >Management</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="business-section container col-4">
                                <div className="business-row row">
                                    <div class="business-card">
                                        <img src={assets.image1_img} alt="Business" />
                                        <div class="card-content">
                                            <p className="author">Prabhash Mishra • 1 Jan 2023 • Today </p>
                                            <h3>Small business & Startup</h3><li><i class="fa-solid fa-arrow-up"></i></li>
                                            <p>Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</p>
                                            <div class="tags d-flex">
                                                <div class="tag1" >Tax & Audit</div>
                                                <div class="tag2" >Management</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="business-section container col-4">
                                <div className="business-row row">
                                    <div class="business-card">
                                        <img src={assets.image4_img} alt="Business" />
                                        <div class="card-content">
                                            <p className="author">Prabhash Mishra • 1 Jan 2023 • Today </p>
                                            <h3>Small business & Startup</h3><li><i class="fa-solid fa-arrow-up"></i></li>
                                            <p>Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</p>
                                            <div class="tags d-flex">
                                                <div class="tag1" >Tax & Audit</div>
                                                <div class="tag2" >Management</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="business-section container col-4">
                                <div className="business-row row">
                                    <div class="business-card">
                                        <img src={assets.image5_img} alt="Business" />
                                        <div class="card-content">
                                            <p className="author">Prabhash Mishra • 1 Jan 2023 • Today </p>
                                            <h3>Small business & Startup</h3><li><i class="fa-solid fa-arrow-up"></i></li>
                                            <p>Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</p>
                                            <div class="tags d-flex">
                                                <div class="tag1" >Tax & Audit</div>
                                                <div class="tag2" >Management</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="business-section container col-4">
                                <div className="business-row row">
                                    <div class="business-card">
                                        <img src={assets.image6_img} alt="Business" />
                                        <div class="card-content">
                                            <p className="author">Prabhash Mishra • 1 Jan 2023 • Today </p>
                                            <h3>Small business & Startup</h3><li><i class="fa-solid fa-arrow-up"></i></li>
                                            <p>Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</p>
                                            <div class="tags d-flex">
                                                <div class="tag1" >Tax & Audit</div>
                                                <div class="tag2" >Management</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>




                        </div>
                        <div className="btn2 ">
                            <div className="btn show-more">
                                <button> Show more blogs <i class='bx bx-right-arrow-circle'></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* people say */}
            {/* <div className="people">
                <img src={assets.people_img} alt="people" />
            </div> */}
            <div className="client-view">
                <div className="people-say">
                    <div className="title-heading d-flex">
                        <div className="say-about">
                            <h6>What peoples says about us   </h6>
                        </div>
                        <div className="two-icon d-flex">
                            <div className="two-icons icons1">
                                <li><i class="fa-solid fa-angle-left"></i></li>
                            </div>
                            <div className="two-icons icons2">
                                <li><i class="fa-solid fa-angle-right"></i></li>
                            </div>
                        </div>
                    </div>
                    <div className="people-container">
                        <div className="people-row d-flex">
                            <div className="people-card1 col-4 ">
                                <div className="people-icon d-flex">
                                    <div className="quotes quotes1">
                                        <li><i class='bx bxs-quote-left'></i></li>
                                    </div>
                                    <div className="quotes">
                                        <ul >
                                            <li> <i class="fa-solid fa-star"></i></li>
                                            <li> <i class="fa-solid fa-star"></i></li>
                                            <li> <i class="fa-solid fa-star"></i></li>
                                            <li> <i class="fa-solid fa-star"></i></li>
                                            <li> <i class="fa-solid fa-star-half-stroke"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat aute irure sint
                                    amet occaecat cupidatat non proident ea commodo consequat
                                    aute irure sint amet occaecat cupidatat non proident</p>

                                <div className="people-id d-flex">
                                    <div className="people-img">
                                        <img src={assets.client_img} alt="client" loading="lazy" />
                                    </div>
                                    <div className="client-say">
                                        <h6>Chris</h6>
                                        <p>President and CEO, PrintReach, USA</p>
                                    </div>
                                </div>

                            </div>
                            <div className="people-card1 col-4">
                                <div className="people-icon d-flex">
                                    <div className="quotes quotes1">
                                        <li><i class='bx bxs-quote-left'></i></li>
                                    </div>
                                    <div className="quotes">
                                        <ul >
                                            <li> <i class="fa-solid fa-star"></i></li>
                                            <li> <i class="fa-solid fa-star"></i></li>
                                            <li> <i class="fa-solid fa-star"></i></li>
                                            <li> <i class="fa-solid fa-star"></i></li>
                                            <li> <i class="fa-solid fa-star-half-stroke"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat aute irure sint
                                    amet occaecat cupidatat non proident ea commodo consequat
                                    aute irure sint amet occaecat cupidatat non proident</p>

                                <div className="people-id d-flex">
                                    <div className="people-img">
                                        <img src={assets.client_img} alt="client" loading="lazy" />
                                    </div>
                                    <div className="client-say">
                                        <h6>Chris</h6>
                                        <p>President and CEO, PrintReach, USA</p>
                                    </div>
                                </div>

                            </div>
                            <div className="people-card1 col-4">
                                <div className="people-icon d-flex">
                                    <div className="quotes quotes1">
                                        <li><i class='bx bxs-quote-left'></i></li>
                                    </div>
                                    <div className="quotes">
                                        <ul >
                                            <li> <i class="fa-solid fa-star"></i></li>
                                            <li> <i class="fa-solid fa-star"></i></li>
                                            <li> <i class="fa-solid fa-star"></i></li>
                                            <li> <i class="fa-solid fa-star"></i></li>
                                            <li> <i class="fa-solid fa-star-half-stroke"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat aute irure sint
                                    amet occaecat cupidatat non proident ea commodo consequat
                                    aute irure sint amet occaecat cupidatat non proident</p>

                                <div className="people-id d-flex">
                                    <div className="people-img">
                                        <img src={assets.client_img} alt="client" loading="lazy" />
                                    </div>
                                    <div className="client-say">
                                        <h6>Chris</h6>
                                        <p>President and CEO, PrintReach, USA</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* faq */}

            <div class="que-container">
                <div className="busy-text ">
                    <p>FAQ</p>
                    <h4>Frequent Ask Questions</h4>
                </div>
                <div class="question d-flex">
                    <div className="faq"><p>Can I recover deleted files from desktop with this software?</p></div>
                    <div className="faq-icon"><li><i class="fa-solid fa-angle-right"></i></li></div>
                </div>
                <div class="question d-flex">
                    <div className="faq"><p>Can I recover deleted files from desktop with this software?</p></div>
                    <div className="faq-icon"><li><i class="fa-solid fa-angle-right"></i></li></div>
                </div>
                <div class="question d-flex">
                    <div className="faq"><p>Can I recover deleted files from desktop with this software?</p></div>
                    <div className="faq-icon"><li><i class="fa-solid fa-angle-right"></i></li></div>
                </div>
                <div class="question d-flex">
                    <div className="faq"><p>Can I recover deleted files from desktop with this software?</p></div>
                    <div className="faq-icon"><li><i class="fa-solid fa-angle-right"></i></li></div>
                </div>
                <div class="question d-flex">
                    <div className="faq"><p>Can I recover deleted files from desktop with this software?</p></div>
                    <div className="faq-icon"><li><i class="fa-solid fa-angle-right"></i></li></div>
                </div>

                <div className="btn2 ">
                    <div className="btn show-more">
                        <button> Show more <i class='bx bx-right-arrow-circle'></i></button>
                    </div>
                </div>
            </div>
            {/* mobile-app */}
            <div class="app-section d-flex">
                <div class="mobile-container">
                    <h2>Manage Your Services by your <br /> Mobile Phone</h2>
                    <p>Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress.</p>

                    <h6>Get the App</h6>
                    <div className="buttons d-flex">
                        <div className="app-btn d-flex">
                            <div className="app">
                                <i class="fa-brands fa-apple"></i>
                            </div>
                            <div className="store"><p>App Store</p>
                            </div>
                        </div>
                        <div className="app-btn d-flex">
                            <div className="app">
                                <i class="fa-brands fa-google-play"></i>
                            </div>
                            <div className="store"><p>Play Store</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="mobile_img">
                    <img src={assets.mobile_img} alt="" />
                </div>

            </div>

            {/* Number */}
            <div className="num-can">
                <div class="number-container">
                    <div className="busy-text ">
                        <p>WHY REGISTER KARO</p>
                        <h4>Some Numbers are important</h4>
                    </div>
                    <div className="number container">
                        <div className="number-row row">

                            <div className="customer col-2">
                                <h1>1M<sup>+</sup></h1>
                                <h6>  CUSTOMERS</h6>
                            </div>
                            <div className="customer customer-red col-2">
                                <h1>12<sup>+</sup></h1>
                                <h6>YEARS OF EXCELLENCE</h6>
                            </div>
                            <div className="customer col-2">
                                <h1>41<sup>+</sup></h1>
                                <h6>R&D ENGINEERS</h6>
                            </div>
                            <div className="customer col-2">
                                <h1>78<sup>+</sup></h1>
                                <h6>COUNTRIES</h6>
                            </div>
                            <div className="customer col-2">
                                <h1>3287<sup>+</sup></h1>
                                <h6>PARTNERS</h6>
                            </div>
                            <div className="customer col-2">
                                <h1>41<sup>+</sup></h1>
                                <h6>AWARDS RECEIVED</h6>
                            </div>



                        </div>

                    </div>


                </div>
            </div>
            {/* digital-search */}

            <div className="search-section">
                <div className="busy-text indrustry ">
                    <p>1% OF THE INDRUDTRY</p>
                    <h4>Welcome to your new digital reality. Now.</h4>
                    <div className="search_bar">
                        <div class="email-container">
                            <input type="email" placeholder="Enter Your Email" class="email-input" />
                            <button class="submit-btn">Submit</button>
                        </div>
                    </div>
                    <div class="feature-container d-flex">
                        <div class="feature-item">
                            <span2 class="check-icon">✔</span2>
                            <p> Instant results</p>
                        </div>
                        <div class="feature-item">
                            <span2 class="check-icon">✔</span2>
                            <p> User-friendly interface</p>
                        </div>
                        <div class="feature-item">
                            <span2 class="check-icon">✔</span2>
                            <p> Personalized customization</p>
                        </div>
                    </div>




                </div>


            </div>
            {/* ṣpotify */}
            <div className="trusted">
                <div className="trusted-company d-flex">
                    <div className="oracle"><img src={assets.company1_img} alt="image" loading="lazy" /></div>
                    <div className="Morpheus"><img src={assets.company2_img} alt="image" loading="lazy" /></div>
                    <div className="Morpheus"><img src={assets.company3_img} alt="image" loading="lazy" /></div>
                    <div className="samsung"><img src={assets.company4_img} alt="image" loading="lazy" /></div>
                    <div className="monday"><img src={assets.company5_img} alt="image" loading="lazy" /></div>
                    <div className="monday"><img src={assets.company6_img} alt="image" loading="lazy" /></div>
                </div>
            </div>
            {/* footer */}

            <div className="footer-can">
    <div className="footer-row d-flex">
        <div className="footer-para col-3">
            <p>Design outstanding interfaces
                with advanced Figma features in
                a matter of minutes</p>

            <div className="social-media">
                <ul className="d-flex">
                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-apple"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-google"></i></a></li>
                </ul>
            </div>
        </div>

        <div className="footer-head col-2">
            <h6>START A BUSINESS</h6>
            
                <p>Features</p>
                <p>Solutions</p>
                <p>Integrations</p>
                <p>Enterprise</p>
            
        </div>

        <div className="footer-head col-3">
            <h6>GOVERNMENT REGISTRATION</h6>
            
                <p>Partners</p>
                <p>Community</p>
                <p>Developers</p>
                <p>App</p>
                <p>Blog</p>
            
        </div>

        <div className="footer-head col-2">
            <h6>COMPLIANCE & TAX</h6>
            
                <p>Channels</p>
                <p>Scale</p>
                <p>Watch the Demo</p>
                <p>Our Competition</p>
            
        </div>
        <div className="footer-head col-2">
            <h6>BIS & CDSCO</h6>
            
                <p>About US</p>
                <p>News</p>
                <p>Leadership</p>
                <p>Media Kit</p>
        
        </div>
    </div>
    <div className="busy-text footer-text ">
                    <div className="footer-arrow">
                        <a href="#Home"><li><i class="fa-solid fa-arrow-up"></i></li></a>

                    </div>
                    <p>© 2024 Registerkaro. All Rights Reserved.</p>
                </div>


</div>






        </div >






    )
}
















export default Home;

