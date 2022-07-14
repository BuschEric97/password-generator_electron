const Notification = require('electron');
const fs = require('fs');

const NOTIFICATION_NOT_IMPLEMENTED_TITLE = 'ERROR!';
const NOTIFICATION_NOT_IMPLEMENTED_BODY = 'Feature not yet implemented!';

function generate_password() {
    document.getElementById('password-result').value = get_random_word();
}

function copy_to_clipboard() {
    document.getElementById('password-result').value = 'Function not yet implemented!';
}

// Uses the file 'wordlist.txt' to find and return the next random string
function get_random_word() {
    // generate the random number used to get the next random word
    let file_index = Math.floor(Math.random() * 7776);

    // get the next random word
    let file_text = fs.readFileSync('./wordlist.txt').toString();
    let selected_word = file_text.split('\n')[file_index].split('\t')[1];

    // return the randomly selected word
    return selected_word;
}