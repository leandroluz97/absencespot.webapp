import { URLSearch } from '@/constants/utils/URLSearch';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

type PaginationProps = {
    pageNumber: number;
    totalPages: number;
};
export const Pagination = ({ pageNumber, totalPages }: PaginationProps) => {
    const pagination = useMemo(() => {
        let pageNumbers = [1, 2, 3];
        if (totalPages > pageNumber && pageNumber > 1)
            pageNumbers = [pageNumber - 1, pageNumber, pageNumber + 1];
        return pageNumbers;
    }, [pageNumber, totalPages]);

    return (
        <nav className="flex justify-center align-center p-3" aria-label="Page navigation">
            <ul className="flex items-center -space-x-px ">
                <li>
                    <Link
                        to={URLSearch.set({
                            pageNumber: pageNumber > 1 ? (pageNumber - 1).toString() : '1',
                        })}
                        className="flex items-center px-3 py-2 ml-0 leading-tight rounded-l-lg  text-slate-500 hover:text-slate-600"
                    >
                        <ChevronLeft className="" size={20} />
                        <span className="font-medium ">Previous</span>
                    </Link>
                </li>
                {pagination.map((page) => (
                    <li key={page}>
                        <Link
                            to={URLSearch.set({ pageNumber: page.toString() })}
                            className={`px-3 py-2 leading-tight   ${
                                page === pageNumber
                                    ? 'text-slate-700 font-bold '
                                    : 'text-slate-500  hover:text-gray-600'
                            }`}
                        >
                            {page}
                        </Link>
                    </li>
                ))}
                <li>
                    <Link
                        to={URLSearch.set({
                            pageNumber:
                                totalPages > pageNumber
                                    ? (pageNumber + 1).toString()
                                    : pageNumber.toString(),
                        })}
                        className="flex  items-center px-3 py-2 leading-tight text-slate-500 hover:text-slate-600"
                    >
                        <span className="font-medium ">Next</span>
                        <ChevronRight className="" size={20} />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
