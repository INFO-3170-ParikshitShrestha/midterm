import Matter, { Sleeping } from "matter-js";
import Constants from "./Constants";
import Images from "./Images";

const randomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Physics = (entities, { touches, dispatch, events, time }) => {
  let engine = entities.physics.engine;

  // Handle screen swipe motion
  touches.filter(t => t.type === "move").forEach(t => {
    Matter.Body.setVelocity(entities.MrC.body, {
      x: entities.MrC.body.velocity.x + t.delta.pageX,
      y: entities.MrC.body.velocity.y + t.delta.pageY
    });
  });

  Matter.Events.on(engine, "collisionStart", (event) => {
    var pairs = event.pairs;
    var objA = pairs[0].bodyA;
    var objB = pairs[0].bodyB;
    var objALabel = pairs[0].bodyA.label;
    var objBLabel = pairs[0].bodyB.label;

    if (objALabel === "MrC" || objBLabel === "MrC") {
      if (objALabel === "MrK" || objBLabel === "MrK") {
        // Place Mr. K in the bottom left cell
        Matter.Body.setPosition(entities.MrK.body, {
          x: Constants.CELL_SIZE * 2,
          y: Constants.SCREEN_HEIGHT - Constants.CELL_SIZE * 2
        });
        // Set a random velocity for Mr. K
        Matter.Body.setVelocity(entities.MrK.body, {
          x: randomBetween(-3, 3),
          y: randomBetween(-3, 3)
        });
      } else if (objALabel === "MsC" || objBLabel === "MsC") {
        // Place Ms. C in the bottom right cell
        Matter.Body.setPosition(entities.MsC.body, {
          x: Constants.SCREEN_WIDTH - Constants.CELL_SIZE * 2,
          y: Constants.SCREEN_HEIGHT - Constants.CELL_SIZE * 2
        });
        // Set a random velocity for Ms. C
        Matter.Body.setVelocity(entities.MsC.body, {
          x: randomBetween(-3, 3),
          y: randomBetween(-3, 3)
        });
      }
    }
  });

  Matter.Engine.update(engine, time.delta);

  return entities;
};

export default Physics;
