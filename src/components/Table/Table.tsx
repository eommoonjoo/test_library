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

interface TableProps {
  /**
   * table 높이
   */

  height: number;

  /**
   * table column
   */

  columns: {
    Header: string;
    accessor: string;
    Cell: ({ value, row }) => any;
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

  colgroup: { col: number }[];
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

  console.log("selectedFlatRows", selectedFlatRows);

  return (
    <Styles colgroup={colgroup} height={height}>
      <div {...getTableProps()} className="table sticky">
        {/* <Colgroup /> */}
        <div className="header">
          {headerGroups.map((headerGroup) => (
            <div className="tr" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                return (
                  <div
                    className="th"
                    // {...column.getHeaderProps(column.getSortByToggleProps())}
                    {...column.getHeaderProps()}
                    // className={classnames({
                    //   filter: column.Header === "지급방식" ? true : false,
                    // })}
                    // onClick={() => console.log(column.id)}
                  >
                    {column.render("Header")}
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

const Styles = styled.div<{ colgroup: { col: number }[]; height: number }>`
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
          border-bottom: 0;
        }
      }
    }

    .th {
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
      height: 30px;
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
      height: 30px;
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

        ${(props) => {
          return props.colgroup.map((value, index) => {
            return `.th {
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
