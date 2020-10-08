# F1WorldChampions

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

# Description

Displays the f1 champions for the seasons 2005 to 2015 and the winners of each rounds of these seasons

# Architecture 

The code divided into modules for scaleability and faster loading. A shared module has been used for the Angular Material and other common modules.
A reusable componeent used to display the seasons champions.
A state has been used to pass the RaceTable and the champion of the season to the season component.
This approach used for demonstration reasons since that has the disantvantage that the state data will lost if the age reload.
Other approaches can be used to avoid this issue like using the localstorge, load the data again from the api etc.
Specific folders have been used for the interfaces, services and the mock data and mock service used for the testing.

# Libraries

Angulae Material modules and RxJs libraries has been used

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
