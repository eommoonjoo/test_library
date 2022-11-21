import React, { useRef, useState } from "react";
import Table from "./Table";

const MockTable = () => {
  const ref = useRef(null);
  const [localData, setLocalData] = useState<any[]>(data);

  const handleScroll = (e) => {
    // console.log(e.currentTarget.scrollTop);
    // console.log(e.currentTarget.offsetHeight);
  };

  const handleRowClick = (e) => {};

  return (
    <React.Fragment>
      <Table
        colgroup={colgroup}
        columns={columns}
        height={500}
        useCheckbox={false}
        colgroupHd={colgroupHd}
        data={localData}
        customStyles={{ thHeight: "30px", tdHeight: "30px" }}
        onRowClick={handleRowClick}
        ref={ref}
        onHandleScroll={handleScroll}
        setData={setLocalData}
        useDrag={true}
      />
    </React.Fragment>
  );
};

export default MockTable;

const columns = [
  {
    Header: <div onClick={() => console.log("헤더")}>헤더</div>,
    accessor: "-1",
    columns: [
      {
        Header: <div onClick={() => console.log("테스트")}>테스트</div>,
        accessor: "paymentId",
      },
      {
        Header: "직원명",
        accessor: "name",
        Cell: ({ value, row }) => {
          return value;
        },
      },
    ],
  },

  {
    Header: "지급방식",
    accessor: "paymentType",
    Cell: ({ value, row }) => {
      return value;
    },
  },
  {
    Header: "지급일",
    accessor: "paymentDay",
    Cell: ({ value }) => `${value}일`,
  },
];

const colgroup: { col: number; align?: "NOCENTER" | undefined }[] = [
  {
    col: 25,
    align: "NOCENTER",
  },
  {
    col: 25,
    align: "NOCENTER",
  },
  {
    col: 25,
  },
  {
    col: 25,
  },
];

const colgroupHd = [
  {
    col: 50,
  },
  {
    col: 25,
  },
  {
    col: 25,
  },
];

const data = [
  {
    paymentId: 1,
    name: "엄문주",
    paymentType: "계좌이체",
    paymentDay: "25일",
  },
  {
    paymentId: 2,
    name: "엄문주",
    paymentType: "계좌이체",
    paymentDay: "25일",
  },
  {
    paymentId: 3,
    name: "엄문주",
    paymentType: "계좌이체",
    paymentDay: "25일",
  },
  {
    paymentId: 4,
    name: "엄문주",
    paymentType: "계좌이체",
    paymentDay: "25일",
  },
  {
    paymentId: 5,
    name: "엄문주",
    paymentType: "계좌이체",
    paymentDay: "25일",
  },
  {
    paymentId: 6,
    name: "엄문주",
    paymentType: "계좌이체",
    paymentDay: "25일",
  },
  {
    paymentId: 7,
    name: "엄문주",
    paymentType: "계좌이체",
    paymentDay: "25일",
  },
  {
    paymentId: 8,
    name: "엄문주",
    paymentType: "계좌이체",
    paymentDay: "25일",
  },
  {
    paymentId: 9,
    name: "엄문주",
    paymentType: "계좌이체",
    paymentDay: "25일",
  },
  {
    paymentId: 10,
    name: "엄문주",
    paymentType: "계좌이체",
    paymentDay: "25일",
  },
  {
    paymentId: 11,
    name: "엄문주",
    paymentType: "계좌이체",
    paymentDay: "25일",
  },
  {
    paymentId: 12,
    name: "엄문주",
    paymentType: "계좌이체",
    paymentDay: "25일",
  },
  {
    paymentId: 13,
    name: "엄문주",
    paymentType: "계좌이체",
    paymentDay: "25일",
  },
  {
    paymentId: 14,
    name: "엄문주",
    paymentType: "계좌이체",
    paymentDay: "25일",
  },
  {
    paymentId: 15,
    name: "엄문주",
    paymentType: "계좌이체",
    paymentDay: "25일",
  },
  {
    paymentId: 16,
    name: "엄문주",
    paymentType: "계좌이체",
    paymentDay: "25일",
  },
];
