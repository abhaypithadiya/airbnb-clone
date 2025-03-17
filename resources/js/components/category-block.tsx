import { router } from '@inertiajs/react';
import { IconType } from 'react-icons';

interface CategoryBlockProps {
    label: string;
    icon: IconType;
    selected?: boolean;
}

const CategoryBlock: React.FC<CategoryBlockProps> = ({ label, icon: Icon, selected }) => {
    const handleClick = () => {
        const searchParams = new URLSearchParams(window.location.search);

        if (selected) {
            searchParams.delete('category');
        } else {
            searchParams.set('category', label);
        }

        router.get(`${window.location.pathname}?${searchParams.toString()}`, {}, { preserveState: true });
    };

    return (
        <div
            onClick={handleClick}
            className={`flex cursor-pointer flex-col items-center justify-center gap-2 border-b-2 py-3 transition hover:text-neutral-800 ${selected ? 'border-b-neutral-800' : 'border-transparent hover:border-b-neutral-300'} ${selected ? 'text-neutral-800' : 'text-neutral-500'}`}
        >
            <Icon size={20} />
            <div className="text-sm font-semibold">{label}</div>
        </div>
    );
};

export default CategoryBlock;
