import { ReactComponent as SloganSm } from '../assets/slogan-sm.svg';
import { ReactComponent as TheF2E } from '../assets/2023TheF2E.svg';
import { ReactComponent as MiaoLine } from '../assets/Miao-Li-Han-outline.svg';
import { ReactComponent as KIP } from '../assets/KEEP-IT-POSSIBLE.svg';

export const Banner = () => {
  return (
    <div name="banner-wrap" className="bg-medium-gray">
      <div
        name="banner-container"
        className="m-auto min-h-[727px] max-w-[1100px] p-[20px] relative"
      >
        <h2 className="flex flex-col items-center h-[390px]">
          <TheF2E className="my-3" />
          <SloganSm className="mb-5" />
          <div className="absolute top-[180px] left-0">
            <MiaoLine className="absolute top-0 left-9" />
            <KIP className="absolute top-0 left-0" />
          </div>
        </h2>
        <div className="relative">
          <div
            name="text-card"
            className="min-h-[296px] max-w-[1000px] p-3 md:p-7 lg:p-10 ml-[8%] border-[3px] border-main-purple shadow-[-4px_4px_0_0_rgba(69,39,160,1)] lg:shadow-[-10px_10px_0_0_rgba(69,39,160,1)] rounded-tl-[80px] rounded-br-[80px] bg-light-gray absolute z-10"
          >
            <h5 className="text-center mb-3 lg:mb-8 md:text-2xl lg:text-3xl">
              護航台灣幸福經濟
              <br className="md:hidden" />
              從照顧每一隻貓咪開始
            </h5>
            <p className="lg:text-xl lg:font-semibold mb-3 lg:mb-6">
              我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的
              GDP 經濟帶來巨大效益。
            </p>
            <p className="lg:text-xl lg:font-semibold">
              因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。
            </p>
          </div>
          <span className="absolute h-auto w-[242px] md:w-[340px] lg:w-[400px] -top-[300px] md:-top-[370px] lg:-top-[450px] -right-2 z-1">
            <img src="../src/assets/maio-photo.png" alt="image" />
          </span>
        </div>
      </div>
    </div>
  );
};
