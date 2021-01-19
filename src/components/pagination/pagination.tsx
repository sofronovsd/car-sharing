import React, { useCallback, useMemo } from "react";

import "./pagination.scss";

interface PaginationProps {
  totalRecords: number;
  limitRecords: number;
  neighbourPages: number;
  currentPage: number;
  setCurrentPage: any;
}

const Pagination = ({
  totalRecords,
  limitRecords,
  neighbourPages = 0,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const totalPages = useMemo(() => {
    return Math.ceil(totalRecords / limitRecords);
  }, [totalRecords, limitRecords]);

  const handleLeftClick = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage, setCurrentPage]);

  const handleRightClick = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }, [currentPage, setCurrentPage, totalPages]);

  return (
    <nav className="pagination_container">
      <ul className="pagination">
        <li>
          <button onClick={handleLeftClick}>{"«"}</button>
        </li>
        <li>{currentPage}</li>
        <li>
          <button onClick={handleRightClick}>{"»"}</button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
