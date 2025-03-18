import useRegisterModal from '@/hooks/use-register-modal';
import { useState } from 'react';
import { BsPhone } from 'react-icons/bs';
import { FaApple, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Button from '../button';
import Input from '../inputs/input';
import Modal from './modal';

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit() {
        console.log('form is submitted');
    }

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <div className="text-2xl font-bold">Welcome to Airbnb</div>
            <Input id="email" label="Email" disabled={isLoading} required />
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

    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Log in or sign up"
            actionLabel="Continue"
            onClose={registerModal.onClose}
            onSubmit={handleSubmit}
            body={bodyContent}
            footer={footerContent}
        />
    );
};

export default RegisterModal;
