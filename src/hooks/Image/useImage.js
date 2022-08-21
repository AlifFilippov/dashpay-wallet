import { useState, useCallback } from 'react';

function useImage(props) {
  const { avatarUrl } = props;
  const [isImageLoaded, setIsImageLoaded] = useState(true);

  const handleError = useCallback(() => setIsImageLoaded(false), [avatarUrl]);

  return {
    isImageLoaded,
    showImage: !!avatarUrl && isImageLoaded,
    bind: {
      onError: handleError,
      source: { uri: avatarUrl },
    },
  };
}

export default useImage;
