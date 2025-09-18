import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'sanchesubaldo3@gmail.com',
      action: () => window.open('mailto:tu.email@ejemplo.com')
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Ubicación',
      value: 'Rosario, Argentina'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Teléfono',
      value: '+54 (341) 662 4457',
      action: () => window.open('tel:+54341662457')
    }
  ];

  return (
    <section className="py-20 bg-slate-900" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ¡Trabajemos Juntos!
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a hacerlas realidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`text-center ${info.action ? 'cursor-pointer hover:scale-105' : ''} transition-transform duration-200`}
              onClick={info.action}
            >
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                {info.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{info.label}</h3>
              <p className="text-slate-300">{info.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center space-y-6"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={() => window.open('mailto:sanchesubaldo3@gmail.com?subject=Hola!%20Me%20gustaría%20trabajar%20contigo')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Enviar Mensaje
            </motion.button>
            
            <motion.a
              href="/CV.pdf"
              download="UbaldoSanchez_cv.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-900 border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all duration-300 flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Descargar CV</span>
            </motion.a>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-slate-300 text-sm"
          >
            Descarga mi CV para conocer más detalles sobre mi experiencia y formación
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 pt-8 border-t border-slate-700"
        >
          <p className="text-slate-400">
            © 2024 Ubaldo Sanchez. Creado con ❤️ usando React y Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;