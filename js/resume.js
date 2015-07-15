var app = angular.module("myApp", ["ngSanitize"]);
app.controller("myHistory", [
    '$scope', function($scope)
    {
        $scope.candidate = {
            name: "Alexander Chernetz",
            email: "achernetz@gmail.com",
            address: {
                street: "27026 48th Place South #N102",
                city: "Kent",
                state: "WA",
                zip: "98032-6242"
            },
            phone: "(520) 425-7376 cell"
        };
        $scope.objective = "A contract that will utilize my background in Python development in order to gain new insights and knowledge in the data analytics space.";
        $scope.edu = {
            college: "California Polytechnic State University, San Luis Obispo",
            major: "Computer Engineering",
            degree: "Bachelor of Science",
            date: "March 2010",
            sat: "1440 (800M, 640V)",
            deans: ["Fall 2005", "Winter 2008"]
        };
        $scope.skills = {
            langs: ["Python", "Cython", "SQL (PostgreSQL/Oracle/MySQL)", "C/C++", "C#/.NET", "Java", "Bash shell",
                "OpenGL", "ASM (HC12, Intel x86, MIPS)"],
            guis: ["Qt4", "Qt5", "Eclipse", "Visual Studio", "SharpDevelop", "Xamarin"],
            plats: ["GNU/Linux (85%)", "Windows (10%)", "Other UNIX/BSD/Darwin (5%)"]
        };
        $scope.companies = [
            {
                end: "Mar 2015",
                title: "Senior Software Development Consultant",
                name: "Zonar Systems",
                start: "Nov 2014",
                link: "http://www.zonarsystems.com",
                location: "Seattle, WA",
                bullets: [
                    "Used Cython (a language that extends and augments Python) to increase the performance of GPS packet deserialization by more than 75%. (<a href=\"http://github.com/achernet/jsonpickle/tree/v0.9.1a0\">link</a>)",
                    "Replaced many slow geometry-related API calls throughout the codebase using NumPy (a Python extension to optimize vector math). (<a href=\"https://gist.github.com/achernet/5441533f314085f027d3\">example</a>)",
                    "Developed a procedure to allow the Python profiler to work in a multithreaded Celery environment, leading to the generation of much more detailed and accurate performance data.",
                    "Developed Python scripts to aggregate tens of thousands of profiler output files (generated using the procedure above) in order to produce a representative color-coded function graph, allowing performance insights to be shared across the greater organization in a clear and concise manner."
                ]
            },
            {
                end: "Sep 2014",
                title: "Market Risk Analysis and Development Consultant",
                name: "Bank of America",
                start: "Aug 2013",
                link: "http://www.bankofamerica.com",
                location: "Manhattan, NY",
                bullets: [
                    "Created a .NET 3D price and volume shock visualizer for stress testing with OpenTK, enhancing performance and cross-platform compatibility.",
                    "Provided a substantial amount of verifiability and validation for input queries and response processing for a client-side Python (Quartz) application designed to illustrate fluctuations in value at risk (VaR) for the equities, currency positions, mortgages, and credit derivatives across the firm."
                ]
            },
            {
                end: "Mar 2013",
                title: "Software Developer",
                name: "Wireless Generation",
                start: "Oct 2011",
                link: "http://www.wirelessgeneration.com",
                location: "Brooklyn, NY",
                bullets: [
                    "Converted over 25 queries from SQLAlchemy (Python library) ORM schema definitions to straight Oracle SQL, making them clearer, more maintainable, and up to 20% faster after further optimization.",
                    "Developed a Python universal data loader to support bulk uploading of assessment results, increasing throughput by a factor of more than 20.",
                    "Proposed, investigated, developed, and completed the addition of branch coverage across the entire Python codebase, including the verification of full branch coverage as part of continuous integration, which led to the discovery and removal of several bugs at the production level.",
                    "Wrote a Java library to migrate data from Oracle to MongoDB capable of processing data 750 times faster than the existing server-side code."
                ]
            },
            {
                end: "Feb 2011",
                title: "User Interface and Systems Software Engineer",
                name: "3VR Security, Inc.",
                start: "Jul 2010",
                link: "http://www.3vr.com",
                location: "San Francisco, CA",
                bullets: [
                    "Part of a team responsible for the development of a C#/.NET/LINQ data processing application utilizing task parallelization, to achieve dramatic improvements in performance and stability within several client-side applications.",
                    "Responsible for video rendering maintenance and repairing frame misalignment, invalid RGB-YUV conversions, and video overlay distortion."
                ]
            },
            {
                end: "Oct 2009",
                title: "Software Engineering Intern",
                name: "Visual Purple, LLC",
                start: "Jun 2009",
                link: "http://www.visualpurple.com",
                location: "San Luis Obispo, CA",
                bullets: [
                    "<i>Winning in Wireless</i>: Utilized OpenGL to develop and render three-dimensional nameplates.",
                    "<i>Link Analysis</i>: Developed two ActionScript user interactions with dynamic link matrix geometry. Shortened development time by two weeks by correctly anticipating client-side changes to design requirements, despite having no prior knowledge of Flash or ActionScript.",
                    "<i>Server Administration</i>: Administered and maintained a learning management system (LMS) to test applications for compliance with the Sharable Content Object Reference Model (SCORM). Developed several UNIX/Cygwin shell scripts to analyze applications for common SCORM errors. Enabled Firefox compatibility for all Flash-based applications by discovering and repairing several bugs."
                ]
            }
        ];
        $scope.projects = [
            {
                end: "Jan 2012",
                title: "Software Developer",
                name: "Personal Trading System",
                start: "Aug 2010",
                link: null,
                location: null,
                bullets: [
                    "Developed a multithreaded, client-side application in C#/SQL to download, parse, and reconcile raw market data from various exchange sources, including NASDAQ, Yahoo, TheStreet, and MSN.",
                    "Developed algorithms to compensate for human behavior and perception with regard to time discounting.",
                    "Designed a normalized SQL database to store stock market data, including the latest grades from TheStreet, which led to the discovery of a relationship between the grade of a stock and the accuracy of trend predictions made on that stock.",
                    "Designed and implemented backend SQL stored procedures for tasks such as the normalization of arbitrary ranges of values, including trading volumes and market capitalization values."
                ]
            },
            {
                end: "2008",
                title: "Coder, Mapper, and Game Hacker",
                name: "Grand Theft Auto: State of Liberty",
                start: "Jun 2004",
                link: "http://gtastateofliberty.com",
                location: null,
                bullets: [
                    "Provided the capability to take multiple GTA in-game maps and combine them into a single game world.",
                    "Utilized x86 assembly language to locate and remove multiple limitations in <i>Grand Theft Auto: Vice City</i>",
                    "Developed a program with a GUI frontend to remove the limits (<a href=\"http://www.chernetz.com/files/limadj20.zip\">link</a>)"
                ]
            }
        ];
    }
]);

