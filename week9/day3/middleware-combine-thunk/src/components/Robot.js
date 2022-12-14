const Robot = (props) => {
  const {robot} = props;

  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib shadow-5'>
      <img src={`http://robohash.org/${robot.id}?size=200x200`} />
      <h2>{robot.name}</h2>
      <h4>{robot.username}</h4>
      <p>{robot.email}</p>
    </div>
  )
}
export default Robot
