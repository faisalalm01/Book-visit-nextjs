/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { COUNTRIES } from "@/lib/countries";
import { MutableRefObject, useEffect, useRef, useState } from "react";

interface Country {
    title: string;
    value: string;
}

interface CountrySelectorProps {
    countries: Country[];
    onSelect: (code: string) => void;
}


const CountrySelector: React.FC<CountrySelectorProps> = ({ countries, onSelect }) => {
    const [selectedCountry, setSelectedCountry] = useState<string>('');
    
    const handleCountrySelect = (code: string) => {
        setSelectedCountry(code);
        onSelect(code);
    };
    return (
        <>
            <select value={selectedCountry} onChange={(e) => handleCountrySelect(e.target.value)} title="asdasdasd" id="countries" className="pl-3 block py-3 w-full text-sm bg-neutral-600 appearance-none focus:outline-none">
                <option className="" value="">Country</option>
                {countries.map((country) => (
                    <option className="bg-black" key={country.value} value={country.value}>
                        {country.title}
                    </option>
                ))}
            </select>
            <div>
        {/* {selectedCountry && (
          <img src={countries.find((country) => country.code === selectedCountry)} alt="Flag" />
        )} */}
      </div>
        </>
    )
}
export default CountrySelector;
