import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-10"
    >
      <h1 className="text-5xl font-bold leading-tight">
        AI-Powered Candidate
        <span className="text-cyan-400"> Shortlisting </span>
        Platform
      </h1>

      <p className="text-slate-400 mt-4 max-w-2xl">
        Analyze, rank and shortlist candidates intelligently using AI.
      </p>
    </motion.div>
  );
}

export default Hero;