// Sample tutor data
const tutorsData = [
    {
        id: 1,
        name: "Sanjeeva Rana",
        location: "Thali",
        verified: true,
        tagline: "Making Math fun and easy for every student",
        badge: "Gold Tutor",
        badgeColor: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
        price: 5000,
        duration: 60,
        rating: 4.9,
        reviews: 125,
        students: 89,
        lessons: 450,
        subjects: ["Mathematics", "Physics"],
        level: ["Secondary (Class 9-10)", "Higher Secondary (Class 11-12)"],
        languages: ["English", "Nepali"],
        mode: ["Online", "At Student's Home"],
        description: "I am a dedicated mathematics teacher with 8+ years of experience. I specialize in making complex concepts simple and enjoyable for students.",
        image: "https://prosikshya.com/storage/thumbnails/50/51fd2ae5636b21ea6f1aae4c379c53",
        session: "private"
    },
    {
        id: 2,
        name: "Rajesh Kumar",
        location: "Basantpur",
        verified: true,
        tagline: "Expert in Computer Science and Programming",
        badge: "Platinum Tutor",
        badgeColor: "linear-gradient(135deg, #E5E4E2 0%, #BCC6CC 100%)",
        price: 7500,
        duration: 60,
        rating: 5.0,
        reviews: 203,
        students: 145,
        lessons: 680,
        subjects: ["Computer Science", "Python", "Java"],
        level: ["Higher Secondary (Class 11-12)", "College/University"],
        languages: ["English"],
        mode: ["Online", "Hybrid (Online + Offline)"],
        description: "Professional software engineer turned educator. I help students master programming from basics to advanced concepts with real-world projects.",
        image: "https://prosikshya.com/storage/thumbnails/a0/7ae29bc82372d3717e7aa7783f7a06",
        session: "private"
    },
    {
        id: 3,
        name: "Alon Rai",
        location: "Baneshwor",
        verified: true,
        tagline: "Science made simple and interesting",
        badge: "Silver Tutor",
        badgeColor: "linear-gradient(135deg, #C0C0C0 0%, #808080 100%)",
        price: 4000,
        duration: 60,
        rating: 4.8,
        reviews: 87,
        students: 65,
        lessons: 320,
        subjects: ["Chemistry", "Biology", "Science"],
        level: ["Middle School (Class 6-8)", "Secondary (Class 9-10)"],
        languages: ["English", "Nepali"],
        mode: ["Online", "At Tutor's Place"],
        description: "Passionate science educator with a focus on practical learning. I use experiments and real-life examples to make science come alive.",
        image: "https://prosikshya.com/storage/thumbnails/2a/cbaea4e975a3bbbd007e3504ae68aa",
        session: "both"
    },
    {
        id: 4,
        name: "Nishan Khatri",
        location: "Buddha",
        verified: true,
        tagline: "English language expert for all levels",
        badge: "Gold Tutor",
        badgeColor: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
        price: 4500,
        duration: 60,
        rating: 4.7,
        reviews: 156,
        students: 112,
        lessons: 540,
        subjects: ["English", "English Literature"],
        level: ["Primary (Class 1-5)", "Middle School (Class 6-8)", "Secondary (Class 9-10)"],
        languages: ["English"],
        mode: ["Online"],
        description: "Certified English teacher with TESOL certification. I help students improve their grammar, vocabulary, and communication skills.",
        image: "https://prosikshya.com/storage/thumbnails/75/42a926c83d4d43f685572b78c59efa",
        session: "group"
    },
    {
        id: 5,
        name: "Dil Raj Gurung",
        location: "Bagbazar",
        verified: true,
        tagline: "History and Social Studies specialist",
        badge: "Bronze Tutor",
        badgeColor: "linear-gradient(135deg, #CD7F32 0%, #8B4513 100%)",
        price: 3500,
        duration: 60,
        rating: 4.6,
        reviews: 45,
        students: 38,
        lessons: 180,
        subjects: ["Social", "Science"],
        level: ["Middle School (Class 6-8)", "Secondary (Class 9-10)"],
        languages: ["English", "Nepali"],
        mode: ["At Student's Home", "At Tutor's Place"],
        description: "I make history interesting by connecting past events to present day scenarios. My interactive teaching style keeps students engaged.",
        image: "https://prosikshya.com/storage/thumbnails/49/4960934dc90d9eb0595888765133a4",
        session: "private"
    },
    {
        id: 6,
        name: "Arjun Sapkota",
        location: "Chabahil",
        verified: true,
        tagline: "Physics and Math tutor ",
        badge: "Platinum Tutor",
        badgeColor: "linear-gradient(135deg, #E5E4E2 0%, #BCC6CC 100%)",
        price: 8000,
        duration: 60,
        rating: 4.9,
        reviews: 178,
        students: 98,
        lessons: 620,
        subjects: ["Physics", "Mathematics"],
        level: ["Higher Secondary (Class 11-12)", "College/University"],
        languages: ["English", "Nepali"],
        mode: ["Online", "Hybrid (Online + Offline)"],
        description: "I am a creative teacher. I enjoyed with students by solving his/her questions. I like to teach what the students want. I wamt to make friendly environment with student that's helps student to ask questions friendly.",
        image: "https://prosikshya.com/storage/thumbnails/22/521846d241411d8d18e11b51300020",
        session: "both"
    },
    {
        id: 7,
        name: "Rojina Rajaure Rajaure",
        location: "Chabahil",
        verified: true,
        tagline: "Physics, Math and chemistry tutor ",
        badge: "silver Tutor",
        badgeColor: "linear-gradient(135deg, #E5E4E2 0%, #BCC6CC 100%)",
        price: 8000,
        duration: 60,
        rating: 4.9,
        reviews: 178,
        students: 98,
        lessons: 620,
        subjects: ["Physics", "Mathematics", "Chemistry" ],
        level: ["Higher Secondary (Class 11-12)", "College/University"],
        languages: ["English", "Nepali"],
        mode: ["Online"],
        description: "I am Rojina Rajaure, a passionate tutor committed to helping students enhance their communication, speaking, and problem-solving skills. I design lessons that are interactive, practical, and easy to follow, ensuring students gain confidence, improve understanding, and achieve their academic goals. ",
        image: "https://prosikshya.com/storage/thumbnails/b3/f891d16dd551a3a2125351aadf898c",
        session: "both"
    },
     {
        id: 8,
        name: "Dhrubabar K.C",
        location: "Chabahil",
        verified: true,
        tagline: "Physics, Math and chemistry tutor ",
        badge: "Bronze Tutor",
        badgeColor: "linear-gradient(135deg, #E5E4E2 0%, #BCC6CC 100%)",
        price: 2000,
        duration: 60,
        rating: 4.9,
        reviews: 178,
        students: 10,
        lessons: 20,
        subjects: [ "Mathematics", "Science" ],
        level: ["Higher Secondary (Class 11-12)", "Secondary (9-10"],
        languages: ["English", "Nepali"],
        mode: ["Online", "Offline"],
        description: "I’m a mechanical engineer, currently pursuing my master’s in Renewable Energy Engineering at Pulchowk Campus. Ever since I was a child, I’ve been drawn to physics, its clarity, its logic, and the way it explains the world around us. ",
        image: "https://prosikshya.com/storage/thumbnails/67/0b844ddc7c4b82939ccf53de842078",
        session: "both"
    },

];

let filteredTutors = [...tutorsData];
let currentSession = 'all';

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    renderTutors(filteredTutors);
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Session tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentSession = e.target.dataset.session;
            applyFilters();
        });
    });

    // Filter selects
    const filters = ['levelFilter', 'subjectFilter', 'modeFilter', 'locationFilter'];
    filters.forEach(filterId => {
        document.getElementById(filterId).addEventListener('change', applyFilters);
    });

    // Clear filters
    document.getElementById('clearFilters').addEventListener('click', clearFilters);

    // Modal close buttons
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', closeModals);
    });

    // Close modal on outside click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModals();
            }
        });
    });

    // Form submissions
    document.getElementById('bookingForm').addEventListener('submit', handleBooking);
    document.getElementById('messageForm').addEventListener('submit', handleMessage);
}

// Apply filters
function applyFilters() {
    const level = document.getElementById('levelFilter').value.toLowerCase();
    const subject = document.getElementById('subjectFilter').value.toLowerCase();
    const mode = document.getElementById('modeFilter').value.toLowerCase();
    const location = document.getElementById('locationFilter').value.toLowerCase();

    filteredTutors = tutorsData.filter(tutor => {
        // Session filter
        if (currentSession !== 'all') {
            if (currentSession === 'private' && tutor.session === 'group') return false;
            if (currentSession === 'group' && tutor.session === 'private') return false;
        }

        // Level filter
        if (level && !tutor.level.some(l => l.toLowerCase().includes(level))) {
            return false;
        }

        // Subject filter
        if (subject && !tutor.subjects.some(s => s.toLowerCase().includes(subject))) {
            return false;
        }

        // Mode filter
        if (mode && !tutor.mode.some(m => m.toLowerCase().includes(mode))) {
            return false;
        }

        // Location filter
        if (location && !tutor.location.toLowerCase().includes(location)) {
            return false;
        }

        return true;
    });

    renderTutors(filteredTutors);
}

// Clear all filters
function clearFilters() {
    document.getElementById('levelFilter').value = '';
    document.getElementById('subjectFilter').value = '';
    document.getElementById('modeFilter').value = '';
    document.getElementById('locationFilter').value = '';
    currentSession = 'all';

    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.tab-btn[data-session="all"]').classList.add('active');

    applyFilters();
}

// Render tutors
function renderTutors(tutors) {
    const tutorsList = document.getElementById('tutorsList');
    const tutorCount = document.getElementById('tutorCount');

    tutorCount.textContent = tutors.length;

    if (tutors.length === 0) {
        tutorsList.innerHTML = `
            <div style="text-align: center; padding: 3rem; background: white; border-radius: 15px;">
                <h3>No tutors found</h3>
                <p style="color: var(--text-light); margin-top: 1rem;">Try adjusting your filters to see more results.</p>
            </div>
        `;
        return;
    }

    tutorsList.innerHTML = tutors.map(tutor => `
        <div class="tutor-card" data-tutor-id="${tutor.id}">
            <div class="tutor-header">
                <div class="tutor-avatar">
                    <img src="${tutor.image}" alt="${tutor.name}">
                </div>
                <div class="tutor-main-info">
                    <div class="tutor-name-row">
                        <h2 class="tutor-name">${tutor.name}</h2>
                        ${tutor.verified ? '<span class="verified-badge">✓</span>' : ''}
                    </div>
                    <div class="tutor-location">
                        <span>📍</span>
                        <span>${tutor.location}</span>
                    </div>
                    <p class="tutor-tagline">${tutor.tagline}</p>
                    <span class="tutor-badge" style="background: ${tutor.badgeColor}">${tutor.badge}</span>
                </div>
                <div class="tutor-price-section">
                    <div>
                        <div class="tutor-price">रु${tutor.price}</div>
                        <div class="price-details">(${tutor.duration}-min lesson)</div>
                    </div>
                    <button class="favorite-btn" onclick="toggleFavorite(${tutor.id})">
                        <span id="heart-${tutor.id}">♡</span>
                    </button>
                </div>
            </div>

            <div class="tutor-stats">
                <div class="stat-item">
                    <div class="stat-value">
                        <span class="star-rating">★</span>
                        <span>${tutor.rating}</span>
                    </div>
                    <div class="stat-label">${tutor.reviews} reviews</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${tutor.students}</div>
                    <div class="stat-label">Students</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${tutor.lessons}</div>
                    <div class="stat-label">Lessons</div>
                </div>
            </div>

            <div class="tutor-details">
                <div class="detail-row">
                    <span class="detail-icon">📚</span>
                    <span class="detail-label">I can teach</span>
                    <div class="detail-value">
                        ${tutor.subjects.map(s => `<span class="subject-tag">${s}</span>`).join('')}
                    </div>
                </div>
                <div class="detail-row">
                    <span class="detail-icon">🎓</span>
                    <span class="detail-label">Level</span>
                    <div class="detail-value">
                        ${tutor.level.map(l => `<span class="level-tag">${l}</span>`).join('')}
                    </div>
                </div>
                <div class="detail-row">
                    <span class="detail-icon">🗣️</span>
                    <span class="detail-label">Languages</span>
                    <div class="detail-value">
                        ${tutor.languages.map(lang => `<span class="language-tag">${lang}</span>`).join('')}
                    </div>
                </div>
                <div class="detail-row">
                    <span class="detail-icon">💻</span>
                    <span class="detail-label">Mode</span>
                    <div class="detail-value">
                        ${tutor.mode.join(', ')}
                    </div>
                </div>
            </div>

            <p class="tutor-description">${tutor.description}</p>

            <div class="tutor-actions">
                <button class="btn-book" onclick="openBookModal(${tutor.id})">Book Trial Lesson</button>
                <button class="btn-message" onclick="openMessageModal(${tutor.id})">Send Message</button>
            </div>
        </div>
    `).join('');
}

// Toggle favorite
window.toggleFavorite = (tutorId) => {
    const heartIcon = document.getElementById(`heart-${tutorId}`);
    const btn = heartIcon.parentElement;

    if (heartIcon.textContent === '♡') {
        heartIcon.textContent = '♥';
        btn.classList.add('active');
    } else {
        heartIcon.textContent = '♡';
        btn.classList.remove('active');
    }
};

// Open book modal
window.openBookModal = (tutorId) => {
    const tutor = tutorsData.find(t => t.id === tutorId);
    if (!tutor) return;

    const modal = document.getElementById('bookModal');
    const modalInfo = document.getElementById('modalTutorInfo');

    modalInfo.innerHTML = `
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; padding: 1rem; background: var(--light); border-radius: 10px;">
            <img src="${tutor.image}" alt="${tutor.name}" style="width: 60px; height: 60px; border-radius: 10px; object-fit: cover;">
            <div>
                <h3 style="margin: 0;">${tutor.name}</h3>
                <p style="margin: 0; color: var(--text-light);">रु${tutor.price} for ${tutor.duration}-min lesson</p>
            </div>
        </div>
    `;

    modal.classList.add('active');

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('lessonDate').setAttribute('min', today);
};

// Open message modal
window.openMessageModal = (tutorId) => {
    const tutor = tutorsData.find(t => t.id === tutorId);
    if (!tutor) return;

    const modal = document.getElementById('messageModal');
    const modalInfo = document.getElementById('messageTutorInfo');

    modalInfo.innerHTML = `
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; padding: 1rem; background: var(--light); border-radius: 10px;">
            <img src="${tutor.image}" alt="${tutor.name}" style="width: 60px; height: 60px; border-radius: 10px; object-fit: cover;">
            <div>
                <h3 style="margin: 0;">${tutor.name}</h3>
                <p style="margin: 0; color: var(--text-light);">${tutor.location}</p>
            </div>
        </div>
    `;

    modal.classList.add('active');
};

// Close modals
function closeModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
}

// Handle booking
function handleBooking(e) {
    e.preventDefault();

    const formData = {
        date: document.getElementById('lessonDate').value,
        time: document.getElementById('lessonTime').value,
        name: document.getElementById('studentName').value,
        email: document.getElementById('studentEmail').value,
        notes: document.getElementById('notes').value
    };

    alert(`Booking confirmed!\n\nDate: ${formData.date}\nTime: ${formData.time}\nName: ${formData.name}\nEmail: ${formData.email}\n\nYou will receive a confirmation email shortly.`);

    e.target.reset();
    closeModals();
}

// Handle message
function handleMessage(e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('senderName').value,
        email: document.getElementById('senderEmail').value,
        message: document.getElementById('messageText').value
    };

    alert(`Message sent successfully!\n\nFrom: ${formData.name}\nEmail: ${formData.email}\n\nThe tutor will respond to you shortly.`);

    e.target.reset();
    closeModals();
}

console.log('Find a Tutor page loaded successfully!');