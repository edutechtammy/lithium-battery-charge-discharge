# Contributing to Interactive Battery Charge and Discharge Animation

Thank you for your interest in contributing to this educational, accessible interactive animation! This project demonstrates lithium-ion battery chemistry through an engaging, WCAG 2.1 AA compliant interface.

## 🎯 Project Goals

This project aims to:
- **Make battery chemistry accessible** to learners of all abilities
- **Demonstrate best practices** for accessible educational technology
- **Provide high-quality STEM education resources** for educators worldwide
- **Showcase inclusive design** in interactive animations

## 🤝 Ways to Contribute

### 🎨 **Animation and Visual Design**
- **Improve graphics**: Enhance battery cutaway visuals, ion animations, or car graphics
- **Add new animations**: Create additional battery types or charging scenarios
- **Optimize performance**: Improve frame rate or reduce file sizes
- **Mobile experience**: Enhance touch interactions for tablets and phones

### ♿ **Accessibility Enhancements**
- **Screen reader improvements**: Better ARIA descriptions or live region updates
- **Keyboard navigation**: Additional shortcuts or improved focus management
- **Motion sensitivity**: Enhanced reduced-motion preferences
- **Cognitive accessibility**: Simplified language or additional explanations

### 📚 **Educational Content**
- **Expand glossary**: Add more battery chemistry terms and definitions
- **Real-world examples**: Include more device applications or case studies
- **Curriculum alignment**: Map to specific educational standards
- **Language translations**: Internationalization for global accessibility

### 🔧 **Technical Improvements**
- **Code optimization**: Improve performance or maintainability
- **Browser compatibility**: Test and fix issues across different browsers
- **Documentation**: Enhance code comments or technical guides
- **Testing**: Add automated tests for accessibility or functionality

### 🌍 **Educational Outreach**
- **Teaching materials**: Create lesson plans or activity guides
- **Assessment tools**: Develop quizzes or learning objectives
- **Integration guides**: Help for LMS or classroom technology integration
- **Research**: Study effectiveness or learning outcomes

## 🚀 Getting Started

### Prerequisites
- **Basic web development**: HTML, CSS, JavaScript knowledge
- **Git/GitHub**: Familiarity with version control
- **Adobe Animate CC** (for animation modifications)
- **Accessibility awareness**: Understanding of inclusive design principles

### Development Setup

1. **Fork the repository**
   ```bash
   # Go to https://github.com/edutechtammy/lithium-battery-charge-discharge
   # Click "Fork" to create your copy
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/lithium-battery-charge-discharge.git
   cd lithium-battery-charge-discharge
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-improvement-name
   ```

4. **Set up development environment**
   ```bash
   # Open index.html in a modern web browser
   # Or use a local server for testing:
   python -m http.server 8000
   # Visit: http://localhost:8000
   ```

### Making Changes

#### **For Animation Modifications**
1. **Open `graphics-source/game-animation/Battery_WheelSlider.fla`** in Adobe Animate CC
2. **Make your changes** to graphics, timeline, or interactions
3. **Export to HTML5 Canvas** using Adobe Animate's publish settings
4. **Integrate accessibility features** from the current `index.html`
5. **Test thoroughly** across browsers and with assistive technologies

#### **For Code Improvements**
1. **Edit `index.html`** or `Battery_WheelSlider.js` as needed
2. **Maintain accessibility** - don't break WCAG compliance
3. **Test keyboard navigation** and screen reader compatibility
4. **Verify responsive design** on different screen sizes

#### **For Content Additions**
1. **Update README.md** with new educational content
2. **Follow existing structure** and formatting conventions
3. **Ensure accuracy** of scientific information
4. **Consider accessibility** of any new content

## ✅ Quality Standards

### **Accessibility Requirements**
All contributions must maintain **WCAG 2.1 AA compliance**:

- **Keyboard navigation**: All functionality accessible via keyboard
- **Screen reader support**: Proper ARIA labels and descriptions
- **Focus management**: Clear visual focus indicators
- **Motion sensitivity**: Respect reduced-motion preferences
- **Color contrast**: Meet minimum contrast requirements
- **Alternative content**: Text alternatives for visual information

### **Code Quality**
- **Clean, readable code** with meaningful comments
- **Consistent formatting** following existing style
- **Cross-browser compatibility** (Chrome, Firefox, Safari, Edge)
- **Performance optimization** - maintain smooth 24fps animation
- **No breaking changes** to existing functionality

### **Educational Standards**
- **Scientific accuracy** - verify all battery chemistry information
- **Age-appropriate language** for intended audience
- **Clear learning objectives** for any new content
- **Inclusive examples** representing diverse backgrounds

## 🧪 Testing Guidelines

### **Functionality Testing**
- **Mouse interaction**: Drag wheel slider smoothly
- **Keyboard controls**: Arrow keys, Home/End, Spacebar
- **Auto-play**: Play/pause button and motion controls
- **Educational content**: Expandable sections and glossary

### **Accessibility Testing**
- **Screen readers**: Test with NVDA, JAWS, or VoiceOver
- **Keyboard only**: Navigate without mouse
- **High contrast**: Test in high contrast mode
- **Zoom**: Test at 200% zoom level
- **Motion sensitivity**: Verify reduced-motion works

### **Cross-Platform Testing**
- **Browsers**: Chrome, Firefox, Safari, Edge
- **Operating systems**: Windows, macOS, Linux
- **Mobile devices**: iOS Safari, Chrome Mobile
- **Assistive technologies**: Various screen readers and tools

## 📝 Submitting Changes

### **Pull Request Process**

1. **Commit your changes**
   ```bash
   git add .
   git commit -m "Descriptive commit message explaining the change"
   ```

2. **Push to your fork**
   ```bash
   git push origin feature/your-improvement-name
   ```

3. **Create a Pull Request**
   - Go to your fork on GitHub
   - Click "New Pull Request"
   - Fill out the template below

### **Pull Request Template**

```markdown
## Description
Brief description of changes and motivation.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Accessibility improvement
- [ ] Educational content update
- [ ] Documentation update
- [ ] Performance optimization

## Testing Checklist
- [ ] Tested keyboard navigation
- [ ] Verified screen reader compatibility
- [ ] Checked cross-browser functionality
- [ ] Validated educational accuracy
- [ ] Tested reduced motion preferences

## Screenshots/Videos
If applicable, add screenshots or screen recordings showing the changes.

## Additional Context
Any additional information about the implementation or considerations.
```

## 🔍 Review Process

### **What We Look For**
- **Accessibility compliance** maintained or improved
- **Educational value** enhanced or preserved
- **Code quality** meets project standards
- **Testing completeness** across platforms and assistive technologies
- **Documentation** updated appropriately

### **Review Timeline**
- **Initial review**: Within 1 week
- **Feedback incorporation**: Collaborative process
- **Final approval**: When all requirements are met
- **Merge**: After maintainer approval

## 🎓 Learning Resources

### **Accessibility Education**
- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Screen Reader Testing](https://webaim.org/articles/screenreader_testing/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)

### **Battery Chemistry Resources**
- [Battery University](https://batteryuniversity.com/)
- [How Lithium-ion Batteries Work (HowStuffWorks)](https://science.howstuffworks.com/lithium-ion-battery.htm)
- [DoE Battery Technology Overview](https://www.energy.gov/eere/vehicles/batteries)

### **Educational Technology**
- [Universal Design for Learning Guidelines](https://udlguidelines.cast.org/)
- [Inclusive Teaching Strategies](https://www.washington.edu/doit/academic-accommodations-students-learning-disabilities)

## 🏆 Recognition

Contributors will be recognized in:
- **README.md acknowledgments** for significant contributions
- **GitHub contributors page** for all merged pull requests
- **Educational presentations** where appropriate
- **Academic publications** if research collaboration develops

## 💬 Communication

### **Getting Help**
- **GitHub Issues**: For bugs, feature requests, or questions
- **GitHub Discussions**: For broader conversations about the project
- **Email**: [Contact maintainer] for sensitive or detailed discussions

### **Community Guidelines**
- **Be respectful** and inclusive in all interactions
- **Focus on learning** and educational value
- **Support accessibility** and universal design principles
- **Collaborate constructively** with other contributors
- **Maintain professional discourse** in all communications

## 📄 License and Attribution

By contributing, you agree that your contributions will be licensed under the same terms as the project. Please ensure you have the right to contribute any code, content, or assets you submit.

### **Attribution Requirements**
- **Original work**: Clearly indicate if submitting original content
- **Third-party content**: Provide proper attribution and licensing information
- **Educational use**: All contributions should support educational fair use principles

---

## 🌟 Thank You!

Your contributions help make battery chemistry education more accessible and engaging for learners worldwide. Whether you're fixing a small bug, adding a major feature, or improving documentation, every contribution matters in creating inclusive STEM education resources.

**Together, we can make science education accessible to everyone!** ⚡🔋

---

*This contributing guide follows inclusive open source practices and prioritizes accessibility in all aspects of development and collaboration.*