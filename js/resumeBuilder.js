// Bio
var bio = {
	"name": "Miles Fitzsimons",
	"role": "Front-end web developer",
	"contacts": {
		"mobile": "+64 22 032 8976",
		"email": "miles.fitzsimons@gmail.com",
		"github": "miles-fitzsimons",
		"twitter": "N/A",
		"location": "Wellington, New Zealand"
	},
	"welcomeMessage": "Hello, I am Miles",
	"skills": ["HTML", "CSS", "JavaScript", "Patents"],
	"biopic": "images/me.jpg",
};

// Format and append
// Name and Role heading
$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));

// Contacts
$("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
// $("#topContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
$("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
$("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));

$("#footerContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
$("#footerContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
$("#footerContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
// $("#footerContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
$("#footerContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	for (var i in bio.skills){
		$("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));

	}
}

$("#skills").css("display","block");

// Work
var work = {
	"jobs": [
	{
		"employer": "AJ Park",
		"title": "Patent Attorney",
		"location": "Auckland",
		"dates": "2007 to 2010",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis tincidunt volutpat. Cras commodo ornare libero nec porttitor. Nunc id elit purus. Cras placerat, dolor id accumsan efficitur, mauris risus ultricies tellus, nec ultricies elit erat ac lorem. Mauris sem eros, eleifend sed condimentum eget, lacinia vel ex. Fusce cursus efficitur orci, nec lobortis nibh blandit non. Maecenas sodales, diam a dictum dignissim, erat justo placerat nunc, nec elementum justo tellus a metus. Nam maximus ullamcorper semper. Nulla luctus, massa ut venenatis posuere, ipsum metus rhoncus libero, congue condimentum leo nibh iaculis turpis."
	},
	{
		"employer": "Prophecy Networks",
		"title": "Logistics and Supply Controller",
		"location": "Welington",
		"dates": "2010 to 2011",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis tincidunt volutpat. Cras commodo ornare libero nec porttitor. Nunc id elit purus. Cras placerat, dolor id accumsan efficitur, mauris risus ultricies tellus, nec ultricies elit erat ac lorem. Mauris sem eros, eleifend sed condimentum eget, lacinia vel ex. Fusce cursus efficitur orci, nec lobortis nibh blandit non. Maecenas sodales, diam a dictum dignissim, erat justo placerat nunc, nec elementum justo tellus a metus. Nam maximus ullamcorper semper. Nulla luctus, massa ut venenatis posuere, ipsum metus rhoncus libero, congue condimentum leo nibh iaculis turpis."
	},
	{
		"employer": "Griffith Hack",
		"title": "Associate Patent Attorney",
		"location": "Melbourne",
		"dates": "2012 to 2015",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis tincidunt volutpat. Cras commodo ornare libero nec porttitor. Nunc id elit purus. Cras placerat, dolor id accumsan efficitur, mauris risus ultricies tellus, nec ultricies elit erat ac lorem. Mauris sem eros, eleifend sed condimentum eget, lacinia vel ex. Fusce cursus efficitur orci, nec lobortis nibh blandit non. Maecenas sodales, diam a dictum dignissim, erat justo placerat nunc, nec elementum justo tellus a metus. Nam maximus ullamcorper semper. Nulla luctus, massa ut venenatis posuere, ipsum metus rhoncus libero, congue condimentum leo nibh iaculis turpis."
	},
	{
		"employer": "Allens Linklaters",
		"title": "Associate Patent Attorney",
		"location": "Melbourne",
		"dates": "2015 to 2016",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis tincidunt volutpat. Cras commodo ornare libero nec porttitor. Nunc id elit purus. Cras placerat, dolor id accumsan efficitur, mauris risus ultricies tellus, nec ultricies elit erat ac lorem. Mauris sem eros, eleifend sed condimentum eget, lacinia vel ex. Fusce cursus efficitur orci, nec lobortis nibh blandit non. Maecenas sodales, diam a dictum dignissim, erat justo placerat nunc, nec elementum justo tellus a metus. Nam maximus ullamcorper semper. Nulla luctus, massa ut venenatis posuere, ipsum metus rhoncus libero, congue condimentum leo nibh iaculis turpis."
	}
	],
	"display": "function(){}"
};

work.display = function(){
	for(var i in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var empl = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
		var role = HTMLworkTitle.replace("%data%",work.jobs[i].title);
		$(".work-entry:last").append(empl + role);
		$(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[i].dates));
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[i].location));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[i].description));
	}
}

work.display();

// Projects
var projects = {
	"projects": [
	{
		"title": "Project 1",
		"dates": "2012 to 2013",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis tincidunt volutpat. Cras commodo ornare libero nec porttitor. Nunc id elit purus. Cras placerat, dolor id accumsan efficitur, mauris risus ultricies tellus, nec ultricies elit erat ac lorem. Mauris sem eros, eleifend sed condimentum eget, lacinia vel ex. Fusce cursus efficitur orci, nec lobortis nibh blandit non. Maecenas sodales, diam a dictum dignissim, erat justo placerat nunc, nec elementum justo tellus a metus. Nam maximus ullamcorper semper. Nulla luctus, massa ut venenatis posuere, ipsum metus rhoncus libero, congue condimentum leo nibh iaculis turpis.",
		"images": "images/project1.jpg"
	},
	{
		"title": "Project 2",
		"dates": "2014 to 2015",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis tincidunt volutpat. Cras commodo ornare libero nec porttitor. Nunc id elit purus. Cras placerat, dolor id accumsan efficitur, mauris risus ultricies tellus, nec ultricies elit erat ac lorem. Mauris sem eros, eleifend sed condimentum eget, lacinia vel ex. Fusce cursus efficitur orci, nec lobortis nibh blandit non. Maecenas sodales, diam a dictum dignissim, erat justo placerat nunc, nec elementum justo tellus a metus. Nam maximus ullamcorper semper. Nulla luctus, massa ut venenatis posuere, ipsum metus rhoncus libero, congue condimentum leo nibh iaculis turpis.",
		"images": "images/project2.jpg"
	}
	]
};

projects.display = function(){
	for (var i in projects.projects){
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[i].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[i].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[i].description));
		$(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.projects[i].images));
	}
}

projects.display();

// Education
var education = {
	"schools": [
	{
		"name": "The University of Canterbury",
		"location": "Christchurch",
		"degree": "Bachelor of Engineering",
		"major": "Electrical Engineering",
		"dates": 2006,
		"url": "http://www.elec.canterbury.ac.nz/"
	},
	{
		"name": "Enspiral Dev Academy",
		"location": "Wellington",
		"degree": "Web Development",
		"major": "HTML, CSS and JavaScript",
		"dates": 2016,
		"url": "http://devacademy.co.nz/"
	}
	],
	"onlineCourses": [
	{
		"title": "HTML & CSS",
		"school": "Codecademy",
		"date": "2016",
		"url": "https://www.codecademy.com/learn/web"
	},
	{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"date": "2016",
		"url": "https://www.udacity.com/course/javascript-basics--ud804"
	}
	]
};

education.display = function(){
	for(var i in education.schools){
		$("#education").append(HTMLschoolStart);
		var schoolName = HTMLschoolName.replace("%data%",education.schools[i].name);
		var degreeName = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
		$(".education-entry:last").append(schoolName + degreeName);
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[i].dates));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[i].location));
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[i].major));
	}

	$("#education").append(HTMLonlineClasses);

	for(var i in education.onlineCourses){
		$("#education").append(HTMLschoolStart);
		var onlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
		var onlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
		$(".education-entry:last").append(onlineTitle + onlineSchool);
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%",education.onlineCourses[i].date));
		$(".education-entry:last").append(HTMLonlineURL.replace("%data%",education.onlineCourses[i].url));
	}
}

education.display();

// Google Maps
$("#mapDiv").append(googleMap);
