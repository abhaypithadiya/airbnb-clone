import { usePage } from '@inertiajs/react';
import { useCallback, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaFire, FaHome, FaHotel, FaMountain, FaSun, FaSwimmingPool } from 'react-icons/fa';
import { GiBoatFishing, GiCampingTent, GiCastle, GiCaveEntrance, GiIsland, GiTreehouse, GiWindmill } from 'react-icons/gi';
import { LuSettings2 } from 'react-icons/lu';
import { MdCabin, MdLocationCity, MdOutlineVilla } from 'react-icons/md';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import CategoryBlock from '../category-block';
import Container from '../container';

export const categories = [
    { label: 'Beachfront', icon: TbBeach },
    { label: 'Mountains', icon: TbMountain },
    { label: 'Pools', icon: TbPool },
    { label: 'Windmills', icon: GiWindmill },
    { label: 'Treehouses', icon: GiTreehouse },
    { label: 'Caves', icon: GiCaveEntrance },
    { label: 'Castles', icon: GiCastle },
    { label: 'Camping', icon: GiCampingTent },
    { label: 'Islands', icon: GiIsland },
    { label: 'Houseboats', icon: GiBoatFishing },
    { label: 'Hotels', icon: FaHotel },
    { label: 'Homes', icon: FaHome },
    { label: 'Villas', icon: MdOutlineVilla },
    { label: 'Cabins', icon: MdCabin },
    { label: 'Resorts', icon: FaSwimmingPool },
    { label: 'Sunsets', icon: FaSun },
    { label: 'Fireplaces', icon: FaFire },
    { label: 'Cities', icon: MdLocationCity },
    { label: 'Lake', icon: FaMountain },
    { label: 'Retreats', icon: FaHome },
    { label: 'Skiing', icon: FaMountain },
    { label: 'Luxury', icon: FaSwimmingPool },
    { label: 'Adventure', icon: GiCastle },
    { label: 'Wilderness', icon: GiCampingTent },
    { label: 'Countryside', icon: GiIsland },
    { label: 'Riverside', icon: GiBoatFishing },
];

const Categories = () => {
    const { url } = usePage();
    const searchParams = new URLSearchParams(url.split('?')[1]);
    const selectedCategory = searchParams.get('category');

    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        const swiper = sliderRef.current.swiper;
        swiper.slideTo(swiper.activeIndex - 8);
    }, []);

    // Function to slide multiple slides to the right
    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        const swiper = sliderRef.current.swiper;
        swiper.slideTo(swiper.activeIndex + 8);
    }, []);

    return (
        <div className="shadow-md">
            <Container>
                <div className="flex flex-row items-center gap-4">
                    <div className="flex flex-row items-center justify-between overflow-x-hidden">
                        <div
                            className="flex cursor-pointer items-center justify-center rounded-full border border-gray-400 bg-white p-2 shadow-md transition hover:bg-gray-100"
                            onClick={handlePrev}
                        >
                            <FaChevronLeft size={14} className="text-black" />
                        </div>

                        <Swiper ref={sliderRef} spaceBetween={18} slidesPerView={8}>
                            {categories.map((item) => (
                                <SwiperSlide key={item.label}>
                                    <CategoryBlock selected={selectedCategory === item.label} label={item.label} icon={item.icon} />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div
                            className="flex cursor-pointer items-center justify-center rounded-full border border-gray-400 bg-white p-2 shadow-md transition hover:bg-gray-100"
                            onClick={handleNext}
                        >
                            <FaChevronRight size={14} className="text-black" />
                        </div>
                    </div>

                    <div className="relative flex cursor-pointer flex-row items-center gap-3 rounded-xl border-[2px] border-neutral-200 p-4 transition hover:border-neutral-700 hover:bg-neutral-100 md:px-4 md:py-3">
                        <LuSettings2 />
                        <div className="hidden text-sm font-semibold md:block">Filters</div>
                        {/* <div className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                            2
                        </div> */}
                    </div>

                    <div className="flex w-auto cursor-pointer flex-row items-center gap-3 rounded-xl border-[1px] border-neutral-200 p-4 transition hover:border-neutral-700 hover:bg-neutral-100 md:px-4 md:py-3">
                        <div className="truncate text-sm font-semibold md:block">Display total before taxes</div>
                        <LuSettings2 />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Categories;
