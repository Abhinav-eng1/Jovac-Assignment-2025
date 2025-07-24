const undoBtn = document.getElementById('undoBtn');
    const redoBtn = document.getElementById('redoBtn');
    const resetBtn = document.getElementById('resetBtn');

    const body = document.body;
    let circles = [];
    let redoStack = [];

    body.addEventListener('click', (e) => {
      
      if (e.target.tagName === 'BUTTON') return;

      const circle = document.createElement('div');
      circle.className = 'circle';
      circle.style.left = `${e.clientX}px`;
      circle.style.top = `${e.clientY}px`;

      body.appendChild(circle);
      circles.push(circle);
      redoStack = [];
      updateButtons();
    });

    undoBtn.addEventListener('click', () => {
      if (circles.length > 0) {
        const circle = circles.pop();
        circle.remove();
        redoStack.push(circle);
        updateButtons();
      }
    });

    redoBtn.addEventListener('click', () => {
      if (redoStack.length > 0) {
        const circle = redoStack.pop();
        body.appendChild(circle);
        circles.push(circle);
        updateButtons();
      }
    });

    resetBtn.addEventListener('click', () => {
      circles.forEach(c => c.remove());
      circles = [];
      redoStack = [];
      updateButtons();
    });

    function updateButtons() {
      undoBtn.disabled = circles.length === 0;
      redoBtn.disabled = redoStack.length === 0;
      resetBtn.disabled = circles.length === 0 && redoStack.length === 0;
    }

    updateButtons(); 