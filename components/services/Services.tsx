'use client';

import React from "react";
import "./services.css";
import ServiceContainer from "./ServiceContainer";

const Services = () => {
    const [toggleState, setToggleState] = React.useState('');

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>
            <div className="services__container container grid">
                <ServiceContainer toggleState={toggleState} setToggleState={setToggleState} title="Product " icon="web-grid" modalTitle="Product Designer" />
                <ServiceContainer toggleState={toggleState} setToggleState={setToggleState} title="Ui/Ux " icon="arrow" modalTitle="Ui/Ux Designer" />
                <ServiceContainer toggleState={toggleState} setToggleState={setToggleState} title="Visual " icon="edit" modalTitle="Visual Designer" />
            </div>
        </section>
    );
}

export default Services;

