import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../Resume/ResumeStyle.css';
import MyResume from '../Resume/MyResume.pdf';

function Resume() {
    return (
        <div className='resume-container'>
            <div >
                <div>
                    <h2>Viet Hung Tran</h2>
                    <p>Web Developer and Integration Engineer</p>
                    <p><em><b>My Personal Website: https://viethungtranwebdev.com/Home</b></em> </p>
                    <a href={MyResume} target="_blank" rel="noreferrer">Download Resume (pdf version)</a>
                    <hr />
                    <h3>Professional Summary</h3>
                    <p>Highly motivated, knowledgeable and skilled Web Developer in creating visually appealing, user-friendly and responsive websites and web applications. Proficient in HTML, CSS, JavaScript, Python, Bootstrap, and ReactJS with a solid understanding of web design principles, cross-browser compatibility and accessibility standards. A quick learner and team player with excellent problem-solving and communication skills.</p>
                    <hr />
                    <h3>Skills</h3>
                    <ul>
                        <li>Proficient in HTML, CSS, JavaScript, Python and ReactJS</li>
                        <li>Strong understanding of responsive design, cross-browser compatibility and accessibility standards</li>
                        <li>Knowledge of web design principles and experience with creating wireframes, prototypes, and high-fidelity mockups</li>
                        <li>Good understanding of front-end optimization techniques for improving page load speed</li>
                        <li>Experience with CSS pre-processors like Sass and LESS</li>
                        <li>Experience with CSS frameworks like Bootstrap and Material UI</li>
                        <li>Familiarity with version control systems like Git</li>
                        <li>Experience working with REST APIs and integrating with back-end systems</li>
                        <li>Familiarity with Docker CLI, Docker Compose, Docker Swarm, and Kubernetes.</li>
                        <li>Ability to perform code reviews and ensure adherence to coding standards</li>
                        <li>Excellent problem-solving and communication skills</li>
                    </ul>
                    <hr />
                    <h3>Project Portfolio</h3>
                    <h5>Personal Page (React, JavaScript, HTML, CSS):</h5>

                    <li>Designed and developed a personal website to showcase my skills as a front end web developer.</li>
                    <li>Built using React, Redux, and Sass.</li>
                    <li>Implemented responsive design and cross-browser compatibility.</li>
                    <li>Added animations and transitions for a visually engaging user experience.</li>
                    <li>Demonstrated proficiency in ReactJS, HTML, and CSS while showcasing strong UI design principles and attention to detail.</li>

                    <h5>Crypto Tracker App (React, JavaScript, HTML, CSS):</h5>
                    <li>Developed a single-page application using React and styled with HTML and CSS.</li>
                    <li>Implemented real-time data fetching of cryptocurrency prices using an API.</li>
                    <li>Designed and developed the user interface for displaying real-time data in a clean and organized manner.</li>

                    <h5>To Do List App (React, Redux, JavaScript, HTML, CSS):</h5>
                    <li>Developed a front-end to-do application using React and Redux, showcasing expertise in modern front-end web development.</li>
                    <li>Built using React, Redux, and Sass.</li>
                    <li>Implemented features for task adding, task searching, and filtering, leveraging Redux for efficient state management.</li>
                    <li>Created a responsive user interface using React components, enhancing the user experience.</li>

                    <h5>Password Validation (React, JavaScript, HTML, CSS, Regex):</h5>
                    <li>Developed a password validation application using React, JavaScript, HTML, and CSS.</li>
                    <li>Implemented Regex patterns to enforce strong and secure password criteria.</li>
                    <li>Designed a user-friendly interface with error handling.</li>
                    <li>Deployed the application to a hosting platform for easy access and demonstration.</li>

                    <h5>Emoji Generator (React, JavaScript, HTML, CSS):</h5>
                    <li>Developed an emoji generator application using React.</li>
                    <li>Implemented functionality to prompt users to enter a number.</li>
                    <li>Displayed the corresponding number of smiley faces on the screen.</li>
                    <li>Designed a user-friendly interface for an enjoyable user experience.</li>

                    <h5>Weather App (React, JavaScript, HTML, CSS):</h5>
                    <li>Developed a weather application using React, JavaScript, HTML, and CSS.</li>
                    <li>Integrated weather API to fetch real-time weather data.</li>
                    <li>Designed and developed a user interface to display weather information in a visually appealing manner.</li>
                    <li>Deployed the app for easy access and demonstration.</li>

                    <h5>Text Separator App (React, Material-UI, CSS):</h5>
                    <li>Developed a text separator application using React and Material-UI.</li>
                    <li>Implemented functionality to separate user-inputted text into strings, numbers, and special characters. </li>
                    <li>Highlighted the extracted strings, numbers, and special characters for improved readability.  </li>
                    <li>Designed a responsive and user-friendly interface using Material-UI components.</li>
                    <li>Displayed the separated categories of the input text in a visually appealing manner. </li>
                    <hr />

                    <h3>Experience</h3>
                    <h4>Ultrasound AOP Lab Lead & Engineering Specialist</h4>
                    <p><em>Siemens Medical Solution Inc</em> - Issaquah, WA (2021-Current)</p>
                    <ul>
                        <li>Lead role managing and supervising all operations of the AOP lab, while performing and maintaining calibrations of laboratory equipment</li>
                        <li>Successfully met challenge of additional work assigned due to staff shortage when new products were introduced; met with other team members to divide the work load efficiently, resulting in excellent feedback from customers and all stakeholders</li>
                        <li>Works closely with ultrasound engineers to conduct various ultrasound acoustic power measurements</li>

                    </ul>
                    <h4>R & D Integration Engineer</h4>
                    <p><em>Blue Origin LLC</em> - Kent, WA (2018-2021)</p>
                    <ul>
                        <li>Integrate, test, verify, and troubleshoot propulsion systems and components. Present documented analysis to stakeholders.</li>
                        <li>Test mechanical and material properties, consult with research and development engineers to create test plans, review design, and recommend enhancements.</li>
                        <li>Collaborate with cross-functional engineering teams to implement required testing conditions.</li>
                        <li>Fabricate propulsion equipment, including complex mechanical installations.</li>
                        <li>Maintain lab hardware, testers, facilities and inventory of parts and equipment. Ensure safe working conditions and improve processes and operational efficiency.</li>
                    </ul>

                    <h4>Aircraft Test Tech</h4>
                    <p><em>The Boeing company</em> - Renton, WA (2018)</p>
                    <ul>
                        <li>Orchestrates all testing, diagnosis, and repair of issues that impact the performance of mechanical and electrical systems on aircraft produced by the world’s largest aerospace company.</li>
                        <li>Verifies and validates system integrity across hydraulic, pneumatic, electro-mechanical, and other systems by executing a broad and deep array of functional tests to address issues detailed in test plans, nonconformance reports, and other documents.</li>
                        <li>Exercises the ability to review and interpret engineering drawings, test documents, schematics, and technical documentation</li>
                        <li>Utilizes a variety of computer applications, power meters, oscilloscopes and industry-specific, manual and power tools to advance productivity and achieve project goals.</li>
                        <li>Provides guidance and direction to other aircraft technicians relating to workflow sequences, troubleshooting and the analysis, investigation, and resolution of complex technical issues.</li>
                    </ul>

                    <h4>FAA Avionics Specialist</h4>
                    <p><em>Honeywell</em> - Renton, WA (2015-2018)</p>
                    <ul>
                        <li>Assumed a lead role as a certified FAA technician and quality inspector for avionic devices manufactured by this Fortune 100 producer of commercial and consumer products, engineering services, and aerospace systems.</li>
                        <li>Focused efforts on inspecting, repairing, overhauling, and testing radar transceivers, using resources such as engineering schematics, customer documentation, and verbal instructions.</li>
                        <li>Administered testing equipment that included test stations, computers, ATE and DVM tools, scopes, signal generators, and frequency counters; collecting data and presented findings in standard reports.</li>
                        <li>Captured gains in efficiency and productivity through the use of Lean methodologies, 5S, and the Honeywell 8 Behaviors.</li>
                        <li>Served as a trusted advisor and subject matter expert, providing guidance and training to colleagues in the principles of assembly repair and maintenance.</li>
                    </ul>

                    <h4>Medical Device Manufacturing</h4>
                    <p><em>Stryker Inc</em> - Redmond, WA (2014-2015)</p>
                    <ul>
                        <li>Led testing, investigation, and troubleshooting of devices produced by this world leader in the development, manufacturing, sale and service of external defibrillator/monitors and emergency medical response equipment.</li>
                        <li>Applied expertise in test equipment that included DMM, power supplies, oscilloscopes, and bench machinery; used both automated equipment and handheld tools for product assembly and testing.</li>
                        <li>Fully documented all testing and troubleshooting results, entering findings into a computer system.</li>
                    </ul>
                    <hr />
                    <h3>Education</h3>
                    <h4>Bachelor of Science in Engineering</h4>
                    <p><em>University of Washington</em> - Seattle, WA</p>
                    <p>BS in Engineering</p>
                    <hr />

                    <h4>Asscociate of Science in Engineering</h4>
                    <p><em>Bellevue College</em> - Bellevue, WA</p>
                    <p>AS in Engineering</p>
                    <hr />
                    <h4>Full Stack Web Development</h4>
                    <p><em>Nucamp Bootcamp</em> - Seattle, WA</p>
                    <p>Front End Web and Mobile Development (Front-End Web UI Framework, Bootstrap, Front End JavaScript Library with React, Multiplatform Mobile App Development with React Native)</p>
                    <p>Backend, SQL, and DevOps with Python (Python Fundamentals, Data Structures, and Algorithms, SQL and Python, Modern Software Engineering with DevOps)</p>
                </div>
                <div className="col-md-5">
                    <h3>Contact Me</h3>
                    <ul>
                        <li>Email: vtranseattle@gmail.com</li>
                        <li>Phone: 206-288-9167</li>
                        <li>LinkedIn: <a style={{ color: "blue" }} href="https://www.linkedin.com/in/viet-tran-95baab172" target="_blank" rel="noreferrer">My LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Resume;
