import React, {useEffect} from "react";
import AOS from "aos";
import banner from "../images/banner.png";
import people from "../images/people.png";
import lovely from "../images/lovely.png";
import cup from "../images/cup.png";
import gallery1 from "../images/IMG_2387 (1) 1.png";
import gallery2 from "../images/IMG_2391 1.png";
import gallery3 from "../images/IMG_2526 1.png";
import Navigation from "./Navigation";
import { Link } from "react-router-dom"


export default function Home() {

    useEffect(() => {
        AOS.init()

        AOS.refresh()
    })

    return (
        <>
            <Navigation />

            <section className="banner">
                <img src={banner} alt="jezreel foundation banner" />
                <div className="background"></div>
                <div className="banner-text">
                    <h1>Creating hope for the broken</h1>
                </div>
            </section>

            <section>
                <div className="text">
                    <div className="text-content">
                        <h1>Welcome to Jezreel Foundation</h1>
                        <p>Jezreel foundation is a Nigerian self-funded organisation, creating hope for
                            the broken by ridding the world of hopelessness by sharing love and kindness brought
                            to light from scriptures Hosea 2:21-24
                        </p>
                    </div>
                </div>
            </section>

            <section className="cards">
                <div className="card-header">
                    <h1>Why we do what we do</h1>
                </div>

                <div className="card-body">
                    <div data-aos="fade-up" data-aos-duration="1500" className="card">
                        <div className="card-img">
                            <img src={people} alt="jezreel story-image" />
                        </div>
                        <div className="card-info">
                            <h2>Our story</h2>
                            <p>We are a foundation that has come to existence to cater to the well being of others and put a smile on the faces of people by expressing the love of christ to those around us.</p>
                        </div>
                    </div>

                    <div data-aos="fade-down"  data-aos-duration="2000"className="card">
                        <div className="card-img">
                            <img src={lovely} alt="jezreel vision-image" />
                        </div>
                        <div className="card-info">
                            <h2>Our Vision</h2>
                            <p>We aim to create hope for those that are broken and in need of the love christ has offered to us asindividuals on earth and to get rid the world of hopelessness and help share love, kindness thereby impacting lives everyday.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-img">
                            <img src={cup} alt="jezreel mission-image" />
                        </div>
                        <div className="card-info">
                            <h2>Our mission</h2>
                            <p>to be a reputable and recognized organization around the world known for ts pursuit in planting seeds of love, hope and kindness of many in need of them</p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="gallery">
                <div className="gallery-header">
                    <h1>Our Gallery</h1>
                </div>
                <div className="gallery-body">
                    <div className="items">
                        <div className="item">
                            <img src={gallery3} alt="jezreel gallery" />
                        </div>
                        <div className="item">
                            <img src={gallery2} alt="jezreel gallery" />
                        </div>
                        <div className="item">
                            <img src={gallery1} alt="jezreel gallery" />
                        </div>
                    </div>
                </div>
                <div className="gallery-button">
                    <Link to="/gallery">
                        <button className="ctn">Browse through our gallery</button>
                    </Link>
                </div>
            </section>

            <section className="registration">
                <div className="registration-text">
                    <h1>Save one <br /> more child</h1>
                    <p>With your help we can give up to one more child <br />
                        To get started please send us a message telling us how you'd love  to assist us
                    </p> <br />
                    <p className="blue">
                        You can donate cash,clothe,food,house supplied,scholarship and so on.
                    </p>
                </div>
                <div className="registration-form">
                    <form action="">
                        <input type="text" placeholder="Full name" />
                        <input type="text" placeholder="Email address" />
                        <textarea name="" id="" cols="50" rows="10"></textarea>
                    </form>
                </div>
            </section>

        </>

    )
}