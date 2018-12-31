import { journalEntry } from './entry';
import './styles.css';

$(document).ready(function() {
  $('#journalEntry-form').submit(function(event) {
    event.preventDefault();

    var date = $('#entryDate').val();
    var title = $('#entryTitle').val();
    var entry = $('#journalEntry').val();
    var newEntry = new journalEntry(date, title, entry);
    
    $('#journalDisplay').append(newEntry);
  });
});
