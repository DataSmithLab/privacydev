// Collapsible functionality
console.log('Collapsible script starting...');

// Function to inspect DOM structure
function inspectDOM() {
  console.log('=== DOM INSPECTION ===');
  var collapsibles = document.querySelectorAll('.collapsible');
  var contents = document.querySelectorAll('.content');
  
  console.log('Total collapsible elements:', collapsibles.length);
  console.log('Total content elements:', contents.length);
  
  // Show the first few elements
  for (var i = 0; i < Math.min(3, collapsibles.length); i++) {
    console.log('Collapsible', i, ':', collapsibles[i].outerHTML);
    console.log('Parent of collapsible:', collapsibles[i].parentElement.tagName);
    console.log('All siblings of collapsible:');
    var parent = collapsibles[i].parentElement;
    for (var j = 0; j < parent.children.length; j++) {
      console.log('  Sibling', j, ':', parent.children[j].tagName, parent.children[j].className);
    }
  }
  
  // Show content elements
  for (var i = 0; i < Math.min(3, contents.length); i++) {
    console.log('Content', i, ':', contents[i].outerHTML);
    console.log('Parent of content:', contents[i].parentElement.tagName);
  }
  console.log('=== END DOM INSPECTION ===');
}

// Wait for DOM to be ready
function initCollapsible() {
  console.log('Initializing collapsible...');
  
  var collapsibles = document.querySelectorAll('.collapsible');
  console.log('Found', collapsibles.length, 'collapsible elements');
  
  // Inspect DOM structure
  inspectDOM();
  
  collapsibles.forEach(function(collapsible, index) {
    console.log('Setting up collapsible', index);
    
    // Add click event
    collapsible.addEventListener('click', function() {
      console.log('Clicked collapsible:', this.textContent.trim());
      
      // Toggle active class
      this.classList.toggle('active');
      
      // Find the corresponding content div by index
      var allContentDivs = document.querySelectorAll('.content');
      var content = allContentDivs[index];
      
      console.log('Looking for content at index:', index);
      console.log('Total content divs:', allContentDivs.length);
      console.log('Content element found:', content);
      console.log('Content element HTML:', content ? content.outerHTML : 'null');
      
      if (content && content.classList.contains('content')) {
        console.log('Found content, toggling...');
        
        if (content.classList.contains('show')) {
          // Hide content
          content.classList.remove('show');
          content.style.maxHeight = '0px';
        } else {
          // Show content
          content.classList.add('show');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      } else {
        console.error('Content not found for:', this.textContent.trim());
        console.log('Next element:', content);
        if (content) {
          console.log('Content classes:', content.classList);
          console.log('Content tag name:', content.tagName);
        }
      }
    });
    
    // Add visual indicator
    collapsible.style.border = '2px solid #4CAF50';
  });
  
  console.log('Collapsible setup complete');
}

// Try multiple ways to ensure it runs
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCollapsible);
} else {
  initCollapsible();
}

// Also try on window load as backup
window.addEventListener('load', function() {
  console.log('Window loaded, checking collapsible...');
  if (document.querySelectorAll('.collapsible').length > 0) {
    console.log('Collapsible elements found on window load');
  }
}); 
