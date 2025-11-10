import React from "react";
import SkillsData from "./SkillsData";

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend developer</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <SkillsData name="Node Js" level="Intermediate" />
                    <SkillsData name="Mongoo" level="Intermediate" />
                    <SkillsData name="Express" level="Intermediate" />
                </div>
                <div className="skills__group">
                    <SkillsData name="PHP" level="Intermediate" />
                    <SkillsData name="MySQL" level="Basic" />
                    <SkillsData name="Python" level="Intermediate" />
                </div>
            </div>
        </div>
    );
}

export default Backend;

