import logo from "./assets/images/logo.svg";
import data from "../data.json";

const App = () => {
  return (
    <div className="bg-cream h-screen w-full flex justify-center items-center">
      <div>
        <div className="bg-softRed rounded-xl text-white flex justify-between items-center p-4">
          <div className="mr-4">
            <h3 className="text-sm">My balance</h3>
            <h1 className="text-2xl font-bold">$921.48</h1>
          </div>
          <img width="50" src={logo} alt="Logo" />
        </div>

        <div className="bg-veryPaleOrange mt-2 rounded-xl p-4">
          <h1 className="text-2xl font-bold text-darkBrown mb-4">
            Spending - Last 7 days
          </h1>

          <div className="flex border-b border-cream pb-4">
            <div className="m-0 md:mr-0.5 text-center flex flex-col-reverse">
              <h4 className="text-xs mt-1 font-light text-mediumBrown">
                {data[0].day}
              </h4>
              <span className="cursor-pointer h-9 w-8 md:w-10 bg-softRed hover:bg-softRed/70 mx-auto block rounded chart"></span>
              <h3 className="text-[10px] md:text-xs bg-darkBrown text-white rounded md:rounded-md mb-2 p-1 md:p-2 amount opacity-0">
                ${data[0].amount}
              </h3>
            </div>

            <div className="w-[38px] md:w-auto m-0 md:mr-0.5 text-center flex flex-col-reverse">
              <h4 className="text-xs mt-1 font-light text-mediumBrown">
                {data[1].day}
              </h4>
              <span className="cursor-pointer h-[75px] w-8 md:w-10 bg-softRed hover:bg-softRed/70 mx-auto block rounded chart"></span>
              <h3 className="text-[10px] md:text-xs bg-darkBrown text-white rounded md:rounded-md mb-2 p-1 md:p-2 amount opacity-0">
                ${data[1].amount}
              </h3>
            </div>

            <div className="w-[38px] md:w-auto m-0 md:mr-0.5 text-center flex flex-col-reverse">
              <h4 className="text-xs mt-1 font-light text-mediumBrown">
                {data[2].day}
              </h4>
              <span className="cursor-pointer h-[120px] w-8 md:w-10 bg-cyan hover:bg-cyan/70 mx-auto block rounded chart"></span>
              <h3 className="text-[10px] md:text-xs bg-darkBrown text-white rounded md:rounded-md mb-2 p-1 md:p-2 amount opacity-0">
                ${data[2].amount}
              </h3>
            </div>

            <div className="w-[38px] md:w-auto m-0 md:mr-0.5 text-center flex flex-col-reverse">
              <h4 className="text-xs mt-1 font-light text-mediumBrown">
                {data[3].day}
              </h4>
              <span className="cursor-pointer h-[65px] w-8 md:w-10 bg-softRed hover:bg-softRed/70 mx-auto block rounded chart"></span>
              <h3 className="text-[10px] md:text-xs bg-darkBrown text-white rounded md:rounded-md mb-2 p-1 md:p-2 amount opacity-0">
                ${data[3].amount}
              </h3>
            </div>

            <div className="w-[38px] md:w-auto m-0 md:mr-0.5 text-center flex flex-col-reverse">
              <h4 className="text-xs mt-1 font-light text-mediumBrown">
                {data[4].day}
              </h4>
              <span className="cursor-pointer h-12 w-8 md:w-10 bg-softRed hover:bg-softRed/70 mx-auto block rounded chart"></span>
              <h3 className="text-[10px] md:text-xs bg-darkBrown text-white rounded md:rounded-md mb-2 p-1 md:p-2 amount opacity-0">
                ${data[4].amount}
              </h3>
            </div>

            <div className="w-[38px] md:w-auto m-0 md:mr-0.5 text-center flex flex-col-reverse">
              <h4 className="text-xs mt-1 font-light text-mediumBrown">
                {data[5].day}
              </h4>
              <span className="cursor-pointer h-[100px] w-8 md:w-10 bg-softRed hover:bg-softRed/70 mx-auto block rounded chart"></span>
              <h3 className="text-[10px] md:text-xs bg-darkBrown text-white rounded md:rounded-md mb-2 p-1 md:p-2 amount opacity-0">
                ${data[5].amount}
              </h3>
            </div>

            <div className="w-[38px] md:w-auto text-center flex flex-col-reverse">
              <h4 className="text-xs mt-1 font-light text-mediumBrown">
                {data[6].day}
              </h4>
              <span className="cursor-pointer h-12 w-8 md:w-10 bg-softRed hover:bg-softRed/70 mx-auto block rounded chart"></span>
              <h3 className="text-[10px] md:text-xs bg-darkBrown text-white rounded md:rounded-md mb-2 p-1 md:p-2 amount opacity-0">
                ${data[6].amount}
              </h3>
            </div>

          </div>

          <div className="flex justify-between items-end py-4">
            <div>
              <h1 className="text-sm text-mediumBrown">Total this month</h1>
              <h1 className="mt-1 text-4xl font-bold text-darkBrown">
                $478.33
              </h1>
            </div>

            <div>
              <h3 className="text-darkBrown font-bold text-right text-sm">
                +2.4%
              </h3>
              <h3 className="text-mediumBrown text-sm">from last month</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
