import { IconType } from 'react-icons';

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, outline, small, icon: Icon }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`translation relative w-full cursor-pointer rounded-lg font-bold transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 ${outline ? 'bg-white' : 'bg-rose-600'} ${outline ? 'border-black' : 'border-rose-600'} ${outline ? 'text-black' : 'text-white'} ${small ? 'py-1' : 'py-3'} ${small ? 'text-sm' : 'text-md'} ${small ? 'font-light' : 'font-semibold'} ${small ? 'border-[1px]' : 'border-1'} `}
        >
            {Icon && <Icon size={24} className="absolute top-3 left-4" />}
            {label}
        </button>
    );
};

export default Button;
