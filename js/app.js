// ===== TAROT APPLICATION MAIN SCRIPT =====
// This file contains all the interactive functionality for the tarot app

// ===== GLOBAL VARIABLES =====
let currentSection = 'home';
let currentReading = null;
let journalEntries = JSON.parse(localStorage.getItem('tarotJournal')) || [];
let currentDeck = [];
let isCardFlipping = false;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadJournalEntries();
    updateJournalCount();
});

function initializeApp() {
    // Show home section by default
    showSection('home');
    
    // Initialize card deck
    currentDeck = shuffleDeck();
    
    // Generate card grid
    generateCardGrid();
    
    // Setup floating cards animation
    setupFloatingCards();
    
    console.log('🔮 Mystical Tarot App Initialized');
}

// ===== NAVIGATION =====
function setupEventListeners() {
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            showSection(section);
            updateActiveNavLink(link);
        });
    });

    // Reading spread cards
    document.querySelectorAll('.spread-card').forEach(card => {
        card.addEventListener('click', () => {
            const spreadType = card.getAttribute('data-spread');
            startReading(spreadType);
        });
    });

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            filterCards(filter);
            updateActiveFilter(btn);
        });
    });

    // Search functionality
    const searchInput = document.getElementById('card-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchCards(e.target.value);
        });
    }

    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileNav);
    }
}

function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.add('active');
        targetSection.classList.add('fade-in');
        currentSection = sectionName;
    }
}

function updateActiveNavLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

// ===== CARD DECK FUNCTIONALITY =====
function generateCardGrid() {
    const cardGrid = document.getElementById('card-grid');
    if (!cardGrid) return;

    const allCards = getAllCards();
    cardGrid.innerHTML = '';

    allCards.forEach(card => {
        const cardElement = createCardElement(card);
        cardGrid.appendChild(cardElement);
    });
}

function createCardElement(card) {
    const cardItem = document.createElement('div');
    cardItem.className = 'card-item';
    cardItem.setAttribute('data-type', card.type);
    cardItem.setAttribute('data-element', card.element.toLowerCase());

    cardItem.innerHTML = `
        <div class="tarot-card" data-card="${card.id}" onclick="showCardModal('${card.id}')">
            <div class="card-back"></div>
            <div class="card-front">
                <img src="${card.imageUrl}" alt="${card.name}" onerror="this.style.display='none'">
                <div class="card-name">${card.name}</div>
            </div>
        </div>
        <div class="card-info">
            <div class="card-name">${card.name}</div>
            <div class="card-type">${formatCardType(card.type)} ${card.number ? '- ' + card.number : ''}</div>
        </div>
    `;

    return cardItem;
}

function formatCardType(type) {
    const typeMap = {
        'major': 'Major Arcana',
        'cups': 'Cups',
        'wands': 'Wands', 
        'swords': 'Swords',
        'pentacles': 'Pentacles'
    };
    return typeMap[type] || type;
}

function filterCards(filter) {
    const cardItems = document.querySelectorAll('.card-item');
    
    cardItems.forEach(item => {
        const cardType = item.getAttribute('data-type');
        
        if (filter === 'all') {
            item.style.display = 'flex';
        } else {
            item.style.display = cardType === filter ? 'flex' : 'none';
        }
    });
}

function updateActiveFilter(activeBtn) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    activeBtn.classList.add('active');
}

function searchCards(query) {
    const cardItems = document.querySelectorAll('.card-item');
    const searchTerm = query.toLowerCase();
    
    cardItems.forEach(item => {
        const cardName = item.querySelector('.card-name').textContent.toLowerCase();
        const cardType = item.getAttribute('data-type').toLowerCase();
        
        const matches = cardName.includes(searchTerm) || cardType.includes(searchTerm);
        item.style.display = matches ? 'flex' : 'none';
    });
}

// ===== CARD MODAL =====
function showCardModal(cardId) {
    const card = getCardById(cardId);
    if (!card) return;

    const modal = document.getElementById('card-modal');
    const modalCard = document.getElementById('modal-card');
    const modalCardName = document.getElementById('modal-card-name');
    const modalCardType = document.getElementById('modal-card-type');
    const modalCardNumber = document.getElementById('modal-card-number');
    const modalCardElement = document.getElementById('modal-card-element');
    const modalKeywords = document.getElementById('modal-keywords');
    const modalUprightMeaning = document.getElementById('modal-upright-meaning');
    const modalReversedMeaning = document.getElementById('modal-reversed-meaning');

    // Update modal content
    modalCardName.textContent = card.name;
    modalCardType.textContent = formatCardType(card.type);
    modalCardNumber.textContent = card.number !== undefined ? `#${card.number}` : '';
    modalCardElement.textContent = card.element;
    modalUprightMeaning.textContent = card.uprightMeaning;
    modalReversedMeaning.textContent = card.reversedMeaning;

    // Update keywords
    modalKeywords.innerHTML = '';
    card.keywords.forEach(keyword => {
        const keywordTag = document.createElement('span');
        keywordTag.className = 'keyword-tag';
        keywordTag.textContent = keyword;
        modalKeywords.appendChild(keywordTag);
    });

    // Update card display
    modalCard.innerHTML = `
        <div class="card-back"></div>
        <div class="card-front">
            <img src="${card.imageUrl}" alt="${card.name}" onerror="this.style.display='none'">
            <div class="card-name">${card.name}</div>
        </div>
    `;

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCardModal() {
    const modal = document.getElementById('card-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ===== READING FUNCTIONALITY =====
function startReading(spreadType) {
    showLoadingOverlay();
    
    setTimeout(() => {
        const spread = TAROT_SPREADS[spreadType];
        if (!spread) return;

        currentReading = {
            type: spreadType,
            spread: spread,
            cards: drawCards(spread.positions.length),
            timestamp: new Date()
        };

        displayReading();
        hideLoadingOverlay();
    }, 2000); // Simulate shuffling time
}

function displayReading() {
    const readingArea = document.getElementById('reading-area');
    const readingTitle = document.getElementById('reading-title');
    const cardSpread = document.getElementById('card-spread');
    const readingInterpretation = document.getElementById('reading-interpretation');

    readingTitle.textContent = currentReading.spread.name;
    readingArea.style.display = 'block';

    // Clear previous spread
    cardSpread.innerHTML = '';
    readingInterpretation.innerHTML = '';

    // Create spread layout
    currentReading.spread.positions.forEach((position, index) => {
        const card = currentReading.cards[index];
        const isReversed = Math.random() < 0.3; // 30% chance of reversed card

        const positionElement = document.createElement('div');
        positionElement.className = 'spread-position';
        positionElement.innerHTML = `
            <div class="position-label">${position.name}</div>
            <div class="tarot-card ${isReversed ? 'reversed' : ''}" data-card="${card.id}" onclick="revealCard(this, ${index})">
                <div class="card-back"></div>
                <div class="card-front">
                    <img src="${card.imageUrl}" alt="${card.name}" onerror="this.style.display='none'">
                    <div class="card-name">${card.name}</div>
                </div>
            </div>
            <div class="position-description">${position.description}</div>
        `;

        cardSpread.appendChild(positionElement);
    });

    // Add interpretation section
    readingInterpretation.innerHTML = `
        <h4>Click on each card to reveal its meaning</h4>
        <div id="card-interpretations"></div>
    `;
}

function revealCard(cardElement, index) {
    if (isCardFlipping) return;
    
    isCardFlipping = true;
    cardElement.classList.add('flipped');
    
    setTimeout(() => {
        const card = currentReading.cards[index];
        const position = currentReading.spread.positions[index];
        const isReversed = cardElement.classList.contains('reversed');
        
        displayCardInterpretation(card, position, isReversed, index);
        isCardFlipping = false;
    }, 600);
}

function displayCardInterpretation(card, position, isReversed, index) {
    const interpretationsContainer = document.getElementById('card-interpretations');
    
    const interpretationElement = document.createElement('div');
    interpretationElement.className = 'card-interpretation slide-up';
    interpretationElement.innerHTML = `
        <div class="interpretation-header">
            <h5>${position.name}: ${card.name} ${isReversed ? '(Reversed)' : ''}</h5>
        </div>
        <div class="interpretation-content">
            <p><strong>Position Meaning:</strong> ${position.description}</p>
            <p><strong>Card Meaning:</strong> ${isReversed ? card.reversedMeaning : card.uprightMeaning}</p>
            <div class="keywords">
                <strong>Keywords:</strong> ${card.keywords.join(', ')}
            </div>
        </div>
    `;
    
    interpretationsContainer.appendChild(interpretationElement);
}

function resetReading() {
    const readingArea = document.getElementById('reading-area');
    readingArea.style.display = 'none';
    currentReading = null;
}

// ===== LEARNING SECTION =====
function showLearningModule(moduleKey) {
    const module = LEARNING_MODULES[moduleKey];
    if (!module) return;

    const learningContent = document.getElementById('learning-content');
    learningContent.innerHTML = `
        <div class="learning-module fade-in">
            <div class="module-header">
                <h3>${module.title}</h3>
                <button class="btn btn-secondary" onclick="hideLearningModule()">
                    <i class="fas fa-arrow-left"></i>
                    Back to Modules
                </button>
            </div>
            <div class="module-content">
                ${module.content}
            </div>
        </div>
    `;
    
    learningContent.style.display = 'block';
    document.querySelector('.learning-modules').style.display = 'none';
}

function hideLearningModule() {
    const learningContent = document.getElementById('learning-content');
    learningContent.style.display = 'none';
    document.querySelector('.learning-modules').style.display = 'grid';
}

// ===== JOURNAL FUNCTIONALITY =====
function showNewEntryForm() {
    const journalForm = document.getElementById('journal-form');
    journalForm.style.display = 'block';
    journalForm.scrollIntoView({ behavior: 'smooth' });
}

function hideNewEntryForm() {
    const journalForm = document.getElementById('journal-form');
    journalForm.style.display = 'none';
    
    // Clear form
    journalForm.querySelector('form').reset();
}

function saveJournalEntry(event) {
    event.preventDefault();
    
    const form = event.target;
    const entry = {
        id: Date.now(),
        title: form.querySelector('#entry-title').value,
        spread: form.querySelector('#entry-spread').value,
        cards: form.querySelector('#entry-cards').value,
        question: form.querySelector('#entry-question').value,
        interpretation: form.querySelector('#entry-interpretation').value,
        insights: form.querySelector('#entry-insights').value,
        date: new Date().toISOString()
    };
    
    journalEntries.unshift(entry);
    localStorage.setItem('tarotJournal', JSON.stringify(journalEntries));
    
    loadJournalEntries();
    updateJournalCount();
    hideNewEntryForm();
    
    // Show success message
    showNotification('Journal entry saved successfully!', 'success');
}

function loadJournalEntries() {
    const journalEntriesContainer = document.getElementById('journal-entries');
    if (!journalEntriesContainer) return;
    
    journalEntriesContainer.innerHTML = '';
    
    if (journalEntries.length === 0) {
        journalEntriesContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-feather-alt"></i>
                <h3>No journal entries yet</h3>
                <p>Start documenting your tarot journey by creating your first entry.</p>
            </div>
        `;
        return;
    }
    
    journalEntries.forEach(entry => {
        const entryElement = document.createElement('div');
        entryElement.className = 'journal-entry fade-in';
        entryElement.innerHTML = `
            <div class="entry-header">
                <div>
                    <h4 class="entry-title">${entry.title}</h4>
                    <div class="entry-date">${formatDate(entry.date)}</div>
                </div>
                <button class="btn btn-secondary" onclick="deleteJournalEntry(${entry.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            <div class="entry-meta">
                <span><i class="fas fa-magic"></i> ${TAROT_SPREADS[entry.spread]?.name || entry.spread}</span>
                <span><i class="fas fa-layer-group"></i> ${entry.cards}</span>
            </div>
            <div class="entry-content">
                ${entry.question ? `<p><strong>Question:</strong> ${entry.question}</p>` : ''}
                <p><strong>Interpretation:</strong> ${entry.interpretation}</p>
                ${entry.insights ? `<p><strong>Insights:</strong> ${entry.insights}</p>` : ''}
            </div>
        `;
        
        journalEntriesContainer.appendChild(entryElement);
    });
}

function deleteJournalEntry(entryId) {
    if (confirm('Are you sure you want to delete this journal entry?')) {
        journalEntries = journalEntries.filter(entry => entry.id !== entryId);
        localStorage.setItem('tarotJournal', JSON.stringify(journalEntries));
        loadJournalEntries();
        updateJournalCount();
        showNotification('Journal entry deleted', 'info');
    }
}

function updateJournalCount() {
    const countElement = document.getElementById('journal-count');
    if (countElement) {
        countElement.textContent = journalEntries.length;
    }
}

function exportJournal() {
    if (journalEntries.length === 0) {
        showNotification('No journal entries to export', 'warning');
        return;
    }
    
    const dataStr = JSON.stringify(journalEntries, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `tarot-journal-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    showNotification('Journal exported successfully!', 'success');
}

// ===== UTILITY FUNCTIONS =====
function setupFloatingCards() {
    const floatingCards = document.querySelectorAll('.floating-card .tarot-card');
    floatingCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            card.classList.add('flipped');
            setTimeout(() => {
                card.classList.remove('flipped');
            }, 3000);
        });
    });
}

function showLoadingOverlay() {
    const overlay = document.getElementById('loading-overlay');
    overlay.classList.add('active');
}

function hideLoadingOverlay() {
    const overlay = document.getElementById('loading-overlay');
    overlay.classList.remove('active');
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Hide and remove notification
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function toggleMobileNav() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
    // ESC to close modal
    if (e.key === 'Escape') {
        closeCardModal();
        hideNewEntryForm();
    }
    
    // Number keys for quick navigation
    if (e.key >= '1' && e.key <= '5') {
        const sections = ['home', 'deck', 'readings', 'learn', 'journal'];
        const sectionIndex = parseInt(e.key) - 1;
        if (sections[sectionIndex]) {
            showSection(sections[sectionIndex]);
        }
    }
});

// ===== CLICK OUTSIDE TO CLOSE =====
document.addEventListener('click', (e) => {
    // Close modal when clicking outside
    if (e.target.classList.contains('modal')) {
        closeCardModal();
    }
});

// ===== EXPORT GLOBAL FUNCTIONS =====
// Make functions available globally for HTML onclick handlers
window.showSection = showSection;
window.showCardModal = showCardModal;
window.closeCardModal = closeCardModal;
window.startReading = startReading;
window.resetReading = resetReading;
window.revealCard = revealCard;
window.showLearningModule = showLearningModule;
window.hideLearningModule = hideLearningModule;
window.showNewEntryForm = showNewEntryForm;
window.hideNewEntryForm = hideNewEntryForm;
window.saveJournalEntry = saveJournalEntry;
window.deleteJournalEntry = deleteJournalEntry;
window.exportJournal = exportJournal;

console.log('🌟 Tarot App Ready - May the cards guide your journey!');