/**
 * RECOMMENDATION
 *
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 *
 * The Developer Tools in Chrome are available under the "..." menu,
 * futher hidden under the option "More Tools." In Firefox, they are
 * under the hamburger (three horizontal lines), also hidden under "More Tools."
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for.
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 */

function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and
      * return the appropriate object here. */

    const matches = [];

    scannedTextObj.forEach(book => {
        book.Content.forEach(content => {
            if (content.Text.includes(searchTerm)) {
                const match = {
                    "ISBN": book.ISBN,
                    "Page": content.Page,
                    "Line": content.Line
                };
                matches.push(match);
            }
        });
    });

    const result = {
        "SearchTerm": searchTerm,
        "Results": matches
    };

    return result;
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            }
        ]
    }
]

/** Another input object */
const canneryRowIn = [
    {
        "Title": "Cannery Row",
        "ISBN": "9780140187373",
        "Content": [
            {
                "Page": 1,
                "Line": 1,
                "Text": "Cannery Row in Monterey in California is a poem, a stink, a"
            },
            {
                "Page": 1,
                "Line": 2,
                "Text": "grating noise, a quality of light, a tone, a habit, a nostalgia, a"
            },
            {
                "Page": 1,
                "Line": 3,
                "Text": "dream. Cannery Row is the gathered and scattered, tin and"
            }
        ]
    }
  ]

/** Yet another input object */
const roughingItIn = [
    {
        "Title": "Roughing It",
        "ISBN": "9780520020184",
        "Content": [
            {
                "Page": 1,
                "Line": 1,
                "Text": "My brother had just been appointed Secretary of Nevada Territory"
            },
            {
                "Page": 1,
                "Line": 2,
                "Text": "-- an office of such majesty that it concentrated in itself the"
            },
            {
                "Page": 1,
                "Line": 3,
                "Text": "duties and dignities of Treasurer, Comptroller, Secretary of State,"
            }
        ]
    }
  ]

/** Array of input objects */
const booksIn = [
    twentyLeaguesIn[0],
    canneryRowIn[0],
    roughingItIn[0]
]

/** Output object for tests 1 & 2 */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/** Output object for tests 3 & 4 */
const twentyLeaguesTwoOut = {
    "SearchTerm": "and",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 10
        }
    ]
}

/** Output object for tests 5 & 6 */
const canneryRowOut = {
    "SearchTerm": "California",
    "Results": [
        {
            "ISBN": "9780140187373",
            "Page": 1,
            "Line": 1
        }
    ]
}

/** Output object for tests 7 & 8 */
const booksOut = {
    "SearchTerm": "and",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 10
        },
        {
            "ISBN": "9780140187373",
            "Page": 1,
            "Line": 3
        },
        {
            "ISBN": "9780520020184",
            "Page": 1,
            "Line": 3
        }
    ]
}

/**
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___|
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/

 */

/**
 * We have provided two unit tests. They're really just `if` statements that
 * output to the console. We've provided two tests as examples, and
 * they should pass with a correct implementation of `findSearchTermInBooks`.
 *
 * Please add your unit tests below.
 */

/** Checks that a known single hit in one book returns the correct result. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** Checks that a known single hit in one book returns the correct number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn);
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/** Checks that a known multiple hit in one book returns the correct result. */
const test3result = findSearchTermInBooks("and", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesTwoOut) === JSON.stringify(test3result)) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", twentyLeaguesTwoOut);
    console.log("Received:", test3result);
}

/** Checks that a known multiple hit in one book returns the correct number of results. */
const test4result = findSearchTermInBooks("and", twentyLeaguesIn);
if (test4result.Results.length == 2) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", twentyLeaguesTwoOut.Results.length);
    console.log("Received:", test4result.Results.length);
}

/** Checks that a known single hit in an array of books returns the correct result. */
const test5result = findSearchTermInBooks("California", booksIn);
if (JSON.stringify(canneryRowOut) === JSON.stringify(test5result)) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", canneryRowOut);
    console.log("Received:", test5result);
}

/** Checks that a known single hit in an array of books returns the correct number of results. */
const test6result = findSearchTermInBooks("California", booksIn);
if (test6result.Results.length == 1) {
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", canneryRowOut.Results.length);
    console.log("Received:", test6result.Results.length);
}

/** Checks that a known multiple hit in an array of books returns the correct result. */
const test7result = findSearchTermInBooks("and", booksIn);
if (JSON.stringify(booksOut) === JSON.stringify(test7result)) {
    console.log("PASS: Test 7");
} else {
    console.log("FAIL: Test 7");
    console.log("Expected:", booksOut);
    console.log("Received:", test7result);
}

/** Checks that a known multiple hit in an array of books returns the correct number of results. */
const test8result = findSearchTermInBooks("and", booksIn);
if (test8result.Results.length == 4) {
    console.log("PASS: Test 8");
} else {
    console.log("FAIL: Test 8");
    console.log("Expected:", booksOut.Results.length);
    console.log("Received:", test8result.Results.length);
}
