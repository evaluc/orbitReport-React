const Table = ({ sat }) => {

  const satInfo = sat.map((satellite) => (
        <tr key={satellite.id}>
          <td>{satellite.name}</td>
          <td>{satellite.type}</td>
          <td>{satellite.launchDate}</td>
          <td>{satellite.operational ? "Active" : "Inactive"}</td>
        </tr>
  ));

  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
         {satInfo}
     </tbody>
   </table>
  );
};

export default Table;