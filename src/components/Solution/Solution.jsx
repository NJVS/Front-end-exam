import './Solution.scss';

const Solution = ({ ref }) => {
  return (
    <section ref={ref} className='solution' id='solution'>
      <h2>Solution</h2>
      <div>
        <article>
          <p>
            We knew movies rated high on the list of our target's interest and, with incredible
            beaches, seaplanes, yachts and glamorous locations, the Whitsundays is the perfect 
            setting for a movie
          </p>
          <p>So we invited Australieans to write it:</p>
          <h3>
            The Whitsundays. <br />
            A movie that's waiting to be written.
          </h3>
          <p>
            We enlisted world-renowned screenwriter Craig Pearce as Script Supervisor. Then for
            20 days we posted a daily storyboard image on Facebook and Instagram, inviting the
            public to write scenes for a chance to win a $10,000 luxury holiday.
          </p>
        </article>
        <article>
          <p>The campaign launched with a trailer, radio and online advertising.</p>
          <p>
            We reacted to the storyline as it developed, selecting and treating images according
            to the previous winning scene
          </p>
          <p>Each scene written and shared become a compelling "ad" for the Whitsundays.</p>
          <p>
            Together, a Hollywood screenwiter and the Australian public had created the world's
            first crowd-sourced movie storyboard and a story uuniverse with millions of possible
            permutations.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Solution