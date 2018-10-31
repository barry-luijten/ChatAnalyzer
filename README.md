![logo](https://raw.githubusercontent.com/barry-luijten/ChatAnalyzer/master/img/logo/logotype2.png)

A JavaScript application to analyze WhatsApp chat dump locally in your browser.
* Forked  from the original ChatAnalyzer by Moritz Wolf https://github.com/mowolf/ChatAnalyzer.git
* Most of the JS code has been rewritten to accommodate easier expansion with new stats

# Features
* Displays a table with the following statistics per user 
  * Total number of messages sent
  * Total number of words
  * Total number of emoji's sent
  * Total number of images sent (iOS only)
  * Total number of video's sent (iOS only)
  * Total number of GIF's sent (iOS only)
  * Total number of links sent
  * Total number of audio messages sent (iOS only)
  * Total number of documents sent (iOS only)
  * Total number of contact cards sent (iOS only)
  * Total number of locations sent
  * Top 3 -uncommon- words used
  * Top 5 emoji's used
  * Average number of words per message used
  * Total number of unique words used (vacabulary)
  * The top three of each category are indicated by a medal emoji (gold, silver, bronze)
* Shows a spider diagram of the number of messages sent per user per day of the week (Sun-Sat)
* Shows a time based graph with the total number of messages sent per day

# Planned features
* Replace legacy code for generating time based graph
* Android dump support with auto-detection
* Language selection
* Auto-detect timestamp format
* Customize analyzed date range from UI
* Add statistics for totals
* Modify UI layout
* Create headless version to be used on self-hosted server
* Calculate user score based on all rankings

# Known errors
* *Fixed* Ranks with equal scores are sorted randomly
* *Fixed* Ranks with 0-scores are still ranked
* *Fixed* Ranks for Words per Message miscalculated

# Limitations
* Currently, only iOS dumps are supported.
* One-on-one chats are treated the same as group chats (as opposed to the original ChatAnalyzer)

# Usage

* Clone the repository `git clone https://github.com/barry-luijten/ChatAnalyzer.git`
* Open `index.html` in the root folder.
* Follow instructions on the web page.

# What happens to my chat data?

**No chat data is transferred to any remote server, all analysis is performed locally on your device**

The application works completly offline once the page has loaded. You can turn off your internet before loading your data file if you are particularly concerned. You can also take a look at the source code and give it an audit.

# Tech details
All stats are captured in a global variable named 'ca'.

## Properties
### ca.users[]
Named array containing all detected user objects. Key = user name.
```json
ca.users: [
    "User name 1": {<User object>},
    "User name 2": {<User object>}
]
```
### User object
```json
{
    "name": "User name",
    "messages": count,
    "images": count,
    "videos": count,
    "gifs": count,
    "audios": count,
    "contacts": count,
    "documents": count,
    "locations": count,
    "emojis": {"emoji1": count, "emoji2": count},
    "words": [
        {name": "word1",
        "count": 10,
        "isStopword": false}
    ],
    "messagesPerWeekday": [0: count, 1: count, 2: count, 3: count, 4: count, 5: count, 6: count]
}
```
#### User object Methods
User.getWord(w)
User.wordCount(includeStopwords = true)
User.wordCountUnique(includeStopwords = true)
User.wordsByUsage(max,includeStopwords = true)
User.wordsPerMessage()
User.emojisByUsage(max)
User.emojiCount()
User.rank(ranking)

### ca.messages[]
Array containing all parsed message objects:
### message object
```json
{
    "timestamp": "JSON timestamp",
    "user": "Name of user",
    "message": "Message text",
    "words": ["word1", "word2"],
    "emojis": ["emoji1": count, "emoji2": count],
    "links": ["hyperlink1", "hyperlink2"],
    "attachment": "type of attachment (only on iOS, Android reports all attachments as media): image, video, audio, gif, document, location, contact, media"
}
```
### ca.ranks{}
Object containing all calculated ranks
* audios - Highest number of audio messages sent
* contacts - Highest number of contact cards sent
* documents - Highest number of documents sent
* emojiCount - Highest number of emoji's sent
* gifs - Highest number of GIF's sent
* images - Highest number of images sent
* links - Highest number of links sent
* locations - Highest number of locations shared
* messages - Highest number of messages sent
* videos - Highest number of videos sent
* wordCount - Highest number of words sent
* wordCountUnique - Highest number of unique words used
* wordsPerMessage - Highest number of words per message

### Rank object
```json
{
    "name": "see ca.ranks",
    "scores": [
        { //Ranked first
            "user": "user name",
            "value": count
        },
        { //Ranked second
            "user": "user name",
            "value": count
        }
        ...
        { //Ranked n
            "user": "user name",
            "value": count
        }
    ]
}
```
### ca.re{}
Set of regular expressions to detect message attachments and parsing of words.
**_Needs work to match for Android dumps_**
* ca.re.image
* ca.re.document
* ca.re.gif
* ca.re.video
* ca.re.audio
* ca.re.contact
* ca.re.location
* ca.re.link
* ca.re.words
* ca.re.digits
* ca.re.message
* ca.re.emoji

## Customizable properties
### ca.maxDays
Number of days to analyze relative to the last message in the entire dump. Set to empty to analyze all messages contained in the dump.
### ca.dtFormat
Timestamp format of message. Requires [Moment.js](https://momentjs.com/docs/#/parsing/string-format/) format. Default: "DD-MM-YYYY HH:mm:ss"
### ca.stopwordLanguages
Array with language-codes which are used for compiling a list of common words. Each language has its own set of so-called "stopwords".
See [stopwords-iso](https://github.com/stopwords-iso/stopwords-iso).
## Methods
### ca.calculateRanks()
### ca.userCount()
### ca.getRankEmoji(rank)

## Reporting Issues

Please open a [new Github Issue](https://github.com/barry-luijten/ChatAnalyzer/issues/new) if you find any issues or have suggestions/improvements for the project.

Please also supply your data format (e.g. `[07.09.17, 6:44:16 PM] NAME: message`) and Language/Region setting of our phone if you are having a specific problem with data not loading correctly.

## Have a great idea for a new graph?

Head over to [planned features](https://github.com/barry-luijten/ChatAnalyzer/labels/enhancement) and add your idea if it's missing!

## Wanna help making this better?

Cheers! You are very welcome! Just submit a pull request.
