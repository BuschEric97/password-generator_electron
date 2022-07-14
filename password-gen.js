const Notification = require('electron');
const fs = require('fs');

const NOTIFICATION_NOT_IMPLEMENTED_TITLE = 'ERROR!';
const NOTIFICATION_NOT_IMPLEMENTED_BODY = 'Feature not yet implemented!';

function generate_password() {
    var new_password = '';
    let word_count = document.getElementById('word-count-field').value;
    let add_digit = document.getElementById('trailing-digit-checkbox').checked;
    let add_hyphen = document.getElementById('random-hyphen-checkbox').checked;
    let add_capital = document.getElementById('random-capital-checkbox').checked;

    if (word_count <= 0 || word_count > 20) {
        // invalid word_count value
    } else {
        if (add_digit) {
            hyphen_index = Math.floor(Math.random() * word_count);
        } else {
            hyphen_index = Math.floor(Math.random() * (word_count - 1));
        }

        // put words into the password as needed
        for (let i = 0; i < word_count; i++) {
            new_password = new_password + get_random_word();

            if (i != word_count - 1) { // this if is to prevent an extra underscore or hyphen at the end
                if (add_hyphen && i == hyphen_index) {
                    new_password = new_password + '-';
                } else {
                    new_password = new_password + '_';
                }
            }
        }

        // add a random digit at the end of the password if the option was selected
        if (add_digit) {
            // put a hyphen if the option was selected and hyphen_index is at the end
            if (add_hyphen && hyphen_index == word_count - 1) {
                new_password = new_password + '-';
            } else { // otherwise put an underscore
                new_password = new_password + '_';
            }
            // add the random digit
            new_password = new_password + Math.floor(Math.random() * 10).toString();
        }

        // capitalize a random letter (if applicable) if the option was selected
        if (add_capital) {
            document.getElementById('password-result').value = random_capital(new_password);
        } else {
            document.getElementById('password-result').value = new_password;
        }
    }
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

// Randomly capitalize one of the letters in the input string
function random_capital(str) {
    // if the input string does not contain any letters, return it unmodified
    if (/[a-z]/.test(str) == false) {
        return str;
    }

    // try capitalizing a letter until we actually get a letter
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