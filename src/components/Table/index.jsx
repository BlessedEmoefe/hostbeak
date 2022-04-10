import React, { useState } from "react";
import { CustomTableMain, Td, Paginator } from "./styles";
import { generateID } from "../../lib/generateID";
import PropTypes from "prop-types";
import { OverFlowScrollBar } from "../OverflowScroll/styles";
import Pagination from "../Paginator/Paginator.component";
import NoData from "../NoData";

const CustomTable = ({
  tableBody,
  tableHead,
  theadColor,
  theadBkColor,
  rowClick,
  tbodyColor,
  roxHovColor,
  bottomGap,
  paginator,
  pageSize,
  firstLast,
  prevNext,
}) => {
  const [pageOfItems, setPageOfItems] = useState([]);

  const onChangePage = (items) => {
    setPageOfItems(items);
  };

  const returnTableRow = (data) => {
    let __data = {...data};
    delete __data._id;

    return (
      <tr
        key={generateID(17)}
        onClick={() => (rowClick ? rowClick(data) : data)}
      >
        {Object.values(__data).map((item, i) => {
          let head =
            tableHead[i] !== undefined
              ? tableHead[i].replace(/'/g, "") || ""
              : null;
          return (
            <Td
              theadColor={theadColor}
              tbodyColor={tbodyColor}
              head={head}
              className={Object.keys(data)[i].replace(/'/g, "") || ""}
              id={head}
              key={generateID(14)}
            >
              {item}
            </Td>
          );
        })}
      </tr>
    );
  };

  return (
    <>
      {!!tableBody.length ? (
        <CustomTableMain
          theadColor={theadColor}
          theadBkColor={theadBkColor}
          bottomGap={bottomGap}
          tbodyColor={tbodyColor}
          roxHovColor={roxHovColor}
          paginator={paginator}
        >
          <OverFlowScrollBar className="container">
            <table>
              <thead>
                <tr>
                  {tableHead.map((head) => (
                    <th key={generateID(11)}>{head.toUpperCase()}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {paginator
                  ? pageOfItems.map(data => returnTableRow(data))
                  : tableBody.map(data => returnTableRow(data))
                }
              </tbody>
            </table>
          </OverFlowScrollBar>

          <Paginator className="paginator" paginator={paginator}>
            <Pagination
              pageSize={pageSize || 5}
              prevNext={prevNext || null}
              firstLast={firstLast || null}
              items={tableBody}
              onChangePage={onChangePage}
            />
          </Paginator>
        </CustomTableMain>
      ) : (
        <NoData message={"No records to display"} />
      )}
    </>
  );
};

CustomTable.propTypes = {
  tableBody: PropTypes.array.isRequired,
  tableHead: PropTypes.array.isRequired,
  theadColor: PropTypes.string,
  theadBkColor: PropTypes.string,
  rowClick: PropTypes.func,
  tbodyColor: PropTypes.string,
  roxHovColor: PropTypes.string,
  bottomGap: PropTypes.string,
  pageSize: PropTypes.number,
  firstLast: PropTypes.any,
  paginator: PropTypes.any,
  prevNext: PropTypes.any,
};

export default CustomTable;
