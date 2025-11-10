'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectDetail } from "./Data";

interface WorkItemsProps {
    item: ProjectDetail;
}

const WorkItems = ({ item }: WorkItemsProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const firstVideo = item.videos && item.videos.length > 0 ? item.videos[0] : null;

    return (
        <div className="work__card" key={item.id}>
            <div
                className="work__image-container"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Image 
                    src={item.image} 
                    alt="" 
                    className={`work__img ${isHovered && firstVideo ? 'work__img--hidden' : ''}`} 
                    width={295} 
                    height={200} 
                />
                {firstVideo && (
                    <video
                        src={firstVideo}
                        className={`work__video ${isHovered ? 'work__video--visible' : ''}`}
                        autoPlay
                        loop
                        muted
                        playsInline
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    />
                )}
            </div>
            <h3 className="work__title">{item.title}</h3>
            <Link href={`/works/${item.link}`} className="work__button">
                See more <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </Link>
        </div>
    );
}

export default WorkItems;

