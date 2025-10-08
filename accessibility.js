// Accessibility JavaScript for Battery Animation

// Accessibility variables
var currentFrame = 0;
var isPlaying = false;
var reducedMotion = false;

// Make currentFrame globally accessible
window.currentFrame = currentFrame;

function updateAccessibilityInfo(frameNumber) {
    const totalFrames = 449;
    const percentage = Math.round((frameNumber / totalFrames) * 100);
    const isCharging = frameNumber > 319; // Charging phase begins at 71% (319/449)

    // Update current state
    const currentState = document.getElementById('current-state');
    const stateDesc = document.getElementById('state-description');
    const batteryLevel = document.getElementById('battery-level');
    const carStatus = document.getElementById('car-status');
    const chargingStatus = document.getElementById('charging-status');

    if (currentState) {
        if (isCharging) {
            currentState.textContent = `Charging phase: ${percentage}% through animation`;
            if (stateDesc) stateDesc.textContent = `Battery is charging. Lithium ions are moving toward the anode.`;
            if (carStatus) carStatus.textContent = `Electric car is stopped and connected to charging station.`;
            if (chargingStatus) chargingStatus.textContent = `Charging station is active and visible.`;
            if (batteryLevel) batteryLevel.textContent = `Battery level increasing: ${Math.round(percentage * 0.8)}% charged`;
        } else {
            currentState.textContent = `Discharge phase: ${percentage}% through animation`;
            if (stateDesc) stateDesc.textContent = `Battery is discharging. Lithium ions are moving toward the cathode.`;
            if (carStatus) carStatus.textContent = `Electric car is driving and wheels are rotating.`;
            if (chargingStatus) chargingStatus.textContent = `No charging station visible.`;
            if (batteryLevel) batteryLevel.textContent = `Battery level decreasing: ${Math.round(100 - (percentage * 0.7))}% charged`;
        }
    }
}

function setupKeyboardControls() {
    const canvas = document.getElementById('canvas');

    if (canvas) {
        // Add keyboard event listeners to the canvas
        canvas.addEventListener('keydown', function (e) {
            let newFrame = currentFrame;

            switch (e.key) {
                case 'Home':
                    e.preventDefault();
                    newFrame = 0;
                    break;
                case 'End':
                    e.preventDefault();
                    newFrame = 449;
                    break;
                case ' ': // Spacebar for play/pause
                    e.preventDefault();
                    togglePlayPause();
                    return;
                case 'ArrowLeft':
                    e.preventDefault();
                    newFrame = Math.max(0, currentFrame - 10);
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    newFrame = Math.min(449, currentFrame + 10);
                    break;
                default:
                    return; // Don't handle other keys
            }

            // Update the animation frame
            if (newFrame !== currentFrame) {
                currentFrame = newFrame;
                window.currentFrame = currentFrame; // Keep global sync

                if (exportRoot) {
                    exportRoot.gotoAndStop(newFrame);
                    updateAccessibilityInfo(newFrame);

                    // Update the original wheel slider position and rotation
                    if (exportRoot.thumb && exportRoot.rail) {
                        const frameRatio = newFrame / 449;
                        const newX = exportRoot.railX + (frameRatio * exportRoot.railW);
                        exportRoot.thumb.x = newX;
                        const value = newFrame / 100;
                        exportRoot.thumb.rotation = value * 360;
                    }
                }
            }
        });

        // Add focus and blur handlers for better UX
        canvas.addEventListener('focus', function () {
            this.style.outline = '3px solid #4A90E2';
            this.style.outlineOffset = '2px';
        });

        canvas.addEventListener('blur', function () {
            this.style.outline = 'none';
        });
    }
}

function togglePlayPause() {
    isPlaying = !isPlaying;
    const button = document.getElementById('play-pause-btn');
    if (button) {
        button.textContent = isPlaying ? 'Pause Animation' : 'Play Animation';
        button.setAttribute('aria-pressed', isPlaying.toString());
    }

    if (isPlaying && !reducedMotion) {
        startAutoPlay();
    } else {
        stopAutoPlay();
    }
}

var autoPlayInterval;
function startAutoPlay() {
    if (autoPlayInterval) clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(() => {
        let nextFrame = (currentFrame + 1) % 450;
        currentFrame = nextFrame;
        window.currentFrame = currentFrame; // Keep global sync

        if (exportRoot) {
            exportRoot.gotoAndStop(nextFrame);
            updateAccessibilityInfo(nextFrame);

            // Update the original wheel slider position and rotation
            if (exportRoot.thumb && exportRoot.rail) {
                const frameRatio = nextFrame / 449;
                const newX = exportRoot.railX + (frameRatio * exportRoot.railW);
                exportRoot.thumb.x = newX;
                const value = nextFrame / 100;
                exportRoot.thumb.rotation = value * 360;
            }
        }
    }, 100); // Slower than 24fps for accessibility
}

function stopAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
    }
}

function setupAccessibilityControls() {
    // Reduce motion control
    const reduceMotionCheckbox = document.getElementById('reduce-motion');
    if (reduceMotionCheckbox) {
        reduceMotionCheckbox.addEventListener('change', function () {
            reducedMotion = this.checked;
            if (reducedMotion) {
                stopAutoPlay();
                isPlaying = false;
                const button = document.getElementById('play-pause-btn');
                if (button) {
                    button.textContent = 'Play Animation';
                    button.setAttribute('aria-pressed', 'false');
                }
            }
        });
    }

    // High contrast control
    const highContrastCheckbox = document.getElementById('high-contrast');
    if (highContrastCheckbox) {
        highContrastCheckbox.addEventListener('change', function () {
            document.body.classList.toggle('high-contrast', this.checked);
        });
    }

    // Pause animation control
    const pauseCheckbox = document.getElementById('pause-animation');
    if (pauseCheckbox) {
        pauseCheckbox.addEventListener('change', function () {
            if (this.checked) {
                stopAutoPlay();
                isPlaying = false;
            }
        });
    }
}

// Initialize accessibility features when animation is ready
function initializeAccessibility() {
    setTimeout(() => {
        setupKeyboardControls();
        setupAccessibilityControls();
        updateAccessibilityInfo(0);

        // Store rail properties globally for keyboard navigation
        if (exportRoot && exportRoot.rail) {
            window.exportRoot = exportRoot;
        }
    }, 500);
}