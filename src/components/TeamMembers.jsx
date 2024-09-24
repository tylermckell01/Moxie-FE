export default function TeamMembers({ activeLeader }) {
  const teams = {
    leader1: ["team1member", "team1member", "team1member"],
    leader2: ["team2member", "team2member", "team2member"],
    leader3: ["team3member", "team3member", "team3member"],
    leader4: ["team4member", "team4member", "team4member"],
  };

  const renderTeam = () => {
    if (!activeLeader) return null;

    return (
      <div className="team-members">
        {teams[activeLeader].map((member, index) => (
          <div key={index}>{member}</div>
        ))}
      </div>
    );
  };

  return <div className="team-members-wrapper">{renderTeam()}</div>;
}
