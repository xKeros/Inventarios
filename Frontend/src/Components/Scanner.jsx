import React, { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import Quagga from "@ericblade/quagga2";

export const Scanner = () => {
  const webcamRef = useRef(null);
  const [facingMode, setFacingMode] = useState("environment");

  useEffect(() => {
    const onDetected = result => {
      console.log(result.codeResult.code);
      Quagga.stop();
    };

    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: webcamRef.current.video,
          constraints: {
            facingMode: facingMode,
          },
        },
        decoder: {
          readers: ["ean_reader"],
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
  }, [facingMode]);

  const switchCamera = () => {
    setFacingMode(prevMode =>
      prevMode === "environment" ? "user" : "environment"
    );
  };

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        mirrored={true}
        screenshotFormat="image/jpeg"
      />
      <button onClick={switchCamera}>Switch Camera</button>
    </div>
  );
};

export default Scanner;
