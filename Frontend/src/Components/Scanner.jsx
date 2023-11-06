// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect } from "react";
import Webcam from "react-webcam";
import Quagga from "quagga";

const Scanner = () => {
  const webcamRef = useRef(null);

  useEffect(() => {
    const onDetected = result => {
      console.log(result.codeResult.code);
      // Aquí puedes agregar la lógica adicional que desees con el código de barras detectado.
    };

    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: webcamRef.current.video,
        },
        decoder: {
          readers: ["ean_reader"], // Puedes ajustar esto según tus necesidades de formato de código de barras
        },
      },
      err => {
        if (err) {
          console.error(err);
          return;
        }
        Quagga.start();
      }
    );

    Quagga.onDetected(onDetected);

    return () => {
      Quagga.offDetected(onDetected);
      Quagga.stop();
    };
  }, []);

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        mirrored={true}
        screenshotFormat="image/jpeg"
      />
    </div>
  );
};

export default Scanner;
