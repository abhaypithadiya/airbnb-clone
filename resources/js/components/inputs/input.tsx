import { cn } from '@/lib/utils';

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
}

const Input: React.FC<inputProps> = ({ id, label, type = 'text', disabled, className, ...props }) => {
    return (
        <div className="relative w-full">
            <input
                id={id}
                disabled={disabled}
                placeholder=" "
                autoComplete="off"
                type={type}
                className={cn(
                    'peer w-full rounded-md border-1 bg-white p-3 pt-6 font-light transition outline-none focus:border-2 focus:border-black focus:bg-transparent disabled:cursor-not-allowed disabled:opacity-70',
                    className,
                )}
                {...props}
            />
            <label
                className={`text-md pointer-events-none absolute top-5 left-4 z-10 origin-[0] -translate-y-3 transform text-neutral-700 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75`}
            >
                {label}
            </label>
        </div>
    );
};

export default Input;
