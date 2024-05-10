function RedirectPage() {
  return (
    <div className="text-base text-white">
      <p className="mb-2">You&apos;re in!</p>
      <p className="mb-7">
        Your store visit is booked and You&apos;re ready to ride the shopping
        wave. Here&apos;s your detail:
      </p>
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-2">
          <div>
            <p className="font-extralight text-sm">Name:</p>
            <p >Dogus Unsalan</p>
          </div>
          <div>
            <p className="font-extralight text-sm">Country:</p>
            <p>Germany</p>
          </div>
        </div>
        <div className="grid grid-cols-2">
            <div>
                <p className="font-extralight text-sm">Email:</p>
                <p>email@example.com</p>
            </div>
            <div>
                <p className="font-extralight text-sm">Visit date:</p>
                <p>23/04/2024</p>
            </div>
        </div>
      </div>
      <p className="my-7">We look forward to seeing you at the #Swellmatch store! Your booking details already sent to your email and whatsapp</p>
      <p className="font-extralight text-xs">This form will refresh automatically in 10 sec</p>
    </div>
  );
}

export default RedirectPage;
