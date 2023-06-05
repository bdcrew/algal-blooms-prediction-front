import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ChangeEvent, useState } from "react";
import Layout from "@/components/Layout";
import Typography from "@/components/Typography";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import { ALGAL_BLOOMS_ITEMS } from "@/constants/data";

const Predict: ActivityComponentType = () => {
  const [itemsOf3, setItemsOf3] = useState(ALGAL_BLOOMS_ITEMS.slice(0, 3));
  const [itemsOf4, setItemsOf4] = useState(ALGAL_BLOOMS_ITEMS.slice(3, 7));
  const [itemsOf7, setItemsOf7] = useState(ALGAL_BLOOMS_ITEMS);

  const updateItemOf7 = (e: ChangeEvent<HTMLInputElement>) => {
    const copyItems = [...itemsOf7].map((item) => {
      if (item.name === e.currentTarget.name) {
        return { ...item, value: e.currentTarget.value };
      }
      return item;
    });
    setItemsOf7(copyItems);
  };

  const updateItemOf4 = (e: ChangeEvent<HTMLInputElement>) => {
    const copyItems = [...itemsOf4].map((item) => {
      if (item.name === e.currentTarget.name) {
        return { ...item, value: e.currentTarget.value };
      }
      return item;
    });
    setItemsOf4(copyItems);
  };

  const updateItemOf3 = (e: ChangeEvent<HTMLInputElement>) => {
    const copyItems = [...itemsOf3].map((item) => {
      if (item.name === e.currentTarget.name) {
        return { ...item, value: e.currentTarget.value };
      }
      return item;
    });
    setItemsOf3(copyItems);
  };

  return (
    <AppScreen
      appBar={{
        title: "Implementation of Algal Blooms Prediction System With Calendar",
      }}
    >
      <Layout>
        <div className="w-full pt-3 flex flex-col items-center">
          <div className="py-3 w-full max-w-lg ">
            <Typography theme="base400">
              The average element value for that date.
            </Typography>
            <div className="w-full space-y-3">
              <div className="py-4 grid grid-cols-3 gap-2">
                {itemsOf3.map((item) => {
                  return (
                    <TextField
                      label={item.name}
                      key={item.key}
                      name={item.name}
                      onChange={updateItemOf3}
                      value={item.value}
                    />
                  );
                })}
              </div>
              <Typography theme="base400">
                Probability of Algal Blooms Occurrence
              </Typography>
              <Button theme="primary" fullWidth>
                Send
              </Button>
            </div>
          </div>
          <div className="py-3 w-full max-w-lg ">
            <Typography theme="base400">
              The average element value for that date.
            </Typography>
            <div className="w-full space-y-3">
              <div className="py-4 grid grid-cols-2 gap-2">
                {itemsOf4.map((item) => {
                  return (
                    <TextField
                      label={item.name}
                      key={item.key}
                      name={item.name}
                      onChange={updateItemOf4}
                      value={item.value}
                    />
                  );
                })}
              </div>
              <Typography theme="base400">
                Probability of Algal Blooms Occurrence
              </Typography>
              <Button theme="primary" fullWidth>
                Send
              </Button>
            </div>
          </div>
          <div className="py-3 w-full max-w-lg ">
            <Typography theme="base400">
              The average element value for that date.
            </Typography>
            <div className="w-full space-y-3">
              <div className="py-4 grid grid-cols-2 gap-2">
                {itemsOf7.map((item) => {
                  return (
                    <TextField
                      label={item.name}
                      key={item.key}
                      name={item.name}
                      onChange={updateItemOf7}
                      value={item.value}
                    />
                  );
                })}
              </div>
              <Typography theme="base400">
                Probability of Algal Blooms Occurrence
              </Typography>
              <Button theme="primary" fullWidth>
                Send
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    </AppScreen>
  );
};

export default Predict;
