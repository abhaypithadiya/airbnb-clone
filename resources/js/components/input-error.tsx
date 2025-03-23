import { cn } from '@/lib/utils';
import { type HTMLAttributes } from 'react';
import { MdError } from 'react-icons/md';

export default function InputError({ message, className = '', ...props }: HTMLAttributes<HTMLParagraphElement> & { message?: string }) {
    return message ? (
        <div className="flex flex-row items-center gap-1">
            <MdError fill="red" className="mt-1" />
            <p {...props} className={cn('text-sm text-red-600 dark:text-red-400', className)}>
                {message}
            </p>
        </div>
    ) : null;
}
