
import './About.css';

const About = () => {
    return (
        <div className="about-container d-flex flex-column align-items-center justify-content-start min-vh-100 p-0">
            <div className="about-content flex-row d-flex justify-content-center align-items-start pt-2">
                <div className="about-header d-flex flex-column align-items-start justify-content-center">
                    <h1 className="title display-3 border-bottom  border-black border-success border-opacity-100"><strong>About SCL</strong></h1>
                    <p className="lead p-1">Welcome to the About Page. Here you can learn more about our application and team.</p>
                </div>
                    <img src="no-image.svg" className="image rounded" alt="no-image.svg"/>  
        </div>
            <span className="border-bottom border-black border-success m-2 border-opacity-100 w-50"></span>
        <div className="additional-info d-flex flex-column align-items-center justify-content-center">
            <h2 className="subtitle display-4">Our Mission</h2>
            <p className="text">Our mission is to provide the best service possible.</p>
        </div>
    </div>
    )
}

export default About;