import * as React from "react";
import "./Intro.scss";

export default function Intro({ num }) {
    return (
        <section className="intro">
            <div className="container">
                <div className="intro__content">
                    <p className="intro__content__text">
                        Intro ipsum dolor sit amet consectetur, adipisicing
                        elit. Quam harum officia nesciunt nobis quibusdam
                        placeat aliquam repellat temporibus distinctio
                        molestiae, ea nemo iusto facilis necessitatibus commodi
                        ipsa veritatis corporis reiciendis.
                    </p>
                    <p>{num ** 2}</p>
                </div>
            </div>
        </section>
    );
}
