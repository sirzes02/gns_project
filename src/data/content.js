const data = [
  {
    title: "Practical MongoDB",
    subtitle: "Architecting, Developing, and Administering MongoDB",
    isbn13: "9781484206485",
    price: "$9.05",
    image: "https://itbook.store/img/books/9781484206485.png",
    url: "https://itbook.store/books/9781484206485",
  },
  {
    title: "The Definitive Guide to MongoDB, 3rd Edition",
    subtitle: "A complete guide to dealing with Big Data using MongoDB",
    isbn13: "9781484211830",
    price: "$49.99",
    image: "https://itbook.store/img/books/9781484211830.png",
    url: "https://itbook.store/books/9781484211830",
  },
  {
    title: "MongoDB in Action, 2nd Edition",
    subtitle: "Covers MongoDB version 3.0",
    isbn13: "9781617291609",
    price: "$19.99",
    image: "https://itbook.store/img/books/9781617291609.png",
    url: "https://itbook.store/books/9781617291609",
  },
  {
    title: "Pentaho Analytics for MongoDB",
    subtitle:
      "Combine Pentaho Analytics and MongoDB to create powerful analysis and reporting solutions",
    isbn13: "9781782168355",
    price: "$16.99",
    image: "https://itbook.store/img/books/9781782168355.png",
    url: "https://itbook.store/books/9781782168355",
  },
  {
    title: "Pentaho Analytics for MongoDB Cookbook",
    subtitle:
      "Over 50 recipes to learn how to use Pentaho Analytics and MongoDB to create powerful analysis and reporting solutions",
    isbn13: "9781783553273",
    price: "$35.99",
    image: "https://itbook.store/img/books/9781783553273.png",
    url: "https://itbook.store/books/9781783553273",
  },
  {
    title: "Web Development with MongoDB and NodeJS, 2nd Edition",
    subtitle:
      "Build an interactive and full-featured web application from scratch using Node.js and MongoDB",
    isbn13: "9781785287527",
    price: "$38.01",
    image: "https://itbook.store/img/books/9781785287527.png",
    url: "https://itbook.store/books/9781785287527",
  },
  {
    title: "MongoDB Cookbook, 2nd Edition",
    subtitle:
      "Harness the latest features of MongoDB 3 with this collection of 80 recipes - from managing cloud platforms to app development, this book is a vital resource",
    isbn13: "9781785289989",
    price: "$44.99",
    image: "https://itbook.store/img/books/9781785289989.png",
    url: "https://itbook.store/books/9781785289989",
  },
  {
    title: "The Little MongoDB Book",
    subtitle: "",
    isbn13: "1001592208320",
    price: "$0.00",
    image: "https://itbook.store/img/books/1001592208320.png",
    url: "https://itbook.store/books/1001592208320",
  },
  {
    title: "Node.js, MongoDB and Angular Web Development, 2nd Edition",
    subtitle:
      "The definitive guide to using the MEAN stack to build web applications",
    isbn13: "9780134655536",
    price: "$33.16",
    image: "https://itbook.store/img/books/9780134655536.png",
    url: "https://itbook.store/books/9780134655536",
  },
  {
    title: "The Definitive Guide to MongoDB",
    subtitle: "The NoSQL Database for Cloud and Desktop Computing",
    isbn13: "9781430230519",
    price: "$8.83",
    image: "https://itbook.store/img/books/9781430230519.png",
    url: "https://itbook.store/books/9781430230519",
  },
  {
    title: "Pro Hibernate and MongoDB",
    subtitle: "",
    isbn13: "9781430257943",
    price: "$47.27",
    image: "https://itbook.store/img/books/9781430257943.png",
    url: "https://itbook.store/books/9781430257943",
  },
  {
    title: "Scaling MongoDB",
    subtitle: "Sharding, Cluster Setup, and Administration",
    isbn13: "9781449303211",
    price: "$16.99",
    image: "https://itbook.store/img/books/9781449303211.png",
    url: "https://itbook.store/books/9781449303211",
  },
  {
    title: "50 Tips and Tricks for MongoDB Developers",
    subtitle: "Get the Most Out of Your Database",
    isbn13: "9781449304614",
    price: "$7.00",
    image: "https://itbook.store/img/books/9781449304614.png",
    url: "https://itbook.store/books/9781449304614",
  },
  {
    title: "MongoDB and Python",
    subtitle:
      "Patterns and processes for the popular document-oriented database",
    isbn13: "9781449310370",
    price: "$6.88",
    image: "https://itbook.store/img/books/9781449310370.png",
    url: "https://itbook.store/books/9781449310370",
  },
  {
    title: "MongoDB and PHP",
    subtitle: "Document-Oriented Data for Web Developers",
    isbn13: "9781449314361",
    price: "$14.99",
    image: "https://itbook.store/img/books/9781449314361.png",
    url: "https://itbook.store/books/9781449314361",
  },
  {
    title: "Building Node Applications with MongoDB and Backbone",
    subtitle: "Rapid Prototyping and Scalable Deployment",
    isbn13: "9781449337391",
    price: "$4.85",
    image: "https://itbook.store/img/books/9781449337391.png",
    url: "https://itbook.store/books/9781449337391",
  },
  {
    title: "MongoDB Applied Design Patterns",
    subtitle: "Practical Use Cases with the Leading NoSQL Database",
    isbn13: "9781449340049",
    price: "$29.99",
    image: "https://itbook.store/img/books/9781449340049.png",
    url: "https://itbook.store/books/9781449340049",
  },
  {
    title: "MongoDB: The Definitive Guide, 2nd Edition",
    subtitle: "Powerful and Scalable Data Storage",
    isbn13: "9781449344689",
    price: "$17.95",
    image: "https://itbook.store/img/books/9781449344689.png",
    url: "https://itbook.store/books/9781449344689",
  },
  {
    title: "MongoDB: The Definitive Guide",
    subtitle: "Powerful and Scalable Data Storage",
    isbn13: "9781449381561",
    price: "$4.85",
    image: "https://itbook.store/img/books/9781449381561.png",
    url: "https://itbook.store/books/9781449381561",
  },
  {
    title: "MongoDB Basics",
    subtitle: "",
    isbn13: "9781484208960",
    price: "$24.99",
    image: "https://itbook.store/img/books/9781484208960.png",
    url: "https://itbook.store/books/9781484208960",
  },
  {
    title: "Full Stack JavaScript",
    subtitle: "Learn Backbone.js, Node.js and MongoDB",
    isbn13: "9781484217504",
    price: "$39.99",
    image: "https://itbook.store/img/books/9781484217504.png",
    url: "https://itbook.store/books/9781484217504",
  },
  {
    title: "Data Science Fundamentals for Python and MongoDB",
    subtitle: "",
    isbn13: "9781484235966",
    price: "$18.32",
    image: "https://itbook.store/img/books/9781484235966.png",
    url: "https://itbook.store/books/9781484235966",
  },
  {
    title: "Full Stack JavaScript, 2nd Edition",
    subtitle: "Learn Backbone.js, Node.js, and MongoDB",
    isbn13: "9781484237175",
    price: "$37.99",
    image: "https://itbook.store/img/books/9781484237175.png",
    url: "https://itbook.store/books/9781484237175",
  },
  {
    title: "MongoDB Recipes",
    subtitle: "With Data Modeling and Query Building Strategies",
    isbn13: "9781484248904",
    price: "$19.19",
    image: "https://itbook.store/img/books/9781484248904.png",
    url: "https://itbook.store/books/9781484248904",
  },
  {
    title: "MongoDB: The Definitive Guide, 3rd Edition",
    subtitle: "Powerful and Scalable Data Storage",
    isbn13: "9781491954461",
    price: "$29.11",
    image: "https://itbook.store/img/books/9781491954461.png",
    url: "https://itbook.store/books/9781491954461",
  },
  {
    title: "Mongoose for Application Development",
    subtitle:
      "Learn to speed up your application development by using Mongoose to harness the power of Node.js and MongoDB",
    isbn13: "9781782168195",
    price: "$23.99",
    image: "https://itbook.store/img/books/9781782168195.png",
    url: "https://itbook.store/books/9781782168195",
  },
  {
    title: "Learning Single-page Web Application Development",
    subtitle:
      "Build powerful and scalable single-page web applications using a full stack JavaScript environment with Node.js, MongoDB, AngularJS, and the Express framework",
    isbn13: "9781783552092",
    price: "$26.99",
    image: "https://itbook.store/img/books/9781783552092.png",
    url: "https://itbook.store/books/9781783552092",
  },
  {
    title: "MEAN Web Development",
    subtitle:
      "Master real-time MEAN web application development and learn how to construct a MEAN application using a combination of MongoDB, Express, AngularJS, and Node.js",
    isbn13: "9781783983285",
    price: "$39.49",
    image: "https://itbook.store/img/books/9781783983285.png",
    url: "https://itbook.store/books/9781783983285",
  },
  {
    title: "MongoDB for Java Developers",
    subtitle:
      "Design, build, and deliver efficient Java applications using the most advanced NoSQL database",
    isbn13: "9781785280276",
    price: "$27.99",
    image: "https://itbook.store/img/books/9781785280276.png",
    url: "https://itbook.store/books/9781785280276",
  },
  {
    title: "RESTful Web API Design with Node.js 10, 3rd Edition",
    subtitle:
      "Learn to create robust RESTful web services with Node.js, MongoDB, and Express.js",
    isbn13: "9781788623322",
    price: "$29.99",
    image: "https://itbook.store/img/books/9781788623322.png",
    url: "https://itbook.store/books/9781788623322",
  },
];

const data2 = [
  {
    title: "Effective JavaScript",
    subtitle: "68 Specific Ways to Harness the Power of JavaScript",
    isbn13: "9780321812186",
    price: "$21.99",
    image: "https://itbook.store/img/books/9780321812186.png",
    url: "https://itbook.store/books/9780321812186",
  },
  {
    title: "Learning JavaScript",
    subtitle: "A Hands-On Guide to the Fundamentals of Modern JavaScript",
    isbn13: "9780321832740",
    price: "$8.99",
    image: "https://itbook.store/img/books/9780321832740.png",
    url: "https://itbook.store/books/9780321832740",
  },
  {
    title: "Java Cookbook, 2nd Edition",
    subtitle: "Solutions and Examples for Java Developers",
    isbn13: "9780596007010",
    price: "$3.89",
    image: "https://itbook.store/img/books/9780596007010.png",
    url: "https://itbook.store/books/9780596007010",
  },
  {
    title: "JavaScript: The Good Parts",
    subtitle: "Unearthing the Excellence in JavaScript",
    isbn13: "9780596517748",
    price: "$15.99",
    image: "https://itbook.store/img/books/9780596517748.png",
    url: "https://itbook.store/books/9780596517748",
  },
  {
    title: "Head First JavaScript",
    subtitle: "A Learner's Companion to JavaScript",
    isbn13: "9780596527747",
    price: "$7.72",
    image: "https://itbook.store/img/books/9780596527747.png",
    url: "https://itbook.store/books/9780596527747",
  },
  {
    title: "Sams Teach Yourself Java in 24 Hours, 6th Edition",
    subtitle: "Covering Java 7 and Android",
    isbn13: "9780672335754",
    price: "$3.74",
    image: "https://itbook.store/img/books/9780672335754.png",
    url: "https://itbook.store/books/9780672335754",
  },
  {
    title: "Sams Teach Yourself Java in 24 Hours, 8th Edition",
    subtitle: "Covering Java 9",
    isbn13: "9780672337949",
    price: "$17.79",
    image: "https://itbook.store/img/books/9780672337949.png",
    url: "https://itbook.store/books/9780672337949",
  },
  {
    title: "Pro Java ME Apps",
    subtitle: "Building Commercial Quality Java ME Apps",
    isbn13: "9781430233275",
    price: "$36.22",
    image: "https://itbook.store/img/books/9781430233275.png",
    url: "https://itbook.store/books/9781430233275",
  },
  {
    title: "Expert Oracle and Java Security",
    subtitle: "Programming Secure Oracle Database Applications With Java",
    isbn13: "9781430238317",
    price: "$46.78",
    image: "https://itbook.store/img/books/9781430238317.png",
    url: "https://itbook.store/books/9781430238317",
  },
  {
    title: "JavaScript Creativity",
    subtitle: "Exploring the Modern Capabilities of JavaScript and HTML5",
    isbn13: "9781430259442",
    price: "$30.64",
    image: "https://itbook.store/img/books/9781430259442.png",
    url: "https://itbook.store/books/9781430259442",
  },
  {
    title: "Java 7 Pocket Guide, 2nd Edition",
    subtitle: "Instant Help for Java Programmers",
    isbn13: "9781449343569",
    price: "$11.99",
    image: "https://itbook.store/img/books/9781449343569.png",
    url: "https://itbook.store/books/9781449343569",
  },
  {
    title: "JavaScript Testing with Jasmine",
    subtitle: "JavaScript Behavior-Driven Development",
    isbn13: "9781449356378",
    price: "$9.22",
    image: "https://itbook.store/img/books/9781449356378.png",
    url: "https://itbook.store/books/9781449356378",
  },
  {
    title: "JavaMail API",
    subtitle: "Sending and Receiving Email with Java",
    isbn13: "9781449367244",
    price: "$3.67",
    image: "https://itbook.store/img/books/9781449367244.png",
    url: "https://itbook.store/books/9781449367244",
  },
  {
    title: "Scripting in Java",
    subtitle: "Integrating with Groovy and JavaScript",
    isbn13: "9781484207147",
    price: "$44.99",
    image: "https://itbook.store/img/books/9781484207147.png",
    url: "https://itbook.store/books/9781484207147",
  },
  {
    title: "Learn JavaFX 8",
    subtitle: "Building User Experience and Interfaces with Java 8",
    isbn13: "9781484211434",
    price: "$57.95",
    image: "https://itbook.store/img/books/9781484211434.png",
    url: "https://itbook.store/books/9781484211434",
  },
  {
    title: "Java Design Patterns",
    subtitle: "A tour of 23 gang of four design patterns in Java",
    isbn13: "9781484218013",
    price: "$30.79",
    image: "https://itbook.store/img/books/9781484218013.png",
    url: "https://itbook.store/books/9781484218013",
  },
  {
    title: "Practical JSF in Java EE 8",
    subtitle: "Web Applications ​in Java for the Enterprise",
    isbn13: "9781484230299",
    price: "$39.99",
    image: "https://itbook.store/img/books/9781484230299.png",
    url: "https://itbook.store/books/9781484230299",
  },
  {
    title: "Pro JavaFX 9",
    subtitle:
      "A Definitive Guide to Building Desktop, Mobile, and Embedded Java Clients",
    isbn13: "9781484230411",
    price: "$31.20",
    image: "https://itbook.store/img/books/9781484230411.png",
    url: "https://itbook.store/books/9781484230411",
  },
  {
    title: "Exploring Java 9",
    subtitle: "Build Modularized Applications in Java",
    isbn13: "9781484233290",
    price: "$17.49",
    image: "https://itbook.store/img/books/9781484233290.png",
    url: "https://itbook.store/books/9781484233290",
  },
  {
    title: "The Definitive Guide to JSF in Java EE 8",
    subtitle: "Building Web Applications with JavaServer Faces",
    isbn13: "9781484233863",
    price: "$31.85",
    image: "https://itbook.store/img/books/9781484233863.png",
    url: "https://itbook.store/books/9781484233863",
  },
  {
    title: "Java Pocket Guide, 4th Edition",
    subtitle: "Instant Help for Java Programmers",
    isbn13: "9781491938690",
    price: "$12.18",
    image: "https://itbook.store/img/books/9781491938690.png",
    url: "https://itbook.store/books/9781491938690",
  },
  {
    title: "Practical Modern JavaScript",
    subtitle: "Dive into ES6 and the Future of JavaScript",
    isbn13: "9781491943533",
    price: "$40.54",
    image: "https://itbook.store/img/books/9781491943533.png",
    url: "https://itbook.store/books/9781491943533",
  },
  {
    title: "Modern Java Recipes",
    subtitle: "Simple Solutions to Difficult Problems in Java 8 and 9",
    isbn13: "9781491973172",
    price: "$14.62",
    image: "https://itbook.store/img/books/9781491973172.png",
    url: "https://itbook.store/books/9781491973172",
  },
  {
    title: "Java Performance, 2nd Edition",
    subtitle:
      "In-Depth Advice for Tuning and Programming Java 8, 11, and Beyond",
    isbn13: "9781492056119",
    price: "$29.99",
    image: "https://itbook.store/img/books/9781492056119.png",
    url: "https://itbook.store/books/9781492056119",
  },
  {
    title: "Learning Java, 5th Edition",
    subtitle: "An Introduction to Real-World Programming with Java",
    isbn13: "9781492056270",
    price: "$49.78",
    image: "https://itbook.store/img/books/9781492056270.png",
    url: "https://itbook.store/books/9781492056270",
  },
  {
    title: "Java Cookbook, 4th Edition",
    subtitle: "Problems and Solutions for Java Developers",
    isbn13: "9781492072584",
    price: "$47.65",
    image: "https://itbook.store/img/books/9781492072584.png",
    url: "https://itbook.store/books/9781492072584",
  },
  {
    title: "The Well-Grounded Java Developer",
    subtitle: "Vital techniques of Java 7 and polyglot programming",
    isbn13: "9781617290060",
    price: "$4.17",
    image: "https://itbook.store/img/books/9781617290060.png",
    url: "https://itbook.store/books/9781617290060",
  },
  {
    title: "Functional Programming in Java",
    subtitle: "How functional techniques improve your Java programs",
    isbn13: "9781617292736",
    price: "$34.26",
    image: "https://itbook.store/img/books/9781617292736.png",
    url: "https://itbook.store/books/9781617292736",
  },
  {
    title: "Java by Comparison",
    subtitle: "Become a Java Craftsman in 70 Examples",
    isbn13: "9781680502879",
    price: "$22.67",
    image: "https://itbook.store/img/books/9781680502879.png",
    url: "https://itbook.store/books/9781680502879",
  },
  {
    title: "Simplifying JavaScript",
    subtitle: "Writing Modern JavaScript with ES5, ES6, and Beyond",
    isbn13: "9781680502886",
    price: "$39.44",
    image: "https://itbook.store/img/books/9781680502886.png",
    url: "https://itbook.store/books/9781680502886",
  },
  {
    title: "Test-Driven Java Development",
    subtitle:
      "Invoke TDD principles for end-to-end application development with Java",
    isbn13: "9781783987429",
    price: "$39.99",
    image: "https://itbook.store/img/books/9781783987429.png",
    url: "https://itbook.store/books/9781783987429",
  },
  {
    title: "Mastering JavaScript Design Patterns",
    subtitle:
      "Discover how to use JavaScript design patterns to create powerful applications with reliable and maintainable code",
    isbn13: "9781783987986",
    price: "$27.49",
    image: "https://itbook.store/img/books/9781783987986.png",
    url: "https://itbook.store/books/9781783987986",
  },
  {
    title: "JavaScript Security",
    subtitle:
      "Learn JavaScript security to make your web applications more secure",
    isbn13: "9781783988006",
    price: "$14.99",
    image: "https://itbook.store/img/books/9781783988006.png",
    url: "https://itbook.store/books/9781783988006",
  },
  {
    title: "Natural Language Processing with Java",
    subtitle:
      "Explore various approaches to organize and extract useful text from unstructured data using Java",
    isbn13: "9781784391799",
    price: "$44.99",
    image: "https://itbook.store/img/books/9781784391799.png",
    url: "https://itbook.store/books/9781784391799",
  },
  {
    title: "Learning Behavior-driven Development with JavaScript",
    subtitle:
      "Create powerful yet simple-to-code BDD test suites in JavaScript using the most popular tools in the community",
    isbn13: "9781784392642",
    price: "$29.99",
    image: "https://itbook.store/img/books/9781784392642.png",
    url: "https://itbook.store/books/9781784392642",
  },
  {
    title: "Mastering JavaScript High Performance",
    subtitle:
      "Master the art of building, deploying, and optimizing faster web applications with JavaScript",
    isbn13: "9781784397296",
    price: "$35.99",
    image: "https://itbook.store/img/books/9781784397296.png",
    url: "https://itbook.store/books/9781784397296",
  },
  {
    title: "Functional Programming in JavaScript",
    subtitle:
      "Unlock the powers of functional programming hidden within JavaScript to build smarter, cleaner, and more reliable web apps",
    isbn13: "9781784398224",
    price: "$23.99",
    image: "https://itbook.store/img/books/9781784398224.png",
    url: "https://itbook.store/books/9781784398224",
  },
  {
    title: "Learning Java by Building Android Games",
    subtitle:
      "Get ready for a fun-filled experience of learning Java by developing games for the Android platform",
    isbn13: "9781784398859",
    price: "$26.99",
    image: "https://itbook.store/img/books/9781784398859.png",
    url: "https://itbook.store/books/9781784398859",
  },
  {
    title: "MongoDB for Java Developers",
    subtitle:
      "Design, build, and deliver efficient Java applications using the most advanced NoSQL database",
    isbn13: "9781785280276",
    price: "$27.99",
    image: "https://itbook.store/img/books/9781785280276.png",
    url: "https://itbook.store/books/9781785280276",
  },
  {
    title: "Mastering JavaScript",
    subtitle:
      "Explore and master modern JavaScript techniques in order to build large-scale web applications",
    isbn13: "9781785281341",
    price: "$35.99",
    image: "https://itbook.store/img/books/9781785281341.png",
    url: "https://itbook.store/books/9781785281341",
  },
  {
    title: "Learning JavaScript Data Structures and Algorithms, 3rd Edition",
    subtitle:
      "Write complex and powerful JavaScript code using the latest ECMAScript",
    isbn13: "9781788623872",
    price: "$44.99",
    image: "https://itbook.store/img/books/9781788623872.png",
    url: "https://itbook.store/books/9781788623872",
  },
  {
    title: "Java 9: Building Robust Modular Applications",
    subtitle:
      "Master advanced Java features and implement them to build amazing projects",
    isbn13: "9781788832823",
    price: "$79.99",
    image: "https://itbook.store/img/books/9781788832823.png",
    url: "https://itbook.store/books/9781788832823",
  },
  {
    title: "Modern JavaScript Web Development Cookbook",
    subtitle:
      "Easy solutions to common and everyday JavaScript development problems",
    isbn13: "9781788992749",
    price: "$40.00",
    image: "https://itbook.store/img/books/9781788992749.png",
    url: "https://itbook.store/books/9781788992749",
  },
  {
    title: "Kotlin for Enterprise Applications using Java EE",
    subtitle:
      "Develop, test, and troubleshoot enterprise applications and microservices with Kotlin and Java EE",
    isbn13: "9781788997270",
    price: "$43.86",
    image: "https://itbook.store/img/books/9781788997270.png",
    url: "https://itbook.store/books/9781788997270",
  },
  {
    title: "Java Projects, 2nd Edition",
    subtitle:
      "Learn the fundamentals of Java 11 programming by building industry grade practical projects",
    isbn13: "9781789131895",
    price: "$44.99",
    image: "https://itbook.store/img/books/9781789131895.png",
    url: "https://itbook.store/books/9781789131895",
  },
  {
    title: "Mastering Java 11, 2nd Edition",
    subtitle:
      "Develop modular and secure Java applications using concurrency and advanced JDK libraries",
    isbn13: "9781789137613",
    price: "$44.99",
    image: "https://itbook.store/img/books/9781789137613.png",
    url: "https://itbook.store/books/9781789137613",
  },
  {
    title: "Hands-On Robotics with JavaScript",
    subtitle:
      "Build robotic projects using Johnny-Five and control hardware with JavaScript and Raspberry Pi",
    isbn13: "9781789342055",
    price: "$39.99",
    image: "https://itbook.store/img/books/9781789342055.png",
    url: "https://itbook.store/books/9781789342055",
  },
  {
    title: "Building RESTful Web Services with Java EE 8",
    subtitle: "Create modern RESTful web services with the Java EE 8 API",
    isbn13: "9781789532883",
    price: "$29.99",
    image: "https://itbook.store/img/books/9781789532883.png",
    url: "https://itbook.store/books/9781789532883",
  },
  {
    title: "Hands-On Automation Testing with Java for Beginners",
    subtitle: "Build automation testing frameworks from scratch with Java",
    isbn13: "9781789534603",
    price: "$29.99",
    image: "https://itbook.store/img/books/9781789534603.png",
    url: "https://itbook.store/books/9781789534603",
  },
  {
    title: "Learn Blockchain Programming with JavaScript",
    subtitle:
      "Build your very own Blockchain and decentralized network with JavaScript and Node.js",
    isbn13: "9781789618822",
    price: "$31.99",
    image: "https://itbook.store/img/books/9781789618822.png",
    url: "https://itbook.store/books/9781789618822",
  },
];

export { data, data2 };
