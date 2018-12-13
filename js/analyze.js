// ---- INIT ----
// Define global variables

//Init ca
var ca = {};

//Customizable settings
ca.dtFormat = "DD-MM-YYYY HH:mm:ss";
// Limit period being analyzed
//ca.maxDays = 60;
//ca.period = "this_year";
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
ca.re.events = {};
ca.re.events.userChangedPhone = new RegExp(/ security code changed\.$/);
ca.re.events.userAddedLegacy = new RegExp(/(.*)( was added$)/);
ca.re.events.userAdded = new RegExp(/(.*)( added )(.*)/);
ca.re.events.userRemovedLegacy = new RegExp(/(.*)( was removed$)/);
ca.re.events.userRemoved = new RegExp(/(.*)( removed )(.*)/);
ca.re.events.userLeft = new RegExp(/(.*)( left$)/);
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
  var rankings = ['messageCount','wordCount','wordCountUnique','wordsPerMessage','emojiCount','links','images','documents','gifs','videos','audios','contacts','locations'];
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

// ca Random color generator
ca.getRandomColor = function() {
  // https://stackoverflow.com/questions/1484506/random-color-generator
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

ca.parseContent = function(content) {
  var lines = content.split('\n');
  var m;
  var messages = [];
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
        if (ca.re.events.userChangedPhone.test(s)) m.event = match[5];
        if (! m.attachment && ! m.event) m.message = match[5];
      }
      messages.push(m);
    } else if (messages.length > 0) {
      m = messages[messages.length - 1];
      //Append multiline messages
      if (m.message) m.message += '\n';
      m.message += line;
    }
  }
  //Analyze all parsed messages and add them to chat object
  ca.chat = new Chat();
  for (let m of messages) {
    m.analyze();
    ca.chat.addMessage(m);
  }
}

// ---- CLASSES ----

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
  analyze() {
    if (this.message) {
      //Filter links
      this.links = [];
      let linkMatch = ca.re.link.exec(this.message);
      while (linkMatch != null) {
        this.links.push(linkMatch[1]);
        //Strip link from message
        this.message = this.message.substring(0,linkMatch.index) + this.message.substring(linkMatch.index + linkMatch[1].length);
        linkMatch = ca.re.link.exec(this.message);
      }
      //Handle words
      this.words = this.message.toLowerCase().split(ca.re.words);
      //Strip emoji's from words
      for (let wNr in this.words) {
        this.words[wNr] = this.words[wNr].replace(ca.re.emoji,'');
      }
      //Remove empty words
      this.words = this.words.filter(function (w) {
        return (w != '' && ca.re.digits.test(w));
      });
      //Filter emoji's
      this.emojis = [];
      let emojiMatch;
      while (emojiMatch = ca.re.emoji.exec(this.message)) {
        let e = emojiMatch[0];
        if (this.emojis[e]) {
          this.emojis[e] ++;
        } else {
          this.emojis[e] = 1;
        }
      }
    }
    if (this.event) {
      if (ca.re.events.userAdded.test(this.event)){
        let match = ca.re.events.userAdded.exec(this.event);
        this.eventType = "userAdded";
        this.user = match[3];
        this.actor = match[1];
      } 
      if (ca.re.events.userAddedLegacy.test(this.event)){
        let match = ca.re.events.userAddedLegacy.exec(this.event);
        this.eventType = "userAdded";
        this.user = match[1];
      } 
      if (ca.re.events.userRemoved.test(this.event)){
        let match = ca.re.events.userRemoved.exec(this.event);
        this.eventType = "userRemoved";
        this.user = match[3];
        this.actor = match[1];
      } 
      if (ca.re.events.userRemovedLegacy.test(this.event)){
        let match = ca.re.events.userRemovedLegacy.exec(this.event);
        this.eventType = "userRemoved";
        this.user = match[1];
      } 
      if (ca.re.events.userLeft.test(this.event)){
        let match = ca.re.events.userLeft.exec(this.event);
        this.eventType = "userLeft";
        this.user = match[1];
      }
      if (ca.re.events.userChangedPhone.test(this.event)){
        this.eventType = "userChangedPhone";
        //Username is already parsed
      }
    }
  }
}

class Chat {
  constructor(name) {
    this.name = name;
    this.messages = [];
    this.events = [];
  }
  get end() {
    if (this.messages.length == 0) return undefined;
    return this.messages[this.messages.length - 1].moment;
  }
  get messageCount() {
    return this.messages.length;
  }
  get start() {
    if (this.messages.length == 0) return undefined;
    return this.messages[0].moment;
  }
  addMessage(m) {
    if (m.message || m.attachment) this.messages.push(m);
    if (m.event) this.events.push(m);
  }
  getStatisticsPeriod(start, end) {
    var cs = new ChatStatistics();
    for (let m of this.messages) {
      if (m.moment >= start && m.moment <= end) cs.addMessage(m);
    }
    return cs;
  }
  getStatisticsPeriodByUnit(relativeIndicator, num = 1, unit) {
    var start = this.start;
    var end = this.end;
    var title = "";
    switch (relativeIndicator) {
      case 'last':
        start = this.end;
        start[unit](start[unit]() - num).startOf(unit); 
        end[unit](end[unit]() - 1).endOf(unit); 
        break;
      case 'this':
        start = this.end;
        start.startOf(unit); 
        end.endOf(unit); 
        break;
      case 'first':
        start.startOf(unit); 
        end = this.start;
        end[unit](end[unit]() + num - 1).endOf(unit); 
        break;
      default: 
    }
    switch (unit) {
      case 'year':
        title = "Statistics for " + start.format("YYYY");
        if (num > 1) title += " - " + end.format("YYYY");
        break;
      case 'month':
        title = "Statistics for " + start.format("MMMM YYYY");
        if (num > 1) title += " - " + end.format("MMMM YYYY");
        break;
      case 'week':
        title = "Statistics for week " + start.format("w YYYY");
        if (num > 1) titile += " - " + end.format("w YYYY");
        break;
      case 'day':
        title = "Statistics for " + start.format("YYYY-MM-DD");
        if (num > 1) titile += " - " + end.format("YYYY-MM-DD");
        break;
      default:
        title = "Statistics for period " + start.format("YYYY-MM-DD") + " - " + end.format("YYYY-MM-DD");
    }
    var cs = this.getStatisticsPeriod(start, end);
    cs.periodDesc = title;
    return cs;
  }
}

// MessageCollection class
class Statistics extends Chat {
  constructor(name) {
    super(name);
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
    super.addMessage(m);
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
  //Get timeseries (for graphs)
  getMessageCountTimeSeries(unit) {
    var ts = [];
    var unitStart;
    var unitEnd = 0;
    var c = 0;
    for (let m of this.messages) {
      if (m.moment > unitEnd) {
        if (unitStart) {
          ts.push({x: unitStart.toDate(), y: c})
        }
        unitStart = moment(m.moment).startOf(unit);
        unitEnd = moment(m.moment).endOf(unit);
        c = 0;
      }
      c++;
    }
    if (unitStart) {
      ts.push({x: unitStart.toDate(), y: c})
    }
    return ts;
  }
  messageCountPerDay(date) {
    var c = 0;
    for (let m of this.messages) {
      if (m.moment.format("YYYYMMDD") == date.format("YYYYMMDD")) c++;
    }
    return c;
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
    return (this.wordCount() / this.messageCount);
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
  get emojiCount() {
    var c = 0
    for (var w in this.emojis) {
      c += this.emojis[w];
    }
    return c;
  }
}

// User class
class UserStatistics extends Statistics {
  constructor(name) {
    super(name);
    this.dateAdded = undefined;
    this.dateRemoved = undefined;
  }
}

// Chat class
class ChatStatistics extends Statistics {
  constructor() {
    super("Totals");
    this.last_timestamp = '';
    this.users = {};
    this.ranks = undefined;
  }
  get title() {
    if (!this.periodDesc) this.periodDesc = "Statistics for period " + this.start.format("YYYY-MM-DD") + " - " + this.end.format("YYYY-MM-DD");
    return this.periodDesc;
  }
  get userCount() {
    var c = 0;
    for (var u in this.users){
      c++;
    }
    return c;
  }
  addMessage(m) {
    super.addMessage(m);
    if (m.user) {
      this.getUser(m.user).addMessage(m)
    }
    if (m.actor) {
      this.getUser(m.actor).addMessage(m)
    }
  }
  getUser(userName) {
    if (!this.users[userName]) {
      this.users[userName] = new UserStatistics(userName);
    }
    return this.users[userName];
  }
  getUserRank(userName, ranking) {
    if (!this.ranks) this.calculateRanks();
    if (!this.ranks[ranking]) return undefined;
    var index = this.ranks[ranking].scores.findIndex(function(score){
      return score.user == userName;
    })
    if (index == -1) return -1;
    return this.ranks[ranking].scores[index].ranking;
  }
  calculateRanks() {
    this.ranks = {};
    var rankings = ['messageCount','wordCount','wordCountUnique','wordsPerMessage','emojiCount','links','images','documents','gifs','videos','audios','contacts','locations'];
    for (var r of rankings.values()) {
      var rank = {};
      rank.name = r;
      rank.value = 0;
      rank.leader = '';
      rank.scores = [];
      for (var u in this.users){
        var score = {};
        score.user = u;
        if (typeof this.users[u][r] == "function") {
          score.value = this.users[u][r]();
        } else {
          score.value = this.users[u][r];
        }
        rank.scores.push(score);
      }
      rank.scores.sort(function (a, b){
        return b.value - a.value;
      });
      // Assign rankings per score
      var ranking = 1;
      for (var i in rank.scores) {
        if (i > 0 && (rank.scores[i].value < rank.scores[i - 1].value)) {
          ranking++;
        }
        if (rank.scores[i].value == 0) ranking = 0;
        rank.scores[i].ranking = ranking;
      }
      this.ranks[r] = rank;
    }
  }
}

// ---- END INIT ----

// TODO: add group support (make carousell for groups)
// TODO: Make sure all variables are resetted when choosing the next file! -> write initalizer

/// ----------------------------- \ Code /--------------------------------------
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
    ca.parseContent(contents);
    var chatStats = ca.chat.getStatisticsPeriodByUnit('last', 1, 'month');
    // create colors:
    backgroundColorArray = ["rgba(0, 157, 222, 0.4)", "rgba(255, 72, 64, 0.2)"];
    colorArray = ["rgb(20, 168, 204)", "rgb(255, 72, 64)"];


    // checks if group chat
    if (chatStats.userCount > 0) {
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
      displayGroupStats(chatStats);
      // Day Radar
      createDayRadar(chatStats);
      // Chronological Graph
      createChronologicalGraph(chatStats);
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

function displayGroupStats(chatStats) {

  // TODO: figure out the group name!

  // display table
  document.getElementById("groupTable").style.display = "block";
  let resultTitle = document.getElementById("resultTitle");
  resultTitle.innerHTML = chatStats.title;

  function renderStatsTableRow(stats) {
  // personal STATS
    // HTML
    // create rows
    var tableRows = document.createElement('tr');
    var topWords = stats.wordsByUsage(3,false).join(' - ');
    var topEmojis = stats.emojisByUsage(5).join(' - ');
    tableRows.innerHTML = //"<th scope='row'>"+"<h4 data-letters='" + content[i].name.match(/\b\w/g).join('') + "'></h4>"+"</th>" +
                          "<th scope='row'>"+"<h4 data-letters='" + stats.name.substring(0,1) + "'></h4>"+"</th>" +
                          "<td>"+stats.name+"</td>" +
                          "<td>"+stats.messageCount + ca.getRankEmoji(chatStats.getUserRank(stats.name,'messageCount')) + "</td>" +
                          "<td>"+stats.wordCount() + ca.getRankEmoji(chatStats.getUserRank(stats.name,'wordCount')) +"</td>"+
                          "<td>"+stats.emojiCount + ca.getRankEmoji(chatStats.getUserRank(stats.name,'emojiCount')) +"</td>"+
                          "<td>"+stats.images + ca.getRankEmoji(chatStats.getUserRank(stats.name,'images')) + "</td>" +
                          "<td>"+stats.videos + ca.getRankEmoji(chatStats.getUserRank(stats.name,'videos')) + "</td>" +
                          "<td>"+stats.gifs + ca.getRankEmoji(chatStats.getUserRank(stats.name,'gifs')) + "</td>" +
                          "<td>"+stats.links + ca.getRankEmoji(chatStats.getUserRank(stats.name,'links')) + "</td>" +
                          "<td>"+stats.audios + ca.getRankEmoji(chatStats.getUserRank(stats.name,'audios')) + "</td>" +
                          "<td>"+stats.documents + ca.getRankEmoji(chatStats.getUserRank(stats.name,'documents')) + "</td>" +
                          "<td>"+stats.contacts + ca.getRankEmoji(chatStats.getUserRank(stats.name,'contacts')) + "</td>" +
                          "<td>"+stats.locations + ca.getRankEmoji(chatStats.getUserRank(stats.name,'locations')) + "</td>" +
                          "<td>"+topWords+"</td>" + 
                          "<td>"+topEmojis+"</td>" +
                          "<td>"+stats.wordsPerMessage().toFixed(1) + ca.getRankEmoji(chatStats.getUserRank(stats.name,'wordsPerMessage')) + "</td>" +
                          "<td>"+stats.wordCountUnique() + ca.getRankEmoji(chatStats.getUserRank(stats.name,'wordCountUnique')) + "</td>";

    document.getElementById('groupTableRows').appendChild(tableRows);
  }
  for (let u in chatStats.users) {
    let userStats = chatStats.users[u];
    renderStatsTableRow(userStats)
  }
  renderStatsTableRow(chatStats);

  // sort table by most messages
  sortTable(1);
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
      ca.chat.messages.push(m);
    } else if (ca.chat.messages.length > 0) {
      m = ca.chat.messages[ca.chat.messages.length - 1];
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
  ca.chat.analyzeEvents();
}

// ---- GRAPHS ----

// Day Radar
function createDayRadar(chat) {
  var data = {labels: [], datasets: []};
  for (var d in chat.messagesPerWeekday) {
    data.labels.push(moment().day(d).format('dddd'));
  }

  var i = 0;
  for (i = 0;i < chat.ranks["messageCount"].scores.length && i < 10;i++) {
    var r = chat.ranks["messageCount"].scores[i];
    var u = chat.users[r.user];
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
    data: chat.messagesPerWeekday,
    fill:true,
    backgroundColor: backgroundColorArray[0],
    borderColor: chat.color,
    pointBackgroundColor: chat.color,
    pointBorderColor:"#fff",
    pointHoverBackgroundColor:"#fff",
    pointHoverBorderColor: chat.color
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
function createChronologicalGraph(chat) {
  // better tooltips
  Chart.defaults.global.pointHitDetectionRadius = 10;
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
  var data = {datasets: []};
  var activity, unit;
  var days = chat.end.diff(chat.start,'days');
  if (days <= 100) {
    unit = 'day';
  } else if (days <= 700) {
    unit = 'week';
  } else {
    unit = 'month';
  }
  activity = chat.getMessageCountTimeSeries(unit);
  data.datasets.push({
    label: chat.name,
    data: activity,
    fill: true,
    steppedLine: true,
    pointRadius: 3,
    borderWidth: 1,
    pointHoverRadius: 10,
    backgroundColor:backgroundColorArray[0],
    borderColor: chat.color,
    pointBackgroundColor: chat.color,
    pointBorderColor:"#ffffff",
    pointHoverBackgroundColor:"#ffffff",
    pointHoverBorderColor: chat.color
  });

 // unit = undefined;

  // create chart
  new Chart(
    document.getElementById('chronologicalGraph').getContext('2d'),
      {
        type: 'bar',
        data: data,
        options: {
          scales: {
            xAxes: [{
              type: 'time',
              distribution: 'linear',
              time: {
                    unit: unit,
                    displayFormats: {
                      day: 'ddd DD-MM'
                    }
              }}],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Number Of Messages'
              }
            }]
          },
          tooltips: {
            enabled: false,
            mode: 'index',
            position: 'nearest',
            custom: customTooltips
          }
        }
      }
  );
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
