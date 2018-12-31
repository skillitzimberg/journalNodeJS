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
  var firstSentence = this.entry.match(/([^.!?]*[.!?]\s)/);
  // var firstArray = firstSentence.split(' ');
  // var teaserArray = [];
  // if (firstArray > 8) {
  //   for (var index = 0; index <= 8; index++) {
  //     teaserArray.push(firstArray[index]);
  //   }
  //   var teaser = teaserArray.join(' ');
  //   return teaser;
  // }
  // else {
    return firstSentence[0];
  // }
};
