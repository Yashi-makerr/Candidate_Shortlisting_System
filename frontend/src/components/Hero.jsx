import { motion } from "framer-motion";

function Hero() {

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 20
      }}

      animate={{
        opacity: 1,
        y: 0
      }}

      className="mb-10"
    >

      <h1 className="
      text-5xl
      font-bold
      leading-tight
      ">

        AI-Powered

        <span className="text-cyan-400">
          {" "}Complaint{" "}
        </span>

        Management System

      </h1>

      <p className="
      text-slate-400
      mt-4
      max-w-2xl
      ">

        Register, track and analyze
        public complaints intelligently
        using Artificial Intelligence.

      </p>

    </motion.div>
  );
}

export default Hero;