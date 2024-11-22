
import footerLogo from '../assets/logo-footer.png';
import Newsletter from './Newsletter';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const ownerName = "Tusher Bhakta";
    return (
        <footer className="bg-gray-900 text-white py-10 mt-40 px-4 relative">
            <div className='absolute top-[-20%] left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-5'>
                <Newsletter />
            </div>
            <div className="flex justify-center mt-52 md:mt-36 mb-4">
                <img src={footerLogo} alt="Footer Logo" className="h-44" />
            </div>
            <div className='container mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold mb-4">About Us</h3>
                    <p className="text-gray-400 text-sm">We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                <div className="w-full">
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition">Services</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                    </ul>
                </div>
                <div className="w-full mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
                    <p className="text-gray-400 text-sm">Subscribe to our newsletter for the latest updates.</p>
                    <div className="flex flex-col xl:flex-row gap-2 mt-3">
                        <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-lg md:rounded-l-lg outline-none text-black" />
                        <button className="bg-yellow-400 px-4 py-2 rounded-lg md:rounded-r-lg text-black hover:bg-yellow-500">Subscribe</button>
                    </div>
                </div>
            </div>
            <hr className="border-gray-700 my-6" />
            <div className="text-center mt-4 ">
            <p className="text-sm font-thin">
                &copy; {currentYear} {ownerName}. All Rights Reserved
            </p>
            </div>
        </footer>
    );
};

export default Footer;
