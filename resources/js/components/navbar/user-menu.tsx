import useRegisterModal from '@/hooks/use-register-modal';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from './avatar';
import UserMenuItem from './user-menu-item';

const UserMenu: React.FC = () => {
    const registerModal = useRegisterModal();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={menuRef}>
            <div className="flex flex-row items-center">
                <div className="hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 md:block">
                    Airbnb your home
                </div>
                <div
                    onClick={toggleOpen}
                    className="flex cursor-pointer flex-row items-center gap-3 rounded-full border-[1px] border-neutral-200 p-3 transition hover:shadow-md md:px-3 md:py-2"
                >
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar />
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="absolute top-16 right-0 z-10 w-[60vw] overflow-hidden rounded-xl bg-white text-sm shadow-xl md:w-4/4">
                    <div className="flex flex-col py-2">
                        <UserMenuItem onClick={registerModal.onOpen} label="Sign Up" />
                        <UserMenuItem onClick={registerModal.onOpen} label="Login" />
                        <hr />
                        <UserMenuItem onClick={() => {}} label="Airbnb your home" />
                        <UserMenuItem onClick={() => {}} label="Host an experience" />
                        <UserMenuItem onClick={() => {}} label="Help Center" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
