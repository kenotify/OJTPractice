import './Footer.css'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
            <p><a href="https://www.facebook.com/profile.php?id=100057210141024" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>&copy; {new Date().getFullYear()} SCL DURA.</a>.</p>
                <p><strong>Contacts Us:</strong> (088) 233-2824/ 09204437505/ 09204437505</p>
                <p><strong>Email:</strong> scldura@gmail.com</p>
            </div>
        </footer>
    );
};

export default Footer;
