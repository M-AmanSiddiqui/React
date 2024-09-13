import Button from './Button'; // Assuming Button component exists

function Header({ header }) {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img 
            src={header.logo} // Using header.logo from prop
            className="h-10 w-20 rounded-full" 
            alt="logo" // Added alt attribute for accessibility
          />
          <span className="ml-3 text-xl">{header.title}</span> {/* Correctly using header.title */}
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Contact us</a>
          <a className="mr-5 hover:text-gray-900">About us</a>
        </nav>
        <Button label={"Login"} /> {/* Assuming Button component is imported correctly */}
      </div>
    </header>
  );
}

export default Header;
