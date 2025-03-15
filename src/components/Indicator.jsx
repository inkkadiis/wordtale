export default function Indicator() {
  return (
    <div className="w-8 inline-flex justify-between items-center">
      <div className="w-2 h-2 bg-point rounded-full" />
      <div className="w-2 h-2 bg-off-gray rounded-full" />
    </div>
  );
}
