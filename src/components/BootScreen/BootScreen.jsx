import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const bootLines = [
  "Powering Engineering Portfolio...",
  "Initializing Embedded Kernel...",
  "Loading STM32 Drivers..............OK",
  "Loading ESP32 Drivers..............OK",
  "Checking AI Engine..................OK",
  "Connecting IoT Network..............OK",
  "Loading Robotics Module.............OK",
  "Loading Certificates Database.......OK",
  "Loading Engineering Projects........OK",
  "Starting Embedded Dashboard.........OK",
  "",
  "Welcome Iniyan P"
];

export default function BootScreen() {

  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {

    let index = 0;

    const interval = setInterval(() => {

      setVisibleLines((prev) => [...prev, bootLines[index]]);

      index++;

      if (index >= bootLines.length) {
        clearInterval(interval);
      }

    }, 350);

    return () => clearInterval(interval);

  }, []);

  return (

    <div
      style={{
        background: "#050816",
        color: "#00E5FF",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "JetBrains Mono",
        overflow: "hidden"
      }}
    >

      <motion.div

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        transition={{ duration: 1 }}

        style={{
          width: "900px",
          maxWidth: "90%"
        }}
      >

        <h1
          style={{
            color: "white",
            fontSize: "40px",
            marginBottom: "30px"
          }}
        >
          EMBEDDED LAB OS v1.0
        </h1>

        {

          visibleLines.map((line, index) => (

            <motion.p

              key={index}

              initial={{
                opacity: 0,
                x: -20
              }}

              animate={{
                opacity: 1,
                x: 0
              }}

              transition={{
                duration: 0.25
              }}

              style={{
                fontSize: "18px",
                marginBottom: "10px",
                color:
                  line.includes("Welcome")
                    ? "#64FFDA"
                    : "#00E5FF"
              }}
            >
              {">"} {line}
            </motion.p>

          ))

        }

      </motion.div>

    </div>

  );

}