import React from 'react';
import { GiCricketBat, GiAlliedStar, GiGloves } from 'react-icons/gi';
import { FaUser, FaMoneyBillWave,FaBowlingBall,FaFlagCheckered } from 'react-icons/fa';
import { MdSportsCricket } from 'react-icons/md';


const PlayerCard = ({ player, selectPlayer }) => {
  const getRoleIcon = (role) => {
    switch (role) {
      case 'Batsman':
        return <GiCricketBat className="text-red-600 mr-2" />;
      case 'Bowler':
        return <FaBowlingBall className="text-blue-600 mr-2" />;
      case 'All-rounder':
        return <GiAlliedStar className="text-green-600 mr-2" />;
      case 'Wicketkeeper':
        return <GiGloves className="text-orange-600 mr-2" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-4 shadow-lg border rounded-lg overflow-hidden">
      <img src={player.imageURL} alt={player.name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <div className='flex justify-center items-center mb-2'>
        <h3 className="text-lg font-bold text-red-600 flex items-center">
          <FaUser className="mr-2" /> {player.name}
        </h3>
        </div>
        <p className="text-sm text-gray-700 flex items-center mb-1">
          <FaFlagCheckered className="mr-2" /> Country: {player.country}
        </p>
        <p className="text-sm text-gray-700 flex items-center mb-1">
          {getRoleIcon(player.role)}
          Role: {player.role}
        </p>
        <p className="text-sm text-gray-700 flex items-center mb-1">
          <MdSportsCricket className="mr-2" /> Batting Style: {player.battingStyle}
        </p>
        <p className="text-sm font-semibold text-sky-600 flex items-center">
          <FaMoneyBillWave className="mr-2" /> Bidding Price: {player.biddingPrice}
        </p>
        <button
          onClick={() => selectPlayer(player)}
          className="mt-4 bg-yellow-400 text-black px-3 py-2 rounded-lg hover:bg-yellow-500 w-full"
        >
          Choose Player
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
