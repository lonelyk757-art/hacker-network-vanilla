/**
 * HACKER NETWORK - Cybersecurity News Website
 * Vanilla JavaScript Implementation
 * HTML/CSS/JavaScript Version
 */

// ============================================
// NEWS DATA
// ============================================

const newsArticles = [
    {
        id: 1,
        title: "Major Data Breach Affects 50M Users",
        category: "Breaches",
        threat: "critical",
        date: "2024-04-27",
        author: "Security Analyst Team",
        excerpt: "A significant security breach has exposed personal data of millions of users worldwide.",
        icon: "🔓",
        content: `
            <h3>Incident Overview</h3>
            <p>A critical data breach has been discovered affecting over 50 million users across multiple platforms. The breach, discovered by security researchers on April 27, 2024, exposed sensitive personal information including names, email addresses, phone numbers, and encrypted passwords.</p>
            
            <h3>Technical Details</h3>
            <p>The attack appears to have originated from an unsecured API endpoint that was left exposed on the internet. Attackers exploited this vulnerability to gain unauthorized access to the company's customer database over a period of approximately 6 months.</p>
            
            <h3>Affected Users</h3>
            <p>Users from over 150 countries have been impacted by this breach. The company has begun notifying affected users and offering complimentary credit monitoring services.</p>
            
            <h3>Response Measures</h3>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <li>Immediate shutdown of vulnerable endpoints</li>
                <li>Full forensic investigation underway</li>
                <li>Law enforcement agencies notified</li>
                <li>Enhanced security protocols implemented</li>
                <li>Mandatory password reset for all users</li>
            </ul>
            
            <h3>Recommendations</h3>
            <p>Users are advised to:</p>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <li>Change passwords immediately</li>
                <li>Enable two-factor authentication</li>
                <li>Monitor accounts for suspicious activity</li>
                <li>Consider credit monitoring services</li>
                <li>Be alert to phishing attempts</li>
            </ul>
            
            <p>This incident highlights the critical importance of regular security audits and proper API security practices.</p>
        `
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
        content: `
            <h3>Malware Overview</h3>
            <p>A new and sophisticated ransomware variant has emerged, specifically targeting healthcare institutions and medical facilities worldwide. The ransomware, dubbed "MediCrypt," employs advanced encryption techniques and includes data exfiltration capabilities.</p>
            
            <h3>Attack Vectors</h3>
            <p>The malware spreads through:</p>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <li>Targeted phishing campaigns</li>
                <li>Compromised RDP credentials</li>
                <li>Unpatched vulnerabilities in legacy systems</li>
                <li>Supply chain compromises</li>
            </ul>
            
            <h3>Impact Assessment</h3>
            <p>Healthcare providers report significant operational disruptions, with some facilities forced to divert emergency patients. The attackers are demanding ransoms ranging from $500,000 to $5 million.</p>
            
            <h3>Technical Analysis</h3>
            <p>The malware uses:</p>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <li>AES-256 encryption for files</li>
                <li>RSA-2048 for key exchange</li>
                <li>Custom C2 communication protocol</li>
                <li>Anti-analysis and anti-sandbox techniques</li>
            </ul>
            
            <h3>Mitigation Strategies</h3>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <li>Implement robust backup solutions</li>
                <li>Deploy advanced endpoint detection and response (EDR)</li>
                <li>Conduct regular security awareness training</li>
                <li>Implement network segmentation</li>
                <li>Maintain updated patch management</li>
            </ul>
            
            <p>Healthcare organizations are urged to report incidents to CISA and coordinate with cybersecurity experts immediately.</p>
        `
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
        content: `
            <h3>Vulnerability Details</h3>
            <p>Security researchers have disclosed a critical zero-day vulnerability in a widely-used web application framework. CVE-2024-XXXXX affects all versions prior to the latest patch. The vulnerability allows remote code execution through improper input validation.</p>
            
            <h3>Severity Assessment</h3>
            <p><strong>CVSS Score: 9.8 (Critical)</strong></p>
            
            <h3>Affected Versions</h3>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <li>Framework versions 1.0 through 3.4.x</li>
                <li>Estimated 2+ million applications affected</li>
            </ul>
            
            <h3>Exploitation Details</h3>
            <p>The vulnerability can be exploited by sending specially crafted requests to vulnerable endpoints. No authentication is required. A functional exploit has been publicly disclosed, increasing the risk of widespread attacks.</p>
            
            <h3>Remediation Steps</h3>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <li>Update to the latest patched version immediately</li>
                <li>Implement Web Application Firewall (WAF) rules</li>
                <li>Monitor for suspicious activity</li>
                <li>Review access logs for exploitation attempts</li>
            </ul>
            
            <h3>Timeline</h3>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <li>April 20: Vulnerability discovered</li>
                <li>April 22: Vendor notified</li>
                <li>April 25: Public disclosure</li>
                <li>April 25: Patch released</li>
            </ul>
            
            <p>Organizations using this framework should prioritize patching immediately.</p>
        `
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
        content: `
            <h3>Bill Overview</h3>
            <p>A new surveillance bill has been proposed in parliament, raising significant privacy concerns among civil liberties organizations and cybersecurity experts.</p>
            
            <h3>Key Provisions</h3>
            <p>The legislation would grant law enforcement agencies broad powers to:</p>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <li>Conduct mass surveillance of digital communications</li>
                <li>Access encrypted communications with court orders</li>
                <li>Mandate backdoors in encryption technologies</li>
                <li>Require ISPs to retain user data for extended periods</li>
            </ul>
            
            <h3>Privacy Implications</h3>
            <p>Civil liberties groups argue the bill would:</p>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <li>Violate fundamental privacy rights</li>
                <li>Weaken security for all users</li>
                <li>Create vulnerabilities that criminals could exploit</li>
                <li>Disproportionately impact marginalized communities</li>
            </ul>
            
            <h3>Industry Response</h3>
            <p>Technology companies and security experts have expressed serious concerns:</p>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <li>Backdoors weaken security for everyone</li>
                <li>Encryption is essential for cybersecurity</li>
                <li>Mass surveillance is ineffective and costly</li>
                <li>Alternative approaches exist</li>
            </ul>
            
            <h3>Timeline</h3>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <li>April 20: Bill introduced</li>
                <li>April 24: Hearings begin</li>
                <li>May 1: Committee vote scheduled</li>
            </ul>
            
            <p>This debate highlights the ongoing tension between security and privacy in the digital age.</p>
        `
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
        content: `
            <h3>Incident Overview</h3>
            <p>A major cryptocurrency exchange has suffered a devastating security breach, resulting in the loss of approximately $100 million in digital assets. The exchange, one of the world's largest, was compromised through a sophisticated multi-stage attack targeting their hot wallet infrastructure.</p>
            
            <h3>Attack Timeline</h3>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <li>April 15: Initial reconnaissance</li>
                <li>April 18: Lateral movement through network</li>
                <li>April 22: Unauthorized wallet access</li>
                <li>April 23: Breach discovered</li>
            </ul>
            
            <h3>Technical Analysis</h3>
            <p>The attackers exploited:</p>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <li>Misconfigured cloud infrastructure</li>
                <li>Weak API authentication</li>
                <li>Insufficient monitoring and alerting</li>
                <li>Outdated security protocols</li>
            </ul>
            
            <h3>Funds Affected</h3>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <li>Bitcoin: 2,500 BTC (~$100M USD equivalent)</li>
                <li>Other cryptocurrencies: Minor amounts</li>
                <li>User accounts: Partially compromised</li>
            </ul>
            
            <h3>Response Measures</h3>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <li>All trading suspended</li>
                <li>Wallets moved to cold storage</li>
                <li>Law enforcement notified</li>
                <li>Forensic investigation initiated</li>
                <li>Affected users being compensated</li>
            </ul>
            
            <h3>Lessons Learned</h3>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <li>Implement hardware security modules</li>
                <li>Use multi-signature authentication</li>
                <li>Conduct regular security audits</li>
                <li>Maintain robust monitoring systems</li>
                <li>Have incident response plans</li>
            </ul>
        `
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
        content: `
            <h3>Research Findings</h3>
            <p>A comprehensive study of AI-powered security solutions shows significant improvements in threat detection and response capabilities.</p>
            
            <h3>Key Results</h3>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <li>40% improvement in threat detection accuracy</li>
                <li>60% reduction in false positives</li>
                <li>80% faster incident response times</li>
                <li>50% reduction in security team workload</li>
            </ul>
            
            <h3>Key Technologies</h3>
            <p><strong>Machine Learning Models:</strong></p>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <li>Behavioral analysis</li>
                <li>Anomaly detection</li>
                <li>Pattern recognition</li>
            </ul>
            
            <p><strong>Natural Language Processing:</strong></p>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <li>Threat intelligence analysis</li>
                <li>Vulnerability description parsing</li>
                <li>Report generation</li>
            </ul>
            
            <p><strong>Deep Learning:</strong></p>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <li>Image-based malware detection</li>
                <li>Network traffic analysis</li>
                <li>Zero-day prediction</li>
            </ul>
            
            <h3>Practical Applications</h3>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <li>Endpoint Detection and Response (EDR)</li>
                <li>Security Information and Event Management (SIEM)</li>
                <li>Threat Intelligence Platforms</li>
                <li>Vulnerability Management Systems</li>
            </ul>
            
            <h3>Future Outlook</h3>
            <p>AI will continue to play an increasingly important role in cybersecurity, with emerging technologies like quantum computing and advanced neural networks offering new possibilities. Organizations should begin evaluating AI-powered security solutions to stay ahead of evolving threats.</p>
        `
    }
];

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Format date to readable format
 */
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

/**
 * Get threat level class
 */
function getThreatClass(threat) {
    const threatMap = {
        'critical': 'threat-critical',
        'high': 'threat-high',
        'medium': 'threat-medium',
        'low': 'threat-low'
    };
    return threatMap[threat] || 'threat-low';
}

/**
 * Get threat level display text
 */
function getThreatText(threat) {
    return threat.charAt(0).toUpperCase() + threat.slice(1).toUpperCase();
}

// ============================================
// RENDER NEWS FEED
// ============================================

function renderNewsFeed() {
    const newsGrid = document.getElementById('newsGrid');
    
    newsGrid.innerHTML = newsArticles.map(article => `
        <div class="news-card" onclick="viewArticle(${article.id})">
            <div class="news-card-image">${article.icon}</div>
            <div class="news-card-body">
                <div class="news-card-header">
                    <span class="news-category">
                        <span style="margin-right: 0.25rem;">${getCategoryIcon(article.category)}</span>
                        ${article.category}
                    </span>
                    <span class="threat-badge ${getThreatClass(article.threat)}">
                        ${getThreatText(article.threat)}
                    </span>
                </div>
                <h3 class="news-card-title">${article.title}</h3>
                <p class="news-card-excerpt">${article.excerpt}</p>
                <div class="news-card-footer">
                    <time>${formatDate(article.date)}</time>
                    <span class="read-more">READ MORE →</span>
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * Get category icon
 */
function getCategoryIcon(category) {
    const icons = {
        'Breaches': '🔓',
        'Vulnerabilities': '🛡️',
        'Malware': '🦠',
        'Privacy': '👁️',
        'Technology': '🤖'
    };
    return icons[category] || '📰';
}

// ============================================
// ARTICLE MODAL
// ============================================

/**
 * View article in modal
 */
function viewArticle(articleId) {
    const article = newsArticles.find(a => a.id === articleId);
    if (!article) return;

    const modal = document.getElementById('articleModal');
    const articleContent = document.getElementById('articleContent');

    const threatClass = getThreatClass(article.threat);
    const alertHTML = article.threat === 'critical' ? `
        <div class="alert-critical">
            <div class="alert-critical-icon">⚠️</div>
            <div class="alert-critical-content">
                <h3>CRITICAL THREAT</h3>
                <p>This is a critical security issue requiring immediate attention. Organizations should take action immediately.</p>
            </div>
        </div>
    ` : '';

    articleContent.innerHTML = `
        <div class="article-header">
            <div class="article-badges">
                <span class="news-category">
                    <span style="margin-right: 0.25rem;">${getCategoryIcon(article.category)}</span>
                    ${article.category}
                </span>
                <span class="threat-badge ${threatClass}">
                    ${getThreatText(article.threat)} THREAT
                </span>
            </div>
            <h2 class="article-title">${article.title}</h2>
            <div class="article-meta">
                <span>By ${article.author}</span>
                <span>•</span>
                <span>${formatDate(article.date)}</span>
                <span>•</span>
                <span>5 min read</span>
            </div>
        </div>
        ${alertHTML}
        <p style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 1.5rem;">${article.excerpt}</p>
        <div class="article-body">
            ${article.content}
        </div>
        <div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
            <button class="btn-secondary" onclick="closeArticle()">Close Article</button>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Close article modal
 */
function closeArticle() {
    const modal = document.getElementById('articleModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ============================================
// EVENT LISTENERS
// ============================================

/**
 * Close modal when clicking outside content
 */
document.addEventListener('DOMContentLoaded', function() {
    // Render news feed
    renderNewsFeed();

    // Close modal on outside click
    const modal = document.getElementById('articleModal');
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeArticle();
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeArticle();
        }
    });

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Add hover effects to news cards
    document.querySelectorAll('.news-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Subscribe button functionality
    document.querySelectorAll('.subscribe-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Subscribe feature coming soon! Stay tuned for updates.');
        });
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.news-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});

// ============================================
// UTILITY: Get category icon
// ============================================

function getCategoryIcon(category) {
    const icons = {
        'Breaches': '🔓',
        'Vulnerabilities': '🛡️',
        'Malware': '🦠',
        'Privacy': '👁️',
        'Technology': '🤖'
    };
    return icons[category] || '📰';
}
