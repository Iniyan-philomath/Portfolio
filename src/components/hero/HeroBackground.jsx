import { motion } from "framer-motion";

export default function HeroBackground() {

    const nodes = [];

    for (let i = 0; i < 35; i++) {

        nodes.push({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            delay: Math.random() * 3,
            duration: 3 + Math.random() * 4
        });

    }

    return (

        <div className="hero-bg">

            {/* PCB Grid */}

            <div className="pcb-grid"></div>

            {/* Circuit Lines */}

            <div className="circuit-horizontal"></div>

            <div className="circuit-vertical"></div>

            {/* Floating Nodes */}

            {

                nodes.map((node) => (

                    <motion.div

                        key={node.id}

                        className="node"

                        style={{
                            left: `${node.left}%`,
                            top: `${node.top}%`
                        }}

                        animate={{

                            y: [0, -12, 0],

                            opacity: [0.3, 1, 0.3],

                            scale: [1, 1.5, 1]

                        }}

                        transition={{

                            repeat: Infinity,

                            duration: node.duration,

                            delay: node.delay

                        }}

                    />

                ))

            }

            {/* Large Glow */}

            <div className="glow-left"></div>

            <div className="glow-right"></div>

        </div>

    );

}