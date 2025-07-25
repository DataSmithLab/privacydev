// Icons and Images handler
document.addEventListener('DOMContentLoaded', function() {
  // Replace Material Design Icons patterns
  const content = document.querySelectorAll('.article-content');
  
  if (content) {
    content.forEach(function(element) {
      // Look for the pattern :material-icon-name:
      const html = element.innerHTML;
      const updatedHtml = html.replace(/:material-([a-z0-9\-]+):{\.([a-z\-]+)}/g, function(match, iconName, className) {
        return `<i class="mdi mdi-${iconName} ${className}"></i>`;
      }).replace(/:material-([a-z0-9\-]+):/g, function(match, iconName) {
        return `<i class="mdi mdi-${iconName}"></i>`;
      });
      
      element.innerHTML = updatedHtml;
    });
  }
  
  // Fix broken images by replacing them with proper HTML
  const fixLogoImages = function() {
    // GitHub Copilot logo
    const githubLogo = document.querySelector('img[alt="GitHub Copilot logo"]');
    if (githubLogo) {
      const logoContainer = githubLogo.parentNode;
      logoContainer.innerHTML = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Copilot logo" style="width:128px; float:right;">';
    }
    
    // Cursor logo
    const cursorLogo = document.querySelector('img[alt="Cursor logo"]');
    if (cursorLogo) {
      const logoContainer = cursorLogo.parentNode;
      logoContainer.innerHTML = '<img src="https://cursor.sh/brand/logo.svg" alt="Cursor logo" style="width:128px; float:right;">';
    }
    
    // Anthropic logo
    const anthropicLogo = document.querySelector('img[alt="Anthropic logo"]');
    if (anthropicLogo) {
      const logoContainer = anthropicLogo.parentNode;
      logoContainer.innerHTML = '<img src="https://www.anthropic.com/images/anthropic_logo_white.svg" alt="Anthropic logo" style="width:128px; float:right; background-color:#000; padding:10px;">';
    }
    
    // Ollama logo
    const ollamaLogo = document.querySelector('img[alt="Ollama logo"]');
    if (ollamaLogo) {
      const logoContainer = ollamaLogo.parentNode;
      logoContainer.innerHTML = '<img src="https://ollama.ai/public/ollama.png" alt="Ollama logo" style="width:128px; float:right;">';
    }
  };
  
  // Replace Octicons
  const replaceOcticons = function() {
    const octicons = document.querySelectorAll('[class*="octicons-"]');
    octicons.forEach(function(el) {
      const classes = Array.from(el.classList);
      const iconClass = classes.find(c => c.startsWith('octicons-'));
      if (iconClass) {
        const iconName = iconClass.replace('octicons-', '');
        el.innerHTML = `<i class="octicon octicon-${iconName}"></i> ${el.innerHTML}`;
      }
    });
  };

  // Fix threat icons
  const fixThreatIcons = function() {
    // Find all list items with threat icons
    const threatItems = document.querySelectorAll('.article-content ul li');
    threatItems.forEach(function(item) {
      // Check if the item contains material icons
      if (item.innerHTML.includes('mdi-lock-question') || 
          item.innerHTML.includes('mdi-account-key') || 
          item.innerHTML.includes('mdi-cloud-lock')) {
        // Add special styling
        item.style.display = 'flex';
        item.style.alignItems = 'center';
        item.style.marginBottom = '10px';
        
        // Find the icon and add styling
        const icon = item.querySelector('i.mdi');
        if (icon) {
          icon.style.marginRight = '8px';
          icon.style.fontSize = '1.3em';
        }
      }
    });
  };
  
  // Run our fixes
  setTimeout(function() {
    fixLogoImages();
    replaceOcticons();
    fixThreatIcons();
  }, 500);
}); 