import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import playerData from './data/players.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Players from './components/Players';
import TransactionHistoryModal from './components/TransactionHistoryModal';

function App() {
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [players, setPlayers] = useState([]);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  useEffect(() => {
    setPlayers(playerData);
  }, []);

  const addCoins = () => {
    const amount = 100000;
    setCoins(coins + amount);
    toast.success("100,000 coins added to your balance!");
    setTransactionHistory([...transactionHistory, { type: 'add', amount, timestamp: new Date() }]);
  };

  const selectPlayer = (player) => {
    if (selectedPlayers.length >= 6) {
      toast.error("You cannot select more than 6 players!");
      return;
    }
    if (selectedPlayers.find((p) => p.playerId === player.playerId)) {
      toast.error("Player already selected!");
      return;
    }
    if (coins < player.biddingPrice) {
      toast.error("Not enough coins!");
      return;
    }
    setCoins(coins - player.biddingPrice);
    setSelectedPlayers([...selectedPlayers, player]);
    toast.success(`${player.name} added to your team!`);
    setTransactionHistory([...transactionHistory, { type: 'spend', amount: player.biddingPrice, player, timestamp: new Date() }]);
  };

  const removePlayer = (playerId, balance) => {
    const updatedPlayers = selectedPlayers.filter((player) => player.playerId !== playerId);
    setSelectedPlayers(updatedPlayers);
    setCoins(coins + balance);
    setTransactionHistory([...transactionHistory, { type: 'refund', amount: balance, timestamp: new Date() }]);
  };

  return (
    <>
      <Navbar coins={coins} />
      <div className="App container mx-auto">
        <Banner addCoins={addCoins} />
        <div className='flex justify-center mb-2 md:justify-end items-end'>
          <button
            onClick={() => setIsHistoryOpen(true)}
            className="mt-4 bg-yellow-400 text-black px-3 py-2 rounded-lg hover:bg-yellow-500"
          >
            View Transaction History
          </button>
        </div>
        <TransactionHistoryModal
          isOpen={isHistoryOpen}
          onClose={() => setIsHistoryOpen(false)}
          transactionHistory={transactionHistory}
        />
        <div className="main-section">
          <Players players={players} selectPlayer={selectPlayer} selectedPlayers={selectedPlayers} removePlayer={removePlayer} />
        </div>
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
}

export default App;
