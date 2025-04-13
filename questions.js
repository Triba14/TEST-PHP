// questions.js - Pool di 200 Domande Basate Esclusivamente sui Testi Forniti

const allExamQuestions = [
    // --- Sezione 1: Concetti Fondamentali ---
    {
        question: "Secondo la Guida, qual è la funzione principale di un Client nel modello Client-Server?",
        options: ["Fornire servizi o risorse.", "Gestire l'elaborazione e i dati.", "Richiedere servizi o risorse, fungendo da interfaccia utente.", "Condividere file in una rete."],
        correctAnswer: "Richiedere servizi o risorse, fungendo da interfaccia utente."
    },
    {
        question: "Quali sono i due Web Server più diffusi menzionati nella Guida?",
        options: ["IIS e Tomcat", "Apache e Nginx", "LiteSpeed e Caddy", "Node.js e Express"],
        correctAnswer: "Apache e Nginx"
    },
    {
        question: "Su quale porta TCP opera comunemente il protocollo HTTP secondo la Guida?",
        options: ["443", "8080", "21", "80"],
        correctAnswer: "80" // Menziona anche 8080, ma 80 è primario
    },
    {
        question: "Secondo la Guida, HTTPS opera tipicamente sulla porta TCP:",
        options: ["80", "8080", "443", "22"],
        correctAnswer: "443"
    },
    {
        question: "La Guida menziona XAMPP, MAMP, WAMP come esempi di:",
        options: ["Hosting provider", "Software per installare un ambiente di sviluppo PHP locale", "Browser web", "Database server"],
        correctAnswer: "Software per installare un ambiente di sviluppo PHP locale"
    },
    {
        question: "Nel modello Client-Server descritto, il Web Browser (Chrome, Firefox) è un esempio di:",
        options: ["Server", "Client", "Web Server", "Database Server"],
        correctAnswer: "Client"
    },
    {
        question: "Quale tipo di server è specificamente menzionato nella Guida per la gestione di grandi quantità di dati strutturati?",
        options: ["File Server", "FTP Server", "Print Server", "Database Server"],
        correctAnswer: "Database Server"
    },
    {
        question: "Secondo la Guida, PHP è un linguaggio di scripting:",
        options: ["Client-Side", "Compilato", "Server-Side", "Esclusivo per database"],
        correctAnswer: "Server-Side"
    },
    {
        question: "Qual è l'acronimo ricorsivo di PHP indicato nella Guida?",
        options: ["Personal Home Page", "PHP: Hypertext Preprocessor", "Professional Hypertext Programming", "Precompiled Hypertext Pages"],
        correctAnswer: "PHP: Hypertext Preprocessor"
    },
    {
        question: "La Guida afferma che PHP è 'Interpretato, non Compilato'. Cosa significa?",
        options: ["Il codice viene tradotto in linguaggio macchina prima dell'esecuzione.", "Il codice viene letto ed eseguito riga per riga al momento della richiesta.", "Il codice viene eseguito solo nel browser.", "Il codice deve essere validato da un compilatore."],
        correctAnswer: "Il codice viene letto ed eseguito riga per riga al momento della richiesta."
    },
    // --- Sezione 2: Funzionamento PHP e Interpreti/Compilatori ---
    {
        question: "Nel flusso di elaborazione PHP descritto, quale componente identifica un file `.php` e lo passa all'interprete?",
        options: ["Il Client (Browser)", "Il Database Server", "Il Web Server (es. Apache)", "Il Sistema Operativo"],
        correctAnswer: "Il Web Server (es. Apache)"
    },
    {
        question: "Cosa riceve il Client (browser) alla fine del processo di elaborazione PHP, secondo la Guida?",
        options: ["Il codice sorgente PHP", "L'output generato dallo script (tipicamente HTML)", "Un file .exe compilato", "Il contenuto del file php.ini"],
        correctAnswer: "L'output generato dallo script (tipicamente HTML)"
    },
    {
        question: "Qual è un vantaggio degli interpreti (come PHP) menzionato nella Guida?",
        options: ["Esecuzione più veloce", "Sviluppo più rapido (modifiche immediate)", "Codice sorgente non distribuito", "Non serve l'interprete per eseguire"],
        correctAnswer: "Sviluppo più rapido (modifiche immediate)"
    },
    {
        question: "Qual è uno svantaggio degli interpreti menzionato nella Guida?",
        options: ["Ciclo di sviluppo più lento", "Errori individuati solo alla fine", "Generalmente più lenti nell'esecuzione", "Il codice sorgente non è esposto sul server"],
        correctAnswer: "Generalmente più lenti nell'esecuzione"
    },
    {
        question: "Secondo la Guida, linguaggi come C++ o Java (compilato) utilizzano un:",
        options: ["Interprete", "Compilatore", "Web Server", "Browser"],
        correctAnswer: "Compilatore"
    },
    {
        question: "La Guida specifica che il client non riceve mai il codice sorgente PHP originale. Questo lo differenzia da quale tipo di linguaggio?",
        options: ["Linguaggi compilati", "Linguaggi server-side", "Linguaggi client-side come JavaScript", "Linguaggi di database"],
        correctAnswer: "Linguaggi client-side come JavaScript"
    },
    {
        question: "Secondo la descrizione del flusso, l'interprete PHP può interagire con un database?",
        options: ["No, è compito del Web Server", "Sì, per leggere/scrivere dati", "Solo per leggere dati", "Solo se il database è MySQL"],
        correctAnswer: "Sì, per leggere/scrivere dati"
    },
    {
        question: "Quali estensioni di file, oltre a `.php`, sono menzionate nella Guida come potenzialmente processabili da PHP (a seconda della configurazione)?",
        options: [".html, .css", ".js, .txt", ".php3, .php4, .phtml", ".xml, .json"],
        correctAnswer: ".php3, .php4, .phtml"
    },
    {
        question: "Un vantaggio dei compilatori menzionato è che l'esecuzione è più veloce. Perché?",
        options: ["La traduzione avviene ogni volta", "Il codice è già tradotto in linguaggio macchina (o bytecode)", "Usano meno memoria", "Non interagiscono con il server"],
        correctAnswer: "Il codice è già tradotto in linguaggio macchina (o bytecode)"
    },
    {
        question: "La Guida Pratica (`Esercizi`) specifica dove si trova la cartella `htdocs`?",
        options: ["In MAMP", "In WAMP", "In XAMPP", "Non lo specifica"],
        correctAnswer: "In XAMPP"
    },
    // --- Sezione 3: Sintassi di Base ---
    {
        question: "Qual è il tag di apertura PHP classico e raccomandato nella Guida?",
        options: ["<?", "<%", "<?php", "<script php>"],
        correctAnswer: "<?php"
    },
    {
        question: "Il tag `<?` (Short Tags) è raccomandato dalla Guida?",
        options: ["Sì, è più breve", "Sì, è lo standard moderno", "No, è sconsigliato e spesso disabilitato (`short_open_tag=Off`)", "È obbligatorio per l'echo abbreviato"],
        correctAnswer: "No, è sconsigliato e spesso disabilitato (`short_open_tag=Off`)"
    },
    {
        question: "Il tag `<?=` è descritto nella Guida come:",
        options: ["Stile classico", "Stile abbreviato sconsigliato", "Echo abbreviato (comune e utile)", "Tag per commenti"],
        correctAnswer: "Echo abbreviato (comune e utile)"
    },
    {
        question: "Secondo la Guida, `<?= \"Test\"; ?>` è equivalente a:",
        options: ["<?php print \"Test\"; ?>", "<?php include \"Test\"; ?>", "<?php echo \"Test\"; ?>", "<?php \"Test\"; ?>"],
        correctAnswer: "<?php echo \"Test\"; ?>"
    },
    {
        question: "Quale carattere deve terminare ogni istruzione PHP secondo la Guida?",
        options: [".", ",", ";", ":"],
        correctAnswer: ";"
    },
    {
        question: "Quale simbolo NON è indicato nella Guida per i commenti PHP?",
        options: ["//", "#", "/* ... */", "--"],
        correctAnswer: "--"
    },
    {
        question: "Secondo la sezione sulla Case Sensitivity, quale di questi è case-sensitive?",
        options: ["Nomi di Funzioni (es. `echo`)", "Costrutti di linguaggio (es. `if`)", "Nomi di Variabili (es. `$miaVar`)", "Valori booleani (`TRUE`/`FALSE`)"],
        correctAnswer: "Nomi di Variabili (es. `$miaVar`)"
    },
    {
        question: "La Guida afferma che `echo`, `ECHO`, `EcHo` funzionano tutti allo stesso modo. Questo dimostra che `echo` è:",
        options: ["Case-sensitive", "Una variabile", "Case-insensitive", "Una funzione"],
        correctAnswer: "Case-insensitive"
    },
    {
        question: "Il costrutto `echo` è descritto come:",
        options: ["Una funzione che richiede parentesi", "Un costrutto del linguaggio (parentesi opzionali)", "Un operatore", "Una variabile superglobale"],
        correctAnswer: "Un costrutto del linguaggio (parentesi opzionali)"
    },
    {
        question: "Quale funzione PHP viene indicata per visualizzare la configurazione corrente, inclusa la posizione di `php.ini`?",
        options: ["print_r()", "var_dump()", "phpinfo()", "get_config()"],
        correctAnswer: "phpinfo()"
    },
    {
        question: "Per motivi di sicurezza, come dovrebbe essere impostata la direttiva `display_errors` in un ambiente di produzione (sito live), secondo la Guida?",
        options: ["On", "Off", "E_ALL", "E_NOTICE"],
        correctAnswer: "Off"
    },
    // --- Sezione 4: Variabili e Tipi di Dato ---
    {
        question: "Quale simbolo DEVE iniziare un nome di variabile in PHP?",
        options: ["@", "#", "$", "&"],
        correctAnswer: "$"
    },
    {
        question: "Secondo le regole indicate, quale carattere NON può seguire immediatamente il `$` in un nome di variabile?",
        options: ["Una lettera", "Un underscore (_)", "Un numero", "Nessuna delle precedenti (tutti validi)"],
        correctAnswer: "Un numero" // Deve iniziare con lettera o underscore
    },
    {
        question: "La tipizzazione 'debole/dinamica' di PHP, come spiegato nella Guida, implica che:",
        options: ["Bisogna dichiarare il tipo prima dell'uso (es. `int $quantita;`)", "Il tipo è determinato automaticamente all'assegnamento e può cambiare", "Le variabili possono essere solo stringhe", "I tipi non possono essere convertiti"],
        correctAnswer: "Il tipo è determinato automaticamente all'assegnamento e può cambiare"
    },
    {
        question: "Nell'esempio `$messaggio = \"Benvenuto!\"; $messaggio = 100;`, cosa succede al tipo della variabile `$messaggio`?",
        options: ["Rimane String", "Diventa Integer", "Causa un errore", "Diventa NULL"],
        correctAnswer: "Diventa Integer"
    },
    {
        question: "Quale tipo di dato scalare è usato per numeri interi senza decimali?",
        options: ["Float", "String", "Boolean", "Integer"],
        correctAnswer: "Integer"
    },
    {
        question: "Quale tipo di dato scalare è usato per numeri con la virgola?",
        options: ["Integer", "Float", "String", "Boolean"],
        correctAnswer: "Float"
    },
    {
        question: "Quale funzione PHP restituisce una stringa che descrive il tipo di una variabile (es. 'string', 'integer')?",
        options: ["type()", "var_type()", "gettype()", "typeof()"],
        correctAnswer: "gettype()"
    },
    {
        question: "Il 'Type Juggling' descritto si riferisce a:",
        options: ["La conversione forzata di tipo usando (int), (string), etc.", "La conversione automatica dei tipi tentata da PHP durante le operazioni", "La dichiarazione esplicita dei tipi", "La gestione degli errori di tipo"],
        correctAnswer: "La conversione automatica dei tipi tentata da PHP durante le operazioni"
    },
    {
        question: "Il 'Type Casting' descritto si riferisce a:",
        options: ["La conversione automatica dei tipi", "La conversione esplicita e forzata usando `(int)`, `(string)`, etc.", "Il controllo del tipo di una variabile", "L'assegnamento di un valore"],
        correctAnswer: "La conversione esplicita e forzata usando `(int)`, `(string)`, etc."
    },
    {
        question: "Secondo l'esempio di Juggling `$c = $a + $b;` dove `$a=5` (int) e `$b=\"10\"` (string), quanto vale `$c`?",
        options: ["\"510\"", "15", "Errore", "5"],
        correctAnswer: "15" // PHP converte $b in intero
    },
    {
        question: "Secondo l'esempio di Casting `(int) \"123.45\"`, quale valore intero viene ottenuto?",
        options: ["123.45", "123", "124", "0"],
        correctAnswer: "123" // La parte decimale viene troncata
    },
    {
        question: "Cosa succede, secondo la Guida, se si tenta di usare una variabile non definita (es. `echo $z;`)?",
        options: ["Lo script si interrompe", "Viene trattata come 0", "Genera un errore `Notice` (se visibile) e viene trattata come `NULL`", "Viene creata automaticamente come stringa vuota"],
        correctAnswer: "Genera un errore `Notice` (se visibile) e viene trattata come `NULL`"
    },
    {
        question: "Quale valore booleano si ottiene da `(bool) 0`?",
        options: ["TRUE", "FALSE", "NULL", "1"],
        correctAnswer: "FALSE"
    },
    {
        question: "Quale valore booleano si ottiene da `(bool) \"\"` (stringa vuota)?",
        options: ["TRUE", "FALSE", "NULL", "Errore"],
        correctAnswer: "FALSE"
    },
    // --- Sezione 5: Stringhe ---
    {
        question: "Qual è la differenza fondamentale tra apici singoli (`'`) e doppi (`\"`) evidenziata nella Guida?",
        options: ["I singoli interpretano variabili, i doppi no.", "I doppi interpretano variabili e sequenze di escape, i singoli trattano il contenuto letteralmente (quasi sempre).", "I singoli sono per HTML, i doppi per PHP.", "Non c'è differenza."],
        correctAnswer: "I doppi interpretano variabili e sequenze di escape, i singoli trattano il contenuto letteralmente (quasi sempre)."
    },
    {
        question: "Nell'esempio `$var = \"mondo\"; echo \"Ciao $var\";`, cosa viene stampato?",
        options: ["Ciao $var", "Ciao mondo", "Errore", "Ciao"],
        correctAnswer: "Ciao mondo" // Parsing con doppi apici
    },
    {
        question: "Per includere il valore di un elemento di array complesso in una stringa con doppi apici, quale sintassi è suggerita (es. `{$array['chiave']}`)?",
        options: ["Parentesi quadre `$array[chiave]`", "Parentesi graffe `{$array['chiave']}`", "Concatenazione con il punto", "Apici singoli"],
        correctAnswer: "Parentesi graffe `{$array['chiave']}`"
    },
    {
        question: "Quale operatore si usa per unire (concatenare) stringhe?",
        options: ["+", "&", "*", "."],
        correctAnswer: "."
    },
    {
        question: "Nell'esempio `$saluto = \"Ciao, sono \" . $nome . \" \" . $cognome . \".\";`, l'operatore `.` serve a:",
        options: ["Accedere a un membro dell'oggetto", "Separare i decimali", "Unire le stringhe e le variabili", "Indicare la fine della stringa"],
        correctAnswer: "Unire le stringhe e le variabili"
    },
    {
        question: "Quale carattere di escape `\` è necessario per stampare un apice singolo all'interno di una stringa definita con apici singoli?",
        options: ["\\\"", "\\$", "\\'", "\\\\"],
        correctAnswer: "\\'"
    },
    {
        question: "Quale funzione converte una stringa interamente in minuscolo?",
        options: ["strtoupper()", "strtolower()", "ucfirst()", "lcfirst()"],
        correctAnswer: "strtolower()"
    },
    {
        question: "Quale funzione rimuove spazi (o altri caratteri specificati) dall'inizio E dalla fine di una stringa?",
        options: ["ltrim()", "rtrim()", "trim()", "str_replace()"],
        correctAnswer: "trim()"
    },
    {
        question: "La funzione `strlen()` restituisce la lunghezza di una stringa in:",
        options: ["Caratteri (sempre)", "Parole", "Byte (può differire dai caratteri con UTF-8)", "Righe"],
        correctAnswer: "Byte (può differire dai caratteri con UTF-8)"
    },
    {
        question: "Cosa restituisce `strpos('abcde', 'x')` se 'x' non viene trovata?",
        options: ["-1", "0", "NULL", "FALSE"],
        correctAnswer: "FALSE"
    },
    {
        question: "Quale funzione sostituisce tutte le occorrenze di una sottostringa con un'altra all'interno di una stringa?",
        options: ["strpos()", "substr_replace()", "str_replace()", "preg_replace()"],
        correctAnswer: "str_replace()"
    },
    {
        question: "La funzione `explode()` serve a:",
        options: ["Unire un array in una stringa", "Dividere una stringa in un array basandosi su un delimitatore", "Trovare una sottostringa", "Sostituire parti di una stringa"],
        correctAnswer: "Dividere una stringa in un array basandosi su un delimitatore"
    },
    {
        question: "La funzione `implode()` (o `join()`) serve a:",
        options: ["Dividere una stringa in un array", "Unire gli elementi di un array in una stringa usando un 'collante' (glue)", "Contare gli elementi dell'array", "Invertire l'ordine dell'array"],
        correctAnswer: "Unire gli elementi di un array in una stringa usando un 'collante' (glue)"
    },
    {
        question: "Nell'esempio `$parti_data = explode(\"/\", \"01/02/2024\");`, cosa conterrà `$parti_data[1]`?",
        options: ["\"01\"", "\"/\"", "\"02\"", "\"2024\""],
        correctAnswer: "\"02\""
    },
    // --- Sezione 6: Operatori ---
    {
        question: "Quale operatore aritmetico calcola il resto della divisione intera?",
        options: ["/", "*", "%", "+"],
        correctAnswer: "%"
    },
    {
        question: "L'operatore di assegnamento `*=` in `$a *= 4;` è equivalente a:",
        options: ["$a = $a + 4;", "$a = $a * 4;", "$a = 4;", "$a = $a / 4;"],
        correctAnswer: "$a = $a * 4;"
    },
    {
        question: "Qual è la differenza tra `==` e `===` secondo la Guida?",
        options: ["Nessuna", "`==` controlla solo il tipo, `===` solo il valore", "`==` confronta i valori dopo type juggling, `===` confronta valore E tipo", "`===` è più veloce"],
        correctAnswer: "`==` confronta i valori dopo type juggling, `===` confronta valore E tipo"
    },
    {
        question: "Secondo la Guida, perché è quasi sempre preferibile usare `===` e `!==`?",
        options: ["Sono più corti da scrivere", "Per evitare errori dovuti alla conversione automatica dei tipi (type juggling)", "Funzionano solo con numeri", "Sono case-insensitive"],
        correctAnswer: "Per evitare errori dovuti alla conversione automatica dei tipi (type juggling)"
    },
    {
        question: "Cosa restituisce l'operatore di pre-incremento `++$a`?",
        options: ["Il valore di $a PRIMA dell'incremento", "Il valore di $a DOPO averlo incrementato di 1", "Sempre 1", "TRUE"],
        correctAnswer: "Il valore di $a DOPO averlo incrementato di 1"
    },
    {
        question: "Cosa restituisce l'operatore di post-incremento `$a++`?",
        options: ["Il valore di $a PRIMA di incrementarlo di 1", "Il valore di $a DOPO l'incremento", "Sempre 1", "TRUE"],
        correctAnswer: "Il valore di $a PRIMA di incrementarlo di 1"
    },
    {
        question: "Quale operatore logico useresti per verificare se `$eta >= 18` E `$ha_patente == TRUE`?",
        options: ["|| (or)", "!", "xor", "&& (and)"],
        correctAnswer: "&& (and)"
    },
    {
        question: "Quale operatore logico useresti per verificare se `$colore == 'rosso'` O `$colore == 'blu'`?",
        options: ["&& (and)", "!", "|| (or)", "xor"],
        correctAnswer: "|| (or)"
    },
    {
        question: "L'operatore `!` (NOT logico) cosa fa a un valore booleano?",
        options: ["Lo converte in 1 o 0", "Lo lascia invariato", "Inverte il suo valore (TRUE diventa FALSE, FALSE diventa TRUE)", "Lo converte in stringa"],
        correctAnswer: "Inverte il suo valore (TRUE diventa FALSE, FALSE diventa TRUE)"
    },
    {
        question: "Nella sintassi dell'operatore ternario `(condizione) ? val_true : val_false;`, cosa viene restituito se `condizione` è FALSE?",
        options: ["val_true", "val_false", "NULL", "TRUE"],
        correctAnswer: "val_false"
    },
    {
        question: "Nell'esempio `$status = ($eta >= 18) ? \"Maggiorenne\" : \"Minorenne\";`, se `$eta` è 20, quale valore avrà `$status`?",
        options: ["Maggiorenne", "Minorenne", "TRUE", "NULL"],
        correctAnswer: "Maggiorenne"
    },
    // --- Sezione 7: Strutture di Controllo ---
    {
        question: "Quale parola chiave introduce un blocco di codice eseguito solo se la condizione `if` è falsa?",
        options: ["elseif", "switch", "else", "default"],
        correctAnswer: "else"
    },
    {
        question: "La parola chiave `elseif` (o `else if`) permette di:",
        options: ["Terminare un ciclo", "Definire il caso di default in uno switch", "Controllare una condizione aggiuntiva se la precedente condizione `if` (o `elseif`) era falsa", "Eseguire codice indipendentemente dalla condizione `if`"],
        correctAnswer: "Controllare una condizione aggiuntiva se la precedente condizione `if` (o `elseif`) era falsa"
    },
    {
        question: "Nello `switch`, la keyword `case` è seguita da:",
        options: ["Una condizione booleana", "Un valore specifico con cui confrontare la variabile dello switch", "La keyword `then`", "Il nome di una funzione"],
        correctAnswer: "Un valore specifico con cui confrontare la variabile dello switch"
    },
    {
        question: "Qual è lo scopo dell'istruzione `break` all'interno di un `case` dello `switch`, secondo la Guida?",
        options: ["Passare al case successivo", "Uscire immediatamente dalla struttura `switch`", "Terminare lo script", "Ripetere il case"],
        correctAnswer: "Uscire immediatamente dalla struttura `switch`"
    },
    {
        question: "Il blocco `default` in uno `switch` viene eseguito quando:",
        options: ["Sempre, alla fine", "Solo se il primo `case` corrisponde", "Nessuno dei `case` precedenti ha corrisposto", "Solo se si omette `break`"],
        correctAnswer: "Nessuno dei `case` precedenti ha corrisposto"
    },
    {
        question: "La sintassi alternativa per le strutture condizionali (es. `if(): ... endif;`) è particolarmente utile, come indicato, quando:",
        options: ["Si usano funzioni complesse", "Si lavora con i database", "Si mescola codice PHP con blocchi di HTML (template)", "Si vuole ottimizzare la velocità"],
        correctAnswer: "Si mescola codice PHP con blocchi di HTML (template)"
    },
    {
        question: "Nel ciclo `for (inizializzazione; condizione; incremento)`, quando viene valutata la `condizione`?",
        options: ["Solo all'inizio", "Solo alla fine di ogni iterazione", "Prima di ogni iterazione (incluso la prima)", "Dopo ogni incremento"],
        correctAnswer: "Prima di ogni iterazione (incluso la prima)"
    },
    {
        question: "Nel ciclo `for (inizializzazione; condizione; incremento)`, quando viene eseguita l'`inizializzazione`?",
        options: ["Prima di ogni iterazione", "Alla fine di ogni iterazione", "Una sola volta, prima dell'inizio del ciclo", "Solo se la condizione è vera"],
        correctAnswer: "Una sola volta, prima dell'inizio del ciclo"
    },
    {
        question: "Quale ciclo è ideale, secondo la Guida, quando la condizione di uscita dipende da fattori che cambiano *dentro* il ciclo?",
        options: ["for", "foreach", "while", "switch"],
        correctAnswer: "while"
    },
    {
        question: "Qual è la differenza principale tra `while` e `do...while`?",
        options: ["`while` esegue il blocco almeno una volta, `do...while` no", "`do...while` esegue il blocco almeno una volta, `while` potrebbe non eseguirlo mai", "`while` è per numeri, `do...while` per stringhe", "Non c'è differenza funzionale"],
        correctAnswer: "`do...while` esegue il blocco almeno una volta, `while` potrebbe non eseguirlo mai"
    },
    {
        question: "Il ciclo `foreach` è specificamente indicato per iterare su:",
        options: ["Numeri interi", "Stringhe", "Array", "Risorse file"],
        correctAnswer: "Array"
    },
    {
        question: "Nella sintassi `foreach ($capitali as $nazione => $citta)`, `$nazione` conterrà:",
        options: ["Il valore (es. 'Roma')", "La chiave (es. 'Italia')", "L'indice numerico", "L'intero array `$capitali`"],
        correctAnswer: "La chiave (es. 'Italia')"
    },
    {
        question: "Nella sintassi `foreach ($colori as $colore)`, `$colore` conterrà:",
        options: ["L'indice numerico", "La chiave", "Il valore dell'elemento corrente", "Sempre TRUE"],
        correctAnswer: "Il valore dell'elemento corrente"
    },
    {
        question: "La Guida mette in guardia sui 'Loop Infiniti'. In quale ciclo è FONDAMENTALE assicurarsi che la variabile di controllo venga modificata all'interno del blocco per evitare questo problema?",
        options: ["for (con incremento/decremento corretto)", "foreach", "while / do...while", "switch"],
        correctAnswer: "while / do...while"
    },
    // --- Sezione 8: Array ---
    {
        question: "Quale tipo di array usa indici numerici interi che partono da 0?",
        options: ["Array Associativi", "Array Multidimensionali", "Array Numerici (o Indicizzati)", "Array Misti"],
        correctAnswer: "Array Numerici (o Indicizzati)"
    },
    {
        question: "Quale tipo di array usa chiavi di tipo stringa (o intero) per identificare gli elementi?",
        options: ["Array Numerici", "Array Associativi", "Array Vuoti", "Array Scalari"],
        correctAnswer: "Array Associativi"
    },
    {
        question: "Quale sintassi moderna (da PHP 5.4+) è preferita per creare array, secondo la Guida?",
        options: ["array()", "new Array()", "[]", "{}"],
        correctAnswer: "[]"
    },
    {
        question: "Nell'esempio `$frutta[] = \"Mela\";`, cosa fa `[]`?",
        options: ["Accede al primo elemento", "Crea una chiave vuota", "Aggiunge \"Mela\" alla fine dell'array con un indice numerico automatico", "Rimuove l'ultimo elemento"],
        correctAnswer: "Aggiunge \"Mela\" alla fine dell'array con un indice numerico automatico"
    },
    {
        question: "Se si esegue `$utente[\"username\"] = \"john_doe_101\";` su un array `$utente` che già contiene la chiave `\"username\"`, cosa succede?",
        options: ["Viene aggiunto un secondo elemento 'username'", "Viene generato un errore", "Il valore precedente associato a 'username' viene sovrascritto", "Viene creata una nuova chiave 'username1'"],
        correctAnswer: "Il valore precedente associato a 'username' viene sovrascritto"
    },
    {
        question: "Come si accede al valore associato alla chiave 'cognome' nell'array `$persona = [\"nome\" => \"Mario\", \"cognome\" => \"Rossi\"];`?",
        options: ["$persona('cognome')", "$persona->cognome", "$persona[\"cognome\"] (o $persona['cognome'])", "$persona.cognome"],
        correctAnswer: "$persona[\"cognome\"] (o $persona['cognome'])"
    },
    {
        question: "Quale funzione è preferibile per il debug degli array perché fornisce informazioni più dettagliate (tipi, lunghezze), secondo la Guida?",
        options: ["echo", "print", "print_r()", "var_dump()"],
        correctAnswer: "var_dump()"
    },
    {
        question: "Il tag HTML `<pre>` viene spesso usato con `print_r` o `var_dump` perché:",
        options: ["Accelera la stampa", "Formatta l'output dell'array in modo più leggibile nel browser", "Nasconde l'output", "Converte l'array in JSON"],
        correctAnswer: "Formatta l'output dell'array in modo più leggibile nel browser"
    },
    {
        question: "Cosa fa `unset($array[key])`?",
        options: ["Imposta il valore a NULL", "Rimuove l'elemento con la chiave specificata dall'array", "Svuota l'intero array", "Restituisce il valore dell'elemento"],
        correctAnswer: "Rimuove l'elemento con la chiave specificata dall'array"
    },
    {
        question: "La funzione `count($array)` restituisce:",
        options: ["L'indice massimo + 1", "La somma dei valori (se numerici)", "Il numero di elementi nell'array", "TRUE se l'array non è vuoto"],
        correctAnswer: "Il numero di elementi nell'array"
    },
    {
        question: "La funzione `in_array($needle, $haystack)` verifica l'esistenza di:",
        options: ["Una chiave `$needle` nell'array `$haystack`", "Un valore `$needle` nell'array `$haystack`", "Un indice `$needle` nell'array `$haystack`", "Un tipo `$needle` nell'array `$haystack`"],
        correctAnswer: "Un valore `$needle` nell'array `$haystack`"
    },
    {
        question: "La funzione `array_key_exists($key, $array)` verifica l'esistenza di:",
        options: ["Una chiave `$key` nell'array `$array`", "Un valore `$key` nell'array `$array`", "Un indice `$key` nell'array `$array`", "Un tipo `$key` nell'array `$array`"],
        correctAnswer: "Una chiave `$key` nell'array `$array`"
    },
    {
        question: "Quale funzione, secondo la Guida, mescola gli elementi di un array in ordine casuale modificando l'array originale?",
        options: ["array_reverse()", "sort()", "array_rand()", "shuffle()"],
        correctAnswer: "shuffle()"
    },
    {
        question: "La funzione `array_reverse()`:",
        options: ["Modifica l'array originale invertendolo", "Restituisce un *nuovo* array con gli elementi in ordine inverso", "Ordina l'array al contrario", "Mescola l'array"],
        correctAnswer: "Restituisce un *nuovo* array con gli elementi in ordine inverso"
    },
    {
        question: "Come si comporta `array_merge()` con chiavi numeriche duplicate?",
        options: ["Sovrascrive i valori", "Mantiene solo il primo valore", "Gli elementi vengono aggiunti in coda e re-indicizzati", "Genera un errore"],
        correctAnswer: "Gli elementi vengono aggiunti in coda e re-indicizzati"
    },
    {
        question: "La funzione `array_slice($array, $offset, $length)` estrae:",
        options: ["Tutti gli elementi tranne quelli nella porzione specificata", "Una porzione dell'array specificata da offset e lunghezza", "Elementi casuali", "Solo le chiavi della porzione"],
        correctAnswer: "Una porzione dell'array specificata da offset e lunghezza"
    },
    {
        question: "Quale funzione restituisce un array contenente solo le chiavi dell'array originale?",
        options: ["array_values()", "array_keys()", "array_flip()", "array_key_exists()"],
        correctAnswer: "array_keys()"
    },
    {
        question: "Quale funzione restituisce un array contenente solo i valori dell'array originale, re-indicizzato numericamente?",
        options: ["array_keys()", "array_values()", "array_map()", "array_filter()"],
        correctAnswer: "array_values()"
    },
    {
        question: "Perché `foreach` è spesso preferito a `for` per iterare sugli array, secondo la Guida?",
        options: ["È più veloce", "Non ci si deve preoccupare degli indici (specialmente se non sequenziali o associativi)", "Funziona solo con array numerici", "Permette di modificare l'array durante l'iterazione"],
        correctAnswer: "Non ci si deve preoccupare degli indici (specialmente se non sequenziali o associativi)"
    },
    // --- Sezione 9: Funzioni ---
    {
        question: "Quale NON è un motivo per usare le funzioni menzionato nella Guida?",
        options: ["Riusabilità", "Organizzazione", "Aumento garantito della velocità di esecuzione", "Manutenibilità"],
        correctAnswer: "Aumento garantito della velocità di esecuzione"
    },
    {
        question: "Le funzioni `strlen()`, `count()` sono definite:",
        options: ["Dall'utente (User-Defined)", "Da PHP (Built-in)", "Dal web server", "Nel file `composer.json`"],
        correctAnswer: "Da PHP (Built-in)"
    },
    {
        question: "Cosa definisce la sintassi `function nomeFunzione(parametro1, parametro2)`?",
        options: ["La chiamata a una funzione", "La definizione di una funzione con i suoi parametri", "Un ciclo", "Un array"],
        correctAnswer: "La definizione di una funzione con i suoi parametri"
    },
    {
        question: "L'istruzione `return $risultato;` all'interno di una funzione serve a:",
        options: ["Stampare il risultato", "Terminare lo script", "Restituire il valore `$risultato` al punto in cui la funzione è stata chiamata", "Definire un parametro"],
        correctAnswer: "Restituire il valore `$risultato` al punto in cui la funzione è stata chiamata"
    },
    {
        question: "In `somma(5, 3);`, `5` e `3` sono:",
        options: ["Parametri", "Argomenti", "Valori di ritorno", "Tipi di dato"],
        correctAnswer: "Argomenti"
    },
    {
        question: "In `function somma($a, $b)`, `$a` e `$b` sono:",
        options: ["Argomenti", "Parametri", "Costanti", "Stringhe"],
        correctAnswer: "Parametri"
    },
    {
        question: "Nella definizione `function fare_il_caffe($tipo = \"cappuccino\")`, `$tipo` è opzionale?",
        options: ["No, è obbligatorio", "Sì, se non passato assumerà il valore di default \"cappuccino\"", "Sì, se non passato assumerà il valore NULL", "Diventa obbligatorio solo se si passa null"],
        correctAnswer: "Sì, se non passato assumerà il valore di default \"cappuccino\""
    },
    {
        question: "Dove devono essere posizionati i parametri con valori di default nella lista dei parametri di una funzione?",
        options: ["All'inizio", "In mezzo", "Alla fine", "Non importa l'ordine"],
        correctAnswer: "Alla fine"
    },
    {
        question: "L'operatore `...` (variadic) in `function somma_tutto(...$numeri)` fa sì che `$numeri` sia:",
        options: ["L'ultimo numero passato", "Un array contenente tutti gli argomenti passati da quel punto in poi", "Una stringa concatenata", "Il numero totale di argomenti"],
        correctAnswer: "Un array contenente tutti gli argomenti passati da quel punto in poi"
    },
    {
        question: "Il 'Type Hinting' (es. `function moltiplica(float $a, float $b)`) permette di:",
        options: ["Cambiare il tipo della variabile", "Specificare il tipo di dato atteso per un parametro", "Garantire che la funzione sia veloce", "Commentare il codice"],
        correctAnswer: "Specificare il tipo di dato atteso per un parametro"
    },
    {
        question: "La sintassi `: float` dopo i parametri (es. `): float { ... }`) specifica:",
        options: ["Il tipo dell'ultimo parametro", "Il tipo di dato che la funzione deve restituire", "Che la funzione accetta solo float", "Un commento"],
        correctAnswer: "Il tipo di dato che la funzione deve restituire"
    },
    {
        question: "Cosa fa `declare(strict_types=1);` all'inizio del file?",
        options: ["Permette solo codice OOP", "Disabilita le conversioni di tipo automatiche per i type hint, rendendoli più rigorosi", "Abilita i tag abbreviati", "Forza l'uso di `return`"],
        correctAnswer: "Disabilita le conversioni di tipo automatiche per i type hint, rendendoli più rigorosi"
    },
    // --- Sezione 10: Scope ---
    {
        question: "Una variabile dichiarata all'interno di una funzione ha scope:",
        options: ["Globale", "Locale (accessibile solo dentro quella funzione)", "Superglobale", "Statico"],
        correctAnswer: "Locale (accessibile solo dentro quella funzione)"
    },
    {
        question: "Una variabile dichiarata fuori da qualsiasi funzione ha scope:",
        options: ["Locale", "Globale", "Solo per lo script corrente", "Nessuno"],
        correctAnswer: "Globale"
    },
    {
        question: "Di default, una variabile globale è accessibile direttamente all'interno di una funzione?",
        options: ["Sì, sempre", "No, non senza usare `global` o `$GLOBALS`", "Solo se la funzione non ha parametri", "Solo se la variabile è numerica"],
        correctAnswer: "No, non senza usare `global` o `$GLOBALS`"
    },
    {
        question: "La keyword `global $var;` all'interno di una funzione:",
        options: ["Crea una nuova variabile locale chiamata $var", "Dichiara che `$var` all'interno della funzione si riferisce alla variabile globale `$var`", "Stampa il valore della variabile globale", "È un errore di sintassi"],
        correctAnswer: "Dichiara che `$var` all'interno della funzione si riferisce alla variabile globale `$var`"
    },
    {
        question: "L'array superglobale `$GLOBALS` è descritto come:",
        options: ["Un array contenente le variabili locali", "Un array associativo contenente tutte le variabili globali", "Un alias per `$_SERVER`", "Un modo per definire costanti"],
        correctAnswer: "Un array associativo contenente tutte le variabili globali"
    },
    {
        question: "Come si accede alla variabile globale `$x` usando l'array `$GLOBALS`?",
        options: ["$GLOBALS($x)", "$GLOBALS.$x", "$GLOBALS['x']", "get_global('x')"],
        correctAnswer: "$GLOBALS['x']"
    },
    {
        question: "Perché la Guida suggerisce cautela nell'uso di `global` e `$GLOBALS`?",
        options: ["Sono lenti", "Possono rendere il codice difficile da seguire e manutenere", "Funzionano solo con stringhe", "Sono deprecati"],
        correctAnswer: "Possono rendere il codice difficile da seguire e manutenere"
    },
    {
        question: "Quale caratteristica distingue le variabili superglobali (`$_GET`, `$_POST`, etc.)?",
        options: ["Sono sempre stringhe", "Sono accessibili da qualsiasi scope senza bisogno di `global`", "Possono essere modificate solo nello scope globale", "Contengono solo numeri"],
        correctAnswer: "Sono accessibili da qualsiasi scope senza bisogno di `global`"
    },
    {
        question: "Quale superglobale contiene informazioni sul server e sull'ambiente di esecuzione?",
        options: ["$_GET", "$_SESSION", "$_SERVER", "$_FILES"],
        correctAnswer: "$_SERVER"
    },
    {
        question: "Quale chiave di `$_SERVER` contiene il metodo della richiesta (es. 'GET', 'POST')?",
        options: ["QUERY_STRING", "REQUEST_URI", "REQUEST_METHOD", "HTTP_HOST"],
        correctAnswer: "REQUEST_METHOD"
    },
    {
        question: "Quale superglobale contiene le variabili passate tramite la query string dell'URL?",
        options: ["$_POST", "$_COOKIE", "$_GET", "$_SESSION"],
        correctAnswer: "$_GET"
    },
    {
        question: "Quale superglobale contiene le variabili inviate nel corpo di una richiesta POST da un form?",
        options: ["$_GET", "$_POST", "$_FILES", "$_ENV"],
        correctAnswer: "$_POST"
    },
    {
        question: "Quale superglobale contiene informazioni sui file caricati tramite metodo POST?",
        options: ["$_POST", "$_SESSION", "$_SERVER", "$_FILES"],
        correctAnswer: "$_FILES"
    },
    {
        question: "Quale superglobale contiene i cookie inviati dal browser?",
        options: ["$_GET", "$_SESSION", "$_GLOBALS", "$_COOKIE"],
        correctAnswer: "$_COOKIE"
    },
    {
        question: "Quale superglobale contiene le variabili di sessione?",
        options: ["$_COOKIE", "$_GLOBALS", "$_SESSION", "$_POST"],
        correctAnswer: "$_SESSION"
    },
    // --- Sezione 11: Interazione Web ---
    {
        question: "Il protocollo HTTP è definito 'stateless'. Cosa implica questo per la gestione dello stato utente?",
        options: ["Che lo stato è gestito automaticamente dal browser.", "Che il server ricorda tutto di default.", "Che sono necessari meccanismi come Cookie e Sessioni per mantenere informazioni tra richieste.", "Che le connessioni sono sempre criptate."],
        correctAnswer: "Che sono necessari meccanismi come Cookie e Sessioni per mantenere informazioni tra richieste."
    },
    {
        question: "Quale metodo HTTP è descritto come adatto per recuperare dati, con parametri visibili nell'URL?",
        options: ["POST", "PUT", "DELETE", "GET"],
        correctAnswer: "GET"
    },
    {
        question: "Quale metodo HTTP è descritto come adatto per inviare dati sensibili o grandi quantità da un form, con dati nel corpo della richiesta?",
        options: ["GET", "HEAD", "POST", "OPTIONS"],
        correctAnswer: "POST"
    },
    {
        question: "La 'Query String' in un URL si trova:",
        options: ["Prima del nome dominio", "Dopo il simbolo `?`, come coppie `nome=valore` separate da `&`", "Nell'header HTTP", "Prima del percorso dello script"],
        correctAnswer: "Dopo il simbolo `?`, come coppie `nome=valore` separate da `&`"
    },
    {
        question: "Nell'URL `pagina.php?id=123&cat=libri`, quale valore avrà `$_GET['cat']`?",
        options: ["123", "'libri'", "'cat=libri'", "NULL"],
        correctAnswer: "'libri'"
    },
    {
        question: "Perché è cruciale validare e sanificare sempre i dati provenienti da `$_GET` e `$_POST`, secondo la Guida?",
        options: ["Per renderli più veloci", "Perché provengono dall'utente e non ci si può fidare, per prevenire vulnerabilità (XSS, SQL Injection, etc.)", "Per convertirli in maiuscolo", "Perché PHP lo richiede obbligatoriamente"],
        correctAnswer: "Perché provengono dall'utente e non ci si può fidare, per prevenire vulnerabilità (XSS, SQL Injection, etc.)"
    },
    {
        question: "Nel tag `<form>`, l'attributo `method` specifica:",
        options: ["Lo script che processerà i dati", "Il metodo HTTP (`get` o `post`) da usare per inviare i dati", "Il tipo di codifica", "Il nome del form"],
        correctAnswer: "Il metodo HTTP (`get` o `post`) da usare per inviare i dati"
    },
    {
        question: "Quale attributo dell'elemento `<input>` è FONDAMENTALE perché il suo valore diventi una chiave in `$_GET` o `$_POST`?",
        options: ["id", "type", "value", "name"],
        correctAnswer: "name"
    },
    {
        question: "Quale `type` di `<input>` si usa per un bottone che invia il form?",
        options: ["button", "reset", "submit", "send"],
        correctAnswer: "submit"
    },
    {
        question: "Quale `type` di `<input>` si usa per inviare dati non visibili all'utente?",
        options: ["text", "password", "hidden", "invisible"],
        correctAnswer: "hidden"
    },
    {
        question: "Nell'esempio di script `processa_form.php`, quale chiave di `$_SERVER` viene controllata per verificare se la richiesta è POST?",
        options: ["PHP_SELF", "HTTP_HOST", "REQUEST_METHOD", "REMOTE_ADDR"],
        correctAnswer: "REQUEST_METHOD"
    },
    {
        question: "Nell'esempio `processa_form.php`, cosa viene fatto ai dati prima di stamparli con `echo`?",
        options: ["Vengono criptati", "Vengono validati con `filter_var`", "Vengono sanificati con `htmlspecialchars`", "Vengono convertiti in maiuscolo"],
        correctAnswer: "Vengono sanificati con `htmlspecialchars`"
    },
    {
        question: "Per inviare i dati di `persona[nome]` e `persona[cognome]` da un form, come sarà accessibile 'nome' in PHP se il metodo è POST?",
        options: ["$_POST['persona[nome]']", "$_POST['persona']['nome']", "$_POST['nome']", "$_POST->persona->nome"],
        correctAnswer: "$_POST['persona']['nome']"
    },
    {
        question: "Per inviare più valori da checkboxes `hobbies[]`, come sarà la struttura di `$_POST['hobbies']`?",
        options: ["Una stringa separata da virgole", "Un array numerico contenente i valori delle checkbox selezionate", "Un array associativo", "Il valore dell'ultima checkbox"],
        correctAnswer: "Un array numerico contenente i valori delle checkbox selezionate"
    },
    // --- Sezione 11.6: Sanificazione e Validazione ---
    {
        question: "Quale delle due operazioni (sanificazione/validazione) si occupa di Rimuovere/Codificare caratteri potenzialmente dannosi?",
        options: ["Validazione", "Sanificazione", "Entrambe allo stesso modo", "Nessuna delle due"],
        correctAnswer: "Sanificazione"
    },
    {
        question: "Quale delle due operazioni (sanificazione/validazione) si occupa di Controllare che i dati siano nel formato/range atteso?",
        options: ["Validazione", "Sanificazione", "Entrambe allo stesso modo", "Nessuna delle due"],
        correctAnswer: "Validazione"
    },
    {
        question: "Quale funzione PHP è specificamente indicata nella Guida per filtrare (sanificare/validare) una variabile specifica?",
        options: ["htmlspecialchars()", "strip_tags()", "filter_var()", "preg_match()"],
        correctAnswer: "filter_var()"
    },
    {
        question: "Quale costante filtro di `filter_var` è menzionata per Rimuovere caratteri non validi per un indirizzo email?",
        options: ["FILTER_VALIDATE_EMAIL", "FILTER_SANITIZE_URL", "FILTER_SANITIZE_EMAIL", "FILTER_SANITIZE_STRING"],
        correctAnswer: "FILTER_SANITIZE_EMAIL"
    },
    {
        question: "Quale costante filtro di `filter_var` è menzionata per Rimuovere tutto tranne cifre e segni +/-?",
        options: ["FILTER_VALIDATE_INT", "FILTER_SANITIZE_NUMBER_FLOAT", "FILTER_SANITIZE_NUMBER_INT", "FILTER_SANITIZE_SPECIAL_CHARS"],
        correctAnswer: "FILTER_SANITIZE_NUMBER_INT"
    },
    {
        question: "Quale costante filtro di `filter_var` è menzionata per Verificare se un valore è un indirizzo email valido?",
        options: ["FILTER_SANITIZE_EMAIL", "FILTER_VALIDATE_URL", "FILTER_VALIDATE_EMAIL", "FILTER_VALIDATE_STRING"],
        correctAnswer: "FILTER_VALIDATE_EMAIL"
    },
    {
        question: "Cosa restituisce `filter_var($email, FILTER_VALIDATE_EMAIL)` se l'email NON è valida?",
        options: ["NULL", "La stringa originale", "Una stringa vuota", "FALSE"],
        correctAnswer: "FALSE"
    },
    {
        question: "Quale costante filtro di `filter_var` è menzionata per Verificare se un valore è un intero (opzionalmente in un range)?",
        options: ["FILTER_SANITIZE_NUMBER_INT", "FILTER_VALIDATE_INT", "FILTER_VALIDATE_FLOAT", "FILTER_VALIDATE_BOOLEAN"],
        correctAnswer: "FILTER_VALIDATE_INT"
    },
    {
        question: "Nell'esempio di validazione dell'età, come viene passato il range (1-120) a `filter_var` con `FILTER_VALIDATE_INT`?",
        options: ["Come secondo argomento", "Come quarto argomento", "Dentro un array nel terzo argomento `options` con chiavi `min_range` e `max_range`", "Non è possibile specificare un range"],
        correctAnswer: "Dentro un array nel terzo argomento `options` con chiavi `min_range` e `max_range`"
    },
    {
        question: "La Guida Pratica (`Esercizi`) usa `trim()` prima della validazione. Perché?",
        options: ["Per convertire in minuscolo", "Per rimuovere spazi bianchi iniziali/finali che potrebbero invalidare un campo altrimenti corretto", "Per contare i caratteri", "Per aggiungere spazi"],
        correctAnswer: "Per rimuovere spazi bianchi iniziali/finali che potrebbero invalidare un campo altrimenti corretto"
    },
    {
        question: "Nella Guida Pratica (`Esercizi`), la funzione `empty()` viene usata per controllare se:",
        options: ["Una variabile è definita", "Una variabile è NULL", "Una variabile è considerata 'vuota' (es. '', 0, NULL, FALSE, array vuoto)", "Una variabile è una stringa"],
        correctAnswer: "Una variabile è considerata 'vuota' (es. '', 0, NULL, FALSE, array vuoto)"
    },
    // --- Sezione 12: Cookie e Sessioni ---
    {
        question: "Dove vengono memorizzati i Cookie, secondo la Guida?",
        options: ["Sul server", "Nel database", "Sul computer del client (nel browser)", "Nello script PHP"],
        correctAnswer: "Sul computer del client (nel browser)"
    },
    {
        question: "Qual è uno scopo principale dei Cookie menzionato nella Guida?",
        options: ["Eseguire codice PHP nel browser", "Identificare l'utente o memorizzare preferenze tra le visite", "Memorizzare grandi quantità di dati", "Criptare la comunicazione"],
        correctAnswer: "Identificare l'utente o memorizzare preferenze tra le visite"
    },
    {
        question: "Quale funzione PHP si usa per creare o modificare un Cookie?",
        options: ["$_COOKIE()", "create_cookie()", "setcookie()", "session_set_cookie()"],
        correctAnswer: "setcookie()"
    },
    {
        question: "Quando deve essere chiamata la funzione `setcookie()`, secondo la Guida?",
        options: ["Alla fine dello script", "Dopo il tag </html>", "Prima di qualsiasi output HTML o echo", "Dentro una funzione"],
        correctAnswer: "Prima di qualsiasi output HTML o echo"
    },
    {
        question: "Quale parametro di `setcookie()` definisce quando il cookie scadrà?",
        options: ["nome", "valore", "scadenza (timestamp UNIX)", "percorso"],
        correctAnswer: "scadenza (timestamp UNIX)"
    },
    {
        question: "Cosa succede se si omette il parametro `scadenza` (o si imposta a 0) in `setcookie()`?",
        options: ["Il cookie dura per sempre", "Viene creato un cookie di sessione (scade alla chiusura del browser)", "Viene generato un errore", "Il cookie dura 1 ora"],
        correctAnswer: "Viene creato un cookie di sessione (scade alla chiusura del browser)"
    },
    {
        question: "Il parametro `percorso` (es. `/`) in `setcookie()` definisce:",
        options: ["Il file system del server", "Il percorso sul server per cui il cookie è valido", "Il dominio del cookie", "Il tipo di cookie"],
        correctAnswer: "Il percorso sul server per cui il cookie è valido"
    },
    {
        question: "Il parametro booleano `httponly` in `setcookie()`, se TRUE, previene:",
        options: ["L'invio del cookie su HTTP", "L'accesso al cookie tramite JavaScript", "La scadenza del cookie", "La modifica del cookie"],
        correctAnswer: "L'accesso al cookie tramite JavaScript"
    },
    {
        question: "Dove vengono memorizzati i dati delle Sessioni, secondo la Guida?",
        options: ["Sul client", "Sul server (default: file temporanei)", "In entrambi", "Nell'URL"],
        correctAnswer: "Sul server (default: file temporanei)"
    },
    {
        question: "Quale funzione DEVE essere chiamata all'inizio di ogni script che usa le sessioni (prima di output)?",
        options: ["session_id()", "session_start()", "session_destroy()", "session_commit()"],
        correctAnswer: "session_start()"
    },
    {
        question: "Come funziona il meccanismo di sessione descritto?",
        options: ["Memorizza tutto nell'URL", "PHP invia tutti i dati al client a ogni richiesta", "PHP usa un ID di sessione (solitamente in un cookie) per associare il client ai dati memorizzati sul server", "I dati sono memorizzati solo in `$GLOBALS`"],
        correctAnswer: "PHP usa un ID di sessione (solitamente in un cookie) per associare il client ai dati memorizzati sul server"
    },
    {
        question: "Quale array superglobale si usa per leggere e scrivere dati nella sessione corrente?",
        options: ["$_COOKIE", "$_GET", "$_SERVER", "$_SESSION"],
        correctAnswer: "$_SESSION"
    },
    {
        question: "La funzione `session_unset()` cosa fa?",
        options: ["Distrugge la sessione sul server", "Rimuove tutte le variabili DALL'ARRAY `$_SESSION` corrente", "Elimina il cookie di sessione", "Rigenera l'ID di sessione"],
        correctAnswer: "Rimuove tutte le variabili DALL'ARRAY `$_SESSION` corrente"
    },
    {
        question: "La funzione `session_destroy()` cosa fa?",
        options: ["Svuota l'array `$_SESSION`", "Distrugge tutti i dati associati alla sessione SUL SERVER", "Elimina solo il cookie", "Reindirizza l'utente"],
        correctAnswer: "Distrugge tutti i dati associati alla sessione SUL SERVER"
    },
    {
        question: "Nell'esempio di logout, perché si suggerisce di eliminare anche il cookie di sessione?",
        options: ["Per liberare spazio sul client (buona pratica)", "Perché `session_destroy` non lo fa", "Per evitare che venga riutilizzato subito", "Entrambe le risposte (a) e (b) sono pertinenti al contesto dell'esempio"],
        correctAnswer: "Entrambe le risposte (a) e (b) sono pertinenti al contesto dell'esempio" // Testo implica entrambe
    },
    {
        question: "Qual è un vantaggio delle Sessioni rispetto ai Cookie menzionato?",
        options: ["Minore carico sul server", "Funzionano anche con cookie disabilitati", "Maggiore sicurezza per dati sensibili (dati sul server)", "Non scadono mai"],
        correctAnswer: "Maggiore sicurezza per dati sensibili (dati sul server)"
    },
    {
        question: "Qual è uno svantaggio delle Sessioni menzionato?",
        options: ["Limite di 4KB", "Visibilità dei dati nell'URL", "Carico sul server e dipendenza dall'ID (solitamente cookie)", "Impossibilità di memorizzare array"],
        correctAnswer: "Carico sul server e dipendenza dall'ID (solitamente cookie)"
    },
    {
        question: "Nell'esempio di autenticazione, quale funzione viene usata per creare l'hash della password?",
        options: ["md5()", "password_hash()", "password_verify()", "encrypt()"],
        correctAnswer: "password_hash()"
    },
    {
        question: "Nell'esempio di autenticazione, quale funzione viene usata per confrontare la password inserita con l'hash memorizzato?",
        options: ["password_hash()", "hash_equals()", "password_verify()", "compare_hash()"],
        correctAnswer: "password_verify()"
    },
    {
        question: "Nell'esempio di autenticazione (`processa_login.php`), cosa fa `session_regenerate_id(true)`?",
        options: ["Distrugge la sessione", "Svuota l'array `$_SESSION`", "Rigenera l'ID di sessione (per sicurezza contro session fixation)", "Controlla se l'ID è valido"],
        correctAnswer: "Rigenera l'ID di sessione (per sicurezza contro session fixation)"
    },
    {
        question: "Nell'esempio `menu.php` (pagina protetta), come si verifica se l'utente è loggato?",
        options: ["Controllando `$_COOKIE`", "Controllando se esiste una specifica variabile in `$_SESSION` (es. `isset($_SESSION['utente_loggato'])`)", "Controllando `$_GET`", "Chiamando `is_logged_in()`"],
        correctAnswer: "Controllando se esiste una specifica variabile in `$_SESSION` (es. `isset($_SESSION['utente_loggato'])`)"
    },
    {
        question: "Qual è il nome del cookie predefinito menzionato che solitamente contiene l'ID di sessione?",
        options: ["SESSIONID", "USERCOOKIE", "PHPSESSID", "PHPCOOKIE"],
        correctAnswer: "PHPSESSID"
    }
];