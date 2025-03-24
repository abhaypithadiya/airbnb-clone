import BottomButton from '@/components/bottom-button';
import RegisterModal from '@/components/modals/register-modal';
import Navbar from '@/components/navbar/navbar';
import { Head } from '@inertiajs/react';
import HomeListing from './home/home-listing';

export default function Welcome() {
    return (
        <>
            <Head title="Airbnb | Holiday rentals, cabins, beach houses & more">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <RegisterModal />
            <Navbar />
            <div className="pt-28 pb-20">
                <HomeListing />
            </div>
            <BottomButton />
        </>
    );
}
