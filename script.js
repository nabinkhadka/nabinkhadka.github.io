var inputCommand = document.getElementById('input-command');
var outputArea = document.getElementById('output-area');
var optionalCommand = document.getElementById('optional-input');

var commands = {
        'archives': showArchivesPage,
        'friends': getFriendList,
        'help': doHelp,
        'projects': showProjects,
        'softwares': showSoftwares,
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
        <li>Master of Science (M.Sc) in Computer System and Knowledge Engineering - Tribhuvan University</li>
        <li>Bachelors of Computer Engineering, Kathmandu Engineering College</li>
        <li>10 + 2 (Science, HSEB)</li>
        <li>SLC, Mount View English Boarding School, Dang</li>
      </ul>
      <br><br>
  `;

  outputArea.innerHTML = education;
}

function doHelp() {

    var help = `
      <br><br>Welcome to my website. Please see the following commands to use the commandline.<br> 
    `;

    outputArea.innerHTML = "<span>nabin@Khadka:~$</span> help" + help + getCommandLists() + getThankYouMsg() + '<br><br>';
}

function showSoftwares() {
    var win = window.open('/downloads', '_blank');
    win.focus();
}

function showProjects() {

    var projectLists = `<br><br>Android:<br>
    <ul>
      <li><a href="https://play.google.com/store/apps/details?id=np.com.picl.anjalacorab" target="_blank">ACORAB CIN</a><li>
      <li><a href="https://play.google.com/store/apps/details?id=com.premier.mtclnepal" target="_blank">Premier Insurance Co. Ltd. Nepal.</a><li>
      <li><a href="https://www.youtube.com/watch?v=YeJJPoHBoHA" target="_blank">Personal Notes Keeping App</a><li>
      <li><a href="https://www.youtube.com/watch?v=M2LvmD4Syrs&feature=youtu.be" target="_blank">Company App</a><li>
    </ul>`

    +

    `<br>Python:<br>
    <ul>
      <li><a href="http://www.allalign.com/" target="_blank">Flask web app</a><li>
      <li><a href="https://github.com/nabinkhadka" target="_blank">Find other projects on github</a><li>
    </ul>`

    +

    `
    <br>I have used following for development purposes<br>
    ⚡ For data science: Numpy, Pandas, NLTK<br>
    ⚡ Flask: Socket, OAuth, MongoDB, mlab, Flask Admin, Sqlalchemy<br>
    ⚡ Scrapy, Scrapinghub, Crawlera, Selenium Automation<br>
    ⚡ Git, Airflow, Jira, Docker, AWS (EC2 linux, windows server, S3 buckets)<br><br>
    `
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
      <li><a href="https://e4example.blogspot.com/2017/07/run-different-version-of-firefox-using.html" target="_blank">Run different version of firefox using python selenium</a></li>
      <li><a href="https://e4example.blogspot.com/2017/07/run-different-version-of-chrome-using.html" target="_blank">Run different version of chrome using python selenium</a></li>
      <li><a href="https://e4example.blogspot.com/2017/02/how-to-use-scraping-hub-step-by-step.html" target="_blank">How to use Scraping Hub? (Step-by-Step)</a></li>
      <li><a href="https://e4example.blogspot.com/2017/02/java-interview-questions-nepal.html" target="_blank">Java interview questions (Nepal)</a></li>
    </ul>
    `
    outputArea.innerHTML = blogs;

}

function getSocialLinks(){

  var socialLinks = `
  <ul>
    <li><a href="http://stackoverflow.com/users/2770850/nabin-khadka" target="_blank">Stackoverflow</a></li>
    <li><a href="https://www.linkedin.com/in/nabin-khadka-76946689" target="_blank">LinkedIn</a></li>
    <li><a href="https://twitter.com/nbnkhadka" target="_blank">Twitter</a></li>
    <li><a href="https://github.com/nabinkhadka" target="_blank">Github</a></li>
  </ul>`
  ;

  outputArea.innerHTML = "<span>nabin@Khadka:~$</span> socials" + socialLinks;

}

function getFriendList(){

  var friendlist = `
  <ul>
    <li><a href="http://jsonviewer.stack.hu" target="_blank">Json Pretty</a></li>
    <li><a href="https://crontab.guru" target="_blank">Cronjob Validator</a></li>
    <li><a href="https://regex101.com" target="_blank">Regex Builder</a></li>
    <li><a href="https://epochconverter.com" target="_blank">Epoch converter</a></li>
  </ul>`
  ;

  outputArea.innerHTML = "<span>nabin@Khadka:~$</span> friends" + friendlist;

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
        <li>Logpoint Nepal Pvt. Ltd. (Software Engineer / Oct, 2016 - Present)</li>
      </ul>
    `;

    outputArea.innerHTML = "<span>nabin@Khadka:~$</span> experiences" + experiences;

}

function showSyntaxErrorMsg() {

    var errorMessage = '<br><br> --bad command. Command not found.<br><br>Did you mean any of the following commands?<br>'
                         + getCommandLists() + getThankYouMsg();
    outputArea.innerHTML = "<span>nabin@Khadka:~$</span> " + inputCommand.value + errorMessage;

}

function showArchivesPage(){
  var archivePageHtml = "<span>nabin@Khadka:~$</span>",
      link = 'https://github.com/nabinkhadka/nabinkhadka.github.io/tree/master/encoded_files';
  archivePageHtml = '1. <a href="' + link + '"> Download sample files with various encodings</a><br>Note: sample_file_before_encoding.csv is the initial stage of the file. Others are after encoding is done';
  outputArea.innerHTML = archivePageHtml + '<br><br>';
}

function version() {
    var version = "<span>nabin@Khadka:~$</span> version" + '<br><br>0.3 <br>Current update on: 17th Setpember 2019';
    outputArea.innerHTML = version;

}

function clearOrReset() {
    window.location.reload();
}

function getCommandLists() {

    return `<ul>
              <li>archives</li>
              <li>blogs</li>
              <li>contact</li>
              <li>clear</li>
              <li>education</li>
              <li>experiences</li>
              <li>friends</li>
              <li>help</li>
              <li>projects</li>
              <li>socials</li>
              <li>softwares</li>
              <li>version</li>
            </ul>`;
}

function getThankYouMsg() {
    return 'Thank You!<br>Copyright 2016, Nabin Khadka. For more information, type "help".<br><br>'
}

function debug(message) {
    console.log(message);
}
