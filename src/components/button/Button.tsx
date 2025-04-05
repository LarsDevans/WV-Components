import { motion } from 'framer-motion';
import { ButtonProps } from '../../types/interactables';

export const Button = ({
  color = 'primary',
  disabled = false,
  icon = undefined,
  label = '',
  shadow = false,
  type = 'button',
  onClick = () => {}
}: ButtonProps) => {
  const bgColorClass = color === 'primary' ? 'bg-primary' : 'bg-secondary';

  return (
    <motion.button
      className={`
        ${bgColorClass} ${shadow ? 'shadow-md' : ''}
        flex gap-2.5 py-1.5 px-4 rounded-lg
        text-white font-light
        cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed
      `}
      disabled={disabled}
      type={type}
      onClick={onClick}
      transition={{ duration: 0.3 }}
      whileHover={{ opacity: disabled ? 0.3 : 0.8 }}
    >
      {icon} {label}
    </motion.button>
  );
};
