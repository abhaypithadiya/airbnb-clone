import useRegisterModal from '@/hooks/use-register-modal';
import { useForm } from '@inertiajs/react';
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { BsPhone } from 'react-icons/bs';
import { FaApple, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Button from '../button';
import InputError from '../input-error';
import Input from '../inputs/input';
import Modal from './modal';

interface RegisterUser {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    email: string;
    password: string;
}

interface ValidationError {
    [key: string]: string[];
}

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);
    const [mode, setMode] = useState<'login' | 'register' | 'default'>('default');

    const { data, setData, post, errors, reset, clearErrors, setError } = useForm<RegisterUser>({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        if (registerModal.isOpen) {
            reset();
            clearErrors();
            setMode('default');
        }
    }, [registerModal.isOpen, reset, clearErrors]);

    function handleSubmit(): void {
        setIsLoading(true);
        clearErrors();

        axios
            .post(route('register.check-email'), { email: data.email })
            .then((response) => {
                const checkIfUserExists = response.data.user_exists;
                if (checkIfUserExists) {
                    setMode('login');
                } else {
                    setMode('register');
                }
            })
            .catch((error: AxiosError<{ errors: ValidationError }>) => {
                const response = error?.response;
                if (response?.status === 422 && response?.data?.errors) {
                    Object.entries(response.data.errors).forEach(([key, messages]) =>
                        setError(key, Array.isArray(messages) ? messages[0] : messages),
                    );
                } else {
                    console.error('Error:', response?.data || 'An unexpected error occurred');
                }
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    function closeModal() {
        reset();
        registerModal.onClose();
    }

    function registerUser() {
        post(route('register.store'), {
            onStart: () => setIsLoading(true),
            onSuccess: () => closeModal(),
            onFinish: () => setIsLoading(false),
        });
    }

    function loginUser() {
        post(route('login.store'), {
            onStart: () => setIsLoading(true),
            onSuccess: () => closeModal(),
            onFinish: () => setIsLoading(false),
        });
    }

    const loginBodyContent = (
        <form action="">
            <Input
                id="password"
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
                label="Password"
                type="password"
                disabled={isLoading}
                required
                className={`${errors.password || errors.email ? 'border-red-700 bg-red-400/10 focus:border-2 focus:border-red-700' : ''}`}
            />
            <InputError className="mt-2" message={errors.password} />
            <InputError className="mt-2" message={errors.email} />
        </form>
    );

    const loginFooterContent = <p className="mt-2 cursor-pointer text-sm font-semibold underline hover:text-black">Forgotten your password?</p>;

    const bodyContent = (
        <div className="flex flex-col">
            <div className="mb-[16px] text-2xl font-bold">Welcome to Airbnb</div>
            <Input
                id="email"
                label="Email"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                disabled={isLoading}
                required
                className={`${errors.email ? 'border-red-700 bg-red-400/10 focus:border-2 focus:border-red-700' : ''}`}
            />
            <InputError className="mt-2" message={errors.email} />
        </div>
    );

    const footerContent = (
        <div className="mt-3 flex flex-col gap-4">
            <hr />
            <Button outline onClick={() => {}} label="Continue with Google" icon={FcGoogle} />
            <Button outline onClick={() => {}} label="Continue with Apple" icon={FaApple} />
            <Button outline onClick={() => {}} label="Continue with Phone" icon={BsPhone} />
            <Button outline onClick={() => {}} label="Continue with Facebook" icon={FaFacebook} />
        </div>
    );

    const registerBodyContent = (
        <div>
            <form className="flex flex-col gap-4">
                <div className="text-md font-bold">Legal Name</div>
                <div>
                    <Input
                        id="first-name"
                        value={data.firstName}
                        onChange={(e) => setData('firstName', e.target.value)}
                        label="First name on ID"
                        disabled={isLoading}
                        required
                        className={`${errors.firstName ? 'border-red-700 bg-red-400/10 focus:border-2 focus:border-red-700' : ''}`}
                    />
                    <Input
                        id="last-name"
                        value={data.lastName}
                        onChange={(e) => setData('lastName', e.target.value)}
                        label="Last name on ID"
                        disabled={isLoading}
                        required
                        className={`${errors.lastName ? 'border-red-700 bg-red-400/10 focus:border-2 focus:border-red-700' : ''}`}
                    />
                    <InputError className="mt-2" message={errors.firstName || errors.lastName} />
                    <p className="mt-2 text-xs font-semibold text-neutral-500">
                        Make sure this matches the name on your government ID. If you go by another name, you can add a{' '}
                        <span className="cursor-pointer font-bold underline hover:text-black">preferred first name</span>.
                    </p>
                </div>
                <div className="text-md font-bold">Date Of Birth</div>
                <div>
                    <Input
                        id="date-of-birth"
                        value={data.dateOfBirth}
                        onChange={(e) => setData('dateOfBirth', e.target.value)}
                        label="Date of Birth"
                        type="date"
                        disabled={isLoading}
                        required
                        className={`${errors.dateOfBirth ? 'border-red-700 bg-red-400/10 focus:border-2 focus:border-red-700' : ''}`}
                    />
                    <InputError className="mt-2" message={errors.dateOfBirth} />
                    <p className="mt-2 text-xs font-semibold text-neutral-500">
                        To sign up, you need to be at least 18. Your birthday won’t be shared with other people who use Airbnb.
                    </p>
                </div>
                <div className="text-md font-bold">Contact Info</div>
                <div>
                    <Input
                        id="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        label="Email"
                        type="text"
                        disabled={isLoading}
                        required
                        className={`${errors.email ? 'border-red-700 bg-red-400/10 focus:border-2 focus:border-red-700' : ''}`}
                    />
                    <InputError className="mt-2" message={errors.email} />
                    <p className="mt-2 text-xs font-semibold text-neutral-500">We'll email you trip confirmations and receipts.</p>
                </div>
                <div className="text-md font-bold">Password</div>
                <div>
                    <Input
                        id="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        label="Password"
                        type="password"
                        disabled={isLoading}
                        required
                        className={`${errors.password ? 'border-red-700 bg-red-400/10 focus:border-2 focus:border-red-700' : ''}`}
                    />
                    <InputError className="mt-2" message={errors.password} />
                </div>
                <p className="mt-2 text-xs font-semibold text-neutral-800">
                    By selecting <span className="font-extrabold">Agree and continue</span>, I agree to Airbnb’s{' '}
                    <span className="cursor-pointer text-[#004CC4] underline">Terms of Service</span>,
                    <span className="cursor-pointer text-[#004CC4] underline">Payments Terms of Service</span>, and{' '}
                    <span className="cursor-pointer text-[#004CC4] underline">Nondiscrimination Policy</span> and acknowledge the{' '}
                    <span className="cursor-pointer text-[#004CC4] underline">Privacy Policy</span>.
                </p>
            </form>
        </div>
    );

    const registerFooterContent = (
        <div className="mt-3 flex flex-col gap-4">
            <hr />
            <p className="text-xs">
                Airbnb will send you members-only deals, inspiration, marketing emails, and push notifications. You can opt out of receiving these at
                any time in your account settings or directly from the marketing notification.
            </p>
            <label htmlFor="marketing-message" className="flex cursor-pointer flex-row gap-3">
                <input type="checkbox" name="marketing-message" id="marketing-message" className="cursor-pointer" />
                <p className="text-xs">I don’t want to receive marketing messages from Airbnb.</p>
            </label>
        </div>
    );

    const modalConfigs = {
        login: {
            title: 'Log In',
            actionLabel: 'Log In',
            onSubmit: loginUser,
            body: loginBodyContent,
            footer: loginFooterContent,
        },
        register: {
            title: 'Finish signing up',
            actionLabel: 'Agree and Continue',
            onSubmit: registerUser,
            body: registerBodyContent,
            footer: registerFooterContent,
        },
        default: {
            title: 'Log in or sign up',
            actionLabel: 'Continue',
            onSubmit: handleSubmit,
            body: bodyContent,
            footer: footerContent,
        },
    };

    const currentConfig = modalConfigs[mode];

    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title={currentConfig.title}
            actionLabel={currentConfig.actionLabel}
            onClose={registerModal.onClose}
            onSubmit={currentConfig.onSubmit}
            body={currentConfig.body}
            footer={currentConfig.footer}
        />
    );
};

export default RegisterModal;
