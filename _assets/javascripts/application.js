//= require_self

$(document).ready(function() {
  // ScrollAppear
  if (typeof $.fn.scrollAppear === 'function') {
    $('.scrollappear').scrollAppear();
  }

  // Zooming
  new Zooming(
    {customSize: '100%', scaleBase: 0.9, scaleExtra: 0}
  ).listen('.zooming');

  // Share buttons
  $('.article-share a').on('click', function() {
    window.open($(this).attr('href'), 'Share', 'width=200,height=200,noopener');
    return false;
  });
});

// FAQ Dropdown Functionality
document.addEventListener('DOMContentLoaded', function() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const toggle = this.querySelector('.faq-toggle');
      
      // Close all other answers
      document.querySelectorAll('.faq-answer').forEach(ans => {
        if (ans !== answer) {
          ans.classList.remove('active');
        }
      });
      document.querySelectorAll('.faq-question').forEach(q => {
        if (q !== this) {
          q.classList.remove('active');
        }
      });
      document.querySelectorAll('.faq-toggle').forEach(t => {
        if (t !== toggle) {
          t.classList.remove('active');
        }
      });
      
      // Toggle current answer
      answer.classList.toggle('active');
      this.classList.toggle('active');
      if (toggle) {
        toggle.classList.toggle('active');
      }
    });
  });
});