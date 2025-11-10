import "./work.css";
import Works from "./Works";
import Link from "next/link";

const Work = ({ seeAll }: { seeAll: boolean }) => {
    return (
        <section className="section work" id="portfolio">
            <h2 className="section__title">My Portfolio</h2>
            <div className="flex justify-center">
                {seeAll ?
                    <span className="section__subtitle">Recent Works</span> :
                    <Link href="/works" className="section__subtitle work__button">
                        See All <i className="bx bx-right-arrow-alt work__button-icon"></i>
                    </Link>
                }
            </div>
            <Works seeAll={seeAll} />
        </section>
    );
}

export default Work;

