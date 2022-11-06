import React from "react";
import {
  useTable,
  useRowSelect,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  HeaderGroup,
} from "react-table";
import { useSticky } from "react-table-sticky";
import styled from "styled-components";

export interface TableProps {
  /**
   * table 높이
   */

  height: number;

  /**
   * table column
   */

  columns: {
    Header: string;
    accessor?: string;
    columns?: {
      Header?: any;
      accessor?: string;
      Cell?: ({ value, row }) => any;
    }[];
    Cell?: ({ value, row }) => any;
  }[];

  /**
   * table data
   */

  data: any[];

  /**
   * checkbox 사용여부
   */

  useCheckbox: boolean;

  /**
   * table 넓이 조절
   */

  colgroup: { col: number; align?: "NOCENTER" }[];

  colgroupHd: { col: number }[];

  customStyles?: {
    thHeight?: string;
    tdHeight?: string;
  };
}

interface IndeterminateCheckboxProps {
  indeterminate: boolean;
}

const Table = ({
  height,
  columns,
  data,
  colgroup,
  useCheckbox,
  customStyles,
  colgroupHd,
}: TableProps) => {
  const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }: IndeterminateCheckboxProps, ref: any) => {
      const defaultRef = React.useRef();
      const resolvedRef = ref || defaultRef;

      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
      }, [resolvedRef, indeterminate]);

      return (
        <>
          <input type="checkbox" ref={resolvedRef} {...rest} />
        </>
      );
    }
  );

  function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
  }) {
    return null;
  }

  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const filterTypes = React.useMemo(
    () => ({
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    state: { selectedRowIds },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    useSticky,
    useRowSelect,
    (hooks) => {
      if (useCheckbox) {
        return hooks.visibleColumns.push((columns) => [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }: any) => (
              <div>
                <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
              </div>
            ),
            Cell: ({ row }: any) => (
              <div>
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
              </div>
            ),
          },
          ...columns,
        ]);
      } else {
        return { ...columns };
      }
    }
  );

  return (
    <Styles
      colgroup={colgroup}
      height={height}
      customStyles={customStyles}
      colgroupHd={colgroupHd}
    >
      <div {...getTableProps()} className="table sticky">
        {/* <Colgroup /> */}
        <div className="header">
          {headerGroups.map((headerGroup) => (
            <div className="tr" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                console.log("columns", column);
                if (column.columns) {
                  return (
                    <div
                      className="th-custom"
                      // {...column.getHeaderProps(column.getSortByToggleProps())}
                      {...column.getHeaderProps()}
                    >
                      {column.render("Header")}
                      <div>
                        {column.canFilter ? column.render("Filter") : null}
                      </div>
                    </div>
                  );
                }
                return (
                  <div
                    className="th"
                    // {...column.getHeaderProps(column.getSortByToggleProps())}
                    {...column.getHeaderProps()}
                  >
                    <div className="th-text">{column.render("Header")}</div>
                    <div>
                      {column.canFilter ? column.render("Filter") : null}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div {...getTableBodyProps()} className="body">
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr">
                {row.cells.map((cell) => {
                  return (
                    <div {...cell.getCellProps()} className="td">
                      {cell.render("Cell")}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </Styles>
  );
};

export default Table;

const Styles = styled.div<{
  colgroup: { col: number; align?: string }[];
  colgroupHd: { col: number }[];
  height: number;
  customStyles?: { thHeight?: string; tdHeight?: string };
}>`
  .table {
    border: 1px solid #ddd;
    width: 100%;
    display: flex;
    flex-direction: column;
    height: ${({ height }) => `${height}px`};

    .tr {
      display: flex;
      width: 100%;

      :last-child {
        .td {
          /* border-bottom: 0; */
        }
      }
    }

    .th,
    .th-custom {
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #ddd;
      border-right: 1px solid #ddd;
      background-color: #f5f5f5;
      color: #000000;
      font-size: 12px;
      text-align: center;
      word-break: keep-all;
      height: ${({ customStyles }) => `${customStyles?.thHeight || "30px"}`};
      overflow: hidden;
      width: 100%;

      :last-child {
        border-right: 0;
      }

      .resizer {
        display: inline-block;
        width: 5px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(50%);
        z-index: 1;

        &.isResizing {
          background: red;
        }
      }
    }

    .td {
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #ddd;
      border-right: 1px solid #ddd;
      background-color: #ffffff;
      text-align: center;
      font-size: 12px;
      word-break: keep-all;
      height: ${({ customStyles }) => `${customStyles?.tdHeight || "30px"}`};
      overflow: hidden;
      width: 100%;

      :last-child {
        border-right: 0;
      }

      .resizer {
        display: inline-block;
        width: 5px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(50%);
        z-index: 1;

        &.isResizing {
          background: red;
        }
      }
    }

    &.sticky {
      overflow: auto;
      .header,
      .footer {
        position: sticky;
        z-index: 1;
        width: fit-content;
      }

      .header {
        top: 0;
        box-shadow: 0px 3px 3px #ccc;
        width: 100%;
        position: relative;

        ${(props) => {
          return props.colgroup.map((value, index) => {
            return `.th {
                  :nth-child(${index + 1}) {
                    width: ${value.col}%;
                    
                    border-bottom:${
                      props.colgroupHd.length > 0 && "1px solid #f5f5f5"
                    };
                    .th-text {
                      position:${value.align !== "NOCENTER" && "absolute"};
                      top:${
                        (Number(
                          (props.customStyles?.thHeight || "30px")
                            .split("px")
                            .join("")
                        ) /
                          3) *
                        2.5
                      }px;  
                    }

                  }
                }`;
          });
        }}

        ${(props) => {
          return props.colgroupHd.map((value, index) => {
            return `.th-custom {
                  :nth-child(${index + 1}) {
                    width: ${value.col}%
                  }
                }`;
          });
        }}
      }

      .footer {
        bottom: 0;
        box-shadow: 0px -3px 3px #ccc;
      }

      .body {
        position: relative;
        z-index: 0;

        .tr {
          ${(props) => {
            return props.colgroup.map((value, index) => {
              return `.td {
                  :nth-child(${index + 1}) {
                    width: ${value.col}%
                  }
                }`;
            });
          }}
        }
      }

      [data-sticky-td] {
        position: sticky;
      }

      [data-sticky-last-left-td] {
        box-shadow: 2px 0px 3px #ccc;
      }

      [data-sticky-first-right-td] {
        box-shadow: -2px 0px 3px #ccc;
      }
    }
  }
`;
