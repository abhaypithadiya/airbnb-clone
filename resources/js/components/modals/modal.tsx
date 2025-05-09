import { useCallback, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Button from '../button';

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryActionLabel,
}) => {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const handleClose = useCallback(() => {
        if (disabled) {
            return;
        }

        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300);
    }, [disabled, onClose]);

    const handleSubmit = useCallback(() => {
        if (disabled) {
            return;
        }

        onSubmit();
    }, [disabled, onSubmit]);

    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction) {
            return;
        }

        secondaryAction();
    }, [disabled, secondaryAction]);

    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div onClick={handleClose} className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-800/70">
                <div className="relative mx-auto my-6 h-full w-full md:h-auto md:w-4/6 lg:h-auto lg:w-3/6 xl:w-2/5">
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={`translate h-full duration-300 ${showModal ? 'translate-y-0' : 'translate-y-full'} ${showModal ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <div className="translate relative flex h-full max-h-[90vh] w-full flex-col rounded-3xl border-0 bg-white shadow-lg md:h-auto lg:h-auto">
                            <div className="relative flex items-center justify-center rounded-t border-b-[1px] p-6">
                                <button
                                    onClick={handleClose}
                                    className="absolute left-9 cursor-pointer rounded-full border-0 p-1 transition hover:bg-neutral-100"
                                >
                                    <IoMdClose size={18} />
                                </button>
                                <div className="text-lg font-semibold">{title}</div>
                            </div>
                            <div className="overflow-y-auto">
                                <div className="relative flex-auto p-6 pb-0">{body}</div>
                                <div className="flex flex-col gap-2 p-6">
                                    <div className="flex w-full flex-row items-center gap-4">
                                        {secondaryActionLabel && secondaryAction && (
                                            <Button outline disabled={disabled} label={secondaryActionLabel} onClick={handleSecondaryAction} />
                                        )}
                                        <Button disabled={disabled} label={actionLabel} onClick={handleSubmit} />
                                    </div>
                                    {footer}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
