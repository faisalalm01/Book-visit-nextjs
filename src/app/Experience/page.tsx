import Image from "next/image";

interface ExperienceStepProps {
  onNextStep: () => void;
}
const Experience: React.FC<ExperienceStepProps> = ({ onNextStep }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNextStep();
  };
  return (
    <form className="mx-auto" onSubmit={handleSubmit}>
      <div className="grid md:gap-6 mb-5 lg:mb-10">
        <div className="relative mb-1">
          <p className="text-xs text-white mb-1">Your Surfing Experience</p>
          <div className="flex flex-col space-y-2 p-2 w-full">
            <ul className="flex justify-between w-full px-[10px] pb-5 text-xs text-neutral-400">
              <li className="flex justify-center relative">
                <span className="absolute">1</span>
              </li>
              <li className="flex justify-center relative">
                <span className="absolute">2</span>
              </li>
              <li className="flex justify-center relative">
                <span className="absolute">3</span>
              </li>
              <li className="flex justify-center relative">
                <span className="absolute">4</span>
              </li>
              <li className="flex justify-center relative">
                <span className="absolute">5</span>
              </li>
              <li className="flex justify-center relative">
                <span className="absolute">6</span>
              </li>
              <li className="flex justify-center relative">
                <span className="absolute">7</span>
              </li>
              <li className="flex justify-center relative">
                <span className="absolute">8</span>
              </li>
              <li className="flex justify-center relative">
                <span className="absolute">9</span>
              </li>
              <li className="flex justify-center relative">
                <span className="absolute">10+</span>
              </li>
            </ul>
            <input type="range" className="rounded-full accent-blue-700 w-full appearance-none bg-gradient-to-r from-white via-cyan-300 to-cyan-600 h-1" min="1" max="10" step="1" />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="date"
            name=""
            id=""
            className="block py-2.5 px-3 w-full text-sm text-white bg-neutral-600 focus:outline-none"
            placeholder="Visit Date"
            required
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <select value="" title="" id="" className="pl-3 block py-3 w-full text-sm bg-neutral-600 appearance-none focus:outline-none">
                    <option className="bg-black"></option>
            </select>
        </div>
      </div>
      <button
        type="submit"
        className="text-black bg-white hover:bg-gray-300 px-12 py-3 font-bold mt-4 lg:mt-16 "
        onClick={onNextStep}
      >
        Next
      </button>
    </form>
  );
};

export default Experience;
