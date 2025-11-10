import React from "react";

interface InfoProps {
    title: string;
    subtitle: string;
    icon: string;
}

const Info = (props: InfoProps) => {
    return (
        <div className="about__box">
            <i className={`bx bx-${props.icon} about-icon`}></i>
            <h3 className="about__title">{props.title}</h3>
            <span className="about__subtitle">{props.subtitle}</span>
        </div>
    );
}

export default Info;

