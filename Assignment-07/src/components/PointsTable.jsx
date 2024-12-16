import React, { useEffect, useState } from "react";

const PointsTable = () => {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log("API Response:", data); // Debugging: Log the fetched data

        // Sort data by NRR and format it
        const sortedData = data
          .map((team, index) => ({
            rank: index + 1,
            team: team.Team, // Ensure this key matches the API
            matches: team.Matches,
            wins: team.Won,
            losses: team.Lost,
            tied: 0, // Hardcoded as 'Tied' is missing in API
            nrr: team.NRR?.toFixed(3), // Ensure NRR exists
            points: team.Points,
          })).sort((a, b) => a.nrr - b.nrr);

        setTeams(sortedData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data. Please try again later.");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div style={{ color: "red", textAlign: "center" }}>{error}</div>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center" }}>IPL Season 2022 Points</h2>
      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        style={{
          width: "100%",
          textAlign: "center",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th>No</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.rank}>
              <td>{team.rank}</td>
              <td>{team.team}</td>
              <td>{team.matches}</td>
              <td>{team.wins}</td>
              <td>{team.losses}</td>
              <td>{team.tied}</td>
              <td>{team.nrr}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PointsTable;
