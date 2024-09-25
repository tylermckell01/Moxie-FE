import { useState } from "react";

export default function TeamMembers({ activeLeader }) {
  // const teams = {
  //   Andrew: [
  //     Regional1: [ "rep1", "rep2"],
  //     "Regional2",
  //     "Regional3",
  //     "Regional4",
  //     "Regional5",
  //     "Regional6",
  //   ],
  //   leader2: ["team2member", "team2member", "team2member"],
  //   leader3: ["team3member", "team3member", "team3member"],
  //   leader4: ["team4member", "team4member", "team4member"],
  // };

  const [addingRegional, setAddingRegional] = useState(false);

  const teams = {
    Andrew: [
      "Regional1",
      "Regional2",
      "Regional3",
      "Regional4",
      "Regional5",
      "Regional6",
    ],
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
        {addingRegional ? (
          <button onClick={setAddingRegional(!addingRegional)}>
            Add a Regional
          </button>
        ) : (
          <input type="text" />
        )}
      </div>
    </div>
  );
}
