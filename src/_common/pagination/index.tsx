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
        <nav className="flex justify-center align-center p-4" aria-label="Page navigation">
            <ul className="flex items-center -space-x-px">
                <li>
                    <Link
                        to={URLSearch.set({
                            pageNumber: pageNumber > 1 ? (pageNumber - 1).toString() : '1',
                        })}
                        className="flex items-center px-3 py-2 ml-0 leading-tight text-gray-500  rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                        <ChevronLeft className="text-slate-600" size={20} />
                        <span className="sr-only font-medium text-slate-600">Previous</span>
                    </Link>
                </li>
                {pagination.map((page) => (
                    <li key={page}>
                        <Link
                            to={URLSearch.set({ pageNumber: page.toString() })}
                            className={`px-3 py-2 leading-tight border  ${
                                page === pageNumber
                                    ? 'text-slate-700 font-bold  hover:text-primary-800'
                                    : 'text-slate-600  hover:text-gray-700'
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
                        className="flex  items-center px-3 py-2 leading-tight text-gray-500  border  rounded-r-lg  hover:text-gray-700"
                    >
                        <span className="sr-only font-medium text-slate-600">Next</span>
                        <ChevronRight className="text-slate-600" size={20} />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
