//index.js
import Box from "../components/Box";
import { Dimensions } from "react-native";
import Boundary from "../components/Boundary";
import Matter from "matter-js";
import Constants from "../Constants";
import Images from "../Images";

export default (gameWorld) => {
let engine = Matter.Engine.create({ enableSleeping: false });
let world = engine.world;
engine.gravity.y = 0.0;

return {
physics: { engine, world },
MrC: Box(
world,
"blue",
{ x: Constants.WINDOW_WIDTH / 4, y: Constants.WINDOW_HEIGHT / 2 },
{ width: 40, height: 40 },
{ label: "MrC" }
),
MrK: Box(
world,
"black",
{ x: Constants.WINDOW_WIDTH / 1.5, y: Constants.WINDOW_HEIGHT / 2 },
{ width: 40, height: 40 },
{ label: "MrK" }
),
MsC: Box(
world,
"pink",
{ x: Constants.WINDOW_WIDTH / 2, y: Constants.WINDOW_HEIGHT / 2 },
{ width: 40, height: 40 },
{ label: "MsC" }
),
TopBoundary: Boundary(
world,
"red",
{ x: Constants.WINDOW_WIDTH / 2, y: 0 },
{ height: 30, width: Constants.WINDOW_WIDTH }
),
LeftBoundary: Boundary(
world,
"red",
{ x: 0, y: Constants.WINDOW_HEIGHT / 2 },
{ height: Constants.WINDOW_HEIGHT, width: 30 }
),
RightBoundary: Boundary(
world,
"red",
{ x: Constants.WINDOW_WIDTH, y: Constants.WINDOW_HEIGHT / 2 },
{ height: Constants.WINDOW_HEIGHT, width: 30 }
),
BottomBoundary: Boundary(
world,
"red",
{ x: Constants.WINDOW_WIDTH / 2, y: Constants.WINDOW_HEIGHT },
{ height: 30, width: Constants.WINDOW_WIDTH }
),
CentralBoundary: Boundary(
world,
"red",
{ x: Constants.WINDOW_WIDTH / 2, y: Constants.WINDOW_HEIGHT / 2 },
{ height: 30, width: Constants.WINDOW_WIDTH }
),
BottomMidBoundary: Boundary(
world,
"red",
{ x: Constants.WINDOW_WIDTH / 2, y: Constants.WINDOW_HEIGHT / 1.32 },
{ height: Constants.WINDOW_HEIGHT / 2, width: 30 }
),
};
};