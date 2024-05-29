import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

const SplineViewer = ({ url }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const app = new Application(canvasRef.current);
    app.load(url);

    return () => {
      app.dispose();
    };
  }, [url]);

  return <canvas ref={canvasRef} />;
};

export default SplineViewer;
