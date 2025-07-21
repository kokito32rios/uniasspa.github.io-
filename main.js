// Menú móvil
const menuToggle = document.querySelector(".menu-toggle")
const navList = document.querySelector(".nav-list")

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navList.classList.toggle("active")

// Obtener año actual para el footer
document.getElementById("current-year").textContent = new Date().getFullYear();

    // Cambiar el estilo del botón de menú
    const spans = menuToggle.querySelectorAll("span")
    spans[0].classList.toggle("rotate-45")
    spans[1].classList.toggle("opacity-0")
    spans[2].classList.toggle("-rotate-45")
  })
}

// Cerrar el menú al hacer clic en un enlace
const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navList.classList.contains("active")) {
      navList.classList.remove("active")

      // Restaurar el estilo del botón de menú
      const spans = menuToggle.querySelectorAll("span")
      spans[0].classList.remove("rotate-45")
      spans[1].classList.remove("opacity-0")
      spans[2].classList.remove("-rotate-45")
    }
  })
})

// Cambiar el estilo del header al hacer scroll
const header = document.querySelector(".header")
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.style.padding = "0.7rem 0"
    header.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"
  } else {
    header.style.padding = "1rem 0"
    header.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)"
  }
})

// Carrusel de testimonios
const testimonios = document.querySelectorAll(".testimonio")
const dots = document.querySelectorAll(".dot")

if (testimonios.length > 0 && dots.length > 0) {
  let currentSlide = 0

  // Mostrar el primer testimonio
  testimonios[0].style.display = "block"
  dots[0].classList.add("active")

  // Función para cambiar de testimonio
  function showSlide(index) {
    // Ocultar todos los testimonios
    testimonios.forEach((testimonio) => {
      testimonio.style.display = "none"
    })

    // Quitar la clase active de todos los dots
    dots.forEach((dot) => {
      dot.classList.remove("active")
    })

    // Mostrar el testimonio actual
    testimonios[index].style.display = "block"
    dots[index].classList.add("active")
  }

  // Cambiar de testimonio cada 5 segundos
  setInterval(() => {
    currentSlide = (currentSlide + 1) % testimonios.length
    showSlide(currentSlide)
  }, 5000)

  // Cambiar de testimonio al hacer clic en un dot
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index
      showSlide(currentSlide)
    })
  })
}

// Animación de elementos al hacer scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(
    ".servicio-card, .nosotros-img, .nosotros-text, .testimonio, .mapa, .contacto-info",
  )

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top
    const screenPosition = window.innerHeight / 1.3

    if (elementPosition < screenPosition) {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    }
  })
}

// Aplicar estilos iniciales para la animación
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".servicio-card, .nosotros-img, .nosotros-text, .testimonio, .mapa, .contacto-info",
  )

  elements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Ejecutar la animación al cargar la página
  animateOnScroll()
})

// Ejecutar la animación al hacer scroll
window.addEventListener("scroll", animateOnScroll)

