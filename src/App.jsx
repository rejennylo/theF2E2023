import { activityCards } from './datas';
import { issueCards } from './datas';
import { Activity } from './components/Activity';
import { Banner } from './components/Banner';
import { Header } from './components/Header';
import { Issue } from './components/Issue';
import { Donate } from './components/Donate';
import { Footer } from './components/Footer';
import {Test} from './components/Test_Activity'

function App() {
  return (
    <div className="border-x-[5px] md:border-t-[5px]  border-main-purple">
      <Header />
      {/* <Test cards={activityCards} /> */}
      <Banner />
      <Activity cards={activityCards} />
      <Issue cards={issueCards} />
      <Donate />
      <Footer />
    </div>
  );
}

export default App;
