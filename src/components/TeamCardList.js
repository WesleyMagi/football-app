import React from "react";
import TeamCard from "./TeamCard";

function TeamListCard({ results }) {
    let data = [];
    if (results.data) {
        data = results.data.teams || [];
    }

    return(
        <div className="result">
            {data.map((item) => (
                <TeamCard key={item.id} team={item}/>
            ))}
            
        </div>
    )
}

export default TeamListCard;