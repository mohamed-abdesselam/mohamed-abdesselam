import React from "react";

interface ServiceProps {
    info: string;
}

const Service = (props: ServiceProps) => {
    return (
        <li className="services__modal-service">
            <i className="uil uil-check-circle services__modal-icon"></i>
            <p className="services__modal-info">{props.info}</p>
        </li>
    );
}

export default Service;

