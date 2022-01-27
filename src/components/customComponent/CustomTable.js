import DataTable from 'react-data-table-component'
import React from 'react'
import { CButton } from '@coreui/react'
const CustomTable = ({ columns, data }) => {
  const customStyles = {
    rows: {
      style: {
        minHeight: '1rem', // override the row height
      },
    },
    headCells: {
      style: {
        padding: '0px',
        margin: '0px',
        paddingLeft: '5px', // override the cell padding for head cells
        paddingRight: '5px',
        backgroundColor: '#4d3227',
        color: '#fff',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        height: '3.25rem',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
        fontSize: '0.75zzzzzzzzzrem',
        textAlign: 'center',
      },
    },
  }
  return <DataTable columns={columns} data={data} pagination customStyles={customStyles} />
}

export default CustomTable
