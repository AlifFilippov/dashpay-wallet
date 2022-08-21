/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import { useRef, useEffect } from 'react';

function useMounted() {
  const refMounted = useRef(false);

  useEffect(() => {
    refMounted.current = true;

    return () => {
      refMounted.current = false;
    };
  });

  return refMounted.current;
}

export default useMounted;
