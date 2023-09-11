import { URLSearch } from '@/constants/utils/URLSearch';
import { MoveDown, MoveUp } from 'lucide-react';
import React from 'react';
import { ComponentProps, ReactNode } from 'react';
import { Link, LinkProps, useSearchParams } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

type PropsRoot = ComponentProps<'div'> & {
    children: ReactNode;
};

export const TableRoot = ({ children, ...props }: PropsRoot) => {
    return (
        <div className="space-y-[3px] overflow-x-auto" {...props}>
            {children}
        </div>
    );
};

type PropsContent = ComponentProps<'div'> & {
    children: ReactNode;
};
export const TableContent = ({ children, ...props }: PropsContent) => {
    return (
        <div
            style={{ minWidth: '600px' }}
            {...props}
            className={twMerge('flex flex-col w-100 space-y-[3px]', props.className)}
        >
            {children}
        </div>
    );
};

type PropsRow = ComponentProps<'div'> & {
    children: ReactNode;
};
export const TableRow = ({ children, ...props }: PropsRow) => {
    return (
        <React.Fragment>
            <div
                className={twMerge(
                    'justify-between items-center bg-white p-3 rounded grid gap-x-2 grid-cols-12',
                    props.className
                )}
            >
                {children}
            </div>
        </React.Fragment>
    );
};

type PropsColumn = ComponentProps<'div'> & {
    children: ReactNode;
};
export const TableColumn = ({ children, ...props }: PropsColumn) => {
    return (
        <div className={twMerge('col-span-2 flex items-center ', props.className)} {...props}>
            {children}
        </div>
    );
};

type PropsColumnHead = LinkProps & {
    children: ReactNode;
    hasIcon?: boolean;
    query?: string;
};
export const TableColumnHead = ({ children, hasIcon, query, ...props }: PropsColumnHead) => {
    useSearchParams();
    const QUERIES = URLSearch.queries();
    const sortDesc = QUERIES.sortBy === query && Boolean(QUERIES.sortDesc) === true;

    return (
        <Link
            {...props}
            className={twMerge(
                'col-span-2 flex items-center text-slate-600 font-bold',
                props.className
            )}
        >
            {children}
            {hasIcon && (
                <div className="flex -space-x-2">
                    <MoveUp
                        size={15}
                        className={twMerge('text-slate-400', !sortDesc ? ' text-slate-700' : '')}
                    />
                    <MoveDown
                        size={15}
                        className={twMerge('text-slate-400', sortDesc ? ' text-slate-700' : '')}
                    />
                </div>
            )}
        </Link>
    );
};
