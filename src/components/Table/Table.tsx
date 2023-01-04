import React from "react";
import {
  useTable,
  useRowSelect,
  useFilters,
  useGlobalFilter,
  useSortBy,
} from "react-table";
import { useSticky } from "react-table-sticky";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export interface TableProps {
  /**
   * table 높이
   */

  height: number;

  /**
   * table column
   */

  columns: {
    Header: any;

    accessor: string;
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

  colgroupHd?: { col: number }[];

  customStyles?: {
    thHeight?: string;
    tdHeight?: string;
    glBorder?: string;
  };

  /**
   * tr을 클릭할 수 있는 버튼
   */

  onRowClick?: (e?: any, r?: any) => void;

  /**
   * handleScroll 을 넘길 수 있음
   */

  onHandleScroll?: (e?: any) => void;

  /**
   * Drag & Drop을 사용하기 위해서 필요한 setState
   */

  setData?: React.Dispatch<React.SetStateAction<any[]>>;

  /**
   * Drag & Drop 사용여부
   */

  useDrag?: boolean;

  /**
   * Drag * Drop을 사용하기 위한 callback
   */

  handleDrag?: (parameter: any) => void;

  /**
   * Drag * Drop을 사용하기 위한 callback
   */

  noGlBorder?: boolean;
}

interface IndeterminateCheckboxProps {
  indeterminate: boolean;
}

const Table = React.forwardRef(
  (
    {
      height,
      columns,
      data,
      colgroup,
      useCheckbox,
      customStyles,
      colgroupHd,
      onRowClick,
      onHandleScroll,
      setData,
      useDrag,
      handleDrag,
      noGlBorder,
    }: TableProps,
    ref
  ) => {
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

    const handleDragEnd = (list, startIndex, endIndex) => {
      const result: any[] = Array.from(list);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      handleDrag && handleDrag(result);
    };

    return (
      <DragDropContext
        onDragEnd={(result) =>
          handleDragEnd(data, result.source.index, result.destination.index)
        }
      >
        <Styles
          colgroup={colgroup}
          height={height}
          customStyles={customStyles}
          colgroupHd={colgroupHd}
          noGlBorder={noGlBorder}
        >
          <div
            {...getTableProps()}
            className="table sticky"
            ref={ref}
            onScroll={onHandleScroll}
          >
            <div className="header">
              {headerGroups.map((headerGroup) => (
                <div className="tr" {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => {
                    if (column.columns) {
                      return (
                        <div
                          className="th-custom"
                          onClick={column.Header?.props?.onClick}
                          // {...column.getHeaderProps(column.getSortByToggleProps())}
                          {...column.getHeaderProps()}
                          style={{
                            paddingRight: `${column.columns?.length - 1}px`,
                          }}
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
                        onClick={column.Header?.props?.onClick}
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
            <Droppable droppableId="table-list">
              {(provided) => {
                return (
                  <div
                    {...getTableBodyProps()}
                    className="body"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {rows.map((row, i) => {
                      prepareRow(row);
                      return (
                        <Draggable
                          isDragDisabled={!useDrag}
                          key={i}
                          draggableId={i.toString()}
                          index={i}
                        >
                          {(provided) => {
                            return (
                              <div
                                {...row.getRowProps()}
                                className="tr"
                                ref={provided.innerRef}
                                {...provided.dragHandleProps}
                                {...provided.draggableProps}
                              >
                                {row.cells.map((cell) => {
                                  return (
                                    <div
                                      onClick={(e) =>
                                        onRowClick && onRowClick(e, cell)
                                      }
                                      {...cell.getCellProps()}
                                      className="td"
                                    >
                                      {cell.render("Cell")}
                                    </div>
                                  );
                                })}
                              </div>
                            );
                          }}
                        </Draggable>
                      );
                    })}
                  </div>
                );
              }}
            </Droppable>
          </div>
        </Styles>
      </DragDropContext>
    );
  }
);

export default Table;

const Styles = styled.div<{
  colgroup: { col: number; align?: string }[];
  colgroupHd?: { col: number }[];
  height: number;
  customStyles?: { thHeight?: string; tdHeight?: string; glBorder?: string };
  noGlBorder?: boolean;
}>`
  .table {
    /* border: 1px solid #ddd; */
    border: ${({ noGlBorder }) => (noGlBorder ? 0 : "1px solid #ddd")};
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
        position: sticky;

        ${(props) => {
          return props.colgroup.map((value, index) => {
            return `.th {
                  :nth-child(${index + 1}) {
                    width: ${value.col}%;
                    
                    border-bottom:${
                      props.colgroupHd &&
                      props.colgroupHd.length > 0 &&
                      "1px solid #f5f5f5"
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
          return (
            props.colgroupHd &&
            props.colgroupHd.map((value, index) => {
              return `.th-custom {

                  :nth-child(${index + 1}) {
                    width: ${value.col}%
                  }
                }`;
            })
          );
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
