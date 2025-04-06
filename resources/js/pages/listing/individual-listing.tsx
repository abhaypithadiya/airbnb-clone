import Container from '@/components/container';
import RegisterModal from '@/components/modals/register-modal';
import Logo from '@/components/navbar/logo';
import Search from '@/components/navbar/search';
import UserMenu from '@/components/navbar/user-menu';
import { Head } from '@inertiajs/react';
import { CiHeart } from 'react-icons/ci';
import { IoShareOutline } from 'react-icons/io5';

const IndividualListing = () => {
    return (
        <>
            <Head title="Airbnb | Holiday rentals, cabins, beach houses & more">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <RegisterModal />
            <div className="fixed z-10 w-full bg-white">
                <div className="border-b-[1px] py-4">
                    <Container>
                        <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                            <Logo />
                            <Search />
                            <UserMenu />
                        </div>
                    </Container>
                </div>
            </div>
            <div className="pt-28">
                <Container>
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold">StayVista at Desert Palms in Anjar-Kutch w/t Pool</div>
                        <div className="flex gap-3">
                            <div className="flex cursor-pointer items-center gap-2 rounded-md p-1.5 transition hover:bg-neutral-100">
                                <IoShareOutline />
                                <div className="font-semibold underline">Share</div>
                            </div>
                            <div className="flex cursor-pointer items-center gap-2 rounded-md p-1.5 transition hover:bg-neutral-100">
                                <CiHeart />
                                <div className="font-semibold underline">Save</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default IndividualListing;
