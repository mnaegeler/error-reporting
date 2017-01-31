window.addEventListener( 'error', error_report, true );

function error_report ( event ) {
  let data = {
    message: event.message
    , filename: event.filename
    , lineNumber: event.lineno
    , colNumber: event.colno
    , error: event.error
  };

  let data_to_string = JSON.stringify( data );

  let XHR = new XMLHttpRequest();
  XHR.open( 'POST', `${url_to_send}`, true );
  XHR.setRequestHeader( 'Content-Type', 'application/json' );
  XHR.send( data_to_string );

  console.log( data );
  window.localStorage.setItem( 'error', data_to_string );

  return true;
}
