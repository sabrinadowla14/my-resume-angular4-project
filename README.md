# MyResumeAngular4Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
Project: My Resume Website
I have used Angular 4 framework. I have created this website, while I was trying  to get a certificate in Angular4 from Lynda.com 
codes are taken from Lynda.com.
In header section I have my Blog where you can type any job title and description of a job. In Coverletter I have the description of my 
cover Letter.

To see the entire project list you have to enter the space bar.
If you click on any project it's going to show you the description of the project.

Install nodejs: https:nodejs.org (added node package manager)
node -v to check the latest version.
In the terminal type npm install @angular/cli -g (only have to install only once.)
To install a new project: ng new projectName
cd into the folder.
To see our project: ng serve
Open a web browser and navigate to localhost:4200

Note: In angular 4 the animations are no longer a part of the angular library.
We have to use npm to install the animations.
On the console type: npm install @angular/animations --save
In app.module.ts we have to import BrowsersAnimationsModule from @angular/platform-browser/animations.
