import CountrySelector from "@/component/buttoncountry";
import { COUNTRIES } from "@/lib/countries";
// import { COUNTRIES } from "@/lib/countries";
interface VisitorStepProps {
    onNextStep: () => void;
}

const VisitorDetail: React.FC<VisitorStepProps> = ({onNextStep}) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNextStep();
    };

    const handleCountrySelect = (value: string) => {
        console.log('Selected country:', value);
      };      

    return (
        <form className="mx-auto grid gap-3 lg:gap-0 " onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-3 md:gap-6 md:mb-10">
                <div className="z-0 w-full group">
                    <input type="text" name="" id="" className="pl-3 block py-3 w-full text-sm text-white bg-neutral-600 appearance-none focus:outline-none" placeholder="Name" required />
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    {/* <select id="countries" className="text-white block py-2.5 px-0 w-full text-sm bg-transparent appearance-none dark:text-white dark:border-gray-600 focus:outline-none">
                <div className="z-0 w-full group">
                    <select id="countries" className="pl-3 text-white block py-3 w-full text-sm bg-neutral-600 appearance-none focus:outline-none">
                        <option>Country</option>
                        <option>Canada</option>
                        <option>France</option>
                        <option>Germany</option>
                    </select> */}
                    <CountrySelector countries={COUNTRIES} onSelect={handleCountrySelect}/>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-3 md:gap-6">
                <div className="z-0 w-full group">
                    <input type="email" name="" id="" className="pl-3 block py-3 w-full text-sm text-white bg-neutral-600 appearance-none focus:outline-none" placeholder="Email" required />
                </div>
                <div className="z-0 w-full group">
                    <input type="text" name="" id="" className="pl-3 block py-3 w-full text-sm text-white bg-neutral-600 appearance-none focus:outline-none" placeholder="Whatsapp number" required />
                </div>
            </div>
            <button type="submit" className="text-black bg-white hover:bg-gray-300 px-12 py-3 font-bold mt-4 lg:mt-16 w-fit" onClick={onNextStep}>Next</button>
        </form>
    );
};

export default VisitorDetail;