import Navbar from "./navbar"
import MapContainer from "./map"
import './css/home.css'


const Home = ()=>{

    return(
        <div>
            {/* <HeadSection></HeadSection>
            <Services></Services>
            <Blog></Blog>
            <Contact></Contact> */}

            {/* header */}
            <div className="headSection">
                <Navbar></Navbar>
                <div className="header">
                    <div className="headText">
                        <h1 className='headTitle'>
                            We live for Jesus alone
                        </h1>
                        <p className="headContent">
                            For God so loved the world that he gave his only begotten son, that whoever belives in him will not be dystroyed but they will have life abudantly
                        </p>
                        <a className="headBtn" href='/address'>Visit Us</a>
                    </div>
                    <div className="headImage">
                        <img src="./images/model.jpg" alt="woman smiling" />
                    </div>
                </div>
            </div>


            {/* Service section */}
            <div className="servicesSection">
                <h2 className="headTitle">Our Weekly services</h2>

                <div className="serviceContainer">

                    <div className="service">
                        <h3 className="serviceTitle">Sunday service</h3>
                        <p className="serviceDescription">
                            we come before the God weekly to worship him and dicipher his mind weekly
                        </p>
                        <div className="serviceDateTime">
                            <small className="date">Day: Every Tuesday</small>
                            <small className="serviceTime">Time: 10:00 to 13:00</small>
                        </div>
                    </div>

                    <div className="service">
                        <h3 className="serviceTitle">Sunday service</h3>
                        <p className="serviceDescription">
                            we come before the God weekly to worship him and dicipher his mind weekly
                        </p>
                        <div className="serviceDateTime">
                            <small className="date">Day: Every Tuesday</small>
                            <small className="serviceTime">Time: 10:00 to 13:00</small>
                        </div>
                    </div>

                    <div className="service">
                        <h3 className="serviceTitle">Sunday service</h3>
                        <p className="serviceDescription">
                            we come before the God weekly to worship him and dicipher his mind weekly
                        </p>
                        <div className="serviceDateTime">
                            <small className="date">Day: Every Tuesday</small>
                            <small className="serviceTime">Time: 10:00 to 13:00</small>
                        </div>
                    </div>

                    <div className="service">
                        <h3 className="serviceTitle">Sunday service</h3>
                        <p className="serviceDescription">
                            we come before the God weekly to worship him and dicipher his mind weekly
                        </p>
                        <div className="serviceDateTime">
                            <small className="date">Day: Every Tuesday</small>
                            <small className="serviceTime">Time: 10:00 to 13:00</small>
                        </div>
                    </div>

                    <div className="service">
                        <h3 className="serviceTitle">Sunday service</h3>
                        <p className="serviceDescription">
                            we come before the God weekly to worship him and dicipher his mind weekly
                        </p>
                        <div className="serviceDateTime">
                            <small className="date">Day: Every Tuesday</small>
                            <small className="serviceTime">Time: 10:00 to 13:00</small>
                        </div>
                    </div>


                </div>
            
            </div>


            {/* Blog section */}
            <div className="blogSection container">
                <h2 className="headTitle">Overcomers Arena blog</h2>
                <div className="blog">
                    <div className="featuredContent">
                        <div className="blogImage">
                            <img src="./images/blog/bible.jpg" alt=""/>
                        </div>
                        <div className="blogSummary">
                            <h3 className="blogTitle">
                                The Overcomers
                            </h3>
                            <small>jul 26, 2021 | Pastor Rhoda</small>
                        </div>
                    </div>

                    <div className="blogItem">
                        <div className="blogImage">
                            <img src="./images/blog/cross.jpg" alt=""/>
                        </div>
                        <div className="blogSummary">
                            <h3 className="blogTitle">
                            The heartbeat of a ready writer
                            </h3>
                            <small>jul 26, 2021 | Pastor Rhoda</small>
                        </div>
                    </div>

                    <div className="blogItem">
                        <div className="blogImage">
                            <img src="./images/blog/choir.jpg" alt=""/>
                        </div>
                        <div className="blogSummary">
                            <h3 className="blogTitle">
                            The heartbeat of a ready writer
                            </h3>
                            <small>jul 26, 2021 | Pastor Rhoda</small>
                        </div>
                    </div>

                    <div className="blogItem">
                        <div className="blogImage">
                            <img src="./images/blog/cross.jpg" alt=""/>
                        </div>
                        <div className="blogSummary">
                            <h3 className="blogTitle">
                            The heartbeat of a ready writer
                            </h3>
                            <small>jul 26, 2021 | Pastor Rhoda</small>
                        </div>
                    </div>

                    <div className="blogItem">
                        <div className="blogImage">
                            <img src="./images/blog/holycommunion.jpg" alt=""/>
                        </div>
                        <div className="blogSummary">
                            <h3 className="blogTitle">
                            The heartbeat of a ready writer
                            </h3>
                            <small>jul 26, 2021 | Pastor Rhoda</small>
                        </div>
                    </div>

                </div>
            </div>


            {/* Map and contact section */}
            
            <div className = "mapANDcontact">
                <div className="contactSection container">
                <h2 headTitle>Contact Us</h2>
                    <div className="contactInfo">
                        
                        <p className="address">
                            Address: Ruukinkuja 4, <br /> Espoo, <br /> Finland.
                        </p>
                        <a href="mailto:overcomersarena@gmail.com">Email: overcomersarena@gmail.com</a>
                        <br />
                        <a href="tel:+358000999000">Mobile num: +358000999000</a>
                        <br />
                        <div className="socialMedia">
                            <span className="youtube"></span>
                            <span className="facebook"></span>
                        </div>
                        
                    </div>

                    <div className="contactForm">
                        <form action="" className="contact">

                            <div className="identificationInfo">
                                <div className="field ">
                                    <label htmlFor="name">Full name</label>
                                    <input type="text" name="name" id="name" />
                                </div>

                                <div className="field ">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" />
                                </div>
                            </div>

                            <div className="field">
                                <label htmlFor="message">Your message</label>
                                <textarea name="message" id="message" rows="10"></textarea>
                            </div>

                        </form>
                    </div>
                </div>
                <div className="mapSection">

                    <MapContainer></MapContainer>

                </div>
            </div>



        </div>
    )
}

export default Home