
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener('click', () =>{
  navLinks.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
  anchor.addEventListener('click', function (e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    navLinks.classList.remove('active');
  })
});

const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button =>{
  button.addEventListener('click', () =>{
    const filter = button.getAttribute('data-filter')

    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    portfolioItems.forEach(item =>{
      const category = item.getAttribute('data-category');
      if(filter === 'all' || category === filter){
        item.style.display = 'block'
        item.style.animation = 'fadeInUp 0.5s ease'
      } else{
        item.style.display = 'none';
      }
    })
  })
});

const bookingForm = document.querySelector('.booking-form form');

bookingForm.addEventListener('submit', (e) =>{
  e.preventDefault();

  const formData = new FormData(bookingForm);
  const data = Object.fromEntries(formData.entries());

  if(!data.name || data.email || data['event-type']){
    alert('Please fill in all required fields');
    return
  }

  alert('Thank you for your inquiry');
  bookingForm.reset();
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver((entries) =>{
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
    }
  })
}, observerOptions);

document.querySelectorAll('.service-card, .testimonial-card').forEach(card =>{
  observer.observe(card);
});