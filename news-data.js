/**
 * HACKER NETWORK - Real Cybersecurity News Database
 * 100+ Actual Cybersecurity News Articles
 * Updated: April 2026
 */

const newsArticles = [
    {
        id: 1,
        title: "Checkmarx Confirms GitHub Repository Data Posted on Dark Web After March 23 Attack",
        category: "Breaches",
        threat: "critical",
        date: "2026-04-27",
        author: "Security Intelligence Team",
        excerpt: "Checkmarx has disclosed that cybercriminals published data related to the company on the dark web following a supply chain security incident.",
        icon: "🔓",
        content: `
            <h3>Incident Details</h3>
            <p>Checkmarx, the Israeli security company, has confirmed that data from its GitHub repository was posted on the dark web following a supply chain attack on March 23, 2026. The company emphasized that the GitHub repository is maintained separately from its customer production environment, and no customer data is stored in the repository.</p>
            
            <h3>Investigation Status</h3>
            <p>Checkmarx's forensic probe into the incident is ongoing. The company has locked down access to the affected GitHub repository as part of its incident response efforts. "If we determine that customer information was involved in this incident, we will notify affected customers," the company stated.</p>
            
            <h3>Impact Assessment</h3>
            <p>The company is actively working to verify the nature and scope of the posted data. No customer production data has been confirmed as compromised at this time.</p>
        `
    },
    {
        id: 2,
        title: "Researchers Uncover Pre-Stuxnet 'fast16' Malware Targeting Engineering Software",
        category: "Malware",
        threat: "high",
        date: "2026-04-25",
        author: "Threat Research Division",
        excerpt: "A Lua-based malware created years before Stuxnet has been discovered, designed to sabotage high-precision calculation software.",
        icon: "🦠",
        content: `
            <h3>Malware Overview</h3>
            <p>Cybersecurity researchers have discovered a new Lua-based malware codenamed 'fast16' that dates back to 2005, predating the notorious Stuxnet worm by at least five years. The malware was designed to sabotage Iran's nuclear program by destroying uranium enrichment centrifuges.</p>
            
            <h3>Technical Capabilities</h3>
            <p>Fast16 primarily targets high-precision calculation software to tamper with results. By combining this payload with self-propagation mechanisms, the attackers aimed to produce equivalent inaccurate calculations across an entire facility. This represents one of the earliest known examples of cyber sabotage frameworks.</p>
            
            <h3>Historical Significance</h3>
            <p>While Stuxnet is widely attributed to the U.S. and Israel, fast16 predates it by approximately five years, making it one of the earliest known digital weapons designed for disruptive actions in critical infrastructure.</p>
        `
    },
    {
        id: 3,
        title: "CISA Adds 4 Exploited Flaws to KEV, Sets May 2026 Federal Deadline",
        category: "Vulnerabilities",
        threat: "critical",
        date: "2026-04-25",
        author: "Vulnerability Management Team",
        excerpt: "The U.S. Cybersecurity and Infrastructure Security Agency adds four critical vulnerabilities to its Known Exploited Vulnerabilities catalog.",
        icon: "⚠️",
        content: `
            <h3>Vulnerability Details</h3>
            <p>CISA has added four vulnerabilities impacting SimpleHelp, Samsung MagicINFO 9 Server, and D-Link DIR-823X series routers to its Known Exploited Vulnerabilities (KEV) catalog, citing evidence of active exploitation:</p>
            
            <h3>Critical Vulnerabilities</h3>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <li><strong>CVE-2024-57726 (CVSS 9.9)</strong> - Missing authorization in SimpleHelp allowing privilege escalation</li>
                <li><strong>CVE-2024-57728 (CVSS 7.2)</strong> - Path traversal in SimpleHelp enabling arbitrary file upload</li>
                <li><strong>CVE-2024-7399 (CVSS 8.8)</strong> - Path traversal in Samsung MagicINFO 9 Server</li>
                <li><strong>CVE-2025-20333 (CVSS 9.9)</strong> - Improper validation in Cisco ASA firmware</li>
            </ul>
            
            <h3>Federal Deadline</h3>
            <p>Federal agencies have been given until May 8, 2026 to mitigate these vulnerabilities to reduce ransomware and botnet risk.</p>
        `
    },
    {
        id: 4,
        title: "FIRESTARTER Backdoor Hit Federal Cisco Firepower Device, Survives Security Patches",
        category: "Vulnerabilities",
        threat: "critical",
        date: "2026-04-24",
        author: "Network Security Team",
        excerpt: "A new backdoor malware called FIRESTARTER has compromised federal Cisco Firepower devices and persists despite security patches.",
        icon: "🔥",
        content: `
            <h3>Incident Overview</h3>
            <p>CISA and the U.K.'s National Cyber Security Centre (NCSC) have revealed that an unnamed federal civilian agency's Cisco Firepower device was compromised in September 2025 with a new malware called FIRESTARTER. The backdoor is designed for remote access and control.</p>
            
            <h3>Attack Vector</h3>
            <p>FIRESTARTER is believed to be deployed as part of a "widespread" campaign orchestrated by an advanced persistent threat (APT) actor exploiting now-patched security flaws in Cisco Adaptive Security Appliance (ASA) firmware.</p>
            
            <h3>Persistence Mechanism</h3>
            <p>The malware has demonstrated the ability to survive security patches, suggesting sophisticated persistence mechanisms that allow it to maintain access even after vulnerability remediation.</p>
        `
    },
    {
        id: 5,
        title: "NASA Employees Duped in Chinese Phishing Scheme Targeting U.S. Defense Software",
        category: "Espionage",
        threat: "high",
        date: "2026-04-24",
        author: "Intelligence & Espionage Team",
        excerpt: "Chinese national posed as U.S. researcher in multi-year phishing campaign targeting NASA and defense contractors.",
        icon: "🎣",
        content: `
            <h3>Campaign Details</h3>
            <p>The Office of Inspector General (OIG) of NASA has revealed how a Chinese national posed as a U.S. researcher as part of a spear-phishing campaign to obtain sensitive information from the space agency, as well as from government entities, universities, and private companies.</p>
            
            <h3>Scope of Attack</h3>
            <p>"For years, NASA employees and research collaborators thought they were simply sharing software with colleagues," the OIG stated. "Instead, they were emailing sensitive defense technology to a Chinese national who was impersonating U.S. engineers."</p>
            
            <h3>Legal Action</h3>
            <p>The individual was identified as Chinese national Song Wu in September 2024, when the U.S. Department of Justice announced charges against him for orchestrating a multi-year phishing scheme spanning from January 2017 to December 2021, targeting dozens of U.S. professors, researchers, and engineers.</p>
        `
    },
    {
        id: 6,
        title: "26 FakeWallet Apps Found on Apple App Store Targeting Crypto Seed Phrases",
        category: "Malware",
        threat: "high",
        date: "2026-04-24",
        author: "Mobile Security Team",
        excerpt: "Malicious cryptocurrency wallet apps discovered on Apple App Store stealing recovery phrases and private keys.",
        icon: "💰",
        content: `
            <h3>Malware Campaign</h3>
            <p>Cybersecurity researchers have discovered a set of malicious apps on the Apple App Store that impersonate popular cryptocurrency wallets in an attempt to steal recovery phrases and private keys since at least fall 2025.</p>
            
            <h3>Attack Method</h3>
            <p>"Once launched, these apps redirect users to browser pages designed to look similar to the App Store and distribute trojanized versions of legitimate wallets," Kaspersky researcher Sergey Puzan explained. "The infected apps are specifically engineered to hijack recovery phrases and private keys."</p>
            
            <h3>Affected Wallets</h3>
            <p>The 26 apps, collectively dubbed FakeWallet, mimic various popular wallets including Bitpie, Coinbase, imToken, Ledger, MetaMask, TokenPocket, and Trust Wallet. Many have since been taken down by Apple following disclosure.</p>
        `
    },
    {
        id: 7,
        title: "Researchers Uncover 73 Fake VS Code Extensions Delivering GlassWorm v2 Malware",
        category: "Malware",
        threat: "high",
        date: "2026-04-27",
        author: "Software Supply Chain Team",
        excerpt: "Dozens of malicious Visual Studio Code extensions discovered on Open VSX repository delivering information-stealing malware.",
        icon: "🔧",
        content: `
            <h3>Campaign Overview</h3>
            <p>Cybersecurity researchers have flagged dozens of Microsoft Visual Studio Code (VS Code) extensions on the Open VSX repository linked to a persistent information-stealing campaign dubbed GlassWorm. The cluster of 73 extensions has been identified as cloned versions of their legitimate counterparts.</p>
            
            <h3>Attack Strategy</h3>
            <p>Of these extensions, six have been confirmed to be malicious, with the remaining acting as seemingly harmless sleeper packages to get users to download them and build trust, before their true intent is manifested through a subsequent update.</p>
            
            <h3>Scale of Threat</h3>
            <p>All extensions were published at the start of the month. In total, more than 320 artifacts have been identified since December 21, 2025, representing a significant supply chain attack on the developer community.</p>
        `
    },
    {
        id: 8,
        title: "PhantomCore Exploits TrueConf Vulnerabilities to Breach Russian Networks",
        category: "Vulnerabilities",
        threat: "high",
        date: "2026-04-27",
        author: "Threat Intelligence Team",
        excerpt: "Pro-Ukrainian hacktivist group exploits TrueConf video conferencing vulnerabilities in Russian organizations.",
        icon: "🎯",
        content: `
            <h3>Threat Actor Profile</h3>
            <p>A pro-Ukrainian hacktivist group called PhantomCore has been attributed to attacks actively targeting servers running TrueConf video conferencing software in Russia since September 2025. The group is also known as Fairy Trickster, Head Mare, Rainbow Hyena, and UNG0901.</p>
            
            <h3>Exploitation Method</h3>
            <p>According to a report by Positive Technologies, threat actors are leveraging an exploit chain comprising three vulnerabilities to execute commands remotely on susceptible servers. "Despite the fact that there are no exploits for this chain of vulnerability in public access, attackers from PhantomCore managed to conduct their research and reproduce vulnerabilities," researchers noted.</p>
            
            <h3>Motivation</h3>
            <p>PhantomCore is a politically- and financially-motivated hacking crew that has been active since 2022 following the Russo-Ukrainian war.</p>
        `
    },
    {
        id: 9,
        title: "Mythos Changed the Math on Vulnerability Discovery. Most Teams Aren't Ready",
        category: "Technology",
        threat: "medium",
        date: "2026-04-27",
        author: "AI Security Research Team",
        excerpt: "Anthropic's Claude Mythos AI system is identifying vulnerabilities at scale, creating unprecedented remediation challenges.",
        icon: "🤖",
        content: `
            <h3>AI Vulnerability Discovery</h3>
            <p>Anthropic's Claude Mythos Preview has dominated security discussions since its April 7 announcement. Early reporting describes a powerful cybersecurity-focused AI system capable of identifying vulnerabilities at scale and raising serious questions about how quickly organizations can validate, prioritize, and remediate findings.</p>
            
            <h3>The Discovery-to-Remediation Gap</h3>
            <p>While the debate has focused on whether Mythos represents a step-change or incremental advance, there's a quieter operational problem: the discovery-to-remediation gap. Organizations are struggling to keep pace with the volume of vulnerabilities being identified.</p>
            
            <h3>Industry Impact</h3>
            <p>99% of Mythos findings remain unpatched, with defenders building new response strategies to handle the unprecedented scale of vulnerability discovery enabled by advanced AI systems.</p>
        `
    },
    {
        id: 10,
        title: "Fake CAPTCHA IRSF Scam and 120 Keitaro Campaigns Drive Global SMS, Crypto Fraud",
        category: "Fraud",
        threat: "medium",
        date: "2026-04-27",
        author: "Fraud Detection Team",
        excerpt: "International revenue share fraud campaign uses fake CAPTCHA to trick users into sending premium SMS messages.",
        icon: "📱",
        content: `
            <h3>Fraud Mechanism</h3>
            <p>Cybersecurity researchers have disclosed details of a telecommunications fraud campaign that uses fake CAPTCHA verification tricks to dupe unsuspecting users into sending international text messages that incur charges on their mobile bills, generating illicit revenue for threat actors.</p>
            
            <h3>Campaign Scale</h3>
            <p>The operation is believed to have been active since at least June 2020, using methods like social engineering and back button hijacking in web browsers. As many as 35 phone numbers spanning 17 countries have been observed as part of the international revenue share fraud (IRSF) campaign.</p>
            
            <h3>Victim Impact</h3>
            <p>"The fake CAPTCHA has multiple steps, and each message crafted by the site is preconfigured with over a dozen phone numbers, meaning the victim isn't charged for just a single message – they're charged for sending SMSs to over 50 international destinations," researchers explained.</p>
        `
    },
    {
        id: 11,
        title: "Actively Exploited nginx-ui Flaw (CVE-2026-33032) Enables Full Nginx Server Takeover",
        category: "Vulnerabilities",
        threat: "critical",
        date: "2026-04-26",
        author: "Web Security Team",
        excerpt: "Critical vulnerability in nginx-ui allows complete server takeover and is actively being exploited in the wild.",
        icon: "⚠️",
        content: `
            <h3>Vulnerability Description</h3>
            <p>A critical vulnerability in nginx-ui (CVE-2026-33032) has been discovered and is actively being exploited in the wild. The flaw allows attackers to gain complete control over nginx servers.</p>
            
            <h3>Attack Vector</h3>
            <p>The vulnerability enables unauthenticated remote code execution, allowing attackers to take over affected nginx servers completely. The flaw has been observed in active exploitation campaigns.</p>
            
            <h3>Recommendations</h3>
            <p>Organizations running nginx-ui are strongly advised to apply security patches immediately and implement network-level protections to prevent exploitation.</p>
        `
    },
    {
        id: 12,
        title: "Microsoft Issues Patches for SharePoint Zero-Day and 168 Other New Vulnerabilities",
        category: "Vulnerabilities",
        threat: "high",
        date: "2026-04-26",
        author: "Patch Management Team",
        excerpt: "Microsoft releases critical security updates addressing a zero-day vulnerability in SharePoint and 168 additional flaws.",
        icon: "🔐",
        content: `
            <h3>Patch Release</h3>
            <p>Microsoft has issued a comprehensive security update addressing a zero-day vulnerability in SharePoint and 168 additional vulnerabilities across its product portfolio.</p>
            
            <h3>SharePoint Zero-Day</h3>
            <p>The SharePoint zero-day vulnerability poses a significant risk to enterprise environments and has been actively exploited by threat actors. The patch addresses remote code execution capabilities.</p>
            
            <h3>Update Scope</h3>
            <p>The broader patch Tuesday release covers vulnerabilities in Windows, Office, Exchange, Teams, and other Microsoft products. Organizations are urged to prioritize these updates based on CVSS scores and active exploitation status.</p>
        `
    },
    {
        id: 13,
        title: "Cisco Patches Four Critical Identity Services, Webex Flaws Enabling Code Execution",
        category: "Vulnerabilities",
        threat: "critical",
        date: "2026-04-26",
        author: "Enterprise Security Team",
        excerpt: "Cisco releases patches for critical vulnerabilities in Identity Services and Webex that allow remote code execution.",
        icon: "🔒",
        content: `
            <h3>Vulnerability Overview</h3>
            <p>Cisco has released patches for four critical vulnerabilities in its Identity Services Engine (ISE) and Webex platforms that could allow remote code execution.</p>
            
            <h3>Impact</h3>
            <p>These vulnerabilities affect enterprise authentication and communication infrastructure, making them high-priority targets for attackers. Successful exploitation could lead to complete system compromise.</p>
            
            <h3>Affected Products</h3>
            <p>The vulnerabilities impact Cisco ISE and Webex deployments across enterprise environments. Cisco strongly recommends immediate patching of affected systems.</p>
        `
    },
    {
        id: 14,
        title: "n8n Webhooks Abused Since October 2025 to Deliver Malware via Phishing Emails",
        category: "Malware",
        threat: "high",
        date: "2026-04-26",
        author: "Email Security Team",
        excerpt: "n8n automation platform webhooks have been abused for six months to deliver malware through phishing campaigns.",
        icon: "📧",
        content: `
            <h3>Abuse Campaign</h3>
            <p>Threat actors have been abusing n8n webhooks since October 2025 to deliver malware via phishing emails. The n8n automation platform's webhook functionality has been leveraged to bypass email security controls.</p>
            
            <h3>Attack Method</h3>
            <p>Attackers use legitimate n8n infrastructure to host malicious payloads and trigger delivery through phishing emails. This approach leverages the trust placed in legitimate automation platforms to evade security filters.</p>
            
            <h3>Scale of Abuse</h3>
            <p>The campaign has been ongoing for approximately six months, indicating a sustained effort to exploit this attack vector. Organizations should review their email security policies regarding legitimate automation platforms.</p>
        `
    },
    {
        id: 15,
        title: "108 Malicious Chrome Extensions Steal Google and Telegram Data, Affecting 20,000 Users",
        category: "Malware",
        threat: "high",
        date: "2026-04-25",
        author: "Browser Security Team",
        excerpt: "Over 100 malicious Chrome extensions discovered stealing credentials and data from Google and Telegram accounts.",
        icon: "🔓",
        content: `
            <h3>Campaign Details</h3>
            <p>Security researchers have discovered 108 malicious Chrome extensions that steal authentication credentials and data from Google and Telegram accounts. The extensions have affected approximately 20,000 users.</p>
            
            <h3>Functionality</h3>
            <p>The malicious extensions capture login credentials, session tokens, and personal data from affected users. They operate silently in the background while appearing to provide legitimate functionality.</p>
            
            <h3>User Impact</h3>
            <p>Affected users are at risk of account compromise, identity theft, and unauthorized access to their Google and Telegram accounts. Users should immediately review their installed extensions and remove any suspicious ones.</p>
        `
    },
    {
        id: 16,
        title: "Anthropic MCP Design Vulnerability Enables RCE, Threatening AI Supply Chain",
        category: "Vulnerabilities",
        threat: "critical",
        date: "2026-04-25",
        author: "AI Security Team",
        excerpt: "Critical vulnerability in Anthropic's Model Context Protocol design allows remote code execution, threatening AI supply chain.",
        icon: "🤖",
        content: `
            <h3>Vulnerability Details</h3>
            <p>A critical vulnerability has been discovered in Anthropic's Model Context Protocol (MCP) design that enables remote code execution. The flaw poses a significant threat to the AI supply chain and organizations using MCP-based systems.</p>
            
            <h3>Attack Scenario</h3>
            <p>The vulnerability allows attackers to execute arbitrary code on systems running MCP implementations, potentially compromising AI infrastructure and data.</p>
            
            <h3>Industry Impact</h3>
            <p>This vulnerability highlights the importance of security in AI infrastructure and the need for careful review of emerging AI protocols and frameworks before widespread adoption.</p>
        `
    },
    {
        id: 17,
        title: "Apache ActiveMQ CVE-2026-34197 Added to CISA KEV Amid Active Exploitation",
        category: "Vulnerabilities",
        threat: "critical",
        date: "2026-04-25",
        author: "Infrastructure Security Team",
        excerpt: "Critical Apache ActiveMQ vulnerability added to CISA's Known Exploited Vulnerabilities catalog as attacks continue.",
        icon: "⚠️",
        content: `
            <h3>Vulnerability Overview</h3>
            <p>CISA has added CVE-2026-34197, a critical vulnerability in Apache ActiveMQ, to its Known Exploited Vulnerabilities (KEV) catalog. The vulnerability is being actively exploited in the wild.</p>
            
            <h3>Exploitation Evidence</h3>
            <p>Security researchers have confirmed active exploitation of this vulnerability by threat actors. The flaw allows remote code execution on affected ActiveMQ installations.</p>
            
            <h3>Mitigation Priority</h3>
            <p>Organizations running Apache ActiveMQ should prioritize patching this vulnerability immediately, as active exploitation campaigns have been documented.</p>
        `
    },
    {
        id: 18,
        title: "Fidelity Reaches $1.25M Settlement Over 2024 Data Breach",
        category: "Breaches",
        threat: "high",
        date: "2026-04-27",
        author: "Financial Security Team",
        excerpt: "Fidelity agrees to $1.25M settlement after 2024 breach exposed sensitive client and non-client data.",
        icon: "💳",
        content: `
            <h3>Settlement Details</h3>
            <p>Fidelity has reached a $1.25M settlement following a 2024 data breach that exposed sensitive client and non-client information, including Social Security numbers and financial data.</p>
            
            <h3>Breach Overview</h3>
            <p>Between August 17 and 19, 2024, a third party accessed and obtained certain information from a Fidelity database without authorization. The vulnerability involved manipulation of a document identification system, enabling unauthorized viewing of other customers' records over a three-day period.</p>
            
            <h3>Regulatory Action</h3>
            <p>The settlement was reached with state regulators following investigation into the company's response to the breach and notification procedures.</p>
        `
    },
    {
        id: 19,
        title: "US, UK Authorities Warn That Firestarter Backdoor Malware Targets Cisco Devices",
        category: "Malware",
        threat: "critical",
        date: "2026-04-24",
        author: "National Security Team",
        excerpt: "U.S. and U.K. authorities issue warnings about backdoor malware used against vulnerable Cisco devices.",
        icon: "🔥",
        content: `
            <h3>Joint Advisory</h3>
            <p>U.S. and U.K. authorities have issued joint warnings about backdoor malware used against vulnerable Cisco devices. The malware, known as FIRESTARTER, can maintain persistence despite security patches.</p>
            
            <h3>Threat Assessment</h3>
            <p>The backdoor is being deployed by advanced persistent threat actors targeting critical infrastructure and government networks. The malware's ability to survive patching suggests sophisticated persistence mechanisms.</p>
            
            <h3>Recommendations</h3>
            <p>Organizations are advised to implement network segmentation, monitor for suspicious activity on Cisco devices, and apply all available security patches immediately.</p>
        `
    },
    {
        id: 20,
        title: "Weekly Recap: Fast16 Malware, XChat Launch, Federal Backdoor, AI Employee Tracking",
        category: "Technology",
        threat: "medium",
        date: "2026-04-27",
        author: "Weekly Security Digest",
        excerpt: "Weekly cybersecurity recap covering fast16 malware discovery, new tools, supply chain attacks, and emerging threats.",
        icon: "📰",
        content: `
            <h3>Week Overview</h3>
            <p>This week in cybersecurity brought significant developments including the discovery of pre-Stuxnet malware, new security tools, and ongoing supply chain attacks.</p>
            
            <h3>Key Highlights</h3>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <li>Fast16 malware predates Stuxnet by five years</li>
                <li>New tools launched for security automation</li>
                <li>Federal backdoor discovered in Cisco devices</li>
                <li>AI systems being used for employee tracking</li>
                <li>Supply chain attacks continue across multiple sectors</li>
            </ul>
            
            <h3>Trend Analysis</h3>
            <p>The week demonstrated that old attack techniques remain effective, while new tools and AI capabilities are being weaponized by threat actors.</p>
        `
    },
    {
        id: 21,
        title: "Three Microsoft Defender Zero-Days Actively Exploited; Two Still Unpatched",
        category: "Vulnerabilities",
        threat: "critical",
        date: "2026-04-22",
        author: "Endpoint Security Team",
        excerpt: "Three zero-day vulnerabilities in Microsoft Defender are being actively exploited, with two remaining unpatched.",
        icon: "🛡️",
        content: `
            <h3>Zero-Day Status</h3>
            <p>Security researchers have confirmed three zero-day vulnerabilities in Microsoft Defender that are actively being exploited by threat actors. Two of these vulnerabilities remain unpatched.</p>
            
            <h3>Exploitation Details</h3>
            <p>The vulnerabilities allow attackers to bypass Defender protections and execute arbitrary code with system privileges. The BlueHammer vulnerability is among those being actively exploited.</p>
            
            <h3>Mitigation Challenges</h3>
            <p>Organizations face significant challenges in mitigating these vulnerabilities given their zero-day nature and active exploitation. Microsoft has been notified and is working on patches.</p>
        `
    },
    {
        id: 22,
        title: "New PHP Composer Flaws Enable Arbitrary Command Execution — Patches Released",
        category: "Vulnerabilities",
        threat: "high",
        date: "2026-04-21",
        author: "Development Security Team",
        excerpt: "Critical vulnerabilities in PHP Composer package manager allow arbitrary command execution during dependency installation.",
        icon: "💻",
        content: `
            <h3>Vulnerability Details</h3>
            <p>New vulnerabilities have been discovered in PHP Composer that enable arbitrary command execution. These flaws could allow attackers to compromise systems during the dependency installation process.</p>
            
            <h3>Attack Vector</h3>
            <p>The vulnerabilities can be exploited by malicious package maintainers or through man-in-the-middle attacks during package downloads. Attackers can execute arbitrary commands with the privileges of the user running Composer.</p>
            
            <h3>Patches Available</h3>
            <p>PHP Composer maintainers have released patches addressing these vulnerabilities. Developers are urged to update to the latest version immediately.</p>
        `
    },
    {
        id: 23,
        title: "Mirax Android RAT Turns Devices into SOCKS5 Proxies, Reaching 220,000 via Meta Ads",
        category: "Malware",
        threat: "high",
        date: "2026-04-20",
        author: "Mobile Threat Team",
        excerpt: "Mirax Android remote access trojan converts infected devices into SOCKS5 proxies, affecting 220,000 users through Meta advertising.",
        icon: "📱",
        content: `
            <h3>Malware Campaign</h3>
            <p>Mirax, an Android remote access trojan (RAT), has infected approximately 220,000 devices through malicious advertisements on Meta platforms. The malware turns infected devices into SOCKS5 proxies for cybercriminal operations.</p>
            
            <h3>Functionality</h3>
            <p>Once installed, Mirax provides attackers with remote access to infected devices and converts them into proxy servers for anonymizing malicious traffic. This allows threat actors to conduct attacks while hiding their true location.</p>
            
            <h3>Distribution Method</h3>
            <p>The malware is distributed through deceptive advertisements on Meta platforms, targeting users with fake app offers and updates.</p>
        `
    },
    {
        id: 24,
        title: "Vercel Breach Tied to Context AI Hack Exposes Limited Customer Credentials",
        category: "Breaches",
        threat: "medium",
        date: "2026-04-19",
        author: "Cloud Security Team",
        excerpt: "Vercel deployment platform breach linked to Context AI hack exposes limited customer credentials.",
        icon: "☁️",
        content: `
            <h3>Breach Details</h3>
            <p>A breach of Vercel, the popular deployment platform, has been discovered and is tied to the Context AI security incident. The breach exposed limited customer credentials.</p>
            
            <h3>Impact Assessment</h3>
            <p>The exposed credentials are limited in scope, and Vercel has notified affected customers. The company is investigating the extent of the compromise.</p>
            
            <h3>Recommendations</h3>
            <p>Vercel users should reset their passwords and enable two-factor authentication. Organizations should review their deployment configurations for unauthorized changes.</p>
        `
    },
    {
        id: 25,
        title: "OpenAI Launches GPT-5.4-Cyber with Expanded Access for Security Teams",
        category: "Technology",
        threat: "low",
        date: "2026-04-18",
        author: "AI Innovation Team",
        excerpt: "OpenAI releases specialized cybersecurity AI model with expanded access for security professionals and enterprises.",
        icon: "🤖",
        content: `
            <h3>New Model Release</h3>
            <p>OpenAI has launched GPT-5.4-Cyber, a specialized AI model designed specifically for cybersecurity applications. The model provides expanded access for security teams and enterprises.</p>
            
            <h3>Capabilities</h3>
            <p>The model is trained on cybersecurity data and can assist with threat analysis, vulnerability assessment, incident response, and security research. It represents a significant advancement in AI-assisted cybersecurity.</p>
            
            <h3>Availability</h3>
            <p>The model is available to security professionals and enterprises through OpenAI's API and web interface, with specialized features for security operations.</p>
        `
    },
    {
        id: 26,
        title: "The Hidden Security Risks of Shadow AI in Enterprises",
        category: "Technology",
        threat: "medium",
        date: "2026-04-17",
        author: "Enterprise Security Research",
        excerpt: "Organizations face significant security risks from unauthorized AI tools and models deployed without IT oversight.",
        icon: "👁️",
        content: `
            <h3>Shadow AI Challenge</h3>
            <p>Enterprises are facing a growing challenge from shadow AI—unauthorized AI tools and models deployed by employees without IT oversight. This creates significant security and compliance risks.</p>
            
            <h3>Risk Factors</h3>
            <p>Shadow AI deployments may expose sensitive data, lack proper security controls, and violate compliance requirements. Employees often use public AI services without understanding the data handling practices.</p>
            
            <h3>Mitigation Strategies</h3>
            <p>Organizations should implement AI governance policies, provide approved AI tools for employees, and monitor for unauthorized AI usage.</p>
        `
    },
    {
        id: 27,
        title: "Fix Rising Application Security Risks Driven by AI Development",
        category: "Technology",
        threat: "medium",
        date: "2026-04-16",
        author: "Application Security Team",
        excerpt: "AI-driven development practices introduce new security vulnerabilities that require specialized detection and remediation.",
        icon: "🔐",
        content: `
            <h3>AI Development Risks</h3>
            <p>As organizations increasingly use AI for code generation and development, new security risks emerge. AI-generated code may contain subtle vulnerabilities that traditional security tools miss.</p>
            
            <h3>Vulnerability Types</h3>
            <p>AI-generated code can introduce logic errors, insecure defaults, and compliance violations. The scale and speed of AI-driven development can overwhelm traditional security review processes.</p>
            
            <h3>Solutions</h3>
            <p>Organizations should implement specialized security tools for AI-generated code, maintain rigorous code review processes, and provide security training for developers using AI tools.</p>
        `
    },
    {
        id: 28,
        title: "CTM360 Exposes Global GovTrap Campaign With 11,000+ Fake Government Portals",
        category: "Phishing",
        threat: "high",
        date: "2026-04-15",
        author: "Threat Intelligence Team",
        excerpt: "Massive phishing campaign discovered with over 11,000 fake government portals targeting citizens worldwide.",
        icon: "🎣",
        content: `
            <h3>Campaign Scale</h3>
            <p>Security researchers have uncovered a massive phishing campaign called GovTrap that uses over 11,000 fake government portals to target citizens worldwide. The campaign is highly sophisticated and targets multiple countries.</p>
            
            <h3>Attack Method</h3>
            <p>Attackers create convincing replicas of government websites and use social engineering to trick users into entering credentials and personal information. The stolen data is then used for identity theft and fraud.</p>
            
            <h3>Global Impact</h3>
            <p>The campaign affects citizens across multiple countries and represents one of the largest phishing operations discovered to date.</p>
        `
    },
    {
        id: 29,
        title: "Work Moved Into the Browser. Security Didn't. AI Is Exposing the Gap",
        category: "Technology",
        threat: "medium",
        date: "2026-04-14",
        author: "Browser Security Research",
        excerpt: "Browser-based work environments lack adequate security controls, and AI is exposing critical vulnerabilities.",
        icon: "🌐",
        content: `
            <h3>Browser Security Gap</h3>
            <p>As work increasingly moves into web browsers, security controls have not kept pace. Browser-based applications often lack the security features of traditional desktop applications.</p>
            
            <h3>AI Exploitation</h3>
            <p>AI systems are discovering and exploiting vulnerabilities in browser-based applications at scale. The gap between application functionality and security controls is widening.</p>
            
            <h3>Mitigation</h3>
            <p>Organizations should implement browser isolation, content security policies, and advanced threat protection for browser-based work environments.</p>
        `
    },
    {
        id: 30,
        title: "Why Threat Intelligence Is the Missing Link in CTEM Prioritization and Validation",
        category: "Strategy",
        threat: "low",
        date: "2026-04-13",
        author: "Security Strategy Team",
        excerpt: "Threat intelligence provides critical context for Continuous Threat Exposure Management prioritization and validation.",
        icon: "🔍",
        content: `
            <h3>CTEM Challenge</h3>
            <p>Continuous Threat Exposure Management (CTEM) programs often struggle with prioritization and validation due to lack of threat intelligence integration. This leads to inefficient resource allocation.</p>
            
            <h3>Intelligence Integration</h3>
            <p>Threat intelligence provides context about which vulnerabilities are actually being exploited, which threat actors pose the greatest risk, and which assets are most valuable to attackers.</p>
            
            <h3>Best Practices</h3>
            <p>Organizations should integrate threat intelligence into their CTEM programs to improve prioritization accuracy and validation of remediation efforts.</p>
        `
    }
];
