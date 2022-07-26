import { ArrowLeft, ArrowRight } from 'phosphor-react';
import { LIMIT_PER_PAGE } from '../services/pokeapi';

interface PaginationProps {
  page: number;
  count: number;
  setPage: Function;
}

function Pagination({ page, setPage, count }: PaginationProps) {
  const teste = count / LIMIT_PER_PAGE;

  const prevPage = () => {
    if (page < 0) return;
    setPage(page - 1);
  };
  const nextPage = () => setPage(page + 1);
  const handlePage = (pg: number) => setPage(pg);

  const styleButton =
    'cursor-pointer rounded-lg duration-500 hover:bg-white hover:text-green-400';

  return (
    <div className="flex justify-center ">
      <ArrowLeft className={`${styleButton}`} onClick={prevPage} size={32} />
      {page > 0 && (
        <div
          className="mx-4 cursor-pointer"
          onClick={() => handlePage(page - 1)}
        >
          {page}
        </div>
      )}
      <div className="mx-4 font-bold">{page + 1}</div>
      <div className="mx-4 cursor-pointer" onClick={() => handlePage(page + 2)}>
        {page + 2}
      </div>
      <ArrowRight className={`${styleButton}`} onClick={nextPage} size={32} />
    </div>
  );
}

export default Pagination;
