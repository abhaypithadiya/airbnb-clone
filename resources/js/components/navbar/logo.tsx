import { Link } from '@inertiajs/react';

const Logo = () => {
    return (
        <Link href="/">
            <img alt="logo" className="hidden cursor-pointer md:block" height={100} width={100} src="../../assets/logo/airbnb-logo.webp" />
        </Link>
    );
};

export default Logo;
