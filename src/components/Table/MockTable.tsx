import React from "react";
import Table from "./Table";

const MockTable = () => {
  return (
    <React.Fragment>
      <Table
        colgroup={colgroup}
        columns={columns}
        height={500}
        useCheckbox={false}
        colgroupHd={colgroupHd}
        data={data}
        customStyles={{ thHeight: "30px", tdHeight: "30px" }}
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
];
