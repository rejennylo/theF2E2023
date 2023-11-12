import { ReactComponent as SloganSm } from '../assets/slogan-sm.svg';
import { ReactComponent as SloganLg } from '../assets/slogan-lg.svg';
import { ReactComponent as TheF2ESm } from '../assets/2023TheF2E-sm.svg';
import { ReactComponent as TheF2ELg } from '../assets/2023TheF2E-lg.svg';
import { ReactComponent as MiaoLineSm } from '../assets/Miao-Li-Han-outline-sm.svg';
import { ReactComponent as MiaoLineLg } from '../assets/Miao-Li-Han-outline-lg.svg';
import { ReactComponent as MiaoFill } from '../assets/Miao-Li-Han-fill.svg';
import { ReactComponent as EnSloganSm } from '../assets/KEEP-IT-POSSIBLE-sm.svg';
import { ReactComponent as EnSloganLg } from '../assets/KEEP-IT-POSSIBLE-lg.svg';

export const Banner = () => {
  return (
    <div name="banner-wrap" className="bg-medium-gray">
      <div
        name="banner-container"
        className="m-auto max-w-[1200px] px-4 py-[20px] lg:py-[150px] relative"
      >
        <h2 className="mb-20">
          <div className="flex flex-col items-start">
            <span name="the-f2e" className="flex justify-center w-[345px] lg:w-auto">
              <TheF2ESm className="lg:hidden my-3" />
              <TheF2ELg className="hidden lg:block mb-6" />
            </span>
            <span name="slogan" className="block">
              <SloganSm className="lg:hidden mb-5" />
              <SloganLg className="hidden lg:block mb-10" />
            </span>
          </div>
          <span name="miao-line" className="block overflow-x-hidden">
            <MiaoLineSm className="lg:hidden ml-10" />
            <MiaoLineLg className="hidden lg:block ml-16" />
          </span>
        </h2>
        <div className="relative flex items-end">
          <span name="en-slogan" className="block relative">
            <EnSloganSm className="lg:hidden absolute -top-[500px]" />
            <EnSloganLg className="hidden lg:block absolute -top-[580px]" />
          </span>
          <div
            name="text-card"
            className="min-h-[296px] p-3 md:p-7 ml-[10%] lg:p-10 border-[3px] border-main-purple shadow-[-4px_4px_0_0_rgba(69,39,160,1)] lg:shadow-[-10px_10px_0_0_rgba(69,39,160,1)] rounded-tl-[80px] rounded-br-[80px] bg-light-gray z-10"
          >
            <h5 className="text-center mb-3 lg:mb-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              護航台灣幸福經濟
              <br className="md:hidden" />
              從照顧每一隻貓咪開始
            </h5>
            <p className="md:text-xl lg:text-2xl lg:font-semibold mb-3 lg:mb-6 md:leading-8 lg:leading-10">
              我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的
              GDP 經濟帶來巨大效益。
            </p>
            <p className="md:text-xl lg:text-2xl lg:font-semibold md:leading-8 lg:leading-10">
              因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。
            </p>
          </div>
          <span className="absolute h-auto w-[242px] lg:w-[500px] -top-[300px] lg:-top-[600px] -right-1 z-1">
            <img src="../src/assets/maio-photo.png" alt="image" />
          </span>
        </div>
      </div>
    </div>
  );
};
