import React from "react";
import Image from "next/image";
import Link from "next/link";

interface WorkItem {
    id: number;
    image: any;
    title: string;
    category: string;
    link: string;
}

interface WorkItemsProps {
    item: WorkItem;
}

const WorkItems = ({ item }: WorkItemsProps) => {
    return (
        <div className="work__card" key={item.id}>
            <Image src={item.image} alt="" className="work__img" width={295} height={200} />
            <h3 className="work__title">{item.title}</h3>
            <Link href={`/works/${item.link}`} className="work__button">
                See more <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </Link>
        </div>
    );
}

export default WorkItems;

