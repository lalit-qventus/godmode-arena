# godmode-arena

A polished single-page tic-tac-toe web game.

## Play

Open `index.html` in any modern browser (Chrome, Firefox, Safari, Edge). No build tools, no dependencies, no server required.

## Rules

Two players take turns placing marks on a 3x3 grid. Each round, the first player (X or O) is chosen at random with equal probability. The first player to line up three of their marks in a row, column, or diagonal wins. If all nine cells fill with no winner, the game is a draw.

## Controls

- Click any empty cell to place your mark
- Click **Reset** at any time to start a new game
- The status line above the board shows whose turn it is, who won, or that the game is a draw

## Offline / installable

Tic-Tac-Toe ships as a Progressive Web App. `manifest.webmanifest` declares the app shell and icons, and `sw.js` precaches `index.html`, the manifest, and both icons on first visit. After that first load the board, reset, and full gameplay work offline — pull the network and hard-reload to verify. Chromium-based browsers will surface an "Install" affordance so the game can be added to the home screen and launched standalone.
