import React from "react";
import { useState } from "react";

import TeamMembers from "../components/TeamMembers";

export default function Header() {
  const [activeLeader, setActiveLeader] = useState(null);

  return (
    <div>
      <div className="header-wrapper">
        <div className="leader">
          <button onClick={() => setActiveLeader("leader1")}>leader1</button>
        </div>
        <div className="leader">
          <button onClick={() => setActiveLeader("leader2")}>leader2</button>
        </div>
        <div className="leader">
          <button onClick={() => setActiveLeader("leader3")}>leader3</button>
        </div>
        <div className="leader">
          <button onClick={() => setActiveLeader("leader4")}>leader4</button>
        </div>
      </div>
      <TeamMembers activeLeader={activeLeader} />
    </div>
  );
}
