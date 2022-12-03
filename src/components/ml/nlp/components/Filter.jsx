const Filter = ({ newsData, setDate }) => {
  const dates = Object.keys(newsData)
  dates.sort()

  return (
    <div>
      {dates.map((d, i) => (
        <button key={i} onClick={(e) => setDate(e.target.innerHTML)}>
          {d}
        </button>
      ))}
    </div>
  )
}
export default Filter
