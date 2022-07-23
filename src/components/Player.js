import "./Player.css";

const Player = (props) => {
  return (
    <div className="player">
      <div className="hands"></div>
      <button>Hit</button>
      <button>Stay</button>
    </div>
  );
};

export default Player;
