'use client';

import React from "react";
import "./services.css";
import Service from "./Service";

interface ServiceContainerProps {
    toggleState: string;
    setToggleState: (state: string) => void;
    title: string;
    icon: string;
    modalTitle: string;
}

const ServiceContainer = (props: ServiceContainerProps) => {
    return (
        <div className="services__content">
            <div>
                <i className={"uil uil-" + props.icon + " services__icon"}></i>
                <h3 className="services__title">{props.title}<br />Designer</h3>
            </div>
            <span className="services__button" onClick={() => props.setToggleState(props.title)}>
                View More
                <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div className={props.title === props.toggleState ? "services__modal active__modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close" onClick={() => props.setToggleState('')}></i>
                    <h3 className="services__modal-title">{props.modalTitle}</h3>
                    <p className="services__modal-description">Service with more than 3 years of experience.Providing quality work to clients and companies.</p>
                    <ul className="services__modal-services">
                        <Service info="I develop the user interface." />
                        <Service info="Web page development." />
                        <Service info="I create ux element interactions." />
                        <Service info="I position your company brand." />
                        <Service info="Design and mockups of products for companies." />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ServiceContainer;

