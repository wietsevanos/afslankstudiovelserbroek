# Beheerbare actie van de maand

## Wat je krijgt
- De aangeleverde actieposter wordt direct de huidige maandactie op de homepage.
- De bestaande uitgebreide voorbeeldkaart wordt vervangen door een rustige, beeldgerichte actie-sectie met een duidelijke intakeknop.
- Een aparte beheerpagina waar je met code `1234` een nieuwe actieposter uploadt of de huidige actie verwijdert.
- Een vaste standaardopmaak: na uploaden verschijnt de foto automatisch netjes, zonder dat je teksten of opmaak hoeft in te vullen.

## Beheerervaring
- Open de beheerpagina, voer de code in en kies een foto vanaf telefoon of computer.
- Bekijk eerst een voorbeeld en druk daarna op publiceren.
- De nieuwe foto vervangt de huidige actie direct; verwijderen zet de sectie in een nette lege toestand.
- Duidelijke meldingen bij een verkeerd bestand, verkeerde code of mislukte upload.

## Technische details
- Lovable Cloud bewaart de actieve actie en de geüploade afbeelding, zodat wijzigingen voor alle bezoekers zichtbaar zijn.
- De code wordt alleen op de server gecontroleerd en komt niet in de websitecode terecht.
- Uploaden en verwijderen lopen via een beveiligde serverkoppeling met invoercontrole en beperkte inlogpogingen.
- De publieke website leest uitsluitend de actieve actie; bezoekers kunnen niets wijzigen.
- De bestaande statische DirectAdmin-build blijft bruikbaar en haalt de actuele actie op via de online koppeling.
- Beide pagina's krijgen passende metadata en worden gecontroleerd op desktop en mobiel.
