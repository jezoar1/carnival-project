import React,{ useEffect, useState }  from 'react'
import './Resultview.css';
import axios from 'axios';

function Resultview() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .post('http://localhost:4001/viewresult')
      .then((res) => {
        setResults(res.data.data);
      })
      .catch((err) => {
        console.error('Error fetching results:', err);
      });
  }, []);

  return (
    <div className="result-view-container">
      <h1 className="title">Event Results</h1>

      {results.length === 0 ? (
        <p className="no-results">No results available yet.</p>
      ) : (
        <table className="results-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              {/* <th>Event ID</th> */}
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r, index) => (
              <tr key={index}>
                <td>{r.name}</td>
                <td>{r.email}</td>
                {/* <td>{r.eventId}</td> If event name is not populated */}
                <td>{r.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default Resultview