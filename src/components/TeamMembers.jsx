export default function TeamMembers({ activeLeader }) {
  const teams = {
    Andrew: ["Raegan", "Harmony", "Baby-boy", "Rachel"],
    leader2: ["team2member", "team2member", "team2member"],
    leader3: ["team3member", "team3member", "team3member"],
    leader4: ["team4member", "team4member", "team4member"],
  };

  if (!activeLeader) return null;

  return (
    <div className="team-members-container">
      <div className="team-leader">{activeLeader}'s team</div>
      <div className="team-members-wrapper">
        {teams[activeLeader].map((member, index) => (
          <div key={index} className="team-member">
            {member}
          </div>
        ))}
      </div>
    </div>
  );
}
