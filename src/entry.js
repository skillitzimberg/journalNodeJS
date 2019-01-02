export function JournalEntry(date, title, entry) {
  this.date = date;
  this.title = title;
  this.entry = entry;
}

JournalEntry.prototype.wordCount = function() {
  var entryWords = this.entry.split(" ");
  return entryWords.length;
};


JournalEntry.prototype.vowelCount = function() {
  var vowels = this.entry.match(/[aeiou]/gi);
  return vowels === null ? 0 : vowels.length;
};

JournalEntry.prototype.consonantCount = function() {
  var consonants = this.entry.match(/[^aeiou.,!?@#$%^&* ]/gi);
  return consonants === null ? 0 : consonants.length;
};

JournalEntry.prototype.getTeaser = function() {
  var matchedSentence = this.entry.match(/[A-Z][^.!?]*[.!?]/);
  var sentenceToArray = matchedSentence[0].split(' ');
  var sentenceLength = sentenceToArray.length;

  var buildTeaser = '';
  
  if(sentenceLength > 8) {
    for(var index = 0; index < 8; index++) {
      buildTeaser += sentenceToArray[index] + ' ';
    }
    buildTeaser += '. . .';
    return buildTeaser;
  }
  return matchedSentence[0];
};
