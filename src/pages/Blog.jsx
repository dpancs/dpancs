import { Link, useParams } from 'react-router-dom';
import { useMemo, useState } from 'react';
import './Blog.css';

// Add migrated posts here. Keeping posts as data makes it easy to paste in
// the remaining WordPress archive without changing the page layout.
const posts = [
  {
    slug: 'why-games-expire-consumer-rights-in-gaming',
    title: 'Why Games Expire: Consumer Rights in Gaming',
    date: 'January 16, 2026',
    category: 'Technology',
    tags: ['Gaming', 'Consumer rights', 'Nintendo', 'PlayStation', 'Xbox'],
    excerpt: 'Modern games can disappear when the servers behind them shut down. A look at digital ownership, subscriptions, and why game preservation matters.',
    body: [
      { type: 'heading', text: 'WHY EA WHY?' },
      'The trend of games expiring after a few years, particularly evident in titles like EA’s FIFA franchise, raises significant concerns regarding consumer rights and ownership in gaming. Unlike older games, which players could purchase and enjoy indefinitely, many modern titles now rely on servers and online services that may not last as long as the games themselves.',
      'This last year I lost access to continue playing FIFA 23 as the EA servers were shutoff and all they gave users was option to purchase the new version of the game for 10$ discount.',
      { type: 'heading', text: 'The Reality of Digital Ownership' },
      { type: 'list', items: [
        'Limited Access: Modern games often require a constant online connection or rely on servers that can be shut down. When these services are discontinued, players lose access, even for games they’ve purchased.',
        'Subscription Models: Games are increasingly transitioning to subscription services, where players pay regularly for access rather than owning a copy. While this might provide a large library of games, it also means that access could end if a subscription is canceled.',
        'Microtransactions and DLC: Many contemporary games, including FIFA, monetize through microtransactions and downloadable content (DLC). This strategy can make the base game feel incomplete and puts pressure on players to spend more to enjoy the full experience.',
      ] },
      { type: 'heading', text: 'Nostalgia for Physical Media' },
      { type: 'list', items: [
        'Ownership Rights: Previously, when players bought a game, they owned a physical copy that could be played indefinitely. This sense of ownership is diminishing in an era of digital downloads.',
        'Game Preservation: Older games are often archived and remain playable due to a physical media presence. Once servers are taken offline, many modern titles, especially those without local servers or single-player modes, face obsolescence.',
      ] },
      { type: 'heading', text: 'Financial Implications for Consumers' },
      { type: 'list', items: [
        'Recurring Costs: As games become increasingly reliant on online services, players may find themselves needing to invest continually in both initial purchases and ongoing service fees, which can add up over time.',
        'Value Perception: The financial model changes how players perceive value. With traditional ownership, the perception of value was tied to a one-time purchase. Now, players may feel they need to spend continually to get enjoyment from their games.',
      ] },
      { type: 'heading', text: 'Conclusion' },
      'The expiration of games and the loss of ownership rights reflect broader changes in the gaming industry. Advocating for consumer rights and greater transparency regarding service lifespans can help reshape the future of gaming, ensuring players can enjoy their favorite titles without the looming threat of expiration.',
    ],
  },
  {
    slug: 'software-engineering-interviews-so-flawed',
    title: 'Software Engineering Interviews: So Flawed',
    date: 'August 17, 2021',
    category: 'Technology',
    tags: ['Engineering', 'Hiring', 'Interviews', 'LeetCode'],
    excerpt: 'After sitting on both sides of the interview table, some thoughts on puzzle questions, practical coding, and making technical hiring more human.',
    body: [
      'I have been a software engineer for the past 10 years now and recently I was wondering how flawed the interview process for software developers is. I have been on both sides of the table, as an interviewer and interviewee, and feel like the whole LeetCode culture of interviews is not the right way to interview.',
      'When I started working in the Bay Area, the first internship I got was because of a referral. The interview was fully conducted on the phone and the interviewer asked me basic questions on OOP, Java, and SQL. Given that it was an internship, the interview was easy to get through. Luckily, the internship transformed into a full-time role. I have since switched two other jobs and here are my musings over the past 10 years.',
      'NEVER ASK PUZZLES EVER',
      'I never understood why someone who is great at solving a puzzle question would necessarily be awesome at regular coding or spinning up a microservice. I am glad that we don’t have puzzles anymore in software engineering interviews — or do we?',
      'LEETCODE ALGORITHM QUESTIONS',
      'To me, asking someone a data structures or algorithms question and expecting them to solve it is often a test of how well they cram. Algorithm questions are like puzzles: you either get it or you don’t. For some hard questions, you have to have seen them before otherwise there is no way you could solve them in an interview setting.',
      'I used to interview candidates when I was a junior engineer and would base my decision largely on whether they solved a problem. Now I give less weight to solving the problem and more to whether they can tell me something interesting about the technologies listed on their resume and explain why they chose them.',
      'I do ask a coding question, but it is a simple one. I want to see whether proper tests are written, edge cases are handled, and whether the exercise can become a dialogue about what it would be like to work together day to day.',
      'Companies are shifting toward giving candidates a problem related to the company’s work and allowing them to use their own time, equipment, and strategy before walking through the result. This is much better: the candidate can use whatever they want as long as they deliver good code, architecture, and design.',
      'Lastly, with interviews being conducted virtually, I believe both sides should enable their webcam. It is important for an interviewee, and it should be important for the interviewer as well so the candidate feels comfortable.',
    ],
  },
  {
    slug: 'from-android-back-to-ios',
    title: 'From Android Back to iOS',
    date: 'June 12, 2020',
    category: 'Cell Phones',
    tags: ['Android', 'Apple', 'iPhone', 'Pixel'],
    excerpt: 'What I missed after moving from a Google Pixel to an iPhone, including split screen, language support, screen pinning, and voice assistants.',
    body: [
      'I left my Google Pixel 3 XL on the top of my wife’s car while I played outside the garage with my daughter. My wife came downstairs and, given that she is short, didn’t see the phone on the car roof and drove off for grocery shopping. The phone went with her but never came back. We searched all around the neighborhood for nearly three hours but never found it.',
      'Stupid of me to have turned Location Services off on the phone, so the last known location always showed as my home. I contacted the Intuit device team and they said I could not get a Pixel 3 XL anymore, so I went with an Apple iPhone 11 Pro Max.',
      'Siri Sucks!!!',
      'The major issue I have faced with iOS is Siri. Most of the time, she misunderstands me and the response is not useful. I was super in love with Google Assistant and used it a lot, which I don’t see myself doing with Siri. I have been disappointed enough to turn Siri off altogether.',
      'Split Screen',
      'With the Pixel 3 XL, I loved that I could play a YouTube video and compose messages or respond to notifications without interrupting the video. I could also play a game in half screen while chatting with a friend. I haven’t been able to split the screen with two apps on the iPhone so far.',
      'Language support',
      'Gboard is so awesome on Android. I installed transliteration keyboards for Hindi and Gujarati so whatever I typed in English converted to Devanagari script. I could not do that with the iPhone keyboard, and installing Gboard did not solve the operating system limitation.',
      'Pin screen',
      'Have you ever handed your phone to a kid and found them switching apps around, accidentally making a phone call, or doing something else? Android has a screen-pinning option that prevents that. When handing the phone to my daughter, I can pin one app and she cannot move between apps. Amazing.',
      'After using both CarPlay and Android Auto, I found CarPlay less integrated with my car controls than Android Auto and Google Assistant. Having said that, I do love Apple iOS: it just works, the features are better baked in, and I am totally in love with the iWatch.',
    ],
  },
  {
    slug: 'home-sweet-home',
    title: 'Home Sweet Home!',
    date: 'April 30, 2020',
    category: 'Personal',
    tags: ['Home', 'Family', 'Memories'],
    excerpt: 'A reflection on the places that become home, the memories held inside them, and the feeling of returning to a childhood couch.',
    body: [
      '“Home is not a place… it is a feeling.” — Anonymous',
      'I read this quote today and it got me thinking. It is a simple quote yet so true today when we are sheltered at home because of COVID-19.',
      'I have been extremely lucky to have bought a house in 2014 that has provided warmth and shelter. I have had beautiful memories in this place, but if someone asks where my home is, subconsciously I think of the home in Gandhinagar.',
      'I call the house in Gandhinagar my home because I spent the best part of my life there. I spent days with no worries, stress, or responsibilities and had the unquestionable love and warmth of my parents. I can close my eyes and picture every nook and cranny of the house.',
      'There is a couch about four feet wide that has been with us since the 1990s. I spent a ton of time on that couch reading books, falling asleep, playing video games with cousins and friends, studying for exams, snuggling up to my parents, eating while watching TV, and dreaming about childhood crushes. Even today, I feel at home when I travel back and lie down on it.',
      'I can imagine how people on their deathbeds want to travel back to their home and spend their final moments there. I believe everyone has that happy, euphoric place where they are a child again and the burdens of the world cannot impact them.',
      'Even if my parents move out, the house is sold, or it is destroyed, I don’t think I can ever feel the way I feel about that place in another house. It is my home — my one and only home.',
    ],
  },
  {
    slug: 'why-air-india-why',
    title: 'Why Air India Why??!!',
    date: 'November 27, 2019',
    category: 'Travel & Food',
    tags: ['Travel', 'Air India', 'Customer service'],
    excerpt: 'A frustrating flight experience turns into a broader question about service, safety, and what passengers should expect from a national carrier.',
    body: [
      'My wife and daughter had to get on a flight to Ahmedabad from San Francisco recently. The quickest flight was Air India from SFO to Delhi and eventually Ahmedabad, and I was glad because my last experience with the carrier had been excellent.',
      'They flew Air India and I cannot resist sharing my painful experience aboard AI 174 on November 20, 2019.',
      'After takeoff, my wife realized that my daughter’s entertainment console was not working. The movie collection was outdated, and later she realized the working screen, TV remote, and headphone port did not work. That was a bummer for a 16-hour flight and more like torture without entertainment.',
      'Because the remotes did not work, there was no way to turn on the overhead lights to play or read. My wife asked the flight attendants multiple times if they could switch on the lights but they could not help. They spent most of the flight in the dark.',
      'The kids’ meals were the exact same sauce with spaghetti for lunch and pasta for dinner. Even for small things like trash, the air hostess came only once before landing. A broken hand rest exposed wires and a headrest kept falling down after a few seconds.',
      'Air India is a national carrier and pride for the nation, but it is disappointing to see such poor performance. We complained on Twitter and through the website, but I do not think anything was gained. The customer is surely not the maharajah anymore.',
    ],
  },
  {
    slug: 'exclude-regex-based-paths-in-spring-boot',
    title: 'Exclude Regex Based Paths in Spring Boot',
    date: 'November 30, 2018',
    category: 'Coding',
    tags: ['Java', 'Spring Boot', 'Regex', 'APIs'],
    excerpt: 'A practical note on excluding a reserved path from a Spring Boot path-variable mapping using a regular expression.',
    body: [
      'Question',
      'I have a controller with this mapping:',
      '@GetMapping(value = "/dawson/v1/{dataType}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)\npublic ResponseEntity respondWithData(@PathVariable String dataType, @RequestParam(name = "minDate") String min_date, @RequestParam(name = "maxDate") String max_date, @RequestParam(USERID) String user_id, @RequestHeader(value = "Authorization") String authorizationHeader) {',
      'Here, dataType can be String, Map, Object, or Calendar. I created another GetMapping in a different class for /dawson/v1/signInReq, but that path instead matches the dataType method. Is there a way to exclude signInReq as a match?',
      'Answer',
      'There is a way to exclude certain mapped paths using a regular expression. Add a negative lookahead to the path variable:',
      '@GetMapping(value = "/dawson/v1/{dataType:^.*(?!signInReq)}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)',
      'By using a regular expression, signInReq is filtered out from the acceptable data types.',
    ],
  },
  {
    slug: 'sending-sms-with-twilio-using-node-js',
    title: 'Sending SMS with Twilio Using Node.js',
    date: 'January 20, 2017',
    category: 'Technology',
    tags: ['Node.js', 'Twilio', 'SMS'],
    excerpt: 'A compact Twilio and Node.js walkthrough for sending a first test message, including the setup details worth keeping nearby.',
    body: [
      'This blog post is more of a tutorial for myself. Prior to trying this out, buy a phone number from your online Twilio account that allows SMS communication.',
      'First install the Twilio SDK for Node in the directory where you want to send messages:',
      'mkdir ~/twilio-code\ncd ~/twilio-code\nnpm install twilio',
      'Create a file named sendTest.js:',
      "var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';\nvar authToken = '0XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';\n\nvar client = require('twilio')(accountSid, authToken);\n\nclient.messages.create({\n  to: '+11234567890',\n  from: '+19876543210',\n  body: 'How you doin?',\n}, function(err, message) {\n  console.log(message.sid);\n});",
      'Run node sendTest.js. Every Twilio message costs money, so be careful with testing or use the test SID and Auth Token provided by Twilio.',
    ],
  },
  {
    slug: 'scheduled-call-forwarding-with-twilio-aws-lambda-api-gateway',
    title: 'Scheduled Call Forwarding Using Twilio, AWS Lambda & API Gateway',
    date: 'October 17, 2016',
    category: 'Coding',
    tags: ['AWS', 'Lambda', 'Twilio', 'API Gateway'],
    excerpt: 'Design notes and implementation steps for routing calls to different destinations based on the time of day.',
    body: [
      'Introduction',
      'I was tasked with implementing time-based call forwarding. Our onsite team received calls during business hours and an offshore team received calls outside those hours. We initially considered 8x8, but switched to Twilio because of routing needs and call quality.',
      'Design',
      'Twilio provides phone numbers and calls a URL whenever a call arrives. For low call volume, AWS Lambda and API Gateway are scalable and inexpensive. If call volumes increase, we can expose an endpoint from the application.',
      'TwiML Bins',
      'For simple forwarding, Twilio provides an XML-like language called TwiML. For time-specific routing, however, we need our own webhook code because TwiML does not support complex conditionals.',
      'AWS Lambda and API Gateway',
      'AWS Lambda receives the call event, checks the time and number, and returns different TwiML to Twilio. API Gateway provides the public REST endpoint that triggers the Lambda function and returns the XML response.',
      'The original implementation used Node.js, moment to compare the hour, and a small query-string parser for Twilio’s form-urlencoded request. The final steps were configuring the Lambda trigger, adding an API Gateway POST method, enabling CORS, and placing the API Gateway URL in the Twilio phone-number webhook configuration.',
    ],
  },
  {
    slug: 'windows-usb-external-hdd-on-osx',
    title: 'Windows USB/External HDD on OSX',
    date: 'July 4, 2016',
    category: 'Technology',
    tags: ['Mac', 'Windows', 'Storage'],
    excerpt: 'How to work with a Windows-formatted NTFS drive on a Mac without reformatting it and losing the data stored on it.',
    body: [
      'It is a pain to open an external hard drive or USB stick formatted on a Windows machine when trying to use it with a MacBook. I was able to read my Windows 7 NTFS drive on my Mac, but could not edit it.',
      'There are paid tools that enable writing to NTFS, but I try not to pay for tools I have never heard of. Reformatting the drive would wipe all the data. The following steps allow macOS to access the drive without formatting it.',
      'You need administrator rights. In Terminal, edit fstab:',
      'sudo vi /etc/fstab',
      'Add this line, replacing WESTERNDIGITAL with the name of your drive:',
      'LABEL=WESTERNDIGITAL none ntfs rw,auto,nobrowse',
      'Then unmount and mount the drive:',
      'diskutil unmount WESTERNDIGITAL\ndiskutil mount WESTERNDIGITAL',
      'If the drive name contains spaces, use quotes. You can find the name by running ls /Volumes/. To open the drive in read-write mode, run open /Volumes/WESTERNDIGITAL.',
    ],
  },
];

const categories = ['All', ...new Set(posts.map((post) => post.category))];

function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const searchableText = `${post.title} ${post.excerpt} ${post.tags.join(' ')}`.toLowerCase();
      return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [activeCategory, query]);

  const featuredPost = posts[0];

  return (
    <main className="blog-page">
      <section className="blog-hero">
        <div>
          <p className="resume-eyebrow">DPancs &amp; thoughts</p>
          <h1>Notes on technology, life, and everything in between.</h1>
          <p className="blog-intro">
            Personal essays, practical engineering notes, and observations about
            phones, travel, food, movies, and the things worth thinking about.
          </p>
        </div>
        <p className="blog-local-note">A locally hosted archive</p>
      </section>

      <section className="blog-feature" aria-labelledby="featured-heading">
        <div className="feature-label">Latest from the archive</div>
        <div className="feature-content">
          <div>
            <p className="post-category">{featuredPost.category}</p>
            <h2 id="featured-heading">{featuredPost.title}</h2>
            <p>{featuredPost.excerpt}</p>
          </div>
          <div className="feature-meta">
            <time>{featuredPost.date}</time>
            <Link to={`/blog/${featuredPost.slug}`}>Read the post <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="blog-archive" aria-labelledby="archive-heading">
        <div className="archive-heading">
          <div>
            <p className="resume-eyebrow">The archive</p>
            <h2 id="archive-heading">All posts</h2>
          </div>
          <label className="blog-search">
            <span className="sr-only">Search posts</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search posts" type="search" />
          </label>
        </div>

        <div className="category-list" aria-label="Filter by category">
          {categories.map((category) => (
            <button className={activeCategory === category ? 'category-button active' : 'category-button'} key={category} onClick={() => setActiveCategory(category)} type="button">
              {category}
            </button>
          ))}
        </div>

        <div className="post-grid">
          {filteredPosts.map((post) => (
            <article className="post-card" key={post.slug}>
              <div className="post-card-top">
                <span className="post-category">{post.category}</span>
                <time>{post.date}</time>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="post-card-footer">
                <div className="post-tags">
                  {post.tags.slice(0, 2).map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <Link to={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
                  Read <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
        {!filteredPosts.length && <p className="empty-state">No posts match that search.</p>}
      </section>
    </main>
  );
}

function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((candidate) => candidate.slug === slug);

  if (!post) {
    return (
      <main className="blog-post-page">
        <p className="resume-eyebrow">Not found</p>
        <h1>That post does not exist.</h1>
        <Link className="back-link" to="/blog">← Back to the archive</Link>
      </main>
    );
  }

  return (
    <main className="blog-post-page">
      <Link className="back-link" to="/blog">← Back to the archive</Link>
      <header className="blog-post-header">
        <p className="post-category">{post.category}</p>
        <h1>{post.title}</h1>
        <time>{post.date}</time>
        <div className="post-tags post-header-tags">
          {post.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </header>
      <article className="blog-post-body">
        {post.body.map((block, index) => {
          if (typeof block !== 'string') {
            if (block.type === 'list') {
              return (
                <ol key={`${post.slug}-${index}`}>
                  {block.items.map((item) => {
                    const [label, ...description] = item.split(': ');
                    return <li key={item}><strong>{label}:</strong>{` ${description.join(': ')}`}</li>;
                  })}
                </ol>
              );
            }

            return <p key={`${post.slug}-${index}`} className="blog-subheading">{block.text}</p>;
          }

          return block.includes('\n')
            ? <pre key={`${post.slug}-${index}`}><code>{block}</code></pre>
            : <p key={`${post.slug}-${index}`}>{block}</p>;
        })}
      </article>
    </main>
  );
}

function Blog() {
  const { slug } = useParams();
  return slug ? <BlogPost /> : <BlogIndex />;
}

export default Blog;
