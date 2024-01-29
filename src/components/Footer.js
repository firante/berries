import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="app-footer">
        <div className="footer-content">
          <p>Contact Us:</p>
          <p>
            <i className="fa-regular fa-address-book"></i>
            <span>Some address</span>
          </p>
          <p>
            <i className="fa-solid fa-mobile"></i>
            <a href="tel:+380936468345">+380936468345</a>
          </p>
          <p>
            <i className="fa-regular fa-envelope"></i>
            <a href="mailto:emai@gmail.com">email.gmail.com</a>
          </p>
          <p>
            <i className="fa-brands fa-facebook"></i>
            <a target="_blank" href="https://www.facebook.com/blab.r.2023">
              https://www.facebook.com/blab.r.2023
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
