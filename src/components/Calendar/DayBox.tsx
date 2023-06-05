interface P {
  day: string;
}

const DayBox: React.FC<P> = ({ day }) => {
  return (
    <div className="w-6 h-6 flex justify-center items-center hover:bg-blue-100">
      {day}
    </div>
  );
};

export default DayBox;
