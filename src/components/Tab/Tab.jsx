import { useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import PhotographyTabImage from '../../assets/images/photography.png';
import SocialTabImage from '../../assets/images/social1.png';
import PrTabImage from '../../assets/images/pr.png';
import './Tab.scss';

const Tab = () => {
  const [toggledTab, setToggledTab] = useState(1);

  const toggleTab = (index) => setToggledTab(index);

  return (
    <div className="tab">
      <ul className="tab_nav">
        <li
          className={(toggledTab === 1) ? 'nav_active' : ''}
          onClick={() => toggleTab(1)}
        >
          Video
        </li>
        <li
          className={(toggledTab === 2) ? 'nav_active' : ''}
          onClick={() => toggleTab(2)}
        >
          Photography
        </li>
        <li
          className={(toggledTab === 3) ? 'nav_active' : ''}
          onClick={() => toggleTab(3)}
        >
          Social
        </li>
        <li
          className={(toggledTab === 4) ? 'nav_active' : ''}
          onClick={() => toggleTab(4)}
        >
          PR
        </li>
        <li
          className={(toggledTab === 5) ? 'nav_active' : ''}
          onClick={() => toggleTab(5)}
        >
          Radio
        </li>
      </ul>
      <ul className="tab_content">
        <li className={(toggledTab === 1) ? 'content_active' : ''}>
          <figure>
            <ReactPlayer
              url='https://www.youtube.com/watch?v=5vP9go4Jdxs'
              // width='100%'
              muted={true}
            />
          </figure>
          <article>
            <h3>Video</h3>
            <p>
              A 60 seconds promotianal movie trailer played on TV, online as per rolls and
              via Facebook, to promote the movie that was waiting to be written to our
              movie-loving target audience, and encourage them to enter.
            </p>
            <a href="#">View Project</a>
          </article>
        </li>

        <li className={(toggledTab === 2) ? 'content_active' : ''}>
          <figure>
            <img src={PhotographyTabImage} alt="photography image" />
          </figure>
          <article>
            <h3>Photography</h3>
            <p>
              Shots posted on Facebook and Instagram every day inspired thousands of entries.
              We reacted to the storyline as it developed in real time, selecting and treating
              the next image according to the day’s winning scene.
            </p>
            <a href="#">View Project</a>
          </article>
        </li>

        <li className={(toggledTab === 3) ? 'content_active' : ''}>
          <figure>
            <img src={SocialTabImage} alt="social image" />
          </figure>
          <article>
            <h3>Social</h3>
            <p>
              The complete movie storyboard showcased the entire story, completely inspired by
              stunning images captured in the Whitsundays, with all 20 winning scenes accompanying
              the images.
            </p>
            <a href="#">View Project</a>
          </article>
        </li>

        <li className={(toggledTab === 4) ? 'content_active' : ''}>
          <figure>
            <img src={PrTabImage} alt="pr image" />
          </figure>
          <article>
            <h3>PR</h3>
            <p>
              We enlisted the help of Craig Pearce as script supervisor, who was tasked with
              choosing the winner each day to ensure the story flowed properly, and providing daily
              writing tips to encourage people to take part.
            </p>
            <a href="#">View Project</a>
          </article>
        </li>

        <li className={(toggledTab === 5) ? 'content_active' : ''}>
          <figure></figure>
          <article>
            <h3>Radio</h3>
            <p>
              We enlisted the help of Craig Pearce as script supervisor, who was tasked with choosing
              the winner each day to ensure the story flowed properly, and providing daily
            </p>
            <a href="#">View Project</a>
          </article>
        </li>
      </ul>
    </div>
  )
}

export default Tab