const VideoDemo = () => {
  return (
    <section className="video-demo-section">
      <div className="container">
        <div className="demo-content">
          <h2 className="demo-title">Press play.</h2>
          <h2 className="demo-title">Watch our demo.</h2>
          <p className="demo-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.
          </p>
          <a href="#demo-video" className="demo-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Play Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo; 