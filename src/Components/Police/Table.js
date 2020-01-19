import React from 'react';
import './Table.css';

class Table extends React.Component {
    state = {
        showPopup: false,
        popupId: {},
    }

    Popup = () => {
        const { popupId: {id, index} } = this.state;
        const { data } = this.props;
        const reportDetails = data[id] || {};
        const { markasan, name, crimelatlng, code, imageurl } = reportDetails || {};
        const { latitude, longitude } = crimelatlng || {};
        return (
          <div id="myModal" className="modal">
            <div className="modal-content shadow-5">
              <span className="close" onClick={this.unmountPopup} >&times;</span>
              <h1>DETAILS</h1>
              <div className='popupDetailsSection f3'>
                <div className='detailComponent'>
                  <div className='popupHeading'>REPORT ID:</div>
                  <div>{index+1}</div>
                </div>
                <div className='detailComponent'>
                  <div className='popupHeading'>REPORTED BY:</div>
                  <div>{markasan ? 'Anonymous' : name}</div>
                </div>
                <div className='detailComponent'>
                  <div className='popupHeading'>CRIME CATEGORY:</div>
                  <div>{code}</div>
                </div>
                <div className='detailComponent'>
                  <div className='popupHeading'>LOCATION:</div>
                  <div>{`${latitude}, ${longitude}`}</div>
                </div>
              </div>
              <div className='popupImageSection'>
                {
                    imageurl.map(url => <img src={url} alt='#' height={200} width={200} className='popupImageTag'/>)
                }
              </div>
            </div>
          </div>
        )
    }

    mountPopup = id => {
        this.setState({ showPopup: true, popupId: id });
    }

    unmountPopup = () => {
        this.setState({ showPopup: false, popupId: undefined })
    }

    render() {
        const { data } = this.props;
        const policeIds = Object.keys(data);
        const { showPopup } = this.state;
        return (
          <div className='tablewrapper'>
            {
                showPopup
                ? this.Popup()
                : null
            }
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
                                    <span className='viewButton pointer'>
                                        <span onClick={() => this.mountPopup({id, index})} style={{padding: '7px'}}>VIEW</span>
                                    </span>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
          </div>
        )
    }
}

export default Table;
