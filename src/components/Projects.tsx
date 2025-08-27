import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'E-commerce Platform(Proximamente)',
      description: 'Plataforma de comercio electrónico completa desarrollada con React y Node.js. Incluye carrito de compras, sistema de pagos y panel de administración.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB'],
      demoUrl: 'https://tu-ecommerce-demo.vercel.app', 
      githubUrl: 'https://github.com/tuusuario/ecommerce-platform', 
      delay: 0.1
    },
    {
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con drag & drop, calendarios interactivos.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Firebase', 'Material-UI'],
      demoUrl: 'https://task-managment-coral.vercel.app/', 
      githubUrl: 'https://github.com/Ubaldo2004/TaskManagment', 
      delay: 0.2
    },
    {
      title: 'Data Analytics Dashboard(Proximamente)',
      description: 'Dashboard interactivo para visualización de datos con gráficos dinámicos, filtros avanzados y exportación de reportes en múltiples formatos.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Django', 'Chart.js'],
      demoUrl: 'https://tu-dashboard-demo.herokuapp.com', 
      githubUrl: 'https://github.com/tuusuario/analytics-dashboard',
      delay: 0.3
    },
    {
      title: 'Mobile Banking App(Proximamente)',
      description: 'Aplicación bancaria móvil con autenticación biométrica, transferencias instantáneas y notificaciones push para transacciones.',
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Java', 'PostgreSQL'],
      demoUrl: 'https://tu-banking-demo.surge.sh', 
      githubUrl: 'https://github.com/tuusuario/banking-app', 
      delay: 0.4
    }
  ];

  return (
    <section className="py-20 bg-slate-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes y significativos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: project.delay }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {/* 👇 Botón de Demo con link real */}
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    <span>Ver Demo</span>
                  </a>
                  
                  {/* 👇 Botón de GitHub con link real */}
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 border border-slate-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span>Código</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;