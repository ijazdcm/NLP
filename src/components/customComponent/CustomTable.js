import DataTable from 'react-data-table-component'
import React, { useEffect } from 'react'
import { CButton, CFormInput } from '@coreui/react'

const CustomTable = ({ columns, data,feildName,showSearchFilter=false }) => {


  const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);


  const FilterComponent = ({ filterText, onFilter, onClear }) => (
  	<>
  		<CFormInput
  			id="search"
  			type="text"
  			placeholder="Filter By Name"
  			aria-label="Search Input"
  			value={filterText}
  			onChange={onFilter}
  		/>
  		<CButton  color="secondary" type="button" onClick={onClear}>
  			X
  		</CButton >
  	</>
  );

  const filteredItems = data.filter(
    (item) => item[feildName] && item[feildName].toLowerCase().includes(filterText.toLowerCase())
  )


  const subHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);

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



  return (




    (showSearchFilter) ? (<DataTable
      data={filteredItems}
      columns={columns}
      // data={data}
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      pagination
      customStyles={customStyles}
    />) : ( <DataTable
      data={data}
      columns={columns}
      pagination
      customStyles={customStyles}
    />)

  )
}

export default CustomTable
