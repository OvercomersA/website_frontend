import MapContainer from "./map"
import './css/contact.css'

const Contact = ()=>{
    return(
        <div>
            <div className="contactSection container">
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
    )
}


export default Contact