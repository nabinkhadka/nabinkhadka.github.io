var inputCommand = document.getElementById('input-command');
var outputArea = document.getElementById('output-area');
var optionalCommand = document.getElementById('optional-input');

var commands = {
        'help': doHelp,
        'projects': showProjects,
        'contact': giveContactDetails,
        'experiences': listExperiences,
        'clear': clearOrReset,
        'reset': clearOrReset,
        'version': version,
        'socials': getSocialLinks,
        'blogs': blogs,
        'education': getEducations,
        'default': showSyntaxErrorMsg
    };

setInterval(function(){
  if (optionalCommand == document.activeElement){
    inputCommand.focus();
    var part = inputCommand.value;

    var resultArray = [];

    for (var command in commands){
      if(command.startsWith(part)){
        resultArray.push(command);
      }
    }

    if(resultArray.length == 1){
      inputCommand.value = resultArray[0];
    }else if (resultArray.length > 1){
      outputArea.innerHTML = "<span>nabin@Khadka:~$</span> " + inputCommand.value 
      + "<br><br>" + resultArray.join('\t\t') + "<br><br>";
    }
  }else if(inputCommand != document.activeElement){
      inputCommand.focus();
  }
}, 300);


function sendCommand(e) {
    if (e.keyCode == 13) {
        var currentCommand = inputCommand.value;
        var returnedFunction = processCommand(currentCommand);
        returnedFunction();
        clearInput();
    }
}


function clearInput() {
    inputCommand.value = "";
}

function processCommand(command) {

    if (commands[command]) {
        return commands[command];
    } else {
        return commands['default'];
    }

}


function getEducations(){

  var education = "<span>nabin@Khadka:~$</span> education" + `
      <br><br>
      <ul>
        <li>Bachelors of Computer Engineering, Kathmandu Engineering College ( 74 % )</li>
        <li>10 + 2 (Science, HSEB, 78 % )</li>
        <li>SLC, Mount View English Boarding School, Dang ( 86 % )</li>
      </ul>
      <br><br>
  `;

  outputArea.innerHTML = education;
}

function doHelp() {

    var help = `
      <br><br>Welcome to my website. If you do not want to use the terminal, you can type "desktop" to go to website directly. 
      But if you want to try out this simple shell, please see the following commands.<br> 
    `;

    outputArea.innerHTML = "<span>nabin@Khadka:~$</span> help" + help + getCommandLists() + getThankYouMsg() + '<br><br>';
}

function showProjects() {

    var projectLists = `<br><br>Android:<br>
    <ul>
      <li><a href="https://play.google.com/store/apps/details?id=np.com.picl.anjalacorab" target="_blank">ACORAB CIN</a><li>
      <li><a href="https://play.google.com/store/apps/details?id=com.premier.mtcl1" target="_blank">Premier Insurance Co. Ltd. Nepal.</a><li>
      <li><a href="https://www.youtube.com/watch?v=YeJJPoHBoHA" target="_blank">Personal Notes Keeping App</a><li>
      <li><a href="https://www.youtube.com/watch?v=M2LvmD4Syrs&feature=youtu.be" target="_blank">Company App</a><li>
      <li><a href="http://themomotrail.orgfree.com/apis/admin/" target="_blank">College Project</a><li>
    </ul>`

    +

    `<br>Python:<br>
    <ul>
      <li>News crawler as intern using Scrapy and Django.</li>
      <li>Learning flask at Logpoint Nepal.</li>
    </ul>`

    ;

    outputArea.innerHTML = "<span>nabin@Khadka:~$</span> projects" + projectLists;

}

function giveContactDetails() {

    var contactDetails = 
    ` <br>
      <br>
      Email: nbnkhadka14@gmail.com<br>
      Skype: nbnkhadka14
      <br>
      <br>For social links use "socials" command.
      <br><br>
    `;

    outputArea.innerHTML = "<span>nabin@Khadka:~$</span> contact" + contactDetails;
}

function blogs(){

  var blogs = "<span>nabin@Khadka:~$</span> blogs" + `
    <ul>
      <li><a href="http://hubpages.com/technology/tictactoe" target="_blank">Developing TicTacToe from scratch in Android</a></li>
    </ul>
    `
    outputArea.innerHTML = blogs;

}

function getSocialLinks(){

  var socialLinks = `
  <ul>
    <li><a href="http://stackoverflow.com/users/2770850/nabin-khadka" target="_blank">Stackoverflow</a></li>
    <li><a href="https://www.linkedin.com/in/nabin-khadka-76946689" target="_blank">LinkedIn</a></li>
    <li><a href="http://hubpages.com/@nabinkhadka" target="_blank">Blogs</a></li>
    <li><a href="https://twitter.com/nbn47095" target="_blank">Twitter</a></li>
    <li><a href="https://github.com/nabinkhadka" target="_blank">Github</a></li>
    <li><a href="https://www.facebook.com/nbnkhadka14" target="_blank">Facebook</a></li>
  </ul>`
  ;

  outputArea.innerHTML = "<span>nabin@Khadka:~$</span> socials" + socialLinks;

}

function listExperiences() {

    var experiences = `
      <br>
      <br>Internship:<br>
      <ul>
        <li>Young Innovations Pvt. Ltd. Lalitpur, Nepal (3 months)</li>
      </ul>
      <br>Job:<br>
      <ul>
        <li>E & T Nepal, Pvt. Ltd. (Cuda / C / 1 year, 8 months)</li>
        <li>Smart Data Solutions (Java / MySQL / 3 months)</li>
        <li>Logpoint Nepal Pvt. Ltd. (Associate Software Engineer / Oct, 2016 - Present)</li>
      </ul>
    `;

    outputArea.innerHTML = "<span>nabin@Khadka:~$</span> experiences" + experiences;

}

function showSyntaxErrorMsg() {

    var errorMessage = '<br><br> --bad command. Command not found.<br><br>Did you mean any of the following commands?<br>'
                         + getCommandLists() + getThankYouMsg();
    outputArea.innerHTML = "<span>nabin@Khadka:~$</span> " + inputCommand.value + errorMessage;

}

function version() {

    var version = "<span>nabin@Khadka:~$</span> version" + '<br><br>0.1 <br>Current update on: 6th Nov. 2016.<br> 6th Nov. 2016.<br><br>';
    outputArea.innerHTML = version;

}

function clearOrReset() {
    window.location.reload();
}

function getCommandLists() {

    return `<ul>
              <li>blogs</li>
              <li>contact</li>
              <li>clear</li>
              <li>desktop</li>
              <li>education</li>
              <li>experiences</li>
              <li>help</li>
              <li>projects</li>
              <li>socials</li>
            </ul>`;
}

function getThankYouMsg() {
    return 'Thank You!<br>Copyright 2016, Nabin Khadka. For more information, type "help" or go to desktop version.'
}

function debug(message) {
    console.log(message);
}
