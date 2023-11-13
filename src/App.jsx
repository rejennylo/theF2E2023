import { cards } from './datas';
import { Activity } from './components/Activity';
import { Banner } from './components/Banner';
import { Header } from './components/Header';

function App() {
  return (
    <div className="border-x-[5px] md:border-t-[5px]  border-main-purple">
      <Header />
      <Banner />
      <Activity cards={cards} />
    </div>
  );
}

export default App;
