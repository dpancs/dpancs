const migratedPosts = [
  {
    "slug": "goliyon-ki-raasleela-ram-leela-review",
    "title": "Goliyon ki raasleela: Ram-Leela Review",
    "date": "November 23, 2013",
    "category": "Movies",
    "tags": [
      "Movies"
    ],
    "excerpt": "The Cast Sanjay Leela Bhansali is the Director for the movie with prominent cast members being Ranveer Singh (Ram), Deepika Padukone (Leela), Supriya Pathak (Dhankor Baa), Gulshan…",
    "body": [
      { "type": "image", "src": "/images/migrated/goliyon-ki-raasleela-ram-leela-review/ram-leela.jpg", "alt": "Ram-Leela Review" },
      "Goliyon ki Raasleela: Ram-Leela",
      {
        "type": "heading",
        "text": "The Cast"
      },
      "Sanjay Leela Bhansali is the Director for the movie with prominent cast members being Ranveer Singh (Ram), Deepika Padukone (Leela), Supriya Pathak (Dhankor Baa), Gulshan Devaiah (Bhavani) and some special appearances by Priyanka Chopra, Raza Murad, Sharad Kelkar, Richa Chadda, etc.",
      {
        "type": "heading",
        "text": "The Story"
      },
      "Goliyon ki raasleela: Ram-Leela is basically the Romeo and Juliet story against the backdrop of Gujarat. There are two warring families namely Rajadis and Sanedas. Rannveer Singh (Ram) belongs to the Rajadis and is a non-violent person who flirts with all the women of the city and is a womanizer who owns a porn video shop. Deepika Padukone (Leela) belongs to the more powerful family overseen by Supriya Pathak (Dhankor baa). On a holi festival night the lovers meet and fall in love at first sight. As luck would have it, they have to run away from their village because Ram’s brother mistakenly shoots Leela’s brother and Ram shoots him in return and things get crazy!! But they are caught and after a few twists and turns which are not at all needed, they end up dead in vain.",
      {
        "type": "heading",
        "text": "The Good"
      },
      {
        "type": "list",
        "items": [
          "Vibrant colors and beautifully captured visuals."
        ]
      },
      {
        "type": "list",
        "items": [
          "Deepika looks gorgeous and her dress designer has done some fantastic work"
        ]
      },
      {
        "type": "list",
        "items": [
          "Rannveer’s toned body"
        ]
      },
      {
        "type": "list",
        "items": [
          "Some songs like Nagada sang dhol, Ang lagale and Ram Chahe Leelo"
        ]
      },
      {
        "type": "heading",
        "text": "The Bad"
      },
      {
        "type": "list",
        "items": [
          "Story is utter bullshit and senseless. I mean how can two people fall in love, within 3 hours start sracking the cheapest shayari you can ever hear, elope when Ram has murdered Leela’s brother, Return back to the village but even though they can reconcile their differences still continue with the bloody war between the caste, Die without any reason in the end",
          "Music sucks except for the songs mentioned above. SLB should really get some composer to do his music",
          "0% chemistry between the lead pairs",
          "Vulgar and cheap dialogues that are totally unnecessary and neither funny"
        ]
      },
      {
        "type": "heading",
        "text": "Conclusion"
      },
      "The movie opens up showing enmity between two warring factions of a city. However, even though bullets are used like water, no one ends up dying almost until the interval time. Each frame in the movie is beautiful with everybody decked in traditional colorful gujarati dresses and jewellery. Deepika sizzles and tries real hard to look like a bubbly girl who is cute and cunning at the same time but fails miserably. The lead pair shows affection towards each other as if they are forced and the exchange of words between them feel like trash talk. The first night they meet, Rannveer sends a slew of cheap messages to Deepika and that kinda impresses the girl. However, it didn’t surprise me at all because she was already a sex starved adult as evident from the holi sequence when she kisses Rannveer who is a total stranger. Its like they don’t even exchange a single word until then and kiss!! I’ve still to witness this in real life and so am I still to witness Unicorns in existence and mammoths to walk the earth. Why does Ram have to own a porn video shop? Why is Leela so desperate to get laid? Why is there no blood spilling in the first half? These and many such questions will walk with you when you leave the cinema hall.",
      "If you don’t care about any logic and enjoy life’s simple pleasures of munching on a tub of popcorn and sipping chilled coke while sitting in the awesome chairs at the cinema hall then this movie is surely for you. I would again emphasize that after Black and Guzaarish, Sanjay Leela Bhansali has truly returned to his route and used colors in each scene. The surprise element for me in the movie was Raza Murad. The choreography is really good in Bhai-Bhai, Lahu munh lag gaya and Nagada sang dhol. Ang laga de is amazingly picturized on the lead pair and they both sizzle in the song. Damn its one of the sexiest song I’ve seen in any bollywood movie recently.",
      "I really disliked the movie though and would only give it a 3 star rating. 1 star for Deepika and the other for the amazing cinematography and choreography. Rannveer, sorry buddy but I wanted to give one star for your chiseled look but then your poor acting skills balanced it out.",
      "***"
    ]
  },
  {
    "slug": "netflix-on-ubuntu",
    "title": "Netflix on Ubuntu",
    "date": "October 23, 2013",
    "category": "Coding",
    "tags": [
      "Coding"
    ],
    "excerpt": "Once I installed Ubuntu on my desktop, I was not able to go back to windows for some weird partition issues. I am still struggling to find out how to re-install Windows. However, I tried…",
    "body": [
      "Once I installed Ubuntu on my desktop, I was not able to go back to windows for some weird partition issues. I am still struggling to find out how to re-install Windows. However, I tried logging into the Netflix website from Firefox on Linux Ubuntu and got the following error when trying to view a video.",
      { "type": "image", "src": "/images/migrated/netflix-on-ubuntu/netflix-error.png", "alt": "Ubuntu displayed the following error when playing Netflix Video" },
      "Ubuntu displayed the following error when playing Netflix Video",
      "Unfortunately, Netflix requires you to have silverlight plugin to view videos and this plugin is still not available for Ubuntu. I did some websearch and found a solution to the issue. Hopefully, this will also help others who want to watch Netflix on Ubuntu OS. This is a nice tool developed by Erich Hoover and you can donate on http://netflixonlinux.chipin.com/netflix-works-on-ubuntu to thank him for his work.",
      "So, all you need to do to get netflix to work is open a command terminal and type in following:",
      "sudo apt-add-repository ppa:ehoover/compholio\nsudo apt-get update\nsudo apt-get install netflix-desktop",
      "The above commands will start the installation of the netflix-desktop application. In case the installation didn’t go through fine, you can delete it using the following command:",
      "sudo apt-get purge netflix-desktop\nsudo apt-get autoremove\nsudo apt-add-repository --remove ppa:ehoover/compholio\nrm -rf .wine-browser/",
      "One issue which caused me to get stuck at the end of the Gecko Wine installer was navigating the GUI menu but the TAB key helps you move and Enter selects the OK option to proceed. I was able to start watching netflix using this desktop app and by default it starts it in full-screen mode, you can hit F11 to change it to a window."
    ]
  },
  {
    "slug": "apple-service",
    "title": "Apple Service",
    "date": "October 9, 2013",
    "category": "Cell Phones",
    "tags": [
      "Cell Phones"
    ],
    "excerpt": "Recently, my wife’s phone had some issues. The battery in her 1 year old iPhone 5 went loose and there were some issues with the volume controls. Also, the flash on the back suddenly…",
    "body": [
      "Recently, my wife’s phone had some issues. The battery in her 1 year old iPhone 5 went loose and there were some issues with the volume controls. Also, the flash on the back suddenly stopped working and would take hazy pictures if I turned on flash. As the phone was still under warranty, we went to an Apple store and showed them the phone. The “Genius” figured that indeed the battery has gone loose under the casing and within minutes, we had a new iphone 5 in our hands!!!",
      "This is awesome customer service and gotta hand this to Apple that they did a truly marvelous job of customer satisfaction. I was so impressed with the Apple Customer service that I myself got an iPad mini 🙂 Now I am the proud owner of Android and Apple device at the same time. GOOD JOB APPLE!!"
    ]
  },
  {
    "slug": "python-learning-intermediate-level",
    "title": "Python learning: Intermediate level",
    "date": "September 18, 2013",
    "category": "Coding",
    "tags": [
      "Coding"
    ],
    "excerpt": "Python learning: Intermediate level I was trying to learn Python in the recent times as we are moving to unix based systems and also PIG allows you to create Python User Defined…",
    "body": [
      "Python learning: Intermediate level",
      "I was trying to learn Python in the recent times as we are moving to unix based systems and also PIG allows you to create Python User Defined Functions (UDF). I used CodeAcademy and a Python beginner’s book to learn the basics and wanted to try and use the knowledge to figure out how much do I actually follow. CheckIO is a good website to do so which has a narrative intertwined with the coding examples. The caveat is that you have to solve the questions to view other people’s solutions and have to clear any given level to move forward.",
      "Do check out the site though for Python practice 🙂"
    ]
  },
  {
    "slug": "removing-header-from-csv-file",
    "title": "Removing header from CSV file",
    "date": "August 22, 2013",
    "category": "Coding",
    "tags": [
      "Coding"
    ],
    "excerpt": "I had a 4 GB csv file from which I wanted to remove the header. I tried using DOS for doing so as I was not able to open the file in any text editor or in Excel. Within DOS, I tried the…",
    "body": [
      "I had a 4 GB csv file from which I wanted to remove the header. I tried using DOS for doing so as I was not able to open the file in any text editor or in Excel. Within DOS, I tried the following",
      "MORE +1 DATA.csv > output.csv",
      "The above command would create a file output.csv but it would only contain 13000 rows and then just hang. I tried creating a batch file to accomplish it but again the same problem arised. Finally, I fired up my Cygwin terminal and used the following command",
      {
        "type": "heading",
        "text": "sed -i 1d DATA.csv"
      },
      "The UNIX command above will basically modify the file in-place and remove the first line as 1d stands for line number where the action will take place (1 in this case) and the action intended (d stands for delete here). The problem with sed is that even though you only need to remove line 1, the command will parse through the full file. A similar option to achieve the same in UNIX is :",
      {
        "type": "heading",
        "text": "awk ‘NR>1 {print}’"
      }
    ]
  },
  {
    "slug": "traffic-school",
    "title": "Traffic School",
    "date": "August 3, 2013",
    "category": "Travel and Food",
    "tags": [
      "Travel and Food"
    ],
    "excerpt": "I was driving to Los Angeles, CA from Las Vegas, NV recently when it happened. I was driving along a lonely patch of road on some stupid deserted highway, gossiping and chatting with my…",
    "body": [
      "I was driving to Los Angeles, CA from Las Vegas, NV recently when it happened. I was driving along a lonely patch of road on some stupid deserted highway, gossiping and chatting with my cousins who had flown down to visit Vegas. The speed limit on the road was 55 and unfortunately the Enterprise Rental car people don’t hand out cars with cruise control if you pick a compact car. I mean who orders a car without cruise control in today’s times?? That is pretty stupid if you ask me on Enterprise’s part. However, I suddenly saw a flash of red and blue on the opposite side of the road and the first instinct was to check the speedometer. SHIT!!!! I was going 76 in a 55 MPH zone which is pretty bad. The cop came behind us and pulled us over.",
      "People in the back seat that were sleeping until now jumped up and everyone starts throwing their ideas around. Example “I knew it… this always happens on road trips!” to “One of my friend also got a ticket recently” n so on. Eventually, after what seemed like an eternity, the cop walked up to the window and asked “Sir, you were going 77 in a 55 zone. Is there a reason for your speeding tonight?” Now, every time a cop asks this (I’ve had 2 other tickets before for speeding) I don’t know what to answer… “Yes, I just bought this new pair of wheels and wanted to see how fast it goes” or “I left my dog at home and suddenly he phoned me asking me to get home asap as he is not feeling well”. I get dead scared when he asks this and the only sane response that I always mutter is “No reason :)” hoping that some day a cop will be impressed by my honesty and let me off with a warning.",
      "So, he writes a ticket and we have a sad drive home with all the way people discussing how to drive better and when did I actually go over the limit and so on. Captain Hindsight would have been a great help in situations like this.",
      { "type": "image", "src": "/images/migrated/traffic-school/captain-hindsight.png", "alt": "Hindsight from South Park" },
      "“You shouldn’t have paid attention on the gossip but should instead be monitoring your speed” – Captain Hindsight from South Park",
      "So, the ticket came out to be close to 400 bucks but luckily in the state of California you can attend traffic school and get the ticket off your record. It was the first time I was going to attend the traffic school. There are several DMV approved websites that allow you to take the test from the convenience of your couch and cost about 18-20$. Once you clear the test at the end, they would mail the certificate to the court where you were issued the ticket. I picked a website named autotrafficschool.com. So basically, you have to go through about 12 chapters of general information on driving defensively and at the end of each chapter there is a quiz with about 5-6 questions wherein, you have to score 80% to proceed to the next chapter. However, some of these questions on the quiz are plain common sense and the questions don’t change even if you have to retake these interim tests. So, without even reading the chapters I was able to clear some of the tests and for the rest, you know which question you answered wrong, go back to the chapter read the answer and retake the test. Finally, there is a final exam that needs to be cleared in 2 takes and is essentially a recap of all the previous tests and so if you know the answers to the questions in the chapters between, chances are you will clear the final test (I scored a 100% score on the final one in the first take)",
      "It took me about 30-45 minutes to finish the school and get certificate of passing. However, it made me wonder why does the government even have to administer these schools? I mean there are several flaws with this system. For starters, there is no way to monitor who is taking the test and so I can attend the school for others and the school can not verify if that is the case. Secondly, with the amount of retakes it allows, anybody can clear the school even if they did or didn’t pay any attention to the chapters. I mean the first instinct would simply be to guess the answers and then if you fail the section then go back and read the part of the chapter which would help answer the question. Lastly, there is no guarantee that the school would then send over the certificate to the DMV and they “recommend” you get back to the court and verify that the certificate was delivered and the ticket has been dropped. It is a better option to simply collect the fine but drop the ticket from record if an individual has not had any tickets in the recent 18 months.",
      "To me it seems that just the hefty fine amount is sufficient to stop me from speeding in the near future and the traffic school is just a hassle."
    ]
  },
  {
    "slug": "the-rise-of-the-minions",
    "title": "The Rise of the Minions",
    "date": "July 10, 2013",
    "category": "Movies",
    "tags": [
      "Movies"
    ],
    "excerpt": "Despicable Me 2 is in theatres and finally over the weekend I had the chance to go and watch the movie. If you remember the first movie left off when Gru, a super villain, starts…",
    "body": [
      "Despicable Me 2 is in theatres and finally over the weekend I had the chance to go and watch the movie. If you remember the first movie left off when Gru, a super villain, starts parenting three girls and finally resorts to non-evil way of life. The second movie in the franchise brings back Gru along with his cute minions and the three female kids named Margo, Edith and Agnes. Agnes highlights the film with her cute gestures and is the most likable of the three kids.",
      { "type": "image", "src": "/images/migrated/the-rise-of-the-minions/minions.jpg", "alt": "The minions having a fun time" },
      "The minions having a fun time",
      "However, I felt the show stealers to be the minions. They are so much fun. I always thought that the minions speak sort of Hindi lolz… In the movie they make you laugh be it the scene where RamsBottom says his name and the minion start making fun of him, the part where the minions chase kidnapped Gru or when they buzz at the entrance of El-Macho’s hideout and start placing order for Indian food (Paneer Tikka Masala). The movie is surely a must watch for adults as well as kids. I am looking forward already to the third movie 🙂"
    ]
  },
  {
    "slug": "uberconference",
    "title": "UberConference",
    "date": "June 10, 2013",
    "category": "Technology",
    "tags": [
      "Technology"
    ],
    "excerpt": "UberConference is a new offering that one of my colleagues mentioned to me about. It is the latest offering in a crowded space of conference calling. There are several other offerings on…",
    "body": [
      "UberConference is a new offering that one of my colleagues mentioned to me about. It is the latest offering in a crowded space of conference calling. There are several other offerings on the market like WebEx, GoToMeeting, etc. However, the thing I liked about Uber is that it is very light weight and easy to use. It also provides better features if you are only looking for telephonic conferencing. Some of the cool features of Uber are as follows:",
      {
        "type": "list",
        "items": [
          "Automatic authentication based on the number dialed from",
          "Automatic call out to invitees when the conference starts",
          "Monitor users on the call and controls like mute or hang-up specific users",
          "Call Recording in mp3 format and call summary at end of each call",
          "Relatively cheap"
        ]
      },
      "With a professional account, UberConference is much better than WebEx teleconferencing. I would highly recommend this to all professionals. Their app is available on Android and iOs."
    ]
  },
  {
    "slug": "family-guy-hilarious",
    "title": "Family guy: Hilarious",
    "date": "June 6, 2013",
    "category": "Movies",
    "tags": [
      "Movies"
    ],
    "excerpt": "Can’t stop laughing after seeing Stewie’s expression!!!",
    "body": [
      "Can’t stop laughing after seeing Stewie’s expression!!!"
    ]
  },
  {
    "slug": "the-golden-gate-relay-a-run-for-cause",
    "title": "The Golden Gate Relay: A Run for Cause",
    "date": "May 21, 2013",
    "category": "Travel and Food",
    "tags": [
      "Travel and Food"
    ],
    "excerpt": "It all began on the fine evening of February 28, 2012 at 4:50 PM with a simple note from Sriram, the VP of Engineering at my company asking a few of us if we wanted to take part in “The…",
    "body": [
      "It all began on the fine evening of February 28, 2012 at 4:50 PM with a simple note from Sriram, the VP of Engineering at my company asking a few of us if we wanted to take part in “The Relay”.",
      {
        "type": "heading",
        "text": "The Golden Gate Relay"
      },
      { "type": "gallery", "images": [
        { "src": "/images/migrated/the-golden-gate-relay-a-run-for-cause/start-line.jpg", "alt": "The start line of the Golden Gate Relay" },
        { "src": "/images/migrated/the-golden-gate-relay-a-run-for-cause/leg-at-night.jpg", "alt": "After finishing the Leg at night" },
        { "src": "/images/migrated/the-golden-gate-relay-a-run-for-cause/all-runs.jpg", "alt": "After finishing all of my runs" }
      ] },
      "The Start line",
      "The relay is about 191 mile relay race that begins in Calistoga, CA covering 36 cities and ends in SantaCruz, CA. The race covers scenic trails across Napa Valley, Golden Gate bridge, Sausalito, San Francisco, etc. Each member on a team of 12 has to run 3 legs of the race in rotation. The legs range from easy to hard and could be between 3.5 to 8 miles in length. The proceedings from the run benefit a Non-profit organization called Organs ‘R’ US and we were supposed to run for another Non-Profit organization called ILP (India Literacy Project) that promotes education in India. As the relay is organized in the Bay Area, teams from different companies such as Google, Yahoo!, Facebook, Twitter, Netflix, etc all compete for the win. The famed runner Dean Karnazes also runs the relay (Apparently, that guy has only one motive in life to keep running as written in this article on Cracked). The relay was scheduled for May 4-5, 2013 this year, which gave us about 2 months to train.",
      "I was really hesitant at first to commit myself to the relay. I used to play Soccer in school and had a severe fracture in 2006. I had to rest for about 4 months and had to undergo a surgery where the doctor had to join the bone using a titanium plate and got about 12 stitches in my leg. I have totally given up on running or playing soccer since and am currently at a 200 pound weight mark. However, in his note Sriram mentioned that you don’t have to be a runner for doing the relay and I fell for the trap 🙂",
      {
        "type": "heading",
        "text": "The Nomis Team"
      },
      "We were not able to get 12 people to sign up for the event and hence, the 12 people team consisted of 6 Nomis runners and 6 from Xilinx. I don’t have enough information about the team from Xilinx but am outlining my team mates from Nomis here.",
      "Sriram Kumar: The Leader Like I mentioned before, Sriram is the head of Engineering and had done the relay quite a few times before with other people. He had the most information about the relay among our team members and he was our team captain to handle Van 1. He would be the one making sure all of us reached the handoff points on time, making sure to motivate each of us along the way, handing out Gatorade / water / snacks to the runners and took part in driving the van. Basically, the leader at Nomis was the leader of our team",
      "Shashin Chokshi: The Youngster A fellow Gujjubhai, Shashin is the lean mean running machine. He was the youngest in our team and the most dedicated. Coming from the product team @ Nomis, Shashin really helped in co-ordinating the practice runs and to check on people when they miss it. He has done several different runs for charity over the past few years.",
      "Krishna Ramamurthi: The Lord of Running Krishna is the fastest in our Nomis team. He was our go-to guy who was best equipped at the run with different kinds of socks, anti-inflammatory medicines, some awesome cream that just relaxed the aching muscles and a Lumia 920 that we used the most for navigation purposes. He also fixed the headlamps and blinkers to use at night. I think he did some sub-8 minute practice sprints in and around the city. He told me to cut my toe nails before the long run, a simple step that I didn’t take and which is still causing pain 😦",
      "Niranjan Shetty: The Motivational Runner He is from the Analytics team, and did some good runs. He never attended any practice runs and I didn’t expect him to be so good and he was the best person that motivated the team. He ran with Sriram and me even after his strenuous legs to simply push the runner. He also maintained a sub-9 minute pace that was really awesome as well.",
      "Anand Ramasubramaniam: The SandBagger Seriously, Anand ran the most in the relay for our team. He did some 19 miles in total alone over the 2 days. He swapped turns with me so that he had to run more instead of his regular run. This guy showed no expression of fatigue or tiredness and would just plug his iPhone in his ears and keep running. He had to take up the longest of legs in the worst weather conditions and still didn’t complain about it… Terrific job!!!",
      "And lastly Me, myself: The Snail Seriously, the running pace that these guys achieved I couldn’t even do it on a straight downhill road!!! I was the slowest and the largest in the group, a very bad combination to begin with. For me it was simply an achievement that I finished all my legs and didn’t back out (I did try to back out but thanks to the support and loud cheering of my teammates, I was able to finish all legs successfully).",
      {
        "type": "heading",
        "text": "The Experience"
      },
      "The relay is really awesome if I think of it now and was a great team building exercise. Before the run we were supposed to pick up the van a day earlier from San Jose. I totally messed up and ended up in a residential place @ Mountain view instead of the address in San Jose. The street address was the same and that got me really confused and everyone else angry on my stupidity. However, I drove crazily through the evening traffic on 101 and reached the rental place in the nick of time. The first day started with all of us driving up to Calistoga and Niranjan starting his leg at 10:30 am in 89 degree F temperatures from there. It was a really hot run and pretty strenuous with some uphill patches and yet he finished it quickly. God bless the makers of Gatorade as without the awesome stuff, it would’ve been really difficult to stay hydrated in the heat. I was the second runner and was already ready having done my stretches and was nervous with anticipation. When the baton finally came to me, I did really dismal and just after running about 20 minutes, I was all exhausted and sweating profusely. I was ready to throw in the towel and just drive to the next exchange point, but my teammates were so awesome that they kept cheering me on. I finished at the end with a 15 minutes per mile pace. I was really disheartened and even though no one showed any signs of anger, I just felt boy I brought the team down! But then we had the lord of running take over and he finished the leg in the fastest time outpacing the other teams that went ahead. Anand did a terrific job after of running 7 miles in the extreme heat!!",
      "Nighttime was much better. We had an awesome meal at Azzurro pizzeria. The temperature dropped down a bit and was way more fun to run. I had a 5 mile run at night and I did a better average of 13 min/mile. Not at all something to be proud of but I was glad that I finished it and actually ran it instead of simply walking it. The leg was through a deserted trail and hence, no support from the teammates was available for a larger distance. I actually lost my way in between that brought down my pace a bit more 😦",
      "After finishing the Leg at night",
      "The best part of the trip for me was driving the van. I did most of the driving and I really loved that huge van with capacity to seat 12. Even with sore muscles, driving always ends up giving pleasure. The second best part of the race is the feeling you get when you finally end your legs.",
      "After finishing all of my runs",
      "As soon as you see the exchange point, it injects a new lease into your legs and you sprint towards the finish line. Also, the camaraderie was good between all the runners and everyone would look out for others. We would not only cheer our team but all the runners that would go by and we saw the same sort of encouragement coming from the other teams. Lastly, before my last leg, A couple, Ajay and his wife, volunteering for the ILP project, brought all ILP teams awesome Samosas, Tea and upma with jalebi. It was the best snack at the end of an arduous run. We finished strong with Shashin and Sriram doing an all uphill run with approximately 9 minute pace. Sriram’s sprint in the last 5 minutes on his final leg was terrific and Shashin’s support was commendable. I mean after running uphill for even 0.5 miles, I would be dead and this guy ran his 5 miles uphill and then ran alongside Sriram to motivate him… Unbelievable!! After the relay, we went to Madras Cafe for some hearty South Indian meal, dropped off extra stuff at Sriram’s place and boarded a train home. BTW, a big thank you to Sriram’s family for having us dirty, stinky people into their place and serving us awesome cookies and tea 🙂",
      "After the relay, I got some bengay and advil and just slept for about 12 hours!! We actually didn’t do bad and ended up being the 135th rank out of 180 teams that participated. Next year, if I improve my performance we can do even better and hopefully, I will be running again unlike my claim that this is the first and last time that I am volunteering for such a run 🙂 The donation page is still up @ http://www.ilpnet.org/ILPRelayFundRaising/169 Please donate for promoting literacy in India and help feed and educate children."
    ]
  }
];

export default migratedPosts;
