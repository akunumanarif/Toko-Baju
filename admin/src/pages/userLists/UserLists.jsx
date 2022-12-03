import * as React from 'react';
import './userLists.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteForever } from '@material-ui/icons';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function UserLists() {
	const [ data, setData ] = useState(userRows);
	const editUser = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const columns = [
		{ field: 'id', headerName: 'ID', width: 110 },
		{
			field: 'username',
			headerName: 'User',
			width: 200,
			renderCell: (params) => {
				return (
					<div className="userListContainer">
						<img className="userImg" src={params.row.avatar} alt="" />
						{params.row.username}
					</div>
				);
			}
		},
		{ field: 'email', headerName: 'Email', width: 200 },
		{
			field: 'transaction',
			headerName: 'Transaction',
			width: 110
		},
		{
			field: 'action',
			headerName: 'Action',
			width: 150,
			renderCell: (params) => {
				return (
					<React.Fragment>
						<Link to={'/user/' + params.row.id}>
							<button className="userEdit">Edit</button>
						</Link>
						<DeleteForever
							className="userDelete"
							onClick={() => {
								editUser(params.row.id);
							}}
						/>
					</React.Fragment>
				);
			}
		}
	];

	return (
		<div className="userLists">
			<DataGrid
				rows={data}
				disableSelectionOnClick
				columns={columns}
				pageSize={8}
				rowsPerPageOptions={[ 5 ]}
				checkboxSelection
			/>
		</div>
	);
}
