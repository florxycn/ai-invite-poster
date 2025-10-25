import { motion } from 'framer-motion'

export default function Poster() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-8 py-12">

      {/* Header row */}
      <div className="w-full max-w-5xl flex justify-between items-center mb-12">
        {/* 左上角 Bosch logo */}
        <img
          src="/Bosch_symbol_logo_white.svg"
          alt="Bosch Logo"
          className="h-12"
        />

        {/* 右上角 Bosch Digital_ */}
        <h2 className="text-xl font-semibold" style={{ color: '#007bc0' }}>
          Bosch Digital_
        </h2>
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-6"
      >
        Let AI Become Your Invisible Assistant
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-2xl md:text-3xl text-center mb-10"
        style={{ color: '#9e2896' }}
      >
        From Information to Insights
      </motion.h2>

      {/* Description */}
      <p className="max-w-3xl text-center text-gray-300 mb-12 leading-relaxed">
        In today’s world of information overload, AI can help us see more in less time —
        turning complexity into clarity.
        Join this exclusive session to explore how AI transforms meetings and decision-making
        through <span style={{ color: '#007bc0' }} className="font-semibold">Kuse AI</span>,{' '}
        <span style={{ color: '#9e2896' }} className="font-semibold">NotebookLM</span>, and{' '}
        <span style={{ color: '#18837e' }} className="font-semibold">Microsoft Teams Premium</span>.
      </p>

      {/* Feature cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mb-14 w-full">

        <motion.div whileHover={{ scale: 1.05 }} className="rounded-2xl p-6 border" style={{ borderColor: '#007bc0' }}>
          <h3 className="font-bold text-lg mb-3" style={{ color: '#007bc0' }}>Kuse AI</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            A visual AI workspace that helps you organize, analyze,
            and present complex information on an interactive canvas.
          </p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="rounded-2xl p-6 border" style={{ borderColor: '#9e2896' }}>
          <h3 className="font-bold text-lg mb-3" style={{ color: '#9e2896' }}>NotebookLM</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            An AI-powered research assistant that summarizes and analyzes
            uploaded and web-sourced materials for faster insights.
          </p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="rounded-2xl p-6 border" style={{ borderColor: '#18837e' }}>
          <h3 className="font-bold text-lg mb-3" style={{ color: '#18837e' }}>Teams Premium</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Enhanced security, intelligence, and Bosch-branded meeting experience
            for executive-grade collaboration.
          </p>
        </motion.div>

      </div>

      {/* Session info / CTA */}
      <div className="text-center">
        <p className="font-semibold mb-2" style={{ color: '#00884a' }}>
          Duration: 1 Hour
        </p>
        <p className="text-gray-300 mb-1">
          Speaker: LIU Xin (BD/SLP-CO1)
        </p>
        <p className="text-gray-400 text-sm mb-8">
          AI &amp; Intelligent Collaboration for Executive Management
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="text-white px-6 py-3 rounded-full font-semibold tracking-wide"
          style={{ backgroundColor: '#9e2896' }}
        >
          Join the Session
        </motion.button>
      </div>
    </div>
  )
}
