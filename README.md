# Opdracht voor Lyceo


## Geschreven met:
1. Angular -> 11.2.0
2. Ionic -> 5.5.2
3. Laravel -> 4.1.0

## Overige info:
1. Keuze van database is Sqlite. Makkelijkste keuze voor een database voor een demo als deze.

## Installatie en opstarten
1. Clone deze repo
2. Navigeer in de terminal naar de folder 'backend' en voer in commando: `php artisan migrate` om alle migraties te runnen en zo de tabellen te creeren voor de API.
3. Navigeer in de terminal naar de folder 'backend' en voer in commando: `php artisan serve` voor het opstarten van de API. 
 * De API runt by default op `http://127.0.0.1:8000` en alle API calls worden ook gemaakt naar deze URL.
4. Navigeer in de terminal naar de folder 'frontend' en voer in commando: `npm install` voor het installeren van de nodige dependencies.
5. Navigeer in de terminal. naar de folder 'frontend' en start de front-end applicatie op met `ionic serve`. 
 * De ionic app runt by default op `http://localhost:8100/`



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
  * Gekozen voor ion-select omdat: Aantrekkelijk voor het oog en gepast voor de casus.
  * Het is mogelijk om ion-select te zetten op 'geen geselecteerd' om filter te annuleren.
### 3. Swipe omlaag om het scherm te vernieuwen en de filters te resetten
  * Gerealiseerd met [ion-refresher](https://ionicframework.com/docs/api/refresher).
  * Omdat: Kracht van het component voorkomt heruitvinden van het wiel.
### 4. Toevoegen van taak of project
  * Gerealiseerd met [ion-fab-button](https://ionicframework.com/docs/api/fab):
  * Motivatie & overwegingen:
    *  Geen objectklasse gemaakt voor project omdat het 1 string bevat. Overkill voor een demo-applicatie.
    *  Zelfde mening voor taak (Tidy) puur omdat het een demo-applicatie betreft met 3 waardes.  Alternatieve code zou anders zijn: ` data: Tidy[] => ` 
    *  [ion-toast](https://ionicframework.com/docs/api/toast) gebruikt voor weergeven success of error. (Extra)

## Functionaliteit & motivatie (BACK-END):
### 1. Data ophalen & filteren standaard met join zodat met 1 API call alle informatie wordt opgehaald die nodig is voor het UI-element.
  * Motivatie: De data zou ook kunnen worden gefilterd in de front-end maar dit is niet ideaal in geval van schaalbaarheid (good practice)


### Known 'issues':
* Met de huidige dropdown voor selecteren van project op de Homepagina is het niet direct duidelijk dat je moet scrollen voor het zien van alle opties.
