import React from 'react';
import './Table.css';

const Table = ({ data }) => {
    const policeIds = Object.keys(data);
    return (
        <div className='tablewrapper'>
        <table>
            <thead>
                <tr>
                    <th>REPORT ID</th>
                    <th>REPORT</th>
                </tr>
            </thead>
            <tbody>
                {
                    policeIds.map((id, index) =>
                        <tr key={id}>
                            <td>{index + 1}</td>
                            <td>
                                <button className='viewButton'>VIEW</button>
                            </td>
                        </tr>)
                }
            </tbody>
        </table>
        </div>
    )
}

export default Table;
