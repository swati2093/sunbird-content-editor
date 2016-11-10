# Content-Editor

Setup instructions

    1. Clone Content-Editor and Content-Plugins repo
    2. Change to Content-Editor directory (`cd Content-Editor`)
    3. Run NPM (`npm install`)
    3. Create a symbolic link to Content-Plugins inside Content-Editor directory (`ln -s ../Content-Plugins plugins`)
    4. Change to app directory and run bower (`cd app && bower install`)
    5. Start grunt server from Content-Editor root directory (`grunt serve`)

This will launch the browser with Content-Editor. Check the chrome console to make sure there are no errors and you are ready!!

Take a look inside plugins(symbolic link) and review couple of existing plugins files and structure of each. 