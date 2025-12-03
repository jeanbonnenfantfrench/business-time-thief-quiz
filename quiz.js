// Quiz data structure
const quizData = {
    questions: [
        {
            id: 1,
            question: "What makes you want to throw your laptop out the window?",
            answers: [
                { text: "Same customer questions flooding my inbox every day", scores: { repetitus: 2 } },
                { text: "Manually typing orders from PDFs and emails", scores: { manualis: 2 } },
                { text: "Copy-pasting data between 3 different systems", scores: { duplicatus: 2 } },
                { text: "Production schedules that don't match reality", scores: { confusus: 2 } },
                { text: "Sales team taking forever to create quotes", scores: { calculatus: 2 } },
                { text: "Invoice processing eating 3 days every month", scores: { validatus: 2 } }
            ]
        },
        {
            id: 2,
            question: "How many hours per week does your team waste on repetitive tasks?",
            answers: [
                { text: "5-10 hours", scores: { repetitus: 1, manualis: 1, duplicatus: 1, confusus: 1, calculatus: 1, validatus: 1 } },
                { text: "10-20 hours", scores: { repetitus: 2, manualis: 2, duplicatus: 2, confusus: 2, calculatus: 2, validatus: 2 } },
                { text: "20-40 hours", scores: { repetitus: 3, manualis: 3, duplicatus: 3, confusus: 3, calculatus: 3, validatus: 3 } },
                { text: "40+ hours (we're drowning)", scores: { repetitus: 4, manualis: 4, duplicatus: 4, confusus: 4, calculatus: 4, validatus: 4 } }
            ]
        },
        {
            id: 3,
            question: "What's your biggest bottleneck right now?",
            answers: [
                { text: "Customer inquiries piling up", scores: { repetitus: 3 } },
                { text: "Order entry backlog", scores: { manualis: 3 } },
                { text: "Data cleanup and validation", scores: { duplicatus: 3 } },
                { text: "Production planning chaos", scores: { confusus: 3 } },
                { text: "Quote creation taking too long", scores: { calculatus: 3 } },
                { text: "Invoice processing delays", scores: { validatus: 3 } }
            ]
        },
        {
            id: 4,
            question: "Which phrase do you hear most from your team?",
            answers: [
                { text: "\"Another customer asking where their order is\"", scores: { repetitus: 2 } },
                { text: "\"I'm still entering yesterday's orders\"", scores: { manualis: 2 } },
                { text: "\"The data doesn't match between systems again\"", scores: { duplicatus: 2 } },
                { text: "\"The schedule says 150 hours but we only have 100\"", scores: { confusus: 2 } },
                { text: "\"I'll send that quote tomorrow, need to calculate it\"", scores: { calculatus: 2 } },
                { text: "\"We're behind on invoice processing again\"", scores: { validatus: 2 } }
            ]
        },
        {
            id: 5,
            question: "What would you automate first if you had a magic wand?",
            answers: [
                { text: "Answering routine customer questions", scores: { repetitus: 3 } },
                { text: "Processing incoming orders and invoices", scores: { manualis: 2, validatus: 1 } },
                { text: "Moving data between systems", scores: { duplicatus: 3 } },
                { text: "Creating production schedules", scores: { confusus: 3 } },
                { text: "Generating sales quotes", scores: { calculatus: 3 } },
                { text: "Validating and matching invoices", scores: { validatus: 3 } }
            ]
        },
        {
            id: 6,
            question: "How big is your team dealing with this problem?",
            answers: [
                { text: "1-2 people", scores: { repetitus: 1, manualis: 1, duplicatus: 1, confusus: 1, calculatus: 1, validatus: 1 } },
                { text: "3-5 people", scores: { repetitus: 2, manualis: 2, duplicatus: 2, confusus: 2, calculatus: 2, validatus: 2 } },
                { text: "6-10 people", scores: { repetitus: 3, manualis: 3, duplicatus: 3, confusus: 3, calculatus: 3, validatus: 3 } },
                { text: "10+ people", scores: { repetitus: 4, manualis: 4, duplicatus: 4, confusus: 4, calculatus: 4, validatus: 4 } }
            ]
        },
        {
            id: 7,
            question: "What happens during peak periods?",
            answers: [
                { text: "Customer support gets overwhelmed", scores: { repetitus: 2 } },
                { text: "Order backlog grows out of control", scores: { manualis: 2 } },
                { text: "Data errors multiply", scores: { duplicatus: 2 } },
                { text: "Production falls behind schedule", scores: { confusus: 2 } },
                { text: "Sales team can't keep up with quote requests", scores: { calculatus: 2 } },
                { text: "Invoices pile up for days", scores: { validatus: 2 } }
            ]
        },
        {
            id: 8,
            question: "What's the real cost of this problem?",
            answers: [
                { text: "Lost customers from slow responses", scores: { repetitus: 3 } },
                { text: "Missed deadlines and late shipments", scores: { manualis: 2, confusus: 1 } },
                { text: "Wrong data leading to bad decisions", scores: { duplicatus: 3 } },
                { text: "Can't take on more volume without hiring", scores: { repetitus: 2, manualis: 2, duplicatus: 2, confusus: 2, calculatus: 2, validatus: 2 } },
                { text: "Sales pipeline has no visibility", scores: { calculatus: 3 } },
                { text: "Missing early payment discounts, audit nightmares", scores: { validatus: 3 } }
            ]
        }
    ]
};

// Time thief data
const timeThieves = {
    repetitus: {
        name: "Repetitus the Messenger",
        tagline: "The same questions, over and over...",
        image: "images/1- The Customer Question Loop - \"Repetitus the Messenger\".png",
        problem: "The Customer Question Loop",
        pain: "Your inbox floods with \"What's my order status?\" and \"What are the dimensions of this product?\" Your team searches 800-page catalogs while customers wait days. The same questions, over and over.",
        stats: ["80% fewer repetitive tickets", "Answers in seconds, not days"],
        solution: "Customer Support Automation",
        description: "AI chatbot handles routine questions 24/7, escalates complex issues to your team with full context. Your team focuses on building relationships, not searching catalogs.",
        demoLink: "https://www.lleverage.ai/book-a-demo",
        solutionLink: "https://www.lleverage.ai/solutions/customer-support-automation"
    },
    manualis: {
        name: "Manualis the Scribe",
        tagline: "One order at a time, forever...",
        image: "images/2-The Order Entry Pile - \"Manualis the Scribe\".png",
        problem: "The Order Entry Pile",
        pain: "1,200 weekly orders drowning your inbox - PDFs, Excel files, plain text emails. Five people manually entering article codes into Business Central or SAP. Your team is stuck processing the messy 80%.",
        stats: ["75% faster order processing", "3 days → 4 hours monthly for invoices"],
        solution: "Order Processing + Invoice Automation",
        description: "AI reads any document format, extracts data, populates your ERP automatically. Zero errors on standard orders.",
        demoLink: "https://www.lleverage.ai/book-a-demo",
        solutionLink: "https://www.lleverage.ai/solutions/order-processing-automation"
    },
    duplicatus: {
        name: "Duplicatus the Clerk",
        tagline: "Copy, paste, repeat, forever...",
        image: "images/3-The Copy-Paste Marathon - \"Duplicatus the Clerk\".png",
        problem: "The Copy-Paste Marathon",
        pain: "Hours spent copy-pasting data between systems, filling missing product attributes, searching through reference tables. Creating one validation rule takes 2 hours. Fixing errors across SAP, Salesforce, and your data warehouse manually, every single day.",
        stats: ["Rule creation: 2 hours → 5 minutes", "80% fewer manual corrections"],
        solution: "Data Transformation Automation",
        description: "AI learns your data patterns and auto-fills missing values, deduplicates records. Your team reviews exceptions only.",
        demoLink: "https://www.lleverage.ai/book-a-demo",
        solutionLink: "https://www.lleverage.ai/solutions/data-transformation-automation"
    },
    confusus: {
        name: "Confusus the Planner",
        tagline: "150 hours into a 100-hour week...",
        image: "images/4-The Production Puzzle - \"Confusus the Planner\".png",
        problem: "The Production Puzzle",
        pain: "Planners arrive at 6 AM to check if lines ran ahead or behind. Your ERP schedules 150 hours into 100-hour weeks. After the MRP run, material planners scramble. \"Gut feel\" is the only thing holding it together.",
        stats: ["Planning time: 2 hours → 15 minutes", "15-25% throughput improvement"],
        solution: "Production & Capacity Planning",
        description: "AI optimizes schedules, handles real-time changes, calculates impact instantly. No more impossible schedules.",
        demoLink: "https://www.lleverage.ai/book-a-demo",
        solutionLink: "https://www.lleverage.ai/solutions/production-and-capacity-planning"
    },
    calculatus: {
        name: "Calculatus the Merchant",
        tagline: "Just one more spreadsheet calculation...",
        image: "images/5-The Quote Bottleneck - \"Calculatus the Merchant\".png",
        problem: "The Quote Bottleneck",
        pain: "Sales team spends 10-15 minutes per quote copying configurations, calculating bundle dependencies. They email PDFs instead of using ERP because it's too complex. No pipeline visibility.",
        stats: ["Quote creation: 15 minutes → 1 minute", "100% ERP adoption"],
        solution: "Quote Generation Automation",
        description: "AI turns sales conversations into accurate quotes, handles technical dependencies automatically. Complete pipeline visibility.",
        demoLink: "https://www.lleverage.ai/book-a-demo",
        solutionLink: "https://www.lleverage.ai/solutions/quote-generation-automation"
    },
    validatus: {
        name: "Validatus the Auditor",
        tagline: "Every invoice must be perfect...",
        image: "images/6-The Invoice Processing Trap - \"Validatus the Auditor\".png",
        problem: "The Invoice Processing Trap",
        pain: "Team spends 2-3 days monthly on repetitive invoice checks. Traditional OCR fails on 70% of invoices. Manual IBAN verification, supplier matching, double-entry. Missing early payment discounts, risking duplicate payments.",
        stats: ["95% straight-through processing", "Handle 10x volume spikes without adding staff"],
        solution: "Invoice Processing Automation",
        description: "AI extracts data from any invoice format, validates against POs, maintains perfect audit trails.",
        demoLink: "https://www.lleverage.ai/book-a-demo",
        solutionLink: "https://www.lleverage.ai/solutions/invoice-processing-automation"
    }
};

// State management
let currentQuestion = 0;
let scores = {
    repetitus: 0,
    manualis: 0,
    duplicatus: 0,
    confusus: 0,
    calculatus: 0,
    validatus: 0
};

let selectedAnswers = [];

// Functions
function startQuiz() {
    // Reset state
    currentQuestion = 0;
    scores = {
        repetitus: 0,
        manualis: 0,
        duplicatus: 0,
        confusus: 0,
        calculatus: 0,
        validatus: 0
    };
    selectedAnswers = [];
    
    // Show quiz screen
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');
    document.getElementById('results-screen').classList.remove('active');
    
    showQuestion(0);
}

function showQuestion(index) {
    if (index >= quizData.questions.length) {
        calculateResult();
        return;
    }
    
    currentQuestion = index;
    const question = quizData.questions[index];
    
    // Update progress
    const progress = ((index + 1) / quizData.questions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('progress-text').textContent = `Question ${index + 1} of ${quizData.questions.length}`;
    
    // Update question text
    document.getElementById('question-text').textContent = question.question;
    
    // Clear and populate answers
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, answerIndex) => {
        const answerCard = document.createElement('div');
        answerCard.className = 'answer-card';
        answerCard.setAttribute('role', 'button');
        answerCard.setAttribute('tabindex', '0');
        answerCard.setAttribute('aria-label', answer.text);
        
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'answer';
        radio.id = `answer-${answerIndex}`;
        radio.value = answerIndex;
        
        const label = document.createElement('label');
        label.htmlFor = `answer-${answerIndex}`;
        label.textContent = answer.text;
        
        answerCard.appendChild(radio);
        answerCard.appendChild(label);
        
        // Add click handler
        answerCard.addEventListener('click', () => selectAnswer(answerIndex));
        answerCard.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectAnswer(answerIndex);
            }
        });
        
        answersContainer.appendChild(answerCard);
    });
    
    // Reset next button
    const nextBtn = document.getElementById('next-btn');
    nextBtn.disabled = true;
    
    // Restore previous selection if exists
    if (selectedAnswers[index] !== undefined) {
        const prevAnswer = selectedAnswers[index];
        const prevCard = answersContainer.children[prevAnswer];
        if (prevCard) {
            prevCard.querySelector('input').checked = true;
            prevCard.classList.add('selected');
            nextBtn.disabled = false;
        }
    }
}

function selectAnswer(answerIndex) {
    // Remove previous selection
    const answersContainer = document.getElementById('answers-container');
    Array.from(answersContainer.children).forEach(card => {
        card.classList.remove('selected');
        card.querySelector('input').checked = false;
    });
    
    // Select new answer
    const selectedCard = answersContainer.children[answerIndex];
    selectedCard.classList.add('selected');
    selectedCard.querySelector('input').checked = true;
    
    // Store selection
    selectedAnswers[currentQuestion] = answerIndex;
    
    // Enable next button
    document.getElementById('next-btn').disabled = false;
    
    // Apply scores
    const question = quizData.questions[currentQuestion];
    const answer = question.answers[answerIndex];
    
    Object.keys(answer.scores).forEach(thief => {
        scores[thief] += answer.scores[thief];
    });
}

function nextQuestion() {
    if (currentQuestion < quizData.questions.length - 1) {
        showQuestion(currentQuestion + 1);
    } else {
        calculateResult();
    }
}

function calculateResult() {
    // Find highest score
    let maxScore = -1;
    let winners = [];
    let firstWinner = null;
    
    Object.keys(scores).forEach((thief, index) => {
        if (scores[thief] > maxScore) {
            maxScore = scores[thief];
            winners = [thief];
            firstWinner = thief;
        } else if (scores[thief] === maxScore) {
            winners.push(thief);
        }
    });
    
    // Tie-breaker: use first time thief that achieved the score
    // (in case of tie, use the one that appeared first in scoring order)
    const winner = firstWinner;
    
    showResults(winner);
}

function showResults(timeThiefKey) {
    const timeThief = timeThieves[timeThiefKey];
    
    // Hide quiz screen, show results
    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('results-screen').classList.add('active');
    
    // Populate results
    document.getElementById('result-character-image').src = timeThief.image;
    document.getElementById('result-character-image').alt = timeThief.name;
    document.getElementById('result-character-name').textContent = timeThief.name;
    document.getElementById('result-character-tagline').textContent = timeThief.tagline;
    document.getElementById('result-problem-name').textContent = timeThief.problem;
    document.getElementById('result-pain-point').textContent = timeThief.pain;
    
    // Populate stats
    const statsList = document.getElementById('result-stats');
    statsList.innerHTML = '';
    timeThief.stats.forEach(stat => {
        const li = document.createElement('li');
        li.textContent = stat;
        statsList.appendChild(li);
    });
    
    document.getElementById('result-solution-name').textContent = timeThief.solution;
    document.getElementById('result-solution-description').textContent = timeThief.description;
    
    // Update CTAs
    document.getElementById('demo-cta').href = timeThief.demoLink;
    document.getElementById('solution-cta').href = timeThief.solutionLink;
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function restartQuiz() {
    startQuiz();
}

function getShareUrl() {
    const timeThiefKey = Object.keys(timeThieves).find(key => {
        const name = document.getElementById('result-character-name').textContent;
        return timeThieves[key].name === name;
    });
    
    if (timeThiefKey) {
        return window.location.origin + window.location.pathname + '?result=' + timeThiefKey;
    }
    return window.location.href;
}

function shareOnLinkedIn() {
    const url = getShareUrl();
    const timeThiefKey = Object.keys(timeThieves).find(key => {
        const name = document.getElementById('result-character-name').textContent;
        return timeThieves[key].name === name;
    });
    
    const timeThief = timeThieves[timeThiefKey];
    const shareText = encodeURIComponent(`I'm fighting ${timeThief.name}! 🎯\n\nTake this 2-minute quiz to discover which business time thief is stealing your team's time: ${url}`);
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&summary=${shareText}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=400');
}

function shareViaEmail() {
    const url = getShareUrl();
    const timeThiefKey = Object.keys(timeThieves).find(key => {
        const name = document.getElementById('result-character-name').textContent;
        return timeThieves[key].name === name;
    });
    
    const timeThief = timeThieves[timeThiefKey];
    const subject = encodeURIComponent(`Which Thief Is Stealing Your Team's Time?`);
    const body = encodeURIComponent(`I'm fighting ${timeThief.name}! 🎯\n\nTake this 2-minute quiz to discover which business time thief is stealing your team's time:\n\n${url}\n\nShare with your colleagues and see what results they get!`);
    // Try Outlook web first, fallback to mailto
    const outlookUrl = `https://outlook.office.com/mail/deeplink/compose?subject=${subject}&body=${body}`;
    window.open(outlookUrl, '_blank', 'width=800,height=600');
}

function shareOnTeams() {
    const url = getShareUrl();
    const timeThiefKey = Object.keys(timeThieves).find(key => {
        const name = document.getElementById('result-character-name').textContent;
        return timeThieves[key].name === name;
    });
    
    const timeThief = timeThieves[timeThiefKey];
    const shareText = encodeURIComponent(`I'm fighting ${timeThief.name}! 🎯 Take this 2-minute quiz to discover which business time thief is stealing your team's time: ${url}`);
    // Microsoft Teams share URL
    const teamsUrl = `https://teams.microsoft.com/share?href=${encodeURIComponent(url)}&text=${shareText}`;
    window.open(teamsUrl, '_blank', 'width=800,height=600');
}

// Check for result parameter in URL
function checkUrlResult() {
    const params = new URLSearchParams(window.location.search);
    const resultParam = params.get('result');
    
    if (resultParam && timeThieves[resultParam]) {
        // Show results directly
        document.getElementById('start-screen').classList.remove('active');
        document.getElementById('quiz-screen').classList.remove('active');
        document.getElementById('results-screen').classList.add('active');
        showResults(resultParam);
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Check for shared result
    checkUrlResult();
    
    // Start quiz button
    document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
    
    // Next button
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    
    // Retake button
    document.getElementById('retake-btn').addEventListener('click', () => {
        // Reset URL
        window.history.replaceState({}, document.title, window.location.pathname);
        restartQuiz();
    });
    
    // Share buttons
    document.getElementById('share-linkedin').addEventListener('click', (e) => {
        e.preventDefault();
        shareOnLinkedIn();
    });
    
    document.getElementById('share-email').addEventListener('click', (e) => {
        e.preventDefault();
        shareViaEmail();
    });
    
    document.getElementById('share-teams').addEventListener('click', (e) => {
        e.preventDefault();
        shareOnTeams();
    });
});

