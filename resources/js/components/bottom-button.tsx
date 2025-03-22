import { FaMap } from 'react-icons/fa';

const BottomButton = () => {
    return (
        <button className="fixed bottom-12 left-1/2 z-30 -translate-x-1/2 cursor-pointer rounded-full bg-[#222222] text-white transition hover:scale-105">
            <div className="flex flex-row items-center justify-center gap-2 px-5 py-3">
                Show map
                <FaMap />
            </div>
        </button>
    );
};

export default BottomButton;
