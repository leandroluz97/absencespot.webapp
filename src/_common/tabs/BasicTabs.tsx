import { ReactNode } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { twMerge } from 'tailwind-merge';
import { NavLink, LinkProps } from 'react-router-dom';
import { TabsListProps, TabsProps, TabsTriggerProps } from '@radix-ui/react-tabs';

type PropsRoot = TabsProps & {
    children: ReactNode;
};
export const BasicTabsRoot = ({ children, ...props }: PropsRoot) => {
    return (
        <Tabs.Root defaultValue="tab1" {...props} className={twMerge('TabsRoot ', props.className)}>
            {children}
        </Tabs.Root>
    );
};

type PropsList = TabsListProps & {
    children: ReactNode;
};
export const BasicTabsList = ({ children, ...props }: PropsList) => {
    return (
        <Tabs.List className="TabsList flex gap-3" aria-label="Filter by absence types" {...props}>
            {children}
        </Tabs.List>
    );
};

type PropsTrigger = TabsTriggerProps & {
    children: ReactNode;
};
export const BasicTabsTrigger = ({ children, ...props }: PropsTrigger) => {
    return (
        <Tabs.Trigger
            {...props}
            className={twMerge(
                'TabsTrigger p-2 font-semibold text-slate-600 text-sm relative ',
                props.className
            )}
        >
            {children}
        </Tabs.Trigger>
    );
};

type PropsLink = LinkProps & {
    isActive: boolean;
    children: ReactNode;
};
export const BasicTabsLink = ({ children, isActive, ...props }: PropsLink) => {
    return (
        <NavLink
            {...props}
            className={twMerge(
                'inline-block before:absolute before:w-full hover:before:h-1 before:bg-primary-800 before:left-0 before:bottom-0 before:rounded-t-lg transition-all ease-in-out duration-300',
                isActive ? ' before:h-1 ' : '',
                props.className
            )}
        >
            {children}
        </NavLink>
    );
};
