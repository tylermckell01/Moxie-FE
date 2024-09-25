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
  const [newRegional, setNewRegional] = useState("");
  const [updatedRegionalList, setUpdatedRegionalList] = useState(null);

  const teams = {
    Andrew: ["Regional1", "Regional2", "Regional3", "Regional4", "Regional5"],
    leader2: ["team2member", "team2member", "team2member"],
    leader3: ["team3member", "team3member", "team3member"],
    leader4: ["team4member", "team4member", "team4member"],
  };

  const handleAdd = () => {
    if (!newRegional) return;

    const updatedList = (updatedRegionalList || teams)[activeLeader].concat(
      newRegional
    );

    setUpdatedRegionalList({
      ...teams,
      [activeLeader]: updatedList,
    });

    setNewRegional("");
    setAddingRegional(false);
  };

  const handleCancel = () => {
    setNewRegional("");
    setAddingRegional(false);
  };

  if (!activeLeader) return null;
  return (
    <div className="team-members-container">
      <div className="team-leader">{activeLeader}'s team</div>
      <div className="team-members-wrapper">
        {(updatedRegionalList
          ? updatedRegionalList[activeLeader]
          : teams[activeLeader]
        ).map((member, index) => (
          <div key={index} className="team-member">
            {member}
          </div>
        ))}

        {addingRegional ? (
          <div>
            <input
              type="text"
              value={newRegional}
              onChange={(e) => setNewRegional(e.target.value)}
              placeholder="Enter new Regional"
              onSubmit={handleAdd}
            />
            <div>
              <button className="edit-button" onClick={handleAdd}>
                Save
              </button>
              <button className="edit-button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button onClick={() => setAddingRegional(true)}>
            Add a Regional
          </button>
        )}
      </div>
    </div>
  );
}
