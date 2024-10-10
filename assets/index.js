// Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 200;

const animateCounter = () => {
    counters.forEach(counter => {
        const target = +counter.dataset.target;
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounter, 1);
        } else {
            counter.innerText = target;
        }
    });
};

// Intersection Observer for counters
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter();
        }
    });
}, observerOptions);

document.querySelector('.stats-container').forEach(section => {
    observer.observe(section);
});

// Charts using Plotly.js
// Demographics Chart
const demographicsData = [{
    values: [52, 48],
    labels: ['Female', 'Male'],
    type: 'pie',
    marker: {
        colors: ['#3498DB', '#E74C3C']
    }
}];

const demographicsLayout = {
    title: 'Customer Gender Distribution',
    height: 400,
    margin: { t: 40, b: 40, l: 40, r: 40 }
};

Plotly.newPlot('demographicsChart', demographicsData, demographicsLayout);

// Purchase Patterns Chart
const purchaseData = [{
    type: 'scatter',
    mode: 'lines+markers',
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    y: [100, 150, 200, 180, 250, 300],
    line: {
        color: '#3498DB'
    }
}];

const purchaseLayout = {
    title: 'Monthly Purchase Trends',
    height: 400,
    margin: { t: 40, b: 40, l: 40, r: 40 }
};

Plotly.newPlot('purchaseChart', purchaseData, purchaseLayout);

// Model Performance Chart
const modelData = [{
    x: ['Accuracy', 'Precision', 'Recall', 'F1-Score'],
    y: [0.85, 0.82, 0.80, 0.81],
    type: 'bar',
    marker: {
        color: '#2C3E50'
    }
}];

const modelLayout = {
    title: 'Model Performance Metrics',
    height: 400,
    margin: { t: 40, b: 40, l: 40, r: 40 },
    yaxis: {
        range: [0, 1]
    }
};

Plotly.newPlot('modelPerformanceChart', modelData, modelLayout);

// Promotion Model Chart
const promotionData = [{
    type: 'scatter',
    mode: '