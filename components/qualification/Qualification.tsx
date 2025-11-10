'use client';

import React from "react";
import "./qualification.css"
import QualificationData1 from "./QualificationData1";
import QualificationData2 from "./QualificationData2";

const Qualification = () => {
    const [toggleState, setToggleState] = React.useState('Education');

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 'Education' ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"} onClick={() => setToggleState('Education')}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>
                    <div className={toggleState === 'Experience' ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"} onClick={() => setToggleState('Experience')}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className={toggleState === 'Education' ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <QualificationData1 title="Web Developement" subtitle="Setif University" calendar="  2023 - Present" />
                        <QualificationData2 title="Art director" subtitle="Setif University" calendar="  2023 - 2023" />
                        <QualificationData1 title="Web Design" subtitle="Setif University" calendar="  2021 - 2023" />
                        <QualificationData2 title="UX Expert" subtitle="Setif University" calendar="  2020 - 2021" />
                    </div>

                    <div className={toggleState === 'Experience' ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <QualificationData1 title="Web Developer" subtitle="Microsoft - Algiers" calendar="  2023 - Present" />
                        <QualificationData2 title="UX Designer" subtitle="Apple Inc - Algiers" calendar="  2022 - 2023" />
                        <QualificationData1 title="Web Designer" subtitle="Figma - Algiers" calendar="  2020 - 2022" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Qualification;

