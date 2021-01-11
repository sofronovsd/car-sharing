import React, { useCallback, useMemo, useState } from "react";

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
const range = (from: number, to: number, step = 1) => {
  let i = from;
  const range: any[] = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

interface PaginationProps {
  totalRecords: number;
  limitRecords: number;
  neighbourPages: number;
  currentPage: number;
}

const Pagination = ({
  totalRecords,
  limitRecords,
  neighbourPages = 0,
}: PaginationProps) => {
  const totalPages = useMemo(() => {
    return Math.ceil(totalRecords / limitRecords);
  }, [totalRecords, limitRecords]);

  const [currentPage, setCurrentPage] = useState(1);

  const fetchPageNumbers = useCallback(() => {
    const totalNumbers = neighbourPages * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - neighbourPages);
      const endPage = Math.min(totalPages - 1, currentPage + neighbourPages);
      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  }, [currentPage, neighbourPages, totalPages]);

  const gotoPage = useCallback(
    (page) => {
      // const { onPageChanged = f => f } = this.props;
      const currentPage = Math.max(0, Math.min(page, totalPages));
      setCurrentPage(currentPage);

      // const paginationData = {
      //   currentPage,
      //   totalPages: this.totalPages,
      //   pageLimit: this.pageLimit,
      //   totalRecords: this.totalRecords
      // };

      // this.setState({ currentPage }, () => onPageChanged(paginationData));
    },
    [totalPages]
  );

  const handleClick = useCallback(
    (page) => (evt: any) => {
      evt.preventDefault();
      gotoPage(page);
    },
    [gotoPage]
  );

  const handleMoveLeft = useCallback(
    (evt) => {
      evt.preventDefault();
      gotoPage(currentPage - neighbourPages * 2 - 1);
    },
    [currentPage, gotoPage, neighbourPages]
  );

  const handleMoveRight = useCallback(
    (evt) => {
      evt.preventDefault();
      gotoPage(currentPage + neighbourPages * 2 + 1);
    },
    [currentPage, gotoPage, neighbourPages]
  );

  return (
    <>
      <nav aria-label="Countries Pagination">
        <ul className="pagination">
          {fetchPageNumbers().map((page, index) => {
            if (page === LEFT_PAGE)
              return (
                <li key={index} className="page-item">
                  <a
                    className="page-link"
                    href="#"
                    aria-label="Previous"
                    onClick={handleMoveLeft}
                  >
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
              );

            if (page === RIGHT_PAGE)
              return (
                <li key={index} className="page-item">
                  <a
                    className="page-link"
                    href="#"
                    aria-label="Next"
                    onClick={handleMoveRight}
                  >
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              );

            return (
              <li
                key={index}
                className={`page-item${currentPage === page ? " active" : ""}`}
              >
                <a className="page-link" href="#" onClick={handleClick(page)}>
                  {page}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
