import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

export class Project {
    name: string;
    description: string;
    shortName: string;
    year: string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [

  ]
})
export class AppComponent {
  jobPosition = 'Front End Developer.';
  favSkills = 'Angular';
  logoUrl = 'http://linked.in/linkedinlogopng';
  buttonState = 'true';
  projectTitle = 'List of Projects:';
  projects= PROJECTS;
  currentProject = Project;
  
  showProject(item) {
	  this.currentProject = item;

	}

  typed:string = '';
  schools = [
  {
  name: 'Udacity',
  major: 'Full Stack Web Developer'
  },
  {
  name: 'University of MN',
  major: 'Electrical Engineering'
  },
  {
  name: 'Metrostate',
  major: 'Computer Information Systems'
  }

  ]

  skills = [
      {
        name: 'Angular'

      },
      {
        name: 'JavaScript',

      },
      {
        name: 'Python',

       },
       {
        name: 'HTML5',

       },
       {
        name: 'CSS3',

       },
       {
        name: 'PostgreSQL',

       }

       ]

  myFunc(name) {

  console.log(name.value);
  }
  }

  var PROJECTS: Project[] = [
        {
            "name": "Item Catalog",
            "shortName": "catalog",
            "description": "Developed a RESTful web application using the Python framework Flask.Used third-party OAuth authentication.",
            "year": "July 2017"

        },
        {
            "name": "Tournament",
            "shortName": "Tournament",
            "description": "Developed a database schema to store the game matches between players.Used the PostgreSQL database to keep track of players and matches in a tournament.",
            "year": "April 2017"

        },
        {
            "name": "Multi User Blog",
            "shortName": "blog",
            "description": "Designed a multi - user blog where the user is directed to log in, log out, and signup pages.The app is built using Google App Engine, and jinja framework.",
            "year": "April 2017"

        },
        {
            "name": "Neighborhood Map",
            "shortName": "neighborhood",
            "description": "Developed a single page application using Google Maps API to display a map of restaurants in San Francisco, CA neighborhood. The markers display the street view image, location.",
            "year": "July 2017"

        },
        {
            "name": "Linux Server Configuration",
            "shortName": "linux",
            "description": "Installed Linux server and host my web applications. Secured my server from a number of attack vectors, installed and configured a database server, and deployed Item-Catalog web applications onto it.",
            "year": "September 2017"

        },
        {
            "name": "build Portfolio Project ",
            "shortName": "portfolio",
            "description": "Developed a responsive website that displays images, descriptions and links to each of the portfolio projects I have completed throughout the course of my Udacity program.",
            "year": "Feb 2017"

        },
        {
            "name": "Movie project ",
            "shortName": "movie",
            "description": "Created a data structure movie.py -- a Python  Class to store my favorite movies included movie title, poster URL and a YouTube link to the movie trailer. It generates a static web page allowing visitors to browse their movies and watch the trailers.",
            "year": "Jan 2017"

            }
  ]
