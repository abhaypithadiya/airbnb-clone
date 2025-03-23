import { useInitials } from '@/hooks/use-initials';
import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';

const Avatar = () => {
    const { auth } = usePage<SharedData>().props;
    const getInitials = useInitials();

    return auth?.user ? (
        <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black font-bold text-white">
            {getInitials(auth.user.first_name)}
        </div>
    ) : (
        <img src="../../assets/avatar-placeholder.webp" className="rounded-full" height={30} width={30} alt="Avatar" />
    );
};

export default Avatar;
