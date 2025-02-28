import React from "react";
import "./Home.css";
import { assets } from "../../assets/assets"

const Home = () => {
    return (
        <div className="hero-section">
            <div className="home-section">
                <div className="BannerContainer">

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
                    <div className="button d-flex">

                        <button className="expert">Talk An Expert</button><li><i class="fa-solid fa-circle-play"></i></li>
                        <button className="see"> See how it works</button>
                    </div>
                </div>
                <div className="center_img">
                    <img src={assets.hero_img} loading="lazy" alt="hero image" />
                </div>
                <div className="goal_img">
                    <img src={assets.goal_img} loading="lazy" alt="goal image" />
                </div>
                <div className="all-botton">
                    <ul>
                        <li>Annual Compliance</li>
                        <li>Payroll Services</li>
                        <li>Company Formation</li>
                        <li>Annual Compliance</li>
                    </ul>

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
                        <div className="redline"><img src={assets.card7_img} alt="" /></div>
                        <img src={assets.card1_img} alt="" />
                        <h5> Company Formation </h5>
                        <p> Build web-based solutions that
                            enhance customer experience.</p>
                        <button>Learn more <i class='bx bx-right-arrow-circle'></i></button>
                    </div>
                    <div className="cards lineCard col-4">
                        <div className="redlinedown"><img src={assets.card7_img} loading="lazy" alt="card" /></div>
                        <img src={assets.card1_img} loading="lazy" alt="card" />

                        <img src={assets.card2_img} loading="lazy" alt="card" />
                        <h5>  Company Secretarial Services </h5>
                        <p> Make data-driven decisions and
                            utilize technology to reach
                            business goals.</p>
                        <button>Learn more <i class='bx bx-right-arrow-circle'></i></button>
                    </div>
                    <div className="cards col-4">
                        <img src={assets.card3_img} loading="lazy" alt="card" />
                        <h5> Virtual Office Address</h5>
                        <p>  Foster customer relationships by
                            effectively serving your market.</p>
                        <button>Learn more <i class='bx bx-right-arrow-circle'></i></button>
                    </div>
                    <div className="cards col-4">
                        <div className="redline"><img src={assets.card7_img} alt="card" /></div>
                        <img src={assets.card1_img} loading="lazy" alt=" card" />

                        <img src={assets.card4_img} loading="lazy" alt="card" />
                        <h5> Annual Compliance Service </h5>
                        <p>Turn your ideas into modern
                            products with our design experts</p>
                        <button>Learn more <i class='bx bx-right-arrow-circle'></i></button>
                    </div>
                    <div className="cards lineCard col-4">
                        <div className="redlinedown"><img src={assets.card7_img}loading="lazy" alt="card" /></div>

                        <img src={assets.card5_img} loading="lazy" alt="card" />
                        <h5>  Payroll Services </h5>
                        <p>  Expand your business across the
                            globe with minimal effort</p>
                        <button>Learn more <i class='bx bx-right-arrow-circle'></i></button>
                    </div>
                    <div className="cards col-4">
                        <img src={assets.card6_img} loading="lazy" alt="card" />
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
                        <img src={assets.about_img} loading="lazy" alt="about img" />
                    </div>
                    <div className="side_img col-2 d-flex">
                        <div className="side1">
                            <img src={assets.side_img} loading="lazy" alt="" />
                        </div>
                        <div className="dot_img">
                            <img src={assets.dot_img} loading="lazy" alt="" />
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
                <img src={assets.happy_img} alt="" />
            </div>

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
                                        <img src={assets.business_img} alt="Business" />
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
                                        <img src={assets.business_img} alt="Business" />
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
                                        <img src={assets.business_img} alt="Business" />
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
                                        <img src={assets.business_img} alt="Business" />
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
                                        <img src={assets.business_img} alt="Business" />
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
                                        <img src={assets.business_img} alt="Business" />
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

            <div className="people">
                <img src={assets.people_img} loading="lazy" alt="people" />
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
                <div className="mobile">
                    <img src={assets.mobile_img} loading="lazy" alt="mobile" />
                </div>

            </div>






        </div>






    )
}
















export default Home;

