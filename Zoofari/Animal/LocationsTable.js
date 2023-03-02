export default function (props) {

  function createList(locations) {
    let ArrayOfList = locations.map(
      (location) => {
        return (
          <tr>
            <td>{location}</td>
          </tr>
        )
      }
    );

    return ArrayOfList;

  }

  return (
    <div className="col-md-6 text-light wow fadeIn" data-wow-delay="0.5s">
      <h1 className="display-6 text-white mb-5">Locations</h1>
      <table className="table">
        <tbody>

          {createList(props.locations || [])}

        </tbody>
      </table>
    </div>
  )
}