
# Director AI for Shooter and Survival Games
Published: Jan 30th, 2023 | Updated: Sept 22nd, 2024

Welcome to the Project Page for my Director AI system, a project I undertook as a dissertation 
as part of my bachelor's degree in Games Technology. The following sections will give an 
overview of the project such as it's core features and limitations, the technical challenges
faced and how I overcame them, before concluding with a reflection on what I learnt and future 
plans for the project. Code samples can be found at the bottom of this page.

## Background - The AI Director of Left 4 Dead
The developers of the first-person shooter game Left 4 Dead wanted to provide a challenging, 
engaging, and fresh experience for their players on every play. To achieve this, they developed
a system they called an AI Director, a collection of systems that worked together seamlessly to 
govern the pacing of their game and how the drama unfolded. Under the hood this involved the AI
Director analysing the performance of each player and basing it's actions upon a perceived stress
metric that it continually calculated for each player. 

## Concept
The aim for this project was to create a more versatile Director system that could be adapted to other
videogame genres. For the purposes and scope of this project, two genres were selected. The shooter genre
was selected to test the Director in a genre that it has been tried and tested in. The second genre selected
was the survival genre as it is another well known and extremely popular genre, and it would be insightful
to see how the Director could be utilised in such a different genre.

Another aim for this project was to make the system modular in nature so that it would allow designers to 
easily build their own rules and behaviours for their shooter and survival games.



An AI Director is a system that manages the intensity and flow of the player's experience. It 
is used to dynamically control the difficulty and progression of the game in real time based on
player performance, and aims to create a unique and challenging experience on each play so that
no two games are the same. This typically involves the Director deciding when and where to spawn
enemies, how many enemies should be in play at any one time, and modifying the level layout to 
open up new paths dynamically. The goal for this project was to create a versatile Director Ai 
system that would allow designers to build their own rules and behaviours for games of the shooter 
and survival genre.

## Technical Challenges
Constructing a flexible rules system for the Director to utilise effectively for both shooter and survival 
games proved to be a challenging task. It was important that rules could be processed for both game genres 
by a single system.

In the beginning stages of development however, the project saw major difficulties in creating a rule system
that could be considered generic. After the submission of the prototype demo and receiving valuable tutor
feedback the project was able to move forward with a clearer vision of where to go next. From there the 
project was able to see success as development on the rules system began.

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

## What I learnt
- The Rule Pattern - Abstracting messy logic into their own respective rule classes.
- The State Pattern - Encapsulating simple behaviours into their own state classs and handling the
transitional logic from one state to another.
- Event Buses - Text
- Interfaces - Text
- Dictionaries - Text
- State caching - Text
- Modular Architectures - The importance and value of loosely coupled systems and extensible design
- Tilemap Level Design - Text

## Future Plans
- Rework director state logic using a state machine
- Utilise more methods of rule execution
- Handle rule creation using a custom editor tool
- Adapt the active area set to work with 3D environments
- Attractor system
- Pooling enemies 

## Conclusion
- This project was an invaluable learning experience, providing deep insights into
- A simple but capable system that enables designers to creator their own rules for shooter and survival games
- 

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