export type IPagination<T> = {
    items: T[];
    totalPages: number;
    pageSize: number;
    pageNumber: number;
};

export type IRequest = {
    img: string;
    id: string;
    firstName: string;
    lastName: string;
    type: string;
    start: string;
    end: string;
    createdAt: string;
    notes: string;
};
