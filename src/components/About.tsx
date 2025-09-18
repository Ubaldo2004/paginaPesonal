import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Heart, Target } from 'lucide-react';
import miImagen from 'public/foto-mia.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: <User className="w-6 h-6" />,
      title: "Experiencia",
      description: "Proyectos prácticos desarrollados en React, HTML, CSS y JavaScript durante mi aprendizaje de Front-End"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Pasión",
      description: "Me encanta crear experiencias digitales únicas y aprender nuevas tecnologías constantemente crear experiencias digitales únicas"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Objetivo",
      description: "Transformar ideas en productos funcionales y seguir creciendo como desarrollador Front-End"
    }
  ];

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Sobre Mí
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Conoce un poco más sobre mi trayectoria y lo que me motiva
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
<div className="relative w-80 h-80 mx-auto lg:mx-0">
              {/* Placeholder for your photo - replace the src with your actual photo */}
<div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center border-4 border-white shadow-xl overflow-hidden">
  <img 
    src="/foto-mia.jpg" 
    alt="mi foto" 
    className="w-full h-full object-cover"
  />
</div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed mb-6">
                ¡Hola! Soy Ubaldo, estudiante de Ingeniería en Sistemas de Información desde 2023.
                Realicé un curso de Front-End el mismo año, donde aprendí a crear páginas web interactivas usando React, HTML, CSS y JavaScript.
                Tambien aprendi Programacion Orientada a Objetos y manejo de Archivos y Registros.
              </p>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                Tengo 21 años y una gran pasión por la tecnología y la programación.
                Me considero una persona que aprende rápido y trabaja muy bien en equipo, siempre dispuesta a enfrentar nuevos desafíos y aportar soluciones creativas.
              </p>

              <p className="text-slate-700 leading-relaxed">
                Además, tengo conocimientos en Python y C, lo que me permite combinar lógica de programación con desarrollo web.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center p-4 bg-slate-50 rounded-lg"
                >
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-3">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;