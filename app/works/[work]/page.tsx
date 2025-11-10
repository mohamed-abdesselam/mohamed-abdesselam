import { projectsData } from "../../../components/work/Data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import "./../../../components/work/work.css";
import ProjectImageHover from "./ProjectImageHover";

export default async function Page({ params }: { params: Promise<{ work: string }> }) {
    const { work } = await params;
    const project = projectsData.find(p => p.link === work);

    if (!project) {
        notFound();
    }

    return (
        <div className="container section">
            <Link
                href="/works"
                className="work__button"
                style={{ marginBottom: 'var(--mb-2)' }}
            >
                <i className="bx bx-arrow-back work__button-icon"></i>
                <span>Back to projects</span>
            </Link>

            <div className="project-detail__container">
                {/* Main Content */}
                <div className="project-detail__content">
                    {/* Main Image */}
                    <ProjectImageHover
                        image={project.image}
                        title={project.title}
                        videos={project.videos}
                    />

                    {/* Title and Description */}
                    <div className="project-detail__header">
                        <h1 className="project-detail__title">
                            {project.title}
                        </h1>
                        <p className="project-detail__description">
                            {project.description}
                        </p>
                    </div>

                    {/* Content Sections */}
                    {project.sections && project.sections.length > 0 && (
                        <div className="project-detail__sections">
                            {project.sections.map((section, index) => (
                                <div key={index} className="project-section">
                                    <h2 className="project-section__title">
                                        {section.title}
                                    </h2>
                                    {section.type === 'list' && Array.isArray(section.content) ? (
                                        <ul className="project-section__list">
                                            {section.content.map((item, itemIndex) => (
                                                <li key={itemIndex} className="project-section__item">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="project-section__text">
                                            {section.content}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Additional Images Gallery */}
                    {project.additionalImages && project.additionalImages.length > 0 && (
                        <div className="project-gallery">
                            <h2 className="project-gallery__title">
                                Image Gallery
                            </h2>
                            <div className="project-gallery__grid">
                                {project.additionalImages.map((img, index) => (
                                    <div key={index} className="project-gallery__item">
                                        <Image
                                            src={img}
                                            alt={`${project.title} - Image ${index + 1}`}
                                            width={600}
                                            height={400}
                                            className="project-gallery__img"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Video (YouTube embed) */}
                    {project.video && (
                        <div className="project-video">
                            <h2 className="project-video__title">
                                Demo Video
                            </h2>
                            <div className="project-video__container">
                                <iframe
                                    src={project.video}
                                    title={`${project.title} - Video`}
                                    className="project-video__iframe"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    )}

                    {/* Videos (Local video files) */}
                    {project.videos && project.videos.length > 0 && (
                        <div className="project-videos">
                            <h2 className="project-video__title">
                                Demo Videos
                            </h2>
                            <div className="project-videos__container">
                                {project.videos.map((video, index) => (
                                    <div key={index} className="project-video__item">
                                        <video
                                            controls
                                            className="project-video__video"
                                            preload="metadata"
                                        >
                                            <source src={video} type="video/x-matroska" />
                                            <source src={video} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <div className="project-detail__sidebar">
                    {/* Technologies */}
                    {project.technologies && project.technologies.length > 0 && (
                        <div className="project-sidebar__card">
                            <h3 className="project-sidebar__title">
                                Technologies
                            </h3>
                            <div className="project-sidebar__tags">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="project-sidebar__tag"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Download Button */}
                    {project.downloadLink && (
                        <div className="project-sidebar__card project-sidebar__card--download">
                            <h3 className="project-sidebar__title project-sidebar__title--white">
                                Download Project
                            </h3>
                            <a
                                href={project.downloadLink}
                                download
                                className="download-button"
                            >
                                <i className="bx bx-download download-button__icon"></i>
                                <span>Download Project</span>
                            </a>
                        </div>
                    )}

                    {/* Project Information */}
                    <div className="project-sidebar__card">
                        <h3 className="project-sidebar__title">
                            Information
                        </h3>
                        <div className="project-sidebar__info">
                            <div className="project-sidebar__info-item">
                                <span className="project-sidebar__info-label">Category: </span>
                                <span className="project-sidebar__info-value">{project.category}</span>
                            </div>
                            <div className="project-sidebar__info-item">
                                <span className="project-sidebar__info-label">ID: </span>
                                <span className="project-sidebar__info-value">#{project.id}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
