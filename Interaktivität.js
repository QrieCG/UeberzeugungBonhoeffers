function zeigeInhalt(seite) {
    let inhalt = "";

    if (seite === "start") {
        inhalt = "<h2>Startseite</h2><p>Willkommen auf unserer Startseite!</p>";
    } else if (seite === "ueber") {
        inhalt = "<h2>Über uns</h2><p>Wir sind ein Team von engagierten Webentwicklern.</p>";
    } else if (seite === "kontakt") {
        inhalt = "<h2>Kontakt</h2><p>Du erreichst uns unter kontakt@meineseite.de</p>";
    } else {
        inhalt = "<p>Seite nicht gefunden.</p>";
    }

    document.getElementById("content").innerHTML = inhalt;
}
