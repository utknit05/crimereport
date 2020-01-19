import React from 'react';
import './Table.css';
const low = <span style={{padding: '3px', backgroundColor: 'blue', color: 'white', borderRadius: '0.6em'}}>Low</span>;
const medium = <span style={{padding: '3px', backgroundColor: 'yellow', color: 'white', borderRadius: '0.6em'}}>Medium</span>;
const high = <span style={{padding: '3px', backgroundColor: 'red', color: 'white', borderRadius: '0.6em'}}>High</span>;

class Table extends React.Component {
    state = {
        showPopup: false,
        popupData: {},
    }

    Popup = () => {
        const { popupData } = this.state;
        const { markasan, name, crimelatlng, code, imageurl = [], index, severity } = popupData || {};
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
                  <div>{latitude && longitude && `${latitude}, ${longitude}`}</div>
                </div>
                <div className='detailComponent'>
                  <div className='popupHeading'>SEVERITY:</div>
                  <div>
                    {
                      severity === 3
                      ? high
                      : severity === 2
                        ? medium
                        : low
                    }
                  </div>
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

    mountPopup = obj => {
        this.setState({ showPopup: true, popupData: obj });
    }

    unmountPopup = () => {
        this.setState({ showPopup: false, popupData: undefined })
    }

    compareFunc = (a,b) => {
      return b.severity - a.severity;
    }

    render() {
        const { data } = this.props;
        const policeIds = Object.keys(data);
        let sortedData = policeIds.map(id => data[id]);
        sortedData.sort(this.compareFunc);
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
                        <th>SEVERITY</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sortedData.map((obj, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <span className='viewButton pointer'>
                                        <span onClick={() => this.mountPopup({...obj, index})} style={{padding: '7px'}}>VIEW</span>
                                    </span>
                                </td>
                                <td>
                                  {
                                    obj.severity === 3
                                    ? high
                                    : obj.severity === 2
                                      ? medium
                                      : low
                                  }
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
