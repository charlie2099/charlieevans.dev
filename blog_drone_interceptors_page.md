# Drone Interceptors


<p>This is an essential mechanic for iteratively testing different drone configurations to see which combinations of components (alongside other factors) are most effective 
        at intercepting hostile drones.</p>

These can provide improvements in a drone's performance, or
introduce trade-offs such as making a drone heavier or more costly to construct.

### Customisation System
Each drone builds starts off with a base set of attributes. As new augments are added
to a drone during the customisation stage, the base attributes of the drones are affected,
for better or worse. For example, augmenting a drone with a component of any kind will of
course increase it's weight attribute. Certain components may see an increase or decrease
in a drones speed, acceleration, range, cost, and more.


### Save System
Another of the key technical challenges faced was developing a save system. A save
system was needed to handle the

There was a need for a system that could update and retrieve data dynamically 

Due to the dynamic nature of the customisation system, it was inevitable that an
additional system would be needed to handle the retrival of different 



#### Context
See above

#### Problem
Once a drone has finished being customised in the workshop, and it's base attributes have
now changed, it was important that this new data is carried forward with the drone to the
next scene, the game. It was also important that this data was retained after the player
had finished playing, and not lost after the player reboots the game at a later point. 

Inevitably, this meant a system was needed that could handle the saving and retrieval of 
a player's drone configurations. Additionally, a data retrieval system was also required 
for the game's post analytics and drone budgeting system.

#### Proposed Solution
It made sense therefore that rather than developing three separate save systems for each 
use case, a singular system should be designed that could flexibly support different types
of save data. 

#### Solution 
Placeholder




### Other Stuff

Our clients are looking for ways to customize their drones, so that they can easily add or 
remove components to fine-tune them before deploying them. They desire a playground in which 
to experiment with different drone configurations in order to test and evaluate the most 
effective strategies for intercepting drone swarms. To construct such a system it was crucial 
to gather information on existing approaches to loadout and customisation systems in published
games and the techniques that were employed to build them.


A single player drone simulation game where the player customises drones and creates their own
drone scenarios, which can then be run and observed with the ability to change the formation of 
your drones in flight. We are striking a fine balance between gamification and simulation, and
the systems must be able to represent complex real-world data in a way which is digestible for 
a wider audience rather than just experts in the field.


1 ) Customise your drones in the drone workshop. The interceptors will be the drones utilised by
the defending side, and the others will used by the attacking side. Augments will affect various
drone parameters such as speed, acceleration, and weight, as well as what behaviours the drones 
will have.
2 ) Pick one of the scenarios from the workshop scenarios board
3 ) Upon loading a scenario, place the waypoints the attackers will use to attack various targets
around the level. Use R and T keys to adjust the elevation. Attacking drones will travel to
waypoints in the order they were placed.
4 ) Once waypoints have been placed, place your defending and attacking drones. Each side have
their respective spawning areas.
5 ) When drones have been positioned and waypoints placed, hit the commence battle button.
6 ) The simulation now begins. Attackers will navigate between the waypoint targets, and if they
are within range of the defending drones then the defenders will attack them.
7 ) Once a side has lost all their units, a post analytic display will appear detailing starting
units for each side as well as any losses suffered by either side.
8 ) Proceding completion of a scenario, the user can naviate back to the workshop to re-customise
their drones and load up a new scenario. Data from the last match will now display on the 
workshop stats board.