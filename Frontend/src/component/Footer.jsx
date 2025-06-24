import React from 'react';

export default function Footer() {
  return (
    <>
      <div className="mt-6">
        <hr></hr>
        <footer className="bg-base-200 text-base-content rounded dark:bg-slate-900 dark:text-white p-10 flex flex-col items-center gap-4">

          {/* First Line - Navigation Links */}
          <nav className="flex gap-4 flex-wrap justify-center">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>

          {/* Second Line - Social Media Icons */}
          <nav className="flex gap-6 justify-center">
            <a href="#">
              {/* Twitter Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-blue-500">
                <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482A13.978 13.978 0 0 1 1.671 3.149a4.822 4.822 0 0 0-.666 2.475 4.92 4.92 0 0 0 2.188 4.1A4.903 4.903 0 0 1 .964 9.1v.061a4.927 4.927 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.212.084 4.928 4.928 0 0 0 4.6 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.496 14.01-13.986 0-.213-.004-.425-.013-.636A10.025 10.025 0 0 0 24 4.557z"/>
              </svg>
            </a>

            <a href="#">
              {/* YouTube Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-red-600">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.487 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 16v-8l8 4-8 4z"/>
              </svg>
            </a>

            <a href="#">
              {/* Facebook Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-blue-700">
                <path d="M9 8H6v4h3v12h5V12h3.642l.358-4H14V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/>
              </svg>
            </a>
          </nav>

          {/* Third Line - Copyright */}
          <aside className="text-center mt-2">
            <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
          </aside>

        </footer>
      </div>
    </>
  );
}
