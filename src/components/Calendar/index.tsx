// Calendar.tsx

import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import Typography from "../Typography";
import DayWeekLabel from "./DayWeekLabel";

interface CalendarProps {
  selectedDates: dayjs.Dayjs[];
  selectDate: (day: dayjs.Dayjs) => void;
}

const MonthlyCalendar: React.FC<CalendarProps> = ({
  selectedDates,
  selectDate,
}) => {
  const [currentMonth, setCurrentMonth] = useState(dayjs("2000-01-01"));

  const generateCalendarGrid = (month: dayjs.Dayjs) => {
    const startOfMonth = month.startOf("month").startOf("week");
    const endOfMonth = month.endOf("month").endOf("week");

    const days: dayjs.Dayjs[] = [];
    for (
      let day = startOfMonth;
      day.isBefore(endOfMonth);
      day = day.add(1, "day")
    ) {
      days.push(day);
    }

    return days;
  };

  const prevMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, "month"));
  };

  const prevYear = () => {
    setCurrentMonth(currentMonth.subtract(1, "year"));
  };

  const nextMonth = () => {
    setCurrentMonth(currentMonth.add(1, "month"));
  };

  const nextYear = () => {
    setCurrentMonth(currentMonth.add(1, "year"));
  };

  const isSelected = (day: dayjs.Dayjs) =>
    selectedDates.some((selectedDate) => day.isSame(selectedDate, "day"));

  const renderCalendarGrid = (month: dayjs.Dayjs) => {
    const days = generateCalendarGrid(month);
    const rows = days.length / 7;

    return (
      <>
        {[...Array(rows)].map((_, rowIndex) => (
          <div key={rowIndex} className="flex w-full justify-between">
            {days.slice(rowIndex * 7, rowIndex * 7 + 7).map((day, index) => (
              <Typography
                key={index}
                theme="micro400"
                tailwindcss={`w-6 h-6 flex items-center justify-center rounded-full hover:bg-blue-100 cursor-pointer  
                  ${day.isSame(month, "month") ? "" : "invisible"}
                  ${
                    isSelected(day)
                      ? "bg-blue-500 text-white"
                      : "text-selectbox"
                  }`}
                onClick={() => selectDate(day)}
              >
                {day.format("D")}
              </Typography>
            ))}
          </div>
        ))}
      </>
    );
  };

  useEffect(() => {
    setCurrentMonth(currentMonth);
  }, [currentMonth]);

  return (
    <div className="bg-blue-50 p-4 rounded-lg shadow-md max-w-lg w-full">
      <div className="flex justify-between items-center">
        <Typography theme="small500">
          {currentMonth.format("MMMM YYYY")}
        </Typography>
        <div className="flex">
          {currentMonth.format("YYYY") !== "2000" ? (
            <svg
              onClick={() => prevYear}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
              />
            </svg>
          ) : (
            <div className="w-5 h-5" />
          )}
          {currentMonth.format("YYYY-MM") !== "2000-01" ? (
            <svg
              onClick={() => prevMonth}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          ) : (
            <div className="w-5 h-5" />
          )}
          {currentMonth.format("YYYY-MM") !== "2017-12" ? (
            <svg
              onClick={() => nextMonth()}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          ) : (
            <div className="w-5 h-5" />
          )}
          {currentMonth.format("YYYY") !== "2017" ? (
            <svg
              onClick={() => nextYear()}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
          ) : (
            <div className="w-5 h-5" />
          )}
        </div>
      </div>
      <div className="flex justify-between pt-4">
        <DayWeekLabel>S</DayWeekLabel>
        <DayWeekLabel>M</DayWeekLabel>
        <DayWeekLabel>T</DayWeekLabel>
        <DayWeekLabel>W</DayWeekLabel>
        <DayWeekLabel>T</DayWeekLabel>
        <DayWeekLabel>F</DayWeekLabel>
        <DayWeekLabel>S</DayWeekLabel>
      </div>
      {renderCalendarGrid(currentMonth)}
    </div>
  );
};

export default MonthlyCalendar;
