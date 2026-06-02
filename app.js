const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
const move = (from, to, notation, title, explanation) => [from, to, notation, title, explanation];
const m = (from, to, notation, title) => move(from, to, notation, title, title);
const variation = (id, name, description, moves) => ({ id, name, description, moves });

const openings = {
  white: [
    {
      id: "italian",
      name: "Italian Game",
      description: "Develop quickly and put pressure on the center.",
      piece: "♗",
      variations: [
        variation("giuoco-piano", "Giuoco Piano", "Build a calm position, develop naturally, and castle early.", [
          move("e2", "e4", "e4", "Claim space in the center.", "White opens lines for the queen and bishop."),
          move("e7", "e5", "... e5", "Black mirrors the center.", "Black answers symmetrically and prepares quick development."),
          move("g1", "f3", "Nf3", "Develop with purpose.", "The knight attacks e5 while moving toward the center."),
          move("b8", "c6", "... Nc6", "Defend and develop.", "Black protects e5 and develops a queenside knight."),
          move("f1", "c4", "Bc4", "Aim at the weak f7 square.", "The active bishop move defines the Italian Game."),
          move("f8", "c5", "... Bc5", "Build an active position.", "Black develops with the same idea and prepares to castle."),
          move("d2", "d3", "d3", "Support the center calmly.", "White reinforces e4 and keeps the position flexible."),
          move("g8", "f6", "... Nf6", "Challenge White's center.", "Black develops the knight and attacks e4."),
          move("e1", "g1", "O-O", "Castle to safety.", "The king is safer and the rook joins the game."),
        ]),
        variation("two-knights", "Two Knights Defense", "Learn the sharper response when Black attacks the e4 pawn immediately.", [
          move("e2", "e4", "e4", "Claim the center.", "White opens the game with the king's pawn."),
          move("e7", "e5", "... e5", "Meet the center directly.", "Black chooses a classical response."),
          move("g1", "f3", "Nf3", "Attack e5.", "White develops with tempo."),
          move("b8", "c6", "... Nc6", "Defend e5.", "Black develops and keeps the center stable."),
          move("f1", "c4", "Bc4", "Point toward f7.", "White places the bishop on its most active diagonal."),
          move("g8", "f6", "... Nf6", "Choose the Two Knights.", "Black attacks e4 instead of developing the bishop first."),
          move("d2", "d3", "d3", "Keep the center supported.", "White chooses a calm continuation against the sharper setup."),
          move("f8", "c5", "... Bc5", "Complete development.", "Black prepares to castle."),
        ]),
        variation("evans-gambit", "Evans Gambit", "Offer a pawn to gain time and seize the initiative.", [
          move("e2", "e4", "e4", "Claim the center.", "White opens lines for rapid development."),
          move("e7", "e5", "... e5", "Answer symmetrically.", "Black also fights for the center."),
          move("g1", "f3", "Nf3", "Attack e5.", "The knight develops with tempo."),
          move("b8", "c6", "... Nc6", "Defend the pawn.", "Black develops naturally."),
          move("f1", "c4", "Bc4", "Target f7.", "The bishop creates early pressure."),
          move("f8", "c5", "... Bc5", "Mirror the development.", "Black points toward White's kingside."),
          move("b2", "b4", "b4", "Offer the Evans Gambit.", "White gives up a pawn to distract the bishop and gain time."),
          move("c5", "b4", "... Bxb4", "Accept the gambit.", "Black takes the offered pawn."),
          move("c2", "c3", "c3", "Chase the bishop.", "White gains a tempo and prepares a central pawn push."),
        ]),
      ],
    },
    {
      id: "london",
      name: "London System",
      description: "A reliable setup with a sturdy pawn structure.",
      piece: "♙",
      variations: [
        variation("classical-london", "Classical Setup", "Build the familiar London triangle before expanding.", [
          move("d2", "d4", "d4", "Take central space.", "White controls e5 and opens the c1 bishop."),
          move("d7", "d5", "... d5", "Black claims the center.", "A principled reply keeps the position balanced."),
          move("c1", "f4", "Bf4", "Develop outside the pawn chain.", "This bishop move is the London System's calling card."),
          move("g8", "f6", "... Nf6", "Develop naturally.", "Black pressures the center and prepares castling."),
          move("g1", "f3", "Nf3", "Support the center.", "White develops and prepares to castle."),
          move("e7", "e6", "... e6", "Strengthen d5.", "Black opens a diagonal for the dark-squared bishop."),
          move("e2", "e3", "e3", "Complete the London triangle.", "White builds a stable center."),
        ]),
        variation("jobava-london", "Jobava London", "Use an early Nc3 for a more energetic setup.", [
          move("d2", "d4", "d4", "Claim the center.", "White begins with the queen's pawn."),
          move("g8", "f6", "... Nf6", "Develop toward the center.", "Black controls e4."),
          move("b1", "c3", "Nc3", "Choose the Jobava setup.", "White develops the queenside knight before playing c3."),
          move("d7", "d5", "... d5", "Contest the center.", "Black builds a solid pawn base."),
          move("c1", "f4", "Bf4", "Develop actively.", "The bishop and knight create useful pressure together."),
        ]),
      ],
    },
    {
      id: "queens-gambit",
      name: "Queen's Gambit",
      description: "Offer a pawn to challenge Black's center.",
      piece: "♕",
      variations: [
        variation("qgd", "Queen's Gambit Declined", "Build pressure against Black's reinforced center.", [
          move("d2", "d4", "d4", "Lead with the queen's pawn.", "White controls e5 and opens the c1 bishop."),
          move("d7", "d5", "... d5", "Establish a central pawn.", "Black contests the center directly."),
          move("c2", "c4", "c4", "Offer the gambit.", "White challenges d5 with the c-pawn."),
          move("e7", "e6", "... e6", "Black declines the gambit.", "Black reinforces d5."),
          move("b1", "c3", "Nc3", "Add pressure to the center.", "The knight develops and supports e4."),
          move("g8", "f6", "... Nf6", "Develop and defend.", "Black reinforces d5 and prepares to castle."),
          move("c1", "g5", "Bg5", "Pin the knight.", "White increases pressure on Black's position."),
        ]),
        variation("qga", "Queen's Gambit Accepted", "Recover the gambit pawn while gaining active development.", [
          move("d2", "d4", "d4", "Take central space.", "White opens with the queen's pawn."),
          move("d7", "d5", "... d5", "Fight for the center.", "Black claims an equal share of central space."),
          move("c2", "c4", "c4", "Offer the gambit.", "White invites Black to capture the c-pawn."),
          move("d5", "c4", "... dxc4", "Black accepts.", "Black temporarily wins a pawn but gives up central control."),
          move("e2", "e3", "e3", "Prepare to recover the pawn.", "White opens the bishop's diagonal."),
          move("g8", "f6", "... Nf6", "Develop naturally.", "Black prepares a sound position."),
          move("f1", "c4", "Bxc4", "Recover the pawn.", "White restores material balance with active development."),
        ]),
      ],
    },
    {
      id: "ruy-lopez",
      name: "Ruy Lopez",
      description: "Apply long-term pressure to Black's e5 pawn.",
      piece: "♗",
      variations: [
        variation("morphy-defense", "Morphy Defense", "Learn the classic a6 response and preserve the bishop.", [
          move("e2", "e4", "e4", "Occupy the center.", "White takes space and opens lines."),
          move("e7", "e5", "... e5", "Match White's center.", "Black chooses a classical reply."),
          move("g1", "f3", "Nf3", "Attack e5.", "The knight develops with tempo."),
          move("b8", "c6", "... Nc6", "Defend the pawn.", "Black develops naturally."),
          move("f1", "b5", "Bb5", "Create the Spanish pin.", "White pressures the knight that defends e5."),
          move("a7", "a6", "... a6", "Question the bishop.", "Black asks White to decide where the bishop belongs."),
          move("b5", "a4", "Ba4", "Keep the bishop.", "White preserves the long-term pressure."),
          move("g8", "f6", "... Nf6", "Attack e4.", "Black develops with tempo."),
          move("e1", "g1", "O-O", "Castle early.", "White protects the king and activates the rook."),
        ]),
        variation("berlin-defense", "Berlin Defense", "Meet the sturdy Berlin and learn the early central tension.", [
          move("e2", "e4", "e4", "Occupy the center.", "White begins with the king's pawn."),
          move("e7", "e5", "... e5", "Answer classically.", "Black takes a share of the center."),
          move("g1", "f3", "Nf3", "Attack e5.", "White develops the knight."),
          move("b8", "c6", "... Nc6", "Defend e5.", "Black brings out a knight."),
          move("f1", "b5", "Bb5", "Create pressure.", "White attacks the defender of e5."),
          move("g8", "f6", "... Nf6", "Choose the Berlin.", "Black counterattacks the e4 pawn immediately."),
          move("e1", "g1", "O-O", "Castle with confidence.", "White protects the king."),
          move("f6", "e4", "... Nxe4", "Take the center pawn.", "Black enters the characteristic Berlin structure."),
        ]),
      ],
    },
    {
      id: "scotch",
      name: "Scotch Game",
      description: "Open the center early and develop with initiative.",
      piece: "♘",
      variations: [
        variation("scotch-main", "Main Line", "Open the center and recapture with the knight.", [
          move("e2", "e4", "e4", "Claim the center.", "White opens lines for development."),
          move("e7", "e5", "... e5", "Answer directly.", "Black meets White in the center."),
          move("g1", "f3", "Nf3", "Attack e5.", "The knight develops with tempo."),
          move("b8", "c6", "... Nc6", "Protect e5.", "Black develops naturally."),
          move("d2", "d4", "d4", "Open the Scotch.", "White challenges the center immediately."),
          move("e5", "d4", "... exd4", "Release the tension.", "Black captures White's central pawn."),
          move("f3", "d4", "Nxd4", "Recapture actively.", "White's knight occupies the center."),
          move("g8", "f6", "... Nf6", "Pressure e4.", "Black develops with tempo."),
        ]),
        variation("scotch-four-knights", "Four Knights Scotch", "Develop first, then break open the center.", [
          move("e2", "e4", "e4", "Claim the center.", "White opens with the king's pawn."),
          move("e7", "e5", "... e5", "Match the center.", "Black chooses a classical answer."),
          move("g1", "f3", "Nf3", "Develop with tempo.", "White attacks e5."),
          move("b8", "c6", "... Nc6", "Defend and develop.", "Black protects the pawn."),
          move("b1", "c3", "Nc3", "Bring out the second knight.", "White builds a flexible setup."),
          move("g8", "f6", "... Nf6", "Complete the four knights.", "Both sides have developed toward the center."),
          move("d2", "d4", "d4", "Break in the center.", "White now opens the position."),
        ]),
      ],
    },
  ],
  black: [
    {
      id: "caro-kann",
      name: "Caro-Kann Defense",
      description: "A solid answer to 1. e4 with a healthy structure.",
      piece: "♜",
      variations: [
        variation("caro-classical", "Classical Variation", "Develop the light-squared bishop before playing e6.", [
          move("e2", "e4", "e4", "White claims the center.", "White opens lines and takes space."),
          move("c7", "c6", "... c6", "Prepare the Caro-Kann.", "Black supports a d5 push."),
          move("d2", "d4", "d4", "White builds a pawn duo.", "White occupies the center with two pawns."),
          move("d7", "d5", "... d5", "Strike at the center.", "Black challenges e4 with a sturdy structure."),
          move("b1", "c3", "Nc3", "Support e4.", "White develops naturally."),
          move("d5", "e4", "... dxe4", "Release the tension.", "Black captures and invites the knight recapture."),
          move("c3", "e4", "Nxe4", "Restore the balance.", "The knight takes an active central post."),
          move("c8", "f5", "... Bf5", "Develop before closing the door.", "The bishop escapes before Black plays e6."),
          move("e4", "g3", "Ng3", "Question the bishop.", "White gains a tempo."),
          move("f5", "g6", "... Bg6", "Keep the bishop active.", "Black preserves the useful bishop."),
        ]),
        variation("caro-advance", "Advance Variation", "Challenge White's space advantage with active piece play.", [
          move("e2", "e4", "e4", "White claims the center.", "White occupies e4."),
          move("c7", "c6", "... c6", "Prepare d5.", "Black builds the Caro-Kann structure."),
          move("d2", "d4", "d4", "Build the pawn duo.", "White adds another central pawn."),
          move("d7", "d5", "... d5", "Challenge e4.", "Black contests White's center."),
          move("e4", "e5", "e5", "Take more space.", "White closes the center and gains territory."),
          move("c8", "f5", "... Bf5", "Develop actively.", "Black develops the bishop outside the pawn chain."),
          move("g1", "f3", "Nf3", "Prepare development.", "White supports the center."),
          move("e7", "e6", "... e6", "Reinforce d5.", "Black builds a sturdy structure."),
          move("f1", "e2", "Be2", "Prepare to castle.", "White develops quietly."),
          move("c6", "c5", "... c5", "Attack the center.", "Black challenges White's space from the flank."),
        ]),
        variation("caro-exchange", "Exchange Variation", "Reach a clear structure and develop without drama.", [
          move("e2", "e4", "e4", "Take central space.", "White starts with the king's pawn."),
          move("c7", "c6", "... c6", "Prepare d5.", "Black sets up the Caro-Kann."),
          move("d2", "d4", "d4", "Build the center.", "White creates a pawn duo."),
          move("d7", "d5", "... d5", "Challenge the center.", "Black strikes immediately."),
          move("e4", "d5", "exd5", "Exchange in the center.", "White releases the tension."),
          move("c6", "d5", "... cxd5", "Recapture with the c-pawn.", "Black creates a balanced Carlsbad-style structure."),
          move("f1", "d3", "Bd3", "Develop actively.", "White places the bishop on a useful diagonal."),
        ]),
      ],
    },
    {
      id: "sicilian",
      name: "Sicilian Defense",
      description: "Fight for the center from an asymmetrical position.",
      piece: "♞",
      variations: [
        variation("najdorf", "Najdorf Variation", "Use ...a6 to build a flexible and ambitious Sicilian.", [
          move("e2", "e4", "e4", "White opens aggressively.", "White controls the center."),
          move("c7", "c5", "... c5", "Challenge from the side.", "The Sicilian contests d4 asymmetrically."),
          move("g1", "f3", "Nf3", "Prepare d4.", "The knight supports a central break."),
          move("d7", "d6", "... d6", "Control e5.", "Black keeps the setup flexible."),
          move("d2", "d4", "d4", "Open the center.", "White invites exchanges on d4."),
          move("c5", "d4", "... cxd4", "Exchange the flank pawn.", "Black trades the c-pawn for White's d-pawn."),
          move("f3", "d4", "Nxd4", "Recapture centrally.", "White places the knight in the center."),
          move("g8", "f6", "... Nf6", "Attack e4.", "Black develops with tempo."),
          move("b1", "c3", "Nc3", "Defend e4.", "White develops a second knight."),
          move("a7", "a6", "... a6", "Choose the Najdorf.", "Black controls b5 and keeps several plans available."),
        ]),
        variation("dragon", "Dragon Variation", "Fianchetto the bishop and aim down the long diagonal.", [
          move("e2", "e4", "e4", "White takes the center.", "White opens with the king's pawn."),
          move("c7", "c5", "... c5", "Create an imbalance.", "Black challenges d4 from the side."),
          move("g1", "f3", "Nf3", "Prepare d4.", "White develops toward the center."),
          move("d7", "d6", "... d6", "Keep the structure flexible.", "Black supports the c5 pawn."),
          move("d2", "d4", "d4", "Open the center.", "White challenges the Sicilian structure."),
          move("c5", "d4", "... cxd4", "Exchange pawns.", "Black trades the flank pawn for a central pawn."),
          move("f3", "d4", "Nxd4", "Recapture.", "White's knight lands centrally."),
          move("g8", "f6", "... Nf6", "Pressure e4.", "Black develops with tempo."),
          move("b1", "c3", "Nc3", "Support e4.", "White develops naturally."),
          move("g7", "g6", "... g6", "Prepare the Dragon bishop.", "Black plans to fianchetto the bishop on g7."),
        ]),
      ],
    },
    {
      id: "qgd",
      name: "Queen's Gambit Declined",
      description: "Meet 1. d4 with a classical, dependable setup.",
      piece: "♟",
      variations: [
        variation("qgd-orthodox", "Orthodox Defense", "Build a dependable classical position and prepare castling.", [
          move("d2", "d4", "d4", "White claims space.", "White opens with the queen's pawn."),
          move("d7", "d5", "... d5", "Match the center.", "Black prevents White from dominating the center."),
          move("c2", "c4", "c4", "White offers the gambit.", "The c-pawn challenges d5."),
          move("e7", "e6", "... e6", "Decline and reinforce.", "Black protects d5."),
          move("b1", "c3", "Nc3", "Increase the pressure.", "White adds another attacker to d5."),
          move("g8", "f6", "... Nf6", "Develop and defend.", "Black reinforces the center."),
          move("c1", "g5", "Bg5", "Pin the knight.", "White adds strategic pressure."),
          move("f8", "e7", "... Be7", "Break the pin.", "Black develops and prepares to castle."),
        ]),
        variation("qgd-tarrasch", "Tarrasch Defense", "Challenge White's center immediately with ...c5.", [
          move("d2", "d4", "d4", "White takes space.", "White opens with the queen's pawn."),
          move("d7", "d5", "... d5", "Meet White centrally.", "Black contests the center."),
          move("c2", "c4", "c4", "Offer the gambit.", "White attacks d5."),
          move("e7", "e6", "... e6", "Reinforce d5.", "Black declines the gambit."),
          move("b1", "c3", "Nc3", "Add pressure.", "White develops with tempo against d5."),
          move("c7", "c5", "... c5", "Choose the Tarrasch.", "Black immediately challenges White's center."),
          move("e2", "e3", "e3", "Support d4.", "White keeps the center strong."),
        ]),
      ],
    },
    {
      id: "french",
      name: "French Defense",
      description: "Build a resilient pawn chain and counterattack the center.",
      piece: "♝",
      variations: [
        variation("french-advance", "Advance Variation", "Attack White's advanced pawn chain with ...c5.", [
          move("e2", "e4", "e4", "White occupies the center.", "White opens with the king's pawn."),
          move("e7", "e6", "... e6", "Prepare the French.", "Black prepares d5 while opening the queen's bishop."),
          move("d2", "d4", "d4", "White builds a pawn duo.", "White claims more central space."),
          move("d7", "d5", "... d5", "Challenge e4.", "Black attacks White's center."),
          move("e4", "e5", "e5", "Advance the pawn chain.", "White takes space and closes the center."),
          move("c7", "c5", "... c5", "Counterattack d4.", "Black strikes at the base of White's pawn chain."),
          move("c2", "c3", "c3", "Reinforce d4.", "White supports the center."),
          move("b8", "c6", "... Nc6", "Add more pressure.", "Black develops while attacking d4."),
        ]),
        variation("french-classical", "Classical Variation", "Develop naturally and invite a rich middlegame.", [
          move("e2", "e4", "e4", "White takes the center.", "White opens with the king's pawn."),
          move("e7", "e6", "... e6", "Prepare d5.", "Black sets up the French Defense."),
          move("d2", "d4", "d4", "Build the center.", "White creates a broad pawn duo."),
          move("d7", "d5", "... d5", "Challenge e4.", "Black attacks the center."),
          move("b1", "c3", "Nc3", "Defend e4.", "White develops a knight."),
          move("g8", "f6", "... Nf6", "Attack e4 again.", "Black develops with purpose."),
          move("c1", "g5", "Bg5", "Pin the knight.", "White adds pressure before deciding how to handle the center."),
        ]),
      ],
    },
    {
      id: "kings-indian",
      name: "King's Indian Defense",
      description: "Let White take space, then counterattack dynamically.",
      piece: "♚",
      variations: [
        variation("kid-classical", "Classical Variation", "Fianchetto the bishop and castle into a flexible position.", [
          move("d2", "d4", "d4", "White claims space.", "White opens with the queen's pawn."),
          move("g8", "f6", "... Nf6", "Control e4.", "Black develops a knight without committing a center pawn."),
          move("c2", "c4", "c4", "White expands.", "White takes more queenside and central space."),
          move("g7", "g6", "... g6", "Prepare the fianchetto.", "Black plans to place the bishop on g7."),
          move("b1", "c3", "Nc3", "Support the center.", "White develops naturally."),
          move("f8", "g7", "... Bg7", "Aim down the long diagonal.", "The bishop becomes the soul of the King's Indian."),
          move("e2", "e4", "e4", "Build the broad center.", "White occupies e4."),
          move("d7", "d6", "... d6", "Hold e5.", "Black keeps the setup flexible."),
          move("g1", "f3", "Nf3", "Complete development.", "White prepares to castle."),
          move("e8", "g8", "... O-O", "Castle into the attack.", "Black's king is safe and the rook is active."),
        ]),
        variation("kid-saemisch", "Saemisch Variation", "Recognize White's aggressive f3 setup.", [
          move("d2", "d4", "d4", "White claims the center.", "White begins with the queen's pawn."),
          move("g8", "f6", "... Nf6", "Develop flexibly.", "Black controls e4."),
          move("c2", "c4", "c4", "White expands.", "White grabs more space."),
          move("g7", "g6", "... g6", "Prepare the bishop.", "Black sets up the kingside fianchetto."),
          move("b1", "c3", "Nc3", "Support e4.", "White develops the knight."),
          move("f8", "g7", "... Bg7", "Fianchetto.", "Black's bishop looks across the long diagonal."),
          move("e2", "e4", "e4", "Build the center.", "White occupies e4."),
          move("d7", "d6", "... d6", "Stay flexible.", "Black supports a future e5 break."),
          move("f2", "f3", "f3", "Choose the Saemisch.", "White reinforces e4 and prepares an ambitious kingside setup."),
        ]),
      ],
    },
  ],
};

const additionalOpenings = {
  white: [
    {
      id: "vienna",
      name: "Vienna Game",
      description: "Develop the queenside knight early and keep attacking options open.",
      piece: "♘",
      variations: [
        variation("vienna-main", "Main Line", "Develop smoothly before deciding whether to play f4.", [
          m("e2", "e4", "e4", "Take the center."),
          m("e7", "e5", "... e5", "Black answers classically."),
          m("b1", "c3", "Nc3", "Develop the Vienna knight."),
          m("g8", "f6", "... Nf6", "Black attacks e4."),
          m("f1", "c4", "Bc4", "Aim toward f7."),
          m("f8", "c5", "... Bc5", "Black develops actively."),
          m("d2", "d3", "d3", "Support the center."),
        ]),
        variation("vienna-gambit", "Vienna Gambit", "Use f4 to challenge Black's e5 pawn and play for initiative.", [
          m("e2", "e4", "e4", "Take the center."),
          m("e7", "e5", "... e5", "Black meets the center."),
          m("b1", "c3", "Nc3", "Develop the Vienna knight."),
          m("g8", "f6", "... Nf6", "Black develops with tempo."),
          m("f2", "f4", "f4", "Offer the Vienna Gambit."),
          m("e5", "f4", "... exf4", "Black accepts the gambit."),
          m("e4", "e5", "e5", "Advance with tempo."),
          m("f6", "g8", "... Ng8", "Black retreats the attacked knight."),
        ]),
      ],
    },
    {
      id: "kings-gambit",
      name: "King's Gambit",
      description: "Offer a kingside pawn for rapid development and attacking chances.",
      piece: "♙",
      variations: [
        variation("kga", "King's Gambit Accepted", "Learn the classic attacking setup after Black takes the pawn.", [
          m("e2", "e4", "e4", "Claim the center."),
          m("e7", "e5", "... e5", "Black answers directly."),
          m("f2", "f4", "f4", "Offer the King's Gambit."),
          m("e5", "f4", "... exf4", "Black accepts the pawn."),
          m("g1", "f3", "Nf3", "Develop and prevent ...Qh4+."),
          m("g7", "g5", "... g5", "Black protects the extra pawn."),
          m("h2", "h4", "h4", "Attack the pawn chain."),
          m("g5", "g4", "... g4", "Black chases the knight."),
          m("f3", "e5", "Ne5", "Centralize the knight."),
        ]),
        variation("kgd", "King's Gambit Declined", "Keep the initiative when Black refuses the pawn.", [
          m("e2", "e4", "e4", "Take central space."),
          m("e7", "e5", "... e5", "Black mirrors White."),
          m("f2", "f4", "f4", "Offer the gambit."),
          m("f8", "c5", "... Bc5", "Black declines and develops."),
          m("g1", "f3", "Nf3", "Develop toward the center."),
          m("d7", "d6", "... d6", "Black supports e5."),
          m("c2", "c3", "c3", "Prepare d4."),
          m("g8", "f6", "... Nf6", "Black develops naturally."),
        ]),
      ],
    },
    {
      id: "english",
      name: "English Opening",
      description: "Control the center from the flank with a flexible c-pawn start.",
      piece: "♙",
      variations: [
        variation("english-symmetrical", "Symmetrical Variation", "Build a patient position when Black mirrors the c-pawn.", [
          m("c2", "c4", "c4", "Control d5 from the flank."),
          m("c7", "c5", "... c5", "Black mirrors the English."),
          m("b1", "c3", "Nc3", "Develop toward the center."),
          m("b8", "c6", "... Nc6", "Black develops symmetrically."),
          m("g2", "g3", "g3", "Prepare the kingside bishop."),
          m("g7", "g6", "... g6", "Black chooses the same setup."),
          m("f1", "g2", "Bg2", "Fianchetto the bishop."),
          m("f8", "g7", "... Bg7", "Black completes the fianchetto."),
        ]),
        variation("english-reversed-sicilian", "Reversed Sicilian", "Use the extra tempo when Black responds with ...e5.", [
          m("c2", "c4", "c4", "Start from the flank."),
          m("e7", "e5", "... e5", "Black builds a central foothold."),
          m("b1", "c3", "Nc3", "Pressure d5."),
          m("g8", "f6", "... Nf6", "Black develops naturally."),
          m("g2", "g3", "g3", "Prepare the fianchetto."),
          m("d7", "d5", "... d5", "Black occupies the center."),
          m("c4", "d5", "cxd5", "Exchange the c-pawn."),
          m("f6", "d5", "... Nxd5", "Black recaptures with the knight."),
        ]),
      ],
    },
    {
      id: "catalan",
      name: "Catalan Opening",
      description: "Combine a Queen's Gambit center with a powerful kingside fianchetto.",
      piece: "♗",
      variations: [
        variation("catalan-closed", "Closed Catalan", "Keep long-term pressure when Black holds the center.", [
          m("d2", "d4", "d4", "Claim central space."),
          m("g8", "f6", "... Nf6", "Black develops flexibly."),
          m("c2", "c4", "c4", "Pressure d5."),
          m("e7", "e6", "... e6", "Black prepares a solid center."),
          m("g2", "g3", "g3", "Prepare the Catalan bishop."),
          m("d7", "d5", "... d5", "Black builds the pawn chain."),
          m("f1", "g2", "Bg2", "Fianchetto the bishop."),
          m("f8", "e7", "... Be7", "Black develops calmly."),
        ]),
        variation("catalan-open", "Open Catalan", "Use piece activity when Black captures the c-pawn.", [
          m("d2", "d4", "d4", "Take the center."),
          m("g8", "f6", "... Nf6", "Black develops."),
          m("c2", "c4", "c4", "Challenge the center."),
          m("e7", "e6", "... e6", "Black prepares d5."),
          m("g2", "g3", "g3", "Prepare the long diagonal."),
          m("d7", "d5", "... d5", "Black builds the center."),
          m("f1", "g2", "Bg2", "Complete the fianchetto."),
          m("d5", "c4", "... dxc4", "Black accepts the pawn."),
          m("g1", "f3", "Nf3", "Develop and prepare recovery."),
        ]),
      ],
    },
    {
      id: "reti",
      name: "Reti Opening",
      description: "Start with Nf3 and invite a flexible, hypermodern game.",
      piece: "♘",
      variations: [
        variation("reti-kia", "King's Indian Attack", "Build a compact kingside setup before striking in the center.", [
          m("g1", "f3", "Nf3", "Develop without committing a pawn."),
          m("d7", "d5", "... d5", "Black occupies the center."),
          m("g2", "g3", "g3", "Prepare the fianchetto."),
          m("g8", "f6", "... Nf6", "Black develops."),
          m("f1", "g2", "Bg2", "Place the bishop on the long diagonal."),
          m("e7", "e6", "... e6", "Black reinforces d5."),
          m("e1", "g1", "O-O", "Castle early."),
          m("f8", "e7", "... Be7", "Black prepares to castle."),
          m("d2", "d3", "d3", "Support a future e4 push."),
        ]),
        variation("reti-gambit", "Reti Gambit", "Offer the b-pawn to disrupt Black's advanced center.", [
          m("g1", "f3", "Nf3", "Develop flexibly."),
          m("d7", "d5", "... d5", "Black occupies the center."),
          m("c2", "c4", "c4", "Challenge d5."),
          m("d5", "d4", "... d4", "Black advances past the challenge."),
          m("b2", "b4", "b4", "Offer the Reti Gambit."),
          m("c7", "c5", "... c5", "Black challenges the queenside."),
          m("e2", "e3", "e3", "Prepare to attack d4."),
        ]),
      ],
    },
    {
      id: "four-knights",
      name: "Four Knights Game",
      description: "Develop both knights and reach a sound classical position.",
      piece: "♘",
      variations: [
        variation("four-knights-spanish", "Spanish Variation", "Add the Ruy Lopez bishop move to the Four Knights setup.", [
          m("e2", "e4", "e4", "Take the center."),
          m("e7", "e5", "... e5", "Black answers classically."),
          m("g1", "f3", "Nf3", "Develop with tempo."),
          m("b8", "c6", "... Nc6", "Defend e5."),
          m("b1", "c3", "Nc3", "Develop the second knight."),
          m("g8", "f6", "... Nf6", "Complete the four knights."),
          m("f1", "b5", "Bb5", "Choose the Spanish bishop."),
          m("f8", "b4", "... Bb4", "Black develops with a pin."),
        ]),
        variation("four-knights-italian", "Italian Variation", "Point the bishop toward f7 in a calm Four Knights game.", [
          m("e2", "e4", "e4", "Take central space."),
          m("e7", "e5", "... e5", "Black mirrors the center."),
          m("g1", "f3", "Nf3", "Attack e5."),
          m("b8", "c6", "... Nc6", "Protect the pawn."),
          m("b1", "c3", "Nc3", "Develop the queenside knight."),
          m("g8", "f6", "... Nf6", "Complete the four knights."),
          m("f1", "c4", "Bc4", "Aim at f7."),
          m("f8", "c5", "... Bc5", "Black mirrors the bishop."),
        ]),
      ],
    },
    {
      id: "bishops-opening",
      name: "Bishop's Opening",
      description: "Develop the bishop immediately and keep the position adaptable.",
      piece: "♗",
      variations: [
        variation("bishops-classical", "Classical Variation", "Develop quietly and reach familiar Italian-style positions.", [
          m("e2", "e4", "e4", "Open the center."),
          m("e7", "e5", "... e5", "Black answers classically."),
          m("f1", "c4", "Bc4", "Develop the bishop first."),
          m("g8", "f6", "... Nf6", "Black attacks e4."),
          m("d2", "d3", "d3", "Support the pawn."),
          m("f8", "c5", "... Bc5", "Black develops actively."),
          m("g1", "f3", "Nf3", "Bring out the knight."),
          m("d7", "d6", "... d6", "Black reinforces e5."),
        ]),
        variation("urusov-gambit", "Urusov Gambit", "Offer a pawn for rapid piece activity.", [
          m("e2", "e4", "e4", "Take central space."),
          m("e7", "e5", "... e5", "Black meets the center."),
          m("f1", "c4", "Bc4", "Develop toward f7."),
          m("g8", "f6", "... Nf6", "Black attacks e4."),
          m("d2", "d4", "d4", "Offer the Urusov Gambit."),
          m("e5", "d4", "... exd4", "Black accepts the pawn."),
          m("g1", "f3", "Nf3", "Develop with initiative."),
        ]),
      ],
    },
    {
      id: "ponziani",
      name: "Ponziani Opening",
      description: "Prepare d4 with c3 and build a broad classical center.",
      piece: "♙",
      variations: [
        variation("ponziani-main", "Main Line", "Prepare the central push and react to Black's active knight.", [
          m("e2", "e4", "e4", "Occupy the center."),
          m("e7", "e5", "... e5", "Black answers classically."),
          m("g1", "f3", "Nf3", "Attack e5."),
          m("b8", "c6", "... Nc6", "Defend the pawn."),
          m("c2", "c3", "c3", "Prepare d4."),
          m("g8", "f6", "... Nf6", "Black develops with tempo."),
          m("d2", "d4", "d4", "Build the center."),
          m("f6", "e4", "... Nxe4", "Black tests the center."),
        ]),
        variation("ponziani-jaenisch", "Jaenisch Counterattack", "Recognize Black's immediate ...f5 counterplay.", [
          m("e2", "e4", "e4", "Take the center."),
          m("e7", "e5", "... e5", "Black mirrors White."),
          m("g1", "f3", "Nf3", "Attack e5."),
          m("b8", "c6", "... Nc6", "Protect e5."),
          m("c2", "c3", "c3", "Prepare d4."),
          m("f7", "f5", "... f5", "Black counterattacks immediately."),
          m("d2", "d4", "d4", "Strike in the center."),
          m("d7", "d6", "... d6", "Black supports the center."),
        ]),
      ],
    },
    {
      id: "trompowsky",
      name: "Trompowsky Attack",
      description: "Develop Bg5 early and sidestep heavy opening theory.",
      piece: "♗",
      variations: [
        variation("trompowsky-main", "Main Line", "Respond to ...Ne4 by preserving the active bishop.", [
          m("d2", "d4", "d4", "Take central space."),
          m("g8", "f6", "... Nf6", "Black develops flexibly."),
          m("c1", "g5", "Bg5", "Pin and provoke."),
          m("f6", "e4", "... Ne4", "Black attacks the bishop."),
          m("g5", "f4", "Bf4", "Preserve the bishop."),
          m("d7", "d5", "... d5", "Black occupies the center."),
          m("e2", "e3", "e3", "Support d4."),
        ]),
        variation("trompowsky-classical", "Classical Response", "Exchange the knight and reshape Black's pawns.", [
          m("d2", "d4", "d4", "Claim the center."),
          m("g8", "f6", "... Nf6", "Black develops."),
          m("c1", "g5", "Bg5", "Create the Trompowsky pin."),
          m("e7", "e6", "... e6", "Black keeps the position solid."),
          m("e2", "e4", "e4", "Build a broad center."),
          m("h7", "h6", "... h6", "Black questions the bishop."),
          m("g5", "f6", "Bxf6", "Exchange the knight."),
          m("d8", "f6", "... Qxf6", "Black recaptures with the queen."),
        ]),
      ],
    },
    {
      id: "colle",
      name: "Colle System",
      description: "Build a dependable d4 setup and prepare an eventual e4 break.",
      piece: "♙",
      variations: [
        variation("colle-classical", "Classical Colle", "Develop behind the pawn chain and prepare e4.", [
          m("d2", "d4", "d4", "Occupy the center."),
          m("d7", "d5", "... d5", "Black mirrors the center."),
          m("g1", "f3", "Nf3", "Develop the knight."),
          m("g8", "f6", "... Nf6", "Black develops."),
          m("e2", "e3", "e3", "Build the Colle triangle."),
          m("e7", "e6", "... e6", "Black reinforces d5."),
          m("f1", "d3", "Bd3", "Aim toward the kingside."),
          m("c7", "c5", "... c5", "Black challenges the center."),
          m("e1", "g1", "O-O", "Castle before the e4 break."),
        ]),
        variation("colle-zukertort", "Zukertort Setup", "Fianchetto the queenside bishop for a more flexible Colle.", [
          m("d2", "d4", "d4", "Take the center."),
          m("g8", "f6", "... Nf6", "Black develops."),
          m("g1", "f3", "Nf3", "Develop naturally."),
          m("e7", "e6", "... e6", "Black supports d5 ideas."),
          m("e2", "e3", "e3", "Prepare the light-squared bishop."),
          m("b7", "b6", "... b6", "Black prepares a bishop fianchetto."),
          m("f1", "d3", "Bd3", "Aim at the kingside."),
          m("c8", "b7", "... Bb7", "Black develops on the long diagonal."),
          m("e1", "g1", "O-O", "Castle to safety."),
        ]),
      ],
    },
  ],
  black: [
    {
      id: "scandinavian",
      name: "Scandinavian Defense",
      description: "Challenge 1. e4 immediately with an early ...d5.",
      piece: "♛",
      variations: [
        variation("scandi-main", "Main Line", "Recapture with the queen and retreat to a safe square.", [
          m("e2", "e4", "e4", "White takes the center."),
          m("d7", "d5", "... d5", "Challenge e4 immediately."),
          m("e4", "d5", "exd5", "White accepts the exchange."),
          m("d8", "d5", "... Qxd5", "Recapture with the queen."),
          m("b1", "c3", "Nc3", "Develop with tempo."),
          m("d5", "d8", "... Qd8", "Retreat the queen."),
          m("d2", "d4", "d4", "White expands in the center."),
        ]),
        variation("scandi-modern", "Modern Variation", "Use ...Nf6 to recover the pawn with development.", [
          m("e2", "e4", "e4", "White claims the center."),
          m("d7", "d5", "... d5", "Challenge e4."),
          m("e4", "d5", "exd5", "White captures."),
          m("g8", "f6", "... Nf6", "Develop while attacking d5."),
          m("d2", "d4", "d4", "White reinforces the pawn."),
          m("f6", "d5", "... Nxd5", "Recover the pawn."),
          m("g1", "f3", "Nf3", "White develops."),
        ]),
      ],
    },
    {
      id: "pirc",
      name: "Pirc Defense",
      description: "Invite White to occupy the center, then undermine it.",
      piece: "♝",
      variations: [
        variation("pirc-classical", "Classical Variation", "Fianchetto the bishop against White's classical setup.", [
          m("e2", "e4", "e4", "White takes central space."),
          m("d7", "d6", "... d6", "Prepare a flexible defense."),
          m("d2", "d4", "d4", "White builds the center."),
          m("g8", "f6", "... Nf6", "Attack e4."),
          m("b1", "c3", "Nc3", "Defend the center."),
          m("g7", "g6", "... g6", "Prepare the fianchetto."),
          m("g1", "f3", "Nf3", "White develops classically."),
          m("f8", "g7", "... Bg7", "Aim down the long diagonal."),
        ]),
        variation("pirc-austrian", "Austrian Attack", "Recognize White's ambitious f4 expansion.", [
          m("e2", "e4", "e4", "White occupies the center."),
          m("d7", "d6", "... d6", "Stay flexible."),
          m("d2", "d4", "d4", "White builds a pawn duo."),
          m("g8", "f6", "... Nf6", "Pressure e4."),
          m("b1", "c3", "Nc3", "Protect the center."),
          m("g7", "g6", "... g6", "Prepare the bishop."),
          m("f2", "f4", "f4", "White chooses the Austrian Attack."),
          m("f8", "g7", "... Bg7", "Complete the fianchetto."),
        ]),
      ],
    },
    {
      id: "modern",
      name: "Modern Defense",
      description: "Fianchetto quickly and delay committing the central pawns.",
      piece: "♝",
      variations: [
        variation("modern-standard", "Standard Setup", "Build the kingside fianchetto against 1. e4.", [
          m("e2", "e4", "e4", "White claims the center."),
          m("g7", "g6", "... g6", "Prepare the Modern bishop."),
          m("d2", "d4", "d4", "White expands."),
          m("f8", "g7", "... Bg7", "Develop on the long diagonal."),
          m("b1", "c3", "Nc3", "White supports the center."),
          m("d7", "d6", "... d6", "Prepare a central counterstrike."),
          m("f2", "f4", "f4", "White builds an ambitious center."),
        ]),
        variation("modern-averbakh", "Averbakh System", "Meet White's broad d4 and c4 center.", [
          m("d2", "d4", "d4", "White takes central space."),
          m("g7", "g6", "... g6", "Prepare the fianchetto."),
          m("c2", "c4", "c4", "White expands."),
          m("f8", "g7", "... Bg7", "Develop the bishop."),
          m("b1", "c3", "Nc3", "White reinforces the center."),
          m("d7", "d6", "... d6", "Keep the setup flexible."),
          m("e2", "e4", "e4", "White builds a broad center."),
        ]),
      ],
    },
    {
      id: "alekhine",
      name: "Alekhine Defense",
      description: "Invite White's pawns forward, then attack the advanced center.",
      piece: "♞",
      variations: [
        variation("alekhine-four-pawns", "Four Pawns Attack", "Challenge White's impressive but demanding pawn center.", [
          m("e2", "e4", "e4", "White claims the center."),
          m("g8", "f6", "... Nf6", "Attack the e4 pawn."),
          m("e4", "e5", "e5", "Chase the knight."),
          m("f6", "d5", "... Nd5", "Retreat toward the center."),
          m("d2", "d4", "d4", "White builds the pawn center."),
          m("d7", "d6", "... d6", "Challenge the advanced pawn."),
          m("c2", "c4", "c4", "White gains more space."),
          m("d5", "b6", "... Nb6", "Retreat and prepare counterplay."),
          m("f2", "f4", "f4", "White completes the four-pawn center."),
        ]),
        variation("alekhine-exchange", "Exchange Variation", "Trade on d6 and aim for a clear strategic structure.", [
          m("e2", "e4", "e4", "White claims the center."),
          m("g8", "f6", "... Nf6", "Provoke the e-pawn."),
          m("e4", "e5", "e5", "Advance with tempo."),
          m("f6", "d5", "... Nd5", "Centralize the knight."),
          m("d2", "d4", "d4", "Build the center."),
          m("d7", "d6", "... d6", "Challenge e5."),
          m("c2", "c4", "c4", "Gain more space."),
          m("d5", "b6", "... Nb6", "Retreat the knight."),
          m("e5", "d6", "exd6", "Choose the exchange structure."),
        ]),
      ],
    },
    {
      id: "dutch",
      name: "Dutch Defense",
      description: "Fight for e4 with ...f5 and create kingside attacking chances.",
      piece: "♟",
      variations: [
        variation("dutch-leningrad", "Leningrad Dutch", "Combine ...f5 with a kingside fianchetto.", [
          m("d2", "d4", "d4", "White claims the center."),
          m("f7", "f5", "... f5", "Fight for e4."),
          m("g2", "g3", "g3", "White prepares the bishop."),
          m("g8", "f6", "... Nf6", "Black develops."),
          m("f1", "g2", "Bg2", "White fianchettos."),
          m("g7", "g6", "... g6", "Prepare the Leningrad bishop."),
          m("g1", "f3", "Nf3", "White develops."),
          m("f8", "g7", "... Bg7", "Complete the fianchetto."),
        ]),
        variation("dutch-stonewall", "Stonewall Dutch", "Build a sturdy dark-square structure with ...e6 and ...d5.", [
          m("d2", "d4", "d4", "White occupies the center."),
          m("f7", "f5", "... f5", "Control e4."),
          m("g2", "g3", "g3", "White prepares a fianchetto."),
          m("g8", "f6", "... Nf6", "Develop the knight."),
          m("f1", "g2", "Bg2", "White develops the bishop."),
          m("e7", "e6", "... e6", "Prepare the Stonewall chain."),
          m("g1", "f3", "Nf3", "White develops."),
          m("d7", "d5", "... d5", "Complete the Stonewall center."),
        ]),
      ],
    },
    {
      id: "slav",
      name: "Slav Defense",
      description: "Support d5 with ...c6 while keeping the light-squared bishop free.",
      piece: "♟",
      variations: [
        variation("slav-main", "Main Line", "Develop naturally before deciding what to do with the c4 pawn.", [
          m("d2", "d4", "d4", "White takes central space."),
          m("d7", "d5", "... d5", "Black answers in the center."),
          m("c2", "c4", "c4", "White challenges d5."),
          m("c7", "c6", "... c6", "Support d5 with the Slav."),
          m("g1", "f3", "Nf3", "White develops."),
          m("g8", "f6", "... Nf6", "Black develops naturally."),
          m("b1", "c3", "Nc3", "White adds pressure."),
          m("d5", "c4", "... dxc4", "Black captures the c-pawn."),
        ]),
        variation("slav-exchange", "Exchange Slav", "Recapture toward the center and reach a symmetrical structure.", [
          m("d2", "d4", "d4", "White occupies the center."),
          m("d7", "d5", "... d5", "Black matches White."),
          m("c2", "c4", "c4", "Pressure d5."),
          m("c7", "c6", "... c6", "Support the center."),
          m("c4", "d5", "cxd5", "White exchanges on d5."),
          m("c6", "d5", "... cxd5", "Black recaptures."),
          m("b1", "c3", "Nc3", "White develops."),
          m("g8", "f6", "... Nf6", "Black develops."),
        ]),
      ],
    },
    {
      id: "nimzo-indian",
      name: "Nimzo-Indian Defense",
      description: "Pin the c3 knight and fight for control of e4.",
      piece: "♝",
      variations: [
        variation("nimzo-classical", "Classical Variation", "Meet Qc2 with castling and central pressure.", [
          m("d2", "d4", "d4", "White claims space."),
          m("g8", "f6", "... Nf6", "Black develops flexibly."),
          m("c2", "c4", "c4", "White expands."),
          m("e7", "e6", "... e6", "Prepare the bishop."),
          m("b1", "c3", "Nc3", "White supports the center."),
          m("f8", "b4", "... Bb4", "Create the Nimzo pin."),
          m("d1", "c2", "Qc2", "Protect the knight's structure."),
          m("e8", "g8", "... O-O", "Castle to safety."),
          m("e2", "e4", "e4", "White builds the center."),
        ]),
        variation("nimzo-rubinstein", "Rubinstein Variation", "Use e3 for a steady and flexible Nimzo-Indian setup.", [
          m("d2", "d4", "d4", "White occupies the center."),
          m("g8", "f6", "... Nf6", "Black develops."),
          m("c2", "c4", "c4", "White gains space."),
          m("e7", "e6", "... e6", "Open the bishop diagonal."),
          m("b1", "c3", "Nc3", "White supports e4 ideas."),
          m("f8", "b4", "... Bb4", "Pin the knight."),
          m("e2", "e3", "e3", "Choose the Rubinstein setup."),
          m("e8", "g8", "... O-O", "Castle early."),
          m("f1", "d3", "Bd3", "Develop toward the kingside."),
        ]),
      ],
    },
    {
      id: "grunfeld",
      name: "Grunfeld Defense",
      description: "Let White build a center, then attack it with pieces and pawns.",
      piece: "♝",
      variations: [
        variation("grunfeld-exchange", "Exchange Variation", "Invite White's broad center and prepare to undermine it.", [
          m("d2", "d4", "d4", "White claims the center."),
          m("g8", "f6", "... Nf6", "Black develops."),
          m("c2", "c4", "c4", "White expands."),
          m("g7", "g6", "... g6", "Prepare the bishop."),
          m("b1", "c3", "Nc3", "White reinforces d5."),
          m("d7", "d5", "... d5", "Challenge the center immediately."),
          m("c4", "d5", "cxd5", "White exchanges."),
          m("f6", "d5", "... Nxd5", "Black recaptures with the knight."),
          m("e2", "e4", "e4", "White builds the classical center."),
        ]),
        variation("grunfeld-russian", "Russian Variation", "Use Qb3 to pressure d5 before committing the center.", [
          m("d2", "d4", "d4", "White takes space."),
          m("g8", "f6", "... Nf6", "Black develops."),
          m("c2", "c4", "c4", "White expands."),
          m("g7", "g6", "... g6", "Prepare the fianchetto."),
          m("b1", "c3", "Nc3", "White develops."),
          m("d7", "d5", "... d5", "Black strikes at the center."),
          m("g1", "f3", "Nf3", "White supports d4."),
          m("f8", "g7", "... Bg7", "Develop the bishop."),
          m("d1", "b3", "Qb3", "Pressure d5 and b7."),
        ]),
      ],
    },
    {
      id: "benoni",
      name: "Benoni Defense",
      description: "Create an asymmetrical pawn structure and dynamic queenside play.",
      piece: "♟",
      variations: [
        variation("modern-benoni", "Modern Benoni", "Challenge White's d5 pawn and accept an imbalanced structure.", [
          m("d2", "d4", "d4", "White claims the center."),
          m("g8", "f6", "... Nf6", "Black develops flexibly."),
          m("c2", "c4", "c4", "White expands."),
          m("c7", "c5", "... c5", "Challenge d4."),
          m("d4", "d5", "d5", "White advances."),
          m("e7", "e6", "... e6", "Attack the pawn chain."),
          m("b1", "c3", "Nc3", "White develops."),
          m("e6", "d5", "... exd5", "Black exchanges."),
          m("c4", "d5", "cxd5", "White recaptures."),
        ]),
        variation("benko-gambit", "Benko Gambit", "Offer a queenside pawn for lasting pressure on the open files.", [
          m("d2", "d4", "d4", "White occupies the center."),
          m("g8", "f6", "... Nf6", "Black develops."),
          m("c2", "c4", "c4", "White expands."),
          m("c7", "c5", "... c5", "Challenge d4."),
          m("d4", "d5", "d5", "White advances."),
          m("b7", "b5", "... b5", "Offer the Benko Gambit."),
          m("c4", "b5", "cxb5", "White accepts the pawn."),
          m("a7", "a6", "... a6", "Offer a second queenside pawn."),
        ]),
      ],
    },
    {
      id: "petroff",
      name: "Petroff Defense",
      description: "Answer 1. e4 symmetrically and neutralize early attacks.",
      piece: "♞",
      variations: [
        variation("petroff-classical", "Classical Variation", "Return the center pawn and reach a sound position.", [
          m("e2", "e4", "e4", "White claims central space."),
          m("e7", "e5", "... e5", "Black answers classically."),
          m("g1", "f3", "Nf3", "White attacks e5."),
          m("g8", "f6", "... Nf6", "Choose the Petroff."),
          m("f3", "e5", "Nxe5", "White captures e5."),
          m("d7", "d6", "... d6", "Challenge the knight."),
          m("e5", "f3", "Nf3", "White retreats."),
          m("f6", "e4", "... Nxe4", "Black restores the material balance."),
        ]),
        variation("petroff-steinitz", "Steinitz Attack", "Meet White's d4 center with active piece play.", [
          m("e2", "e4", "e4", "White occupies the center."),
          m("e7", "e5", "... e5", "Black mirrors the center."),
          m("g1", "f3", "Nf3", "Attack e5."),
          m("g8", "f6", "... Nf6", "Counterattack e4."),
          m("d2", "d4", "d4", "Build the Steinitz center."),
          m("e5", "d4", "... exd4", "Release the tension."),
          m("e4", "e5", "e5", "Advance with tempo."),
          m("f6", "e4", "... Ne4", "Centralize the knight."),
          m("d1", "d4", "Qxd4", "Recover the pawn."),
        ]),
      ],
    },
  ],
};

openings.white.push(...additionalOpenings.white);
openings.black.push(...additionalOpenings.black);

const app = document.querySelector("#app");
let selectedColor = "white";
let selectedOpening = null;
let activeOpening = null;
let activeVariation = null;
let moveIndex = 0;
let pieces = [];
let pieceNodes = new Map();
let orientation = "white";

function renderTemplate(id) {
  const template = document.querySelector(`#${id}-template`);
  app.replaceChildren(template.content.cloneNode(true));
  bindNavigation();
}

function bindNavigation() {
  document.querySelectorAll("[data-route]").forEach((button) => {
    button.addEventListener("click", () => navigate(button.dataset.route));
  });
  document.querySelector("[data-action='random']")?.addEventListener("click", startRandom);
}

function navigate(route) {
  if (route === "home") renderTemplate("home");
  if (route === "color") {
    renderTemplate("color");
    document.querySelectorAll("[data-color]").forEach((button) => {
      button.addEventListener("click", () => showOpenings(button.dataset.color));
    });
  }
}

function showOpenings(color) {
  selectedColor = color;
  renderTemplate("openings");
  document.querySelector("#opening-eyebrow").textContent = `Playing as ${color}`;
  const search = document.querySelector("#opening-search");
  const list = document.querySelector("#opening-list");
  const count = document.querySelector("#opening-count");

  function renderOpeningCards(query = "") {
    const normalizedQuery = query.trim().toLowerCase();
    const visibleOpenings = openings[color].filter((opening) => opening.name.toLowerCase().includes(normalizedQuery));
    list.replaceChildren();
    count.textContent = `${visibleOpenings.length} openings`;

    visibleOpenings.forEach((opening) => {
      const card = document.createElement("button");
      card.className = "opening-card";
      card.innerHTML = `
        <span class="opening-piece">${opening.piece}</span>
        <span><strong>${opening.name}</strong><small>${opening.description}</small></span>
        <span class="opening-arrow">${opening.variations.length} variations →</span>
      `;
      card.addEventListener("click", () => showVariations(opening));
      list.append(card);
    });
  }

  search.addEventListener("input", () => renderOpeningCards(search.value));
  renderOpeningCards();
}

function showVariations(opening) {
  selectedOpening = opening;
  renderTemplate("variations");
  document.querySelector("#variation-eyebrow").textContent = opening.name;
  document.querySelector("#variation-intro").textContent = opening.description;
  document.querySelector("[data-action='back-to-openings']").addEventListener("click", () => showOpenings(selectedColor));
  const list = document.querySelector("#variation-list");

  opening.variations.forEach((line, index) => {
    const card = document.createElement("button");
    card.className = "variation-card";
    card.innerHTML = `
      <span class="variation-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="variation-copy">
        <strong>${line.name}</strong>
        <small>${line.description}</small>
        <span>${line.moves.length} moves</span>
      </span>
      <span class="arrow">→</span>
    `;
    card.addEventListener("click", () => startTrainer(opening, line, selectedColor));
    list.append(card);
  });
}

function startRandom() {
  const color = Math.random() > 0.5 ? "white" : "black";
  const choices = openings[color];
  const opening = choices[Math.floor(Math.random() * choices.length)];
  const line = opening.variations[Math.floor(Math.random() * opening.variations.length)];
  startTrainer(opening, line, color);
}

function startTrainer(opening, line, color) {
  activeOpening = opening;
  activeVariation = line;
  selectedColor = color;
  orientation = color;
  moveIndex = 0;
  renderTemplate("trainer");
  document.querySelector("#lesson-side").textContent = `Repertoire for ${color}`;
  document.querySelector("#lesson-name").textContent = opening.name;
  document.querySelector("#lesson-variation").textContent = line.name;
  document.querySelector("#lesson-description").textContent = opening.description;
  document.querySelector("#next-button").addEventListener("click", playNextMove);
  document.querySelector("#previous-button").addEventListener("click", playPreviousMove);
  createBoard();
  resetPieces();
  updateLesson();
}

function createBoard() {
  const board = document.querySelector("#board");
  board.replaceChildren();
  pieceNodes = new Map();

  for (let rank = 8; rank >= 1; rank -= 1) {
    for (let fileIndex = 0; fileIndex < 8; fileIndex += 1) {
      const squareName = `${files[fileIndex]}${rank}`;
      const { x, y } = visualPosition(squareName);
      const square = document.createElement("div");
      const isLight = (fileIndex + rank) % 2 === 1;
      square.className = `square ${isLight ? "light" : "dark"}`;
      square.dataset.square = squareName;
      square.style.transform = `translate(${x * 100}%, ${y * 100}%)`;

      if (x === 0) square.innerHTML += `<span class="coordinate rank">${rank}</span>`;
      if (y === 7) square.innerHTML += `<span class="coordinate file">${files[fileIndex]}</span>`;
      board.append(square);
    }
  }
}

function visualPosition(square) {
  const file = files.indexOf(square[0]);
  const rank = Number(square[1]);
  if (orientation === "white") return { x: file, y: 8 - rank };
  return { x: 7 - file, y: rank - 1 };
}

function initialPieces() {
  const result = [];
  const order = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"];

  ["white", "black"].forEach((color) => {
    const homeRank = color === "white" ? 1 : 8;
    const pawnRank = color === "white" ? 2 : 7;
    order.forEach((type, index) => result.push(makePiece(color, type, `${files[index]}${homeRank}`)));
    files.forEach((file) => result.push(makePiece(color, "pawn", `${file}${pawnRank}`)));
  });

  return result;
}

function makePiece(color, type, square) {
  return {
    id: `${color}-${type}-${square}`,
    color,
    type,
    square,
  };
}

function resetPieces() {
  pieces = initialPieces();
  renderPieces();
}

function renderPieces() {
  const board = document.querySelector("#board");
  board.querySelectorAll(".piece").forEach((node) => node.remove());
  pieceNodes = new Map();

  pieces.forEach((piece) => {
    const node = document.createElement("span");
    node.className = `piece ${piece.color}`;
    node.innerHTML = `
      <svg class="piece-art" viewBox="0 0 100 100" aria-hidden="true">
        <use href="assets/pieces.svg#${piece.type}"></use>
      </svg>
    `;
    node.dataset.id = piece.id;
    positionPiece(node, piece.square);
    board.append(node);
    pieceNodes.set(piece.id, node);
  });
}

function positionPiece(node, square) {
  const { x, y } = visualPosition(square);
  node.style.transform = `translate(${x * 100}%, ${y * 100}%)`;
}

function playNextMove() {
  if (moveIndex >= activeVariation.moves.length) {
    moveIndex = 0;
    clearHighlights();
    resetPieces();
    updateLesson();
    return;
  }

  const [from, to] = activeVariation.moves[moveIndex];
  applyMove(from, to, true);
  moveIndex += 1;
  updateLesson();
}

function playPreviousMove() {
  if (moveIndex === 0) return;
  moveIndex -= 1;
  clearHighlights();
  resetPieces();
  activeVariation.moves.slice(0, moveIndex).forEach(([from, to]) => applyMove(from, to, false));
  updateLesson();
}

function applyMove(from, to, animate) {
  const movingPiece = pieces.find((piece) => piece.square === from);
  if (!movingPiece) return;

  const capturedPiece = pieces.find((piece) => piece.square === to);
  if (capturedPiece) {
    pieceNodes.get(capturedPiece.id)?.remove();
    pieceNodes.delete(capturedPiece.id);
    pieces = pieces.filter((piece) => piece.id !== capturedPiece.id);
  }

  movingPiece.square = to;
  const node = pieceNodes.get(movingPiece.id);
  if (node) {
    if (!animate) node.style.transition = "none";
    positionPiece(node, to);
    if (!animate) requestAnimationFrame(() => (node.style.transition = ""));
  }

  if (movingPiece.type === "king" && Math.abs(files.indexOf(from[0]) - files.indexOf(to[0])) === 2) {
    const rookFrom = to[0] === "g" ? `h${from[1]}` : `a${from[1]}`;
    const rookTo = to[0] === "g" ? `f${from[1]}` : `d${from[1]}`;
    const rook = pieces.find((piece) => piece.square === rookFrom);
    if (rook) {
      rook.square = rookTo;
      positionPiece(pieceNodes.get(rook.id), rookTo);
    }
  }

  if (animate) highlightSquares(from, to);
}

function clearHighlights() {
  document.querySelectorAll(".square").forEach((square) => {
    square.classList.remove("highlight-from", "highlight-to");
  });
}

function highlightSquares(from, to) {
  clearHighlights();
  document.querySelector(`[data-square="${from}"]`)?.classList.add("highlight-from");
  document.querySelector(`[data-square="${to}"]`)?.classList.add("highlight-to");
}

function updateLesson() {
  const complete = moveIndex === activeVariation.moves.length;
  const currentMove = moveIndex > 0 ? activeVariation.moves[moveIndex - 1] : null;
  document.querySelector("#move-progress").textContent = `${moveIndex} of ${activeVariation.moves.length} moves`;
  document.querySelector("#previous-button").disabled = moveIndex === 0;

  const nextButton = document.querySelector("#next-button");
  nextButton.innerHTML = complete ? "Practice again <span>↻</span>" : "Next move <span>→</span>";

  if (currentMove) {
    document.querySelector("#move-number").textContent = complete ? "Line complete" : `Move ${Math.ceil(moveIndex / 2)}`;
    document.querySelector("#move-title").textContent = `${currentMove[2]} · ${currentMove[3]}`;
    document.querySelector("#move-explanation").textContent = currentMove[4];
  } else {
    document.querySelector("#move-number").textContent = "Ready?";
    document.querySelector("#move-title").textContent = "Start from the initial position.";
    document.querySelector("#move-explanation").textContent = "Press Next to watch the opening unfold one move at a time.";
  }

  const notation = document.querySelector("#notation");
  notation.replaceChildren();
  activeVariation.moves.slice(0, moveIndex).forEach((move, index) => {
    const token = document.createElement("span");
    token.textContent = move[2];
    if (index === moveIndex - 1) token.className = "active";
    notation.append(token);
  });
}

renderTemplate("home");
