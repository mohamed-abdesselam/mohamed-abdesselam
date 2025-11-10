import React from "react";
import SkillsData from "./SkillsData";

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend developer</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <SkillsData name="HTML" level="Basic" />
                    <SkillsData name="CSS" level="Advanced" />
                    <SkillsData name="JavaScript" level="Intermediate" />
                </div>
                <div className="skills__group">
                    <SkillsData name="React" level="Intermediate" />
                    <SkillsData name="Bootstrap" level="Intermediate" />
                    <SkillsData name="Git" level="Intermediate" />
                </div>
            </div>
        </div>
    );
}

export default Frontend;

