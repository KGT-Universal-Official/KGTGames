// js/games-data.js - Expanded Games Collection

const gamesList = [
    {
        id: "chess-board-naturescapes",
        title: "Chess Board: Naturescapes",
        category: "puzzle",
        thumbnail: "chesslogo.png",
        description: "Connects you with nature - Play classic chess online.",
        iframeUrl: "chess.html"
    },
{
    id: "doge-clicker-2",
    title: "Doge Clicker 2",
    category: "adventure", // ya jo bhi category aap rakhna chahein
    thumbnail: "dogelogo.png", // ya doge ka apna icon
    description: "The official sequel! Click, earn coins, and upgrade your doge empire.",
    iframeUrl: "Doge.html"
},
{
    id: "market-life",
    title: "Market life",
    category: "business",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/749ef1c4c5279fdc10cade286388bf55/wgplayground/53c5f843048b32dca2acb9eda638de3e.jpg", // Step 2 se mila link
    description: "A business simulation game where you manage your own market and make strategic decisions to grow your business.",
    iframeUrl: "https://play.wgplayground.com/ifr/749ef1c4c5279fdc10cade286388bf55" // Step 1 se mila link
},
{
    id: "raccoon-retail",
    title: "Raccoon Retail",
    category: "business",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/97f93d42cb2c227f25661b72fe22055b/wgplayground/11ecc85f5f0a6268f854b5de1c67605a.jpg", // Step 2 se mila link
    description: "A fun and engaging business simulation game where you manage and grow your own retail store.",
    iframeUrl: "https://play.wgplayground.com/ifr/97f93d42cb2c227f25661b72fe22055b" // Step 1 se mila link
},
{
    id: "horror-hotel-scary-room",
    title: "Horror Hotel: Scary Room",
    category: "business",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/03a459ab1caade93c4168d3ba26faca6/wgplayground/371eb202b9e6cab27b449853b8d48357.jpg", // Step 2 se mila link
    description: "A Hotel management game.",
    iframeUrl: "https://play.wgplayground.com/ifr/03a459ab1caade93c4168d3ba26faca6" // Step 1 se mila link
},
{
    id: "idle-vlogger-simulator",
    title: "Idle Vlogger Simulator",
    category: "simulation",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/79751843cb5252ac792801ef09090051/wgplayground/e825ed62fee1fa742e123eab91257034.jpg", // Step 2 se mila link
    description: "A simulation game where you manage your own vlogging career, create content, and grow your online presence.",
    iframeUrl: "https://play.wgplayground.com/ifr/79751843cb5252ac792801ef09090051" // Step 1 se mila link
},
{
    id: "idle-dev-startup",
    title: "Idle Dev Startup",
    category: "simulation",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/9bd60b99bc2c81314b62931e12fe67d0/wgplayground/ff07f9cc1fb7e6039488bfeb997083a6.jpg", // Step 2 se mila link
    description: "A simulation game where you manage your own software development company.",
    iframeUrl: "https://play.wgplayground.com/ifr/9bd60b99bc2c81314b62931e12fe67d0" // Step 1 se mila link
},
{
    id: "idle-game-dev-simulator",
    title: "Idle Game Dev Simulator",
    category: "simulation",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/391736215ed5f26c4e0a2ff5b795f5b8/wgplayground/f155652551b888ed92e3ed40bdf16963.jpg", // Step 2 se mila link
    description: "A simulation game where you manage a game development company.",
    iframeUrl: "https://play.wgplayground.com/ifr/391736215ed5f26c4e0a2ff5b795f5b8" // Step 1 se mila link
},
{
    id: "silicon-valley-idle-tycoon",
    title: "Silicon Valley. Idle Tycoon",
    category: "simulation",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/ebddc4631667c60d7efdd198fae989c6/wgplayground/ca71ff28bf19f353d5642189867d772e.jpg", // Step 2 se mila link
    description: "A simulation game where you manage a tech company in Silicon Valley.",
    iframeUrl: "https://play.wgplayground.com/ifr/ebddc4631667c60d7efdd198fae989c6" // Step 1 se mila link
},
{
    id: "mystery-mansion-lost-in-the-no-spotlight-rooms",
    title: "Mystery Mansion Lost in the no spotlight rooms",
    category: "horror",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/cd904e3d943ce1e0ee4304569577726c/wgplayground/c17b247a1065e917f687d7dbb06bc810.jpg", // Step 2 se mila link
    description: "A thrilling horror adventure where you explore a mansion filled with secrets and challenges.",
    iframeUrl: "https://play.wgplayground.com/ifr/cd904e3d943ce1e0ee4304569577726c" // Step 1 se mila link
},
{
    id: "nuts-puzzle-sort",
    title: "Nuts Puzzle: Sort By Color",
    category: "puzzle",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/a7976bfc017bcd367646d6aa84636fef/wgplayground/ae9c5c8777f2d7021efac23e4d469237.jpg", // Step 2 se mila link
    description: "Fun and addictive color sorting puzzle game.",
    iframeUrl: "https://play.wgplayground.com/ifr/a7976bfc017bcd367646d6aa84636fef" // Step 1 se mila link
},
{
    id: "strange-packages",
    title: "Strange packages",
    category: "horror",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/38add5d3df9abf597bee10c5b9ffd6dd/wgplayground/28ee583f95d97d339468b09a24b713f7.jpg", // Step 2 se mila link
    description: "A mysterious horror game where you uncover the secrets behind strange packages.",
    iframeUrl: "https://play.wgplayground.com/ifr/38add5d3df9abf597bee10c5b9ffd6dd" // Step 1 se mila link
},
{
    id: "zombie-slayer",
    title: "ZOMBIE SLAYER",
    category: "horror",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/87ee23d7302e1804a791e93a30517501/wgplayground/86367b2cd9007fbd53d5949d1cddc000.jpg", // Step 2 se mila link
    description: "A thrilling horror game where you battle waves of zombies.",
    iframeUrl: "https://play.wgplayground.com/ifr/87ee23d7302e1804a791e93a30517501" // Step 1 se mila link
},
{
    id: "truck-simulator-power-slider",
    title: "Truck Simulator Power Slider",
    category: "simulation",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/6720b0d99b2a7be51a61e40466b9054b/wgplayground/2ad0311c7cf4d6da42cc334cf339dfb0.jpg", // Step 2 se mila link
    description: "Experience the thrill of driving powerful trucks in this realistic simulator.",
    iframeUrl: "https://play.wgplayground.com/ifr/6720b0d99b2a7be51a61e40466b9054b" // Step 1 se mila link
},
{
    id: "mega-car-jump",
    title: "Mega Car Jump",
    category: "simulation",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/45d07b3ed361775a6e93d40fe1dfe293/wgplayground/65b3dfc7a2f69c429530b4e3955c273c.jpg", // Step 2 se mila link
    description: "Jump your way through exciting obstacles in this adrenaline-pumping car game.",
    iframeUrl: "https://play.wgplayground.com/ifr/45d07b3ed361775a6e93d40fe1dfe293" // Step 1 se mila link
},
{
    id: "ultimate-traffic-driving-car-simulator",
    title: "Ultimate Traffic Driving Car Simulator",
    category: "simulation",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/7d7d62cdbea330ec51bab33497f54756/wgplayground/25a2d8af4f9bc201110ebb2180f1d328.jpg", // Step 2 se mila link
    description: "Drive through busy traffic in this realistic car simulator.",
    iframeUrl: "https://play.wgplayground.com/ifr/7d7d62cdbea330ec51bab33497f54756" // Step 1 se mila link
},
{
    id: "real-motor-race-master",
    title: "Real Motor: Race Master",
    category: "racing",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/e15ffeae87dec9117749ddd2419039a7/wgplayground/fa287e42ae41477f31c17451a1485a30.jpg", // Step 2 se mila link
    description: "Experience the thrill of competitive racing in this exciting motor sport game.",
    iframeUrl: "https://play.wgplayground.com/ifr/e15ffeae87dec9117749ddd2419039a7" // Step 1 se mila link
},
{
    id: "passenger-bus-simulator-game",
    title: "Passenger Bus Simulator Game ",
    category: "simulation",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/37922a1e9ea221b16d717b998a1d86b9/wgplayground/53e539d60017ae45aab0686d2322a2c0.jpg", // Step 2 se mila link
    description: "Drive a passenger bus through city streets and highways in this realistic simulator.",
    iframeUrl: "https://play.wgplayground.com/ifr/37922a1e9ea221b16d717b998a1d86b9" // Step 1 se mila link
},
{
    id: "sustainable-2",
    title: "SuStainable 2",
    category: "puzzle",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/55124b770777eedcfb45ebe85529328b/wgplayground/bfcfca03162423d3942586ddc844d0f7.jpg", // Step 2 se mila link
    description: "A Mysterious adventure in a casual manner.",
    iframeUrl: "https://play.wgplayground.com/ifr/55124b770777eedcfb45ebe85529328b" // Step 1 se mila link
},
{
    id: "mud-racer",
    title: "Mud Racer",
    category: "racing",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/77ca4db17764a0de8b9bd1caeefb1498/wgplayground/d145193feeea3639b207ef4fc501af5e.jpg", // Step 2 se mila link
    description: "Race through muddy tracks and overcome challenging obstacles in this thrilling racing game.",
    iframeUrl: "https://play.wgplayground.com/ifr/77ca4db17764a0de8b9bd1caeefb1498" // Step 1 se mila link
},
{
    id: "monster-school-challenge",
    title: "Monster School Challenge",
    category: "puzzle",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/798d7c0e0475b23861e2c29c64b23707/wgplayground/e7bfe8af92d7630ece32e83a476d9de0.jpg", // Step 2 se mila link
    description: "A fun and challenging puzzle game where you help monsters navigate through tricky school challenges.",
    iframeUrl: "https://play.wgplayground.com/ifr/798d7c0e0475b23861e2c29c64b23707" // Step 1 se mila link
},
{
    id: "draw-guess",
    title: "Draw Guess",
    category: "puzzle",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/c960c00d443a75c2710f06bac23f66bf/wgplayground/d99d4f257201fa5a6bddf24a82f522b7.jpg", // Step 2 se mila link
    description: "A fun drawing and guessing game where you test your artistic skills and creativity.",
    iframeUrl: "https://play.wgplayground.com/ifr/c960c00d443a75c2710f06bac23f66bf" // Step 1 se mila link
},
{
    id: "ball-rotate",
    title: "Ball Rotate",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/76a2082e705693e0cae9bfe8c53b9c39/wgplayground/7c19bc4880f9119e61fa3880ccc533ad.jpg", // Step 2 se mila link
    description: "pass the ball from rotating platforms.",
    iframeUrl: "https://play.wgplayground.com/ifr/76a2082e705693e0cae9bfe8c53b9c39" // Step 1 se mila link
},
{
    id: "natural-disaster-survival-obby",
    title: "Natural disaster survival Obby",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/46d1a2b0fa37a5a9c4be4be23332cda8/wgplayground/0efc146010002c552b5ed877fdda09d0.jpg", // Step 2 se mila link
    description: "Survive various natural disasters in this challenging adventure game.",
    iframeUrl: "https://play.wgplayground.com/ifr/46d1a2b0fa37a5a9c4be4be23332cda8" // Step 1 se mila link
},
{
    id: "grandma-with-machine-gun-apocalypsis",
    title: "Grandma with machine-gun: Apocalypsis",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/273b3f4474a8fa2388ef2b6da541f6cc/wgplayground/8924c9effe104755d9f8fc7aea75d7dc.jpg", // Step 2 se mila link
    description: "A thrilling adventure game where you play as a grandma armed with a machine gun, fighting off hordes of enemies in an apocalyptic world.",
    iframeUrl: "https://play.wgplayground.com/ifr/273b3f4474a8fa2388ef2b6da541f6cc" // Step 1 se mila link
},
{
    id: "real-car-simulator-traffic-games",
    title: "Real Car Simulator Traffic Games",
    category: "simulation",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/7e067c8cf16d816dfc2bd93fadf2ccab/wgplayground/ce3f348c2bd076142d4772fd7c02d9ed.jpg", // Step 2 se mila link
    description: "Experience realistic car driving in traffic-filled environments in this immersive simulator game.",
    iframeUrl: "https://play.wgplayground.com/ifr/7e067c8cf16d816dfc2bd93fadf2ccab" // Step 1 se mila link
},
{
    id: "cs-chaos-squad",
    title: "CS: Chaos Squad",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/826f3c0b1b4774251773cf31671eb67d/wgplayground/bb3c1c8c8cc77a11329a23d1ef528e21.jpg", // Step 2 se mila link
    description: "A fast-paced action game where you join a squad of chaos agents to complete missions and defeat enemies.",
    iframeUrl: "https://play.wgplayground.com/ifr/826f3c0b1b4774251773cf31671eb67d" // Step 1 se mila link
},
{
    id: "ball-sort-puzzle",
    title: "Ball Sort Puzzle",
    category: "puzzle",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/4d16e350efb493aba39ef1d96a456e18/wgplayground/50aebb0a5edb997cecc0c62ac4a71d3b.jpg", // Step 2 se mila link
    description: "A challenging puzzle game where you sort colored balls into their respective containers.",
    iframeUrl: "https://play.wgplayground.com/ifr/4d16e350efb493aba39ef1d96a456e18" // Step 1 se mila link
},
{
    id: "parkour-flip-jumper-diving",
    title: "Parkour Flip Jumper & Diving",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/2e8fa37352e8f5fea7ef315230c68573/wgplayground/522db5b31a221797cbe70913cebf4e39.jpg", // Step 2 se mila link
    description: "An exciting parkour game where you perform flips, jumps, and dives through challenging obstacle courses.",
    iframeUrl: "https://play.wgplayground.com/ifr/2e8fa37352e8f5fea7ef315230c68573" // Step 1 se mila link
},
{
    id: "sausage-survival-master",
    title: "Sausage Survival Master",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/5e7f0b60e25253c517b9f9e74927699f/wgplayground/5ba0bf69dbfc0d1bbe649131f8cee75d.jpg", // Step 2 se mila link
    description: "A fun and challenging adventure game where you help a sausage survive various obstacles and challenges.",
    iframeUrl: "https://play.wgplayground.com/ifr/5e7f0b60e25253c517b9f9e74927699f" // Step 1 se mila link
},
{
    id: "petapeta-roblox-shooter",
    title: "PETAPETA Roblox Shooter",
    category: "horror",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/3bf676156c80920699a7494543a57fe4/wgplayground/ebfbf52794519221bc4ac98387b7b44e.jpg", // Step 2 se mila link
    description: "A thrilling horror shooter game inspired by Roblox.",
    iframeUrl: "https://play.wgplayground.com/ifr/3bf676156c80920699a7494543a57fe4" // Step 1 se mila link
},
{
    id: "italian-brainrot-hunter",
    title: "Italian Brainrot Hunter",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/10524ca0b2078c60bb9218751d36811b/wgplayground/3116091a7790aaf8936d203397241925.jpg", // Step 2 se mila link
    description: "An adventurous game where you hunt down brainrot in an Italian setting.",
    iframeUrl: "https://play.wgplayground.com/ifr/10524ca0b2078c60bb9218751d36811b" // Step 1 se mila link
},
{
    id: "traffic-jam-master",
    title: "Traffic Jam Master",
    category: "puzzle",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/49d06b74535ee23371bf038cd227e1ab/wgplayground/c71483732e7f9aaf2bd218b714a5aae4.jpg", // Step 2 se mila link
    description: "A challenging puzzle game where you solve traffic jams by strategically moving vehicles.",
    iframeUrl: "https://play.wgplayground.com/ifr/49d06b74535ee23371bf038cd227e1ab" // Step 1 se mila link
},
{
    id: "baseball-runner",
    title: "Baseball Runner",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/9b2b98e61967c649efcd9e8bc5b4ca7d/wgplayground/da166eef3030bfeb16cb1bba8bf94bbd.jpg", // Step 2 se mila link
    description: "An exciting adventure game where you run and dodge obstacles while playing baseball.",
    iframeUrl: "https://play.wgplayground.com/ifr/9b2b98e61967c649efcd9e8bc5b4ca7d" // Step 1 se mila link
},
{
    id: "last-to-leave-circle-obby",
    title: "Last to leave circle Obby",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/3822063a60015482afc02719a7ffc282/wgplayground/bea0b24a2a1de1c8cb4139f3af4a45c1.jpg", // Step 2 se mila link
    description: "A challenging adventure game where you compete to be the last one standing in a shrinking circle.",
    iframeUrl: "https://play.wgplayground.com/ifr/3822063a60015482afc02719a7ffc282" // Step 1 se mila link
},
{
    id: "case-identity",
    title: "Case Identity",
    category: "puzzle",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/88b202c257ca96513b84eaa138dd9196/wgplayground/5d0d9f184d25f6a71bebcda6475f2c8a.jpg", // Step 2 se mila link
    description: "A mysterious puzzle game where you solve cases and uncover hidden identities.",
    iframeUrl: "https://play.wgplayground.com/ifr/88b202c257ca96513b84eaa138dd9196" // Step 1 se mila link
},
{
    id: "granny-gta-vegas",
    title: "Granny GTA Vegas",
    category: "horror",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/42d1d608e2816faff6513937150d3717/wgplayground/65ebd57dd7c4091d245ee22c6c813505.jpg", // Step 2 se mila link
    description: "A thrilling horror game set in the vibrant world of GTA Vegas.",
    iframeUrl: "https://play.wgplayground.com/ifr/42d1d608e2816faff6513937150d3717" // Step 1 se mila link
},
{
    id: "mr-sniper-2-silent-assassin",
    title: "Mr Sniper 2: Silent Assassin",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/825d66057bc8f000d94f0f064401e02f/wgplayground/6ae4edada8523d234795181fdff3fcc0.jpg", // Step 2 se mila link
    description: "A stealthy puzzle game where you take on the role of a silent assassin, completing missions with precision and strategy.",
    iframeUrl: "https://play.wgplayground.com/ifr/825d66057bc8f000d94f0f064401e02f" // Step 1 se mila link
},
{
    id: "survival-racing-extreme-road",
    title: "Survival Racing: Extreme Road",
    category: "racing",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/7021c73c07ea03eb27ce6bcbedbd12fd/wgplayground/cede1564364b0d4f027156da85d455ec.jpg", // Step 2 se mila link
    description: "A fast-paced racing game where you survive on the extreme road.",
    iframeUrl: "https://play.wgplayground.com/ifr/7021c73c07ea03eb27ce6bcbedbd12fd" // Step 1 se mila link
},
{
    id: "impostor-among-space",
    title: "Impostor Among Space",
    category: "puzzle",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/0fe20fe45eaa4679e23bc35ff28c99d4/wgplayground/3b76360bbeaf273074552758e68e5ffc.jpg", // Step 2 se mila link
    description: "A thrilling puzzle game where you navigate through space and uncover the truth.",
    iframeUrl: "https://play.wgplayground.com/ifr/0fe20fe45eaa4679e23bc35ff28c99d4" // Step 1 se mila link
},
{
    id: "only-up-at-minecraft-sprunki",
    title: "Only Up at Minecraft & Sprunki",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/6e401bb60e638bbd2b283c472007c2fd/wgplayground/2ebdad272bc5ba0ea2612d65ee8dffed.jpg", // Step 2 se mila link
    description: "An adventurous game where you climb and explore in a Minecraft-inspired world.",
    iframeUrl: "https://play.wgplayground.com/ifr/6e401bb60e638bbd2b283c472007c2fd" // Step 1 se mila link
},
{
    id: "brawler-man-fist-of-fury",
    title: "Brawler Man: Fist of Fury",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/8bd02beaf3e07b19dc432ebed1ddb1cb/wgplayground/f0269fb42b51ddff1e303ef1661c2fc7.jpg", // Step 2 se mila link
    description: "An exciting adventure game where you battle through challenges with incredible fists.",
    iframeUrl: "https://play.wgplayground.com/ifr/8bd02beaf3e07b19dc432ebed1ddb1cb" // Step 1 se mila link
},
{
    id: "minecraft-find-the-tyre",
    title: "Minecraft Find The Tyre",
    category: "puzzle",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/0589bf1b7cce02afba90e648858fc241/wgplayground/e59007f73762a57386d1424799024c3f.jpg", // Step 2 se mila link
    description: "An adventurous game where you search for tires in a Minecraft-inspired world.",
    iframeUrl: "https://play.wgplayground.com/ifr/0589bf1b7cce02afba90e648858fc241" // Step 1 se mila link
},
{
    id: "skibidi-toilet-minecraft-slither-io",
    title: "Skibidi Toilet Minecraft Slither.io",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/2f0311f101608f860f4719666657ce33/wgplayground/fc08404b526d75aa13c64814f891edc5.jpg", // Step 2 se mila link
    description: "An adventurous game combining elements of Skibidi Toilet, Minecraft, and Slither.io.",
    iframeUrl: "https://play.wgplayground.com/ifr/2f0311f101608f860f4719666657ce33" // Step 1 se mila link
},
{
    id: "minecraft-backrooms-squid-game-escape",
    title: "Minecraft Backrooms Squid Game Escape",
    category: "horror",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/0d11886e5a934e70cb83bcbfd3355060/wgplayground/37da6e8d3c9be317f42eb40a2ea1cf36.jpg", // Step 2 se mila link
    description: "A thrilling horror game where you navigate through the backrooms and escape the squid game.",
    iframeUrl: "https://play.wgplayground.com/ifr/0d11886e5a934e70cb83bcbfd3355060" // Step 1 se mila link
},
{
    id: "squid-game-sprunki-hide",
    title: "Squid Game Sprunki Hide",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/1cb8db7cc7297e6e20c90a7e5ff23beb/wgplayground/4b926d993c3fd0d9fe0cfd674da94881.jpg", // Step 2 se mila link
    description: "An adventurous game where you hide and survive in a Squid Game-inspired world.",
    iframeUrl: "https://play.wgplayground.com/ifr/1cb8db7cc7297e6e20c90a7e5ff23beb" // Step 1 se mila link
},
{
    id: "color-race-obby",
    title: "Color Race Obby",
    category: "racing",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/511cd50bc2f711b97eba2e707817f6ff/wgplayground/3926d29a9b3d9e8b4e3516f5f989d29b.jpg", // Step 2 se mila link
    description: "A fast-paced racing game where you navigate through colorful obstacles in an exciting obby format.",
    iframeUrl: "https://play.wgplayground.com/ifr/511cd50bc2f711b97eba2e707817f6ff" // Step 1 se mila link
},
{
    id: "dta-6",
    title: "DTA 6",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/aff41b70d857b67589af029f2f754192/wgplayground/fec7d2e10a1a009bdd59ff39c986ab8a.jpg", // Step 2 se mila link
    description: "An adventurous game where you embark on a thrilling journey in the DTA 6 world.",
    iframeUrl: "https://play.wgplayground.com/ifr/aff41b70d857b67589af029f2f754192" // Step 1 se mila link
},
{
    id: "the-office-escape",
    title: "The Office Escape",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/a05016e00c90f844ec7b2c8a85c19403/wgplayground/1556e7d17ae3f9aae488cdd2f367a8ce.jpg", // Step 2 se mila link
    description: "An adventurous game where you escape from the office.",
    iframeUrl: "https://play.wgplayground.com/ifr/a05016e00c90f844ec7b2c8a85c19403" // Step 1 se mila link
},
{
    id: "crazy-boss",
    title: "Crazy Boss",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/748f2741d776b8bdd4a2776f756f2f31/wgplayground/89c68bc6a0faa61bc28ac6c0cd7d9821.jpg", // Step 2 se mila link
    description: "An adventurous game where you face off against a crazy boss.",
    iframeUrl: "https://play.wgplayground.com/ifr/748f2741d776b8bdd4a2776f756f2f31" // Step 1 se mila link
},
{
    id: "funny-celebrity-face-moments",
    title: "Funny Celebrity Face Moments",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/21a72d05bf2ffd42a51df81c43e9dc4a/wgplayground/0b5e4e2d12371ee1d35b0c2ed3187d5a.jpg", // Step 2 se mila link
    description: "A fun and entertaining game where you experience hilarious moments with celebrity faces.",
    iframeUrl: "https://play.wgplayground.com/ifr/21a72d05bf2ffd42a51df81c43e9dc4a" // Step 1 se mila link
},
{
    id: "trump-wobble-walk-challenge",
    title: "Trump Wobble Walk Challenge",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/cb5d14c1c9c4383530a9056ea74ceec7/wgplayground/967d63bda16ecb1d53472566841d2d76.jpg", // Step 2 se mila link
    description: "A fun and challenging adventure game where you navigate through obstacles while wobbling like Trump.",
    iframeUrl: "https://play.wgplayground.com/ifr/cb5d14c1c9c4383530a9056ea74ceec7" // Step 1 se mila link
},
{
    id: "lol-presidential-face",
    title: "LOL Presidential Face",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/d4558a18a01d9844e672a7aef4526cae/wgplayground/10edce8ad5fc238e40dec2cb9f6f4aab.jpg", // Step 2 se mila link
    description: "A humorous adventure game where you interact with and experience funny moments involving presidential faces.",
    iframeUrl: "https://play.wgplayground.com/ifr/d4558a18a01d9844e672a7aef4526cae" // Step 1 se mila link
},
{
    id: "nightmare-bedtime",
    title: "Nightmare Bedtime",
    category: "horror",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/9d2fe3d530fb556d8d547c2a15404487/wgplayground/2f785be1743df3aa4c5e1aa199a9a3da.jpg", // Step 2 se mila link
    description: "A scary and thrilling game where you face off against nightmares in a bedtime setting.",
    iframeUrl: "https://play.wgplayground.com/ifr/9d2fe3d530fb556d8d547c2a15404487" // Step 1 se mila link
},
{
    id: "scary-doll",
    title: "Scary Doll",
    category: "horror",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/751ab934af677b76b3f9f74d564533f0/wgplayground/05baf866f67a8971a1a2e25f4136ad1b.jpg", // Step 2 se mila link
    description: "A scary game where you interact with a frightening doll.",
    iframeUrl: "https://play.wgplayground.com/ifr/751ab934af677b76b3f9f74d564533f0" // Step 1 se mila link
},
{
    id: "poppy-playtime-horror-orphanage",
    title: "Poppy Playtime Horror Orphanage",
    category: "horror",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/25d5a1fb89ebcdfa2acdae6bf06547f2/wgplayground/0eb5d075b5f954152ef41968d1d8278a.jpg", // Step 2 se mila link
    description: "A scary game where you navigate through a haunted orphanage.",
    iframeUrl: "https://play.wgplayground.com/ifr/25d5a1fb89ebcdfa2acdae6bf06547f2" // Step 1 se mila link
},
{
    id: "scary-neighbour",
    title: "Scary Neighbour",
    category: "horror",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/135aade9f9980fd7737b8dba9b9340d6/wgplayground/8f4d420a381952e0962bba8e8e5654d2.jpg", // Step 2 se mila link
    description: "A scary game where you interact with a frightening neighbour.",
    iframeUrl: "https://play.wgplayground.com/ifr/135aade9f9980fd7737b8dba9b9340d6" // Step 1 se mila link
},
{
    id: "ronaldo-ball-rush-2026",
    title: "Ronaldo Ball Rush 2026",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/64dbb928627273bc6d969aba58931f01/wgplayground/2bee67e1dd4abf5dec8cb5f134a47ebb.jpg", // Step 2 se mila link
    description: "An adventurous game where you help Ronaldo navigate through obstacles and collect balls in a thrilling rush.",
    iframeUrl: "https://play.wgplayground.com/ifr/64dbb928627273bc6d969aba58931f01" // Step 1 se mila link
},
{
    id: "obby-mini-games",
    title: "Obby: Mini Games",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/661fc2f04ad29842b70d3819b5c3a63d/wgplayground/3c0d8047bd264ada3217ab24216ecb73.jpg", // Step 2 se mila link
    description: "A fun and challenging adventure game where you participate in various mini-games in an obby format.",
    iframeUrl: "https://play.wgplayground.com/ifr/661fc2f04ad29842b70d3819b5c3a63d" // Step 1 se mila link
},
{
    id: "ultra-realistic-blockcraft",
    title: "Ultra Realistic BlockCraft",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/8fb380498dce1a3873b701fa2347ddfc/wgplayground/dbf029e72db52b8d9083ca613a193cf7.jpg", // Step 2 se mila link
    description: "A fun and challenging adventure game where you build and create with realistic blocks.",
    iframeUrl: "https://play.wgplayground.com/ifr/8fb380498dce1a3873b701fa2347ddfc" // Step 1 se mila link
},
{
    id: "gt-flying-car-racing",
    title: "GT Flying Car Racing",
    category: "racing",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/4075b96270cbaa583e169f689ea80cc6/wgplayground/c30a7b112c740c5b2f8ee090ac198454.jpg", // Step 2 se mila link
    description: "A thrilling racing game where you pilot a flying car through challenging courses.",
    iframeUrl: "https://play.wgplayground.com/ifr/4075b96270cbaa583e169f689ea80cc6" // Step 1 se mila link
},
{
    id: "obby-all-games-dash-or-die",
    title: "Obby All Games: Dash or Die",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/3cbf3bf2ea608b4a2a32837a5c00caf8/wgplayground/bf9a663b1aae77e7484c6ccf308597cb.jpg", // Step 2 se mila link
    description: "A fun and challenging adventure game where you dash through various mini-games in an obby format.",
    iframeUrl: "https://play.wgplayground.com/ifr/3cbf3bf2ea608b4a2a32837a5c00caf8" // Step 1 se mila link
},
{
    id: "pixel-car-memory-quest",
    title: "Pixel Car Memory Quest",
    category: "puzzle",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/905eb53e2706bc872dabb403cf770fe0/wgplayground/b576e40e74367ed063d6b4851231e65c.jpg", // Step 2 se mila link
    description: "A fun and challenging puzzle game where you test your memory skills by matching pixel cars.",
    iframeUrl: "https://play.wgplayground.com/ifr/905eb53e2706bc872dabb403cf770fe0" // Step 1 se mila link
},
{
    id: "merge-the-presidents",
    title: "Merge the Presidents",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/95aead1fbe597c5234809d9566097afa/wgplayground/f94b8f729be55854ab9a2208b342c85f.jpg", // Step 2 se mila link
    description: "A fun and engaging adventure game where you merge different presidents to create new ones and explore their unique abilities.",
    iframeUrl: "https://play.wgplayground.com/ifr/95aead1fbe597c5234809d9566097afa" // Step 1 se mila link
},
{
    id: "cities-game",
    title: "Cities Game",
    category: "puzzle",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/75b8a10809373084c67cf59a6f570fd9/wgplayground/ee6a7c4ce45e85d4eeaed21a2636fc4e.jpg", // Step 2 se mila link
    description: "guess from which city is this arhitecture. ",
    iframeUrl: "https://play.wgplayground.com/ifr/75b8a10809373084c67cf59a6f570fd9" // Step 1 se mila link
},
{
    id: "dino-evolution-survival",
    title: "Dino Evolution: Survival",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/bb800ff4e642ff747a9b9939218357b4/wgplayground/c030dd9dbc343532293fc24e8a27e835.jpg", // Step 2 se mila link
    description: "An adventurous game where you evolve and survive as a dinosaur in a prehistoric world.",
    iframeUrl: "https://play.wgplayground.com/ifr/bb800ff4e642ff747a9b9939218357b4" // Step 1 se mila link
},
{
    id: "hero-vs-traps",
    title: "Hero vs Traps",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/6a578e94bbaa8806018f24d9457f0d31/wgplayground/206f49445b737a203b39a842568832a0.jpg", // Step 2 se mila link
    description: "An exciting adventure game where you control a hero and navigate through various traps.",
    iframeUrl: "https://play.wgplayground.com/ifr/6a578e94bbaa8806018f24d9457f0d31" // Step 1 se mila link
},
{
    id: "adventure-squad",
    title: "Adventure Squad",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/853310814bd1a7fadadd10456ca5e964/wgplayground/0893b1805993be244ca0017ddc66f1a5.jpg", // Step 2 se mila link
    description: "An exciting adventure game where you lead a team of heroes on a quest.",
    iframeUrl: "https://play.wgplayground.com/ifr/853310814bd1a7fadadd10456ca5e964" // Step 1 se mila link
},
{
    id: "kung-fu-little-animals",
    title: "Kung-Fu Little Animals",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/a9f7279ea754fb2591ff2022556731b1/wgplayground/42d2d970258ef5e8aec8772a1a4560bf.jpg", // Step 2 se mila link
    description: "An exciting adventure game where you control little animals and master the art of kung-fu.",
    iframeUrl: "https://play.wgplayground.com/ifr/a9f7279ea754fb2591ff2022556731b1" // Step 1 se mila link
},
{
    id: "descent",
    title: "DESCENT",
    category: "simulation",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/f60fdb2a98891ce154b7c75baee6b223/wgplayground/df13cccba5e76519caf8167279be72bc.jpg", // Step 2 se mila link
    description: "A thrilling Cycle Games with premium and expensive game experience.",
    iframeUrl: "https://play.wgplayground.com/ifr/f60fdb2a98891ce154b7c75baee6b223" // Step 1 se mila link
},
{
    id: "crazy-car-stunt-descent-gt",
    title: "Crazy Car Stunt Descent GT",
    category: "racing",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/3a5e59e5747b1a64490ed653ee5d0414/wgplayground/e95f0c49e9c058758ed6a4d09b518381.gif", // Step 2 se mila link
    description: "A thrilling racing game with crazy car stunts and descent challenges.",
    iframeUrl: "https://play.wgplayground.com/ifr/3a5e59e5747b1a64490ed653ee5d0414" // Step 1 se mila link
},
{
    id: "gmo-rp-village-chaos",
    title: "GMO RP: Village Chaos",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/c024e78b02a08a816388bb1dffda6b5b/wgplayground/b8aeb4d7296a00d274b94cd457fb36d5.jpg", // Step 2 se mila link
    description: "An adventurous game where you navigate through a chaotic village in a role-playing setting.",
    iframeUrl: "https://play.wgplayground.com/ifr/c024e78b02a08a816388bb1dffda6b5b" // Step 1 se mila link
},
{
    id: "route-66-russian-traffic",
    title: "Route 66 Russian Traffic",
    category: "racing",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/30db8a884f9888845f63636a384cf629/wgplayground/598c4bca17f054e6f8348732a8a4735f.jpg", // Step 2 se mila link
    description: "A thrilling racing game where you navigate through the challenging traffic of Route 66 in Russia.",
    iframeUrl: "https://play.wgplayground.com/ifr/30db8a884f9888845f63636a384cf629" // Step 1 se mila link
},
{
    id: "hill-travel-3d",
    title: "Hill Travel 3D",
    category: "simulation",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/0760f294a69630da977fb6ccc48da6b5/wgplayground/7534348602082935c0f9d7af382fdb4c.jpg", // Step 2 se mila link
    description: "An exciting adventure game where you travel through scenic hills.",
    iframeUrl: "https://play.wgplayground.com/ifr/0760f294a69630da977fb6ccc48da6b5" // Step 1 se mila link
},
{
    id: "bus-driver-simulator-3d",
    title: "Bus Driver Simulator 3D",
    category: "simulation",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/f63626b450555c3d996474cc0c7d2d7d/wgplayground/f6d778c8561ae6a69b279b4a40c81b79.jpg", // Step 2 se mila link
    description: "A realistic bus driving simulation game.",
    iframeUrl: "https://play.wgplayground.com/ifr/f63626b450555c3d996474cc0c7d2d7d" // Step 1 se mila link
},
{
    id: "idle-restaurant",
    title: "Idle Restaurant",
    category: "business",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/8d52c6dfd86d3ac9131b245727769dea/wgplayground/79ef8bfea74c0f4eb5e4eb17ab4ea597.jpg", // Step 2 se mila link
    description: "A fun and engaging business simulation game where you manage and grow your own restaurant.",
    iframeUrl: "https://play.wgplayground.com/ifr/8d52c6dfd86d3ac9131b245727769dea" // Step 1 se mila link
},
{
    id: "supermarket-simulator-dream-store",
    title: "Supermarket Simulator: Dream Store",
    category: "business",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/86800349c3742f72cca18799a3aff1f0/wgplayground/b37a78f0a173df33ff13ac0e2b86bdca.png", // Step 2 se mila link
    description: "A fun and engaging business simulation game where you manage and grow your own supermarket.",
    iframeUrl: "https://play.wgplayground.com/ifr/86800349c3742f72cca18799a3aff1f0" // Step 1 se mila link
},
{
    id: "car-tycoon-your-car-collection",
    title: "Car Tycoon - Your Car Collection",
    category: "business",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/008d0595910613cc9f2dd82dd9e76dc1/wgplayground/4daf30edc51030da37bfa37c3b78ad90.jpg", // Step 2 se mila link
    description: "A fun and engaging business simulation game where you manage and grow your own car dealership.",
    iframeUrl: "https://play.wgplayground.com/ifr/008d0595910613cc9f2dd82dd9e76dc1" // Step 1 se mila link
},
{
    id: "city-builder",
    title: "City Builder",
    category: "simulation",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/8da4b872dfcfa1302aac44dd67e89a7d/wgplayground/ca9054cd8008c0d9ffc83b240742ab0d.jpg", // Step 2 se mila link
    description: "A fun and engaging simulation game where you build and manage your own city.",
    iframeUrl: "https://play.wgplayground.com/ifr/8da4b872dfcfa1302aac44dd67e89a7d" // Step 1 se mila link
},
{
    id: "taxi-empire-airport-tycoon",
    title: "Taxi Empire - Airport Tycoon",
    category: "business",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/987ad29ca4cc891fc7068eafb66a9188/wgplayground/871b4844b63b07bea388b6376b5f4ffd.jpg", // Step 2 se mila link
    description: "A fun and engaging business simulation game where you manage and grow your own airport-based taxi empire.",
    iframeUrl: "https://play.wgplayground.com/ifr/987ad29ca4cc891fc7068eafb66a9188" // Step 1 se mila link
},
{
    id: "obby-pump-up-your-muscles",
    title: "Obby: Pump Up Your Muscles! +1 per second",
    category: "simulation",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/978ad2301f601ae393dec2b854913fe9/wgplayground/7b229d80fcc68f85a121aba94ebd42c5.jpg", // Step 2 se mila link
    description: "A fun and engaging simulation game where you pump up your muscles and grow stronger over time.",
    iframeUrl: "https://play.wgplayground.com/ifr/978ad2301f601ae393dec2b854913fe9" // Step 1 se mila link
},
{
    id: "bimka-drive-smash-cars-into-splinters",
    title: "Bimka Drive - Smash cars into splinters!",
    category: "simulation",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/f2ffad36b0370adc638347d11baaf3e2/wgplayground/e5c327cdbb0c6a121dc21077264c660b.jpg", // Step 2 se mila link
    description: "A fun and engaging simulation game where you smash cars into splinters!",
    iframeUrl: "https://play.wgplayground.com/ifr/f2ffad36b0370adc638347d11baaf3e2" // Step 1 se mila link
},
{
    id: "school-simulator-my-school",
    title: "School simulator: My school",
    category: "simulation",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/aa0143e7c79f054b3718f98fd49171d4/wgplayground/6a3e978f6d4ee21536103e803331b0db.jpg", // Step 2 se mila link
    description: "A fun and engaging simulation game where you manage and grow your own school.",
    iframeUrl: "https://play.wgplayground.com/ifr/aa0143e7c79f054b3718f98fd49171d4" // Step 1 se mila link
},
{
    id: "bolts-unscrew-it",
    title: "Bolts - Unscrew It",
    category: "puzzle",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/b8b5aadeb982aba3daa33be5b83638a8/wgplayground/6dd8d93a4981e9946eb24c45ba5813d3.jpg", // Step 2 se mila link
    description: "A challenging puzzle game where you unscrew bolts to solve intricate mechanical puzzles.",
    iframeUrl: "https://play.wgplayground.com/ifr/b8b5aadeb982aba3daa33be5b83638a8" // Step 1 se mila link
},
{
    id: "military-strike",
    title: "Military Strike",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/284319b4611644d3c87feee95afb3ada/wgplayground/6d6384fd1ff33ee05f20403d9aa23583.jpg", // Step 2 se mila link
    description: "A thrilling adventure game where you lead your forces in strategic military operations.",
    iframeUrl: "https://play.wgplayground.com/ifr/284319b4611644d3c87feee95afb3ada" // Step 1 se mila link
},
{
    id: "headless-joe",
    title: "Headless Joe",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/078b8233353fdff76f0f1e03ece5cf12/wgplayground/c69488859dd6f187a865127dbebc2c96.png", // Step 2 se mila link
    description: "An adventurous game where you navigate through challenges and obstacles as Headless Joe.",
    iframeUrl: "https://play.wgplayground.com/ifr/078b8233353fdff76f0f1e03ece5cf12" // Step 1 se mila link
},
{
    id: "hazmob-io",
    title: "Hazmob.io",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/b7491702970e3b0b6de397f80a0a1844/wgplayground/9773b8616f3f17d98f05adf05577bc3c.jpg", // Step 2 se mila link
    description: "An adventurous game where you navigate through a hazardous environment and survive against various challenges.",
    iframeUrl: "https://play.wgplayground.com/ifr/b7491702970e3b0b6de397f80a0a1844" // Step 1 se mila link
},
{
    id: "crazy-racer-2-player",
    title: "2 Player Crazy Racer",
    category: "racing",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/e359043d79f00af5c9ecdc90458e3516/wgplayground/057d62db8546ead17ee66cdefcde8c1b.jpg", // Step 2 se mila link
    description: "A thrilling racing game where two players compete against each other in a crazy racing challenge.",
    iframeUrl: "https://play.wgplayground.com/ifr/e359043d79f00af5c9ecdc90458e3516" // Step 1 se mila link
},
{
    id: "market-life",
    title: "Market life",
    category: "puzzle",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/749ef1c4c5279fdc10cade286388bf55/wgplayground/53c5f843048b32dca2acb9eda638de3e.jpg", // Step 2 se mila link
    description: "Fun and addictive color sorting puzzle game.",
    iframeUrl: "https://play.wgplayground.com/ifr/749ef1c4c5279fdc10cade286388bf55" // Step 1 se mila link
},
{
    id: "fruit-slicer",
    title: "Fruit Slicer",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/64d24f8c38c6684c10fb06fb4d37a2cc/wgplayground/59ef641e0b35d284a36e91361cdacc89.jpg", // Step 2 se mila link
    description: "A fun and engaging adventure game where you slice various fruits in a fast-paced challenge.",
    iframeUrl: "https://play.wgplayground.com/ifr/64d24f8c38c6684c10fb06fb4d37a2cc" // Step 1 se mila link
},
{
    id: "fruit-slicing",
    title: "Fruit slicing",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/8bb7a81c1cb9b3198848fd6efa7cc413/wgplayground/2f3c939cbbe2206c062cd5f2bc3fc35c.jpg", // Step 2 se mila link
    description: "A Enjoyable and addictive fruit slicing game where you slice various fruits in a fast-paced challenge.",
    iframeUrl: "https://play.wgplayground.com/ifr/8bb7a81c1cb9b3198848fd6efa7cc413" // Step 1 se mila link
},
{
    id: "snake-warz",
    title: "Snake Warz",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/b16308825689f07d4385b97332061703/wgplayground/f098079cccbad9343727669a9e37f977.jpg", // Step 2 se mila link
    description: "A fun and engaging adventure game where you control a snake and navigate through various challenges in a war-like environment.",
    iframeUrl: "https://play.wgplayground.com/ifr/b16308825689f07d4385b97332061703" // Step 1 se mila link
},
{
    id: "python-snake-simulator",
    title: "Python Snake Simulator",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/0e86c866b4199d820562270984860d1f/wgplayground/cc647b0c091ded26c264adc5f0244f35.jpg", // Step 2 se mila link
    description: "A Fun and adventure game where you control a python snake and navigate through various challenges in a simulated environment.",
    iframeUrl: "https://play.wgplayground.com/ifr/0e86c866b4199d820562270984860d1f" // Step 1 se mila link
},
{
    id: "drag-racing-city",
    title: "Drag Racing City",
    category: "racing",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/109c12f98aaaf37ffdb7212764840bcf/wgplayground/db948e674ba35707a92d27a2a72babef.jpg", // Step 2 se mila link
    description: "A thrilling racing game where you compete in drag races through the city.",
    iframeUrl: "https://play.wgplayground.com/ifr/109c12f98aaaf37ffdb7212764840bcf" // Step 1 se mila link
},
{
    id: "zoocraft-2",
    title: "Zoocraft 2",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_1280/h_720/q_50/https://static.wgplayground.com/5db4304faadda09822b19f1d118c76b9/wgplayground/d871a869a23e44918123757aa6d4e109.jpg", // Step 2 se mila link
    description: "An adventurous game where you explore and build your own zoo with various animals and attractions.",
    iframeUrl: "https://play.wgplayground.com/ifr/5db4304faadda09822b19f1d118c76b9" // Step 1 se mila link
},
{
    id: "nitro-burnout",
    title: "Nitro Burnout",
    category: "racing",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/abf8f507d4fdf642845de0056d4c5f07/wgplayground/f22b15526b3a6fd3728ca4a993d9a41f.jpg", // Step 2 se mila link
    description: "A thrilling racing game where you compete in drag races through the city.",
    iframeUrl: "https://play.wgplayground.com/ifr/abf8f507d4fdf642845de0056d4c5f07" // Step 1 se mila link
},
{
    id: "epic-mine",
    title: "Epic Mine",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/49eec34ac0937a50020392fffa523ac3/wgplayground/628ec1a8cf657aab00f2ddd588a9af9f.png", // Step 2 se mila link
    description: "An adventurous game where you explore and mine resources in an epic underground world.",
    iframeUrl: "https://play.wgplayground.com/ifr/49eec34ac0937a50020392fffa523ac3" // Step 1 se mila link
},
{
    id: "cooking-stories-fun-cafe-game",
    title: "Cooking Stories: Fun cafe game",
    category: "business",
    thumbnail: "https://scout.wgimager.com/f_avif/w_1280/h_720/q_50/https://static.wgplayground.com/0e0d6db2fd066222552c31512bb8b3cb/wgplayground/07f3e67596f2b191b4a201b159f085a2.jpg", // Step 2 se mila link
    description: "A fun and engaging business simulation game where you manage and grow your own cafe, serving delicious dishes to customers.",
    iframeUrl: "https://play.wgplayground.com/ifr/0e0d6db2fd066222552c31512bb8b3cb" // Step 1 se mila link
},
{
    id: "prison-escape-idle-survival",
    title: "Prison Escape: Idle Survival",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/80e2dd4023a7b63a5b9d315d53d39421/wgplayground/be0b8a7b545eac12846f14c81b087410.jpg", // Step 2 se mila link
    description: "An exciting adventure game where you navigate through a prison and survive in an idle survival setting.",
    iframeUrl: "https://play.wgplayground.com/ifr/80e2dd4023a7b63a5b9d315d53d39421" // Step 1 se mila link
},
{
    id: "dig-and-descend-obby-mine",
    title: "Dig and Descend: Obby Mine",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_1280/h_720/q_50/https://static.wgplayground.com/556c4844021524b12243a8af3dc1bfe4/wgplayground/ddd8aaa6b6b4e7dd73b0f34c51aa0600.jpg", // Step 2 se mila link
    description: "An adventurous game where you dig and descend through an obby mine, facing various challenges and obstacles.",
    iframeUrl: "https://play.wgplayground.com/ifr/556c4844021524b12243a8af3dc1bfe4" // Step 1 se mila link
},
{
    id: "hide-and-seek-in-block-craft",
    title: "Hide And Seek In Block Craft",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_512/h_512/q_50/https://static.wgplayground.com/33d31e74b8aaec9c1615e2673374f122/wgplayground/4063434a8f70c6d1c5156f28f7dcc5fb.jpg", // Step 2 se mila link
    description: "An adventurous game where you play hide and seek in a block craft environment, navigating through obstacles and finding the best hiding spots.",
    iframeUrl: "https://play.wgplayground.com/ifr/33d31e74b8aaec9c1615e2673374f122" // Step 1 se mila link
},
{
    id: "bloody-millionaire",
    title: "Bloody Millionaire",
    category: "adventure",
    thumbnail: "https://scout.wgimager.com/f_avif/w_1280/h_720/q_50/https://static.wgplayground.com/ca5f78d9d43990424d88b1901d8341cc/wgplayground/fd5e749b765a24e8a81ceea2baca868d.jpg", // Step 2 se mila link
    description: "An adventurous game where you navigate through challenges and obstacles to become a bloody millionaire.",
    iframeUrl: "https://play.wgplayground.com/ifr/ca5f78d9d43990424d88b1901d8341cc" // Step 1 se mila link
}
];