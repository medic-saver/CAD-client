import React from "react";
import { ResponsiveCalendar } from "@nivo/calendar";
import { monthlyHeatmapData } from '../../../formData/monthlyHeatmapData';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export default function monthlyHeatmap() {
  return (
    <div style={{ height: "250px" }}>
      <ResponsiveCalendar
        data={monthlyHeatmapData}
        from="2019-04-01"
        to="2019-04-30"
        emptyColor="#eeeeee"
        colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
          {
            anchor: "bottom-right",
            direction: "row",
            translateY: 36,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: "right-to-left"
          }
        ]}
      />
    </div>
  );
}
