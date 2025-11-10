import React from "react";

interface QualificationData1Props {
    title: string;
    subtitle: string;
    calendar: string;
}

const QualificationData1 = (props: QualificationData1Props) => {
    return (
        <div className="qualification__data">
            <div>
                <h3 className="qualification__title">{props.title}</h3>
                <span className="qualification__subtitle">{props.subtitle}</span>
                <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>{props.calendar}
                </div>
            </div>
            <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
            </div>
        </div>
    );
}

export default QualificationData1;

