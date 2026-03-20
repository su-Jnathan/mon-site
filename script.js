
window.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn-fuyant');
  const zone = document.querySelector('.game-zone');

  // Position initiale
  btn.style.left = "100px";
  btn.style.top = "100px";

  document.addEventListener('mousemove', (e) => {

    const bRect = btn.getBoundingClientRect();
    const zRect = zone.getBoundingClientRect();

    const btnCX = bRect.left + bRect.width / 2;
    const btnCY = bRect.top + bRect.height / 2;

    const dx = btnCX - e.clientX;
    const dy = btnCY - e.clientY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 150) return;

    const angle = Math.atan2(dy, dx);
    const force = 120;

    let newLeft = bRect.left - zRect.left + Math.cos(angle) * force;
    let newTop  = bRect.top  - zRect.top  + Math.sin(angle) * force;

    // Garde le bouton dans la zone
    newLeft = Math.max(0, Math.min(newLeft, zRect.width - bRect.width));
    newTop  = Math.max(0, Math.min(newTop, zRect.height - bRect.height));

    btn.style.left = newLeft + 'px';
    btn.style.top  = newTop + 'px';
  });

  // Optionnel : clique
  btn.addEventListener("click", () => {
    alert(" orr session t'attend!");
  });
});
