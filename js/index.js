let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector('footer');
let copyright = document.createElement('p');
copyright.innerHTML = `Alberto Hernandez &#xA9; ${thisYear}`;
footer.appendChild(copyright);

skills = ['Coding', ' Installation', ' Gaming' , ' Easygoing' , ' Quick Learner', ' Obedient'];
let skillsSection = document.getElementById('skills');
let skillsList = skillsSection.querySelector('ul');
for (let i = 0  ; i < skills.length ; i++) {
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
} ;
