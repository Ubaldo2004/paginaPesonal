import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ubaldo Mario Jose Sanchez
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Desarrollador Front-End con conocimientos en React, HTML, CSS y JavaScript. Experiencia en Python y C. Capacidad para crear interfaces web interactivas y comprender lógica de programación y estructuras de datos
          </motion.p>

          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="https://github.com/Ubaldo2004" 
              className="p-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors duration-300 hover:scale-110 transform"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/ubaldo-sanchez-8939a5291/" 
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 hover:scale-110 transform"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:sanchesubaldo3@gmail.com" 
              className="p-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
              <a 
              href="/CV.pdf"
              download="UbaldoSanchez_cv.pdf"
              className="p-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors duration-300 hover:scale-110 transform"
            >
              <Download size={24} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-slate-400 rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;