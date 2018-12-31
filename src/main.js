import { JournalEntry } from './entry';
import './styles.css';

$(document).ready(function() {
  $('#journalEntry-form').submit(function(event) {
    event.preventDefault();

    var date = $('#entryDate').val();
    var title = $('#entryTitle').val();
    var entry = $('#journalEntry').val();
    var newEntry = new JournalEntry(date, title, entry);

    $('#journalEntry-form').addClass('hide');

    $('#journalDisplay').append(newEntry.date, newEntry.title, newEntry.entry, newEntry.wordCount(), newEntry.vowelCount(), newEntry.consonantCount(), newEntry.getTeaser());

    $('#entryDate').val('');
    $('#entryTitle').val('');
    $('#journalEntry').val('');
  });

  $('#revealForm').click(function() {
    $('#journalEntry-form').removeClass('hide');
  });

});
