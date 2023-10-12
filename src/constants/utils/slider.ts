import { Calendar } from '@/auth/_common/assets/calendar';
import { Dashboard } from '@/auth/_common/assets/dashboard';
import { Notification } from '@/auth/_common/assets/notification';

export type ISlider = {
    title: string;
    description: string;
    image: SVGElement;
};

export const sliderData: ISlider[] = [
    {
        title: 'Simple, easy and intuitive',
        description:
            'An intuitive dashboard with a clear view of employee absences, simplifying management and real-time monitoring.',
        image: Dashboard as unknown as SVGElement,
    },
    {
        title: 'Calendar overview',
        description:
            'With a filter by category to visualise and manage employee absences by specific categories, simplifying the calendar overview.',
        image: Calendar as unknown as SVGElement,
    },
    {
        title: 'Notification through the app and email',
        description:
            'Keep informed in real time about absence requests, approvals or updates, increasing communication efficiency.',
        image: Notification as unknown as SVGElement,
    },
];
