import { motion } from 'framer-motion';
import { ButtonProps } from '../../types/interactables';

export const Button = ({
  color = 'primary',
  disabled = false,
  icon = undefined,
  label = '',
  outlined = false,
  shadow = false,
  type = 'button',
  onClick = () => {}
}: ButtonProps) => {
  const isPrimary = color === 'primary';

  const baseClasses = `
    ${shadow ? 'shadow-md' : ''}
    flex gap-2.5 justify-center px-4 py-1.5 rounded-lg text-center
    cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed
  `;

  const colorClasses = outlined
    ? `${isPrimary ? 'border-primary text-primary' : 'border-secondary text-secondary'} border`
    : `${isPrimary ? 'bg-primary' : 'bg-secondary'} text-white`;

  const classList = `${baseClasses} ${colorClasses}`;

  return (
    <motion.button
      className={classList}
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
