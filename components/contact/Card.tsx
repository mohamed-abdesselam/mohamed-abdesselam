import React from "react";

interface CardProps {
    title: string;
    data: string;
    icon: string;
    link: string;
}

const Card = (props: CardProps) => {
    return (
        <div className="contact__card">
            <i className={"bx bx" + props.icon + " contact__card-icon"}></i>
            <h3 className="contact__card-title">{props.title}</h3>
            <span className="contact__card-data">{props.data}</span>
            <a href={props.link} className="contact__button" target="_blank" rel="noopener noreferrer">
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
        </div>
    )
}

export default Card;

