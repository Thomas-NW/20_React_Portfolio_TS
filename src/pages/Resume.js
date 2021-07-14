import React, { Component } from "react";

function Resume() {
  return (

    <section >
    <div >

      <div className="section-title">
        <h2>Software Projects Resume</h2>
        <p>
          The Bootcamp helped me to acquire skills in the following areas of software development:
          The following is a list of projects that were completed during Bootcamp.
        </p>
        <p>
          It is a mix of projects that strongly emphasized front-end skills, whereas others focused on the backend.
          At this point, I would state that I understand software development better, but realize that apprentice years are not master years. I feel like I am ready to review and update code, have good conversations about it, and provide good contributions.
        </p>
        <p>
          What I understand much better, is that software development is rather agile in strategy planning, execution, and maintenance. Using the wrong strategy at the beginning of a project will create significant delays and cost at the end.
        </p>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <h3 className="resume-title">Sumary</h3>
          <div className="resume-item pb-0">
            <h4>BOOTCAMP</h4>
            <p><em>
              It is no secret that the course is intense and challenging along the way.
              I believe that the strongest credit each student should receive is for the persistence in working through the course and learning how to learn all over again. Working in teams, while balancing different skill sets and expectations is truly a lesson learned. Factually, some students are all about themselves, while striving to create a new career and new life.
              Other do the same but realize that working in a team and being part of a huge network of leveraging success is a priority.
              Learning new skills in software development and understanding the scope of options was truly a huge takeaway.
              I came to realize that the world is your Oyster, and everything goes. Whatever the software developer’s strong suite is, will be the final app. To me, this is something that a non-software-developer does not know, when talking to developing firms.
              Google is the best friend of a software developer together with other networks.
              I am striving to learn and acquire the skills needed to code software and it is exciting.
              New ideas and thoughts passing through my brain, while trying to figure out what should be done next.
            </em></p>
          </div>

          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            <h4>Full Stack Software Developer</h4>
            <h5>2021-2021</h5>
            <p><em>Northverstern Univerity Bootcamp (6 month)</em></p>
            <p>HTML, CSS, Javascript, Node.js, jQuery</p>
          </div>
          <div className="resume-item">
            <h4>Dipl.-Ing. Mechanical Engineering</h4>
            <h5>1988 - 1992</h5>
            <p><em>University of Bochum, Abtl. Gelsenkirchen-Buer</em></p>
            <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
          </div>
        </div>
        <div className="col-lg-6">
          <h3 className="resume-title">Software Development Experience</h3>
          <div className="resume-item">
            <h4>PASSWORD GENERATOR</h4>
            <p><em>The task was to create an application that enables employees to generate random passwords based on criteria that they’ve selected.
              This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write.
              It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.  </em></p>
            <ul>
              <li><a href=" https://thomas-nw.github.io/PasswordGen_TS/" target="_blank">Click and Play: <img src="assets/img/Password.png" height="30px" alt="Code Quiz" /></a></li>
              <li><a href="https://github.com/Thomas-NW/PasswordGen_TS.git" target="_blank">github: Password Generator</a></li>
            </ul>

            <h4>CODE QUIZ</h4>
            <p><em>The start was to include an array with questions
              Next was to assign an array of answers to the questions.
              Next was to include event listener for the selection of an answer
              Next was to evaluate if the answer is correct
              Next was to recod the wins and losses in the local storage
              Local storage was utilized to capture the high score  </em></p>
            <ul>
              <li><a href=" https://thomas-nw.github.io/05_Code_Quiz/" target="_blank">Click and Play: <img src="assets/img/Quiz.png" height="30px" alt="Code Quiz" /></a></li>
              <li><a href="https://github.com/Thomas-NW/05_Code_Quiz.git" target="_blank">github: Code Quiz</a></li>
            </ul>

            <h4>WORKDAY SCHEDULER</h4>
            <p><em>Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code.
              This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. </em></p>
            <ul>
              <li><a href=" https://thomas-nw.github.io/06_Workday_Scheduler/" target="_blank">Click and Play: <img src="assets/img/Workday_Scheduler.PNG" height="30px" alt="Code Quiz" /></a></li>
              <li><a href="https://github.com/Thomas-NW/06_Workday_Scheduler.git" target="_blank">github: Workday Scheduler</a></li>
            </ul>

            <h4>TEAM PROFILE GENERATOR</h4>
            <p><em>Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.
              Testing is key to making code maintainable, so you’ll also write a unit test for every part of your code and ensure that it passes each test. </em></p>
            <ul>
              <li><a href="https://thomas-nw.github.io/10_Team_Profile_Generator_TS/" target="_blank">Click and Play: <img src="assets/img/Team_Generator_Image.PNG" height="30px" alt="Code Quiz" /></a></li>
              <li><a href="https://github.com/Thomas-NW/10_Team_Profile_Generator_TS.git" target="_blank">github: Team Generator</a></li>
            </ul>

            <h4>TECH BLOCK</h4>
            <p><em>The task was to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. </em></p>
            <ul>
              <li>npm install to download all the dependencies in node. Deploy files to webserver such as Heroku for live app usage.
                HTML 5.0, CSS, JavaScript, json, Bootstrap, npm package, node.js</li>
              <li><a href="https://thomas-nw.github.io/14_Tech_Block_TS/" target="_blank">Click and Play: <img src="assets/img/Tech_Blog_Comment.PNG" height="30px" alt="Code Quiz" /></a></li>
              <li><a href="https://github.com/Thomas-NW/14_Tech_Block_TS.git" target="_blank">github: Tech Block Generator</a></li>
            </ul>

          </div>
        </div>

      </div>
    </div>
  </section>
    


  );
}

export default Resume;
