
window.LEVELS = [
  {
    id: 1,
    title: "Tutorial Flow",
    goal: "Connect the source to the receiver.",
    width: 3, height: 3,
    source: [0,1],
    receivers: [[2,1]],
    tiles: [
      ["empty","line","empty"],
      ["source","line","receiver"],
      ["empty","empty","empty"]
    ],
    solution: [
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ],
    scramble: [[1,1,1]]
  },
  {
    id: 2,
    title: "Corner Turn",
    goal: "Use an elbow to bend the route.",
    width: 3, height: 3,
    source: [0,2],
    receivers: [[2,0]],
    tiles: [
      ["empty","elbow","receiver"],
      ["empty","line","empty"],
      ["source","elbow","empty"]
    ],
    solution: [
      [0,1,0],
      [0,1,0],
      [0,0,0]
    ],
    scramble: [[0,1,1],[1,1,1],[2,1,2]]
  },
  {
    id: 3,
    title: "Split Feed",
    goal: "Send flow to both receivers.",
    width: 4, height: 3,
    source: [0,1],
    receivers: [[3,0],[3,2]],
    tiles: [
      ["empty","empty","elbow","receiver"],
      ["source","line","tee","empty"],
      ["empty","empty","elbow","receiver"]
    ],
    solution: [
      [0,0,1,0],
      [0,0,3,0],
      [0,0,0,0]
    ],
    scramble: [[0,2,2],[0,3,1],[1,2,1],[2,2,1],[2,3,2]]
  },
  {
    id: 4,
    title: "Cross Current",
    goal: "Cross the board and feed both ends.",
    width: 4, height: 4,
    source: [0,1],
    receivers: [[3,0],[3,3]],
    tiles: [
      ["empty","empty","tee","receiver"],
      ["source","line","cross","line"],
      ["empty","empty","line","empty"],
      ["empty","empty","elbow","receiver"]
    ],
    solution: [
      [0,0,1,0],
      [0,0,0,1],
      [0,0,1,0],
      [0,0,0,0]
    ],
    scramble: [[0,2,1],[0,3,2],[1,2,1],[1,3,2],[2,2,1],[3,2,3],[3,3,1]]
  },
  {
    id: 5,
    title: "Long Haul",
    goal: "A longer route with one correct branch.",
    width: 5, height: 4,
    source: [0,3],
    receivers: [[4,0]],
    tiles: [
      ["empty","empty","empty","elbow","receiver"],
      ["empty","empty","empty","line","empty"],
      ["empty","empty","empty","line","empty"],
      ["source","line","line","elbow","empty"]
    ],
    solution: [
      [0,0,0,1,0],
      [0,0,0,1,0],
      [0,0,0,1,0],
      [0,0,0,0,0]
    ],
    scramble: [[0,3,2],[1,3,1],[2,3,1],[3,1,2],[3,2,2],[3,3,2]]
  },
  {
    id: 6,
    title: "Twin Pumps",
    goal: "Branch cleanly to both collectors.",
    width: 5, height: 4,
    source: [0,2],
    receivers: [[4,1],[4,3]],
    tiles: [
      ["empty","empty","empty","empty","empty"],
      ["empty","empty","elbow","line","receiver"],
      ["source","line","tee","empty","empty"],
      ["empty","empty","elbow","line","receiver"]
    ],
    solution: [
      [0,0,0,0,0],
      [0,0,1,0,0],
      [0,0,3,0,0],
      [0,0,0,0,0]
    ],
    scramble: [[1,2,2],[1,3,2],[2,1,2],[2,2,1],[3,2,1],[3,3,2]]
  },
  {
    id: 7,
    title: "Valve Square",
    goal: "Navigate the square efficiently.",
    width: 4, height: 4,
    source: [1,3],
    receivers: [[3,1]],
    tiles: [
      ["empty","elbow","line","elbow"],
      ["empty","line","empty","receiver"],
      ["empty","line","empty","line"],
      ["empty","source","line","elbow"]
    ],
    solution: [
      [0,1,0,2],
      [0,1,0,1],
      [0,1,0,1],
      [0,0,0,3]
    ],
    scramble: [[0,1,1],[0,2,1],[0,3,1],[1,1,2],[2,1,1],[2,3,2],[3,2,2],[3,3,1]]
  },
  {
    id: 8,
    title: "Collector Grid",
    goal: "Feed the two collectors without leaks.",
    width: 5, height: 5,
    source: [0,2],
    receivers: [[4,1],[4,3]],
    tiles: [
      ["empty","empty","empty","empty","empty"],
      ["empty","empty","elbow","line","receiver"],
      ["source","line","cross","line","empty"],
      ["empty","empty","elbow","line","receiver"],
      ["empty","empty","empty","empty","empty"]
    ],
    solution: [
      [0,0,0,0,0],
      [0,0,1,0,0],
      [0,0,0,0,0],
      [0,0,0,0,0],
      [0,0,0,0,0]
    ],
    scramble: [[1,2,1],[1,3,2],[2,2,1],[2,3,2],[3,2,3],[3,3,2]]
  },
  {
    id: 9,
    title: "Channel Fork",
    goal: "Use the fork at the right moment.",
    width: 5, height: 5,
    source: [0,4],
    receivers: [[4,0],[4,2]],
    tiles: [
      ["empty","empty","empty","tee","receiver"],
      ["empty","empty","empty","line","empty"],
      ["empty","empty","empty","tee","receiver"],
      ["empty","empty","empty","line","empty"],
      ["source","line","line","elbow","empty"]
    ],
    solution: [
      [0,0,0,1,0],
      [0,0,0,1,0],
      [0,0,0,3,0],
      [0,0,0,1,0],
      [0,0,0,0,0]
    ],
    scramble: [[0,3,2],[1,3,1],[2,3,1],[3,3,1],[4,1,2],[4,2,2],[4,3,2]]
  },
  {
    id: 10,
    title: "Balanced Network",
    goal: "A denser layout with one neat solution.",
    width: 5, height: 5,
    source: [0,2],
    receivers: [[4,1],[4,3]],
    tiles: [
      ["empty","empty","empty","empty","empty"],
      ["empty","elbow","tee","line","receiver"],
      ["source","line","cross","empty","empty"],
      ["empty","elbow","tee","line","receiver"],
      ["empty","empty","empty","empty","empty"]
    ],
    solution: [
      [0,0,0,0,0],
      [0,1,1,0,0],
      [0,0,0,0,0],
      [0,0,3,0,0],
      [0,0,0,0,0]
    ],
    scramble: [[1,1,2],[1,2,1],[1,3,2],[2,2,2],[3,1,1],[3,2,1],[3,3,2]]
  },
  {
    id: 11,
    title: "Ring Route",
    goal: "Close the ring and deliver the output.",
    width: 5, height: 5,
    source: [0,2],
    receivers: [[4,2]],
    tiles: [
      ["empty","elbow","line","elbow","empty"],
      ["empty","line","empty","line","empty"],
      ["source","tee","empty","tee","receiver"],
      ["empty","line","empty","line","empty"],
      ["empty","elbow","line","elbow","empty"]
    ],
    solution: [
      [0,1,0,2,0],
      [0,1,0,1,0],
      [0,3,0,3,0],
      [0,1,0,1,0],
      [0,0,0,3,0]
    ],
    scramble: [[0,1,2],[0,2,1],[0,3,1],[1,1,2],[1,3,2],[2,1,1],[2,3,1],[3,1,2],[3,3,2],[4,1,1],[4,2,1],[4,3,1]]
  },
  {
    id: 12,
    title: "Three Outputs",
    goal: "Feed all three receivers.",
    width: 6, height: 5,
    source: [0,2],
    receivers: [[5,0],[5,2],[5,4]],
    tiles: [
      ["empty","empty","empty","elbow","line","receiver"],
      ["empty","empty","empty","line","empty","empty"],
      ["source","line","line","tee","line","receiver"],
      ["empty","empty","empty","line","empty","empty"],
      ["empty","empty","empty","elbow","line","receiver"]
    ],
    solution: [
      [0,0,0,1,0,0],
      [0,0,0,1,0,0],
      [0,0,0,3,0,0],
      [0,0,0,1,0,0],
      [0,0,0,0,0,0]
    ],
    scramble: [[0,3,2],[0,4,2],[1,3,1],[2,1,2],[2,2,2],[2,3,1],[2,4,2],[3,3,1],[4,3,1],[4,4,2]]
  },
  {
    id: 13,
    title: "S-Curve",
    goal: "Trace the serpentine route.",
    width: 6, height: 5,
    source: [0,4],
    receivers: [[5,0]],
    tiles: [
      ["empty","empty","empty","empty","elbow","receiver"],
      ["empty","empty","empty","empty","line","empty"],
      ["empty","empty","elbow","line","elbow","empty"],
      ["empty","empty","line","empty","empty","empty"],
      ["source","line","elbow","empty","empty","empty"]
    ],
    solution: [
      [0,0,0,0,1,0],
      [0,0,0,0,1,0],
      [0,0,1,0,3,0],
      [0,0,1,0,0,0],
      [0,0,0,0,0,0]
    ],
    scramble: [[0,4,2],[1,4,1],[2,2,2],[2,3,2],[2,4,1],[3,2,1],[4,1,2],[4,2,2]]
  },
  {
    id: 14,
    title: "Pressure Split",
    goal: "Split flow into upper and lower channels.",
    width: 6, height: 5,
    source: [0,2],
    receivers: [[5,1],[5,3]],
    tiles: [
      ["empty","empty","empty","empty","empty","empty"],
      ["empty","empty","elbow","line","line","receiver"],
      ["source","line","cross","empty","empty","empty"],
      ["empty","empty","elbow","line","line","receiver"],
      ["empty","empty","empty","empty","empty","empty"]
    ],
    solution: [
      [0,0,0,0,0,0],
      [0,0,1,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0]
    ],
    scramble: [[1,2,2],[1,3,2],[1,4,2],[2,2,1],[3,2,1],[3,3,2],[3,4,2]]
  },
  {
    id: 15,
    title: "Factory Spine",
    goal: "Build around a central spine.",
    width: 6, height: 6,
    source: [0,3],
    receivers: [[5,1],[5,4]],
    tiles: [
      ["empty","empty","empty","empty","empty","empty"],
      ["empty","empty","empty","line","elbow","receiver"],
      ["empty","empty","empty","line","empty","empty"],
      ["source","line","line","cross","line","empty"],
      ["empty","empty","empty","line","elbow","receiver"],
      ["empty","empty","empty","empty","empty","empty"]
    ],
    solution: [
      [0,0,0,0,0,0],
      [0,0,0,1,1,0],
      [0,0,0,1,0,0],
      [0,0,0,0,0,0],
      [0,0,0,1,0,0],
      [0,0,0,0,0,0]
    ],
    scramble: [[1,3,1],[1,4,2],[2,3,1],[3,1,2],[3,2,2],[3,3,1],[3,4,2],[4,3,1],[4,4,1]]
  },
  {
    id: 16,
    title: "Wide Split",
    goal: "Long branches with little room for error.",
    width: 7, height: 5,
    source: [0,2],
    receivers: [[6,0],[6,4]],
    tiles: [
      ["empty","empty","empty","elbow","line","line","receiver"],
      ["empty","empty","empty","line","empty","empty","empty"],
      ["source","line","line","tee","empty","empty","empty"],
      ["empty","empty","empty","line","empty","empty","empty"],
      ["empty","empty","empty","elbow","line","line","receiver"]
    ],
    solution: [
      [0,0,0,1,0,0,0],
      [0,0,0,1,0,0,0],
      [0,0,0,3,0,0,0],
      [0,0,0,1,0,0,0],
      [0,0,0,0,0,0,0]
    ],
    scramble: [[0,3,2],[0,4,2],[0,5,2],[1,3,1],[2,1,2],[2,2,2],[2,3,1],[3,3,1],[4,3,1],[4,4,2],[4,5,2]]
  },
  {
    id: 17,
    title: "Gridlock",
    goal: "Dense middle, clean finish.",
    width: 6, height: 6,
    source: [0,2],
    receivers: [[5,1],[5,4]],
    tiles: [
      ["empty","empty","empty","empty","empty","empty"],
      ["empty","elbow","tee","line","elbow","receiver"],
      ["source","line","cross","line","empty","empty"],
      ["empty","elbow","cross","line","elbow","receiver"],
      ["empty","empty","empty","empty","empty","empty"],
      ["empty","empty","empty","empty","empty","empty"]
    ],
    solution: [
      [0,0,0,0,0,0],
      [0,1,1,0,1,0],
      [0,0,0,0,0,0],
      [0,0,3,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0]
    ],
    scramble: [[1,1,2],[1,2,1],[1,3,2],[1,4,2],[2,2,1],[2,3,2],[3,1,1],[3,2,1],[3,3,2],[3,4,1]]
  },
  {
    id: 18,
    title: "Triple Branch",
    goal: "Three outputs from one backbone.",
    width: 7, height: 6,
    source: [0,3],
    receivers: [[6,1],[6,3],[6,5]],
    tiles: [
      ["empty","empty","empty","empty","empty","empty","empty"],
      ["empty","empty","empty","elbow","line","line","receiver"],
      ["empty","empty","empty","line","empty","empty","empty"],
      ["source","line","line","cross","line","line","receiver"],
      ["empty","empty","empty","line","empty","empty","empty"],
      ["empty","empty","empty","elbow","line","line","receiver"]
    ],
    solution: [
      [0,0,0,0,0,0,0],
      [0,0,0,1,0,0,0],
      [0,0,0,1,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,1,0,0,0],
      [0,0,0,0,0,0,0]
    ],
    scramble: [[1,3,2],[1,4,2],[1,5,2],[2,3,1],[3,1,2],[3,2,2],[3,3,1],[3,4,2],[3,5,2],[4,3,1],[5,3,1],[5,4,2],[5,5,2]]
  },
  {
    id: 19,
    title: "Maze Feed",
    goal: "A winding final stretch.",
    width: 7, height: 6,
    source: [0,5],
    receivers: [[6,0]],
    tiles: [
      ["empty","empty","empty","empty","empty","elbow","receiver"],
      ["empty","empty","empty","empty","empty","line","empty"],
      ["empty","empty","empty","elbow","line","elbow","empty"],
      ["empty","empty","empty","line","empty","empty","empty"],
      ["empty","elbow","line","elbow","empty","empty","empty"],
      ["source","elbow","empty","empty","empty","empty","empty"]
    ],
    solution: [
      [0,0,0,0,0,1,0],
      [0,0,0,0,0,1,0],
      [0,0,0,1,0,3,0],
      [0,0,0,1,0,0,0],
      [0,1,0,3,0,0,0],
      [0,0,0,0,0,0,0]
    ],
    scramble: [[0,5,2],[1,5,1],[2,3,2],[2,4,2],[2,5,1],[3,3,1],[4,1,2],[4,2,2],[4,3,1],[5,1,1]]
  },
  {
    id: 20,
    title: "Master System",
    goal: "Feed every collector in the final board.",
    width: 7, height: 7,
    source: [0,3],
    receivers: [[6,1],[6,3],[6,5]],
    tiles: [
      ["empty","empty","empty","empty","empty","empty","empty"],
      ["empty","empty","elbow","line","elbow","empty","empty"],
      ["empty","empty","line","empty","line","empty","empty"],
      ["source","line","cross","line","cross","line","receiver"],
      ["empty","empty","line","empty","line","empty","empty"],
      ["empty","empty","elbow","line","elbow","line","receiver"],
      ["empty","empty","empty","empty","empty","empty","receiver"]
    ],
    solution: [
      [0,0,0,0,0,0,0],
      [0,0,1,0,2,0,0],
      [0,0,1,0,1,0,0],
      [0,0,0,0,0,0,0],
      [0,0,1,0,1,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0]
    ],
    scramble: [[1,2,2],[1,3,2],[1,4,1],[2,2,1],[2,4,1],[3,1,2],[3,2,1],[3,3,2],[3,4,1],[3,5,2],[5,2,1],[5,3,2],[5,4,1],[5,5,2],[6,6,1]]
  },
  {
    id: 21,
    title: "Side Step",
    goal: "A simple detour to the right.",
    width: 4, height: 4,
    source: [0,1],
    receivers: [[3,3]],
    tiles: [
      ["empty","empty","empty","empty"],
      ["source","elbow","line","elbow"],
      ["empty","empty","empty","line"],
      ["empty","empty","empty","receiver"]
    ],
    solution: [
      [0,0,0,0],
      [0,0,0,1],
      [0,0,0,1],
      [0,0,0,0]
    ],
    scramble: [[1,1,2],[2,1,1],[3,1,2],[3,2,2]]
  },
  {
    id: 22,
    title: "U-Turn",
    goal: "Double back to reach the exit.",
    width: 4, height: 4,
    source: [0,0],
    receivers: [[0,3]],
    tiles: [
      ["source","line","line","elbow"],
      ["empty","empty","empty","line"],
      ["empty","empty","empty","line"],
      ["receiver","line","line","elbow"]
    ],
    solution: [
      [0,0,0,1],
      [0,0,0,1],
      [0,0,0,1],
      [0,0,0,3]
    ],
    scramble: [[1,0,1],[2,0,1],[3,0,2],[3,1,2],[3,2,2],[3,3,1],[2,3,1],[1,3,1]]
  },
  {
    id: 23,
    title: "Short Branch",
    goal: "Two receivers, one quick split.",
    width: 5, height: 3,
    source: [0,1],
    receivers: [[4,0],[4,2]],
    tiles: [
      ["empty","empty","elbow","line","receiver"],
      ["source","line","tee","empty","empty"],
      ["empty","empty","elbow","line","receiver"]
    ],
    solution: [
      [0,0,1,0,0],
      [0,0,3,0,0],
      [0,0,0,0,0]
    ],
    scramble: [[1,1,2],[2,1,1],[2,2,2],[3,1,1],[3,2,2]]
  },
  {
    id: 24,
    title: "Z-Bend",
    goal: "Navigate the Z-shaped route.",
    width: 5, height: 4,
    source: [0,3],
    receivers: [[4,0]],
    tiles: [
      ["empty","empty","empty","line","receiver"],
      ["empty","empty","empty","line","empty"],
      ["empty","elbow","line","elbow","empty"],
      ["source","elbow","empty","empty","empty"]
    ],
    solution: [
      [0,0,0,1,0],
      [0,0,0,1,0],
      [0,1,0,3,0],
      [0,0,0,0,0]
    ],
    scramble: [[1,3,1],[1,2,2],[2,2,1],[3,2,2],[3,1,2],[3,0,1]]
  },
  {
    id: 25,
    title: "Four Corners",
    goal: "Reach all four corners of the grid.",
    width: 5, height: 5,
    source: [2,2],
    receivers: [[0,0],[4,0],[0,4],[4,4]],
    tiles: [
      ["receiver","elbow","line","elbow","receiver"],
      ["line","empty","empty","empty","line"],
      ["line","empty","source","empty","line"],
      ["line","empty","empty","empty","line"],
      ["receiver","elbow","line","elbow","receiver"]
    ],
    solution: [
      [0,1,0,2,0],
      [1,0,0,0,1],
      [1,0,0,0,1],
      [1,0,0,0,1],
      [0,0,0,3,0]
    ],
    scramble: [[0,1,2],[0,3,2],[1,0,2],[3,0,1],[4,1,1],[4,3,2],[1,4,1],[3,4,2],[4,0,1],[0,4,1],[4,4,2]]
  },
  {
    id: 26,
    title: "Spiral In",
    goal: "Wind inward to the exit.",
    width: 5, height: 5,
    source: [0,4],
    receivers: [[2,2]],
    tiles: [
      ["empty","empty","empty","empty","empty"],
      ["empty","empty","empty","empty","empty"],
      ["empty","empty","receiver","elbow","empty"],
      ["empty","empty","empty","line","empty"],
      ["source","line","line","elbow","empty"]
    ],
    solution: [
      [0,0,0,0,0],
      [0,0,0,0,0],
      [0,0,0,1,0],
      [0,0,0,1,0],
      [0,0,0,0,0]
    ],
    scramble: [[1,4,1],[2,4,1],[3,4,2],[3,3,2],[3,2,1],[2,2,1]]
  },
  {
    id: 27,
    title: "Crossroads",
    goal: "Two paths cross — keep them clean.",
    width: 6, height: 5,
    source: [0,2],
    receivers: [[5,2],[3,0],[3,4]],
    tiles: [
      ["empty","empty","empty","receiver","empty","empty"],
      ["empty","empty","empty","line","empty","empty"],
      ["source","line","line","cross","line","receiver"],
      ["empty","empty","empty","line","empty","empty"],
      ["empty","empty","empty","receiver","empty","empty"]
    ],
    solution: [
      [0,0,0,0,0,0],
      [0,0,0,1,0,0],
      [0,0,0,0,0,0],
      [0,0,0,1,0,0],
      [0,0,0,0,0,0]
    ],
    scramble: [[1,2,1],[2,2,1],[3,1,2],[3,3,1],[4,2,1]]
  },
  {
    id: 28,
    title: "Zig-Zag",
    goal: "Follow the zig-zag all the way through.",
    width: 6, height: 5,
    source: [0,4],
    receivers: [[5,0]],
    tiles: [
      ["empty","empty","empty","empty","elbow","receiver"],
      ["empty","empty","empty","empty","line","empty"],
      ["empty","elbow","line","elbow","elbow","empty"],
      ["empty","line","empty","empty","empty","empty"],
      ["source","elbow","empty","empty","empty","empty"]
    ],
    solution: [
      [0,0,0,0,1,0],
      [0,0,0,0,1,0],
      [0,1,0,2,3,0],
      [0,1,0,0,0,0],
      [0,0,0,0,0,0]
    ],
    scramble: [[1,4,1],[1,3,2],[1,2,2],[2,2,1],[3,2,1],[4,2,2],[4,1,2],[4,0,1]]
  },
  {
    id: 29,
    title: "Dual Feed",
    goal: "Two sources, one shared receiver.",
    width: 6, height: 4,
    source: [0,1],
    receivers: [[5,1],[5,3]],
    tiles: [
      ["empty","empty","empty","empty","empty","empty"],
      ["source","line","line","tee","line","receiver"],
      ["empty","empty","empty","line","empty","empty"],
      ["empty","empty","empty","elbow","line","receiver"]
    ],
    solution: [
      [0,0,0,0,0,0],
      [0,0,0,3,0,0],
      [0,0,0,1,0,0],
      [0,0,0,0,0,0]
    ],
    scramble: [[1,1,1],[2,1,2],[3,1,1],[3,2,2],[3,3,1],[4,3,2],[4,1,1]]
  },
  {
    id: 30,
    title: "Square Ring",
    goal: "Flow all the way around the square.",
    width: 6, height: 6,
    source: [0,3],
    receivers: [[5,3]],
    tiles: [
      ["empty","elbow","line","line","elbow","empty"],
      ["empty","line","empty","empty","line","empty"],
      ["empty","line","empty","empty","line","empty"],
      ["source","tee","empty","empty","tee","receiver"],
      ["empty","line","empty","empty","line","empty"],
      ["empty","elbow","line","line","elbow","empty"]
    ],
    solution: [
      [0,1,0,0,2,0],
      [0,1,0,0,1,0],
      [0,1,0,0,1,0],
      [0,3,0,0,3,0],
      [0,1,0,0,1,0],
      [0,0,0,0,3,0]
    ],
    scramble: [[1,0,2],[2,0,1],[3,0,1],[4,0,1],[4,1,2],[4,2,2],[4,4,2],[4,5,1],[3,5,1],[2,5,1],[1,5,2],[1,4,2],[1,3,1],[1,2,2],[1,1,2]]
  },
  {
    id: 31,
    title: "Parallel Lines",
    goal: "Two lanes, two destinations.",
    width: 7, height: 4,
    source: [0,1],
    receivers: [[6,1],[6,3]],
    tiles: [
      ["empty","empty","empty","empty","empty","empty","empty"],
      ["source","line","line","tee","line","line","receiver"],
      ["empty","empty","empty","line","empty","empty","empty"],
      ["empty","empty","empty","elbow","line","line","receiver"]
    ],
    solution: [
      [0,0,0,0,0,0,0],
      [0,0,0,3,0,0,0],
      [0,0,0,1,0,0,0],
      [0,0,0,0,0,0,0]
    ],
    scramble: [[1,1,2],[2,1,1],[3,1,1],[3,2,2],[3,3,1],[4,3,2],[5,1,1],[4,1,1],[5,3,2]]
  },
  {
    id: 32,
    title: "Outer Loop",
    goal: "Hug the perimeter to find the exit.",
    width: 6, height: 6,
    source: [0,0],
    receivers: [[5,5]],
    tiles: [
      ["source","line","line","line","line","elbow"],
      ["empty","empty","empty","empty","empty","line"],
      ["empty","empty","empty","empty","empty","line"],
      ["empty","empty","empty","empty","empty","line"],
      ["empty","empty","empty","empty","empty","line"],
      ["empty","empty","empty","empty","empty","receiver"]
    ],
    solution: [
      [0,0,0,0,0,1],
      [0,0,0,0,0,1],
      [0,0,0,0,0,1],
      [0,0,0,0,0,1],
      [0,0,0,0,0,1],
      [0,0,0,0,0,0]
    ],
    scramble: [[1,0,1],[2,0,1],[3,0,1],[4,0,1],[5,0,2],[5,1,2],[5,2,2],[5,3,2],[5,4,2]]
  },
  {
    id: 33,
    title: "Triple Tee",
    goal: "Three tees in a chain — align them all.",
    width: 7, height: 5,
    source: [0,2],
    receivers: [[6,0],[6,2],[6,4]],
    tiles: [
      ["empty","empty","empty","empty","empty","elbow","receiver"],
      ["empty","empty","empty","empty","empty","line","empty"],
      ["source","line","tee","line","tee","tee","receiver"],
      ["empty","empty","empty","empty","empty","line","empty"],
      ["empty","empty","empty","empty","empty","elbow","receiver"]
    ],
    solution: [
      [0,0,0,0,0,1,0],
      [0,0,0,0,0,1,0],
      [0,0,3,0,3,3,0],
      [0,0,0,0,0,1,0],
      [0,0,0,0,0,0,0]
    ],
    scramble: [[1,2,1],[2,2,2],[3,2,1],[4,2,1],[5,2,1],[5,1,2],[5,3,2],[5,0,1],[5,4,2]]
  },
  {
    id: 34,
    title: "Switchback",
    goal: "Reverse direction twice.",
    width: 6, height: 6,
    source: [0,5],
    receivers: [[5,0]],
    tiles: [
      ["empty","empty","empty","empty","elbow","receiver"],
      ["empty","empty","empty","empty","line","empty"],
      ["empty","elbow","line","line","elbow","empty"],
      ["empty","line","empty","empty","empty","empty"],
      ["empty","line","empty","empty","empty","empty"],
      ["source","elbow","empty","empty","empty","empty"]
    ],
    solution: [
      [0,0,0,0,1,0],
      [0,0,0,0,1,0],
      [0,1,0,0,3,0],
      [0,1,0,0,0,0],
      [0,1,0,0,0,0],
      [0,0,0,0,0,0]
    ],
    scramble: [[1,5,1],[1,4,2],[1,3,2],[1,2,2],[2,2,1],[3,2,1],[4,2,2],[4,1,2],[4,0,1]]
  },
  {
    id: 35,
    title: "Inner Cross",
    goal: "Four branches from a central cross.",
    width: 7, height: 7,
    source: [0,3],
    receivers: [[6,3],[3,0],[3,6]],
    tiles: [
      ["empty","empty","empty","receiver","empty","empty","empty"],
      ["empty","empty","empty","line","empty","empty","empty"],
      ["empty","empty","empty","line","empty","empty","empty"],
      ["source","line","line","cross","line","line","receiver"],
      ["empty","empty","empty","line","empty","empty","empty"],
      ["empty","empty","empty","line","empty","empty","empty"],
      ["empty","empty","empty","receiver","empty","empty","empty"]
    ],
    solution: [
      [0,0,0,0,0,0,0],
      [0,0,0,1,0,0,0],
      [0,0,0,1,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,1,0,0,0],
      [0,0,0,1,0,0,0],
      [0,0,0,0,0,0,0]
    ],
    scramble: [[1,3,2],[2,3,1],[3,1,2],[3,2,2],[3,4,1],[3,5,1],[4,3,1],[5,3,1]]
  },
  {
    id: 36,
    title: "Weave",
    goal: "Interleave two paths without crossing.",
    width: 7, height: 6,
    source: [0,2],
    receivers: [[6,1],[6,4]],
    tiles: [
      ["empty","empty","empty","empty","empty","empty","empty"],
      ["empty","elbow","line","line","line","line","receiver"],
      ["source","tee","empty","empty","empty","empty","empty"],
      ["empty","line","empty","empty","empty","empty","empty"],
      ["empty","elbow","line","line","line","line","receiver"],
      ["empty","empty","empty","empty","empty","empty","empty"]
    ],
    solution: [
      [0,0,0,0,0,0,0],
      [0,1,0,0,0,0,0],
      [0,3,0,0,0,0,0],
      [0,1,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0]
    ],
    scramble: [[1,2,2],[1,1,2],[2,1,1],[3,1,1],[4,1,1],[5,1,1],[1,3,2],[1,4,1],[2,4,1],[3,4,1],[4,4,1],[5,4,1]]
  },
  {
    id: 37,
    title: "Windmill",
    goal: "Four arms spin out from the hub.",
    width: 7, height: 7,
    source: [0,3],
    receivers: [[6,3],[3,0],[3,6]],
    tiles: [
      ["empty","empty","empty","receiver","empty","empty","empty"],
      ["empty","empty","elbow","line","empty","empty","empty"],
      ["empty","empty","line","empty","elbow","empty","empty"],
      ["source","line","cross","empty","cross","line","receiver"],
      ["empty","empty","elbow","empty","line","empty","empty"],
      ["empty","empty","empty","line","elbow","empty","empty"],
      ["empty","empty","empty","receiver","empty","empty","empty"]
    ],
    solution: [
      [0,0,0,0,0,0,0],
      [0,0,1,1,0,0,0],
      [0,0,1,0,1,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,1,0,0],
      [0,0,0,1,3,0,0],
      [0,0,0,0,0,0,0]
    ],
    scramble: [[1,3,1],[2,3,1],[2,1,2],[2,2,2],[3,1,1],[4,2,1],[4,3,1],[4,4,2],[3,5,1],[4,5,2],[5,3,1]]
  },
  {
    id: 38,
    title: "Double Back",
    goal: "Two serpentines sharing the same spine.",
    width: 7, height: 6,
    source: [0,2],
    receivers: [[6,1],[6,4]],
    tiles: [
      ["empty","empty","empty","empty","empty","empty","empty"],
      ["empty","empty","elbow","line","line","line","receiver"],
      ["source","line","cross","empty","empty","empty","empty"],
      ["empty","empty","line","empty","empty","empty","empty"],
      ["empty","empty","elbow","line","line","line","receiver"],
      ["empty","empty","empty","empty","empty","empty","empty"]
    ],
    solution: [
      [0,0,0,0,0,0,0],
      [0,0,1,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,1,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0]
    ],
    scramble: [[1,2,1],[2,2,2],[2,1,2],[3,1,1],[4,1,1],[5,1,1],[2,3,1],[2,4,1],[3,4,1],[4,4,1],[5,4,1]]
  },
  {
    id: 39,
    title: "Hex Grid",
    goal: "Navigate the dense 7×7 layout.",
    width: 7, height: 7,
    source: [0,3],
    receivers: [[6,1],[6,3],[6,5]],
    tiles: [
      ["empty","empty","empty","empty","empty","empty","empty"],
      ["empty","empty","elbow","line","elbow","line","receiver"],
      ["empty","empty","line","empty","line","empty","empty"],
      ["source","line","cross","line","cross","line","receiver"],
      ["empty","empty","line","empty","line","empty","empty"],
      ["empty","empty","elbow","line","elbow","line","receiver"],
      ["empty","empty","empty","empty","empty","empty","empty"]
    ],
    solution: [
      [0,0,0,0,0,0,0],
      [0,0,1,0,2,0,0],
      [0,0,1,0,1,0,0],
      [0,0,0,0,0,0,0],
      [0,0,1,0,1,0,0],
      [0,0,0,0,2,0,0],
      [0,0,0,0,0,0,0]
    ],
    scramble: [[1,3,2],[2,3,1],[2,1,2],[2,2,2],[3,1,1],[3,3,1],[3,5,2],[4,2,1],[4,3,1],[4,4,2],[4,1,1],[4,5,2],[5,1,1],[5,3,1],[5,5,1],[2,5,1]]
  },
  {
    id: 40,
    title: "Grand Finale",
    goal: "The ultimate flow challenge.",
    width: 7, height: 7,
    source: [0,3],
    receivers: [[6,0],[6,3],[6,6]],
    tiles: [
      ["empty","empty","empty","elbow","line","line","receiver"],
      ["empty","empty","empty","line","empty","empty","empty"],
      ["empty","elbow","line","cross","empty","empty","empty"],
      ["source","line","line","cross","line","line","receiver"],
      ["empty","elbow","line","cross","empty","empty","empty"],
      ["empty","empty","empty","line","empty","empty","empty"],
      ["empty","empty","empty","elbow","line","line","receiver"]
    ],
    solution: [
      [0,0,0,1,0,0,0],
      [0,0,0,1,0,0,0],
      [0,1,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,1,0,0,0,0,0],
      [0,0,0,1,0,0,0],
      [0,0,0,0,0,0,0]
    ],
    scramble: [[1,3,2],[2,3,1],[3,0,2],[3,1,2],[3,2,1],[3,3,2],[3,4,1],[3,5,1],[3,6,1],[1,2,2],[2,2,1],[1,4,2],[2,4,1],[4,3,1],[5,3,1],[4,0,1],[5,0,1],[4,6,2],[5,6,1]]
  }
];
