import "@stackflow/plugin-basic-ui/index.css";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import { stackflow } from "@stackflow/react";
import MyActivity from "./pages/MyActivity";
import "./index.css";

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350, // 전환 시간
  activities: { MyActivity },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
    () => ({
      key: "activityLog",
      onPushed({ effect }) {
        console.log(effect.activity.name);
      },
    }),
  ],
  initialActivity: () => "MyActivity",
});
