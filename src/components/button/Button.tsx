import { motion } from 'framer-motion';
import { ButtonProps } from '../../types/interactables';

export const Button = ({ label }: ButtonProps) => {
  return (
    <motion.button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {label}
    </motion.button>
  );
};
