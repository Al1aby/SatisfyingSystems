
(() => {
  const boardEl = document.getElementById('board');
  const levelGridEl = document.getElementById('levelGrid');
  const levelLabelEl = document.getElementById('levelLabel');
  const levelTitleEl = document.getElementById('levelTitle');
  const levelGoalEl = document.getElementById('levelGoal');
  const movesLabelEl = document.getElementById('movesLabel');
  const bestLabelEl = document.getElementById('bestLabel');
  const starsLabelEl = document.getElementById('starsLabel');
  const progressLabelEl = document.getElementById('progressLabel');
  const toastEl = document.getElementById('toast');
  const soundBtn = document.getElementById('soundBtn');
  const winModal = document.getElementById('winModal');
  const winText = document.getElementById('winText');
  const starDisplay = document.getElementById('starDisplay');

  const STORAGE_KEY = 'flow_foundry_save_v1';
  const DIRS = ['up', 'right', 'down', 'left'];
  const OPP = { up:'down', down:'up', left:'right', right:'left' };

  const PIECES = {
    empty: [],
    line: [
      ['up','down'],
      ['left','right'],
      ['up','down'],
      ['left','right']
    ],
    elbow: [
      ['up','right'],
      ['right','down'],
      ['down','left'],
      ['left','up']
    ],
    tee: [
      ['up','right','left'],
      ['up','right','down'],
      ['right','down','left'],
      ['up','down','left']
    ],
    cross: [
      ['up','right','down','left'],
      ['up','right','down','left'],
      ['up','right','down','left'],
      ['up','right','down','left']
    ],
    source: [
      ['right'],
      ['down'],
      ['left'],
      ['up']
    ],
    receiver: [
      ['left'],
      ['up'],
      ['right'],
      ['down']
    ]
  };

  let state = loadSave();
  let levelIndex = Math.min(state.currentLevel, LEVELS.length - 1);
  let boardState = [];
  let startBoardState = [];
  let undoStack = [];
  let moveCount = 0;
  let solved = false;

  function defaultSave() {
    return {
      currentLevel: 0,
      unlocked: 1,
      bestMoves: {},
      stars: {},
      sound: true
    };
  }

  function loadSave() {
    try {
      return { ...defaultSave(), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') };
    } catch {
      return defaultSave();
    }
  }

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function totalStars() {
    return Object.values(state.stars).reduce((a,b) => a + b, 0);
  }

  function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function currentLevel() {
    return LEVELS[levelIndex];
  }

  function createInitialBoard(level) {
    const board = [];
    for (let y = 0; y < level.height; y++) {
      const row = [];
      for (let x = 0; x < level.width; x++) {
        const type = level.tiles[y][x];
        let rotation = (level.solution[y][x] || 0) % 4;
        row.push({ type, rotation, filled: false });
      }
      board.push(row);
    }
    (level.scramble || []).forEach(([x,y,turns]) => {
      board[y][x].rotation = (board[y][x].rotation + turns) % 4;
    });
    return board;
  }

  function resetLevel() {
    boardState = deepClone(startBoardState);
    undoStack = [];
    moveCount = 0;
    solved = false;
    updateHud();
    renderBoard();
    document.getElementById('nextBtn').disabled = true;
  }

  function loadLevel(index) {
    levelIndex = index;
    const level = currentLevel();
    startBoardState = createInitialBoard(level);
    boardState = deepClone(startBoardState);
    undoStack = [];
    moveCount = 0;
    solved = false;
    levelLabelEl.textContent = String(level.id);
    levelTitleEl.textContent = level.title;
    levelGoalEl.textContent = level.goal;
    updateHud();
    renderLevelButtons();
    renderBoard();
    document.getElementById('nextBtn').disabled = true;
  }

  function connectionsFor(cell) {
    const defs = PIECES[cell.type] || [];
    return defs[cell.rotation % 4] || [];
  }

  function neighbor(x,y,dir) {
    if (dir === 'up') return [x, y - 1];
    if (dir === 'right') return [x + 1, y];
    if (dir === 'down') return [x, y + 1];
    return [x - 1, y];
  }

  function inBounds(x,y) {
    const level = currentLevel();
    return x >= 0 && y >= 0 && x < level.width && y < level.height;
  }

  function simulateFlow() {
    for (const row of boardState) for (const cell of row) cell.filled = false;
    const level = currentLevel();
    const queue = [level.source];
    const visited = new Set();
    let flowedSteps = 0;

    while (queue.length) {
      const [x,y] = queue.shift();
      const key = `${x},${y}`;
      if (visited.has(key)) continue;
      visited.add(key);
      const cell = boardState[y][x];
      cell.filled = true;
      flowedSteps++;

      for (const dir of connectionsFor(cell)) {
        const [nx, ny] = neighbor(x,y,dir);
        if (!inBounds(nx,ny)) continue;
        const target = boardState[ny][nx];
        const targetConnections = connectionsFor(target);
        if (!targetConnections.includes(OPP[dir])) continue;
        queue.push([nx, ny]);
      }
    }

    const allReceiversFilled = currentLevel().receivers.every(([x,y]) => boardState[y][x].filled);
    return { allReceiversFilled, flowedSteps };
  }

  function updateHud() {
    movesLabelEl.textContent = String(moveCount);
    const best = state.bestMoves[currentLevel().id];
    bestLabelEl.textContent = best ? String(best) : '—';
    starsLabelEl.textContent = String(totalStars());
    progressLabelEl.textContent = `${state.unlocked} / ${LEVELS.length} unlocked`;
  }

  function connectorClass(dir, flowing) {
    return `connector ${dir} ${flowing ? 'flowing' : ''}`;
  }

  function renderBoard() {
    const level = currentLevel();
    boardEl.innerHTML = '';
    boardEl.style.gridTemplateColumns = `repeat(${level.width}, var(--tile))`;
    boardEl.style.gridTemplateRows = `repeat(${level.height}, var(--tile))`;

    simulateFlow();

    for (let y = 0; y < level.height; y++) {
      for (let x = 0; x < level.width; x++) {
        const cell = boardState[y][x];
        const tile = document.createElement('button');
        tile.className = `tile ${cell.type !== 'empty' ? '' : 'locked'} ${cell.filled ? 'filled' : ''} ${cell.type}`;
        tile.setAttribute('aria-label', `${cell.type} tile ${x},${y}`);
        tile.disabled = cell.type === 'empty';
        tile.addEventListener('click', () => rotateTile(x,y));

        const cons = connectionsFor(cell);
        cons.forEach(dir => {
          const c = document.createElement('div');
          c.className = connectorClass(dir, cell.filled);
          tile.appendChild(c);
        });

        if (cons.length) {
          const center = document.createElement('div');
          center.className = `connector center ${cell.filled ? 'flowing' : ''}`;
          tile.appendChild(center);
        }

        if (cell.type === 'source' || cell.type === 'receiver') {
          const core = document.createElement('div');
          core.className = 'core';
          tile.appendChild(core);
        }

        boardEl.appendChild(tile);
      }
    }
  }

  function rotateTile(x,y) {
    if (solved) return;
    const cell = boardState[y][x];
    if (cell.type === 'empty' || cell.type === 'cross') return;
    undoStack.push({ x, y, prevRotation: cell.rotation });
    cell.rotation = (cell.rotation + 1) % 4;
    moveCount++;
    Sound.rotate();
    updateHud();
    renderBoard();
    autoCheckSolved();
  }

  function undoMove() {
    if (solved) return;
    const lastMove = undoStack.pop();
    if (!lastMove) {
      showToast('Nothing to undo yet.');
      return;
    }
    const { x, y, prevRotation } = lastMove;
    boardState[y][x].rotation = prevRotation;
    moveCount = Math.max(0, moveCount - 1);
    updateHud();
    renderBoard();
    showToast('Undid last rotation.');
  }

  function autoCheckSolved() {
    const result = simulateFlow();
    renderBoard();
    if (result.allReceiversFilled) {
      handleWin();
    }
  }

  function computeStars(levelId, moves) {
    const baseline = estimatePar(LEVELS.find(l => l.id === levelId));
    if (moves <= baseline) return 3;
    if (moves <= baseline + 3) return 2;
    return 1;
  }

  function estimatePar(level) {
    return (level.scramble || []).length + Math.ceil((level.width * level.height) / 8);
  }

  function handleWin() {
    if (solved) return;
    solved = true;
    Sound.success();

    const id = currentLevel().id;
    const prevBest = state.bestMoves[id];
    if (!prevBest || moveCount < prevBest) state.bestMoves[id] = moveCount;

    const stars = computeStars(id, moveCount);
    state.stars[id] = Math.max(state.stars[id] || 0, stars);

    const newlyUnlocked = Math.min(LEVELS.length, Math.max(state.unlocked, levelIndex + 2));
    state.unlocked = newlyUnlocked;
    state.currentLevel = Math.max(state.currentLevel, Math.min(levelIndex + 1, LEVELS.length - 1));
    save();

    updateHud();
    renderLevelButtons();
    document.getElementById('nextBtn').disabled = false;

    starDisplay.textContent = '★'.repeat(stars) + '☆'.repeat(3 - stars);
    winText.textContent = `Solved in ${moveCount} moves.`;
    winModal.classList.remove('hidden');
  }

  function renderLevelButtons() {
    levelGridEl.innerHTML = '';
    LEVELS.forEach((level, index) => {
      const btn = document.createElement('button');
      const unlocked = index < state.unlocked;
      btn.className = `level-btn ${unlocked ? '' : 'locked'} ${index === levelIndex ? 'active' : ''}`;
      btn.disabled = !unlocked;
      const stars = state.stars[level.id] || 0;
      btn.innerHTML = `${level.id}<span class="mini-stars">${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}</span>`;
      btn.addEventListener('click', () => loadLevel(index));
      levelGridEl.appendChild(btn);
    });
  }

  function showToast(text) {
    toastEl.textContent = text;
    toastEl.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toastEl.classList.remove('show'), 1800);
  }

  function findHintMove() {
    const level = currentLevel();
    for (let y = 0; y < level.height; y++) {
      for (let x = 0; x < level.width; x++) {
        const cell = boardState[y][x];
        if (cell.type === 'empty' || cell.type === 'cross') continue;
        const targetRot = level.solution[y][x] || 0;
        if (cell.rotation !== targetRot) return { x, y, targetRot };
      }
    }
    return null;
  }

  function showHint() {
    const hint = findHintMove();
    if (!hint) {
      showToast('No hint needed here.');
      return;
    }
    Sound.hint();
    const index = hint.y * currentLevel().width + hint.x;
    const tile = boardEl.children[index];
    tile.classList.add('hint');
    setTimeout(() => tile.classList.remove('hint'), 1800);
    showToast(`Try rotating tile ${hint.x + 1}, ${hint.y + 1}.`);
    showRewardedAd();
  }

  function testFlow() {
    const result = simulateFlow();
    renderBoard();
    Sound.flow();
    if (result.allReceiversFilled) {
      handleWin();
    } else {
      showToast('Flow incomplete. Keep tuning the system.');
    }
  }

  function showInterstitialAd() {
    console.log('[Monetization] Interstitial ad placeholder');
  }

  function showRewardedAd() {
    console.log('[Monetization] Rewarded ad placeholder');
  }

  document.getElementById('resetBtn').addEventListener('click', resetLevel);
  document.getElementById('hintBtn').addEventListener('click', showHint);
  document.getElementById('undoBtn').addEventListener('click', undoMove);
  document.getElementById('playFlowBtn').addEventListener('click', testFlow);
  document.getElementById('nextBtn').addEventListener('click', () => {
    if (levelIndex + 1 < state.unlocked && levelIndex + 1 < LEVELS.length) {
      showInterstitialAd();
      loadLevel(Math.min(levelIndex + 1, LEVELS.length - 1));
    }
  });

  document.getElementById('winReplayBtn').addEventListener('click', () => {
    winModal.classList.add('hidden');
    resetLevel();
  });

  document.getElementById('winNextBtn').addEventListener('click', () => {
    winModal.classList.add('hidden');
    if (levelIndex + 1 < LEVELS.length) {
      showInterstitialAd();
      loadLevel(Math.min(levelIndex + 1, LEVELS.length - 1));
    } else {
      showToast('All levels complete. Add more content next.');
    }
  });

  soundBtn.addEventListener('click', () => {
    const on = Sound.toggle();
    state.sound = on;
    save();
    soundBtn.textContent = on ? '🔊' : '🔇';
  });

  if (state.sound === false) {
    Sound.toggle();
  }
  soundBtn.textContent = state.sound === false ? '🔇' : '🔊';
  
  document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (key === 'u') undoMove();
    if (key === 'r') resetLevel();
    if (key === 'h') showHint();
    if (key === 't') testFlow();
    if (key === 'n') {
      const nextBtn = document.getElementById('nextBtn');
      if (!nextBtn.disabled) nextBtn.click();
    }
  });

  loadLevel(levelIndex);
})();
