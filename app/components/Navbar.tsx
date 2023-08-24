import React from 'react';
import {logo} from '../assets';
import Image from 'next/image';


function Navbar() {
    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
          <Image src={logo} alt="lorem" className="w-[124px] h-[32px]" />
        </nav>
      );
    
}

export default Navbar;