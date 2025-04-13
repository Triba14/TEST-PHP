const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const questionNumberEl = document.getElementById('question-number');
const questionEl = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const feedbackEl = document.getElementById('feedback');
const nextButton = document.getElementById('next-button');
const resultsContainer = document.getElementById('results-container');
const scoreEl = document.getElementById('score');
const totalQuestionsEl = document.getElementById('total-questions');
const percentageEl = document.getElementById('percentage');
const restartButton = document.getElementById('restart-button');

const TOTAL_QUESTIONS_PER_QUIZ = 40; // Numero di domande per ogni quiz

let currentQuizQuestions = []; // Array per le domande del quiz corrente
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

// --- Funzione per mescolare un array (Fisher-Yates) ---
// QUESTA FUNZIONE È CORRETTA E DOVREBBE MESCOLARE EFFICACEMENTE
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Scambia elementi
    }
    return array;
}

// --- Funzione per selezionare N domande casuali ---
function selectRandomQuestions(allQuestions, count) {
    const shuffled = shuffleArray([...allQuestions]); // Mescola le domande
    return shuffled.slice(0, count); // Prendi le prime 'count'
}

// --- Funzione per iniziare un nuovo quiz ---
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    currentQuizQuestions = selectRandomQuestions(allExamQuestions, TOTAL_QUESTIONS_PER_QUIZ);
    resultsContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    loadQuestion();
}


// --- Funzione per caricare la domanda corrente ---
function loadQuestion() {
    selectedAnswer = null;
    feedbackEl.textContent = '';
    feedbackEl.className = 'feedback';
    optionsContainer.innerHTML = '';
    nextButton.style.display = 'none';

    if (!currentQuizQuestions || currentQuizQuestions.length === 0) {
        console.error("Nessuna domanda caricata per il quiz.");
        questionEl.textContent = "Errore: Impossibile caricare le domande.";
        return;
    }

    const currentQuestion = currentQuizQuestions[currentQuestionIndex];

    if (!currentQuestion) {
        console.error(`Errore: Domanda non trovata all'indice ${currentQuestionIndex}`);
        showResults();
        return;
    }

    questionNumberEl.textContent = `Domanda ${currentQuestionIndex + 1} di ${currentQuizQuestions.length}`;
    questionEl.textContent = currentQuestion.question;

    // --- PUNTO CRITICO: ASSICURIAMOCI DI MESCOLARE LE OPZIONI QUI ---
    const optionsToDisplay = shuffleArray([...currentQuestion.options]); // Crea una copia e mescola LE OPZIONI

    // Cicla sulla lista di opzioni *mescolata*
    optionsToDisplay.forEach(option => {
        // Generazione ID e HTML (come prima)
        const optionId = `q${currentQuestionIndex}_${option.replace(/[^a-zA-Z0-9]/g, '_')}`;
        const div = document.createElement('div');
        div.classList.add('option');

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `question_${currentQuestionIndex}`;
        input.value = option; // Il valore è la stringa dell'opzione
        input.id = optionId;

        const label = document.createElement('label');
        label.htmlFor = optionId;
        label.textContent = option;

        div.appendChild(input);
        div.appendChild(label);
        optionsContainer.appendChild(div);

        // Aggiungi l'event listener che passa il valore corretto dell'opzione
        div.addEventListener('click', () => selectAnswer(div, option, currentQuestion.correctAnswer));
    });
}

// --- Funzione chiamata quando si seleziona una risposta ---
// QUESTA FUNZIONE DOVREBBE ESSERE CORRETTA, confronta il valore selezionato
// con la risposta corretta memorizzata
function selectAnswer(selectedDiv, selectedOptionValue, correctAnswer) {
    if (selectedAnswer !== null) {
        return;
    }
    selectedAnswer = selectedOptionValue;

    const allOptions = optionsContainer.querySelectorAll('.option');
    allOptions.forEach(optDiv => {
        optDiv.classList.remove('selected');
        optDiv.classList.add('disabled');
        const radio = optDiv.querySelector('input[type="radio"]');
        if(radio) radio.disabled = true;
    });

    selectedDiv.classList.add('selected');

    // Confronto diretto tra valore cliccato e risposta corretta
    if (selectedOptionValue === correctAnswer) {
        score++;
        selectedDiv.classList.add('correct');
        feedbackEl.textContent = 'Corretto!';
        feedbackEl.className = 'feedback correct';
    } else {
        selectedDiv.classList.add('incorrect');
        const feedbackText = `Sbagliato! La risposta corretta era: `;
        const correctAnswerSpan = document.createElement('strong');
        correctAnswerSpan.textContent = correctAnswer;

        feedbackEl.textContent = feedbackText;
        feedbackEl.appendChild(correctAnswerSpan);
        feedbackEl.className = 'feedback incorrect';

        // Evidenzia anche la risposta corretta (cercandola per valore)
        allOptions.forEach(optDiv => {
            const radio = optDiv.querySelector('input[type="radio"]');
            // Controlla se il valore del radio button corrisponde alla stringa della risposta corretta
            if (radio && radio.value === correctAnswer) {
                optDiv.classList.add('correct');
            }
        });
    }
    nextButton.style.display = 'inline-block';
}

// --- Funzione per mostrare i risultati finali ---
function showResults() {
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    scoreEl.textContent = score;
    totalQuestionsEl.textContent = currentQuizQuestions.length;
    const percent = currentQuizQuestions.length > 0 ? Math.round((score / currentQuizQuestions.length) * 100) : 0;
    percentageEl.textContent = percent;
}

// --- Event Listener (invariati) ---
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuizQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

restartButton.addEventListener('click', startQuiz);

// --- Inizia il primo quiz al caricamento ---
startQuiz();