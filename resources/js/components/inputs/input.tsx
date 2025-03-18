interface inputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
}

const Input: React.FC<inputProps> = ({ id, label, type = 'text', disabled, required }) => {
    return (
        <div className="relative w-full">
            <input
                id={id}
                disabled={disabled}
                placeholder=" "
                autoComplete="off"
                type={type}
                className={`peer w-full rounded-md border-2 bg-white p-3 pt-6 font-light transition outline-none focus:border-black disabled:cursor-not-allowed disabled:opacity-70`}
            />
            <label
                className={`text-md absolute top-5 left-4 z-10 origin-[0] -translate-y-3 transform duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75`}
            >
                {label}
            </label>
        </div>
    );
};

export default Input;
