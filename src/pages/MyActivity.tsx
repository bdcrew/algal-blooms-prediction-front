import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "../stackflow";

const MyActivity: ActivityComponentType = () => {
  const { push } = useFlow();

  const onClick = () => {
    console.log("Click");
  };

  return (
    <AppScreen
      appBar={{ title: "Implementation of Algal Blooms Prediction System" }}
    >
      <div className="bg-blue-300 h-full">
        <label>
          
        </label>
      </div>
    </AppScreen>
  );
};

export default MyActivity;
