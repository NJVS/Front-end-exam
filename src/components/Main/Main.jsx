import Hero from '../Hero/Hero';
import Overview from '../Overview/Overview';
import Results from '../Results/Results';
import Solution from '../Solution/Solution';
import './Main.scss';

const Main = () => {
  
  return (
    <main>
      <Hero />
      <Overview />
      <Solution />
      <Results />
    </main>
  )
}

export default Main