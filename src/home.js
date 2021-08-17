import HeadSection from "./headSection"
import Services from "./services"
import Blog from "./blog"
import Contact from "./contact"

const Home = ()=>{

    return(
        <div>
            <HeadSection></HeadSection>
            <Services></Services>
            <Blog></Blog>
            <Contact></Contact>
        </div>
    )
}

export default Home