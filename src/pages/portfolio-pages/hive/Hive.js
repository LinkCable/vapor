import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import './Hive.css';

import PortfolioPiece from '../../../components/portfolio-piece/PortfolioPiece';

import leadin from '../../../media/portfolio/hive/hive-leadin.png';
import task_analysis from '../../../media/portfolio/hive/task-analysis.png';
import affinity_map from '../../../media/portfolio/hive/affinity.jpg';
import screen from '../../../media/portfolio/hive/designs/screen.png';
import screen_storyboard from '../../../media/portfolio/hive/designs/screen_storyboard.png';
import furniture from '../../../media/portfolio/hive/designs/furniture.png';
import furniture_storyboard from '../../../media/portfolio/hive/designs/furniture_storyboard.png';
import tree from '../../../media/portfolio/hive/designs/tree.png';
import tree_storyboard from '../../../media/portfolio/hive/designs/tree_storyboard.png';
import tree_live from '../../../media/portfolio/hive/tree_live.png';
import tree_unity from '../../../media/portfolio/hive/tree_unity.png';
import tree_v2 from '../../../media/portfolio/hive/tree_v2.png';
import colors from '../../../media/portfolio/hive/colors.png';

class Hive extends Component {

  render() {
    return (
      <PortfolioPiece
        title="The Hive"
        github="https://github.com/LinkCable/The-Hive"
        prototype="http://philkt.me/The-Hive/"
        nextProject="/portfolio/medi"
        content={
          <span>
            <h2>What is it?</h2>
            <p>
            The Hive is both an art installation and a design solution to finding seats in a crowded library. The Hive was conceived through research done in CS8803 of Georgia Tech's MS-HCI program, and aims to make it simpler and faster to find study spots for students at the Clough Undergraduate Learning Center (CULC).
            </p>
            <img src={leadin} className="portrait" alt="the hive sneak peak" />
            <h2>Problem Space</h2>
            <p>
              The concept for The Hive came about after noticing that students at the CULC often struggle to find seats, due to there being no easy way to see if certain seats were taken or not, which led to students walking around different floors for several minutes trying to find a suitable studying space. Having personally experienced this ourselves as well, we thought it would be useful to try and solve the problem of finding a seat so students could focus on studying, not searching for a place to work.
            </p>

            <h2>What I Did</h2>
            <p>
            My contributions to this project include:
              <ul className="list">
                <li>Defining the data we were interested in collecting for our problem space</li>
                <li>Conducting interview sessions with users</li>
                <li>Creating interview questions</li>
                <li>Creating a task analysis after reviewing interview data</li>
                <li>Development of a persona for a potential user</li>
                <li>Brainstorming of design solutions</li>
                <li>Modeling and coding of a Unity prototype for The Hive</li>
                <li>Conducting user tests with both virtual and physical prototypes in the CULC</li>
              </ul>
            </p>

            <h2>Research</h2>
            <p>
            After finding our problem space, we then began to conduct research on how exactly students use the CULC, how many have struggled finding a seat before, and other data points so that we could see if this was a real issue that needed solving. We began by distributing a <a href="https://gatech.qualtrics.com/SE/?SID=SV_bJDYgX6eSylMEfz" target="_blank">survey</a>, conducting semi-structured interviews with random individuals in the CULC, and observing how students use the CULC and how long it can take them to find seats.
            </p>

            <h2>Refinements</h2>
            <p>
              After conducting research and analyzing our findings, we came up with three refinements to our problem space to better focus our efforts. It turns out that there is not much difficulty in finding an open seat in the CULC; the problem lies in finding an available table.
            </p>
            <Carousel className="carousel">
              <div>
                <img src={affinity_map} alt="affinity map" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
                <p>
                  Affinity mapping out our research data
                </p>
              </div>
              <div>
                <img src={task_analysis} alt="task analysis" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
                <p>
                  A task analysis I derived from our research
                </p>
              </div>
            </Carousel>
            <p>
              This led us to shift our focus on finding available seating to finding available tables. During observations, it was made clear that there are plenty of unoccupied chairs; so many that students used them for other purposes like making a bed or keeping backpacks off of the floor. However, table space was precious and most tables were quick to be taken as soon as students left them.
            </p>

            <h2>Design Ideas</h2>
            <p>
              Based on this new problem area and the data we collected, we then began to ideate on possible solutions for finding tables in the CULC. We went through an exhaustive list of design possibilities, which ranged concepts such as a flag to indicate if you were open to others sitting at your table to stringing ropes across the CULC to create a sort of large scale hammock for people to sit and work on, we eventually narrowed down to three final designs:
            </p>

            <h4>Solution 1</h4>
            <p className="sub-header-p">Display a screen at every floor showing seat distribution so students know where to find a seat, while also projecting seat information onto the wooden railings on each staircase.</p>

            <Carousel className="carousel">
              <div>
                <img src={screen} alt="screen solution" onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
                <p>Possible visualizations of the heatmap and seat occupancy levels</p>
              </div>
              <div>
                <img src={screen_storyboard} alt="screen storyboard" onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
                <p>A storyboard for the screen solution</p>
              </div>
            </Carousel>

            <h4>Solution 2</h4>
            <p className="sub-header-p">
              Introduce modular furniture that can be a seat or a table depending on the need, therefore increasing the amount of tables in circulation and making seating exist wherever it is needed.
            </p>
            <Carousel className="carousel">
              <div>
                <img src={furniture} alt="modular furniture" onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
                <p>Some concepts of what the furniture could look like</p>
              </div>
              <div>
                <img src={furniture_storyboard} alt="modular furniture storyboard" onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
                <p>A storyboard for modular furniture</p>
              </div>
            </Carousel>

            <h4>Solution 3</h4>
            <p>A tree installation that can show students where seats are available from a glance, by following the path of branches lit by fiber optics, which change brightness depending on crowdedness and pulse based on noise levels.</p>
            <Carousel className="carousel">
              <div>
                <img src={tree} alt="tree solution" onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
                <p>A concept drawing of the tree</p>
              </div>
              <div>
                <img src={tree_storyboard} alt="tree storyboard" onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
                <p>A storyboard for the tree's role in finding a seat</p>
              </div>
            </Carousel>


            <p>
              We arrived at these designs by following two different approaches for our solution:
              <ol className="list">
                <li>Make seating and tables easier to find</li>
                <li>Increase the amount of tables available</li>
              </ol>
            </p>

            <p>
            Both solution 1 and 3 are based on the first approach, as they aim to make it easier and faster for students to find an available table at the CULC and begin their work. However, not wanting to overlook an obvious solution of simply adding more tables, we also designed a solution that would provide students with more workspaces, which solution 2 comes from.
            </p>

            <h2>The Tree</h2>
            <p>
            After feedback from our peers and discussion amongst ourselves, we decided to go with solution 3, the tree. The reason being that although solution 1 was conventional and certainly would have worked, the tree grants the benefit of knowing which floor to go to immediately instead of having to climb past every floor to see that statistics for the floor. The other reason being we wanted a solution with a spirit of art in it. Solution 2 was abandoned as it featured no computer in its design, and this being a human-computer interaction course we were forced to leave it behind.
            </p>

            <p>
            The advantages of the tree, or The Hive as I will refer to it from now on, are several:
              <ol className="list">
                <li>Students can see which floors are less crowded from any point in the CULC </li>
                <li>The branches of the tree directs students to which areas are less populated</li>
                <li>Can disseminate more information in a single structure (Such as noise levels and crowdedness)</li>
                <li>It looks prettier</li>
              </ol>
            </p>

            <h2>Prototype</h2>
            <p>
            In order to prototype and test The Hive, it we required a bit of creativity on our part. Sadly we did not have the funds or feasibility to construct a full scale model of a tree in the CULC, so we made a small physical model out of cardboard, an Arduino, and EL wire to produce the desired effect of The Hive.
            </p>

            <img src={tree_live} alt="real life model of the tree" />
            <p className="caption">Our IRL tree</p>

            <p>
              Knowing that wouldn't provide enough immersion to have a user test it, I also developed a simulation of the tree using Blender and Unity so a user could play a first person walkthrough of encountering our tree in the CULC and using it to find a seat.
            </p>

            <a href="http://philkt.me/The-Hive">
              <img src={tree_unity} alt="unity demo of tree" />
            </a>
            <p className="caption">
              The Unity demo I made, click the image to try it!
            </p>

            <p>
              Using these two prototypes, we set up in the CULC and asked random individuals who were passing by to test our solution if they had the time. They were assigned a task of finding a seat using the Unity prototype, and then asked several questions regarding the physical prototype, such as where they would go based on the current orientation of the tree, differentiation of the colors, and then were given a post-testing interview consisting of several questions to gather feedback design recommendations.
            </p>

            <h2>Feedback</h2>
            <p>
              After conducting several user tests, this was the feedback we received on our prototype:
              <ol className="list">
                <li>The colors were somewhat of an issue; the meaning of blue/green wasn't intuitive, and some people had difficulty differentiating between them</li>
                <li>The look might not fit in with the CULC's aesthetic since it is not industrial</li>
                <li>It's eye-catching but not distracting </li>
                <li>Some people liked it more than a simple display, others did not</li>
              </ol>
              Overall, it seems as though people liked the concept of the tree, however the colors needed to be tweaked for the final product, as well as the overall aesthetic of the tree changed to match the CULC's in order for it to match. Thankfully these complaints are mostly about things that were decided on due to our constraint on time to produce this interim prototype, and were further explored in our next round of testing.
            </p>

            <h2>Testing Round 2</h2>
            <p>
              After making revisions on our prototype, we then tested our prototype again, once more asking random passerbys in the CULC if they'd like to participate in a brief experiment. The process for this testing was a lot more structured than the first time:
              <ol className="list">
                <li>Users explore an empty Unity scene of the virtual CULC to get accustomed to controls</li>
                <li>Users are assigned the task of finding a seat in the CULC without our tree</li>
                <li>Users again try to find a seat, but this time with our tree in the simulation</li>
                <li>Users are asked questions about their experience and of the simulation and about the physical model</li>
              </ol>
            </p>

            <img src={tree_v2} alt="newer version of tree" />
            <p className="caption">A look at the updated model</p>

            <h2>Final Results</h2>
            <p>
              We tested five students, and each student had a reduction of at least 50% time in finding a seat between the standard CULC model and the tree model. Seats weren't placed in the same location, but were on the same floors to try and keep times somewhat standard across tests. Students were also able to quickly discern the meaning behind the tree's colors and branches during their think-aloud.
            </p>

            <p>We also received several design suggestions from our testers that could be implemented in a future model. Suggestions included that the Hive would not be able to display the seating towards the hallways of the CULC, which would leave out a smaller, but significant, portion of the total available seating. Some suggestions to extend functionality included the use of “flower” branches or “roots” intertwining with the overhead lights. For this prototype however, we decided to assist students in finding seats only in the main areas because those seats largely fit students’ needs that we gathered from interviews such as chairs with desks, outlets and tables. We also received several design suggestions aimed at displaying group seating, the most common was using granular light displays, which we couldn't do with our EL wire nor the Unity model due to time constraints.</p>

            <p>
              During our questionnaire we also had students flip through slides of two colors, asking them to mark one as "positive" and the other "negative", or that neither stood out. This was to help us determine what colors would work best to color the Hive. The color hierarchy ended up something like this:
            </p>
            <img src={colors} alt="green blue violet yellow orange red"/>
            <p className="caption">From available to unavailable</p>

            <p>
              This scale informs us of a gradient system that could be implemented in order to have a more continuous display of availability instead of the current binary mode. Interestingly, the scale moves from colors that are generally seen as “cool” to those thought of as “warm,” meaning the idea of “availability” may just be a converse rating of activity.
            </p>

            <h2>Further Design Considerations</h2>
            <p>
              <b>Test colors pairings to convey available or unavailable areas.</b> For the physical prototypes we were limited to a certain set of colors that were available in the form of EL wires which were green and blue. After testing different colors on the 3D model and questionnaires, the pair of colors that seemed to communicate empty and full most clearly were green and red. Therefore, for future iterations we would need to test with different hues and lightness of the two colors to find a specific pair that are visible with sunlight as well not being intrusive for students studying or lacking accessibility.
            </p>
            <p>
              <b>Improve the way we communicate how full or empty the seating area is and provide more details.</b> (For example: whether there is a table of four is available for group work or four individual seats available) Currently, we are communicating that information the same way on the tree, and students can only see that there is an open seat but not know if it is for an individual or a group. Our next iteration would immediately address this issue. We would test various ways of communicating this information by either brightness or pulsing light. This idea is one that will need extensive testing at a large scale to see if it could work in the CULC environment.
            </p>
            <p>
              <b>Work on a final architectural design of the tree.</b> The largest design challenge that we had while working on this project was creating a sculpture that maintained a tree-like appearance with enough branches so that it did not seem empty while also having the required number of branches so that users did not get confused as to which branch was pointing to which area or floor. Therefore, a future design implication could be to create large main branches that point to the main seating areas and have smaller, minor branches to point towards smaller seating areas.
            </p>



          </span>
        }
      />
    );
  }
}

export default Hive;
