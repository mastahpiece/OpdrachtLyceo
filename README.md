# Opdracht voor Lyceo


## Geschreven met:
1. Angular -> 11.2.0
2. Ionic -> 5.5.2
3. Laravel -> 4.1.0

## Overige info:
1. Keuze van database is Sqlite.

## Installatie en opstarten
1. Clone deze repo
2. Navigeer in de terminal naar de folder 'backend' en voer in commando: `php artisan migrate` om alle migraties te runnen en zo de tabellen te creeren voor de API.
3. Navigeer in de terminal naar de folder 'backend' en voer in commando: `php artisan serve` voor het opstarten van de API. 
 * De API runt by default op `http://127.0.0.1:8000` en alle API calls worden ook gemaakt naar deze URL.
4. Navigeer in de terminal naar de folder 'frontend' en voer in commando: `npm install` voor het installeren van de nodige dependencies.
5. Navigeer in de terminal. naar de folder 'frontend' en start de front-end applicatie op met `ionic serve`. 
 * De ionic app runt by default op `http://localhost:8100/`
6. BELANGRIJK!: [Maak eerst een project-item aan](#4-toevoegen-van-taak-of-project) voordat je een Tidy/taak aanmaakt. Er is namelijk een project-item vereist om een taak/tidy te creeeren. Zie Hoofdstuk (FRONT-END) -> 4. Toevoegen van taak of project

## Functionaliteit & motivatie (FRONT-END):
### 1. Tonen van taken (Tidy's). Per taak wordt getoond Taaknaam en Project of Beschrijving.
  * Er is gekozen voor gebruik van [ion-list](https://ionicframework.com/docs/api/list) in samenhang met [ion-item](https://ionicframework.com/docs/api/item) en [ion-grid](https://ionicframework.com/docs/api/grid).
  * [ion-Chip](https://ionicframework.com/docs/api/chip) om projectnaam weer te geven wordt niet getoond (ng-if) als een taak een beschrijving heeft.
  * Dit, omdat ik het design volgde wat ook een goede uitvoering was naar mijn mening ivm teveel clutter per item.  
    * Ion-list omdat: Good practice voor weergeven van lijsten in ionic 
    * Ion-Item omdat: Gemak van UI
    * Ion-Grid omdat: Proporties beheersbaar voor indelen van inhoud van elke ion-item
    * Ion-Chip omdat: Beste component voor gevraagde UI
### 2. Filteren op projectnaam:
  * Gekozen voor [ion-select](https://ionicframework.com/docs/api/select) omdat: Aantrekkelijk voor het oog en gepast voor de casus.
  * Het is mogelijk om ion-select te zetten op 'geen geselecteerd' om filter te annuleren.
### 3. Swipe omlaag om het scherm te vernieuwen en de filters te resetten
  * Gerealiseerd met [ion-refresher](https://ionicframework.com/docs/api/refresher).
  * Omdat: Kracht van het component voorkomt heruitvinden van het wiel.
### 4. Toevoegen van taak of project
  * Op de homepage druk op de floating action button rechtsonder in het scherm. Daar verschijnt de keuze voor het toevoegen van een project of taak. Deze opties brengen de gebruiker op een nieuwe pagina. Hier kunnen taken/projecten worden aangemaakt.
  * Gerealiseerd met [ion-fab-button](https://ionicframework.com/docs/api/fab):
  * Motivatie & overwegingen:
    *  Geen objectklasse gemaakt voor project omdat het 1 string bevat. Overkill voor een demo-applicatie.
    *  Zelfde reden voor het maken van objectklasse taak (Tidy) puur omdat het een demo-applicatie betreft met 3 waardes. Alternatieve code zou anders zijn: ` data: Tidy[] => ` 
    *  [ion-toast](https://ionicframework.com/docs/api/toast) gebruikt voor weergeven success of error. (Extra)

## Functionaliteit & motivatie (BACK-END):
### 1. Data ophalen & filteren standaard met een join tussen de tabellen `projects` en `tidies` zodat met 1 API call alle informatie wordt opgehaald die nodig is voor de front-end.
  * Motivatie: De data zou ook kunnen worden gefilterd in de front-end maar dit is niet ideaal (good practice). Voor een kleinere applicatie als deze zou filteren in de front-end voldoen, maar in productie en realiteit is een query in SQL sneller dan filteren in de front-end met grotere datasets.


### Known 'issues':
* Met de huidige dropdown voor selecteren van project op de Homepagina is het niet direct duidelijk dat je moet scrollen voor het zien van alle opties.
