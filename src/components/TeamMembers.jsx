import { useState } from "react";

export default function TeamMembers({ activeLeader }) {
  const teams = {
    leader1: [
      {
        name: "Andrew",
        regionals: [
          {
            name: "Regional1",
            area_manager: [
              {
                name: "Area Manager 1",
                reps: ["Rep1", "Rep2"],
              },
              {
                name: "Area Manager 2",
                reps: ["Rep3", "Rep4"],
              },
            ],
          },
          {
            name: "Regional2",
            area_manager: [
              {
                name: "Area Manager 3",
                reps: ["Rep5", "Rep6"],
              },
            ],
          },
        ],
      },
    ],
  };

  const [addingRegional, setAddingRegional] = useState(false);
  const [newRegional, setNewRegional] = useState("");
  const [updatedRegionalList, setUpdatedRegionalList] = useState(null);

  // const teams = {
  //   Andrew: ["Regional1", "Regional2", "Regional3", "Regional4", "Regional5"],
  //   leader2: ["team2member", "team2member", "team2member"],
  //   leader3: ["team3member", "team3member", "team3member"],
  //   leader4: ["team4member", "team4member", "team4member"],
  // };

  const renderRegionals = (regionals) => {
    return (
      <div>
        {regionals.map((regional, index) => (
          <div key={index} className="team-member">
            {regional.name}
            {renderAreaManagers(regional.area_manager)}
          </div>
        ))}
      </div>
    );
  };

  const renderAreaManagers = (areaManagers) => {
    return (
      <div>
        {areaManagers.map((areaManager, index) => (
          <div key={index} className="team-member">
            {areaManager.name}
            {renderReps(areaManager.reps)}
          </div>
        ))}
      </div>
    );
  };

  const renderReps = (reps) => {
    return (
      <div>
        {reps.map((rep, index) => (
          <div key={index} className="team-member">
            {rep.name}
          </div>
        ))}
      </div>
    );
  };

  const handleAdd = () => {
    if (!newRegional) return;

    const currentTeamList = updatedRegionalList
      ? updatedRegionalList[activeLeader]
      : teams[activeLeader];

    const updatedList = currentTeamList.concat(newRegional);

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
        {/* {(updatedRegionalList
          ? updatedRegionalList[activeLeader]
          : teams[activeLeader]
        ).map((member, index) => (
          <div key={index} className="team-member" onClick={renderReps}>
            {member}
          </div>
        ))} */}

        {updatedRegionalList
          ? renderRegionals(updatedRegionalList[activeLeader][0].regionals)
          : renderRegionals(teams[activeLeader][0].regionals)}

        {addingRegional ? (
          <div>
            <input
              type="text"
              value={newRegional}
              onChange={(e) => setNewRegional(e.target.value)}
              placeholder="Enter new Regional"
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
