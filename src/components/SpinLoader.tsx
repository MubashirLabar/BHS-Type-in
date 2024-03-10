function SpinLoader({ className }: { className?: any }) {
  return (
    <div
      className={`w-7 h-7 rounded-full animate-spin border-2 border-solid border-gray-900 border-t-transparent ${className}`}
    />
  );
}

export default SpinLoader;
