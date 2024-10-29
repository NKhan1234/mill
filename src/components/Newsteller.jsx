import { useState } from "react";

export default function Newsteller() {
  const [subscribe, setSubscribe] = useState(false);
  function handleSubscribe(e) {
    e.preventDefault();
    setSubscribe(true);
  }
  return (
    <div className="bg-white grid items-center justify-center gap-y-4 py-[40px]">
      <div className="text-center">
        <h1 className="text-3xl font-semibold tracking-wide">
          Subscribe To Our Newsletter
        </h1>
        <p className="text-md">
          Promotions, new products and sales. Directly to your inbox.
        </p>
      </div>
      <div className="">
        {subscribe ? (
          <h1 className="text-2xl text-center">Thanks for subscribing</h1>
        ) : (
          <form onSubmit={handleSubscribe} className="flex items-center mt-2">
            <input
              type="email"
              placeholder="Your Email"
              className="outline-none px-3 py-2 bg-white w-[400px] border-2 border-red-500 border-solid placeholder:text-red-500 text-red-500"
              required
            />
            <button
              type="submit"
              className="btn5 cursor-pointer outline-none border-2 border-red-500 border-solid py-2 px-4 text-red-500 text-md font-semibold tracking-wide"
            >
              SUBSCRIBE
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
