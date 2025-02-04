import './Footer.css'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} SCL DURA.</p> <p><strong>Contacts Us:</strong> (088) 233-2824/ 09204437505/ 09204437505</p>
                <p><strong>EMAIL:</strong> scldura@gmail.com</p>
            </div>
        </footer>
    );
};

export default Footer;
