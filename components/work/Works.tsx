'use client';

import React, { useEffect, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { projectNav, projectsData } from "./Data";
import WorkItems from "./WorkItems";

const Works = ({ seeAll }: { seeAll: boolean }) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const categoryParam = searchParams.get('category')?.toLowerCase() || 'all';

    // Find the active index based on category param
    const activeIndex = useMemo(() => {
        const index = projectNav.findIndex(nav => nav.name.toLowerCase() === categoryParam);
        return index >= 0 ? index : 0;
    }, [categoryParam]);

    const [item, setItem] = React.useState({ name: categoryParam });
    const [projects, setProjects] = React.useState(projectsData);
    const [active, setActive] = React.useState(activeIndex);

    // Update state when URL param changes
    useEffect(() => {
        const category = categoryParam;
        setItem({ name: category });
        setActive(activeIndex);
    }, [categoryParam, activeIndex]);

    // Filter projects based on category
    useEffect(() => {
        if (item.name === 'all') {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter(project => (project.category.toLowerCase() === item.name));
            setProjects(newProjects);
        }
    }, [item]);

    const handleCategoryClick = (navItem: { name: string }, index: number) => {
        const category = navItem.name.toLowerCase();
        setActive(index);
        setItem({ name: category });

        // Update URL with category parameter
        if (seeAll) {
            const params = new URLSearchParams(searchParams.toString());
            if (category === 'all') {
                params.delete('category');
            } else {
                params.set('category', category);
            }
            const newUrl = params.toString() ? `/works?${params.toString()}` : '/works';
            router.push(newUrl);
        }
    };

    return (
        <div>
            <div className="work__filters">
                {projectNav.map((navItem, index) => (
                    <span
                        key={index}
                        className={`${active === index && 'active__work'} work__item`}
                        onClick={() => handleCategoryClick(navItem, index)}
                    >
                        {navItem.name}
                    </span>
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

