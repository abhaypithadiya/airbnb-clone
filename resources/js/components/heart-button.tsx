import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface HeartButtonProps {
    id: number;
}

const HeartButton: React.FC<HeartButtonProps> = () => {
    return (
        <div className="relative cursor-pointer transition hover:opacity-80">
            <AiOutlineHeart size={28} className="absolute -top-[2px] -right-[2px] fill-white" />
            <AiFillHeart size={24} className="fill-neutral-500/70" />
        </div>
    );
};

export default HeartButton;
