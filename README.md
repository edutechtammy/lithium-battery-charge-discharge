# Interactive Battery Charge and Discharge Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge)](https://edutechtammy.github.io/lithium-battery-charge-discharge)
[![Accessibility](https://img.shields.io/badge/WCAG-2.1%20AA-green?style=for-the-badge)](https://www.w3.org/WAI/WCAG21/quickref/)

An educational, accessible interactive animation demonstrating how lithium-ion batteries work during charging and discharging cycles. This project features a unique animated wheel slider that thematically connects to the electric vehicle animation.

## � Quick Start

1. **[View Live Demo](https://edutechtammy.github.io/lithium-battery-charge-discharge)** (will be available once GitHub Pages is enabled)
2. **Local Usage**: Download and open `index.html` in any modern web browser
3. **Keyboard Users**: Click the animation to focus, then use arrow keys to control
4. **Educators**: Scroll down for educational content and glossary

## �🔋 Overview

This interactive animation shows the fundamental processes inside a lithium-ion battery, featuring:

- **Battery cutaway view** with visible lithium ion movement between anode and cathode
- **Electric vehicle animation** with wheels that rotate during discharge and stop during charging
- **Charging station indicator** that appears during charge cycles
- **Battery level gauge** showing real-time charge state
- **Custom wheel slider** with rotating animation that matches the car's wheels

## ✨ Features

### Visual Elements
- **450-frame animation** at 24 fps showing complete charge/discharge cycles
- **Animated wheel thumb slider** that rotates as it moves along the track
- **Synchronized graphics** showing car movement, charging station, and battery gauge
- **Educational labels** for anode, cathode, and lithium ion movement

### Interactive Controls
- **Mouse control**: Drag the animated wheel to scrub through the animation
- **Keyboard navigation**: Full accessibility via arrow keys, Home/End, and spacebar
- **Play/pause button**: Auto-play functionality with user control
- **Motion preferences**: Reduce motion options for accessibility

### Educational Content
- **Comprehensive glossary** explaining battery terminology
- **Real-world applications** connecting concepts to everyday devices
- **Phase descriptions** explaining what happens during charge vs. discharge
- **Progressive disclosure** with expandable educational sections

## 🎯 Accessibility Features

This animation is fully accessible and meets **WCAG 2.1 AA standards**:

### Keyboard Navigation
- **Tab** to navigate between controls
- **Arrow Left/Right**: Move slider backward/forward (10 frames)
- **Home**: Jump to start of animation (frame 0)
- **End**: Jump to end of animation (frame 449)
- **Spacebar**: Play/pause animation
- **Focus indicators**: Clear visual outline when focused

### Screen Reader Support
- **ARIA labels** and descriptions for all interactive elements
- **Live regions** announcing state changes
- **Alternative text** for the canvas animation
- **Comprehensive descriptions** of animation phases
- **Educational context** provided through screen reader text

### Motion and Sensory
- **Reduce motion** option to disable auto-play
- **Pause controls** for user control over animation
- **High contrast mode** support
- **Respects system preferences** via CSS media queries

### Universal Design
- **Multiple interaction methods**: Mouse, keyboard, and button controls
- **Clear instructions** displayed above the animation
- **Educational support** with glossary and explanations
- **Progressive enhancement**: Works regardless of user abilities

## 🚀 Usage

### Getting Started
1. **Open `index.html`** in a modern web browser
2. **Click on the animation area** to focus for keyboard control
3. **Drag the wheel slider** with your mouse or use keyboard controls
4. **Explore the educational content** by expanding the glossary section

### GitHub Pages Deployment
This repository is ready for GitHub Pages deployment:
- The main file is named `index.html` for automatic serving
- Simply enable GitHub Pages in your repository settings
- Your animation will be accessible at: `edutechtammy.github.io/lithium-battery-charge-discharge`

### Basic Interaction
1. **Mouse Users**: Click and drag the animated wheel thumb to control the animation
2. **Keyboard Users**: Click on the animation area to focus, then use arrow keys
3. **Auto-play**: Use the "Play Animation" button for automatic progression

### Understanding the Animation
- **First Half (Frames 0-224)**: **Discharge phase**
  - Car is driving with rotating wheels
  - Battery powers the vehicle
  - Lithium ions move from anode to cathode
  - Battery level decreases

- **Second Half (Frames 225-449)**: **Charging phase**
  - Car stops at charging station
  - Battery stores energy from external source
  - Lithium ions move from cathode to anode
  - Battery level increases

### Accessibility Controls
- **Reduce Motion**: Prevents automatic animation for users with motion sensitivity
- **Pause Animation**: Stops all motion while maintaining interactive control
- **High Contrast**: Enhances visual contrast for better visibility

## 🛠 Technical Details

### File Structure
```
battery-wheel-thumb/
├── index.html                    # Main HTML file with accessibility features
├── Battery_WheelSlider.js        # CreateJS animation and wheel slider logic
├── graphics-source/              # Source assets and development files
│   ├── game-animation/
│   │   └── Battery_WheelSlider.fla  # Original Adobe Animate source file
│   ├── game-captures/
│   │   ├── game-play-still.png     # Screenshot of animation interface
│   │   └── game-play-video.mp4     # Video capture of gameplay
│   └── game-graphics/
│       ├── slider-thumb.ai         # Adobe Illustrator wheel design
│       └── slider-thumb.png        # Exported wheel graphic
└── README.md                     # This file
```

### Source Files and Development Assets

The `graphics-source/` folder contains important development files for future collaborators:

#### Adobe Animate Source (`game-animation/`)
- **Battery_WheelSlider.fla**: The original Adobe Animate CC source file where the animation was created
  - Contains all vector graphics, timelines, and interactive elements
  - Used to generate the initial HTML/CSS/JS output via Adobe Animate's built-in HTML5 Canvas export
  - **Essential for animation modifications**: Future developers who want to modify the animation frames, add new visual elements, or adjust timing should work with this file
  - Requires Adobe Animate CC to open and edit

#### Documentation Assets (`game-captures/`)
- **game-play-still.png**: High-quality screenshot of the animation interface
  - Useful for presentations, documentation, or marketing materials
  - Shows the complete interface including the wheel slider and battery visualization
- **game-play-video.mp4**: Video capture demonstrating the interactive animation
  - Perfect for explaining the functionality to stakeholders or in educational presentations
  - Shows the wheel slider in action and the synchronized battery animation

#### Graphics Assets (`game-graphics/`)
- **slider-thumb.ai**: Adobe Illustrator source file for the custom wheel design
- **slider-thumb.png**: Exported wheel graphic used in the interface

> **Note for Developers**: The current index.html/JS files include significant accessibility enhancements that were added after the initial Adobe Animate export. When making changes to the .fla file and re-exporting, you'll need to reintegrate the accessibility features found in the current index.html file.

### Dependencies
- **CreateJS 1.0.0**: For canvas animation and interactive elements
- **Modern web browser** with HTML5 canvas support
- **No additional frameworks** required

### Repository Setup
This project includes a `.gitignore` file that excludes:
- macOS system files (`.DS_Store`, `._*` resource forks)
- Temporary and cache files
- IDE and editor configuration files
- Log files and runtime data

The repository is clean and ready for GitHub upload with only essential project files included.

### Browser Compatibility
- **Chrome/Edge**: Full support
- **Firefox**: Full support
- **Safari**: Full support
- **Mobile browsers**: Responsive design adapts to touch interaction

## 🎨 Animation Details

### Technical Specifications
- **Canvas size**: 929×652 pixels
- **Frame rate**: 24 fps
- **Total frames**: 450
- **Animation duration**: ~18.75 seconds at full speed
- **Accessibility speed**: Reduced to ~2.5 fps for auto-play

### Wheel Slider Mechanics
- **Rotation calculation**: `rotation = (frame/100) * 360`
- **Position mapping**: Linear relationship between wheel position and animation frame
- **Bidirectional sync**: Mouse and keyboard interactions both update wheel position
- **Smooth animation**: Wheel rotates continuously as it moves along the track

## 📚 Educational Context

### Learning Objectives
Students will understand:
- How lithium-ion batteries store and release energy
- The role of anodes, cathodes, and electrolytes
- The movement of ions during charge and discharge cycles
- Real-world applications in electric vehicles and devices

### Curriculum Connections
- **Chemistry**: Electrochemical reactions and ion movement
- **Physics**: Electrical energy storage and conversion
- **Environmental Science**: Clean energy and electric transportation
- **Engineering**: Battery technology and electric vehicle design

## 🔧 Development Notes

### Development Workflow

#### Making Animation Changes
1. **Open `graphics-source/game-animation/Battery_WheelSlider.fla`** in Adobe Animate CC
2. **Edit the animation**: Modify frames, add elements, or adjust timing
3. **Export to HTML5 Canvas**: Use Adobe Animate's publish settings
4. **Reintegrate accessibility features**: Copy accessibility code from current index.html file
5. **Test all interaction methods**: Ensure mouse, keyboard, and auto-play still work

#### Using Documentation Assets
- **For presentations**: Use `game-play-still.png` to show the interface
- **For demonstrations**: Use `game-play-video.mp4` to explain functionality
- **For stakeholder meetings**: Both assets help explain the educational value

#### Collaboration Notes
- **Animation modifications** require Adobe Animate CC
- **Accessibility features** are maintained in the HTML/JS files
- **Visual assets** can be updated independently using the Illustrator files

### Accessibility Implementation
The original CreateJS animation was enhanced with:
- **HTML accessibility layer** providing keyboard navigation
- **JavaScript bridge** connecting canvas interactions to DOM accessibility
- **ARIA live regions** for dynamic content announcements
- **Educational content structure** with semantic HTML

### Code Integration
- **Canvas focus management**: Direct keyboard control of animation
- **Bidirectional updates**: Both mouse and keyboard sync with accessibility features
- **Global state management**: Consistent frame tracking across interaction methods
- **Performance optimization**: Accessibility features don't impact animation performance

## 🎓 Pedagogical Design

### Constructivist Learning
- **Interactive exploration**: Students control their learning pace
- **Visual feedback**: Immediate response to user actions
- **Multiple representations**: Animation, text, and interactive elements
- **Self-directed discovery**: Users can explore different phases independently

### Universal Design for Learning (UDL)
- **Multiple means of representation**: Visual, auditory, and text-based content
- **Multiple means of engagement**: Interactive control and educational choice
- **Multiple means of action**: Mouse, keyboard, and button interactions

## 📄 License

Educational use permitted. Please credit the original creators when using this animation in educational contexts.

## 🤝 Contributing

This project demonstrates best practices for:
- Creating accessible educational animations
- Integrating CreateJS with modern accessibility standards
- Designing inclusive STEM learning experiences
- Implementing WCAG 2.1 compliance in interactive content

---

*This interactive animation makes complex battery chemistry concepts accessible to all learners through engaging visuals and comprehensive accessibility features.*