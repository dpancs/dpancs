const migratedPosts = [
  {
    "slug": "toyota-prius-my-new-car",
    "title": "Toyota Prius: My new car",
    "date": "April 12, 2015",
    "category": "Uncategorized",
    "tags": [
      "Uncategorized"
    ],
    "excerpt": "I moved to San Jose last year from San Francisco but my workplace is still located in San Bruno. This means driving about 35 miles one way on US-101 or 44 miles on 280. I guess taking…",
    "body": [
      "[Image: The new car!]",
      "The Toyota Prius 2015!",
      "I moved to San Jose last year from San Francisco but my workplace is still located in San Bruno. This means driving about 35 miles one way on US-101 or 44 miles on 280. I guess taking the train would have been one option but that is a bit inconvenient as the station is 5 miles from my place. I have to pay for parking and monthly pass which adds up to a large number. Finally, after driving my Altima Coupe for almost a year on the long traffic filled roads of the bay area, I decided it was time to get a car that is efficient and economical.",
      "I hated the Prius to be honest. With all the bad name that it has accumulated over the years, I never thought I will end up buying one. However, when my colleague got a Prius and I noticed that it gave a mileage of 55-60 MPG I could not resist buying one. I am in my 30s and hence I can afford buying a Prius (In my 20s, I would’ve made fun of someone driving the stupid car!!). I have driven about 1000 miles in the first week since I bought it and am listing my experience with driving the car below.",
      "PROS",
      "The biggest advantage of driving the Prius is the mileage!! I love the way it drives on Electric power in peak trafiic and at times when there is slowly moving traffic. Even when driving at speeds ~60 miles per hour, it manages to deliver close to 40 mpg. The display is also helpful in monitoring the real time gas usage and it has helped me adjust my driving so as to achieve better mileage. I kind of have a small competition where each day I try to beat the average mpg for the trip to office n back.",
      "The second good thing about the Prius is that it is a good package. It offers rearview camera, good stereo with 6 speakers, keyless entry, push button start, drop flat seats, digital odometer, bluetooth connectivity, USB charging and a good enough cabin space for a decent price close to 23K for the base version. With ongoing promotions on loans (0% APR for 60 months), it was quite a steal.",
      "Lastly, It is a toyota and even though Prius has earned a bad reputation previously, I believe that the maintenance should not be an issue. The company also offers prepaid maintenance packages which are good for the value they offer.",
      "CONS",
      "The car is really SLOOOOOWWWWW!! I have compared driving the Prius and my older Altima and the Altima is zippy and makes merging on freeways a breeze. With Prius, merging onto the freeway or driving on an uphill slope is a battle. The pickup of the car even with POWER Mode on is slow. It is a mere 99HP engine so don’t have huge expectations from the car!!",
      "This car makes no sound at all in EV mode. I have made the mistake of stepping out of the car and forgetting to turn off the engine because it makes 0 noise.",
      "All in all, I am loving the car. The mileage is awesome and if you adjust your driving skills a bit, the drive ain’t so bad."
    ]
  },
  {
    "slug": "cricket",
    "title": "Cricket",
    "date": "March 15, 2015",
    "category": "Uncategorized",
    "tags": [
      "Uncategorized"
    ],
    "excerpt": "Finally, after almost 7 years I played cricket over the weekend. It was fun playing with tennis ball on a small pitch with all sorts of weird rules. Hitting the ball hard – out, one…",
    "body": [
      "Finally, after almost 7 years I played cricket over the weekend. It was fun playing with tennis ball on a small pitch with all sorts of weird rules. Hitting the ball hard – out, one bounce one hand catch – out, if you hit the ball and it goes behind you – out!! It was as if we turned into kids and got the Cricket world cup fever.",
      "I was the only lefty on the team and even though I played after a long time, I managed to score some decent runs. My bowling sucks big time though and hope we continue to play this form of ‘gulli’ cricket atleast every weekend 🙂"
    ]
  },
  {
    "slug": "oracle-export-empty-tables",
    "title": "Oracle: Export empty tables",
    "date": "February 13, 2015",
    "category": "Technology",
    "tags": [
      "Technology"
    ],
    "excerpt": "When taking a database dump from Oracle 11g recently, I found that the export did not include tables that had 0 rows. The Oracle11g instance implements a space saving measure where if…",
    "body": [
      "When taking a database dump from Oracle 11g recently, I found that the export did not include tables that had 0 rows. The Oracle11g instance implements a space saving measure where if your table has no data, it will not be exported. Space is allocated only when you add data to the table.",
      "A workaround to the issue is to pre-allocate some space to such empty tables. Execute the following oracle queries to allocate space for all tables before taking the export:",
      "select 'alter table '||table_name||' allocate extent;'\r\nfrom dba_tables\r\nwhere segment_created = 'NO'\r\nand owner = 'DB_USER;",
      "Running the above query will generate some alter table statements for all tables with empty data. Executing these SQL statements will allocate space to the empty tables and allow you to export and import such tables."
    ]
  },
  {
    "slug": "tcs-layoffs-controversy",
    "title": "TCS Layoffs Controversy",
    "date": "January 15, 2015",
    "category": "Uncategorized",
    "tags": [
      "Uncategorized"
    ],
    "excerpt": "Recently, there has been too much hoopla in the news about the exit interviews being conducted at Tata Consultancy Services (TCS). TCS is one of the largest Indian IT firms and they…",
    "body": [
      "Recently, there has been too much hoopla in the news about the exit interviews being conducted at Tata Consultancy Services (TCS). TCS is one of the largest Indian IT firms and they started to let go employees to cut down on costs. I feel really bad for the employee that was let go and totally sympathize with her but there is nothing inhumane or wrong with layoffs.",
      "We always imagine that we will have a secure and stable job and everybody makes decisions based on this fact. We take mortgages, auto loans, decide on a rental place, etc based on the assumption that we will always earn X amount of money. I can only imagine what the woman would’ve felt when HR told her we are sorry but this is your last day!! However, this is part of workforce optimization. Large corporations like Microsoft, Cisco, etc also have to layoff employees that are under-performing or just meeting expectations so that they can retain good talent. Also, if a company is making losses, it has to think for the greater good.",
      "It would have been totally unfair if the person was laid off without any monetary compensation. TCS pays 3 months of salary as severance pay which sounds humane enough. The really stupid thing is when judiciary gets involved and puts a stay order on the termination of employee because she is pregnant!! So if a guy is let go that would be fair but firing a pregnant lady is not lawful?!",
      "I truly hate layoffs and hope nobody has to face it. However, I don’t agree with claims that TCS layoffs were not humane."
    ]
  },
  {
    "slug": "mongodb-java-driver-querybuilder-class",
    "title": "Mongodb JAVA Driver: QueryBuilder class",
    "date": "November 11, 2014",
    "category": "Technology",
    "tags": [
      "Technology"
    ],
    "excerpt": "I was recently assigned a task where I had to convert a SQL like where clause query into Mongo query on the fly. There are some good drivers available to do the same but they are not…",
    "body": [
      "I was recently assigned a task where I had to convert a SQL like where clause query into Mongo query on the fly. There are some good drivers available to do the same but they are not free. The best example is UnityJDBC but it was a bit expensive for our use case. The query needed to be super simple and we made the following assumptions:",
      {
        "type": "list",
        "items": [
          "We need to support simple SQL statements that don’t have brackets. Hence, type = exam and score >= 60 is acceptable but type = exam and (score >=60 or score < 30) is not acceptable",
          "The query will only work against double for >, <, >=, <= and will support String and Double datatype when querying for = and != operators."
        ]
      },
      "We decided to come up with something in-house that would be sufficient enough to satisfy our needs and we can build on top of the framework over time like adding support for brackets, Logical operators like XOR, etc. Let’s use the following sample data to proceed with the example:",
      "{ \"_id\" : { \"$oid\" : \"50906d7fa3c412bb040eb577\" }, \"student_id\" : 0, \"type\" : \"exam\", \"score\" : 54.6535436362647 }\r\n{ \"_id\" : { \"$oid\" : \"50906d7fa3c412bb040eb578\" }, \"student_id\" : 0, \"type\" : \"quiz\", \"score\" : 31.95004496742112 }\r\n{ \"_id\" : { \"$oid\" : \"50906d7fa3c412bb040eb579\" }, \"student_id\" : 0, \"type\" : \"homework\", \"score\" : 14.8504576811645 }\r\n{ \"_id\" : { \"$oid\" : \"50906d7fa3c412bb040eb57a\" }, \"student_id\" : 0, \"type\" : \"homework\", \"score\" : 63.98402553675503 }\r\n{ \"_id\" : { \"$oid\" : \"50906d7fa3c412bb040eb57b\" }, \"student_id\" : 1, \"type\" : \"exam\", \"score\" : 74.20010837299897 }\r\n{ \"_id\" : { \"$oid\" : \"50906d7fa3c412bb040eb57c\" }, \"student_id\" : 1, \"type\" : \"quiz\", \"score\" : 96.76851542258362 }\r\n{ \"_id\" : { \"$oid\" : \"50906d7fa3c412bb040eb57d\" }, \"student_id\" : 1, \"type\" : \"homework\", \"score\" : 21.33260810416115 }\r\n{ \"_id\" : { \"$oid\" : \"50906d7fa3c412bb040eb57e\" }, \"student_id\" : 1, \"type\" : \"homework\", \"score\" : 44.31667452616328 }\r\n{ \"_id\" : { \"$oid\" : \"50906d7fa3c412bb040eb57f\" }, \"student_id\" : 2, \"type\" : \"exam\", \"score\" : 19.88180838833524 }\r\n{ \"_id\" : { \"$oid\" : \"50906d7fa3c412bb040eb580\" }, \"student_id\" : 2, \"type\" : \"quiz\", \"score\" : 1.528220212203968 }\r\n{ \"_id\" : { \"$oid\" : \"50906d7fa3c412bb040eb581\" }, \"student_id\" : 2, \"type\" : \"homework\", \"score\" : 60.9750047106029 }\r\n{ \"_id\" : { \"$oid\" : \"50906d7fa3c412bb040eb582\" }, \"student_id\" : 2, \"type\" : \"homework\", \"score\" : 97.75889721343528 }",
      "Let me start by showing a simple program that we can use to get all records for student with student_id of 2. There are two classes available to allow us to do this.",
      "1. Using BasicDBObject class:",
      "import java.net.UnknownHostException;\r\nimport com.mongodb.BasicDBObject;\r\nimport com.mongodb.DB;\r\nimport com.mongodb.DBCollection;\r\nimport com.mongodb.DBCursor;\r\nimport com.mongodb.Mongo;\r\n\r\npublic class BasicDBObjExample\r\n{\r\n\r\npublic static void main(String[] args) throws UnknownHostException\r\n{\r\n// Connect to the Mongo database\r\nMongo mongoConn = new Mongo(\"localhost\", 27017);\r\nDB mongoDb = mongoConn.getDB(\"DP_TEST\");\r\nDBCollection collection = mongoDb.getCollection(\"DATA\");\r\n\r\n// Building the query parameters\r\nBasicDBObject studentFinder = new BasicDBObject();\r\nstudentFinder.put(\"student_id\", 2);\r\n\r\n// Fetch the records for the query.  collection.find() will return Cursor with records that match the query DBObject\r\nDBCursor dbCursor = collection.find(studentFinder);\r\n\r\nwhile(dbCursor.hasNext())\r\nSystem.out.println(dbCursor.next());\r\n}\r\n\r\n}",
      "2. Using QueryBuilder class:",
      "import java.net.UnknownHostException;\r\nimport com.mongodb.QueryBuilder;\r\nimport com.mongodb.DB;\r\nimport com.mongodb.DBCollection;\r\nimport com.mongodb.DBCursor;\r\nimport com.mongodb.Mongo;\r\n\r\npublic class QueryBuilderExample\r\n{\r\n\r\npublic static void main(String[] args) throws UnknownHostException\r\n{\r\n// Connect to the Mongo database\r\nMongo mongoConn = new Mongo(\"localhost\", 27017);\r\nDB mongoDb = mongoConn.getDB(\"DP_TEST\");\r\nDBCollection collection = mongoDb.getCollection(\"DATA\");\r\n\r\n// Building the query parameters\r\nQueryBuilder studentFinder = new QueryBuilder();\r\nstudentFinder.put(\"student_id\").is(2);\r\n\r\n// Fetching the records for the query. get() method will convert QueryBuilder -&gt; DBObject class of query parameters\r\nDBCursor dbCursor = collection.find(studentFinder.get());\r\n\r\nwhile(dbCursor.hasNext())\r\nSystem.out.println(dbCursor.next());\r\n}\r\n\r\n}",
      "Notice that both the examples return the same set of records. The only difference is in the way we construct the query to be run against the Mongo database. The QueryBuilder class comes handy when you have A < 10 and A > 20 kind of queries. For example, let us find records where student_id > 0 but < 2. The query construct will be as follows for BasicDBObject :",
      "BasicDBObject studentFinder = new BasicDBObject();\r\nstudentFinder.put(\"student_id\", new BasicDBObject(\"$gt\", 0).append(\"$lt\", 2));",
      "The syntax is simpler in case of QueryBuilder as follows :",
      "QueryBuilder studentFinder = new QueryBuilder();\r\nstudentFinder.put(\"student_id\").greaterThan(0).and(\"student_id\").lessThan(2);",
      "Finally, based on the above example, we can create queries at run time. We are using groovy language and Java 1.7 for our framework and so the sample method to convert filter string at run time will be as follows:",
      "// Process queries of type A > 10 and B < 5 and B > 1\r\n\tprivate static QueryBuilder getQueryBuilderByString(String filter) {\r\n        if(filter == null || filter==\"\") return null;\r\n        String[] filters = filter.split(\" \");\r\n        QueryBuilder q2 = new QueryBuilder();\r\n        for (int i = 0; i < filters.length; i++) {\r\n            if (i == 0) {\r\n                q2.put(filters[0]);\r\n                continue;\r\n            }\r\n            switch (filters[i]) {\r\n                case \">\":\r\n                    if (i + 1 <= filters.length)\r\n                        q2.greaterThan(filters[i + 1].toDouble());\r\n                    else\r\n                        return null;\r\n                    i += 1;\r\n                    break;\r\n                case \">=\":\r\n                    if (i + 1 <= filters.length)\r\n                        q2.greaterThanEquals(filters[i + 1].toDouble());\r\n                    else\r\n                        return null;\r\n                    i += 1;\r\n                    break;\r\n                case \"<\":\r\n                    if (i + 1 <= filters.length)\r\n                        q2.lessThan(filters[i + 1].toDouble());\r\n                    else\r\n                        return null;\r\n                    i += 1;\r\n                    break;\r\n                case \"<=\":\r\n                    if (i + 1 <= filters.length)\r\n                        q2.lessThanEquals(filters[i + 1].toDouble());\r\n                    else\r\n                        return null;\r\n                    i += 1;\r\n                    break;\r\n                case \"=\":\r\n                case \"==\":\r\n                    if (i + 1 <= filters.length)\r\n                        if (filters[i + 1].isDouble())\r\n                            q2.is(filters[i + 1].toDouble());\r\n                        else\r\n                            q2.is(filters[i + 1].toString());\r\n                    else\r\n                        return null;\r\n                    i += 1;\r\n                    break;\r\n                case \"<>\":\r\n                case \"!=\":\r\n                    if (i + 1 <= filters.length)\r\n                        if (filters[i + 1].isDouble())\r\n                            q2.notEquals(filters[i + 1].toDouble());\r\n                        else\r\n                            q2.notEquals(filters[i + 1].toString());\r\n                    else\r\n                        return null;\r\n                    i += 1;\r\n                    break;\r\n                case \"and\":\r\n                case \"AND\":\r\n                    if (i + 1 <= filters.length)\r\n                        q2.and(filters[i + 1]);\r\n                    else\r\n                        return null;\r\n                    i += 1;\r\n                    break;\r\n                default:\r\n                    break;\r\n            }\r\n        }\r\n        return q2;\r\n    }",
      "Refer the QueryBuilder API documentation for more info."
    ]
  },
  {
    "slug": "ora-28001-the-password-has-expired",
    "title": "ORA-28001: The password has expired",
    "date": "June 20, 2014",
    "category": "Technology",
    "tags": [
      "Technology"
    ],
    "excerpt": "I am a heavy user of Oracle database and I have installed the Oracle 11g on my desktop at work. We use it as our primary database and I created several different instances of database…",
    "body": [
      "I am a heavy user of Oracle database and I have installed the Oracle 11g on my desktop at work. We use it as our primary database and I created several different instances of database users on my local edition of the RDBMS. Recently, I logged into an old DB user that I had created on my desktop after quite some time. It was an older version of our software and so when the Services team reported a bug, I wanted to spin up the instance and try to debug the reason for the error.",
      "When I tried logging into the DB, I kept getting the ORA-28001: The password has expired error. Now, I am familiar with changing password and I fired up a command prompt, logged in as the root. I ran the query below to change the password:",
      {
        "type": "heading",
        "text": "SQL> ALTER USER system_36 IDENTIFIED BY system_36; –system_36 is the existing username and password"
      },
      "When I tried logging in as system_36, it again gave me the same error of ORA-28001. On doing some research I found that by default the password expiry is set to 180 days. The account doesn’t fix itself simply by changing the password on it. I am outlining the solution that worked for me below:",
      {
        "type": "heading",
        "text": "1. Connect to the database with sysdba privileges (sys user). 2. Execute the following script to identify the profile for which you want to set the password life to unlimited from the regular 180 days default setting. SQL> SELECT * FROM dba_profiles; 3. In case you want to apply the behavior to all future users, execute the query below else replace the DEFAULT profile with profile you want to change SQL> ALTER PROFILE DEFAULT LIMIT PASSWORD_LIFE_TIME UNLIMITED; 4. Now to unlock the user account execute the following query SQL> ALTER USER system_36 ACCOUNT UNLOCK; 5. Now you can change the password/apply the existing one again using the following query SQL> ALTER USER system_36 IDENTIFIED BY system_36;"
      },
      "The user information is stored in dba_users table if you want to check and unlock other users on the same server."
    ]
  },
  {
    "slug": "lindt-intense-orange",
    "title": "Lindt: Intense Orange",
    "date": "February 20, 2014",
    "category": "Travel and Food",
    "tags": [
      "Travel and Food"
    ],
    "excerpt": "For quite some time I was a huge fan of Cadbury’s Dairy Milk – Fruit and Nut flavor, then I ate Lindt Intense Orange. Awesome is the only thing that I can think of to describe this bar…",
    "body": [
      "For quite some time I was a huge fan of Cadbury’s Dairy Milk – Fruit and Nut flavor, then I ate Lindt Intense Orange. Awesome is the only thing that I can think of to describe this bar of chocolate. Lindt’s Intense Orange Excellence Bar is by far the best chocolate I’ve tasted in the USA. It is a dark chocolate bar consisting of Orange zest, almond slivers and hint of pineapple. It combines the intense flavor of dark, silky smooth chocolate with the tangy and zesty orange. It has superb after taste and I am addicted to it!! In this month alone I ate about 4 bars and I really have to control myself everytime I go grocery shopping to not get more. It does pack some high calories but its worth each single bite.",
      "Every once a while, people get asked what would be the last meal you would like before you die and for me I don’t know what the meal would be but I know for sure that dessert is gonna include this piece of chocolate 🙂",
      "Highly recommended piece of chocolate and the best out there."
    ]
  },
  {
    "slug": "rahul-gandhi-fit-to-be-a-leader",
    "title": "Rahul Gandhi: Fit to be a leader?",
    "date": "January 29, 2014",
    "category": "Uncategorized",
    "tags": [
      "Uncategorized"
    ],
    "excerpt": "I am not politically inclined to either BJP or congress or any political party in India for that matter. I have never had the chance to vote and pick a leader in Indian politics.…",
    "body": [
      "I am not politically inclined to either BJP or congress or any political party in India for that matter. I have never had the chance to vote and pick a leader in Indian politics. However, recently I saw this video where a reporter named Arnab Goswami interviews the prime ministerial candidate (hopefully not) of congress i.e. Rahul Gandhi. The video can be found here and it was featured as part of Frankly speaking show on Times Now network.",
      "I was going through the video and thinking oh boy, Rahul Gandhi is screwed big time. The guy seems to have been given a script before the show by his party members and he keeps repeating those points, regardless of the question posed by Arnab. For example, when asked how does he react when Narendra Modi personally attacks him, Rahul goes into a monologue about how to empower women, make democracy open to the public and get RTI for all parts of the society. It seems like no matter what the question, the Gandhi boy has the same answer. I feel like if Arnab had asked him whether he likes tea or coffee, Rahul would have responded by saying “Arnab, this is not the question. The question is whether women are empowered to do what they want. Congress and BJP have totally different mindsets when it comes to this question. I want democracy to be transparent and there should be proper process to do everything. I would like to have RTI on this matter so that there is power to the people!” Really, the guy fumbles in almost every question and has no direct answer to anything. It seems like mommy dear told him to only say these 6 points regardless of what curve ball comes his way. Rahul is not at all direct and brief in his responses, even though Arnab time and again reminds him to be specific.",
      "I don’t care what his strategy or plans are but if we had debate in India, like they have between presidential candidates in US, Rahul would be crushed by Modi. I don’t support Modi or mean that he is awesome but he is a much better speaker for sure. I would never want a leader for the country this dumb!! I mean after the initial few minutes of the interview it starts getting annoying that Rahul never responds clearly and keeps raising three or four points which are totally irrelevant to the question asked. I hope he is not picked by congress to be the PM candidate. Congress is really in need of good leaders if they want to win the next election.",
      "Rahul, buddy, you are light years away from becoming a prime minister!! Please get some tutoring in elocution/debates and please please answer relevantly to questions posed. If you cannot answer such simple questions, how will you respond to the bigger questions/issues in India???"
    ]
  },
  {
    "slug": "dhoom-3-review",
    "title": "Dhoom 3: Review",
    "date": "December 24, 2013",
    "category": "Movies",
    "tags": [
      "Movies"
    ],
    "excerpt": "The Cast Dhoom 3 is directed by Vijay Krishna Acharya unlike the first two films in the franchise. Cast lineup includes Aamir Khan, Katrina Kaif, Abhishek Bachchan, Uday Chopra, Jackie…",
    "body": [
      "[Image: Dhoom 3 Poster]",
      "Dhoom 3",
      {
        "type": "heading",
        "text": "The Cast"
      },
      "Dhoom 3 is directed by Vijay Krishna Acharya unlike the first two films in the franchise. Cast lineup includes Aamir Khan, Katrina Kaif, Abhishek Bachchan, Uday Chopra, Jackie Shroff and Siddharth Nigam along with american actors portraying different roles.",
      {
        "type": "heading",
        "text": "The Story"
      },
      "A bank robber is unleashed on the streets of California. Without giving out the spoilers, the basic plot is given out here. Jackie Shroff plays the owner of a circus company that is on the brink of bankruptcy because of huge loans from the Western Bank of Chicago. He comes up with a last trick to save his circus by including a magic trick involving young Aamir Khan. Even though the trick is good, the lenders refuse to give Jaggudada any more time and helpless Jackie commits suicide. The young Aamir Khan decides to rob branches of the Western Bank and close shop for the bank, all the while working hard to revive the circus. Once he commits robbery, the Americans call in Abhishek Bachchan and Uday Chopra to assist in the investigation. They reprise their role as Jai Dixit and Ali respectively. Katrina Kaif plays Aamir’s love interest and a part of his circus troupe.",
      {
        "type": "heading",
        "text": "The Good"
      },
      {
        "type": "list",
        "items": [
          "A strip show by Katrina Kaif",
          "Aamir Khan acts out the role really nicely and proves again that he can carry the weight of a movie on his shoulders",
          "BMW Bikes and the way Chicago is captured is beautiful",
          "Aamir’s poem “Bande hai hum uske, hum par kiska zor…” is catchy and repeated with conviction"
        ]
      },
      {
        "type": "heading",
        "text": "The Bad"
      },
      {
        "type": "list",
        "items": [
          "The length of the film is a bit long and the song Tu hi Junoon could have been omitted entirely",
          "Action sequences and VFX is utter nonsense. Cables appear suddenly, inflatable plastic turns to hard plastic, etc. Flawed execution of the action causes you to lose interest in the movie"
        ]
      },
      {
        "type": "heading",
        "text": "Conclusion"
      },
      "The maker of Dhoom 3 last directed Tashan… This is in itself reason enough to assume that the movie would be stylish but stupid. The movie starts off in 1990 showing a young Saahir, played by Siddharth Nigam, walking through Chicago. Jackie Shroff shines in his few minutes as Saahir’s dad and essays the role of a dad wonderfully. Mr. Andersen is stern and portrayed as an evil bank personnel, who forces Jackie Shroff to commit suicide because of bankruptcy in his circus. The young kid vows to bring down the bank by robbing it once he grows up and there is an accomplice to help him out with his robberies. Aamir khan eventually manager to revive the circus, while looting the bank and forcing its closure. However, the law catches up to the criminal and instead of facing the law, Aamir choses to die.",
      "The best part in the movie is the sizzling Kamli strip by Katrina Kaif. She looks gorgeous but her dance moves in the song are not that gracious. However, Katrina doesn’t get to do much in the movie except dance and look hot. Abhishek Bachchan delivers his lines as if he is least interested in the movie and the poor guy makes his entry in the movie by breaking a wall driving a rickshaw. People seated behind me shouted “Aukat yahi hai iski” when he made this moronic entry. Uday Chopra tries to be funny and apart from a rare once or twice, his lines fail to evoke even a smile. Young Aamir Khan played by Siddharth Nigam looks good and does his part with great sincerity. The american cast members are also good but they don’t get to do much as well. This is an Aamir Khan movie all the way. He plays his role nicely but the utter nonsensical action scenes are what bored me in the movie.",
      "When Aamir Khan is running down a bank wall after his first robbery in the movie, the cable attached to his back keeps on appearing and disappearing at will. Sometimes it seems to have been hooked to his waist and then in the next scene, it connects to his backpack. There are some other rubbish sequences that caught my eye. For example, when Aamir wants to jump atop an open bridge, why does he wait for the bridge to fully open if he has made his mind to jump into the river beneath? He then has to accelerate real hard once the bridge has opened up. Also, while he is jumping down the bridge, he presses a button to create inflatable plastic to wrap around the lower body of his bike and convert it into kind of a Jet Ski. However, in the next scene when the bike has hit the water, this inflatable plastic has changed into hard solid plastic, almost kinda shining metal!!! Saahir really knows how to perform magic here. Another example, Jai (Abhishek Bachchan) jumping from the back of a bike driven by Ali (Uday Chopra) to punch a villain in the stomach who has jumped from a balcony on a 3 floor house and gets back onto the bike after hitting the villain.",
      "The chase sequences are senseless and people will lose interest after a while. The storyline was predictable after a while and the second half seems dragged. I fail to understand how such a pathetic screenplay and story goes on to earn more than 300 Crore rupees!! Aamir Khan’s haircut introduces a new hero in the movie: Aamir’s huge ears!! Uday Chopra is doing a great service to the nation by not working anymore in movies and he should stay behind the camera for Christ’s sake. Katrina Kaif deserved a better role. The music of the movie also fails to impress. The scene where Aamir jumps off the cliff and is falling is almost comic because of the song that plays in the background. The song is beautiful with awesome lyrics but appears to play at the wrong time. I really don’t understand why the actors spent so much time learning Parkour and circus tricks as it was not needed. The Action directors have failed miserably here along with the script writers!!",
      "My rating *** stars. 1 star solely for Katrina’s dance. Here is a good article I read @ The Hindu"
    ]
  },
  {
    "slug": "long-flight-no-worries",
    "title": "Long flight: No worries!",
    "date": "November 29, 2013",
    "category": "Travel and Food",
    "tags": [
      "Travel and Food"
    ],
    "excerpt": "I was in transit over thanksgiving and reached India yesterday night. It was fun as well as really tiring to make the long journey. I had accumulated some miles using Chase UnitedPlus…",
    "body": [
      "I was in transit over thanksgiving and reached India yesterday night. It was fun as well as really tiring to make the long journey. I had accumulated some miles using Chase UnitedPlus card and so spent it on getting a free ticket to India. The itinerary was really crazy with United flying me from SFO -> Chicago O’hare -> Munich -> Mumbai (Lufthansa), meaning a total of more than 22 hours of flight time and more than 5-6 hours of layover time in between. I am going to keep writing about places I visit and restaurants that I check out while in India but some pointers on tackling such long flight below:",
      "1. Always try and book Economy Plus if available. Lucky enough for me, my flight until Munich was a united flight and they offer to provide Economy Plus seats for about 90$ more compared to the economy seats. Unless you are rich and famous and can either afford a Business class/First class seat or charted planes, the rest are cramped into these small seats known to mankind as economy class. I have always had problem travelling in these seats because being 6 feet tall and a bit heavy, there is no room for any kind of movement for me. My knees start hurting after rubbing continuously against the seat in front of me and very rarely I had the chance to get onto the exit row seating. However, this time round, I paid in advance for the Economy plus seating and OMG it is really a plus!!! The seats seem much more spacious and there is enough legroom left even after stuffing my carry on backpack below the seat in front of mine. I would never travel on regular economy again on these longer flights if Economy Plus is offered on them. Right after enjoying these seats, my flight on Lufthansa airlines from Munich to Mumbai had no such separate class and I had to endure the hell for 8:30 hours before my legs could breathe again.",
      "2. Please try and wear comfortable clothes on long flights. I know this is always implied and why would you not wear comfortable clothes you might ask. However, I have seen many people dress up for their travels. A person sitting next to me was wearing jeans and formal shirt on a fricking 9 hour journey!!! Dude’s gonna have some serious rash issue when he lands. I would really recommend simply shorts/trackpants/pj, a T-shirt which is loose enough, flipflops and a jacket. The reason I say flipflops is because a. they are easy to take off and wear back during TSA screenings and b. your legs will thank you and smell much better than being stuffed inside socks for a long duration of time. I for some reason feel really cold within an airplane and so a jacket/hoodie helps me to stay comfy and also I can bring down the hood over my eyes when I want to sleep.",
      "3. Carry a hand sanitizer if possible. Airlines are getting clumsy with their cleanliness and I wonder if the person travelling in my seat before me left germs around. I really like the idea to use it before meals get served.",
      "4. Walk around or stretch every few hours. I normally prefer travelling on an aisle seat so as to be able to stretch my legs and walk around every few hours. Nowadays, almost all major airlines provide some sort of video which goes over stretching and exercising while on the aircraft for long duration. Trust me, DVT (Deep Vein Thrombosis) is no laughing matter and especially older people should take care and avoid sitting in the same position for longer durations. Also, if you are flying a middle eastern airline, normally they have juices/drinks/sandwiches at the back for you to grab after that short walk 😉",
      "5. Stop watching movies a month or two before you depart. I know this idea might sound really crazy but when you have a flight for more than 18 hours and with restricted mobility, the best options are either to sleep or to watch the in-flight entertainment. I am not able to get proper sleep because of the hum of the plane’s engines and because I had not been watching movies, I had tonnes of movies to pick from. Normally, its boring to watch the same movie again and the movies that United/Lufthansa had were fairly recent hits.",
      "6. Invest in a good noise cancelling headphone I would highly recommend purchasing a good noise cancelling headphone with airline adapter. The headphones that some airlines offer really suck big time and might be broken as well. I had to hold on to my cord in a specific position for the left side of the United provided headphone to make any sound. It was really frustrating and irritating!!",
      "7. Try to avoid caffeine and drink water. Also I would say don’t grab alcoholic drinks while in flight.",
      "8. Grab a neck pillow available at some airport stores or online so as to not hurt your neck while sleeping. The pillow that the airline offers are not at all good for prolonged usage.",
      "9. Smile and be courteous to others around you Seriously to make a flight enjoyable for yourself and to others around, smile and be courteous. If you want to switch seats or ask someone not to push back their seats or want more water/fluids, etc try to be reasonable because shouting and screaming will get you nothing. Sometimes, smile gets things done!",
      "10. Get WiFi if available on your flight. Provides more entertainment options and the speeds are not that bad. I had to pause for it to finish buffering videos on youtube and then watch those but trust me accessing WiFi while on flight is really worth the money spent.",
      "On an unrelated topic, I had Air India flight from Mumbai to Ahmedabad and oh boy the aircraft sucked. The engines made this huge noise for the entire duration of the flight (50 minutes seemed like ages) and also the tray tables were broken and so were some of the seats!!! The interior of the aircraft seemed like some third grade cheap motel room. However, what struck me the most was how helpful and kind the air hostesses were. I mean with the cheap airline tickets it seems that every Tom, Dick and Harry in India flies instead of taking train or buses. I saw some really annoying and stupid people on that one flight but the air hostesses were really patient and handled the customers well. In one case, one of the hostess went out of her way and helped an old lady walk up to the restroom holding her hand and comforting her. I truly believe that Air India is really functional because of people like this cause their aircraft really is the lamest one I’ve ever been on.",
      "Will keep posting from India but for now Alvida!"
    ]
  }
];

export default migratedPosts;
