'use client';

import React, { useEffect } from "react";
import { projectNav, projectsData } from "./Data";
import WorkItems from "./WorkItems";

const Works = ({seeAll}: {seeAll: boolean}) => {
    const [item, setItem] = React.useState({ name: 'all' });
    const [projects, setProjects] = React.useState(projectsData);
    const [active, setActive] = React.useState(0);

    useEffect(() => {
        if (item.name === 'all') {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter(project => (project.category.toLowerCase() === item.name));
            setProjects(newProjects);
        }
    }, [item]);

    return (
        <div>
            <div className="work__filters">
                {projectNav.map((navItem, index) => (
                    <span key={index} className={`${active === index && 'active__work'} work__item`} onClick={() => { setActive(index); setItem({ name: navItem.name.toLowerCase() }); }}>{navItem.name}</span>
                ))}
            </div>
            <div className="work__container container grid">
                {projects.map(item => (
                    <WorkItems key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default Works;

