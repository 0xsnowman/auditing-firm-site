import React, { useState } from "react";

import { Box, Flex, Icon } from "ui/atoms";
import Icons from "assets/icons";
import PaginatorItem from "./paginatorItem";
import { PAGINATOR_ARROW } from "config/dimensions";

const Paginator = () => {
  let pages = 10;
  const [currentPage, setCurrentPage] = useState<number>(5);
  let pageGenerator = [];

  if (pages < 7)
    for (let i = 1; i <= pages; ++i) {
      pageGenerator.push(i);
    }

  return (
    <Flex gap={5} alignItems="center">
      <Box padding={10} onClick={() => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      }}>
        <Icon icon={Icons.left}></Icon>
      </Box>
      {pages < 7 &&
        pageGenerator.map((item, index) => {
          return (
            <PaginatorItem
              itemText={index}
              setCurrentPage={setCurrentPage}
              currentPageIndex={currentPage}
            />
          );
        })}
      <PaginatorItem
        itemText={1}
        setCurrentPage={setCurrentPage}
        currentPageIndex={currentPage}
      />
      {currentPage > 3 && (
        <PaginatorItem
          itemText={PAGINATOR_ARROW.left}
          setCurrentPage={setCurrentPage}
          currentPageIndex={currentPage}
        />
      )}
      <Flex gap={5}>
        {currentPage === pages && (
          <PaginatorItem
            itemText={currentPage - 2}
            setCurrentPage={setCurrentPage}
            currentPageIndex={currentPage}
          />
        )}
        {currentPage !== 1 && currentPage !== 2 && (
          <PaginatorItem
            itemText={currentPage - 1}
            setCurrentPage={setCurrentPage}
            currentPageIndex={currentPage}
          />
        )}
        {currentPage !== 1 && currentPage !== pages && (
          <PaginatorItem
            itemText={currentPage}
            setCurrentPage={setCurrentPage}
            currentPageIndex={currentPage}
          />
        )}
        {currentPage !== pages - 1 && currentPage !== pages && (
          <PaginatorItem
            itemText={currentPage + 1}
            setCurrentPage={setCurrentPage}
            currentPageIndex={currentPage}
          />
        )}
        {currentPage === 1 && (
          <PaginatorItem
            itemText={currentPage + 2}
            setCurrentPage={setCurrentPage}
            currentPageIndex={currentPage}
          />
        )}
      </Flex>
      {currentPage <= pages - 3 && (
        <PaginatorItem
          itemText={PAGINATOR_ARROW.right}
          setCurrentPage={setCurrentPage}
          currentPageIndex={currentPage}
        />
      )}
      <PaginatorItem
        itemText={pages}
        setCurrentPage={setCurrentPage}
        currentPageIndex={currentPage}
      />
      <Box padding={10} onClick={() => {
        if (currentPage < pages)
          setCurrentPage(currentPage + 1);
      }}>
        <Icon icon={Icons.right}></Icon>
      </Box>
    </Flex>
  );
};

export default Paginator;
