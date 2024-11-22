import { Checkout } from "./Checkout";
import { SelectedPlayerCard } from "./SelectedPlayerCard";


const SelectedPlayers = ({ selectedPlayers, removePlayer,setIsAvailablePlayer }) => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-8">
      <SelectedPlayerCard selectedPlayers={selectedPlayers} removePlayer= {removePlayer} setIsAvailablePlayer ={setIsAvailablePlayer}/>

      </div>
      <div className="col-span-12 md:col-span-4">
      <Checkout selectedPlayers={selectedPlayers} />
      </div>
    </div>
  );
};

export default SelectedPlayers;
