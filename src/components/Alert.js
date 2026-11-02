import React from 'react';

function Alert(props) {
  return (
    <div style={{ height: '50px' }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} d-flex align-items-center justify-content-between`}
          role="alert"
        >
          <span>
            <strong>{props.alert.type}</strong> : {props.alert.msg}
          </span>

          {/* <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={props.onClose}
          ></button> */}
        </div>
      )}
    </div>
  );
}

export default Alert;
