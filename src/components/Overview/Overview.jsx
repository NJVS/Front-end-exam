
import Logo from '../../assets/images/logo.png';
import './Overview.scss';

const Overview = ({ ref }) => {
  return (
    <section ref={ref} className="overview" id="overview">
      <figure>
        <div>
          <img src={Logo} alt="" />
        </div>
      </figure>
      <article>
        <div className="text-group">
          <h2 className='text-bold'>Background <br /> & Audience
          </h2>
          <p>
            Tourisim & Events Queensland wanted to increase consideration of The Whitsundays amoing
            'social fun seekers'; digitally savvy consumers that socialise substantially online.
          </p>
        </div>
        <div className="text-group">
          <h2>Problem</h2>
          <p>The Whitsundays was losing its cachet as an aspirational holiday location.</p>
        </div>
        <div className="text-group">
          <h2>Objective</h2>
          <p>Shift perceptions and re-build the Whitsundays' social currency as a world-class destination.</p>
        </div>
      </article>
    </section>
  )
}

export default Overview