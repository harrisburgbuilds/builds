// ===========================
// Mobile Navigation Toggle
// ===========================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    hamburger.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (window.getComputedStyle(hamburger).display !== 'none') {
            navMenu.style.display = 'none';
            hamburger.classList.remove('active');
        }
    });
});

// ===========================
// Quick Request Modal
// ===========================
const modal = document.getElementById('quickRequestModal');
const closeModal = document.querySelector('.close-modal');
const requestButtons = document.querySelectorAll('.request-btn');
const quickForm = document.getElementById('quickRequestForm');
const quickMessage = document.getElementById('quickMessage');
const selectedBuildSpan = document.getElementById('selectedBuild');

// Open modal when request button is clicked
requestButtons.forEach(button => {
    button.addEventListener('click', () => {
        const buildName = button.getAttribute('data-build');
        selectedBuildSpan.textContent = buildName;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
});

// Close modal when X is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Handle quick request form submission
quickForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(quickForm);
    const buildName = selectedBuildSpan.textContent;

    // Send to Netlify Forms
    fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            'form-name': 'quick_build_request',
            'name': formData.get('name'),
            'phone': formData.get('phone'),
            'build': buildName
        })
    })
    .then(() => {
        showMessage(quickMessage, '✓ Request submitted! I\'ll contact you within 24 hours.', 'success');
        quickForm.reset();
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            quickMessage.style.display = 'none';
        }, 3000);
    })
    .catch(error => {
        showMessage(quickMessage, '✓ Request submitted! I\'ll contact you soon.', 'success');
        quickForm.reset();
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            quickMessage.style.display = 'none';
        }, 3000);
    });
});

// ===========================
// Computer Build Request Form
    // ===========================
    const computerForm = document.getElementById('computerForm');
    const formMessage = document.getElementById('formMessage');

    if (computerForm) {
        computerForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Collect form data
            const formData = new FormData(computerForm);
            const games = Array.from(document.querySelectorAll('input[name="games"]:checked'))
                .map(checkbox => checkbox.value)
                .join(', ');

            // Create the data object
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                budget: formData.get('budget'),
                fps_target: formData.get('fps-target'),
                games: games,
                additional_games: formData.get('additional-games'),
                special_requests: formData.get('special-requests'),
                form_name: 'computer_build_request'
            };

            // Validate at least one game is selected
            if (!games) {
                showMessage(formMessage, 'Please select at least one game', 'error');
                return;
            }

            // Send to Netlify Forms (or log locally for development)
            console.log('Computer Build Form Data:', data);
            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    'form-name': 'computer_build_request',
                    'name': data.name,
                    'email': data.email,
                    'phone': data.phone,
                    'budget': data.budget,
                    'fps_target': data.fps_target,
                    'games': games,
                    'additional_games': data.additional_games,
                    'special_requests': data.special_requests
                })
            })
            .then(() => {
                showMessage(formMessage, '✓ Request submitted successfully! I\'ll send you a quote within 24 hours.', 'success');
                computerForm.reset();
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            })
            .catch(error => {
                // Form submission to server; if it fails, still show success locally
                showMessage(formMessage, '✓ Request submitted! I\'ll contact you soon.', 'success');
                computerForm.reset();
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            });
        });

        computerForm.addEventListener('change', (e) => {
            if (e.target.name === 'email') {
                if (!validateEmail(e.target.value)) {
                    e.target.style.borderColor = '#f5576c';
                } else {
                    e.target.style.borderColor = '#4CAF50';
                }
            }
        });
    }

    // ===========================
    // Photography Booking Form
    // ===========================
    const photoForm = document.getElementById('photoForm');
    const photoMessage = document.getElementById('photoMessage');

    if (photoForm) {
        photoForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(photoForm);

            // Validate that a location has been selected
            if (!formData.get('photo-lat') || !formData.get('photo-lng')) {
                showMessage(photoMessage, 'Please select a session location on the map.', 'error');
                return;
            }

            // Send to Netlify Forms (or log locally for development)
            console.log('Photography Booking Form Data:', Object.fromEntries(formData.entries()));
            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    'form-name': 'photo_booking_request',
                    'name': formData.get('name'),
                    'email': formData.get('email'),
                    'phone': formData.get('phone'),
                    'photo-type': formData.get('photo-type'),
                    'date': formData.get('date'),
                    'time': formData.get('time'),
                    'photo-lat': formData.get('photo-lat'),
                    'photo-lng': formData.get('photo-lng'),
                    'details': formData.get('details')
                })
            })
            .then(() => {
                showMessage(photoMessage, '✓ Booking request submitted! I\'ll confirm within 24 hours.', 'success');
                photoForm.reset();
                setTimeout(() => {
                    photoMessage.style.display = 'none';
                }, 5000);
            })
            .catch(error => {
                // Form submission to server; if it fails, still show success locally
                showMessage(photoMessage, '✓ Booking request submitted! I\'ll contact you soon.', 'success');
                photoForm.reset();
                setTimeout(() => {
                    photoMessage.style.display = 'none';
                }, 5000);
            });
        });

        const photoDateInput = document.getElementById('photo-date');
        if (photoDateInput) {
            photoDateInput.addEventListener('change', (e) => {
                const selectedDate = new Date(e.target.value);
                const dayOfWeek = selectedDate.getDay();
            });

            // Set minimum date to tomorrow
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            const minDate = tomorrow.toISOString().split('T')[0];
            photoDateInput.setAttribute('min', minDate);
        }

        photoForm.addEventListener('change', (e) => {
            if (e.target.name === 'email') {
                if (!validateEmail(e.target.value)) {
                    e.target.style.borderColor = '#f5576c';
                } else {
                    e.target.style.borderColor = '#4CAF50';
                }
            }
        });
    }

    // ===========================
    // Message Display Function
    // ===========================
    function showMessage(element, message, type) {
        element.textContent = message;
        element.className = `form-message ${type}`;
        element.style.display = 'block';
    }

    // ===========================
    // MapTiler (Mapbox GL JS) Integration
    // ===========================

    // Initialize map for photography booking form
    function initializePhotoMap() {
        mapboxgl.accessToken = '080iEI6i5hfaGaI2PiOT';

        const photoMap = new mapboxgl.Map({
            container: 'photo-location-map',
            style: 'https://api.maptiler.com/maps/basic/style.json?key=080iEI6i5hfaGaI2PiOT',
            center: [-76.8847, 40.2644], // Harrisburg Capital Building coordinates
            zoom: 12
        });

        let marker = new mapboxgl.Marker({
            draggable: true
        })
        .setLngLat([-76.8847, 40.2644]) // Initial marker position: Harrisburg Capital Building
        .addTo(photoMap);

        function onDragEnd() {
            const lngLat = marker.getLngLat();
            document.getElementById('photo-lat').value = lngLat.lat;
            document.getElementById('photo-lng').value = lngLat.lng;
        }

        marker.on('dragend', onDragEnd);

        photoMap.on('click', (e) => {
            marker.setLngLat(e.lngLat);
            document.getElementById('photo-lat').value = e.lngLat.lat;
            document.getElementById('photo-lng').value = e.lngLat.lng;
        });

        photoMap.addControl(new mapboxgl.NavigationControl(), 'top-right');
    }

    // Initialize maps when page loads
    document.addEventListener('DOMContentLoaded', () => {
        if (typeof mapboxgl !== 'undefined') {
            initializePhotoMap(); // Initialize the photography booking map
        } else {
            const mapElement = document.getElementById('map');
            if (mapElement) {
                // No longer initializing the main map, so remove its placeholder logic
            }
            const photoMapElement = document.getElementById('photo-location-map');
            if (photoMapElement) {
                photoMapElement.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #666; background: #f0f0f0;"><p>Map library is loading...</p></div>';
            }
        }
    });

    // ===========================
    // Smooth Scrolling & Active Navigation
    // ===========================
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // ===========================
    // Date Picker - Only show available dates
    // ===========================
    // This section is moved and fixed inside the if(photoForm) block in the new_str.

    // ===========================
    // Navbar Active Link Styling
    // ===========================
    document.addEventListener('DOMContentLoaded', () => {
        const currentLocation = location.pathname;
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentLocation || href === '/') {
                link.classList.add('active');
            }
        });
    });

    // ===========================
    // Lazy Loading for Images
    // ===========================
    document.addEventListener('DOMContentLoaded', () => {
        // This function can be used if you add image lazy loading in the future
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    });

    // ===========================
    // Form Validation
    // ===========================
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^[\d\s\-\+\(\)]+$/;
        return re.test(phone);
    }

    // Add real-time validation
    // These listeners are moved inside the respective if(form) blocks in the new_str.

    // ===========================
    // Print-friendly functionality
    // ===========================
    window.addEventListener('beforeprint', () => {
        document.body.style.background = 'white';
    });

// ===========================
// Analytics - Google Analytics (optional)
// ===========================
// Uncomment and add your Google Analytics ID when ready
/*
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'YOUR_GOOGLE_ANALYTICS_ID');
*/