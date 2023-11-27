interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="h-2 bg-gray-300 rounded-full">
      <div
        className="h-full bg-[#32729E] rounded-full transition-all"
        style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
