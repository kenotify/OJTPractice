import './Portfolio.css';
import { IoHardwareChip } from "react-icons/io5";

const Portfolio = () => {
    return (
        <div className="portfolio-container d-flex flex-row align-items-start justify-content-start min-vh-100 p-5 pt-3">
            <div className="portfolio-content d-flex flex-column align-items-start justify-content-center flex-grow-3">  
                <div className="portfolio-title d-flex flex-column ">
                    <h1 className='scldura m-0'>SCL DURA</h1>
                    <p className='paragraph d-flex mt-0 just-content-start'>Welcome to the Portfolio Page. Here you can see our work and projects. We are the world we are the children  
                        We can make a better place for you and for me. We are the world we are the children. We can make a better place for you and for me.
                        sooo--oo let's start giving. There's a choice we're making. We're saving our own lives. It's true we'll make a better day just you and me.
                        sadasdlklkl;k;ll; lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div> 
                <div className='button-container d-flex flex-row justify-content-center pt-2 mb-4'>
                    <button className="portfolio-button d-flex flex-row justify-content-center">
                        Message
                    </button>
                    <button className="portfolio-button d-flex flex-row justify-content-center">
                        Call
                    </button>
                </div>
                <span className="border-bottom border-black border-success border-opacity-100 justify-self-start"></span>
                <div className="stats-container d-flex flex-row gap-3 mt-2">
                    <div className="portfolio-rate d-flex flex-column align-items-center m-2">
                        <p className='numbers'>100%</p>
                        <p className='word'>Satisfaction Rate</p>
                    </div>   
                    <div className="project-stats d-flex flex-column align-items-center m-2">
                        <p className='numbers'>50</p>
                        <p className='word'>Projects Created</p>
                    </div>
                </div>
            </div>
            <div className="icon-container d-flex flex-column align-items-center justify-content-center flex-grow-1">
                <span className='icon-item'>
                    <IoHardwareChip/>
                </span>
            </div>
        </div>
    );
}

export default Portfolio;