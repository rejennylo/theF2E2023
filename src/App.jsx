import { activityCards } from './datas';
import { issueCards } from './datas';
import { Activity } from './components/Activity';
import { Banner } from './components/Banner';
import { Header } from './components/Header';
import { Issue } from './components/Issue';

function App() {
  return (
    <div className="border-x-[5px] md:border-t-[5px]  border-main-purple">
      <Header />
      <Banner />
      <Activity cards={activityCards} />
      <Issue cards={issueCards} />
    </div>
  );
}

export default App;
