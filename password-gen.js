const Notification = require('electron');
const fs = require('fs');

const NOTIFICATION_NOT_IMPLEMENTED_TITLE = 'ERROR!';
const NOTIFICATION_NOT_IMPLEMENTED_BODY = 'Feature not yet implemented!';

function generate_password() {
    document.getElementById('password-result').value = 'placeholder_password';
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

function random_capital(str) {
    // if the input string does not contain any letters, return it unmodified
    if (/^[a-z]*$/.test(str) == false) {
        return str;
    }

    // randomly capitalize one of the letters in the string
    while (true) {
        let char_index = Math.floor(Math.random() * str.length);

        // skip this random letter if it is not actually a letter
        if (/^[a-z]$/.test(str[char_index]) == false) {
            continue;
        }

        return str.slice(0, char_index)
        + str[char_index].toUpperCase()
        + str.slice(char_index+1)
    }
}