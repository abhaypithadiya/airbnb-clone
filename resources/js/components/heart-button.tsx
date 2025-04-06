import useRegisterModal from '@/hooks/use-register-modal';
import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface HeartButtonProps {
    id: number;
}

const HeartButton: React.FC<HeartButtonProps> = () => {
    const { auth } = usePage<SharedData>().props;
    const registerModal = useRegisterModal();

    const toggleFavorite = () => {
        if (auth.user) {
            console.log('auth');
        } else {
            registerModal.onOpen();
        }
    };

    return (
        <div onClick={toggleFavorite} className="relative cursor-pointer transition hover:opacity-80">
            <AiOutlineHeart size={28} className="absolute -top-[2px] -right-[2px] fill-white" />
            <AiFillHeart size={24} className="fill-neutral-500/70" />
        </div>
    );
};

export default HeartButton;
