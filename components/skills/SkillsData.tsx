import React from "react";

interface SkillsDataProps {
    name: string;
    level: string;
}

const SkillsData = (props: SkillsDataProps) => {
    return (
        <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
                <h3 className="skills__name">{props.name}</h3>
                <span className="skills__level">{props.level}</span>
            </div>
        </div>
    );
}

export default SkillsData;

