"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useRef } from "react"
const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export default function BarChartHorizontal() {
     const chartRef = useRef<HTMLDivElement>(null);
  return (
    <Card className="h-full w-full flex flex-col overflow-hidden">
      <CardHeader className="pb-2 flex-shrink-0">
        <CardTitle>Bar Chart - Horizontal</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow pb-0 pt-0 relative overflow-hidden" ref={chartRef}>
      <div className="w-full" style={{ height: "250px" }}>
      <ChartContainer config={chartConfig}>
           <ResponsiveContainer width="100%" height="100%">
           <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{ left: 12, right: 12, top: 5, bottom: 5 }}
          >
            <XAxis type="number" dataKey="desktop" hide />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={5} />
          </BarChart>
           </ResponsiveContainer>
        
        </ChartContainer>
      </div>
     
      </CardContent>
      <CardFooter className="flex-shrink-0">
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">January - June 2024</div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}