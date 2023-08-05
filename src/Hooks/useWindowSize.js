import React, { useLayoutEffect, useState } from 'react';

export default function useWindowSize() {
  const [size, setSize] = useState({x: window.innerWidth, y: window.innerHeight});
  useLayoutEffect(() => {
    function updateSize() {
      setSize((prev) => ({x: window.innerWidth, y: window.innerHeight}));
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}