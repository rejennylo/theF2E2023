import { activityCards } from './datas';
import { donateDatas, issueCards, menuItems, footerInfos } from './datas';
import { Activity } from './components/Activity';
import { Banner } from './components/Banner';
import { Header } from './components/Header';
import { Issue } from './components/Issue';
import { Donate } from './components/Donate';
import { Footer } from './components/Footer';
import { Service } from './components/Service';

function App() {
  // 捲動到指定位置
  function scrollToId(id, setMenuIsOpen) {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'center',
    });
    setMenuIsOpen(false);
  }

  return (
    <div className="border-x-[5px] md:border-t-[5px]  border-main-purple">
      <Header menus={menuItems} scrollToId={scrollToId} />
      <Banner />
      <Activity cards={activityCards} />
      <Issue cards={issueCards} />
      <Donate donateDatas={donateDatas} />
      <Service />
      <Footer menus={menuItems} scrollToId={scrollToId} infos={footerInfos} />
    </div>
  );
}

export default App;
