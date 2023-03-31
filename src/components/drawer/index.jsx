import React from 'react'
import PropTypes from 'prop-types'
import { FaWindowClose } from 'react-icons/fa'

const Drawer = ({ open, onClose, children }) => (
  <div
    className={`drawer ${open ? 'open' : ''}`}
    onClick={onClose}
    data-testid="drawer"
  >
    <div className="close-button-container">
      <button className="close-button" onClick={onClose}>
        <FaWindowClose />
      </button>
    </div>
    {children}
  </div>
)

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
}

export default Drawer
