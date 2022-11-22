import './grid.css'

const Grid = ({ data, handleMouseDown, handleMouseUp, handleMouseMove }) => {
  return (
    <div className='grid-container'>
      {[...Array(28 * 28)].map((e, i) => {
        let classes = `cell-${i} cell`
        if (data[i] === 1) {
          classes += ' actived'
        }
        return (
          <div
            key={i}
            className={classes}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={() => handleMouseMove(i)}
          ></div>
        )
      })}
    </div>
  )
}
export default Grid
