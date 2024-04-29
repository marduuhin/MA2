„Kõrge tundlikkusega raadioside mõõteprotseduur Kaitseväe Akadeemias“

Töö eesmärk: Luua kõrge tundlikkusega (< /*-XX*/dBm) raadioside seadmete tehniliste parameetrite mõõdistamiseks protseduur Kaitseväe Akadeemia olemasolevate tingimuste.

Uurimisküsimused: Millised on peamised väljakutsed ja piirangud kõrge tundlikkusega raadioside seadmete mõõtmisel kasutades KVA infrastruktuuri ja seadmeid?

Metoodika: Uurimustöö käigus testitakse erinevaid mõõteprotseduure kasutades kõrge tundlikkusega LoRa raadiosidet. Eksperimentide käigus selgitatakse välja, kas need meetodid sobivad rakendamiseks KVA tingimustes.


Ptk 1 - üldpilt.
Ptk 1.1: Probleemi kirjeldus (puudub protseduur, EVKK Faraday puuri/ruumi summutavus /*120*/dB [viide - Piip])
Ptk 1.2: Tehniliste vahendite (mõõteseadmete) kirjeldus.
Rohde&Schwarz PR200
Rohde&Schwarz FSV
//DANL - Displayed average noise level ((2.1.2 - tulemused))
Ptk 1.3: LoRa lühikirjeldus (fookus tundlikkus, muu on vaht - pole relevantne). Järgmiste peatükkide oodatav tulemus tuleneb ka siit.
/* Siia võib lisada ka mõõtetulemused reaalse väljundvõimsuse ja selle anomaaliate kohta. Või siis see eraldi lisasse või prügikasti. TBD*/


Ptk 2 - Eksperimendid. Iga alapeatükk koosneb kolmest osast: 1. mõne eelneva uurimustöö metoodika kirjeldus (viide) 2. metoodika reprodutseerimise plaani kirjeldus, 3. tulemused/probleemid/mõtted, ...
Ptk 2.1 - mõõdistamine otsenähtavusega
2.1.1 - /*Miks sai valitud see meetod?*/
2.1.2 - eksperimendi kirjeldus:
Eesmärk: mõõta maksimaalsel võimalikult sidekaugusel vastuvõtjani jõudva signaali tugevust.
Eksperiment on üles ehitatud kolme peamise komponendiga: 1. Saatja, 2. Vastuvõtja, 3. Mõõteaparaat. Vastuvõtja ja mõõteseadme antennid paiknevad kohakuti 5cm vahega, et nendeni jõudev signaal oleks identne. Idee on leida maastikupunkt, kus side saatja ja vastuvõtja vahel katkeb ning fikseerida mõõteseadme abil vastuvõtjani jõudva signaali tugevus. Kõigil kolmel on kasutuses identne antenn.

Saatjana oli kasutuses Heltec poolt toodetud LoRa Turtle (V1.2) [/*Viide - L1; Viide - L2*/] koos RadioShuttle tarkvaraga [/*Viide - L3*/]. Signaali edastamiseks kasutatati "Ping" programmi, kusjuures vastuvõtja ID oli seadistatud "valeks", et vastuvõtja oleks ainult kuulaja rollis ja ei saadaks pingile vastust. Programm "Ping" valiti oma minimaalse andmeside paketi tõttu. RadioShuttle firmware kordas pingi edastamist 3x, kui vastust saatjalt ei saabunud. Saatja oli akutoitel.
Saatja LoRa seaded: /*tabel*/
LORA_DEVICE_ID:	10	12809
LORA_REMOTE_ID:	12	12800
LORA_RADIO_TYPE:	14	3
LORA_FREQUENCY:	15	433000000
LORA_BANDWIDTH:	16	125000
LORA_SPREADING_FACTOR:	17	7
LORA_TXPOWER:	18	14
LORA_FREQUENCY_OFFSET:	19	0

Vastuvõtjana oli kasutuses identne LoRa Turtle, seadistuses muudetud LORA_REMOTE_ID välja väärtust 12=12805. Vastuvõtja oli ühendatud läbi USB kaabli arvutiga. LoRa Turtle edastas läbi serial side iga vastuvõetud paketi kohta infot. Infos oli kajastatud paketi suurus ja saatja ning vastuvõtja ID. Nende väärtuste muutumist kasutati ühe indikaatorina side kvaliteedi languse tuvastamiseks. Teine ning peamine indikaator sideprobleemide kohta oli vastuvõtja poolt logitud RxError, mida ta kuvas kui andmepaketi päises olid vead.

Mõõteaparaat
Mõõteseadmena oli kasutuses Rohde&Schwarz FSV. Spektrianalüsaator oli seadistatud samale sagedusele (433MHz) ja ribalaiusele (125kHz), mis LoRa. Sweep time väärtuseks sai valitud 1ms. Mõõdistamiseks kasutati pidevat monitoorimist ja max hold funktsiooni. Iga katse eel nulliti eelnev väärtus. Paralleelselt oli kasutuses teine spektrianalüsaator (Rohde&Schwarz PR200), waterfall režiimis, et tuvastada kõrvaline märkimisväärne müra, mis võib invalideerida mõõtmise.

Tulemused/Probleem
Eksperiment kulges plaanipäraselt: saatja kaugemale viimisega kahanes vastuvõetava signaali tugevus. Kahanes kuni spektrianalüsaatoriga (FSV) ei suutnud seda enam taustmürast eristada, kuid samal ajal jõudis signaal edukalt saatjast vastuvõtjani. Järeldus oli, et see metoodika pole sobiv. Ühe lahendusena sai proovitud teist spektrianalüsaatorit (PR200), mille tundlikkus on suurem, kuid ka sellega jõuti samale tulemusele: signaali polnud võimalik enam mürast edastada, kuid samal ajal side kahe LoRa seadme vahel toimis.
Lähtudes eksperimendi tulemustest järeldati, et kõrge tundlikkusega vastuvõtjaid ei ole võimalik KVAs mõõdistada kasutades otsenähtavusega raadiosidet.


Ptk 2.2 - mõõdistamine kaabli ja attenuaatoritega
/*Ühendatud kaabliga, attenuaatorite lisamine. Plaan mõõta spektrianalüsaatoriga hiljem vähendades attenuaatoreid*/
/*Probleem: Vastuvõtja sai signaali kätte ka siis, kui polnud ühendatud. Uus plaan varjestus*/
Ptk 2.3 - mõõdistamine kaabli ja attenuaatoritega + seadme varjestamine
/*Probleem ei lahenenud. Uus plaan Faraday.*/
Ptk 2.4 - mõõdistamine Faraday ruumis (B007)
/*...*/


Ptk 3 - Eksperimentide tulemuste kokkuvõte, analüüs, järeldused...


Viited:
L1 - https://resource.heltec.cn/download/TurtleBoard/Turtle%20Board.pdf
L2 - https://www.radioshuttle.de/wp-content/uploads/2020/07/Turtle-Data_sheet.pdf 
L3 - https://github.com/RadioShuttle/MBED_Turtle_Radioshuttle

mJ/packet: 10.1088/1742-6596/1407/1/012092


Lisa 1: LoRa setup juhend