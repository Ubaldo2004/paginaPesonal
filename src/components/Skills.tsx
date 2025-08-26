import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Database, Coffee, Zap } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      name: 'React',
      icon: <Code className="w-8 h-8" />,
      description: 'Desarrollo de aplicaciones web modernas con hooks y componentes funcionales',
      color: 'bg-blue-500',
      delay: 0.1
    },
    {
      name: 'HTML/CSS',
      icon: <Palette className="w-8 h-8" />,
      description: 'Maquetación responsive y estilos modernos con CSS3 y frameworks',
      color: 'bg-orange-500',
      delay: 0.2
    },
    {
      name: 'Python',
      icon: <Zap className="w-8 h-8" />,
      description: 'Backend development, automatización y análisis de datos',
      color: 'bg-green-500',
      delay: 0.3
    },
    {
      name: 'JavaScript',
      icon: <Coffee className="w-8 h-8" />,
      description: 'Aplicaciones empresariales y programación orientada a objetos',
      color: 'bg-red-500',
      delay: 0.4
    },
    {
      name: 'C',
      icon: <Database className="w-8 h-8" />,
      description: 'Programación de sistemas y algoritmos de alto rendimiento',
      color: 'bg-purple-500',
      delay: 0.5
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
            Habilidades Técnicas
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tecnologías y lenguajes con los que trabajo para crear soluciones innovadoras
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0, 
                scale: 1 
              } : { 
                opacity: 0, 
                y: 50, 
                scale: 0.9 
              }}
              transition={{ 
                duration: 0.6, 
                delay: skill.delay,
                ease: "easeOut" 
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-slate-100"
            >
              <div className={`${skill.color} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-6 mx-auto`}>
                {skill.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-slate-900 text-center mb-4">
                {skill.name}
              </h3>
              
              <p className="text-slate-600 text-center leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;