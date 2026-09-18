import { Link, useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import './Blog.css';
import { SITE, toIsoDate, useSeo } from '../seo';
import migratedPostsPart1 from './migratedPostsPart1';
import migratedPostsPart2 from './migratedPostsPart2';
import migratedPostsPart3 from './migratedPostsPart3';
import migratedPostsPart4 from './migratedPostsPart4';
import migratedPostsPart5 from './migratedPostsPart5';
import migratedPostsPart6 from './migratedPostsPart6';

// Add migrated posts here. Keeping posts as data makes it easy to paste in
// the remaining WordPress archive without changing the page layout.
// When adding a post, also add its URL to public/sitemap.xml.
const originalPosts = [
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
    slug: 'blessed-with-a-daughter',
    title: 'Blessed with a daughter',
    date: 'August 6, 2018',
    category: 'Uncategorized',
    tags: ['Family', 'Daughter', 'Intuit', 'AWS'],
    excerpt: 'A personal update about family, returning to writing, and the move from startup work to a larger engineering organization.',
    body: [
      'The last post I was able to write was January 20, 2017. I am starting again after almost 1.5 years as December 2016, I was blessed with the most precious baby girl. I have had no time to write a blog since then as all my free time is occupied by my lovely doll. In the past year, I moved from always working for startups (Nomis Solutions followed by Lyra Health) to working for a large organization like Intuit Inc.',
      'Leaving Lyra Health was a really big decision for me and I am so grateful to the team at Lyra Health for making me feel this valued. It was immense pleasure working in behavioral health space and get guidance from Jenny Gonsalves and Albert Baranchuk. I am sure that under David’s leadership, Lyra is going to do some awesome work and is a company I am glad that I contributed to. I learnt a lot about working with AWS, Twilio APIs, managing projects from start to finish and managing third party vendors for email communication (SalesForce and SparkPost) and Okta for authentication.',
      'Lastly, I am now a certified AWS Solution Architect – professional and cloud practitioner. Two certifications that I find valuable. At Intuit, I have been focused on working with Kubernetes deployment, managing AWS clusters and DevOps related tasks.',
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
      'I have been a software engineer for the past 10 years now and recently I was wondering about how flawed the interview process for software developers is. I have been on both sides of the table, as an interviewer and interviewee, and feel like the whole LeetCode culture of interviews is not the right way to interview.',
      'When I started working in the bay, the first internship I got was because of a referral. The interview was fully conducted on phone and the interviewer asked me basic questions on fundamentals of OOPS, JAVA and SQL. Given that it was internship, the interview was very easy to go through. Luckily, the internship transformed into a full time role. I have since switched 2 other jobs and here are my musings over the past 10 years.',
      { type: 'heading', text: 'NEVER ASK PUZZLES EVER' },
      'This is something that has changed from the age of Google puzzlers. I never understood the reason behind how someone who is great at solving a puzzle question translates to someone who would be awesome at regular coding or spinning up a microservice. I am glad that we don’t have puzzles anymore in software engineering interviews or do we?',
      { type: 'heading', text: 'LEETCODE ALGORITHM Qs' },
      'To me asking someone a DS/Algorithm question and expecting them to solve it is just a test of how they cram well. Algo questions are like puzzles… you either get it or you don’t! For some questions, you have to have seen them before otherwise there is no way an individual would be able to solve some of the hard ones.',
      'I used to interview candidates when I was a junior engineer and I would solely base my decision on whether they solved a given problem or not. Now after 10 years, I find I give less weight to solving the problem but more to whether they can tell me something interesting about stuff listed on their resume. Does the candidate know why they used a certain technology and if they have understanding of what competing tools were available.',
      'I do ask a coding question but super simple question to see if they have proper tests written, if edge cases are handled well and it is more of a dialogue to see if I would like working with the individual on daily basis.',
      'I have noticed companies shifting a bit and doing a better job at hiring interviews. Interviews at Carta, Intuit, etc large organizations now give you a problem related to the company’s work and you are allowed to come up with a solution using your time, equipment and strategy and then walkthrough it. I find this is so much better as an interviewee can use whatever he wants as long as he delivers a good code, architecture and design.',
      'The problems can be tuned for different needs (backend or frontend) allowing to gauge an individual’s skills quite fairly.',
      'Lastly, with interviews being conducted virtually, I believe it should be imperative that both sides enable their webcam. It is a must if you are interviewee and to make the candidate feel comfortable, it should be a must for the interviewer as well.',
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
      'I left my Google Pixel 3 XL on the top of my wife’s car while I played outside the garage with my daughter. My wife came downstairs and given she is short, didn’t see the phone on the car roof and drove off for grocery shopping. The phone went with her but never came back. We searched all around the neighborhood for the phone for nearly 3 hours but never found it.',
      'Stupid of my to have turned Location Services off on the phone (Habit of turning GPS off unless am using maps) so the last known location always showed as my home 😦',
      'I contacted Intuit device team and they said I cannot get a Pixel 3 XL anymore as they were out of service. I had heard some not so great reviews for the Pixel 4 XL (poor battery life, no longer supports high quality Google Photo sync, camera not working, etc.) and so went with Apple iPhone 11 Pro Max. As I have been switching back and forth the devices for a while, I didn’t have much issue in getting used to iOs but here is a listing of things I miss from the Android ecosystem.',
      { type: 'heading', text: 'Siri Sucks!!!' },
      'The first major issue I have faced with iOs is Siri. Siri is horrible!! Most of the time, she messes up in understanding me and the times she does understand, her response is not too useful. For example, me and my daughter were playing and I forgot name of Lord Krishna’s dad. I asked Siri “Who was Krishna’s dad?” and Siri responded with a contact info for a friend named Krishna of mine. Asking the same question to Google home gave the right answer.',
      'I was also super duper in love with Google assistant and used it a lot which I don’t see myself doing with Siri (coz she doesn’t understand me most of the time). A lot of times I’ve been disappointed with Siri to now have turned off Siri altogether.',
      { type: 'heading', text: 'Split Screen' },
      'With Pixel 3 XL, I loved that I could play youtube video and compose messages or respond to notifications without interrupting the youtube video. There were also times when I would be playing a game in half screen while chatting with a friend. I haven’t been able to split the screen with two apps in iPhone so far.',
      { type: 'heading', text: 'Language support' },
      'Gboard is sooooooo awesome on Android. I had installed transliteration keyboard for hindi and gujarati and so whatever I type in english would get converted to Devnagari script. I can’t do that on iOs with the iphone keyboard. Installing Gboard also didn’t help as the OS itself doesn’t seem to support devnagari script.',
      { type: 'heading', text: 'Pin screen' },
      'Have you ever had the issue of giving your phone to a kid and finding them switching the apps around, accidentally making a phone call or doing something else? Android has the pin screen option that prevents just that. When handing the phone over to my kid, I pin the screen to a particular app and unless I change it, she can’t move between apps. AMAZING!!! Don’t think this is available on iPhone yet.',
      'Do you also have any experience of how one is better than the other OS? Feel free to leave a comment.',
      { type: 'heading', text: 'iOs Carplay vs Android Auto' },
      'After using them both in my car, I can definitely say that Carplay has not been too great. I think part of the problem is Siri is still not well integrated with my car controls like Android Auto has Google Assistant integrated.',
      'However, having said all the things above, I do love Apple iOS. It just works and the features are better baked than using android. I am totally in love with the iWatch and love to keep it on when going for a walk or run.',
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
      { type: 'quote', text: '“Home is not a place… it is a feeling” — Anonymous' },
      'I read this quote today on shutterfly.com website and it got me thinking. It is a simple quote yet so true today when we are sheltered at home because of COVID-19.',
      'I have been extremely lucky to have bought a house in 2014 that has provided us with warmth and shelter. I have had some beautiful memories in this place but if someone asks me where your home is, even today subconsciously it makes me think about the home in Gandhinagar.',
      'The reason I call the house in Gandhinagar my home is because I spent the best part of my life there. I spent the days I had no worries, no stress, no responsibilities and had the unquestionable love and warmth of my parents. I can close my eyes today and can picture each and every nook and cranny of the house. There is a couch that is about 4 feet wide that has been with us since the 90s I guess.',
      'I’ve spent a shit ton of time on that couch reading books, falling asleep and waking up with a pain in my neck, playing video games with cousins/friends, studying for exams, snuggling up to mom or dad, having dinner or lunch while watching TV, dreaming about childhood crush(es) and so many other fond memories, . Even today, I feel like I am home when I travel back to my place and lie down on that couch. It is a struggle to fit into it and lie down now but somehow I manage to do it.',
      'I can imagine how some people on their deathbeds want to travel back to their home and spend their final moments there. I believe everyone has that happy place, the euphoric place where they are a child again. Where the burden and worries of the world can’t impact them, can’t touch them.',
      'Even if my parents move out, the house gets sold or destroyed (GOD FORBID) I don’t think I can ever feel the way I feel about that place for any other house. It’s my HOME… my one and only home!',
      'Let me know if you are connected to something in your homes.',
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
      'My wife and daughter had to get on a flight to Ahmedabad from San Francisco recently. I jumped online and the quickest flight to India was Air India flight that would fly them from SFO to Delhi and eventually to Ahmedabad. I was glad we got it on Air India as the last time I flew the carrier, it was amazing service and great aircraft.',
      'They flew Air India and I cannot resist sharing my painful experience aboard the AI 174 on November 20, 2019 with everyone.',
      'After take off my wife realized that my daughter’s entertainment console was not working. She heard many people asking for refunds and fighting over it but it was OK as she thought my daughter can use her screen. There were limited movies and the collection was super outdated so my wife was not too interested in the screen. Later, my wife realized that for the working screen, TV remote as well as headphone port did not work.',
      'That was a bummer for a 16 hour flight and more like torture to sit there without any entertainment. I packed few toys for my daughter n so she was fine playing with her toys vs watching TV.',
      'As the remotes were not working for both the screens, there was no way to turn on overhead lights to play or read something to my daughter. My wife asked the flight attendants multiple times if they can switch on her lights but they couldn’t help. They had to spend most of the flight in dark as no screen or overhead lighting.',
      'We ordered kids meal for my daughter. She liked both her meals but it was the exact same sauce with spaghetti for lunch n pasta for dinner. Air India you can do better than that!!',
      'Even for small things like trash, the air hostess only came once before landing. This is ok but when my wife went to give trash, she was asked to put that in lavatory trash, which meant unnecessary waiting in a queue to discard trash. My wife was feeding my daughter n then finishing her meals. When they came to collect meal plates, she was never done with her food as my daughter is a slow eater. Nobody ever came to check again on whether someone is still waiting for their plate to be picked up after 2hrs. I know, she could just go n give the plate but my wife and daughter had a window n the middle seat and so would have to disturb the person in aisle seat unnecessarily.',
      'Hand rest between the window n middle seat was broken and the top part actually came out. She was scared of my daughter’s finger coming between the top broken part n lower part. It was also concerning that my daughter could possibly get an electric shock as one could see electric wires exposed and my 2year was getting inquisitive trying to touch everything when my wife was not there(restroom or giving away trash). On lifting the headrest up to let my daughter put her head on my wife’s lap, the headrest would keep falling down after few seconds. It never stayed up consistently.',
      'Air India is a national carrier and pride for the nation but it is disappointing and disheartening to see such poor performance. We did complain about it on twitter and gave feedback via the website but don’t think anything is to be gained by it. I understand that the carrier is operating on minimal profits (in fact is a loss driven operation), but customer is surely not the maharajah any more here.',
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
      { type: 'heading', text: 'Question' },
      'I have a controller with the following GetMapping',
      '@GetMapping(value = "/dawson/v1/{dataType}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)\npublic ResponseEntity respondWithData(@PathVariable String dataType, @RequestParam(name = "minDate") String min_date, @RequestParam(name = "maxDate") String max_date, @RequestParam(USERID) String user_id, @RequestHeader(value = "Authorization") String authorizationHeader) {',
      'where dataType can be one of either String, Map, Object or Calendar. I created another GetMapping as follows in a different class',
      '@GetMapping(value = "/dawson/v1/signInReq")\npublic ResponseEntity mySignInRequest(@RequestBody Map paramMap, HttpServletRequest request, HttpServletResponse response) {',
      'However, when I try to access the /dawson/v1/signInReq, I instead get a match with respondWithData method and not the mySignInRequest. So, Is there a way to exclude signInReq as a match for {dataType}?',
      { type: 'heading', text: 'Answer' },
      'It seems like there is a way to exclude certain mapped paths in your mapping using regex.',
      '@GetMapping(value = "/dawson/v1/{dataType:^.*(?!signInReq)}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)',
      'As shown above, by using regular expression, we can filter out signInReq from the mapping of acceptable dataTypes.',
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
      'This blog post is more of a tutorial for myself.  Prior to trying this out, from the online twilio account buy a phone number that allows SMS communication.',
      'The first step is to simple install twilio sdk for node using following command in the directory where you want to send messages from.',
      'mkdir ~/twilio-code\ncd ~/twilio-code\nnpm install twilio',
      'Create a file under the directory twilio-code and name it sendTest.js',
      "var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';\nvar authToken = '0XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';\n\n//require the Twilio module and create a REST client\nvar client = require('twilio')(accountSid, authToken);\n\nclient.messages.create({\n  to: \"+11234567890\",\n  from: \"+19876543210\",\n  body: \"How you doin?\",\n}, function(err, message) {\n  console.log(message.sid);\n});",
      'Now running node sendText.js command from the command line, you will be able to send the text message easily.  Each text message sent using twilio is charged some amount so be careful with your testing or use the test SID and AuthToken that Twilio provides.',
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
      { type: 'heading', text: 'Introduction' },
      'I was recently tasked with implementing time based call forwarding at my workplace. My company has an onsite team that takes calls on a zendesk provided number during business hours and we have a team offshore that would get any incoming calls outside our business hours. We wanted the ability to automatically route incoming calls to Zendesk between the hours of 5 AM to 5PM and to the third party vendor outside of these hours.',
      'Initially, we were working with 8X8 to use their service but due to the need to route calls and the call quality provided, we switched to Twilio.',
      { type: 'heading', text: 'Design' },
      'We are going to use Twilio as our provider for phone numbers. Any time there is a call to the twilio provided number, we can take action by connecting to a certain URL. In other words, Twilio provides the ability to call a POST or GET on some URL to manage how we handle calls. For low volume of the calls initially, we will be using AWS Lambda/API Gateway as it is easily scalable and relatively cheap service.',
      'In future, if the call volumes increase beyond a certain point, we can expose an endpoint from within our app to handle the response for call forwarding.',
      { type: 'heading', text: 'TwiML Bins' },
      'For simple call forwarding with no scheduled switch, Twilio provides a nice XML like language called TwiML (Twilio Markup Language). When we port numbers to Twilio, twilio provides us with the ability to call external URL using TwiML (Twilio Markup Language) or webhooks.',
      'If you navigate to Phone numbers and purchase a number, you can setup simple call forwarding at all times by clicking on the + sign next to TwiML dropdown which will take you to the screen below and allow you to configure the call forwarding to number 1-123-456-7890 in my sample case.',
      'For more information on the TwiML syntax for the Dial verb, you can navigate to the Dial Verb API. For our requirement to allow call forwarding for specific hours, however, this approach will not work. TwiML doesn’t allow complex conditional call forwarding. To allow for that, we need to host our own webhook code online.',
      { type: 'heading', text: 'AWS Lambda' },
      'AWS Lambda is a compute service that allows user to upload code that will be run as a service on AWS infrastructure. In our case, we want to trigger the execution when we have a call event on any of the twilio numbers. I am using Node.js for the project because it has a good support community for Lambda on AWS. What we want to do is check for the time of the day when the call is generated and based on that respond with a different TwiML to forward call.',
      { type: 'heading', text: 'API Gateway' },
      'The API gateway will be used by us to provide REST endpoint for the Twilio webhook. On any incoming call, Twilio will hit the API Gateway endpoint that will trigger the Lambda function and pass back the XML response to Twilio webhook thus forwarding the call.',
      { type: 'heading', text: 'Node.js callForwarding.js code' },
      'Install node.js, create a folder called twilio-code, run npm init, and install moment with npm install moment. I have used moment library to compare the hour of the day. AWS uses UTC time so factor that in the code. Create the twilioCallForwarding.js code and test it locally, then zip the contents of twilio-code folder in a file named twilioCallForwarding.zip.',
      "var moment = require('moment');\nvar now = moment();\n\nexports.handler = function (event, context) {\n// Event will contain the information passed from Twilio to Lambda.\nconsole.log(\"Event information: \"+JSON.stringify(event));\n\nqryObject = parseQuery(event.reqbody);\nvar numCalled = qryObject['To'];\nvar openXml = '<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><Dial timeout=\"60\">';\nvar closeXml = '</Dial></Response>';\n// Check for time and act accordingly\nvar hour = now.hour();\nresponseXml = '';\n\n// Remember that AWS uses UTC time and I used PDT time\nif ((hour >= 12) && (numCalled == '+19876543210')) {\nresponseXml = openXml+'+11234567890'+closeXml;\n} else if (numCalled == '+19876543210') {\nresponseXml = openXml+'+12345987600'+closeXml;\n}\n\n// Log responseXml for verification\nconsole.log(responseXml);\n\ncontext.succeed(responseXml);\n};\n// Twilio call passes parameters as application-x-www-form-urlencoded that need to be parsed for our use and hence we will use the following method to parse it.\nfunction parseQuery(qstr) {\nvar query = {};\nvar a = qstr.substr(0).split('&');\nfor (var i = 0; i < a.length; i++) {\nvar b = a[i].split('=');\nquery[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');\n}\nreturn query;\n}",
      'AWS provides the handler function with two arguments of event and context (additionally you can also have error as an argument) and refer the lambda documentation to refer how we use them. Event normally stores parameters that were passed as part of the POST request and context will store the state and response value from Lambda function.',
      { type: 'heading', text: 'Setting up AWS Lambda' },
      'Once you login to the AWS management console, navigate to Lambda under compute section. On clicking the create a new function link, you will be navigated to blueprint page. In this case, select runtime of ‘Node.js 4.3’ and filter for ‘twilio-simple-blueprint’.',
      'This will take you to the configure triggers page. We want our trigger to be an HTTP POST call from Twilio and we will be using API Gateway to handle the event trigger. Configure the service as following figure shows.',
      'Lastly, we get to the configure function page. Name your function the same name as the .js file which will be the entry point to the Node.js code and that contains the exports.handler function. Modify the handler on the config UI to be twilioCallForwarding.handler. As we are not going to access any other AWS data (RDS, S3, etc) we don’t need to define a VPC for the function.',
      'Notice that I have used an existing role that I had created previously for another project. This role has policies defined that allow access to AWS Lambda, Cloudwatch, API gateway and S3 bucket operations. Upload a zip named twilioCallForwarding.zip which contains the .javascript source files and all necessary node_modules and head onto the next review screen. Once you review the function, we can proceed to test the function and verify results.',
      { type: 'heading', text: 'Setting up API gateway' },
      'Proceed to Amazon API Gateway service and click on Create API and enter values as below. This will create an API for us that we need to add methods/endpoints to. Amazon refers to them as resources. Click on Actions dropdown and create a New Child Resource with name CallForwarding having resource path of callForwarding. Select the newly created resource and add a new method to it for POST operation.',
      'Next, we will setup the POST method to use our Lambda function located in us-west-2 region. This will take us to a screen with Method execution flow outlined. Click on the Integration Request and open the Body mapping templates. Twilio uses form-urlencoded type to send parameters across which include information such as From number, to number, region of call origination, destination of call, state of the call, etc.',
      'Add a mapping template for type application/x-www-form-urlencoded. Modify the Method Request to be open for everyone so as to allow everyone access to the API without the need for API key. This will allow Twilio to call our Endpoint from outside the amazon network.',
      'Next, navigate into the Method Response section and add a Response Model to allow for application/xml response as Twilio expects xml response from our service to redirect calls. Don’t worry about the response headers as they will be set automatically later on.',
      'Lastly, we need to configure the Integration Response section and add Body Mapping Template that will return application/json with following template. Now navigate back to the method execution screen and click on our resource method. From the Actions dropdown, select Enable CORS and test the API endpoint.',
      'As a final step, we need to set the URL provided by the API gateway in the Twilio webhook section for phone numbers as shown in the diagram below. Now calling this Twilio number will forward calls depending on the time of the day.',
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
      'It is such a pain to open any external hard drive or USB stick that has been written and formatted on a windows machine when trying to open it up on a macbook. I was trying to access photos on my external hard disk that had been originally formatted using a Windows 7 OS (thus NTFS file system) and I could only read the files on my macbook but make no edits to them.',
      'I read online that there are some paid tools that allow you to access the files on such drives but I try not to pay for tools that I’ve never heard of. The other option is to re-format the drive on mac but that causes wiping out all data on the drive.',
      'I came across the following steps that allow you to enable Mac OSX 10 to access files on such external hard drive without formatting it or losing any data. Note: You need to have sudo rights (or be the administrator with root privilege) to perform the operation.',
      'sudo vi /etc/fstab',
      'Add this line, replacing WESTERNDIGITAL with the name of your drive:',
      'LABEL=WESTERNDIGITAL none ntfs rw,auto,nobrowse',
      'Now, unmount the drive using disk utility or from the command line and mount it again.',
      'diskutil unmount WESTERNDIGITAL\ndiskutil mount WESTERNDIGITAL',
      'If the drive name has spaces in it, you can use quotes around the name. You can find the name of the drive by running ls /Volumes/ and to open the drive in read-write mode, run open /Volumes/WESTERNDIGITAL.',
    ],
  },
];

export const posts = [
  ...originalPosts,
  ...migratedPostsPart1,
  ...migratedPostsPart2,
  ...migratedPostsPart3,
  ...migratedPostsPart4,
  ...migratedPostsPart5,
  ...migratedPostsPart6,
];

const categories = ['All', ...new Set(posts.map((post) => post.category))];

function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');
  const { pathname } = useLocation();

  // / and /blog render the same archive; canonicalize /blog to the homepage.
  const canonicalPath = pathname === '/blog' ? '/' : pathname;
  useSeo({
    title: 'Deep Pancholi — Notes on technology, engineering, and life',
    description: SITE.description,
    path: canonicalPath,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: SITE.name,
      url: SITE.url,
      description: SITE.description,
      author: { '@type': 'Person', name: SITE.author },
    },
  });

  const normalizedQuery = query.trim().toLowerCase();
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const searchableText = `${post.title} ${post.excerpt} ${post.tags.join(' ')}`.toLowerCase();
    return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery));
  });

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
  const path = `/blog/${slug}`;

  useSeo({
    title: post ? `${post.title} | Deep Pancholi` : 'Post not found | Deep Pancholi',
    description: post ? post.excerpt : SITE.description,
    path,
    type: 'article',
    publishedTime: post ? toIsoDate(post.date) : undefined,
    schema: post
      ? {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          datePublished: toIsoDate(post.date),
          author: { '@type': 'Person', name: SITE.author },
          mainEntityOfPage: `${SITE.url}${path}`,
        }
      : undefined,
  });

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

            if (block.type === 'quote') {
              return <blockquote key={`${post.slug}-${index}`}>{block.text}</blockquote>;
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
