import Tab from '../Tab/Tab';
import './Results.scss';

const Results = ({ ref }) => {
  return (
    <section ref={ref} className="results" id="results">
      <h2>Results & Effectiveness</h2>
      <Tab />
    </section>
  )
}

export default Results