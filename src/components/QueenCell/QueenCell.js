import "./QueenCell.css";

/**
 * A cell for the NQueen's board. The cell can display a queen icon and changes
 * appearance based on hover, click, and board position.
 *
 * @param {Object} props Component properties.
 * @param {boolean} props.isEven Determines if the cell is in an even position.
 * @param {boolean} props.isQueen Determines if the cell contains a queen.
 * @param {function} props.onMouseClick Called when the cell is clicked.
 * @returns {React.JSX.Element}
 */
function QueenCell({ isEven, isQueen, onMouseClick }) {
  return (
    <div
      role="cell"
      className={`board-cell ${isEven ? "even" : "odd"}`}
      onClick={onMouseClick}
    >
      {isQueen && <span className="board-queen">♛</span>}
    </div>
  );
}

export default QueenCell;
