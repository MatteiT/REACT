# Projet Slider

## Structure du Projet

- App.jsx
- data.js
- main.jsx

## Strcuture JSX

- App.jsx

  - section.section
    - div.title
      - h2
        - span
    - div.section-center
      - people.map() et retourner :
        - article
          - img.person-img
          - h4
          - p.title
          - p.text
      - button.prev
      - button.next

## Logique

- créer un state people qui contient les data
- créer un state index
- créer les fonctions pour avancer ou reculer d'une slide (voir les classes .prevSlide, .activeSlideet et .nextSlide dans le CSS)
- créer un useEffect qui contient un setInterval faisant avancer une slide toute les 5 secondes
