interface VerificationStepProps {
    onNextStep: () => void;
}

const Verification: React.FC<VerificationStepProps> = ({ onNextStep }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNextStep();
    };
    return (
        <form className="mx-auto" onSubmit={handleSubmit}>
            <div className="text-white">
                <p className="text-sm mb-2">Help us verify your identity by uploading a photo of your ID/KTP or Passport</p>
                <div className="flex items-center justify-center w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 rounded-lg cursor-pointer bg-neutral-800">
                        <div className="flex flex-col items-center justify-center pt-2 pb-2">
                            <p className="mb-2 text-sm font-bold">Drag & Drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">or select file from device max. 2MB</p>
                        </div>
                        <a href="" className="underline underline-offset-4">Upload</a>
                        <input id="dropzone-file" type="file" className="hidden" placeholder="upload" />
                    </label>
                </div>

            </div>
            <button type="submit" className="text-black bg-white hover:bg-gray-300 px-12 py-3 font-bold mt-10" onClick={onNextStep}>Book My Visit</button>
        </form>
    );
};

export default Verification;