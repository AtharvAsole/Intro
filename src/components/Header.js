import React from "react";

//Link
import { Link } from "react-scroll";

function refreshPage() {
  window.location.reload(false);
}

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div
          className='flex justify-between items-center
    '
        >
          {/* logo */}
          <a href='#'>
            {/* <img src={Logo} alt='' /> */}
            <div class='greeting' onClick={refreshPage}>
              <h1 className='text-accent'>I'M </h1>
              <br />
              <h1>ATHARV</h1>
            </div>
            {/* <script>document.getElementById("greeting").refreshPage();</script> */}
          </a>

          <button className='btn btn-sm'>
            {" "}
            <Link to='contact' activeClass='active' smooth={true} spy={true}>
              Contact Me
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
