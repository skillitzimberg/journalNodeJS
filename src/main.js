import { journalEntry } from './entry';

$(document).ready(function() {
  $('#journalEntry-form').submit(function(event) {
    event.preventDefault();

    var date = $('#entryDate').val();
    var entry = $('#journalEntry').val();
    $('#journalDisplay').append(entry);
  });
});
