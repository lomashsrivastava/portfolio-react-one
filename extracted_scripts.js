<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lomash Srivastava | AI-Powered Full-Stack Developer</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo+2:wght@300;400;600&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <script src="https://cdn.jsdelivr.net/npm/three@0.132.2/build/three.min.js">

        // ==================== INITIALIZE EVERYTHING ====================
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize loading system
            initLoadingSystem();
            
            // Initialize advanced features
            setTimeout(() => {
                initNeuralNetwork();
                initQuantumVisualization();
                initParticleEngine();
                initAIAssistant();
                initAnalyticsDashboard();
                initThemeSystem();
                initVoiceCommands();
                initMouseTrail();
                initSystemStatus();
                initTopNavbar(); // Initialize new top navbar
                
                // Initialize existing features - MUST BE CALLED
                initExistingFeatures();
            }, 1000);
        });
        
        // ==================== NEW TOP NAVBAR ====================
        function initTopNavbar() {
            const navbar = document.getElementById('top-navbar');
            const mobileToggle = document.getElementById('mobile-nav-toggle');
            const dropdown = document.getElementById('nav-dropdown');
            const navLinks = document.querySelectorAll('.nav-link, .dropdown-link');
            const navBuyBtn = document.getElementById('nav-buy-btn');
            const dropdownBuyBtn = document.getElementById('dropdown-buy-btn');
            
            let isDropdownOpen = false;
            
            // Mobile toggle for dropdown
            mobileToggle.addEventListener('click', function() {
                isDropdownOpen = !isDropdownOpen;
                if (isDropdownOpen) {
                    dropdown.classList.add('active');
                    mobileToggle.innerHTML = '<i class="fas fa-times"></i>';
                } else {
                    dropdown.classList.remove('active');
                    mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', function(e) {
                if (!navbar.contains(e.target) && isDropdownOpen) {
                    dropdown.classList.remove('active');
                    mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
                    isDropdownOpen = false;
                }
            });
            
            // Update active nav link on click
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    if (this.classList.contains('dropdown-link')) {
                        // Close dropdown on mobile
                        if (window.innerWidth < 1200) {
                            dropdown.classList.remove('active');
                            mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
                            isDropdownOpen = false;
                        }
                    }
                    
                    // Update active link in both nav and dropdown
                    const href = this.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        // Remove active class from all links
                        navLinks.forEach(l => l.classList.remove('active'));
                        
                        // Add active class to clicked link and its counterpart
                        this.classList.add('active');
                        
                        // Find and activate counterpart link
                        const counterpartSelector = this.classList.contains('dropdown-link') 
                            ? `.nav-link[href="${href}"]` 
                            : `.dropdown-link[href="${href}"]`;
                        const counterpart = document.querySelector(counterpartSelector);
                        if (counterpart) {
                            counterpart.classList.add('active');
                        }
                    }
                });
            });
            
            // Buy button functionality
            navBuyBtn.addEventListener('click', openBuyModal);
            dropdownBuyBtn.addEventListener('click', openBuyModal);
            
            // Update active nav link on scroll
            window.addEventListener('scroll', updateActiveNavLink);
            
            // Navbar scroll effect
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
            
            // Smooth scrolling for all anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        e.preventDefault();
                        window.scrollTo({
                            top: targetElement.offsetTop - 100,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Update active nav link based on scroll position
            function updateActiveNavLink() {
                const sections = document.querySelectorAll('section');
                const navLinks = document.querySelectorAll('.nav-link, .dropdown-link');
                
                let currentSection = '';
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop - 150;
                    const sectionHeight = section.clientHeight;
                    
                    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                        currentSection = section.getAttribute('id');
                    }
                });
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentSection}`) {
                        link.classList.add('active');
                    }
                });
            }
            
            // Handle window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth >= 1200 && isDropdownOpen) {
                    dropdown.classList.remove('active');
                    mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
                    isDropdownOpen = false;
                }
            });
            
            // Initial active link update
            updateActiveNavLink();
        }
        
        // ==================== ADVANCED LOADING SYSTEM ====================
        function initLoadingSystem() {
            const loader = document.getElementById('neural-loader');
            const progressBar = document.getElementById('loader-progress-bar');
            const neuralLoader = document.getElementById('loader-neural');
            
            // Create neural network nodes
            for (let i = 0; i < 8; i++) {
                const neuron = document.createElement('div');
                neuron.className = 'neuron';
                
                const angle = (i / 8) * Math.PI * 2;
                const radius = 70;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                
                neuron.style.left = `calc(50% + ${x}px)`;
                neuron.style.top = `calc(50% + ${y}px)`;
                neuron.style.animationDelay = `${i * 0.2}s`;
                
                neuralLoader.appendChild(neuron);
            }
            
            // Simulate loading progress
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.random() * 10;
                if (progress > 100) {
                    progress = 100;
                    clearInterval(interval);
                    
                    // Hide loader
                    setTimeout(() => {
                        loader.classList.add('hidden');
                        setTimeout(() => {
                            loader.style.display = 'none';
                        }, 500);
                    }, 500);
                }
                progressBar.style.width = `${progress}%`;
            }, 100);
        }
        
        // ==================== NEURAL NETWORK VISUALIZATION ====================
        function initNeuralNetwork() {
            const canvas = document.getElementById('neural-canvas');
            const ctx = canvas.getContext('2d');
            
            // Set canvas dimensions
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            // Neural network nodes
            const layers = 5;
            const nodesPerLayer = 8;
            const nodes = [];
            const connections = [];
            
            // Create nodes
            for (let l = 0; l < layers; l++) {
                nodes[l] = [];
                for (let n = 0; n < nodesPerLayer; n++) {
                    nodes[l].push({
                        x: (l + 1) * (canvas.width / (layers + 1)),
                        y: (n + 1) * (canvas.height / (nodesPerLayer + 1)),
                        vx: Math.random() * 2 - 1,
                        vy: Math.random() * 2 - 1,
                        radius: 5,
                        pulse: Math.random() * Math.PI * 2
                    });
                }
            }
            
            // Create connections
            for (let l = 0; l < layers - 1; l++) {
                for (let n1 = 0; n1 < nodesPerLayer; n1++) {
                    for (let n2 = 0; n2 < nodesPerLayer; n2++) {
                        if (Math.random() > 0.7) {
                            connections.push({
                                from: nodes[l][n1],
                                to: nodes[l + 1][n2],
                                strength: Math.random()
                            });
                        }
                    }
                }
            }
            
            // Animation
            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                // Update nodes
                nodes.forEach(layer => {
                    layer.forEach(node => {
                        // Move nodes
                        node.x += node.vx * 0.5;
                        node.y += node.vy * 0.5;
                        
                        // Bounce off edges
                        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
                        
                        // Pulse animation
                        node.pulse += 0.05;
                        const pulseSize = Math.sin(node.pulse) * 2;
                        
                        // Draw node
                        ctx.beginPath();
                        ctx.arc(node.x, node.y, node.radius + pulseSize, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(0, 243, 255, ${0.3 + Math.sin(node.pulse) * 0.2})`;
                        ctx.fill();
                    });
                });
                
                // Draw connections
                connections.forEach(conn => {
                    const alpha = 0.1 + Math.sin(Date.now() * 0.001 + conn.strength * 10) * 0.1;
                    ctx.beginPath();
                    ctx.moveTo(conn.from.x, conn.from.y);
                    ctx.lineTo(conn.to.x, conn.to.y);
                    ctx.strokeStyle = `rgba(255, 0, 255, ${alpha})`;
                    ctx.lineWidth = conn.strength * 2;
                    ctx.stroke();
                });
                
                requestAnimationFrame(animate);
            }
            
            animate();
            
            // Resize handler
            window.addEventListener('resize', () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            });
        }
        
        // ==================== QUANTUM VISUALIZATION ====================
        function initQuantumVisualization() {
            const canvas = document.getElementById('quantum-canvas');
            const ctx = canvas.getContext('2d');
            
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            const qubits = [];
            const qubitCount = 5;
            
            // Create qubits
            for (let i = 0; i < qubitCount; i++) {
                qubits.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: 10 + Math.random() * 10,
                    speed: 0.5 + Math.random() * 1,
                    angle: Math.random() * Math.PI * 2,
                    color: i % 2 === 0 ? '#9d4edd' : '#00f3ff',
                    entanglement: []
                });
            }
            
            // Create entanglement
            qubits.forEach((qubit, i) => {
                if (i < qubits.length - 1) {
                    qubit.entanglement.push(qubits[i + 1]);
                }
            });
            
            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                // Update and draw qubits
                qubits.forEach(qubit => {
                    // Move qubit
                    qubit.x += Math.cos(qubit.angle) * qubit.speed;
                    qubit.y += Math.sin(qubit.angle) * qubit.speed;
                    
                    // Bounce off edges
                    if (qubit.x < qubit.radius || qubit.x > canvas.width - qubit.radius) {
                        qubit.angle = Math.PI - qubit.angle;
                    }
                    if (qubit.y < qubit.radius || qubit.y > canvas.height - qubit.radius) {
                        qubit.angle = -qubit.angle;
                    }
                    
                    // Draw qubit
                    ctx.beginPath();
                    ctx.arc(qubit.x, qubit.y, qubit.radius, 0, Math.PI * 2);
                    const gradient = ctx.createRadialGradient(
                        qubit.x, qubit.y, 0,
                        qubit.x, qubit.y, qubit.radius
                    );
                    gradient.addColorStop(0, qubit.color);
                    gradient.addColorStop(1, 'rgba(157, 78, 221, 0.1)');
                    ctx.fillStyle = gradient;
                    ctx.fill();
                    
                    // Draw entanglement
                    qubit.entanglement.forEach(entangledQubit => {
                        ctx.beginPath();
                        ctx.moveTo(qubit.x, qubit.y);
                        ctx.lineTo(entangledQubit.x, entangledQubit.y);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 + Math.sin(Date.now() * 0.001) * 0.2})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    });
                });
                
                requestAnimationFrame(animate);
            }
            
            animate();
        }
        
        // ==================== PARTICLE ENGINE ====================
        function initParticleEngine() {
            particlesJS('particles-js', {
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: "#00f3ff" },
                    shape: { type: "circle" },
                    opacity: { value: 0.5, random: true },
                    size: { value: 3, random: true },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#ff00ff",
                        opacity: 0.2,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: { enable: false, rotateX: 600, rotateY: 1200 }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: { enable: true, mode: "repulse" },
                        onclick: { enable: true, mode: "push" },
                        resize: true
                    },
                    modes: {
                        repulse: { distance: 100, duration: 0.4 },
                        push: { particles_nb: 4 }
                    }
                },
                retina_detect: true
            });
        }
        
        // ==================== AI ASSISTANT ====================
        function initAIAssistant() {
            const chatToggle = document.getElementById('ai-chat-toggle');
            const chatWindow = document.getElementById('ai-chat-window');
            const chatBody = document.getElementById('ai-chat-body');
            const chatInput = document.getElementById('ai-chat-input');
            const sendBtn = document.getElementById('ai-send-btn');
            const voiceToggle = document.getElementById('voice-toggle');
            const voiceIndicator = document.getElementById('voice-indicator');
            
            let isListening = false;
            let recognition = null;
            
            // Initialize speech recognition
            if ('webkitSpeechRecognition' in window) {
                recognition = new webkitSpeechRecognition();
                recognition.continuous = false;
                recognition.interimResults = false;
                recognition.lang = 'en-US';
                
                recognition.onresult = function(event) {
                    const transcript = event.results[0][0].transcript;
                    addMessage(transcript, 'user');
                    processCommand(transcript);
                };
                
                recognition.onerror = function(event) {
                    console.error('Speech recognition error', event.error);
                    voiceIndicator.style.display = 'none';
                    isListening = false;
                };
                
                recognition.onend = function() {
                    voiceIndicator.style.display = 'none';
                    isListening = false;
                };
            }
            
            // Toggle chat window
            chatToggle.addEventListener('click', () => {
                chatWindow.style.display = chatWindow.style.display === 'flex' ? 'none' : 'flex';
            });
            
            // Send message
            sendBtn.addEventListener('click', sendMessage);
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') sendMessage();
            });
            
            // Toggle voice input
            voiceToggle.addEventListener('click', () => {
                if (!recognition) {
                    addMessage("Voice recognition not supported in your browser.", 'ai');
                    return;
                }
                
                if (isListening) {
                    recognition.stop();
                    voiceIndicator.style.display = 'none';
                    isListening = false;
                } else {
                    recognition.start();
                    voiceIndicator.style.display = 'block';
                    isListening = true;
                    addMessage("Listening...", 'ai');
                }
            });
            
            function sendMessage() {
                const message = chatInput.value.trim();
                if (message) {
                    addMessage(message, 'user');
                    processCommand(message);
                    chatInput.value = '';
                }
            }
            
            function addMessage(text, sender) {
                const messageDiv = document.createElement('div');
                messageDiv.className = `ai-message ${sender}`;
                messageDiv.innerHTML = `<strong>${sender === 'user' ? 'You' : 'Quantum AI'}:</strong> ${text}`;
                chatBody.appendChild(messageDiv);
                chatBody.scrollTop = chatBody.scrollHeight;
            }
            
            function processCommand(command) {
                const lowerCmd = command.toLowerCase();
                let response = "";
                
                if (lowerCmd.includes('hello') || lowerCmd.includes('hi')) {
                    response = "Hello! How can I assist you today?";
                } else if (lowerCmd.includes('projects') || lowerCmd.includes('work')) {
                    response = "I can show you my projects. Would you like to see web development projects or AI/ML projects?";
                } else if (lowerCmd.includes('contact') || lowerCmd.includes('email')) {
                    response = "You can contact me at lomashgroups@gmail.com or call +91-7355338964.";
                } else if (lowerCmd.includes('skills') || lowerCmd.includes('technology')) {
                    response = "I specialize in React.js, Node.js, Python, Django, FastAPI, PostgreSQL, and cloud technologies.";
                } else if (lowerCmd.includes('experience') || lowerCmd.includes('background')) {
                    response = "I have experience as a Full-Stack Developer and former Site Engineer at L&T and Dixon Technologies.";
                } else if (lowerCmd.includes('quantum') || lowerCmd.includes('ai')) {
                    response = "This portfolio features quantum computing simulations and AI-powered interfaces!";
                } else if (lowerCmd.includes('whatsapp') || lowerCmd.includes('message')) {
                    response = "You can scan the WhatsApp QR code in the WhatsApp section or click the WhatsApp link in the contact section.";
                } else if (lowerCmd.includes('payment') || lowerCmd.includes('pay')) {
                    response = "You can find payment QR codes in the Payment QR section or in the buy modal.";
                } else {
                    response = "I'm your AI assistant. You can ask me about projects, skills, experience, contact information, WhatsApp, or payment options.";
                }
                
                setTimeout(() => {
                    addMessage(response, 'ai');
                }, 500);
            }
            
            // Preload some messages
            setTimeout(() => {
                addMessage("Try saying 'Show me projects' or 'What are your skills?'", 'ai');
            }, 2000);
        }
        
        // ==================== ANALYTICS DASHBOARD ====================
        function initAnalyticsDashboard() {
            // Visitors Chart
            const visitorsCtx = document.getElementById('visitors-chart').getContext('2d');
            new Chart(visitorsCtx, {
                type: 'line',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                        label: 'Visitors',
                        data: [120, 190, 300, 500, 200, 300, 450],
                        borderColor: '#00f3ff',
                        backgroundColor: 'rgba(0, 243, 255, 0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.1)' } },
                        x: { grid: { color: 'rgba(255,255,255,0.1)' } }
                    }
                }
            });
            
            // Sales Chart
            const salesCtx = document.getElementById('sales-chart').getContext('2d');
            new Chart(salesCtx, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Projects Sold',
                        data: [5, 8, 12, 6, 7, 4],
                        backgroundColor: '#ff00ff',
                        borderColor: '#ff00ff'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } }
                }
            });
            
            // AI Interactions Chart
            const aiCtx = document.getElementById('ai-chart').getContext('2d');
            new Chart(aiCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Voice Commands', 'Chat Messages', 'System Commands'],
                    datasets: [{
                        data: [40, 80, 36],
                        backgroundColor: ['#00f3ff', '#ff00ff', '#00ff9d']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '70%'
                }
            });
            
            // Engagement Chart
            const engagementCtx = document.getElementById('engagement-chart').getContext('2d');
            new Chart(engagementCtx, {
                type: 'radar',
                data: {
                    labels: ['Interactivity', 'AI Usage', 'Projects Viewed', 'Time Spent', 'Return Visits'],
                    datasets: [{
                        label: 'Engagement',
                        data: [85, 90, 75, 88, 82],
                        backgroundColor: 'rgba(0, 243, 255, 0.2)',
                        borderColor: '#00f3ff'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        r: {
                            angleLines: { color: 'rgba(255,255,255,0.1)' },
                            grid: { color: 'rgba(255,255,255,0.1)' },
                            pointLabels: { color: 'rgba(255,255,255,0.7)' }
                        }
                    }
                }
            });
            
            // Update stats in real-time
            function updateStats() {
                const visitors = document.getElementById('total-visitors');
                const projectsSold = document.getElementById('projects-sold');
                const aiInteractions = document.getElementById('ai-interactions');
                const engagementRate = document.getElementById('engagement-rate');
                
                // Simulate real-time updates
                setInterval(() => {
                    visitors.textContent = (parseInt(visitors.textContent) + Math.floor(Math.random() * 3)).toString();
                    aiInteractions.textContent = (parseInt(aiInteractions.textContent) + Math.floor(Math.random() * 2)).toString();
                    
                    // Update engagement rate with small fluctuations
                    const currentRate = parseFloat(engagementRate.textContent);
                    const newRate = Math.min(99, Math.max(85, currentRate + (Math.random() - 0.5)));
                    engagementRate.textContent = `${Math.round(newRate)}%`;
                }, 5000);
            }
            
            updateStats();
        }
        
        // ==================== THEME SYSTEM ====================
        function initThemeSystem() {
            const themeSwitcher = document.getElementById('theme-switcher');
            const themeSwitcherBtn = document.getElementById('theme-switcher-btn');
            const themeOptions = document.querySelectorAll('.theme-option');
            
            // Toggle theme switcher
            themeSwitcherBtn.addEventListener('click', () => {
                const isOpen = themeSwitcher.style.transform === 'translateX(0px)' || 
                              themeSwitcher.style.transform === '';
                
                if (isOpen) {
                    themeSwitcher.style.transform = 'translateX(calc(100% - 60px))';
                } else {
                    themeSwitcher.style.transform = 'translateX(0)';
                }
            });
            
            // Change theme
            themeOptions.forEach(option => {
                option.addEventListener('click', () => {
                    const theme = option.dataset.theme;
                    
                    // Update active option
                    themeOptions.forEach(opt => opt.classList.remove('active'));
                    option.classList.add('active');
                    
                    // Update system status
                    updateSystemStatus('theme', `Theme: ${theme.replace('-', ' ').toUpperCase()}`);
                });
            });
        }
        
        // ==================== VOICE COMMANDS ====================
        function initVoiceCommands() {
            const voiceCommandBtn = document.getElementById('voice-command-btn');
            let recognition = null;
            
            if ('webkitSpeechRecognition' in window) {
                recognition = new webkitSpeechRecognition();
                recognition.continuous = false;
                recognition.interimResults = false;
                recognition.lang = 'en-US';
                
                voiceCommandBtn.addEventListener('click', () => {
                    if (recognition) {
                        recognition.start();
                        voiceCommandBtn.innerHTML = '<i class="fas fa-microphone"></i> Listening...';
                        voiceCommandBtn.style.background = 'linear-gradient(45deg, #ff0000, #ff5500)';
                        
                        recognition.onresult = function(event) {
                            const command = event.results[0][0].transcript.toLowerCase();
                            executeVoiceCommand(command);
                        };
                        
                        recognition.onend = function() {
                            voiceCommandBtn.innerHTML = '<i class="fas fa-microphone"></i> Voice Commands';
                            voiceCommandBtn.style.background = 'linear-gradient(45deg, var(--accent1), var(--accent3))';
                        };
                    }
                });
            } else {
                voiceCommandBtn.style.display = 'none';
            }
            
            function executeVoiceCommand(command) {
                const responses = [
                    "Navigating to ",
                    "Opening ",
                    "Showing ",
                    "Taking you to "
                ];
                
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                
                if (command.includes('home') || command.includes('start')) {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    showVoiceFeedback(randomResponse + "Home");
                } else if (command.includes('about') || command.includes('who')) {
                    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
                    showVoiceFeedback(randomResponse + "About section");
                } else if (command.includes('project') || command.includes('work')) {
                    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
                    showVoiceFeedback(randomResponse + "Projects");
                } else if (command.includes('skill') || command.includes('technology')) {
                    document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' });
                    showVoiceFeedback(randomResponse + "Skills");
                } else if (command.includes('contact') || command.includes('email')) {
                    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                    showVoiceFeedback(randomResponse + "Contact section");
                } else if (command.includes('experience') || command.includes('job')) {
                    document.querySelector('#experience').scrollIntoView({ behavior: 'smooth' });
                    showVoiceFeedback(randomResponse + "Experience");
                } else if (command.includes('analytics') || command.includes('stats')) {
                    document.querySelector('#analytics').scrollIntoView({ behavior: 'smooth' });
                    showVoiceFeedback(randomResponse + "Analytics dashboard");
                } else if (command.includes('payment') || command.includes('qr')) {
                    document.querySelector('#payment').scrollIntoView({ behavior: 'smooth' });
                    showVoiceFeedback(randomResponse + "Payment QR section");
                } else if (command.includes('whatsapp') || command.includes('message')) {
                    document.querySelector('#whatsapp').scrollIntoView({ behavior: 'smooth' });
                    showVoiceFeedback(randomResponse + "WhatsApp section");
                } else if (command.includes('ai') || command.includes('assistant')) {
                    document.getElementById('ai-chat-toggle').click();
                    showVoiceFeedback("Opening AI Assistant");
                } else if (command.includes('theme') || command.includes('color')) {
                    document.getElementById('theme-switcher-btn').click();
                    showVoiceFeedback("Opening theme switcher");
                } else {
                    showVoiceFeedback("Command not recognized. Try: home, about, projects, skills, contact, payment, whatsapp");
                }
            }
            
            function showVoiceFeedback(text) {
                const feedback = document.createElement('div');
                feedback.style.cssText = `
                    position: fixed;
                    bottom: 100px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(0,0,0,0.8);
                    color: var(--primary);
                    padding: 15px 30px;
                    border-radius: 25px;
                    border: 2px solid var(--primary);
                    font-family: 'Orbitron', sans-serif;
                    z-index: 10000;
                    backdrop-filter: blur(10px);
                    animation: fadeInOut 3s ease;
                `;
                
                feedback.textContent = text;
                document.body.appendChild(feedback);
                
                setTimeout(() => {
                    feedback.style.animation = 'fadeOut 0.5s ease';
                    setTimeout(() => {
                        document.body.removeChild(feedback);
                    }, 500);
                }, 2500);
            }
        }
        
        // ==================== MOUSE TRAIL ====================
        function initMouseTrail() {
            const trailContainer = document.createElement('div');
            trailContainer.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 9996;
            `;
            document.body.appendChild(trailContainer);
            
            let mouseX = 0;
            let mouseY = 0;
            const trailElements = [];
            const trailCount = 15;
            
            // Create trail elements
            for (let i = 0; i < trailCount; i++) {
                const trail = document.createElement('div');
                trail.className = 'mouse-trail';
                trail.style.opacity = 0;
                trailContainer.appendChild(trail);
                trailElements.push({
                    element: trail,
                    x: 0,
                    y: 0,
                    size: 20 - (i * 1.2)
                });
            }
            
            // Track mouse movement
            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });
            
            // Animate trail
            function animateTrail() {
                for (let i = 0; i < trailElements.length; i++) {
                    const trail = trailElements[i];
                    
                    if (i === 0) {
                        trail.x = mouseX;
                        trail.y = mouseY;
                    } else {
                        const prevTrail = trailElements[i - 1];
                        trail.x += (prevTrail.x - trail.x) * 0.3;
                        trail.y += (prevTrail.y - trail.y) * 0.3;
                    }
                    
                    trail.element.style.left = `${trail.x}px`;
                    trail.element.style.top = `${trail.y}px`;
                    trail.element.style.width = `${trail.size}px`;
                    trail.element.style.height = `${trail.size}px`;
                    trail.element.style.opacity = 0.7 - (i * 0.05);
                    
                    // Color based on position
                    const hue = (mouseX / window.innerWidth) * 360;
                    trail.element.style.background = `hsl(${hue}, 100%, 50%)`;
                }
                
                requestAnimationFrame(animateTrail);
            }
            
            animateTrail();
        }
        
        // ==================== SYSTEM STATUS ====================
        function initSystemStatus() {
            const statusElements = {
                neural: document.getElementById('neural-status'),
                quantum: document.getElementById('quantum-status'),
                ai: document.getElementById('ai-status'),
                security: document.getElementById('security-status')
            };
            
            // Simulate system status updates
            setInterval(() => {
                // Random status changes
                const statuses = ['Active', 'Optimizing', 'Processing', 'Standby'];
                const securityStatuses = ['Encrypted', 'Secure', 'Protected', 'Verified'];
                
                statusElements.neural.textContent = statuses[Math.floor(Math.random() * statuses.length)];
                statusElements.quantum.textContent = statuses[Math.floor(Math.random() * statuses.length)];
                statusElements.ai.textContent = statuses[Math.floor(Math.random() * statuses.length)];
                statusElements.security.textContent = securityStatuses[Math.floor(Math.random() * securityStatuses.length)];
            }, 3000);
        }
        
        function updateSystemStatus(system, status) {
            const element = document.getElementById(`${system}-status`);
            if (element) {
                element.textContent = status;
            }
        }
        
        // ==================== EXISTING FEATURES ====================
        function initExistingFeatures() {
            // Create floating shapes
            function createFloatingShapes() {
                const container = document.getElementById('floating-shapes');
                const shapeCount = 25;
                
                for (let i = 0; i < shapeCount; i++) {
                    const shape = document.createElement('div');
                    shape.classList.add('shape');
                    
                    const size = Math.random() * 150 + 30;
                    const posX = Math.random() * 100;
                    const posY = Math.random() * 100;
                    const delay = Math.random() * 20;
                    const duration = Math.random() * 40 + 20;
                    
                    shape.style.width = `${size}px`;
                    shape.style.height = `${size}px`;
                    shape.style.left = `${posX}%`;
                    shape.style.top = `${posY}%`;
                    shape.style.animationDelay = `${delay}s`;
                    shape.style.animationDuration = `${duration}s`;
                    
                    container.appendChild(shape);
                }
            }
            
            // Typing effect
            function initTypingEffect() {
                const textElement = document.getElementById('typing-text');
                const texts = [
                    "FULL-STACK DEVELOPER",
                    "REACT.js | NODE.js | DJANGO",
                    "CLOUD & DEVOPS EXPERT",
                    "AI/ML ENTHUSIAST",
                    "FORMER SITE ENGINEER",
                    "PROBLEM SOLVER"
                ];
                let textIndex = 0;
                let charIndex = 0;
                let isDeleting = false;
                let typingSpeed = 100;
                
                function type() {
                    const currentText = texts[textIndex];
                    
                    if (isDeleting) {
                        textElement.textContent = currentText.substring(0, charIndex - 1);
                        charIndex--;
                        typingSpeed = 50;
                    } else {
                        textElement.textContent = currentText.substring(0, charIndex + 1);
                        charIndex++;
                        typingSpeed = 100;
                    }
                    
                    if (!isDeleting && charIndex === currentText.length) {
                        isDeleting = true;
                        typingSpeed = 2000;
                    } else if (isDeleting && charIndex === 0) {
                        isDeleting = false;
                        textIndex = (textIndex + 1) % texts.length;
                        typingSpeed = 800;
                    }
                    
                    setTimeout(type, typingSpeed);
                }
                
                setTimeout(type, 1000);
            }
            
            // Initialize existing features
            createFloatingShapes();
            initTypingEffect();
            
            // Experience data
            const experiences = [
                {
                    title: "Full-Stack Developer Intern",
                    company: "QSpiders, Noida",
                    date: "Aug 2023 – Aug 2024",
                    icon: "fas fa-code",
                    details: [
                        "Built and deployed MERN-stack apps, improving speed by 20%",
                        "Developed REST APIs with JWT authentication and Swagger documentation",
                        "Designed responsive React UIs, ensuring 100% mobile compatibility",
                        "Implemented CI/CD pipelines on AWS/Heroku, 95% defect-free deployments",
                        "Mentored junior interns on React and Git workflows"
                    ]
                },
                {
                    title: "Site Engineer",
                    company: "Larsen & Toubro (L&T), Banda, UP",
                    date: "Jan 2023 – Aug 2023",
                    icon: "fas fa-hard-hat",
                    details: [
                        "Led 4 major pipeline sites with 256+ workforce; delivered 12% under budget",
                        "Directed excavation (2m depth) with heavy machinery (JCB, Hydra)",
                        "Conducted QA/QC inspections, reducing rework by 12%",
                        "Coordinated with local authorities for road restoration",
                        "Implemented safety protocols achieving zero accidents"
                    ]
                },
                {
                    title: "Mechanical Site Engineer",
                    company: "Dixon Technologies, Dehradun",
                    date: "Jun 2022 – Jan 2023",
                    icon: "fas fa-cogs",
                    details: [
                        "Executed HVAC & pressure pipeline installations per ISO 9001 standards",
                        "Reduced downtime 15% by optimizing vendor deliveries",
                        "Automated reporting process, saving 4 hours weekly",
                        "Managed site safety protocols achieving zero accidents",
                        "Supervised installation of industrial equipment"
                    ]
                }
            ];
            
            // Initialize experience slider
            function initExperienceSlider() {
                const expContainer = document.getElementById('experience-cards');
                const expDots = document.getElementById('exp-dots');
                const prevBtn = document.getElementById('exp-prev');
                const nextBtn = document.getElementById('exp-next');
                
                // Clear existing content
                expContainer.innerHTML = '';
                expDots.innerHTML = '';
                
                // Create experience cards
                experiences.forEach(exp => {
                    const detailsHtml = exp.details.map(detail => 
                        `<li>${detail}</li>`
                    ).join('');
                    
                    const expCard = document.createElement('div');
                    expCard.className = 'experience-card';
                    expCard.innerHTML = `
                        <div class="exp-icon">
                            <i class="${exp.icon}"></i>
                        </div>
                        <h3 class="exp-title">${exp.title}</h3>
                        <div class="exp-company">${exp.company}</div>
                        <span class="exp-date">${exp.date}</span>
                        <ul class="exp-details">
                            ${detailsHtml}
                        </ul>
                    `;
                    
                    expContainer.appendChild(expCard);
                });
                
                // Create dots
                experiences.forEach((_, index) => {
                    const dot = document.createElement('div');
                    dot.className = 'exp-dot';
                    if (index === 0) dot.classList.add('active');
                    dot.addEventListener('click', () => {
                        // This is a simple implementation - you might want to add slider functionality
                        document.querySelectorAll('.exp-dot').forEach(d => d.classList.remove('active'));
                        dot.classList.add('active');
                    });
                    expDots.appendChild(dot);
                });
                
                // Simple slider functionality
                let currentIndex = 0;
                const totalCards = experiences.length;
                
                prevBtn.addEventListener('click', () => {
                    if (currentIndex > 0) {
                        currentIndex--;
                        updateSlider();
                    }
                });
                
                nextBtn.addEventListener('click', () => {
                    if (currentIndex < totalCards - 1) {
                        currentIndex++;
                        updateSlider();
                    }
                });
                
                function updateSlider() {
                    const cards = document.querySelectorAll('.experience-card');
                    const dots = document.querySelectorAll('.exp-dot');
                    
                    cards.forEach(card => {
                        card.style.display = 'none';
                    });
                    
                    if (cards[currentIndex]) {
                        cards[currentIndex].style.display = 'flex';
                    }
                    
                    dots.forEach((dot, index) => {
                        dot.classList.remove('active');
                        if (index === currentIndex) {
                            dot.classList.add('active');
                        }
                    });
                }
                
                // Show first card initially
                updateSlider();
            }
            
            // Updated Projects data with your exact information
            const projects = [
                {
                    name: "LOMASH HR CRM SYSTEM",
                    category: "Full Stack Web App",
                    tech: ["React 19 (TypeScript)", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Django", "Python", "SpaCy", "JWT", "Netlify", "Render"],
                    description: "AI-powered Human Resource Management platform with automated resume parsing, candidate fit scoring, recruitment pipeline, and employee management.",
                    price: "₹100,000",
                    github: "https://github.com/lomashsrivastava/LOMASH-HR-CRM-SYSTEM",
                    live: "https://lomashhrcrm.netlify.app/login",
                    linkedin: "https://www.linkedin.com/in/lomashsrivastava/"
                },
                {
                    name: "L-CHAT - Advanced Realtime Messaging Platform",
                    category: "Full Stack Web App",
                    tech: ["React (TypeScript)", "Vite", "Tailwind CSS", "Framer Motion", "Node.js", "Express", "Socket.io", "GitHub Pages", "Netlify", "Render"],
                    description: "Futuristic neon-styled real-time chat application with instant messaging, rooms, glassmorphism UI, and high-performance websocket backend.",
                    price: "₹25,500",
                    github: "https://github.com/lomashsrivastava/L-Chat",
                    live: "https://lchat12.netlify.app/",
                    linkedin: "https://www.linkedin.com/in/lomashsrivastava/"
                },
                {
                    name: "L-Movies Platform",
                    category: "Full Stack Web App",
                    tech: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "Django", "Python", "Django REST Framework", "MongoDB", "Djongo", "JWT", "Docker", "Netlify"],
                    description: "Netflix-inspired movie streaming platform with dark cinematic theme, glassmorphism, watchlist management, and admin panel.",
                    price: "₹35,000",
                    github: "https://github.com/lomashsrivastava/L-Movies",
                    live: "https://lmovies2026.netlify.app/",
                    linkedin: "https://www.linkedin.com/in/lomashsrivastava/"
                },
                {
                    name: "AI Job Portal",
                    category: "Full Stack Web App",
                    tech: ["React", "Vite", "Tailwind CSS", "Shadcn UI", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Cloudinary", "JWT", "Framer Motion", "Netlify", "Railway"],
                    description: "Full-stack job portal with separate recruiter/student flows, job posting, applications, resume uploads, and real-time notifications.",
                    price: "₹15,000",
                    github: "https://github.com/lomashsrivastava/AI-Job-Portal",
                    live: "https://jobporta2026.netlify.app/",
                    linkedin: "https://www.linkedin.com/in/lomashsrivastava/"
                },
                {
                    name: "Lomash Markets",
                    category: "Frontend Web App",
                    tech: ["HTML5", "CSS3", "JavaScript", "Three.js", "Chart.js", "Particles.js", "Typed.js", "Lottie", "Animate.css", "FontAwesome", "Netlify"],
                    description: "Futuristic neon-themed e-commerce landing page with interactive 3D elements, particle backgrounds, data visualizations, and glassmorphism effects.",
                    price: "₹5,000",
                    github: "https://github.com/lomashsrivastava/Lomash-Markets",
                    live: "https://ecoma1.netlify.app/",
                    linkedin: "https://www.linkedin.com/in/lomashsrivastava/"
                },
                {
                    name: "CineVerse Movies",
                    category: "Frontend Web App",
                    tech: ["HTML5", "CSS3", "JavaScript (ES6+)", "FontAwesome", "Google Fonts", "GitHub Pages", "Netlify"],
                    description: "Cutting-edge movie exploration platform with holographic UI, glassmorphism, real-time search, movie filtering, and detailed modal views.",
                    price: "₹4,000",
                    github: "https://github.com/lomashsrivastava/Cinerverse-Movies",
                    live: "https://cineversemovies2026.netlify.app/",
                    linkedin: "https://www.linkedin.com/in/lomashsrivastava/"
                },
                {
                    name: "Vcard-Portfolio",
                    category: "Frontend Web App",
                    tech: ["HTML5", "CSS3", "JavaScript", "Ionicons", "Google Fonts", "GitHub Pages", "Netlify"],
                    description: "Responsive personal portfolio website with sidebar integration, dynamic content tabs, portfolio filtering, and testimonials section.",
                    price: "₹3,500",
                    github: "https://github.com/lomashsrivastava/Vcard-Portfolio",
                    live: "https://vcardportfoliogaurav.netlify.app/",
                    linkedin: "https://www.linkedin.com/in/lomashsrivastava/"
                },

                {
                    name: "3D Portfolio",
                    category: "Full Stack Web App",
                    tech: ["HTML", "CSS", "JavaScript", "React.js", "Three.js", "Node.js", "Vite", "Tailwind CSS", "Netlify"],
                    description: "3D Portfolio website showcasing projects with interactive 3D elements and animations.",
                    price: "₹3,500",
                    github: "https://github.com/lomashsrivastava/3d-Portfolio-React",
                    live: "https://3dportfolior.netlify.app/",
                    linkedin: "https://www.linkedin.com/in/lomashsrivastava/"
                },
                {
                    name: "Working Contact Form With API",
                    category: "Frontend",
                    tech: ["HTML", "CSS (Vanilla)", "JavaScript", "Web3Forms API"],
                    description: "Working Contact Form integrated with Web3Forms API for backend functionality.",
                    price: "₹2,500",
                    github: "https://github.com/lomashsrivastava/Wroking-Contact-Form-With-API",
                    live: "https://runningcontactform.netlify.app/",
                    linkedin: "https://www.linkedin.com/in/lomashsrivastava/"
                },
                {
                    name: "LomashStay - Hotel Booking App",
                    category: "Full-Stack Web App",
                    tech: ["HTML", "CSS (Vanilla)", "JavaScript", "Node.js", "Express.js", "Netlify"],
                    description: "A complete hotel booking system with user authentication, room management, booking system, and admin dashboard.",
                    price: "₹3,500",
                    github: "https://github.com/lomashsrivastava/LomashStay-Hotel-Booking-App",
                    live: "https://lomashstay.netlify.app/",
                    linkedin: "https://www.linkedin.com/in/lomashsrivastava/"
                },
                {
                    name: "Advance Hotel Booking System",
                    category: "Frontend",
                    tech: ["HTML5", "CSS3", "JavaScript (ES6+)", "Anime.js", "Chart.js", "SheetJS", "QRCode.js"],
                    description: "Advanced booking system with analytics, QR code generation, and real-time availability checking.",
                    price: "₹6,500",
                    github: "https://github.com/lomashsrivastava/Hotel-Booking-Management-System",
                    live: "https://lomashbookingsystem.netlify.app/",
                    linkedin: "https://www.linkedin.com/in/lomashsrivastava/"
                },
                {
                    name: "Lomash Resume Matcher (AI)",
                    category: "AI/ML Full-Stack",
                    tech: ["React", "Vite", "Tailwind CSS", "Python", "FastAPI", "scikit-learn", "spaCy"],
                    description: "AI-powered resume matching system using NLP to match candidates with job descriptions.",
                    price: "₹4,800",
                    github: "https://github.com/lomashsrivastava/Resume-Matcher-With-AI",
                    live: "https://lomashresumematcher.netlify.app/",
                    linkedin: "https://www.linkedin.com/in/lomashsrivastava/"
                },
                {
                    name: "Laxmi Tour - Tour & Travel Website",
                    category: "Frontend + AI Simulation",
                    tech: ["HTML5", "CSS3", "JS (ES6+)", "GSAP", "Font Awesome", "Google Fonts"],
                    description: "Travel website with AI-powered package recommendations and booking system.",
                    price: "₹7,500",
                    github: "https://github.com/lomashsrivastava/Laxmi-Travels---Tour-And-Travel-Website-With-Package-AI-Integration",
                    live: "https://laxmitour.netlify.app/",
                    linkedin: "https://www.linkedin.com/in/lomashsrivastava/"
                },
                {
                    name: "Advance Contact Manager",
                    category: "Frontend App",
                    tech: ["HTML5", "CSS3", "Vanilla JS", "Local Storage", "Glassmorphism"],
                    description: "Advanced contact management system with categorization, search, and data persistence.",
                    price: "₹2,500",
                    github: "https://github.com/lomashsrivastava/Advance-Contact-Manager",
                    live: "https://lomashcontact.netlify.app/",
                    linkedin: "https://www.linkedin.com/in/lomashsrivastava/"
                },
                {
                    name: "Lomash Markets - Ecommerce Store",
                    category: "Frontend E-commerce",
                    tech: ["HTML5", "CSS3", "Vanilla JS", "Font Awesome", "Google Fonts"],
                    description: "Complete e-commerce platform with shopping cart, checkout, and product catalog.",
                    price: "₹3,200",
                    github: "https://github.com/lomashsrivastava/Lomash-Market-Ecommerce-Store",
                    live: "https://lomashmarkets.netlify.app/",
                    linkedin: "https://www.linkedin.com/in/lomashsrivastava/"
                },
                {
                    name: "Advance Portfolio",
                    category: "Portfolio Website",
                    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "AOS", "Tilt.js", "Particles.js"],
                    description: "Advanced portfolio website with animations, interactive elements, and project showcase.",
                    price: "₹3,800",
                    github: "https://github.com/lomashsrivastava/Portfolio-Website",
                    live: "https://lomash1.netlify.app/",
                    linkedin: "https://www.linkedin.com/in/lomashsrivastava/"
                },
                {
                    name: "Hotel Booking Website",
                    category: "ReactJS + NodeJS",
                    tech: ["ReactJS", "NodeJS", "CSS3", "JavaScript"],
                    description: "Hotel booking website with React frontend and Node.js backend integration.",
                    price: "₹3,500",
                    github: "Not Available (#Home Page)",
                    live: "https://lomashbooking1.netlify.app/",
                    linkedin: "https://www.linkedin.com/in/lomashsrivastava/"
                },
                {
                    name: "SignIn Dashboard",
                    category: "React + Django",
                    tech: ["ReactJs", "NodeJs", "Python", "Django", "CSS"],
                    description: "Sign-in dashboard with authentication and user management features.",
                    price: "₹3,000",
                    github: "Not Available (#Home Page)",
                    live: "https://lomashdashboard.netlify.app/signin",
                    linkedin: "https://www.linkedin.com/in/lomashsrivastava/"
                },
                {
                    name: "React Login Dashboard",
                    category: "React Component",
                    tech: ["React", "Create React App", "CSS3", "Netlify"],
                    description: "Futuristic login dashboard UI component with React and modern styling.",
                    price: "₹1,800",
                    github: "https://github.com/lomashsrivastava/futuristic-login-react",
                    live: "https://futuristicloginreact.netlify.app/",
                    linkedin: "https://www.linkedin.com/in/lomashsrivastava/"
                },
                {
                    name: "3D ToDo App",
                    category: "React Application",
                    tech: ["ReactJs", "Node", "Python", "3D Graphics"],
                    description: "3D todo application with interactive interface and task management.",
                    price: "₹2,500",
                    github: "Not Available (#Home Page)",
                    live: "https://lomashtodoai.netlify.app/",
                    linkedin: "https://www.linkedin.com/in/lomashsrivastava/"
                },
                {
                    name: "Login Dashboard AI",
                    category: "React UI",
                    tech: ["React Js", "Tailwind CSS", "JavaScript"],
                    description: "AI-themed login dashboard with modern design and responsive layout.",
                    price: "₹1,500",
                    github: "Not Available (#Home Page)",
                    live: "https://lomashlogin.netlify.app/",
                    linkedin: "https://www.linkedin.com/in/lomashsrivastava/"
                },
                {
                    name: "Lomash UI - Dashboard Project",
                    category: "Advanced UI/ML",
                    tech: ["HTML5", "CSS3", "JavaScript", "Canvas API", "Chart.js", "TensorFlow.js"],
                    description: "Advanced UI dashboard with machine learning integration and data visualization.",
                    price: "₹4,000",
                    github: "https://github.com/lomashsrivastava/Advance-UI-Dashboard",
                    live: "https://lomashui.netlify.app/",
                    linkedin: "https://www.linkedin.com/in/lomashsrivastava/"
                }
            ];
            
            // FIXED: Initialize projects grid with view more functionality
            function initProjectsGrid() {
                const projectsGrid = document.getElementById('projects-grid');
                const hiddenProjects = document.getElementById('hidden-projects');
                const viewMoreBtn = document.getElementById('view-more-btn');
                
                // Clear existing content
                projectsGrid.innerHTML = '';
                hiddenProjects.innerHTML = '';
                
                // Show first 3 projects initially
                const initialProjects = projects.slice(0, 3);
                const hiddenProjectsList = projects.slice(3);
                
                // Render initial projects
                initialProjects.forEach(project => {
                    const projectCard = createProjectCard(project);
                    projectsGrid.appendChild(projectCard);
                });
                
                // Render hidden projects
                hiddenProjectsList.forEach(project => {
                    const projectCard = createProjectCard(project);
                    hiddenProjects.appendChild(projectCard);
                });
                
                // Toggle view more functionality
                let isExpanded = false;
                viewMoreBtn.addEventListener('click', function() {
                    if (!isExpanded) {
                        hiddenProjects.classList.add('active');
                        this.innerHTML = '<i class="fas fa-arrow-up"></i> Show Less';
                        isExpanded = true;
                        
                        // Scroll to hidden projects
                        setTimeout(() => {
                            hiddenProjects.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                        }, 300);
                    } else {
                        hiddenProjects.classList.remove('active');
                        this.innerHTML = '<i class="fas fa-arrow-down"></i> View All Projects';
                        isExpanded = false;
                        
                        // Scroll back to projects section
                        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                    }
                });
                
                // Add event listeners for buy buttons
                addBuyButtonListeners();
            }
            
            // Helper function to create project card
            function createProjectCard(project) {
                const techTags = project.tech.slice(0, 4).map(tech => 
                    `<span>${tech}</span>`
                ).join('');
                
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card-full';
                
                projectCard.innerHTML = `
                    <div class="project-header-full">
                        <h3>${project.name}</h3>
                        <span class="project-category-full">${project.category}</span>
                        <p class="project-description-full">${project.description}</p>
                        <div class="project-tech-full">
                            ${techTags}
                            ${project.tech.length > 4 ? '<span>+more</span>' : ''}
                        </div>
                    </div>
                    <div class="project-footer-full">
                        <div class="project-price-full">${project.price}</div>
                        <div class="project-actions-full">
                            <a href="${project.live}" class="project-btn-full btn-view-full" target="_blank">
                                <i class="fas fa-eye"></i> Live Demo
                            </a>
                            <button class="project-btn-full btn-buy-full" data-project="${project.name}" data-price="${project.price}">
                                <i class="fas fa-shopping-cart"></i> Buy Now
                            </button>
                        </div>
                    </div>
                `;
                
                return projectCard;
            }
            
            // Add event listeners for buy buttons
            function addBuyButtonListeners() {
                document.addEventListener('click', function(e) {
                    if (e.target && e.target.classList.contains('btn-buy-full')) {
                        const projectName = e.target.getAttribute('data-project');
                        const projectPrice = e.target.getAttribute('data-price');
                        openBuyModal(projectName, projectPrice);
                    }
                    
                    // Also check if click is on the button's parent (for better event handling)
                    if (e.target && e.target.closest('.btn-buy-full')) {
                        const buyBtn = e.target.closest('.btn-buy-full');
                        const projectName = buyBtn.getAttribute('data-project');
                        const projectPrice = buyBtn.getAttribute('data-price');
                        openBuyModal(projectName, projectPrice);
                    }
                });
            }
            
            // Skills data with logos
            const skills = [
                { name: "React", logo: "fab fa-react", level: 95 },
                { name: "JavaScript", logo: "fab fa-js-square", level: 90 },
                { name: "Node.js", logo: "fab fa-node-js", level: 88 },
                { name: "Python", logo: "fab fa-python", level: 85 },
                { name: "HTML5", logo: "fab fa-html5", level: 95 },
                { name: "CSS3", logo: "fab fa-css3-alt", level: 92 },
                { name: "Git", logo: "fab fa-git-alt", level: 90 },
                { name: "Docker", logo: "fab fa-docker", level: 80 },
                { name: "AWS", logo: "fab fa-aws", level: 75 },
                { name: "PostgreSQL", logo: "fas fa-database", level: 85 },
                { name: "MongoDB", logo: "fas fa-leaf", level: 82 },
                { name: "TypeScript", logo: "fas fa-code", level: 78 }
            ];
            
            // Initialize skills with logos
            function initSkillsWithLogos() {
                const skillsGrid = document.querySelector('.skills-grid-logos');
                
                // Clear existing content
                skillsGrid.innerHTML = '';
                
                skills.forEach(skill => {
                    const levelDots = Math.floor(skill.level / 10);
                    let dotsHtml = '';
                    for (let i = 0; i < 10; i++) {
                        dotsHtml += `<div class="level-dot ${i < levelDots ? 'active' : ''}"></div>`;
                    }
                    
                    const skillItem = document.createElement('div');
                    skillItem.className = 'skill-item-logo';
                    skillItem.innerHTML = `
                        <div class="skill-logo">
                            <i class="${skill.logo}"></i>
                        </div>
                        <div class="skill-name">${skill.name}</div>
                        <div class="skill-level">
                            ${dotsHtml}
                        </div>
                    `;
                    
                    skillsGrid.appendChild(skillItem);
                });
            }
            
            // Initialize enhanced contact form with Web3Forms
            function initContactForm() {
                const contactForm = document.getElementById('contact-form');
                const formStatus = document.getElementById('form-status');
                
                if (!contactForm) return;
                
                contactForm.addEventListener('submit', async function(e) {
                    e.preventDefault();
                    
                    const submitBtn = contactForm.querySelector('.submit-btn-neon');
                    const originalText = submitBtn.innerHTML;
                    
                    // Show loading state
                    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                    submitBtn.disabled = true;
                    
                    try {
                        // Prepare form data
                        const formData = new FormData(contactForm);
                        
                        // Send to Web3Forms
                        const response = await fetch(contactForm.action, {
                            method: 'POST',
                            body: formData
                        });
                        
                        const result = await response.json();
                        
                        if (result.success) {
                            // Show success message
                            formStatus.textContent = "Message sent successfully! I'll get back to you soon.";
                            formStatus.className = 'form-status success';
                            
                            // Reset form
                            contactForm.reset();
                            
                            // Hide success message after 5 seconds
                            setTimeout(() => {
                                formStatus.style.display = 'none';
                            }, 5000);
                        } else {
                            throw new Error(result.message || 'Failed to send message');
                        }
                    } catch (error) {
                        // Show error message
                        formStatus.textContent = `Error: ${error.message}. Please try again or email me directly at lomashgroups@gmail.com`;
                        formStatus.className = 'form-status error';
                        formStatus.style.display = 'block';
                    } finally {
                        // Reset button state
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                        
                        // Hide error message after 5 seconds
                        if (formStatus.className === 'form-status error') {
                            setTimeout(() => {
                                formStatus.style.display = 'none';
                            }, 5000);
                        }
                    }
                });
            }
            
            // Initialize enhanced modal functionality with Web3Forms
            function initEnhancedModal() {
                const modal = document.getElementById('buy-modal');
                const closeModal = document.getElementById('close-modal');
                const purchaseForm = document.getElementById('purchase-form');
                const projectSelect = document.getElementById('project-select');
                const modalPrice = document.getElementById('modal-project-price');
                const modalPriceTag = document.getElementById('modal-price-tag');
                const timelineSelect = document.getElementById('timeline');
                const purchaseFormStatus = document.getElementById('purchase-form-status');
                
                if (!modal || !purchaseForm) return;
                
                const projectPrices = {};
                projects.forEach(project => {
                    projectPrices[project.name] = project.price;
                });
                projectPrices["Custom Project"] = "Contact for Price";
                
                projectSelect.innerHTML = '<option value="" disabled selected>Select a project to purchase</option>';
                projects.forEach(project => {
                    const option = document.createElement('option');
                    option.value = project.name;
                    option.textContent = `${project.name} (${project.price})`;
                    projectSelect.appendChild(option);
                });
                
                const customOption = document.createElement('option');
                customOption.value = "Custom Project";
                customOption.textContent = "Custom Project (Contact for Price)";
                projectSelect.appendChild(customOption);
                
                closeModal.addEventListener('click', () => {
                    modal.style.display = 'none';
                });
                
                window.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        modal.style.display = 'none';
                    }
                });
                
                projectSelect.addEventListener('change', function() {
                    const selectedProject = this.value;
                    const price = projectPrices[selectedProject] || "Contact for Price";
                    
                    modalPrice.textContent = price;
                    modalPriceTag.textContent = price;
                    
                    if (selectedProject === "Custom Project") {
                        modalPriceTag.textContent = "Contact Me";
                        modalPriceTag.style.fontSize = "2.2rem";
                    } else {
                        modalPriceTag.style.fontSize = "2.8rem";
                    }
                });
                
                // Purchase form submission
                purchaseForm.addEventListener('submit', async function(e) {
                    e.preventDefault();
                    
                    const submitBtn = purchaseForm.querySelector('.submit-btn-ultra');
                    const originalText = submitBtn.innerHTML;
                    
                    if (!projectSelect.value) {
                        purchaseFormStatus.textContent = "Please select a project to purchase.";
                        purchaseFormStatus.className = 'form-status error';
                        purchaseFormStatus.style.display = 'block';
                        setTimeout(() => {
                            purchaseFormStatus.style.display = 'none';
                        }, 3000);
                        return;
                    }
                    
                    // Show loading state
                    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
                    submitBtn.disabled = true;
                    
                    try {
                        // Prepare form data
                        const formData = new FormData(purchaseForm);
                        
                        // Send to Web3Forms
                        const response = await fetch(purchaseForm.action, {
                            method: 'POST',
                            body: formData
                        });
                        
                        const result = await response.json();
                        
                        if (result.success) {
                            // Show success message
                            const project = projectSelect.value;
                            const price = projectPrices[project] || "Contact for Price";
                            
                            let message;
                            if (project === "Custom Project") {
                                message = `Thank you for your custom project request! We will contact you within 24 hours to discuss your requirements and provide a quote. Please check your email for further instructions.`;
                            } else {
                                message = `Thank you for purchasing "${project}"! Please complete the payment of ${price} using the QR code or UPI ID provided, then send the screenshot to lomashgroups@gmail.com or WhatsApp (+91-7355338964) with the project name. We will contact you within 24 hours to proceed with your project.`;
                            }
                            
                            purchaseFormStatus.textContent = message;
                            purchaseFormStatus.className = 'form-status success';
                            purchaseFormStatus.style.display = 'block';
                            
                            // Reset form
                            purchaseForm.reset();
                            
                            // Hide modal after 3 seconds
                            setTimeout(() => {
                                modal.style.display = 'none';
                                purchaseFormStatus.style.display = 'none';
                            }, 5000);
                        } else {
                            throw new Error(result.message || 'Failed to process purchase request');
                        }
                    } catch (error) {
                        // Show error message
                        purchaseFormStatus.textContent = `Error: ${error.message}. Please try again or contact me directly at lomashgroups@gmail.com`;
                        purchaseFormStatus.className = 'form-status error';
                        purchaseFormStatus.style.display = 'block';
                        
                        setTimeout(() => {
                            purchaseFormStatus.style.display = 'none';
                        }, 5000);
                    } finally {
                        // Reset button state
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                    }
                });
            }
            
            function openBuyModal(projectName = null, projectPrice = null) {
                const modal = document.getElementById('buy-modal');
                const projectSelect = document.getElementById('project-select');
                const modalPrice = document.getElementById('modal-project-price');
                const modalPriceTag = document.getElementById('modal-price-tag');
                
                if (projectName && projectPrice) {
                    // Find and select the project
                    for (let i = 0; i < projectSelect.options.length; i++) {
                        if (projectSelect.options[i].value === projectName) {
                            projectSelect.selectedIndex = i;
                            break;
                        }
                    }
                    modalPrice.textContent = projectPrice;
                    modalPriceTag.textContent = projectPrice;
                    modalPriceTag.style.fontSize = "2.8rem";
                } else {
                    projectSelect.selectedIndex = 0;
                    modalPrice.textContent = "₹3,500";
                    modalPriceTag.textContent = "₹3,500";
                    modalPriceTag.style.fontSize = "2.8rem";
                }
                
                modal.style.display = 'flex';
            }
            
            // Initialize all existing features
            initExperienceSlider();
            initProjectsGrid();
            initSkillsWithLogos();
            initContactForm();
            initEnhancedModal();
            
            // Set current year in footer
            const copyrightElement = document.querySelector('.copyright-advanced');
            if (copyrightElement) {
                copyrightElement.innerHTML = copyrightElement.innerHTML.replace('2023', new Date().getFullYear());
            }
        }
        
        // Global function to open buy modal
        function openBuyModal(projectName = null, projectPrice = null) {
            const modal = document.getElementById('buy-modal');
            const projectSelect = document.getElementById('project-select');
            const modalPrice = document.getElementById('modal-project-price');
            const modalPriceTag = document.getElementById('modal-price-tag');
            
            if (projectName && projectPrice) {
                // Find and select the project
                for (let i = 0; i < projectSelect.options.length; i++) {
                    if (projectSelect.options[i].value === projectName) {
                        projectSelect.selectedIndex = i;
                        break;
                    }
                }
                modalPrice.textContent = projectPrice;
                modalPriceTag.textContent = projectPrice;
                modalPriceTag.style.fontSize = "2.8rem";
            } else {
                projectSelect.selectedIndex = 0;
                modalPrice.textContent = "₹3,500";
                modalPriceTag.textContent = "₹3,500";
                modalPriceTag.style.fontSize = "2.8rem";
            }
            
            modal.style.display = 'flex';
        }
    