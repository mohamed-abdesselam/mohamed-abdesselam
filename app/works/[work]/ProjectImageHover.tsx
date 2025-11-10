'use client';

import { useState } from "react";
import Image from "next/image";

interface ProjectImageHoverProps {
    image: string;
    title: string;
    videos?: string[];
}

export default function ProjectImageHover({ image, title, videos }: ProjectImageHoverProps) {
    const [isHovered, setIsHovered] = useState(false);
    const firstVideo = videos && videos.length > 0 ? videos[0] : null;

    return (
        <div
            className="project-detail__image"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image
                src={image}
                alt={title}
                width={1200}
                height={600}
                className={`project-detail__img ${isHovered && firstVideo ? 'project-detail__img--hidden' : ''}`}
            />
            {firstVideo && (
                <video
                    src={firstVideo}
                    className={`project-detail__video ${isHovered ? 'project-detail__video--visible' : ''}`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                />
            )}
        </div>
    );
}

