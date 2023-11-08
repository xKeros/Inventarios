import { useEffect, useState, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

function Scanner() {
  const [scanResult, setScanResult] = useState(null);
  const [manualSerialNumber, setManualSerialNumber] = useState('');
  const html5QrcodeRef = useRef(null);
  const [cameraId, setCameraId] = useState('environment');

  useEffect(() => {
    let scanner;

    async function initializeScanner() {
      try {
        scanner = new Html5QrcodeScanner('reader', {
          fps: 5,
        });

        scanner.render(success, error);
      } catch (error) {
        console.error('Error al escanear el producto', error);
      }
    }

    function success(result) {
      setScanResult(result);
    }

    function error(err) {
      console.warn(err);
    }

    initializeScanner();

    html5QrcodeRef.current = scanner;

    return () => {
      if (scanner) {
        scanner.clear();
      }
    };
  }, []);

  function handleManualSerialNumberChange(event) {
    setManualSerialNumber(event.target.value);
  }

  function switchCamera() {
    if (cameraId === 'environment') {
      html5QrcodeRef.current.clear();
      html5QrcodeRef.current.start('user', { facingMode: 'user' }, success, error);
      setCameraId('user');
    } else {
      html5QrcodeRef.current.clear();
      html5QrcodeRef.current.start('environment', null, success, error);
      setCameraId('environment');
    }
  }

  return (
    <div className="App">
      <h1>QR Scanning Code</h1>
      <button onClick={switchCamera}>
        Elegir Camara ({cameraId === 'environment' ? 'Camara Frontal' : 'Camara Trasera'})
      </button>
      {scanResult ? (
        <div>
          <p>
            Success: <a href={scanResult}>{scanResult}</a>
          </p>
          <p>Serial Number: {scanResult.slice(-16)}</p>
        </div>
      ) : (
        <div>
          <div id="reader"></div>
          <p className="center-text">Or enter the serial number manually:</p>
          <div className="center-input">
            <input
              type="text"
              value={manualSerialNumber}
              onChange={handleManualSerialNumberChange}
            />
            {manualSerialNumber && (
              <p>Serial Number: {manualSerialNumber.slice(-16)}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Scanner;
