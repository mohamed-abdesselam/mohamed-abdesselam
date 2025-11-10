import { projectsData } from "../../../components/work/Data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import "./../../../components/work/work.css";

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
                className="work__button mb-2"
            >
                <i className="bx bx-arrow-back work__button-icon"></i>
                <span className="">Back to works</span>
            </Link>

            <div className="grid gap-8 grid-cols-1">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={1200}
                        height={600}
                        className="w-full h-auto block"
                    />
                </div>

                <div>
                    <h1 className="text-4xl font-semibold mb-6">
                        {project.title}
                    </h1>

                    <p className="text-lg leading-relaxed max-w-3xl" >
                        {project.description}
                    </p>
                </div>
            </div>
        </div>
    );
}
