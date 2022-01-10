import DataTable from 'react-data-table-component'
import React from 'react'
import { CButton } from '@coreui/react'
const CustomTable = ({ columns, data }) => {
  
  const customStyles = {
    // rdt_TableHeadRow:{
    //   style:{
    //     color:'red'
    //   }
    // },
    rows: {
      style: {
        minHeight: '2.0rem', // override the row height
      },
    },
    headCells: {
      style: {
        padding: '0',
        margin: '0',
        paddingLeft: '5px', // override the cell padding for head cells
        paddingRight: '5px',
        backgroundColor: '#4d3227',
        color: '#fff',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        height: '2.2rem',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
        fontSize: '0.75rem',
        textAlign: 'center',
      },
    },
  }
  return <DataTable columns={columns} data={data} customStyles={customStyles} />
}

export default CustomTable
