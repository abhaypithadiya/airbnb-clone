import { Link } from '@inertiajs/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FaStar } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import HeartButton from '../heart-button';

interface listingCardProps {
    id: number;
}

const ListingCard: React.FC<listingCardProps> = ({ id }) => {
    return (
        <Link href={route('individual-listing')}>
            <div className="group col-span-1 cursor-pointer">
                <div className="flex w-full flex-col gap-2">
                    <div className="relative aspect-square w-full overflow-hidden rounded-xl shadow-md">
                        <Swiper
                            key={id}
                            className="h-full"
                            modules={[Navigation, Pagination]}
                            spaceBetween={8}
                            slidesPerView={1}
                            navigation={{
                                nextEl: `.custom-next-${id}`,
                                prevEl: `.custom-prev-${id}`,
                            }}
                            pagination={{
                                dynamicBullets: true,
                            }}
                        >
                            <SwiperSlide>
                                <img
                                    src="https://a0.muscache.com/im/pictures/d07247aa-f085-4dc6-a177-a253d7c4f65e.jpg?im_w=720"
                                    alt="Listing"
                                    className="h-full w-full object-cover"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://a0.muscache.com/im/pictures/miso/Hosting-6520485/original/8238087a-dadb-49e2-b019-e5038227ebec.jpeg?im_w=720"
                                    alt="Listing"
                                    className="h-full w-full object-cover"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://a0.muscache.com/im/pictures/miso/Hosting-6520485/original/e0e246a0-4858-4302-85dd-0495c1b3de51.jpeg?im_w=720"
                                    alt="Listing"
                                    className="h-full w-full object-cover"
                                />
                            </SwiperSlide>
                        </Swiper>

                        <button
                            className={`custom-prev-${id} absolute top-1/2 left-4 z-2 -translate-y-1/2 cursor-pointer rounded-full bg-white/70 p-1 opacity-0 transition group-hover:opacity-100 hover:bg-white`}
                        >
                            <ChevronLeft size={22} className="text-black" />
                        </button>
                        <button
                            className={`custom-next-${id} absolute top-1/2 right-4 z-2 -translate-y-1/2 cursor-pointer rounded-full bg-white/70 p-1 opacity-0 group-hover:opacity-100 hover:bg-white`}
                        >
                            <ChevronRight size={22} className="text-black" />
                        </button>

                        <div className="absolute top-3 right-3 z-2 text-black">
                            <HeartButton id={id} />
                        </div>
                        <div className="absolute top-3 left-3 z-2 rounded-full bg-white px-3 py-2 text-sm font-bold text-black shadow-xl">
                            Guest favourite
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center justify-between">
                            <div className="text-md font-semibold">Mumbai, India</div>
                            <div className="flex items-center justify-center gap-1 text-sm font-semibold">
                                <FaStar />
                                5.0
                            </div>
                        </div>
                        <div className="text-sm font-semibold text-neutral-500">1,234 Kilometers Away</div>
                        <div className="text-sm font-semibold text-neutral-500">20-25 Mar</div>
                        <div className="mt-1 text-sm font-bold">₹47,762 night</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ListingCard;
