import React from "react";
import Table from "./Table";

const MockTable = () => {
  return (
    <React.Fragment>
      <Table
        colgroup={colgroup}
        columns={columns}
        height={500}
        useCheckbox={true}
        data={data}
      />
    </React.Fragment>
  );
};

export default MockTable;

const columns = [
  {
    Header: "번호",
    accessor: "paymentId",
    Cell: ({ value, row }) => {
      return value;
    },
  },
  {
    Header: "직원명",
    accessor: "name",
    Cell: ({ value, row }) => {
      return value;
    },
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

const colgroup = [
  {
    col: 20,
  },
  {
    col: 20,
  },
  {
    col: 20,
  },
  {
    col: 20,
  },
  {
    col: 20,
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
