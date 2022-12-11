import Pharmacy from '../assets/Pharmacy.png'
import ServerShare from '../assets/SharedTableServers.jpg'
// import NotAvailable from '../assets/NotAvailable.jpg'
import Engine from '../assets/engine.jpg'
import Chess from '../assets/chessgame.jpg'
import Car from '../assets/car.jpg'
import HandWritten from '../assets/handwritting.jpg'
import Tom from '../assets/tom.jpg'
import Dash from '../assets/dash.jpg'
import Maze from '../assets/mazes.png'
import Cloth from '../assets/cloth.jpg'
import Neon from '../assets/neon.jpg'
import Minimax from '../assets/minimax.jpg'
import Astar from '../assets/astar.png'
import Covid from '../assets/covid.jpg'
import Movie from '../assets/movie.jpg'
import Auctux from '../assets/auctuxWebsite.jpg'
import Sorting from '../assets/sorting.jpg'
import Raytracing from '../assets/Raytracing_reflection.jpg'

const projects = [
    {
      title: "Pharmacy POS",
      image: Pharmacy,
      tags: ["javascript", "React", "Node JS", "MongoDB"],
      id: "01project",
      demo_url: "/",
      github_url: "/",
      description: "point Of Shop of a pharmacy using MERN stack",
    },
    {
      title: "Ray tracing",
      image: Raytracing,
      tags: ["python", "pygame"],
      id: "03project",
      demo_url: "https://www.youtube.com/watch?v=zp-8y4MVqE4",
      github_url: "https://github.com/Josephbakulikira/Ray-Tracing-with-python-from-Scratch",
      description: "Ray tracing implementation from scratch using python(pygame)",
    },
    {
      title: "3D Engine",
      image: Engine,
      tags: ["python", "pygame"],
      id: "04project",
      demo_url: "https://www.youtube.com/watch?v=8UNoQLOwC60",
      github_url: "https://github.com/Josephbakulikira/3D-engine-from-scraph--pygame",
      description: "3D engine from complete scratch with python(pygame)",
    },
    {
      title: "SharedExcelTable",
      image: ServerShare,
      tags: ["javascript", "React", "Node JS", "MongoDB"],
      id: "02project",
      demo_url: "https://chris-managements.netlify.app/",
      github_url: "https://github.com/Josephbakulikira",
      description: "you can create a server and share an excel table with any one (MERN stack)",
    },
    {
      title: "Chess (AI)",
      image: Chess,
      tags: ["python", "pygame"],
      id: "05project",
      demo_url: "https://www.youtube.com/watch?v=tICDiXe8_Vc",
      github_url: "https://github.com/Josephbakulikira/Chess-AI-pygame-Minimax-",
      description: "chess game with a chess AI (minimax algorithm) ",
    },
    {
      title: "Auctux Website",
      image: Auctux,
      tags: ["javascript", "react"],
      id: "08project",
      demo_url: "https://www.auctux.com/",
      github_url: "https://github.com/Josephbakulikira",
      description: "a beautifull blog website for auctux, using Gatsby and sanity",
    },
    {
      title: "Self Driving Car",
      image: Car,
      tags: [
        "python",
        "pygame",
      ],
      id: "06project",
      demo_url: "https://www.youtube.com/watch?v=cpTcxTyng9E",
      github_url: "https://github.com/Josephbakulikira/Self-Driving-Car---python-Genetic-Algorithm",
      description: "SDC with neural network and genetic algorithm",
    },
    {
      title: "Handwritten digits recognition",
      image: HandWritten,
      tags: ["python", "pygame"],
      id: "07project",
      demo_url: "https://github.com/Josephbakulikira/Neural-Network-From-Scratch-python",
      github_url: "https://github.com/Josephbakulikira/Neural-Network-From-Scratch-python",
      description: "making a neural networks library from scratch",
    },
    
    {
      title: "Sorting Algorithm visualizations",
      image: Sorting,
      tags: ["C-sharp", "unity"],
      id: "09project",
      demo_url: "https://www.youtube.com/watch?v=CEsl_ix1LNU",
      github_url: "https://github.com/Josephbakulikira/Sorting-Algorithms-Csharp-Unity",
      description: "visualization of bubble and selection sorting algorithm",
    },
    {
      title: "You can't control Tom",
      image: Tom,
      tags: ["C-sharp", "unity"],
      id: "10project",
      demo_url: "https://auctux.itch.io/you-cant-control-tom",
      github_url: "https://github.com/Josephbakulikira",
      description: "A game made during a GMTK game jam in 48hrs",
    },
    {
      title: "Dash Race",
      image: Dash,
      tags: ["C-sharp", "unity"],
      id: "11project",
      demo_url: "https://auctux.itch.io/dash-race",
      github_url: "https://github.com/Josephbakulikira",
      description: "A game made during a game jam in 48hrs",
    },
    {
      title: "11 Algorithm to generate Maze",
      image: Maze,
      tags: ["python", "pygame"],
      id: "12project",
      demo_url: "https://www.youtube.com/watch?v=U3meEXvYFsc",
      github_url: "https://github.com/Josephbakulikira/Procedural-Maze-Generator-Algorithms",
      description: "different algorithms for generiting mazes",
    },
    {
      title: "Cloth Simulation",
      image: Cloth,
      tags: ["python", "pygame"],
      id: "13project",
      demo_url: "https://www.youtube.com/watch?v=n9XfsSDDhCI",
      github_url: "https://github.com/Josephbakulikira/Cloth-Simulation-With-python---Verlet-Integration",
      description: "implementation of the verlet integration",
    },
    {
        title: "Minimax Tree website",
        image: Minimax,
        tags: ["javascript", "react"],
        id: "14project",
        demo_url: "https://minimax-tree-tictactoe.netlify.app/",
        github_url: "https://github.com/Josephbakulikira/React-Minimax-Tree-Visualization-Tictactoe",
        description: "Minimax tree Search Visualization for TicTacToeAI",
    },
    {
        title: "A* Algorithm",
        image: Astar,
        tags: ["python", "pygame"],
        id: "15project",
        demo_url: "https://www.youtube.com/watch?v=lXPf2wdBjTA",
        github_url: "https://github.com/Josephbakulikira/Astar-visualization-python",
        description: "visualization of a pathfinding algorithm",
      },
    
      {
        title: "Neon Helix",
        image: Neon,
        tags: ["C-sharp", "unity"],
        id: "16project",
        demo_url: "https://play.google.com/store/apps/details?id=com.Auctux.NeonHelix&hl=fr",
        github_url: "https://github.com/Josephbakulikira",
        description: "color helix clone with C#(unity)",
      },
      {
        title: "Covid19 API",
        image: Covid,
        tags: ["Javascript", "react"],
        id: "17project",
        demo_url: "https://auctux-covid.netlify.app",
        github_url: "https://github.com/Josephbakulikira/Covid-19-react",
        description: "using Covid API",
      },
      {
        title: "Movie DB API",
        image: Movie,
        tags: ["Javascript", "react"],
        id: "18project",
        demo_url: "https://auctux-movie.netlify.app",
        github_url: "https://github.com/Josephbakulikira/Movie-db-app-react",
        description: "using MovieDB API",
      },

  ];

  export default projects