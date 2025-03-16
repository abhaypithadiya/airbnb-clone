import Modal from '@/components/modals/modal';
import Navbar from '@/components/navbar/navbar';
import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <Modal title="Log in or sign up" isOpen actionLabel="Continue" />
            <Navbar />
        </>
    );
}
