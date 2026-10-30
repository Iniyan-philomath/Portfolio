import { motion } from "framer-motion";
import { Download, FolderOpen } from "lucide-react";

export default function HeroButtons() {

    return (

        <div className="hero-buttons">

            <motion.a

                href="/resume/Iniyan_Resume.pdf"
                download

                whileHover={{
                    scale: 1.05,
                    y: -3
                }}

                whileTap={{
                    scale: 0.95
                }}

                className="btn-primary"

            >

                <Download size={20} />

                Download Resume

            </motion.a>

            <motion.a

                href="#projects"

                whileHover={{
                    scale: 1.05,
                    y: -3
                }}

                whileTap={{
                    scale: 0.95
                }}

                className="btn-secondary"

            >

                <FolderOpen size={20} />

                View Projects

            </motion.a>

        </div>

    );

}