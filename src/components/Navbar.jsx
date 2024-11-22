import logo from '../assets/logo.png'

const Navbar = ({ coins }) => {
  return (
    <nav className="container mx-auto flex justify-between items-center px-8 py-4 mb-16 text-gray-900 bg-white frosted sticky top-0 bg-opacity-90 z-50">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Cricket Logo" className="h-16" />
        <h1 className="text-xl font-bold hidden md:block">Super Squad</h1>
      </div>
      <div className='flex items-center gap-10'>
      <div className='flex items-center gap-8'>
      <ul className=" hidden md:flex space-x-6">
        <li className="hover:text-yellow-400 cursor-pointer">Home</li>
        <li className="hover:text-yellow-400 cursor-pointer">Fixture</li>
        <li className="hover:text-yellow-400 cursor-pointer">Teams</li>
        <li className="hover:text-yellow-400 cursor-pointer">Schedules</li>
      </ul>
      </div>
      <div className="bg-yellow-400 px-4 py-2 rounded-full text-black font-bold">
        {coins} Coins
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
