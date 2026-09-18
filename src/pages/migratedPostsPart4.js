const migratedPosts = [
  {
    "slug": "mio-liquid-water-enhancer",
    "title": "MiO Liquid: Water Enhancer",
    "date": "April 10, 2013",
    "category": "Travel and Food",
    "tags": [
      "Travel and Food"
    ],
    "excerpt": "I have been watching the television ads for the MiO liquid enhancer for quite some time but never felt the need to try it out. However, the ads are pretty cool with people adding MiO to…",
    "body": [
      "I have been watching the television ads for the MiO liquid enhancer for quite some time but never felt the need to try it out. However, the ads are pretty cool with people adding MiO to water after a workout or just for taste. Recently, on my visit to Safeway for grocery shopping, I saw the small bottle tucked away in the corner and I just wanted to try it out. The front claims that this small pack consists of Vitamins as well and so no harm in trying it out. There were many flavors available but to be safe, I picked Orange Tangerine. I have realized that Orange flavor is something that people hardly screw up and it is a safe bet.",
      {
        "type": "heading",
        "text": "The Packaging"
      },
      "The MiO comes in a plastic bottle that allows for easy squeezes of the liquid onto the glass. It seems like a water droplet at first glance and the small size allows to easily carry it around in your pockets or gym bags. The package is cute and sexy simultaneously The lid on top is also very tight and doesn’t flip open by mistake. This prevents occasional unwanted drips that I have experienced with several other products. Also, carrying this small pouch is preferable to carrying a full bottle of vitamin water or Gatorade kind of liquid. The labels are very vibrant and stylish and you can easily guess some of the flavors by looking at the color of the M on the front.",
      {
        "type": "heading",
        "text": "The Taste"
      },
      "I personally squirt one squeeze into my water bottle of about 500ml. The taste is very similar to TANG Orange available in the market. However, the advantage this has is it is liquid and it dissolves very fast and easily. The drink is uniformly flavored and I also love the colors when it is still dissolving. The pattern of colors is very nice. I also like adding a few drops in my green tea and sipping it at leisure. However, I did notice that adding more of it causes the taste to degrade and throat starts feeling itchy. After a few practice drinks, you will find the taste that best suites your buds. I am gonna try the Mango-Peach next.",
      "I would really recommend this product and am gonna try out more flavors soon. The taste is much better than powdered flavors and it dissolves easily with just one shake of the bottle. So, Grab a MiO for $3.99 flip it, tip it and sip it 😀"
    ]
  },
  {
    "slug": "javascript-associative-arrays",
    "title": "JavaScript Associative Arrays",
    "date": "March 19, 2013",
    "category": "Coding",
    "tags": [
      "Coding"
    ],
    "excerpt": "Javascript Associative Arrays Lately, I have been getting my hands dirty with teeny weeny front end programming. I kept pestering my managers and lately they have started assigning bugs…",
    "body": [
      {
        "type": "heading",
        "text": "Javascript Associative Arrays"
      },
      "Lately, I have been getting my hands dirty with teeny weeny front end programming. I kept pestering my managers and lately they have started assigning bugs to me so that I can learn more while fixing them. Today, while at work a weird bug came to our notice. We were using arrays to store some information and every time the page was accessed in a different manner, the ordering would change. I turned the pages of my reference book but it was of no help. Finally, I walked up to my superior’s desk and spoke to him about the issue. He took a look and after some research figured out “D’Oh this is because you are using Associative Array!!” My exact response was “What the hell is that??”",
      "So, I went forth as a brave warrior into the darker realms of javascript, seeking the help of my guide in distress GOOGLE! Jokes apart, below is a summary and explanation of this new kind of animal in the JS zoo 🙂",
      {
        "type": "heading",
        "text": "Arrays"
      },
      "Most of us who begin learning javascript have come across the regular array notations. Array can be defined in many ways as follows:",
      "var Array = new Array(); Array[0] = \"Apple\"; Array[1] = \"Ball\"; You can also define arrays as follows:",
      "var Array1 = [\"Lincoln\",\"Ford\",\"Honda\"]; var Array2 = [1,2,3,4]; var Array3 = [1,\"Apple\",'s']; As you can see above, Arrays can store numbers, strings or combination of both. An array that stores combination of these data is known as heterogeneous Array. However, one thing to notice here is that all these arrays store values in the form of integer index. For example, if I want to access Apple from Array3 above, I will access it using Array3[1]. Basically, In Array3, the integer 1 is stored at index 0, “Apple” is stored at index 1 and ‘s’ is stored at position 2. These Arrays are integer index based starting with integer 0.",
      {
        "type": "heading",
        "text": "Associative Arrays"
      },
      "Now coming back to the topic at hand. In simple terms, Associative arrays are arrays where instead of having integer based indices, we use string indices!! They are very much similar to hashmaps in a sense that they have string keys and values. A simple example of this kind of Array is below:",
      "var Array1 = new Array(); Array1[\"Name\"] = \"Lincoln\"; Array1[\"Model\"] = \"MKZ\"; Array1[\"Year\"] = 2013;",
      "In the above code, you can use a different notation such as Array1.Name = “Lincoln”; and so on. The methods and properties that you would use with regular Array variable is not going to work with Associative arrays. So, if I do Array1.length here, it is going to evaluate to undefined. Neither will the push(), pop() and sort() going to work on this array. In the issue that I defined in the beginning, I was using a sort() method with my associative array which never worked and neither threw any error in the code execution leaving me perplexed about the reason for the failing logic. Also, regular for loop is not going to work here because Array1 has no integer based indices. You will have to use for – in loop here as follows:",
      "for (var keySet in Array1) { console.log(\"For property \"+ keySet+\" the value is : \"+Array1[i]); //you can also output using Array1.i }",
      "Basically, keySet in the code above is going to iterate over all the different keys (indices) of Array1. This approach is very similar to what we do for Objects and their properties. You can also try practicing this on CodeAcademy website using their scratchpad.",
      "I hope this was helpful information and please leave your comments if you liked the article."
    ]
  },
  {
    "slug": "inception-time-awesome-tune",
    "title": "Inception Time – Awesome Tune",
    "date": "March 18, 2013",
    "category": "Movies",
    "tags": [
      "Movies"
    ],
    "excerpt": "I was not able to find the original tune on youtube, but Hans Zimmer has done a great job here. Inception in itself has been an awesome movie and I have realized that for a movie to…",
    "body": [
      "I was not able to find the original tune on youtube, but Hans Zimmer has done a great job here. Inception in itself has been an awesome movie and I have realized that for a movie to work, all the elements that form its core need to be simply perfect. Time begins to play near the final 5-10 minutes of the movie. It starts off with slow chords of piano. A haunting melody is created using time spaced key presses to create a melody that lingers in your mind. Slowly, the cello and violins join in to accompany the piano.",
      "The initial part of the music is astounding and is bound to raise the hair on the back of your head or give you goosebumps for sure. Slowly, more and more instruments join in and rises to the crescendo formed by using drums, metallic guitar, piano, cello, violins, etc instruments. Again, after reaching the climax it all calms down and you are left with the final sinister tune of the piano. I would recommend you switch off your lights, fire up youtube and listen to the tune. I always imagine shooting some awesome video to the backdrop of this and someday maybe I will and upload it in here. You know the kind of video where you begin in a distance and slowly zoom into a car cruising throughthe death valley or the highway 1 in a slow motion… and finally the video ending with a car crash in slow motion!! Or maybe not that serious I don’t know but there is so much that I can imagine though!!!",
      "The video I have posted here doesn’t do full justice to the music and try to get the original from iTunes or Google play (exactly what I did). Give it a try and let me know how you liked it 🙂"
    ]
  },
  {
    "slug": "losing-wealth-my-perspective",
    "title": "Losing wealth: My perspective",
    "date": "February 24, 2013",
    "category": "Uncategorized",
    "tags": [
      "Uncategorized"
    ],
    "excerpt": "I just finished watching a movie on Netflix called The Last Emperor. It is the story about the last Emperor of China named Pu Yi. The movie basically chronicles the hereditary emperor…",
    "body": [
      "I just finished watching a movie on Netflix called The Last Emperor. It is the story about the last Emperor of China named Pu Yi. The movie basically chronicles the hereditary emperor selection in ancient China, the fall of Monarchy and Japanese invasion followed by the rise of Chairman Mao in Mainland China. Apart from the stunning visuals portrayed in the movie and an awesome chinese background score, it made me wonder about one thing.",
      "The one thing that stayed on with me is that it is so difficult for someone who has been brought up surrounded by wealth, abundance of resources and tons of servants to lose it all one fine day. I mean losing authority is one thing and some might live with the shame of losing their authority but losing the power to purchase is the worst thing that can happen to a born rich person. If a person has never known suffering, it is always difficult to face it later on in life.",
      "In comparison to the above scenario, if someone is born poor or in a middle class family, the perception of losing wealth is entirely different. A person who makes money and rises up the ranks with his/her hard work and dedicaton have a sense of confidence; a sense of pride that even if they lose it one day, they can rebuild their riches. Even when they lose it all, they still revert back to the starting point, which they are already familiar with. For example, today you know how to operate a bicycle and in the future you purchase a lamborghini (you made that much money God knows how), you would still know how to bike but a person who always drove a car, if he has to start biking it is a whole different story.",
      "I can only imagine the pain Pu Yi would have gone through to purchase entry ticket to the Forbidden City, his own home where he grew up!!! Imagine if you were ousted from your own home and then the government sets up a barricade asking you to fork out cash to enter your own home. The place where you ate everyday, played with friends, fought with your siblings, which is yours and you never imagined that some day it will not be yours any more. There are so many cases of celebrity children who throw it all away because they don’t have a sense of preservation of wealth as they did not have to work for it. They think it is their birthright and no one can ever take that away!! However, the reality is that every parent should train their kids for the worst scenario… If you buy your son/daughter fancy cars also teach them to ride in a humble bus. That way if they ever have to give up everything, they would still be able to fight and survive!!"
    ]
  },
  {
    "slug": "taco-bell-my-favorite",
    "title": "Taco Bell: My Favorite",
    "date": "February 9, 2013",
    "category": "Travel and Food",
    "tags": [
      "Travel and Food"
    ],
    "excerpt": "In the spring of 2007, I first laid my feet on the American soil. I was young, fresh out of undergrad college and dreaming of a bright future in the field of Computers. It was right at…",
    "body": [
      "In the spring of 2007, I first laid my feet on the American soil. I was young, fresh out of undergrad college and dreaming of a bright future in the field of Computers. It was right at that time that my love affair with Taco Bell started. I still remember the first time I went there. Arlington, TX was really cold that year and people reported that it had snowed in Texas after ages. I had 3 roommates that shared a small apartment with me in Forest Glen, the housing unit of college itself. It was the first time I was away from home and nobody to look after me. My roommates cooked some good food everyday but I had always been a foodie and after munching on the same lentils and rice, I desperately wanted to go out and eat. I gathered my roomies, we put on our bulky jackets and started walking in the snow to get to the nearest Taco Bell that was a mere 0.5 miles from our residence. I had heard from my cousin that it was the cheapest food that a college student with limited bucks could gorge on. We were excited and nervous about what we would order and talked about the faint knowledge that each of us had about mexican food.",
      "This Taco bell on 1316 S Cooper St was pretty huge with a large parking lot in the front. We walked in and were greeted by the person at the cash register. I fumbled with the cash in my pocket, trying to decide what to pick from the list of combos. Finally, I decided on a combo with chalupa, large drink and ordered a side on Cheesy Fiesta Potato. It was funny as I walked to the cash register and the person is like “For here or To go?” and I was like “Yes”. He again asked the question and finally gave up thinking it is better to just hand us the trays as I’ll never be able to understand what those terms are.",
      "We filled our drink cups and that was the first time I was alone with a large cup of soda. The notion of free Refills was difficult to digest as a small glass of soda in India seemed really costly with no refills at that time. I applied Fire sauce on the insides of my Chalupa and boy was it good… After a week of eating the same food again and again or cooking up some dismal dishes at home, this was such a welcome relief. The cheesy fiesta potatoes were so good and just a buck!! Needless to say, I also filled up my drink on the way back and had to keep switching hands because the cold would freeze my fingers holding the cold container.",
      "Later on, Taco Bell was my retreat from boring home cooked meal, taking my to-be wife for the first time on a date at 8:00 am after playing cards all night or when I just craved some good hot mexican food. One fine day, Taco Bell introduced Volcano sauce and man that volcano burrito is the coolest thing on the Taco Bell menu. I have tried almost all of the veggie offerings on the menu and some are interesting where as some are just plain torture… I love the volcano burrito, Crunchwrap supreme, Nacho Cheese Chalupa, Mexican Pizza, Apple Empanada or their cheese Quesadillas… I keep switching between them but I still love to go there once a week or more often. People drift away from Taco Bell once they start earning or just stop loving it, however I am still a loyal fan of the joint. They keep amazing me with stuff e.g. cheesy gordito wrap which consists of a thick chalupa wrapped outside a hard taco shell… I have never been good at eating Tacos as once you take a bite, it would start breaking, spilling stuff all around and ending with messy fingers. However, this soft but thick shell outside the taco meant less spills and no breakage in the taco within… EUREKA!!!!",
      "I do have noticed that Taco Bell is pretty inconsistent with their quality unlike the other big chains… I ordered a volcano burrito 2 weeks ago in San Bruno and there was no crunchy chips nor proper volcano sauce and the tortilla just felt empty. I had one at the same joint and today it was a completely different story, tasted much better, seemed fresh and was filled really well with the ingredients. Also, when Taco Bell and KFC are at the same outlet, it is usually a mess and I avoid going to that Taco Bell… It would be stinky, dirty and overall a dirty place but like I mentioned earlier they do tend to be really crappy in enforcing proper franchise rules and regulations. I hope they keep coming up with more spicy and tasty mexican treats ending up with better look and feel of the franchise stores 🙂"
    ]
  },
  {
    "slug": "gujarati-song-pankhida-ne-pinjru",
    "title": "Gujarati song: Pankhida ne pinjru",
    "date": "January 27, 2013",
    "category": "Uncategorized",
    "tags": [
      "Uncategorized"
    ],
    "excerpt": "The Song I am a huge fan of the song Pankhida ne aa Pinjru that has been sung by Mukesh (Grandfather of Neil Nitin Mukesh). Here is a link to the song on youtube: The lyrics Pankhida ne…",
    "body": [
      {
        "type": "heading",
        "text": "The Song"
      },
      "I am a huge fan of the song Pankhida ne aa Pinjru that has been sung by Mukesh (Grandfather of Neil Nitin Mukesh). Here is a link to the song on youtube:",
      {
        "type": "heading",
        "text": "The lyrics"
      },
      "Pankhida ne aa pinjru, junu junu junu junu lage Bahue samjavyu toy pankhi navu pinjru mange",
      "Umatyo ajampo aene pand na re praan no Andharyo karyo manorath dur na prayan no Andithe desh jaava lagan aene laage, Bahue samjavyu toy pankhi navu pinjru mange Pankhida ne aa pinjru..",
      "Sone madhel bajathiyo ne sone madhel jhulo Heere jadel vinjhno moti no mongho anmolo Paagal na baniye bheru koi na rang raage, Bahue samjavyu toy pankhi navu pinjru mange Pankhida ne aa pinjru",
      "Pankhida ne aa pinjru junu junu junu junu lage Bahue samjavyu toy pankhi navu pinjru mange pankhida ne aa pinjru",
      {
        "type": "heading",
        "text": "The Meaning"
      },
      "I tried looking for the actual meaning of the song online but wasn’t able to find it anywhere so am writing out what I feel the song is about. Basically, it describes a bird that no longer likes its cage and wants to fly off to some other parts of the world looking for greener pastures. The singer explains that the bird has started to feel that it is staying in the same cage for too long and the cage feels very old to the bird and even though he tried to make the bird see some sense, it still craves for a newer abode. He goes on to describe that the bird is feeling this new sense of life in its soul and it has made up its mind to make a journey far away to lands that it has never seen before. It is really excited to make this journey and no matter how much we try to explain, he wants to leave.",
      "The second stanza begins with the poet describing the abundant wealth that the bird has. He mentions that the bird has a place to sit made of pure gold as well as a swing that is made of gold with expensive pearls as its chain and that it is so expensive that we cannot even imagine its price. He finally asks the bird not to follow in the footsteps of others but think for itself.",
      "I think the song was penned for people who immigrate to other countries from their current one. I have seen many who would leave their mansions, awesome cars, great social life in their current country to stay in some unknown world. People give up their job, families and sometimes freedom just to imitate others who leave for a “foreign” country without giving it some thought. I don’t know why but this is one Gujrati song that I really adore and keep listening to again and again 🙂"
    ]
  },
  {
    "slug": "west-yellowstone-national-park",
    "title": "West Yellowstone National Park",
    "date": "January 6, 2013",
    "category": "Travel and Food",
    "tags": [
      "Travel and Food"
    ],
    "excerpt": "After returning from my Christmas break 2012, I was lazy to get on to wordpress and type in my next entry. Finally, I got time today to pen the blog. I went out to Yellowstone national…",
    "body": [
      "[Image: Yellowstone park]",
      "Yellowstone park",
      "[Image: Snow ghosts at Yellowstone]",
      "Snow ghosts at Yellowstone",
      "After returning from my Christmas break 2012, I was lazy to get on to wordpress and type in my next entry. Finally, I got time today to pen the blog. I went out to Yellowstone national park in winter 2012 and to tell the truth that was the best time I had travelling. I am going to post pictures and hope this entry is really useful for someone planning a trip to Yellowstone National Park in Winter. We decided on driving from San Francisco, CA to Los Angeles, CA as rental cars were cheaper in LA in the month of December. The drive from Los Angeles to West Yellowstone Park, MT is about 1009 Miles and a journey of 15 hours.",
      {
        "type": "heading",
        "text": "Phase 1: Drive to West Yellowstone, MT"
      },
      "Enterprise Rental Car: We were supposed to get a 5 seater SUV from Enterprise Rental car at 12 noon on Saturday, December 22, 2012 from 21118 Ventura Boulevard, Woodland Hills, CA. My friend and I reached there a bit early at 9 A.M. hoping to get a car early so that we could get a headstart in the traffic. The person at the front desk was really nice asking us to wait and accommodated our request for early pickup. However, a lady named Monica who came out to hand the car keys over to us was pretty rude and annoying. She would just not let us drive without getting the Liability insurance (which is 20 bucks a day i.e. more than the cost of the rental per day). I never purchase the liability from rental car company as most of the credit cards today act as the primary rental insurance. I was pretty pissed by the behavior of that particular employee and it was really not good customer service. I finally got behind the wheels of our Jeep Patriot after about 30 minutes of Monica’s annoying chatter and drove out deciding never ever to rent a car from this particular Enterprise ever in the future.",
      "We stopped at two LA locations namely Halal Gyro Pizza House, which serves awesome Aloo Paranthas that are the size of a XXL pizza with spicy masala scattered on top served with yogurt and coriander chutney and Tawakal which serves pretty good Veg. Biryani that is spicy and the portion size is also pretty good here. After devouring the food, we started driving for the journey ahead and made some stops in between for snow shoes, gloves, etc. We went north from LA, covering the full width of Nevada and crossing over Idaho to finally reach West Yellowstone, MT on 23rd December right for lunch.",
      "I would like to mention that the drive through Nevada was gorgeous. It seemed like we were the only people driving out that night as the roads were pretty much empty except for our car. We went through the death valley at night and it was covered with snow as far as the eye could see. The moonlight shone brightly on the roads lighting up our path and because there are no human lights to distort the night sky, the twinkling stars are visible in a manner that is never possible in San Francisco. One issue that we faced was that the gas stations in death valley are spaced far apart and so you should get your car filled up whenever you see one just to be safe. You might also need snow chains if the roads are not cleared (lucky for us, the roads were always cleared and we didn’t have to use ours) or get a 4 wheel drive for the ice covered roads.",
      {
        "type": "heading",
        "text": "Phase 2: West Yellowstone, MT"
      },
      "[Image: The Gusher Pizza at Yellowstone]",
      "The Gusher Pizza at Yellowstone",
      "The first thing we wanted to do after reaching here was to grab something to eat. However, because it is winter time and there aren’t many tourists most of the places are shut off for the season. We found a place called The Gusher which seemed decent and was the only place open at 2 PM. The waitress was very nice and welcoming and we ordered tons of food. The Taco special pizza was not great but wasn’t bad either and resembled the CPK tostada pizza. They had some real good garlic bread though and nothing seemed to be extraordinary from what we ordered. Once we finished lunch, we were all tired from the exhaustive drive and so next destination was the hotel room. We booked rooms at the Best Western and the room was pretty cheap and decent (69$ for 2 double beds per night). The kid at the front desk was very helpful and the awesome thing is that they have a jacuzzi and heated indoor pool!!! As there was not much rush, we got our room right next to the pool and headed out for a dip straightaway after checking our luggage into the rooms. It is awesome to see snow falling down outside while you are relaxing in the heated jacuzzi. However, the walk from the pool area to our rooms was freezing as we were down in our shorts and had to run through about knee deep snow to get to our room. Also, the hotel was right next to the park entrance making it a viable choice. Lodging options within the park are really costly but would be a better option as the Old Faithful lodge is right next to the Geyser and if you are staying in the park then you can roam around without a guide to help you out (which is mandatory for people staying outside the park!). I took out my newly purchased Nikon, got dressed up in about 4-5 layers of clothing and went out to take a few snaps while the rest of the gang hit the bed. I met some locals, took some great pictures and then drove back to sleep before we go out and grab dinner. REMEMBER it is freezing here and so always wear several layers of clothing, gloves, some sort of head wear to warm you up as the weather can really drop to 0Fs in no time at all.",
      "We woke up and walked up to a place called Wild West Pizzeria. They have divided the place into pub and restaurant and we went to the restaurant area. My friend mentioned that the Pub is also good and they have some very cheap drinks to offer. I ended up ordering a macaroni and cheese which was really bad. My friends also ordered some chicken wings which they mentioned were disgusting too, a spaghetti that was mediocre and so we were pretty much all disappointed with the food. We enjoyed a lot in the snow after that… we took along a snow tube and so played with it first, there was a parking behind the hotel that was not cleared and covered with snow that was almost waist high. I tried to be an athlete from X-games trying to run and then jump onto the snow sliding plate, falling down hard in the process and injuring my wrist that hurts to this day 😦 It gets dark in this season at about 4:30 PM itself so at about 10 PM we were done for the day and went to sleep.",
      {
        "type": "heading",
        "text": "Phase 3: Snowmobile ride in West Yellowstone, MT"
      },
      "[Image: Snow Mobiles]",
      "Snow Mobiles",
      "We had booked snowmobile rides from before for 24th December, 2012 at Two Top Snowmobiles for a guided tour of the park until Old Faithful geyser. As we did last minute reservations, we didn’t get the full day adventure that covers more areas of the park. There are also options to rent snowmobiles for the day and drive outside the park. We rented out helmets, overalls and gloves from the rental office for 16$ per person. After getting all suited up, we were given primary driving instructions and safety orientation by our guide. Handling the snowmobile was a bit tricky at first but once you get the hang of it, it is awesome. I sort of imagined myself to be James Bond driving through the snow peaked mountains chasing the bad guys all over the place. We got to see coyotes, Elks, Bisons, etc wild animals in their natural habitat and I cannot describe the experience in words. The park looks simply marvellous with Aspen trees everywhere, snow covered mountains and steam from the hot water geysers rising up intermittently. We drove all the way to Old Faithful geyser, saw it erupt against the white backdrop provided by the snow. We ate at the park fast food joint run by Xantarra Parks and Resorts. We ordered some french fries, Veggie burgers, black bean burgers, ministrone soup and some hot drinks. The food was good and some of it was tasty. I actually had no expectations from the place in the middle of this much snow but vegetarians will seriously have no problem. We drove back out of the park. making stops at some geysers, a hot waterfall in midst of snow and was close to 5 PM when we left the park for the day. We had dinner at a chinese place called Red Lotus where a single old chinese man did all the work. We were the only customers there at night for dinner and the place had some good hot soup, nice chow mein and friend rice. We also ordered the Lo Mein but I like spicy food and the noodles were very bland for my taste.",
      "Although I want to continue writing and finish the rest of the journey too, I am feeling sleepy and am craving the Beard Papa’s chocolate filled bun at my place so will continue the thread tomorrow with part 2 of the trip and probably post some pictures here and also in the next post. Sorry to keep you waiting!!"
    ]
  },
  {
    "slug": "google-error",
    "title": "Google Error",
    "date": "December 28, 2012",
    "category": "Uncategorized",
    "tags": [
      "Uncategorized"
    ],
    "excerpt": "Error on part of google that I noticed in the email I received today from google offers. Not good google!!!",
    "body": [
      "[Image: image]",
      "Error on part of google that I noticed in the email I received today from google offers. Not good google!!!"
    ]
  },
  {
    "slug": "mankind-the-road-to-destruction",
    "title": "Mankind: The road to Destruction",
    "date": "December 18, 2012",
    "category": "Uncategorized",
    "tags": [
      "Uncategorized"
    ],
    "excerpt": "While going through the news on December 17th, 2012 it truly feels like the end of the world is really here. When the Mayans predicted the end of world in 2012, maybe they meant the end…",
    "body": [
      "While going through the news on December 17th, 2012 it truly feels like the end of the world is really here. When the Mayans predicted the end of world in 2012, maybe they meant the end of humanity and not the species. The first event that shook US was the shooting that occurred in Connecticut. A 24 year old just walks into a school with loaded weapons and fires about 100 rounds killing several kids and teachers. More than 20 kids were shot dead with no fault of theirs. The guy who did the terrible act must have been really screwed in his brains that he chose to kill 20 souls, who in no way affected his existence, and then die himself to escape the misery of facing the parents and the society in general. I don’t know what happened to talk things out and if he was so disheartened with his life, maybe commit suicide leaving others in peace.",
      "The other news I heard was about the sad incident where a Delhi girl was raped in a moving bus and her friend was badly beaten up. This has become so common nowadays in India that people even forget about it in a few days. Every day you open the newspaper and you see news about small girls being raped, people being killed for money, etc but this news shook me because the rapists didn’t even try to hide. They were so sure that nothing is gonna happen to them that they went about their daily chores as if they didn’t commit a crime. I hope they are also hanged like terrorists who attack our country.",
      "We as people have turned insensitive to these incidents, we overlook the injustices going about around us. I really appreciate the teachers who had the courage to stand against the shooter and die saving the small children. I appreciate the cops who serve the country (even if they take bribes for petty work) and work hard in solving these crimes. How can a human being mutilate and kill another person?? How can the rapists not stop hearing the screams of the poor girl they destroyed the life of?? How could the shooter go about killing sweet innocent kids who know nothing about the issues grown ups have??"
    ]
  },
  {
    "slug": "mysql-to-mongo-query-converter",
    "title": "MySQL to MONGO query converter",
    "date": "December 12, 2012",
    "category": "Uncategorized",
    "tags": [
      "Uncategorized"
    ],
    "excerpt": "MySQL to MONGO query converter One of my colleagues informed me about the site and it is pretty cool. I myself, had problems with writing mongo queries and a tool like this is immensely…",
    "body": [
      "MySQL to MONGO query converter",
      "One of my colleagues informed me about the site and it is pretty cool. I myself, had problems with writing mongo queries and a tool like this is immensely helpful. I am however not sure what Aggregation framework does this site use for Mongo."
    ]
  }
];

export default migratedPosts;
