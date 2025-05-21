interface Step1Props {
  purpose: string;
  subtext: string;
}

const Step1 = ({ purpose, subtext }: Step1Props) => {
  return (
    <div className="mt-10">
      <h3 className="font-bold text-xl">{purpose}</h3>
      <p className="text-sm text-gray-500">{subtext}</p>
      <div className="grid grid-cols-2 mt-5 gap-8">
        <div className="mt-4"></div>
        <div className="mt-4"></div>
      </div>
    </div>
  );
};

export default Step1;
