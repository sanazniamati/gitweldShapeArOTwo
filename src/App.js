import { Stage, Layer, Line, Group, Image, Text } from "react-konva";
import useImage from "use-image";
import { useRef, useState } from "react";

export default function App() {
  const url = "img.png";
  const [image] = useImage(url);
  const stageRef = useRef();
  const [text, setText] = useState("");
  const handleMouseMove = (e) => {
    const stage = e.target.getStage();
    const pointerPosition = stage.getPointerPosition();
    const x = pointerPosition.x;
    const y = pointerPosition.y;
    setText(() => "X:" + x + " Y:" + y);
  };
  const handelMouseOut = () => {
    setText("");
  };

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      ref={stageRef}
      onMouseMove={handleMouseMove}
      onMouseOut={handelMouseOut}
    >
      <Layer>
        <Group>
          <Text text={text} x={50} y={550} fontSize={20} />
          <Image x={100} y={10} image={image} />
          <Line
            x={0}
            y={0}
            points={[
              161, 211, 317, 168, 478, 220, 459, 264, 380, 295, 323, 401, 266,
              295, 172, 264,
            ]}
            // bezier
            tension={0.5}
            closed
            // fill={"green"}
            stroke={"red"}
            strokeWidth={5}
            draggable
          />
        </Group>
      </Layer>
    </Stage>
  );
}
