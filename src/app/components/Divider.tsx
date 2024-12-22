export function Divider() {
  return (
    <div className="container relative mx-auto">
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center mx-auto"
      >
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </div>
    </div>
  );
}
