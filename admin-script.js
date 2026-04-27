/**
 * HACKER NETWORK - Admin Panel JavaScript
 * Complete admin functionality with data persistence
 */

// ============================================
// CONFIGURATION
// ============================================

const ADMIN_PASSWORD = 'admin123';
const STORAGE_KEY = 'hackerNetworkArticles';
const PASSWORD_KEY = 'hackerNetworkAdminPassword';
const SESSION_KEY = 'hackerNetworkAdminSession';

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    if (!isUserLoggedIn()) {
        showLoginScreen();
    } else {
        showAdminDashboard();
        loadArticles();
        updateStatistics();
    }

    // Set today's date as default
    document.getElementById('date').valueAsDate = new Date();
});

// ============================================
// AUTHENTICATION
// ============================================

function isUserLoggedIn() {
    return sessionStorage.getItem(SESSION_KEY) === 'true';
}

function handleLogin(event) {
    event.preventDefault();
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;

    // Get stored password or use default
    const storedPassword = localStorage.getItem(PASSWORD_KEY) || ADMIN_PASSWORD;

    if (password === storedPassword) {
        sessionStorage.setItem(SESSION_KEY, 'true');
        showAdminDashboard();
        loadArticles();
        updateStatistics();
        showNotification('Login successful!', 'success');
    } else {
        showNotification('Invalid password. Try: admin123', 'error');
        passwordInput.value = '';
    }
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        sessionStorage.removeItem(SESSION_KEY);
        showLoginScreen();
        showNotification('Logged out successfully', 'success');
    }
}

function showLoginScreen() {
    document.getElementById('loginScreen').classList.add('active');
    document.getElementById('adminDashboard').style.display = 'none';
}

function showAdminDashboard() {
    document.getElementById('loginScreen').classList.remove('active');
    document.getElementById('adminDashboard').style.display = 'flex';
}

// ============================================
// TAB SWITCHING
// ============================================

function switchTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove active class from all menu items
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });

    // Show selected tab
    document.getElementById(tabName + 'Tab').classList.add('active');

    // Add active class to clicked menu item
    event.target.classList.add('active');

    // Update statistics when stats tab is opened
    if (tabName === 'stats') {
        updateStatistics();
    }
}

// ============================================
// ARTICLE MANAGEMENT
// ============================================

function loadArticles() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
        // Load default articles
        loadDefaultArticles();
    } else {
        window.articles = JSON.parse(stored);
    }
    renderArticlesTable();
}

function loadDefaultArticles() {
    window.articles = [
        {
            id: 1,
            title: "Major Data Breach Affects 50M Users",
            category: "Breaches",
            threat: "critical",
            date: "2024-04-27",
            author: "Security Analyst Team",
            excerpt: "A significant security breach has exposed personal data of millions of users worldwide.",
            icon: "🔓",
            content: "<h3>Incident Overview</h3><p>A critical data breach has been discovered affecting over 50 million users...</p>"
        },
        {
            id: 2,
            title: "New Ransomware Variant Targets Healthcare",
            category: "Malware",
            threat: "high",
            date: "2024-04-26",
            author: "Threat Intelligence Division",
            excerpt: "Security researchers discover a sophisticated ransomware targeting healthcare institutions.",
            icon: "🦠",
            content: "<h3>Malware Overview</h3><p>A new and sophisticated ransomware variant has emerged...</p>"
        },
        {
            id: 3,
            title: "Zero-Day Vulnerability in Popular Framework",
            category: "Vulnerabilities",
            threat: "high",
            date: "2024-04-25",
            author: "Vulnerability Research Team",
            excerpt: "A critical zero-day vulnerability has been discovered in a widely-used web framework.",
            icon: "⚠️",
            content: "<h3>Vulnerability Details</h3><p>Security researchers have disclosed a critical zero-day vulnerability...</p>"
        },
        {
            id: 4,
            title: "Privacy Concerns Over New Surveillance Bill",
            category: "Privacy",
            threat: "medium",
            date: "2024-04-24",
            author: "Policy Analysis Team",
            excerpt: "Lawmakers propose controversial surveillance legislation raising privacy concerns.",
            icon: "👁️",
            content: "<h3>Bill Overview</h3><p>A new surveillance bill has been proposed in parliament...</p>"
        },
        {
            id: 5,
            title: "Cryptocurrency Exchange Loses $100M in Hack",
            category: "Breaches",
            threat: "critical",
            date: "2024-04-23",
            author: "Financial Security Team",
            excerpt: "Major cryptocurrency exchange falls victim to sophisticated hacking attack.",
            icon: "💰",
            content: "<h3>Incident Overview</h3><p>A major cryptocurrency exchange has suffered a devastating security breach...</p>"
        },
        {
            id: 6,
            title: "AI-Powered Security Tools Show Promise",
            category: "Technology",
            threat: "low",
            date: "2024-04-22",
            author: "Technology Innovation Team",
            excerpt: "New AI-powered security tools demonstrate significant improvements in threat detection.",
            icon: "🤖",
            content: "<h3>Research Findings</h3><p>A comprehensive study of AI-powered security solutions shows...</p>"
        }
    ];
    saveArticles();
}

function saveArticles() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(window.articles));
}

function renderArticlesTable() {
    const tbody = document.getElementById('articlesTableBody');
    tbody.innerHTML = window.articles.map(article => `
        <tr>
            <td>${article.title}</td>
            <td>${article.category}</td>
            <td><span class="threat-badge threat-${article.threat}">${article.threat.toUpperCase()}</span></td>
            <td>${new Date(article.date).toLocaleDateString()}</td>
            <td>${article.author}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-edit" onclick="openEditModal(${article.id})">Edit</button>
                    <button class="btn-delete" onclick="deleteArticle(${article.id})">Delete</button>
                </div>
            </td>
        </tr>
    `).join('');
}

function filterArticles() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const tbody = document.getElementById('articlesTableBody');
    
    const filtered = window.articles.filter(article => 
        article.title.toLowerCase().includes(searchTerm) ||
        article.category.toLowerCase().includes(searchTerm) ||
        article.author.toLowerCase().includes(searchTerm)
    );

    tbody.innerHTML = filtered.map(article => `
        <tr>
            <td>${article.title}</td>
            <td>${article.category}</td>
            <td><span class="threat-badge threat-${article.threat}">${article.threat.toUpperCase()}</span></td>
            <td>${new Date(article.date).toLocaleDateString()}</td>
            <td>${article.author}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-edit" onclick="openEditModal(${article.id})">Edit</button>
                    <button class="btn-delete" onclick="deleteArticle(${article.id})">Delete</button>
                </div>
            </td>
        </tr>
    `).join('');
}

function handleCreateArticle(event) {
    event.preventDefault();

    const newArticle = {
        id: Math.max(...window.articles.map(a => a.id), 0) + 1,
        title: document.getElementById('title').value,
        category: document.getElementById('category').value,
        threat: document.getElementById('threat').value,
        date: document.getElementById('date').value,
        author: document.getElementById('author').value,
        excerpt: document.getElementById('excerpt').value,
        icon: document.getElementById('icon').value,
        content: document.getElementById('content').value
    };

    window.articles.push(newArticle);
    saveArticles();
    renderArticlesTable();
    event.target.reset();
    document.getElementById('date').valueAsDate = new Date();
    showNotification('Article created successfully!', 'success');
    switchTab('articles');
}

function openEditModal(articleId) {
    const article = window.articles.find(a => a.id === articleId);
    if (!article) return;

    document.getElementById('editId').value = article.id;
    document.getElementById('editTitle').value = article.title;
    document.getElementById('editCategory').value = article.category;
    document.getElementById('editThreat').value = article.threat;
    document.getElementById('editAuthor').value = article.author;
    document.getElementById('editDate').value = article.date;
    document.getElementById('editExcerpt').value = article.excerpt;
    document.getElementById('editContent').value = article.content;

    document.getElementById('editModal').classList.add('active');
}

function closeEditModal() {
    document.getElementById('editModal').classList.remove('active');
}

function handleEditArticle(event) {
    event.preventDefault();

    const articleId = parseInt(document.getElementById('editId').value);
    const article = window.articles.find(a => a.id === articleId);

    if (article) {
        article.title = document.getElementById('editTitle').value;
        article.category = document.getElementById('editCategory').value;
        article.threat = document.getElementById('editThreat').value;
        article.author = document.getElementById('editAuthor').value;
        article.date = document.getElementById('editDate').value;
        article.excerpt = document.getElementById('editExcerpt').value;
        article.content = document.getElementById('editContent').value;

        saveArticles();
        renderArticlesTable();
        closeEditModal();
        showNotification('Article updated successfully!', 'success');
    }
}

function deleteArticle(articleId) {
    if (confirm('Are you sure you want to delete this article?')) {
        window.articles = window.articles.filter(a => a.id !== articleId);
        saveArticles();
        renderArticlesTable();
        updateStatistics();
        showNotification('Article deleted successfully!', 'success');
    }
}

// ============================================
// STATISTICS
// ============================================

function updateStatistics() {
    const articles = window.articles || [];

    // Total articles
    document.getElementById('totalArticles').textContent = articles.length;

    // Threat counts
    const criticalCount = articles.filter(a => a.threat === 'critical').length;
    const highCount = articles.filter(a => a.threat === 'high').length;
    const mediumCount = articles.filter(a => a.threat === 'medium').length;

    document.getElementById('criticalCount').textContent = criticalCount;
    document.getElementById('highCount').textContent = highCount;
    document.getElementById('mediumCount').textContent = mediumCount;

    // Category stats
    const categoryStats = {};
    articles.forEach(article => {
        categoryStats[article.category] = (categoryStats[article.category] || 0) + 1;
    });

    const categoryStatsDiv = document.getElementById('categoryStats');
    categoryStatsDiv.innerHTML = Object.entries(categoryStats).map(([category, count]) => `
        <div class="category-stat">
            <div class="category-stat-name">${category}</div>
            <div class="category-stat-count">${count}</div>
        </div>
    `).join('');
}

// ============================================
// DATA MANAGEMENT
// ============================================

function exportData() {
    const articles = window.articles || [];
    const dataStr = JSON.stringify(articles, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `hacker-network-articles-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    showNotification('Data exported successfully!', 'success');
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            if (Array.isArray(importedData)) {
                window.articles = importedData;
                saveArticles();
                renderArticlesTable();
                updateStatistics();
                showNotification('Data imported successfully!', 'success');
            } else {
                showNotification('Invalid data format. Expected an array of articles.', 'error');
            }
        } catch (error) {
            showNotification('Error parsing JSON file: ' + error.message, 'error');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

function resetToDefault() {
    if (confirm('Are you sure you want to reset all articles to default? This cannot be undone.')) {
        localStorage.removeItem(STORAGE_KEY);
        loadDefaultArticles();
        renderArticlesTable();
        updateStatistics();
        showNotification('Articles reset to default!', 'success');
    }
}

// ============================================
// PASSWORD MANAGEMENT
// ============================================

function handleChangePassword(event) {
    event.preventDefault();

    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const storedPassword = localStorage.getItem(PASSWORD_KEY) || ADMIN_PASSWORD;

    if (currentPassword !== storedPassword) {
        showNotification('Current password is incorrect!', 'error');
        return;
    }

    if (newPassword !== confirmPassword) {
        showNotification('New passwords do not match!', 'error');
        return;
    }

    if (newPassword.length < 6) {
        showNotification('New password must be at least 6 characters long!', 'error');
        return;
    }

    localStorage.setItem(PASSWORD_KEY, newPassword);
    event.target.reset();
    showNotification('Password changed successfully!', 'success');
}

// ============================================
// NOTIFICATIONS
// ============================================

function showNotification(message, type = 'info') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification show ${type}`;

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('editModal');
    if (event.target === modal) {
        closeEditModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeEditModal();
    }
});
