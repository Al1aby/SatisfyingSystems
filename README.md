<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <title>Flow Foundry</title>
  <link rel="stylesheet" href="src/styles.css" />
</head>
<body>
  <div class="app-shell">
    <header class="topbar">
      <div>
        <h1>Flow Foundry</h1>
        <p class="tagline">Rotate the system. Complete the flow.</p>
      </div>
      <button id="soundBtn" class="icon-btn" aria-label="Toggle sound">🔊</button>
    </header>

    <section class="hud card">
      <div class="hud-item"><span>Level</span><strong id="levelLabel">1</strong></div>
      <div class="hud-item"><span>Moves</span><strong id="movesLabel">0</strong></div>
      <div class="hud-item"><span>Best</span><strong id="bestLabel">—</strong></div>
      <div class="hud-item"><span>Stars</span><strong id="starsLabel">0</strong></div>
    </section>

    <main class="game-layout">
      <section class="board-card card">
        <div class="board-header">
          <div>
            <h2 id="levelTitle">Tutorial Flow</h2>
            <p id="levelGoal">Connect the source to every receiver.</p>
          </div>
          <button id="playFlowBtn" class="secondary-btn">Test Flow</button>
        </div>
        <div id="board" class="board" aria-label="Game board"></div>
      </section>

      <section class="controls card">
        <button id="resetBtn">Reset</button>
        <button id="hintBtn">Hint</button>
        <button id="nextBtn" disabled>Next</button>
      </section>

      <section class="levels-panel card">
        <div class="levels-head">
          <h3>Levels</h3>
          <span id="progressLabel">1 / 20 unlocked</span>
        </div>
        <div id="levelGrid" class="level-grid"></div>
      </section>
    </main>
  </div>

  <div id="toast" class="toast"></div>

  <div id="winModal" class="modal hidden">
    <div class="modal-card">
      <h2>System Complete</h2>
      <p id="winText">Great work.</p>
      <div id="starDisplay" class="star-display"></div>
      <div class="modal-actions">
        <button id="winReplayBtn" class="secondary-btn">Replay</button>
        <button id="winNextBtn">Next Level</button>
      </div>
    </div>
  </div>

  <script src="src/levels.js"></script>
  <script src="src/audio.js"></script>
  <script src="src/game.js"></script>
</body>
</html>
