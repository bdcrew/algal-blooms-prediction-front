import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "../stackflow";
import { ChangeEvent, useState } from "react";
import Layout from "@/components/Layout";
import dayjs from "dayjs";
import MonthlyCalendar from "@/components/Calendar";
import Typography from "@/components/Typography";
import SelectBox from "@/components/SelectBox";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import { ALGAL_BLOOMS_ITEMS } from "@/constants/data";

const Home: ActivityComponentType = () => {
  const { push } = useFlow();
  const [selectedDates, setSelectedDates] = useState<dayjs.Dayjs[]>([]);
  const [items, setItems] = useState(ALGAL_BLOOMS_ITEMS);
  const [seaArea, setSeaArea] = useState<string | string[]>();

  const changeSelectBox = (option: string | string[]) => {
    setSeaArea(option);
  };

  const updateTextFiled = (e: ChangeEvent<HTMLInputElement>) => {
    const copyItems = [...items].map((item) => {
      if (item.name === e.currentTarget.name) {
        return { ...item, value: e.currentTarget.value };
      }
      return item;
    });
    setItems(copyItems);
  };

  const selectDate = (day: dayjs.Dayjs) => {
    setSelectedDates([day]);
  };

  return (
    <AppScreen
      appBar={{
        title: "Implementation of Algal Blooms Prediction System With Calendar",
      }}
    >
      <Layout>
        <div className="w-full  max-w-lg flex justify-end">
          <Button
            theme="primary"
            size="small"
            onClick={() => {
              push("Predict", {});
            }}
          >
            Go to Predict
          </Button>
        </div>
        <div className="w-full pt-3 flex flex-col items-center">
          <MonthlyCalendar
            selectedDates={selectedDates}
            selectDate={selectDate}
          />
          <div className="pt-4 w-full max-w-lg ">
            <SelectBox
              label="Please select the sea area."
              onChange={changeSelectBox}
              options={[
                "East Sea",
                "West Sea",
                "Southern Sea",
                "East China Sea",
              ]}
              value={seaArea}
            />
          </div>

          <div className="py-3 w-full max-w-lg ">
            <Typography theme="base400">
              The average element value for that date.
            </Typography>
            <div className="py-4 grid grid-cols-2 gap-2">
              {items.map((item) => {
                return (
                  <TextField
                    label={item.name}
                    key={item.key}
                    name={item.name}
                    onChange={updateTextFiled}
                    value={item.value}
                  />
                );
              })}
            </div>
            <Button theme="primary" fullWidth>
              Send
            </Button>
          </div>
        </div>
      </Layout>
    </AppScreen>
  );
};

export default Home;
