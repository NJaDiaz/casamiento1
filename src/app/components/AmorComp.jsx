import { motion } from 'framer-motion';

const AmorComp = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-auto p-8 bg-[#eee5c5]">
      {/* Texto sobre el amor */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 p-6"
      >
        <blockquote className="text-xl md:text-2xl font-semibold text-gray-800">
        El amor no es un sentimiento que se siente, es una decisión, un juicio y un compromiso.
        </blockquote>
        <cite className="block mt-4 text-right text-gray-500">-Erich Fromm, El arte de amar </cite>
      </motion.div>

      {/* Imagen del lado derecho */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 h-auto relative"
      >
        <img
          src="./img/Anillo.jpg"
          alt="Imagen de una pareja"
          className="w-full h-auto max-w-full max-h-full object-cover rounded-md shadow-lg "
        />
      </motion.div>
    </div>
  );
};

export default AmorComp;
