
# Director AI for Shooter and Survival Games
Published: Jan 30th, 2023 | Updated: Sept 22nd, 2024

Welcome to the Project Page for my Director AI system, a project I undertook as part of my bachelor's degree 
dissertation in Games Technology. The following sections will give an overview of the project such
as it's core features and limitations, the technical challenges faced and how I overcame them, before 
concluding with a reflection on what I learnt and future plans for the project. Code samples can be found
at the end of this page.

## Background - The AI Director of Left 4 Dead
The developers of the first-person shooter game Left 4 Dead wanted to provide a challenging, engaging, and
fresh experience for their players on every play. To achieve this, they developed a system they called an 
AI Director, a collection of systems that worked together seamlessly to govern the pacing of their game and
how the drama unfolded. It was an AI that operated behind the scenes rather than as an in-game physical 
entity.

Under the hood, the AI Director analysed the performance of each player and based it's decisions upon a 
perceived stress metric that it continually calculated for each player. Through this, it was able to decide
when it perceived was the right time was to spawn more enemies, how many of them to spawn, what type of 
enemy to spawn, and more. The Director also had the capability to modify the level layout to open up new 
paths dynamically based on certain conditions, and more. These capabilities enabled the Director to craft 
the best gameplay experience it could for it's players.

The following video explores what an AI Director is in greater detail.
https://youtu.be/Mnt5zxb8W0Y

## Concept
Inspired by Left 4 Dead's AI Director, the idea for this project was to develop a more versatile Director 
system that could be adopted by game developers to use in their own games regardless of genre. It was 
important therefore that the system architecture was modular and generic in nature so that rules and 
behaviours could be processed by a single system. This is one of the fundamental challenges this project 
attempts to solve.


Inspired by the AI Director in the Left 4 Dead series, this project aimed to create a more versatile Director
system that game developers could integrate easily into their own projects.  



### Scope
To evaluate the versatility and effectiveness of the Director, two distinct game genres were chosen to
develop Director systems for. The shooter genre was an obvious first choice, a domain where the Director 
has already been extensively tested and proven to work effectively in. This first system would act as a 
reliable benchmark to compare the second Director system against. The second genre selected was the 
survival genre, a highly popular and mechanically different genre to shooter games.

### Tech Stack
- Engine/Framework/Library: Unity (2021.1.21)
- Programming Language: C#
- IDE: JetBrains Rider
- Operating System: Windows

## Technical Challenges
Constructing a flexible rules system for the Director to utilise effectively for both shooter and survival 
games proved to be a challenging task. It was important that rules could be processed for both game genres 
by a single system.

In the beginning stages of development however, the project saw major difficulties in creating a rule system
that could be considered generic. After the submission of the prototype demo and receiving valuable tutor
feedback the project was able to move forward with a clearer vision of where to go next. From there the 
project was able to see success as development on the rules system began.

### Rule System
In the early stages of development, the project faced significant challenges in creating a single rule 
system that could process rules across various game genres. The initial architectural design suffered
from depending on rules that were highly context dependant and tightly coupled to core scripts.

As development and research progressed, the Rule pattern was discovered. This powerful design pattern
allows for the encapsulation of conditional logic into their self-contained and reusable rule classes. 
This approach provided a high degree of modularity, flexibility, extensibility, as well as readability. 

addressed former issues with

these core principles 

### Active Area System
Another technical challenge faced was the development of the Active Area Set (AAS), a key component of the
director system. The AAS defines the active area around the player, managing enemy populations and item spawns
in the game world as the player navigates through the environment. The system also efficiently reuses enemy 
entities when creating and destroying enemy populations, allowing it to manage large numbers of enemies at a time
in an efficient and performant manner.

Implementing this system presented several challenges. The system needed to be able to process a developer's level 
regardless of the type of the game the developer was making.
      
Difficulties: real-time dynamic pathfinding, real-time population of enemies on a tilemap in a viable location but
also outside of the player's view and knowledge, real-time despawning of enemies when out of range of the active area,

Population management, strategic placement, performance, scalability and flexibility

## Key Features
- Games
  - Top-down Shooter Game
  - Top-down Survival Game
- Rule-based Architecture
  - Intensity Rule Engine
  - Behaviour Rule Engine
  - Intensity Rule Calculator
  - Behaviour Rule Calculator
- Active Area Set
  - Dynamic Tilemap Processing
  - Dynamic Enemy Population
  - Dynamic Item Spawning

## Strengths
- Highly Customisable - Designers can tweak and customise the director according to their own needs and
 preferences.
- Easy Deployment - The Director can quickly and easily be deployed by dropping it's prefab into the scene
and setting the necessary data requirements for the inspector.
- Flexible Rule Processing - Rules for both shooter and survival games can be processed by the system with
the capability to adapt to other genre types too.
- Dynamic Tilemap Processing - Through the Active Area Set (AAS) system, the Director is able to process a
given tilemap level and determine viable enemy spawn locations.

## Limitations
- Rules Must Be Manually Added - Designers are required to access the code directly to write rules and add
them to the rules list. A custom editor tool should be built that will allow a designer to easily create
and add rules to the rule engine without having to access the code directly.
- Lack of Rule Evaluation Techniques - Intensity rules are only fired based on the highest weighting output.
Further techniques could be employed such as executing rules sequentially, at random, based on priority,
or firing the first to match a condition.
- 2D Environment Focus: The current implemented is limited to 2D game environments and so does not support
3D environments.

## Learning Highlights
- Design Patterns
  - Rule pattern
  - State pattern
  - Event Buses
- System Design
  - Interfaces
  - Modular architectures
- Data Structures
  - Dictionaries
- Level Design
  - Tilemaps
- Optimisation
  - State caching

## Future Plans
- Rework director state logic using a state machine
- Utilise more methods of rule execution
- Handle rule creation using a custom editor tool
- Adapt the active area set to work with 3D environments
- Objecting pooling enemies
- Develop and integrate an attractor system
- Develop a complete game and fully-fledged and integrated Director system

## Conclusion
This project was an invaluable learning experience, offering profound insights into the development of a 
simple yet powerful system that empowers designers to create their own rules for shooter and survival
games. Additionally, this project served as as a compelling proof of concept, demonstrating how such a 
system can be effectively integrated into other video game genres.

## Code Samples
- Text

## Other Resources
- Text

## References
- Text

## Formatting
``Thesis Paper`` | ``Github Repository`` | ``Project Showcase``

```Some Code
sadfsdf
```