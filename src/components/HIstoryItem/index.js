import {Component} from 'react'
import './index.css'

class HistoryItem extends Component {
  OnclickingDeleteImage = () => {
    const {historyList, deleteHistory} = this.props
    const {id} = historyList
    deleteHistory(id)
  }

  render() {
    const {historyList} = this.props
    const {timeAccessed, logoUrl, title, domainUrl} = historyList
    return (
      <li className="history-item">
        <p className="time">{timeAccessed}</p>
        <div className="website-details-container">
          <div className="website-container">
            <img src={logoUrl} className="logo" alt="domain logo" />
            <p className="title">{title}</p>
            <p className="domain">{domainUrl}</p>
          </div>
          <button
            type="button"
            className="delete-button"
            onClick={this.OnclickingDeleteImage}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default HistoryItem
