import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

import "./hero.css";

export default function Hero() {

    return (

        <section className="hero">

            <HeroBackground />

            <div className="hero-container">

                <div className="hero-left">

                    <HeroContent />

                </div>

                <div className="hero-right">

                    <HeroImage />

                </div>

            </div>

        </section>

    );

}