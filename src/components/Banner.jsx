import heroBg from '../assets/bg-shadow.png';
import bannerImg from '../assets/banner-main.png'

const Banner = ({ addCoins }) => {
  return (
    <div className="bg-gray-800 bg-hero-pattern bg-cover bg-center text-white rounded-3xl mb-16 mx-5" style={{backgroundImage:`url(${heroBg})`}}>
      <div className=" bg-opacity-60 flex items-center justify-center py-10">
        <div className="text-center space-y-4 flex flex-col justify-center items-center">
            <img src={bannerImg} alt="" />
          <h1 className="text-3xl font-bold p-1">Assemble Your Ultimate Super Squad Cricket Team</h1>
          <p className="text-lg">Beyond Boundaries, Beyond Limits</p>
          <div className='p-2 rounded-xl border border-yellow-500'>
          <button onClick={addCoins} className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold text-lg transition duration-250 ease-in-out hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 animate-pulse">
            Claim Free Credit
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;