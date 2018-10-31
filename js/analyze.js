/// ----------------------------- \ GENERAL Config START /----------------------
// Define global variable

// If you notice that your picture cont = 0 please add the identifier of your language in
// lowercase and adding a "_" to the start e.g. "<Media" -> "_<media"
// ATTENTION: These strings might have some weird invisible space character between "<" and "media" !!!!
// ATTENTION: BE SURE TO COPY AND PASTE FROM YOUR CHAT LOG !!!!
var str4Pic = ["_<‎bild","_<‎media", "_<‎picture", "<‎attached>", "_‎image"];
var str4Video = ["_‎video"];
//Init ca
var ca = {};

//Customizable settings
ca.dtFormat = "DD-MM-YYYY HH:mm:ss";
ca.maxDays = null;
ca.period = "last_month";
ca.stopwordLanguages = ["nl","en"];
// Add custom stopwords
stopwords["nl"].push("btw","echt","goed","hoor","idd","‘m","'m","m'n","m’n","mee","mss","nou","z'n","z’n");

//Regular expressions
ca.re = {};
ca.re.image = new RegExp(/\u200eimage omitted/);
ca.re.document = new RegExp(/\u200edocument omitted/);
ca.re.gif = new RegExp(/\u200egif omitted/);
ca.re.video = new RegExp(/\u200evideo omitted/);
ca.re.audio = new RegExp(/\u200eaudio omitted/);
ca.re.contact = new RegExp(/\u200econtact card omitted/);
ca.re.location = new RegExp(/\u200elocation:/);
ca.re.link = new RegExp(/(https?:\/\/[^\s]*)/);
ca.re.words = new RegExp(/[\b\s:;"'~`!@#$%^&*()_\-+=\[\]{}|\\<,.>?/°]/);
ca.re.digits = new RegExp(/\D/);
ca.re.message = new RegExp(/\[(.*),\s(.*)\]\s((.*?):\s(.*)|\u200e(.*))/);
// https://mathiasbynens.be/notes/es-unicode-property-escapes#emoji
ca.re.emoji = new RegExp(/\uD83C\uDFF4(?:\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74)\uDB40\uDC7F|\u200D\u2620\uFE0F)|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDB0-\uDDB3])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDB0-\uDDB3]))|\uD83D\uDC69\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDB0-\uDDB3])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83D\uDC69\u200D[\u2695\u2696\u2708])\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC68(?:\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDB0-\uDDB3])|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF9]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD70\uDD73-\uDD76\uDD7A\uDD7C-\uDDA2\uDDB0-\uDDB9\uDDC0-\uDDC2\uDDD0-\uDDFF])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF9]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD70\uDD73-\uDD76\uDD7A\uDD7C-\uDDA2\uDDB0-\uDDB9\uDDC0-\uDDC2\uDDD0-\uDDFF])\uFE0F/g);

ca.users = {};
ca.userCount = function() {
  var c = 0;
  for (var u in ca.users){
    c++;
  }
  return c;
}
ca.calculateRanks = function() {
  ca.ranks = {};
  var rankings = ['messages','wordCount','wordCountUnique','wordsPerMessage','emojiCount','links','images','documents','gifs','videos','audios','contacts','locations'];
  for (var r of rankings.values()) {
    var rank = {};
    rank.name = r;
    rank.value = 0;
    rank.leader = '';
    rank.scores = [];
    for (var u in ca.users){
      var score = {};
      score.user = u;
      if (typeof ca.users[u][r] == "function") {
        score.value = ca.users[u][r]();
      } else {
        score.value = ca.users[u][r];
      }
      rank.scores.push(score);
    }
    rank.scores.sort(function (a, b){
      return b.value - a.value;
    });
    // Assign rankings per score
    var ranking = 1;
    for (i in rank.scores) {
      if (i > 0 && (rank.scores[i].value < rank.scores[i - 1].value)) {
        ranking++;
      }
      if (rank.scores[i].value == 0) ranking = 0;
      rank.scores[i].ranking = ranking;
    }
    ca.ranks[r] = rank;
  }
}
ca.getRankEmoji = function(rank){
  switch (rank) {
    case 1: return '🥇';
    case 2: return '🥈';
    case 3: return '🥉';
    default: return '';
  }
}

// ca stopwords
ca.stopwords = [];
for (let l of ca.stopwordLanguages) {
  ca.stopwords = ca.stopwords.concat(stopwords[l]);
}
ca.isStopword = function(w) {
  return ca.stopwords.indexOf(w) >= 0;
}

class Message {
  constructor(t) {
    this.timestamp = t.toJSON();
    this.user = undefined;
    this.links = undefined;
    this.words = undefined;
    this.message = undefined;
    this.attachment = undefined;
    this.emojis = undefined;
    this.event = undefined;
  }
  get moment() {
    return moment(this.timestamp);
  }
}

// User class
class User {
  constructor(name) {
    this.name = name;
    this.messages = 0;
    this.words = [];
    this.links = 0;
    this.images = 0;
    this.documents = 0;
    this.gifs = 0;
    this.videos = 0;
    this.audios = 0;
    this.contacts = 0;
    this.locations = 0;
    this.emojis = {};
    this.messagesPerWeekday = [];
    for (let i = 0; i < 7; i++) {
      this.messagesPerWeekday[i] = 0;
    }
    this.color = ca.getRandomColor();
  }

  addMessage(m) {
    this.messages++;
    if (m.links) this.links += m.links.length;
    if (m.attachment) this[m.attachment + 's']++;
    if (m.words) {
      for (let w of m.words) {
        let word = this.getWord(w);
        if (!word) {
          word = {};
          word.name = w;
          word.count = 1
          word.isStopword = ca.isStopword(w);
          this.words.push(word);
        } else {
          word.count++;
        }
      }
    }
    if (m.emojis) {
      for (let e in m.emojis) {
        if (this.emojis[e]) {
          this.emojis[e] += m.emojis[e];
        } else {
          this.emojis[e] = m.emojis[e];
        }
      }
    }
    //Update weekday stats
    var t = moment(m.timestamp);
    this.messagesPerWeekday[t.day()]++;
  }
  getWord(w) {
    return this.words.find(function(word) {
      return word.name == w;
    });
  }
  wordCount(includeStopwords = true) {
    var c = 0
    for (var word of this.words) {
      if (!includeStopwords && word.isStopword) continue;
      c += word.count;
    }
    return c;
  }
  wordCountUnique(includeStopwords = true) {
    if (includeStopwords) return this.words.length;
    var c = 0
    for (var word of this.words) {
      if (!word.isStopword) c++;
    }
    return c;
  }
  wordsByUsage(max, includeStopwords = true) {
    var r = [];
    this.words.sort(function(x,y) {
      return y.count - x.count;
    });
    for (let word of this.words) {
      if (!includeStopwords && word.isStopword) continue;
      r.push(word.name + "(" + word.count + ")");
      if (r.length == max) break;
    }
    return r;
  }
  wordsPerMessage() {
    return (this.wordCount() / this.messages);
  }
  emojisByUsage(max) {
    var a = [];
    var r = [];
    var i = 0;
    for (var e in this.emojis) {
      var emoji= {};
      emoji.name = e;
      emoji.count = this.emojis[e];
      a.push(emoji);
    }
    a.sort(function(x,y) {
      return y.count - x.count;
    });
    for (var eNr in a) {
      var emoji = a[eNr];
      r.push(emoji.name + "(" + emoji.count + ")");
      i++;
      if (i == max) break;
    }
    return r;
  }
  emojiCount() {
    var c = 0
    for (var w in this.emojis) {
      c += this.emojis[w];
    }
    return c;
  }
  rank(ranking) {
    if (!ca.ranks) ca.calculateRanks();
    if (!ca.ranks[ranking]) return undefined;
    var username = this.name;
    var index = ca.ranks[ranking].scores.findIndex(function(score){
      return score.user == username;
    })
    return ca.ranks[ranking].scores[index].ranking;
  }
}

//C Chat class
class Chat extends User {
  constructor() {
    super("Totals");
    this.events = [];
    this.last_timestamp = '';
  }
  rank(ranking) {
    return 0;
  }
}
// If you notice that your audio cont = 0 please add the identifier of your language in
// ATTENTION: BE SURE TO COPY AND PASTE FROM YOUR CHAT LOG !!!!
var str4Audio = ["_<‎audio","_‎audio"];

// If you notice words that are not part of your chat (i.g. identifiers) of your language in
// ATTENTION: PLEASE BE SURE TO COPY AND PASTE FROM YOUR CHAT LOG !!!!
var unwantedWords = ["_","_weggelassen>", "_ommited>", "omesso>", "_omitted"];

/// ----------------------------- \ GENERAL Config END /--------------------------------

// TODO: add group support (make carousell for groups)
// TODO: add words per messages and plot the change over time
// TODO: Make sure all variables are resetted when choosing the next file! -> write initalizer
// TODO: filter out most common words
// TODO: Most used emojies

/// ----------------------------- \ Code /--------------------------------------
wordsByUsage = [];
// file listener
document.getElementById('file-input')
  .addEventListener('change', readSingleFile, false);

//Read File
function readSingleFile(e) {

  // handle file
  var file = e.target.files[0];
  if ((!file) || (file.type != "text/plain")) {
    console.log("ERROR! No txt file selected!");
    var er = document.getElementById("error");
    er.style.display = "block";
    // hide old results
    var res = document.getElementById("results");
    res.style.display = "none";
    return;
  }

  // Show loading icon
  var d = document.getElementById("loading");
  d.style.display = "block";

  // clear old Stuff
  document.getElementById('groupTableRows').innerHTML = "";
  document.getElementById('users').innerHTML = "";
  document.getElementById('groupInfo').innerHTML = "";
  document.getElementById('usersRows').innerHTML = "";
  document.getElementById('mostUsedButtons').innerHTML = "";
  document.getElementById('usersWords').innerHTML = "";

  // hide Stuff
  document.getElementById("uBlock").style.display = "none";
  document.getElementById("groupInfo").style.display = "none";
  document.getElementById("group").style.display = "none";
  document.getElementById("1on1chat").style.display = "none";

  // executes on load of file
  var reader = new FileReader();
  reader.onload = function(e) {

    var contents = e.target.result;
    // get data in right format
    parseContent(contents);
    var structArray = createStruct(contents);
    var userStruct = filterUsers(structArray);

    // NOTE:
    // structArray: Formatted line data in the form of a struct with the keys: name date time message
    //              name: "Name Surname"
    //              date: "YYYY-MM-DD"
    //              time: "HH:MM:SS"
    //              each key represents an array, the index represents the line number
    //              e.g. structArray.date[0] is the date of the first line
    // userStruct: array of structs with the keys: name date time message
    //           : for every person there is one struct, same format as above, index represents messageNumber of name

    // create colors:
    backgroundColorArray = ["rgba(20, 168, 204, 0.2)", "rgba(255, 72, 64, 0.2)"];
    colorArray = ["rgb(20, 168, 204)", "rgb(255, 72, 64)"];


    // checks if group chat
    if (ca.userCount() > 0) {
      // GROUP CHAT ----------------------------------------------------------------------

      // TODO: What to do when this is a normal chat misidentified as a group chat?
      // TODO: ADd button that analyzes as normal chat with the first two names

      // Show Error four Groups
      var div = document.createElement('div');
      div.className = 'col-sm';
      div.innerHTML = "<p>If this is no group chat you have probably copy-pased a chat in your chat. Please open your chat file and eliminate the other people.</p>";
      var erG = document.getElementById("groupInfo");
      erG.appendChild(div);
      erG.style.display = "block";
      document.getElementById("group").style.display = "block";


      // analyze
      displayGroupStats(userStruct);
    } else {
      // NORMAL CHAT ----------------------------------------------------------------------
      displayChat(userStruct);
      document.getElementById("1on1chat").style.display = "block";
      document.getElementById("groupTable").style.display = "none";
    }

    // CLEAN HTML -------------------------------------------------------------------------
    // Hide Loading
    var d = document.getElementById("loading");
    d.style.display = "none";
    // Hide tutorial
    var d = document.getElementById("tutorial");
    d.style.display = "none";
    // Hide Error
    var d = document.getElementById("error");
    d.style.display = "none";
    // show result page
    var d = document.getElementById("results");
    d.style.display = "block";

  };
  reader.readAsText(file);
}


// # ------------------------------------------------------------------------- #
// 1ON1 CHAT -------------------------------------------------------------------
// NOTE: this is the function that gets executed on normal chats
function displayChat(content) {
  // contents is an object: name, message, date, time

  // USER SPECIFIC  ------------------------------------------------------------------------------------
  var wordsPerMessage = [];
  var messagesCount = [0,0];

  for (var i = 0; i < 2; i++) {
    // message Count ----------------------------------------
    messagesCount[i] = content[i].message.length;

    // Words per message ------------------------------------
    // returns [avergeWordsPerMessage,tolalWords];
    wordsPerMessage[i] = calcWordsPerMessage(content[i].message);

    // Most used words --------------------------------------
    var words = getMostUsedWords(content[i].message)
    wordsByUsage[i] = words.mostUsed; // -> global variable

    // TODO:make critical variables global! and be sure to save tmem and not override with new persons stat
    totalWords = wordsPerMessage[i][1]
    var sentPicsCount = words.sentPicsCount;
    var sentVideoCount = words.sentVideoCount;
    var sentAudioCount = words.sentAudioCount;

    // HTML CONSTRUCTION ------------------------------------
    if (wordsByUsage[i].length > 29) {
      max = 30;
    } else {
      max = wordsByUsage[i].length;
    }

    var mostUsedHTML ="";
    for (var j = 0; j < max; j++) {
      mostUsedHTML = mostUsedHTML + "<p>" + wordsByUsage[i][j][0].substring(1) +" - "+ Math.round(wordsByUsage[i][j][1]/wordsPerMessage[i][1]*1000)/10 + "%</p>";
    }

    var div = document.createElement('div');
    div.className = 'col-sm';
    div.innerHTML = // "<h4 data-letters='" + content[i].name.match(/\b\w/g).join('') + "'></h4>" +
                    "<h4 data-letters='" + content[i].name[0] + "'></h4>" +
                    "<h4>" + content[i].name + "</h4>" +
                    "<p> Messages sent: <b>" + messagesCount[i] + "</b></p>" +
                    "<p> Words per Message: <b>" + wordsPerMessage[i][0] + "</b></p>" +
                    "<p> Pictures sent: <b>" + sentPicsCount + "</b></p>" +
                    "<p> Videos sent: <b>" + sentVideoCount + "</b></p>" +
                    "<p> Audio sent:<b>" + sentAudioCount + "</b></p>";
    document.getElementById('users').appendChild(div);

    // add words
    var div = document.createElement('div');
    div.className = 'col-sm';
    div.innerHTML = "<div id='wordsByUsage"+i+"'>" +  mostUsedHTML + "</div>"
    document.getElementById('usersWords').appendChild(div);
  }

  // Dropdown to remove stopwords
  var languageNames = ["Afar", "Afrikaans", "Akan", "Albanian", "Amharic", "Arabic", "Aragonese", "Armenian", "Assamese", "Avaric", "Avestan", "Aymara", "Azerbaijani", "Bambara", "Bashkir", "Basque", "Belarusian", "Bengali", "Bihari languages", "Bislama", "Bosnian", "Breton", "Bulgarian", "Burmese", "Catalan, Valencian", "Chamorro", "Chechen", "Chichewa, Chewa, Nyanja", "Chinese", "Chuvash", "Cornish", "Corsican", "Cree", "Croatian", "Czech", "Danish", "Divehi, Dhivehi, Maldivian", "Dutch, Flemish", "Dzongkha", "English", "Esperanto", "Estonian", "Ewe", "Faroese", "Fijian", "Filipino", "Finnish", "French", "Fulah", "Galician", "Georgian", "German", "Greek (modern)", "Guaraní", "Gujarati", "Haitian, Haitian Creole", "Hausa", "Hebrew (modern)", "Herero", "Hindi", "Hiri Motu", "Hungarian", "Interlingua", "Indonesian", "Interlingue", "Irish", "Igbo", "Inupiaq", "Ido", "Icelandic", "Italian", "Inuktitut", "Japanese", "Javanese", "Kalaallisut, Greenlandic", "Kannada", "Kanuri", "Kashmiri", "Kazakh", "Central Khmer", "Kikuyu, Gikuyu", "Kinyarwanda", "Kirghiz, Kyrgyz", "Komi", "Kongo", "Korean", "Kurdish", "Kuanyama, Kwanyama", "Latin", "Luxembourgish, Letzeburgesch", "Ganda", "Limburgan, Limburger, Limburgish", "Lingala", "Lao", "Lithuanian", "Luba-Katanga", "Latvian", "Manx", "Macedonian", "Malagasy", "Malay", "Malayalam", "Maltese", "Maori", "Marathi", "Marshallese", "Mongolian", "Nauru", "Navajo, Navaho", "North Ndebele", "Nepali", "Ndonga", "Norwegian Bokmål", "Norwegian Nynorsk", "Norwegian", "Sichuan Yi, Nuosu", "South Ndebele", "Occitan", "Ojibwa", "Church Slavic, Church Slavonic, Old Church Slavonic, Old Slavonic, Old Bulgarian", "Oromo", "Oriya", "Ossetian, Ossetic", "Panjabi, Punjabi", "Pali", "Persian", "Polish", "Pashto, Pushto", "Portuguese", "Quechua", "Romansh", "Rundi", "Romanian, Moldavian, Moldovan", "Russian", "Sanskrit", "Sardinian", "Sindhi", "Northern Sami", "Samoan", "Sango", "Serbian", "Gaelic, Scottish Gaelic", "Shona", "Sinhala, Sinhalese", "Slovak", "Slovenian", "Somali", "Southern Sotho", "Spanish, Castilian", "Sundanese", "Swahili", "Swati", "Swedish", "Tamil", "Telugu", "Tajik", "Thai", "Tigrinya", "Tibetan", "Turkmen", "Tagalog", "Tswana", "Tonga (Tonga Islands)", "Turkish", "Tsonga", "Tatar", "Twi", "Tahitian", "Uighur, Uyghur", "Ukrainian", "Urdu", "Uzbek", "Venda", "Vietnamese", "Volapük", "Walloon", "Welsh", "Wolof", "Western Frisian", "Xhosa", "Yiddish", "Yoruba", "Zhuang, Chuang", "Zulu"];
  var lanCode = ["aa", "af", "ak", "sq", "am", "ar", "an", "hy", "as", "av", "ae", "ay", "az", "bm", "ba", "eu", "be", "bn", "bh", "bi", "bs", "br", "bg", "my", "ca", "ch", "ce", "ny", "zh", "cv", "kw", "co", "cr", "hr", "cs", "da", "dv", "nl", "dz", "en", "eo", "et", "ee", "fo", "fj", "fl", "fi", "fr", "ff", "gl", "ka", "de", "el", "gn", "gu", "ht", "ha", "he", "hz", "hi", "ho", "hu", "ia", "id", "ie", "ga", "ig", "ik", "io", "is", "it", "iu", "ja", "jv", "kl", "kn", "kr", "ks", "kk", "km", "ki", "rw", "ky", "kv", "kg", "ko", "ku", "kj", "la", "lb", "lg", "li", "ln", "lo", "lt", "lu", "lv", "gv", "mk", "mg", "ms", "ml", "mt", "mi", "mr", "mh", "mn", "na", "nv", "nd", "ne", "ng", "nb", "nn", "no", "ii", "nr", "oc", "oj", "cu", "om", "or", "os", "pa", "pi", "fa", "pl", "ps", "pt", "qu", "rm", "rn", "ro", "ru", "sa", "sc", "sd", "se", "sm", "sg", "sr", "gd", "sn", "si", "sk", "sl", "so", "st", "es", "su", "sw", "ss", "sv", "ta", "te", "tg", "th", "ti", "bo", "tk", "tl", "tn", "to", "tr", "ts", "tt", "tw", "ty", "ug", "uk", "ur", "uz", "ve", "vi", "vo", "wa", "cy", "wo", "fy", "xh", "yi", "yo", "za", "zu"];
  // logic
  var dropdownBtn = document.createDocumentFragment();
  for (var key in stopwords) {
    var lanName = String(key);
    if (stopwords.hasOwnProperty(key)) {
      for (var j = 0; j < lanCode.length; j++) {
        if (String(key) == lanCode[j]) {
          lanName = languageNames[j]
          break;
        }
      }
      //
      var inputElement = document.createElement('a');
      inputElement.className = "dropdown-item"
      inputElement.value = key;
      inputElement.innerHTML = lanName;
      inputElement.addEventListener('click', function(){
          removeStopwords(this.value)
      });

      dropdownBtn.appendChild(inputElement);
    }
  }
  filterBtn = "<div class='btn-group' id='filterBtn'>" +
              "<button class='btn btn-secondary btn-sm dropdown-toggle' type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>" +
              "Filter out stopwords" +
              "</button>" +
              "<div class='dropdown-menu' id='filter'>"+
              "</div></div>";

  // Collapse Btn
  var collapseBtn = document.createElement('button');
  collapseBtn.className = "dropdown-item"
  collapseBtn.className = "btn";
  collapseBtn.innerHTML = "<i class='fas fa-chevron-down'></i></button>";
  collapseBtn.addEventListener('click', function(){
      if (document.getElementById('usersWords').style.display == "none"){
        document.getElementById('usersWords').style.display = "";
        document.getElementById('filterBtn').style.display ="";
      } else {
        document.getElementById('usersWords').style.display = "none";
        document.getElementById('filterBtn').style.display ="none";
      }
  });

  //
  var div = document.createElement('div');
  div.className = 'mb-0';
  div.innerHTML = "<p id='collapseBtnId'><b> Most used words:</b></p>"+
                  "<div class='pb-1 mb-1'>" + filterBtn + "</div>";
  // add to html
  document.getElementById('mostUsedButtons').appendChild(div);
  document.getElementById('collapseBtnId').insertBefore(collapseBtn, document.getElementById('collapseBtnId').firstChild);
  document.getElementById('filter').appendChild(dropdownBtn);

  // Hide them
  document.getElementById('usersWords').style.display = "none";
  document.getElementById('filterBtn').style.display ="none";

  // TODO:words bar Graph

  // Messages per Day Radar -----------------------------------------------------------------------------
  createDayRadar(content);

  // CHRONOLOGICAL GRAPH --------------------------------------------------------------------------------
  // returns struct "date count indexStart"
  createChonologicalGraph(content);
  messageCount = [countMessages(content[0].date), countMessages(content[1].date)];
  formatedStruct = addMissingDays(messageCount);


  // GLOBAL FACTORS -----------------------------------------------------------------------------------

  if (content[0].message.length > content[1].message.length) {
    var n0 = 0;
    var n1 = 1;
  } else {
    var n0 = 1;
    var n1 = 0;
  }

  var factorF = Math.round((content[n0].message.length/content[n1].message.length)*100)/100;
  var wpmF = Math.round(wordsPerMessage[n0][0]/wordsPerMessage[n1][0]*100)/100;
  var wpm = "And " + content[n0].name + " messages contain <b>" + wpmF + "</b> times the words of " +content[n1].name + " messages!</b>";
  var percent = Math.round((wpmF)*factorF*100);

  if (percent >= 1) {
    percent = percent.toString().substring(1,3)  + "</b>% more words!";
  } else {
    percent = percent  + "</b>% less words!";
  }

  var wordPDA = Math.round((wordsPerMessage[0][1]+wordsPerMessage[1][1])/(formatedStruct[0].date.length));
  var messPDA = Math.round((messagesCount[0]+messagesCount[1])/(formatedStruct[0].date.length));

  var div = document.createElement('div');
  div.className = 'mb-0';
  div.innerHTML = "<p> You guys write an average of " +messPDA +" messages per day. That's "+ wordPDA + " words per day! </p>" +
                  "<p>" + content[n0].name + " writes <b>" + factorF + "</b> times more messages!" + "</p>" +
                  "<p>" + wpm + "</p>" +
                  "<p>" + "Overall " + content[n0].name +" writes <b>" + percent + "</p>";
  document.getElementById('usersRows').appendChild(div);

  // TODO: CHRONOLOGICAL WORDS PER MESSAGE
  //messages[i].trim().split(/\s+/).length;
  /*
  var ctx = document.getElementById('chronologicalGraph2').getContext('2d');
  ctx.canvas.width = 1400;
  ctx.canvas.height = 500;
  var cfg = {
      type: 'line',
      data: {
      labels: formatedData[0][0],
      datasets: [{
        label: contents[0].name,
        data: formatedData[0][1][0],
        type: 'line',
        fill: true,
        steppedLine: true,
        pointRadius: 0,
        lineTension: 0,
        borderWidth: 1,
        pointHoverRadius: 10,
        backgroundColor:"rgba(20, 168, 204, 0.2)",
        borderColor:"rgb(20, 168, 204)",
        pointBackgroundColor:"rgb(20, 168, 204)",
        pointBorderColor:"#fff","pointHoverBackgroundColor":"#fff",
        pointHoverBorderColor:"rgb(20, 168, 204)"},
        {
        label: contents[1].name,
        data: formatedData[0][1][1],
        type: 'line',
        fill: false,
        steppedLine: true,
        pointRadius: 0,
        lineTension: 0,
        borderWidth: 1,
        pointHoverRadius: 10,
        backgroundColor:"rgba(255, 72, 64, 0.2)",
        borderColor:"rgb(255, 72, 64)",
        pointBackgroundColor:"rgb(255, 72, 64)",
        pointBorderColor:"#fff",
        pointHoverBackgroundColor:"#fff",
        pointHoverBorderColor:"rgb(255, 72, 64)"}]
    },
        options: {
      scales: {
        xAxes: [{
          type: 'time',
          distribution: 'linear',
          displayFormats: {
            month:	'MMM YYYY'
          },
          time: {
            min: '03 03 2014'
          },
          unit: 'month'
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Number Of Messages'
          }
        }]
      }
    }
  };
  var chart = new Chart(ctx, cfg);
*/
  // show chat of clicked day --------------------------------------------------
}

// # ------------------------------------------------------------------------- #
// GROUPS ----------------------------------------------------------------------
// NOTE: this is the function that gets executed on group chats

function displayGroupStats(content) {

  // TODO: figure out the group name!

  // display table
  document.getElementById("groupTable").style.display = "block";
  let resultTitle = document.getElementById("resultTitle");
  resultTitle.innerHTML = ca.chat.title;

  function renderStatsTableRow(user) {
  // personal STATS
    // HTML
    // create rows
    var tableRows = document.createElement('tr');
    var topWords = user.wordsByUsage(3,false).join(' - ');
    var topEmojis = user.emojisByUsage(5).join(' - ');
    tableRows.innerHTML = //"<th scope='row'>"+"<h4 data-letters='" + content[i].name.match(/\b\w/g).join('') + "'></h4>"+"</th>" +
                          "<th scope='row'>"+"<h4 data-letters='" + user.name.substring(0,1) + "'></h4>"+"</th>" +
                          "<td>"+user.name+"</td>" +
                          "<td>"+user.messages + ca.getRankEmoji(user.rank('messages')) + "</td>" +
                          "<td>"+user.wordCount() + ca.getRankEmoji(user.rank('wordCount')) +"</td>"+
                          "<td>"+user.emojiCount() + ca.getRankEmoji(user.rank('emojiCount')) +"</td>"+
                          "<td>"+user.images + ca.getRankEmoji(user.rank('images')) + "</td>" +
                          "<td>"+user.videos + ca.getRankEmoji(user.rank('videos')) + "</td>" +
                          "<td>"+user.gifs + ca.getRankEmoji(user.rank('gifs')) + "</td>" +
                          "<td>"+user.links + ca.getRankEmoji(user.rank('links')) + "</td>" +
                          "<td>"+user.audios + ca.getRankEmoji(user.rank('audios')) + "</td>" +
                          "<td>"+user.documents + ca.getRankEmoji(user.rank('documents')) + "</td>" +
                          "<td>"+user.contacts + ca.getRankEmoji(user.rank('contacts')) + "</td>" +
                          "<td>"+user.locations + ca.getRankEmoji(user.rank('locations')) + "</td>" +
                          "<td>"+topWords+"</td>" + 
                          "<td>"+topEmojis+"</td>" +
                          "<td>"+user.wordsPerMessage().toFixed(1) + ca.getRankEmoji(user.rank('wordsPerMessage')) + "</td>" +
                          "<td>"+user.wordCountUnique() + ca.getRankEmoji(user.rank('wordCountUnique')) + "</td>";

    document.getElementById('groupTableRows').appendChild(tableRows);
  }
  for (let u in ca.users) {
    let user = ca.users[u];
    renderStatsTableRow(user)
  }
  renderStatsTableRow(ca.chat);

  // sort table by most messages
  sortTable(1);

  // Day Radar
  createDayRadar();
  // Chronological Graph
  createChonologicalGraph(content);
}

// # ------------------------------------------------------------------------- #
// FUNCTIONS -------------------------------------------------------------------

function parseContent(content) {
  // Initialize chat statistics object
  ca.chat = new Chat;
  //Build message array from content
  ca.messages = [];
  var lines = content.split('\n');
  var m;
  for (let line of lines) {
    // Remove CR characters
    line = line.replace('\r','');
    var match = ca.re.message.exec(line);
    if (match) {
      var t = moment(match[1] + ' ' + match[2], ca.dtFormat);
      m = new Message(t);
      if (match[6]) {
        m.event = match[6];
      } else {
        m.user = match[4];
        var s = match[5].toLowerCase();
        if (ca.re.image.test(s)) m.attachment = 'image';
        if (ca.re.document.test(s)) m.attachment = 'document';
        if (ca.re.gif.test(s)) m.attachment = 'gif';
        if (ca.re.video.test(s)) m.attachment = 'video';
        if (ca.re.audio.test(s)) m.attachment = 'audio';
        if (ca.re.contact.test(s)) m.attachment = 'contact';
        if (ca.re.location.test(s)) m.attachment = 'location';
        if (! m.attachment) m.message = match[5];
      }
      ca.messages.push(m);
    } else if (ca.messages.length > 0) {
      m = ca.messages[ca.messages.length - 1];
      //Append multiline messages
      if (m.message) m.message += '\n';
      m.message += line;
    }
  }
  //Determine last message timestamp
  ca.chat.first_timestamp = ca.messages[0].moment;
  ca.chat.last_timestamp = ca.messages[ca.messages.length - 1].moment;
  ca.chat.start = moment();
  ca.chat.end = moment();
  if (ca.maxDays > 0) {
    ca.chat.start.subtract(ca.maxDays, 'days');
    ca.chat.title = "Statistics for period " + ca.chat.start.format("YYYY-MM-DD") + " - " + ca.chat.end.format("YYYY-MM-DD");
  } else {
    switch (ca.period) {
      case 'last_year':
        ca.chat.start.year(ca.chat.start.year() - 1).startOf('year'); 
        ca.chat.end.year(ca.chat.end.year() - 1).endOf('year'); 
        ca.chat.title = "Statistics for " + ca.chat.start.format("YYYY");
        break;
      case 'this_year':
        ca.chat.start.startOf('year'); 
        ca.chat.end.endOf('year'); 
        ca.chat.title = "Statistics for " + ca.chat.start.format("YYYY");
        break;
      case 'last_month':
        ca.chat.start.month(ca.chat.start.month() - 1).startOf('month');
        ca.chat.end.month(ca.chat.end.month() - 1).endOf('month');
        ca.chat.title = "Statistics for " + ca.chat.start.format("MMMM YYYY");
        break;
      case 'this_month':
        ca.chat.start.startOf('month'); 
        ca.chat.end.endOf('month'); 
        ca.chat.title = "Statistics for " + ca.chat.start.format("MMMM YYYY");
        break;
      case 'last_week':
        ca.chat.start.week(ca.chat.start.week() - 1).startOf('week');
        ca.chat.end.week(ca.chat.end.week() - 1).endOf('week');
        ca.chat.title = "Statistics for week " + ca.chat.start.format("w YYYY");
        break;
      case 'this_week':
        ca.chat.start.startOf('week'); 
        ca.chat.end.endOf('week'); 
        ca.chat.title = "Statistics for week " + ca.chat.start.format("w YYYY");
        break;
      default: 
        ca.chat.start = ca.chat.first_timestamp;
        ca.chat.end = ca.chat.last_timestamp;
        ca.chat.title = "Statistics for period " + ca.chat.start.format("YYYY-MM-DD") + " - " + ca.chat.end.format("YYYY-MM-DD");
    }
  }

  //Parse all messages
  for (var mIndex in ca.messages) {
    let m = ca.messages[mIndex];
    //Check timestamp to match analyzing period
    if (m.moment > ca.chat.end || m.moment < ca.chat.start) continue;
    if (m.message) {
      //Filter links
      m.links = [];
      let linkMatch = ca.re.link.exec(m.message);
      while (linkMatch != null) {
        m.links.push(linkMatch[1]);
        //Strip link from message
        m.message = m.message.substring(0,linkMatch.index) + m.message.substring(linkMatch.index + linkMatch[1].length);
        linkMatch = ca.re.link.exec(m.message);
      }
      //Handle words
      m.words = m.message.toLowerCase().split(ca.re.words);
      //Strip emoji's from words
      for (let wNr in m.words) {
        m.words[wNr] = m.words[wNr].replace(ca.re.emoji,'');
      }
      //Remove empty words
      m.words = m.words.filter(function (w) {
        return (w != '' && ca.re.digits.test(w));
      });
      //Filter emoji's
      m.emojis = [];
      let emojiMatch;
      while (emojiMatch = ca.re.emoji.exec(m.message)) {
        let e = emojiMatch[0];
        if (m.emojis[e]) {
          m.emojis[e] ++;
        } else {
          m.emojis[e] = 1;
        }
      }
    }
    //Update user
    if (m.user) {
      //Add users to global index
      if (!ca.users[m.user]) {
        var user = new User(m.user);
        ca.users[m.user] = user;
      } else {
        user = ca.users[m.user];
      }
      user.addMessage(m);
      // Update chat statistics
      ca.chat.addMessage(m);
    }
    // Store events
    if (m.event) {
      ca.chat.events.push(m);
    }
  }
}

// struct factory
// https://stackoverflow.com/questions/502366/structs-in-javascript
function makeStruct(names) {
  var names = names.split(' ');
  var count = names.length;
  function constructor() {
    for (var i = 0; i < count; i++) {
      this[names[i]] = arguments[i];
    }
  }
  return constructor;
}

// transform data into arrays of lines
function createStruct(content) {
   // Message can be in these formats: https://docs.google.com/spreadsheets/d/1mZCE_tFelvqmLh0vIt7vMjU1OYB0etuhwXRl3Fzv6k8/edit#gid=0
   // variables give the index ralative to the start of the message to seperate the data in the next functions
   // s1 +	l1 +	1+	l2 +	1+	l3+	s2+	t1+1+t2+1+t3+t4+sep3+NAME+sep4+text
   // REGEX
   // https://www.debuggex.com/r/VGwUUxtq7tvF2rJB
   // This regex is used to find the start index of every message (including special messages)
   var re = new RegExp("(\\[?)((\\d{1,4}(\\-|\\/|\\.){1}){2}\\d{2,4})((\\s.{1,3}\\s|\\s)|,\\s|\\.\\s){1}(((\\d{1,2}(\\:|.))\\d{2}((:|.)\\d{2})?)(\\s(a|p)?m|\\s(A|P)?M|\\s(a|p)?\\.(\\s)?\\m.)?)(\\]\\s|\\s\\-\\s|\\:)","g");
   var reFull = new RegExp('(\[?)((\d{1,4}(\-|\/|\.){1}){2}\d{2,4})((\s.{1,3}\s|\s)|,\s|\.\s){1}(((\d{1,2}\:)\d{2}(:\d{2})?)(\s(a|p)?m|\s(A|P)?M|\s(a|p)?\.(\s)?\m.)?)(\]\s|\s\-\s|\:)((.*:\s)(.*)|\u200e.*)','g');
   // regex to find ending of name
   // var reD = new RegExp("([:-])");
   var reD = new RegExp("(:|-)");

   var indexArray = [];
   var messageStartIndexArray = [];
   var nameArray = [];
   var timeArray = [];
   var dateArray = [];

   var i = 0
   while ((match = re.exec(content)) != null) {
     //console.log("match found at " + match.index);
     indexArray[i] = match.index;
     // currently this array stores the index after the identifier
     messageStartIndexArray[i] = match[0].length;
     //nameArray[i] = match[16];
     timeArray[i] = match[7];
     dateArray[i] = match[2];
     i++;
   }

   // create messsages
   var messageArray = [];
   var nameLengthArray = [];
   var temp = "";

   for (var i = 0; i < indexArray.length; i++) {

      if (i == indexArray.length - 1) {
        temp = content.substring(indexArray[i]+messageStartIndexArray[i], content.length-1);
      } else {
        temp = content.substring(indexArray[i]+messageStartIndexArray[i], indexArray[i+1]);
      }

      // search for a name and add it's length to the index
      match = reD.exec(temp);

      if (match != null) {
        nameLengthArray[i] = match.index ;
        // update name
        nameArray[i] = temp.substring(0,match.index);
      } else {
        nameLengthArray[i] = 0 ;
        // update name
        nameArray[i] = "ER: NO NAME FOUND";
      }


      // fill array // +2 gets rid of ": " before the start of the message
      if (i == indexArray.length - 1) {
        messageArray[i] = content.substring(indexArray[i]+messageStartIndexArray[i]+nameLengthArray[i]+2, content.length);
      } else {
        messageArray[i] = content.substring(indexArray[i]+messageStartIndexArray[i]+nameLengthArray[i]+2, indexArray[i+1]);
      }
    }

  // remove any special messages (e.g. lines without ":")
  // e.g. announcments when people get added to groups, security change etc
  var delArray = [];
  var a = 0;
  for (var i = 0; i < nameArray.length; i++)  {
    if (nameArray[i] == "ER: NO NAME FOUND") {
      // no ":" found. Delete this line
      delArray[a] = i;
      a++;
    }
  }

  for (var i = 0 ; i < a; i++) {
    messageArray.splice(delArray[i]-i,1);
    nameArray.splice(delArray[i]-i,1);
    timeArray.splice(delArray[i]-i,1);
    dateArray.splice(delArray[i]-i,1);
  }

  var Item = makeStruct("name date time message");
  var struct = new Item(nameArray, dateArray, timeArray, messageArray);

  return struct;
}

// transform lineArray into structs --------
function filterUsers(structArray) {

  var uniqueNames = findNames(structArray.name);
  var userStruct = [];

  // regex
  var reTime = new RegExp("((\\d{1,2})(:|.)(\\d{1,2})((:|.)(\\d{1,2}))?)(\\s(a|p)?m|\\s(A|P)?M|\\s(a|p)?\\.\\s\m\\.)?");
  var reDate = new RegExp("((\\d{1,2})(\\-|\\/|\\.))((\\d{1,2})(\\-|\\/|\\.))(\\d{2,4})");


  // note if DD:MM -> true or MM:DD -> false
  var ddmm = false;
  for (var j = 0; j < structArray.date.length; j++) {
    testMatch = reDate.exec(structArray.date[j]);

    if (parseInt(testMatch[2]) > 12) {
      var ddmm = true;
      break;
    }
  }


  for (j = 0; j < uniqueNames.length; j++) {

    var name = uniqueNames[j];
    var date = [];
    var time = [];
    var message = [];
    var nameLength = uniqueNames[j].length;
    var a = 0;
    var Item = makeStruct("name date time message");

    // splice messages
    for (var i = 0; i < structArray.date.length; i++) {
      if ( structArray.name[i] == name ) {

        timeMatch = reTime.exec(structArray.time[i]);
        dateMatch = reDate.exec(structArray.date[i]);

        if (ddmm) {
          var dd = dateMatch[2];
          var mm = dateMatch[5];
        } else {
          var dd = dateMatch[5];
          var mm = dateMatch[2];
        }
        var yyyy = dateMatch[7];

        if (dd.length == 1) {
          dd = "0" + dd;
        }
        if (mm.length == 1) {
          mm = "0" + mm;
        }
        if (yyyy.length == 2) {
          yyyy = "20" + yyyy;
        }

        date[a] = yyyy+"-"+mm+"-"+dd;

        // time to HH:MM:SS
        var pm = 0;
        if (timeMatch[7] != null) {
          if (timeMatch[7].length > 2) {
            if (timeMatch[7].substring(1,2).toLowerCase() == "p") {
              pm = 12;
            }
          }
        }

        var ss = "00";
        var hh = parseInt(timeMatch[2]) + pm;
        var mm = timeMatch[3];
        if (timeMatch[6] != null) {
          ss = timeMatch[6];
          if (ss.length == 0) {
            ss = "00";
          }
        }

        if (hh.length == 1) {
          hh = "0" + parseString(hh);
        }
        if (mm.length == 1) {
          mm = "0" + mm;
        }


        time[a] = hh+":"+mm+":"+ss;

        // message
        message[a] = structArray.message[i];

        a++;
      }
    }
    // save data to struct
    var user = new Item(name, date, time, message);
    userStruct.push(user);
  }
  // return

  // remove users with less then 1 messages
  // gets rid of chat bot : Messages to this chat and calls are now secured with end
  var delUser = [];
  for (var j = 0; j < userStruct.length; j++) {
    if (userStruct[j].message.length < 2) {
      delUser[j] = true;
    }
  }
  for (var j = 0; j < delUser.length; j++) {
    if (delUser[j]) {
      userStruct.splice(j,1);
    }
  }

  return userStruct;
}

// find names of the people
function findNames(names) {

  var uniqueNames = [];
  $.each(names, function(i, el){
    if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
  });

  return uniqueNames;
}

function addMissingDays(data) {
  var formatedStruct = [];
  var Item = makeStruct("date count");

  for(i = 0; i < data.length; i++) {
    var count = [];
    // Returns an array of dates between the two dates
    var getDates = function(startDate, endDate) {
      var dates = [],
      currentDate = startDate,
      addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
      };
      while (currentDate <= endDate) {
        dates.push(currentDate);
        currentDate = addDays.call(currentDate, 1);
      }
      return dates;
    };

    var dates = getDates(new Date(data[i].date[0]), new Date(data[i].date[data[i].date.length-1]));

    for (k = 0; k < dates.length; k ++) {
      // DD MM YY-> D MMM YY
      var index = data[i].date.indexOf(moment(dates[k]).format('YYYY-MM-DD'));
      if (index == -1) {
        count[k] = 0;
      } else {
        count[k] = data[i].count[index];
      }
    }

    var obj = new Item(dates, count);
    formatedStruct.push(obj);
  }

  return formatedStruct;
}

// returns an orderd struct with words and how often they are used
function getMostUsedWords(messages) {

  // Most used words --------------------------------------
  var Words = getWordCount(messages);

  var sentPicsIndex = -1;
  var sentAudioIndex = -1;
  var sentAudioCount = 0;
  var sentPicsCount = 0;
  var sentVideoIndex = -1;
  var sentVideoCount = 0;
  // create &sort most Used array
  var mostUsed = [["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],
                    ["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],
                    ["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],];
  var size = 0;
  for (var key in Words) {
    if (Words.hasOwnProperty(key)) size++;
  }
  for (var key in Words) {
      if (Words.hasOwnProperty(key)) {
        // evaluate the rest
        for (var j = 0; j < size; j++) {
          if (Words[key] > mostUsed[j][1]){
            mostUsed.splice( j, 0, [key, Words[key]]);
            break;
          }
        }
      }
  }

  // evaluate how many pics were sent
  for (var j = 0; j < mostUsed.length; j++) {
    for (var k = 0; k < str4Pic.length; k++) {
      if (mostUsed[j][0] == str4Pic[k]) {
        sentPicsIndex = j;
        sentPicsCount = mostUsed[j][1];
        break;
      }
    }
  }
  // remove it from the array
  mostUsed.splice(sentPicsIndex, 1);

  // evaluate how many videos were sent
  for (var j = 0; j < mostUsed.length; j++) {
    for (var k = 0; k < str4Video.length; k++) {
      if (mostUsed[j][0] == str4Video[k]) {
        sentVideoIndex = j;
        sentVideoCount = mostUsed[j][1];
        break;
      }
    }
  }
  // remove it from the array
  mostUsed.splice(sentVideoIndex, 1);

  // --  evaluate how many audio files were sent
  for (var j = 0; j < mostUsed.length; j++) {
    for (var k = 0; k < str4Audio.length; k++) {
      if (mostUsed[j][0] == str4Audio[k]) {
        sentAudioIndex = j;
        sentAudioCount = mostUsed[j][1];
        break;
      }
    }
  }
  // remove it from array
  mostUsed.splice(sentAudioIndex, 1);

  // remove all unwanted words
  var id = 0
  var indexToDel = [];
  for (var j = 0; j < mostUsed.length; j++) {
    for (var k = 0; k < unwantedWords.length; k++) {
      if (mostUsed[j][0] == unwantedWords[k]) {
        indexToDel[id] = j;
        id++;
      }
    }
  }
  id = 0;

  for (var j = 0; j < indexToDel.length; j++) {
    mostUsed.splice(indexToDel[j]-id, 1);
    id++;
  }

  return { mostUsed: mostUsed,
          sentPicsCount: sentPicsCount,
          sentVideoCount: sentVideoCount,
          sentAudioCount: sentAudioCount
          };
}

// helper function to count words
function getWordCount(messages) {
  // thanks to https://stackoverflow.com/a/6565353/7151828
  var wordCounts = { };
  var words = messages.join(" ").split(/[\b\s(?:,| )+]/);

  for (var i = 0; i < words.length; i++) {
    wordCounts["_" + words[i].toLowerCase()] = (wordCounts["_" + words[i].toLowerCase()] || 0) + 1;
  }
  //console.log(wordCounts);
  return wordCounts;
}

// activity by day of week
function getMessagesPerDay(dates) {
  var dayCount = [0,0,0,0,0,0,0];

  // evaluate and count
  for (var i = 0; i < dates.length; i++) {
    var d = new Date(dates[i]);
    var dayNum = d.getDay();
    dayCount[dayNum]++;
  }

  return dayCount;
}

// activity by time
function countMessages(dates) {
  // init
  var date = [];
  var count = [];
  var indexStart = [];

  // loop
  for (var i = 0; i < dates.length; i++) {

    if (i == 1) {
      var temp = dates[0];
      date[0] = dates[0];
      count[0] = 1;
      indexStart[0] = 0;
      var r = 0;
    }
    else if (temp != dates[i]) {
      r++;
      temp = dates[i]
      date[r] = dates[i];
      count[r] = 1;
      indexStart[r] = i;
    } else {
      count[r]++;
    }

  }

  // save to struct
  //var dateCount = [];
  var Item = makeStruct("date count indexStart");
  var struct = new Item(date, count, indexStart);
  //dateCount.push(struct);

  return struct;
}

// TODO: activity by hour of day

// TODO: 30 most used emoji per person

// average words per message
function calcWordsPerMessage(messages) {
  var tlt = 0;
  for (var i = 0; i < messages.length; i++) {
    tlt = tlt + messages[i].trim().split(/\s+/).length;
  }
  return [(Math.round(tlt/messages.length*100)/100),tlt];
}

// TODO: average messages per day

// remove stopwords
function removeStopwords(lan) {

  // Filter words
  var Stopwords = stopwords[lan];
  // save words in new variable
  var filteredWords = $.extend(true,{},wordsByUsage);

  // for all inputs
  for (var i = 0; i < 2; i++) {

    var delIndex = [];

    var l = 0;
    for (var j = 0; j < filteredWords[i].length; j++) {

      if (Stopwords.indexOf(filteredWords[i][j][0].substring(1)) > -1) {
        delIndex[l] = j;
        l++;
      }
    }
    for (var j = 0; j < delIndex.length; j++) {
      filteredWords[i].splice(delIndex[j]-j,1);
    }

    // get element
    div = document.getElementById("wordsByUsage"+i);
    // remove old content
    div.innerHTML = "";
    // add new content
    if (filteredWords[i].length > 29) {
      max = 30;
    } else {
      max = filteredWords[i].length;
    }
    var mostUsedHTML ="";
    for (var j = 0; j < max; j++) {
      mostUsedHTML = mostUsedHTML + "<p>" + filteredWords[i][j][0].substring(1) +" - "+ Math.round(filteredWords[i][j][1]/totalWords*1000)/10 + "%</p>";
    }
    div.innerHTML = mostUsedHTML;

  }

}

// TABLES ----------------------------------------------------------------------

// Day Radar
function createDayRadar() {
  var data = {labels: [], datasets: []};
  for (var d in ca.chat.messagesPerWeekday) {
    data.labels.push(moment().day(d).format('dddd'));
  }

  var i = 0;
  for (i = 0;i < ca.ranks["messages"].scores.length && i < 10;i++) {
    var r = ca.ranks["messages"].scores[i];
    var u = ca.users[r.user];
    data.datasets.push({
      label: u.name,
      data: u.messagesPerWeekday,
      fill:true,
      backgroundColor: backgroundColorArray[i],
      borderColor: u.color,
      pointBackgroundColor: u.color,
      pointBorderColor:"#fff",
      pointHoverBackgroundColor:"#fff",
      pointHoverBorderColor: u.color
    })
  }
  //Add total messages dataset
  data.datasets.push({
    label: "Total number of messages",
    data: ca.chat.messagesPerWeekday,
    fill:true,
    backgroundColor: backgroundColorArray[0],
    borderColor: ca.chat.color,
    pointBackgroundColor: ca.chat.color,
    pointBorderColor:"#fff",
    pointHoverBackgroundColor:"#fff",
    pointHoverBorderColor: ca.chat.color
  });

  new Chart(
        document.getElementById("dayRadar"),
        {
        type:"radar",
        data: data,
        options:{
            elements:{
              line:{
                tension:0,
                borderWidth:3
              }
            },
            scale:{
              ticks: {
                beginAtZero: true
              },
              pointLabels :{
                fontStyle: "bold",
                fontColor: 'black',
                fontSize: 14
              }
            }
          }
        });

}

// Chronological Graph
function createChonologicalGraph(content) {

  // better tooltips
  Chart.defaults.global.pointHitDetectionRadius = 1;
  var customTooltips = function(tooltip) {
        // Tooltip Element
        var tooltipEl = document.getElementById('chartjs-tooltip');

        if (!tooltipEl) {
          tooltipEl = document.createElement('div');
          tooltipEl.id = 'chartjs-tooltip';
          tooltipEl.innerHTML = '<table></table>';
          this._chart.canvas.parentNode.appendChild(tooltipEl);
        }

        // Hide if no tooltip
        if (tooltip.opacity === 0) {
          tooltipEl.style.opacity = 0;
          return;
        }

        // Set caret Position
        tooltipEl.classList.remove('above', 'below', 'no-transform');
        if (tooltip.yAlign) {
          tooltipEl.classList.add(tooltip.yAlign);
        } else {
          tooltipEl.classList.add('no-transform');
        }

        function getBody(bodyItem) {
          return bodyItem.lines;
        }

        // Set Text
        if (tooltip.body) {
          var titleLines = tooltip.title || [];
          var bodyLines = tooltip.body.map(getBody);

          var innerHtml = '<thead>';

          titleLines.forEach(function(title) {
            innerHtml += '<tr><th>' + title.substring(0,12) + '</th></tr>';
            // the title is the date - we only want to show the day not the time
          });
          innerHtml += '</thead><tbody>';

          bodyLines.forEach(function(body, i) {
            var colors = tooltip.labelColors[i];
            var style = 'background:' + colors.backgroundColor;
            style += '; border-color:' + colors.borderColor;
            style += '; border-width: 2px';
            var span = '<span class="chartjs-tooltip-key" style="' + style + '"></span>';
            innerHtml += '<tr><td>' +span + body + '</td></tr>';
            // body is NAME: Count
          });
          innerHtml += '</tbody>';

          var tableRoot = tooltipEl.querySelector('table');
          tableRoot.innerHTML = innerHtml;
        }

        var positionY = this._chart.canvas.offsetTop;
        var positionX = this._chart.canvas.offsetLeft;

        // Display, position, and set styles for font
        tooltipEl.style.opacity = 1;
        tooltipEl.style.left = positionX + tooltip.caretX + 'px';
        tooltipEl.style.top = positionY + tooltip.caretY + 'px';
        tooltipEl.style.fontFamily = tooltip._bodyFontFamily;
        tooltipEl.style.fontSize = tooltip.bodyFontSize + 'px';
        tooltipEl.style.fontStyle = tooltip._bodyFontStyle;
        tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
      };

  var messageCount = [];
  var data = [];
  for (var i = 0; i < content.length; i++) {
    messageCount.push(countMessages(content[i].date))
  }

  var formatedStruct = addMissingDays(messageCount);
  var totalActivity = [];

  for (var i = 0; i < content.length; i++) {
    if (content.length > 2) {
      // add all activity up and only display the total
      for(var j = 0; j < formatedStruct[i].count.length; j++){
        if(totalActivity[j] == null) {
          totalActivity[j] = 0;
        }
        totalActivity[j] = (formatedStruct[i].count[j] + totalActivity[j]);
      }

    } else {
      // show eacg individual
      data.push( {
        label: content[i].name,
        data: formatedStruct[i].count,
        type: 'line',
        fill: false,
        steppedLine: true,
        pointRadius: 0,
        borderWidth: 1,
        pointHoverRadius: 10,
        backgroundColor:backgroundColorArray[i],
        borderColor: colorArray[i],
        pointBackgroundColor:colorArray[i],
        pointBorderColor:"#fff",
        pointHoverBackgroundColor:"#fff",
        pointHoverBorderColor: colorArray[i]
        });
    }
  }

  // total
  if (content.length > 2) {
      data.push( {
        label: "Total Activity",
        data: totalActivity,
        type: 'line',
        fill: true,
        steppedLine: true,
        pointRadius: 0,
        borderWidth: 1,
        pointHoverRadius: 10,
        backgroundColor:backgroundColorArray[0],
        borderColor: colorArray[0],
        pointBackgroundColor:colorArray[0],
        pointBorderColor:"#fff",
        pointHoverBackgroundColor:"#fff",
        pointHoverBorderColor: colorArray[0]
      });
  }

  // find label
  var index = -1;
  var temp = -1;
  for (var i = 0; i < formatedStruct.length; i++) {
    if (formatedStruct[i].date.length > temp) {
      index = i;
      temp = formatedStruct[i].date.length;
    }
  }

  var unit = "month";
  if (formatedStruct[index].date.length < 22) {
    unit = "day";
  } else if (formatedStruct[index].date.length < 33) {
    unit = "week";
  } else if (formatedStruct[index].date.length < 33*3) {
    unit = "month";
  } else if (formatedStruct[index].date.length < 33* 15) {
    unit = "year";
  }

  // create chart
  new Chart(
      document.getElementById('chronologicalGraph').getContext('2d'),
      {
        type: 'line',
        data: {
          labels: formatedStruct[index].date,
          datasets: data
        },
          options: {
            scales: {
              xAxes: [{
                type: 'time',
                distribution: 'linear',
                time: {
                      unit: unit
                }}],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Number Of Messages'
                }
              }]},
            tooltips: {
              enabled: false,
              mode: 'index',
              position: 'nearest',
              custom: customTooltips
            }}
        });

}

// OTHER -----------------------------------------------------------------------

//  TABEL SORTER
function sortTable(n) {
  // https://www.w3schools.com/howto/howto_js_sort_table.asp
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "desc";
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];

      if (x.innerHTML == "") {
        x = "0";
      } else {
        x = parseFloat(x.innerHTML);
      }
      if (y.innerHTML == "") {
        y = "0";
      } else {
        y = parseFloat(y.innerHTML);
      }

      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x > y) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x < y) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "desc") {
        dir = "asc";
        switching = true;
      }
    }
  }
}

// RANDOM COLORS
ca.getRandomColor = function() {
  // https://stackoverflow.com/questions/1484506/random-color-generator
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
