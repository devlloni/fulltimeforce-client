import React, { useState } from 'react';

import FullTimeForceLogo from '../../assets/fulltimeforce-logo.svg';

const Navbar = () => {


    const [menuToggled, setMenuToggled] = useState(true);

    const onClickMenuButton = (e) => {
        e.preventDefault();
        if (menuToggled) setMenuToggled(false);
        else setMenuToggled(true);
    }

    return (
        // <nav className="bg-gray-100">
        //     <div className="max-w-6xl mx-auto px-4">
        //         <div className="flex justify-between">

        //             <div className="flex space-x-4">
        //                 <div>
        //                     <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
        //                         {/* <svg className="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        //                         </svg> */}
        //                         <img className="h-6 w-6 mr-1 text-blue-400" src={FullTimeForceLogo} />
        //                         <span className="font-bold">CommitsInfo</span>
        //                     </a>
        //                 </div>

        //                 <div className="hidden md:flex items-center space-x-1">
        //                     <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Features</a>
        //                     <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Pricing</a>
        //                 </div>
        //             </div>

        //             <div className="hidden md:flex items-center space-x-1">
        //                 <a href="" className="py-5 px-3">Login</a>
        //                 <a href="" className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Signup</a>
        //             </div>

        //             <div className="md:hidden flex items-center">
        //                 <button onClick={onClickMenuButton} className="mobile-menu-button">
        //                     <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        //                     </svg>
        //                 </button>
        //             </div>

        //         </div>
        //     </div>

        //     <div className={menuToggled ? `mobile-menu hidden md:hidden` : `mobile-menu md:hidden`}>
        //         <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
        //         <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
        //     </div>
        // </nav>
        <nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      {/* <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div> */}
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-center">
          <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Github API" />
          <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Github API" />
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
           <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Inicio</a>

            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Repositorio</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="sm:hidden" id="mobile-menu">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Inicio</a>

      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Repositorio</a>
    </div>
  </div>
</nav>
    )
};

export default Navbar;