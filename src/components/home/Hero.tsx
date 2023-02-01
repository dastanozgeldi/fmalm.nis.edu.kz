export const Hero = () => (
  <div className="relative flex items-center justify-center h-screen overflow-hidden">
    <video
      autoPlay
      loop
      muted
      className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
    >
      <source src="nis.mp4" type="video/mp4" />
    </video>
  </div>
);
