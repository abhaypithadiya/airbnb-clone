import { usePage } from '@inertiajs/react';
import { FaHome, FaHotel, FaSwimmingPool } from 'react-icons/fa';
import { GiBoatFishing, GiCampingTent, GiCastle, GiCaveEntrance, GiIsland, GiTreehouse, GiWindmill } from 'react-icons/gi';
import { MdCabin, MdOutlineVilla } from 'react-icons/md';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
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
    { label: 'Luxury Villas', icon: MdOutlineVilla },
    { label: 'Cabins', icon: MdCabin },
    { label: 'Resorts', icon: FaSwimmingPool },
];

const Categories = () => {
    const { url } = usePage();
    const searchParams = new URLSearchParams(url.split('?')[1]);
    const selectedCategory = searchParams.get('category');

    return (
        <div className="shadow-md">
            <Container>
                <div className="flex flex-row justify-between overflow-x-hidden">
                    {categories.map((item) => (
                        <CategoryBlock key={item.label} selected={selectedCategory === item.label} label={item.label} icon={item.icon} />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Categories;
