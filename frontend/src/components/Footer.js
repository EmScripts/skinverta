// components/Footer.js
const Footer = () => {
    return (
      <footer className="bg-darkGrey text-lightGrey py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} SkinVerta. All rights reserved.</p>
          <div className="space-x-4">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  