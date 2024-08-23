import { useState, useEffect } from 'react';

const FullScreenTimer = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer;
    if (isFullScreen) {
      timer = setInterval(() => setTime(prevTime => prevTime + 1), 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isFullScreen]);

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
        document.documentElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
      }
    }
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div>
      <button onClick={toggleFullScreen}>
        {isFullScreen ? 'Exit Full Screen' : 'Enter Full Screen'}
      </button>
      {isFullScreen && <p>Time in full screen: {time} seconds</p>}
    </div>
  );
};

export default FullScreenTimer;
