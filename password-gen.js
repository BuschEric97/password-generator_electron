const { Notification } = require('electron');

const NOTIFICATION_NOT_IMPLEMENTED_TITLE = 'ERROR!';
const NOTIFICATION_NOT_IMPLEMENTED_BODY = 'Feature not yet implemented!';

function generate_password() {
    document.getElementById('password-result').textContent = 'Test_Password';
}

function copy_to_clipboard() {
    document.getElementById('password-result').textContent = 'Function not yet implemented!';
}