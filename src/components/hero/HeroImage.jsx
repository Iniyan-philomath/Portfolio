import { motion } from "framer-motion";

import {

    Award,

    Cpu,

    Microchip,

    GraduationCap,

    Trophy

} from "lucide-react";

export default function HeroImage() {

    return (

        <motion.div

            className="profile-card"

            initial={{
                opacity: 0,
                x: 80
            }}

            animate={{
                opacity: 1,
                x: 0
            }}

            transition={{
                duration: 1
            }}

            whileHover={{
                rotateY: 8,
                rotateX: -5,
                scale: 1.03
            }}

        >

            <div className="profile-glow"></div>

            <div className="profile-image">

                {/* Replace with your own image later */}

                <img

                    src="/images/profile.jpg"

                    alt="Iniyan"

                />

            </div>

            <h2>INIYAN P</h2>

            <p className="designation">

                Embedded AI Engineer

            </p>

            <div className="availability">

                <span className="online-dot"></span>

                Available for Internships

            </div>

            <div className="profile-achievements">

                <div>

                    <Award size={20} />

                    <span>IIT Bombay Merit</span>

                </div>

                <div>

                    <Trophy size={20} />

                    <span>1st Place - CIT</span>

                </div>

                <div>

                    <GraduationCap size={20} />

                    <span>NPTEL Elite</span>

                </div>

                <div>

                    <Cpu size={20} />

                    <span>Embedded Systems</span>

                </div>

                <div>

                    <Microchip size={20} />

                    <span>IoT & Robotics</span>

                </div>

            </div>

            <div className="mini-stats">

                <div>

                    <h3>25+</h3>

                    <p>Certificates</p>

                </div>

                <div>

                    <h3>8+</h3>

                    <p>Projects</p>

                </div>

                <div>

                    <h3>3+</h3>

                    <p>Awards</p>

                </div>

            </div>

        </motion.div>

    );

}