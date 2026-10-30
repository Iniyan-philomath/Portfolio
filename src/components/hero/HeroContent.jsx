import { TypeAnimation } from "react-type-animation";
import HeroButtons from "./HeroButtons";

export default function HeroContent() {

    return (

        <div className="hero-content">

            <p className="hero-greeting">

                👋 Hello, I'm

            </p>

            <h1 className="hero-name">

                INIYAN P

            </h1>

            <div className="hero-typewriter">

                <TypeAnimation

                    sequence={[

                        "Embedded Systems Engineer", 2000,

                        "IoT Developer", 2000,

                        "AI & Robotics Enthusiast", 2000,

                        "Automotive Technology Learner", 2000,

                        "Firmware Developer", 2000

                    ]}

                    wrapper="span"

                    speed={45}

                    repeat={Infinity}

                />

            </div>

            <p className="hero-description">

                Passionate engineering student specializing in Embedded Systems,
                Internet of Things, Artificial Intelligence, Robotics, and
                Automotive Technologies.

                <br /><br />

                I enjoy designing intelligent embedded products by combining
                electronics, firmware, AI, and cloud technologies to solve
                real-world engineering challenges.

            </p>

            <HeroButtons />

        </div>

    );

}