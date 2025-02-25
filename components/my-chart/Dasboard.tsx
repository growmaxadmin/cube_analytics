"use client"
import React, { useState, useEffect } from 'react';
import { Responsive, WidthProvider } from "react-grid-layout";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import MyChart from './MyChart';
import BarCharts from './BarCharts';
import PieCharts from './PieCharts';
import AreaCharts from './AreaCharts';
import BarChartHorizontal from './BarChartHorizontal';
import AreaChartStacked from './AreaChartStacked';

// Create responsive grid without WidthProvider
const GridLayout = Responsive;

export default function Dashboard() {
    const [width, setWidth] = useState(1200); // Default width for SSR-safe rendering

    useEffect(() => {
        if (typeof window !== "undefined") {
            setWidth(window.innerWidth); // Set width only in client-side
            const handleResize = () => setWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    const layouts = {
        lg: [
            { i: "1", x: 0, y: 0, w: 3.5, h: 3.5 },
            { i: "2", x: 4, y: 0, w: 3.5, h: 3.5 },
            { i: "3", x: 8, y: 0, w: 3.5, h: 3.5 },
            { i: "4", x: 0, y: 0, w: 3.5, h: 3.5 },
            { i: "5", x: 4, y: 0, w: 3.5, h: 3.5 },
            { i: "6", x: 8, y: 0, w: 3.5, h: 3.5 },
        ]
    };

    const containerPadding = [10, 10];
    const margin = [10, 10];

    return (
        <div style={{ width: '100%', padding: '10px' }}>
            <ResponsiveGridLayout
                layouts={layouts}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 }}
                rowHeight={100}
                width={width - 20} // Subtract padding
                containerPadding={containerPadding}
                margin={margin}
                isResizable={true}
                isDraggable={true}
            >
                <div
                    key="1"
                    className="shadow-lg bg-white rounded-xl"
                    style={{
                        height: '100%',
                        border: '1px solid #e5e7eb',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <MyChart />
                </div>
                <div
                    key="2"
                    className="shadow-lg bg-white rounded-xl"
                    style={{
                        height: '100%',
                        border: '1px solid #e5e7eb',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                <BarCharts/>
                </div>
                <div
                    key="3"
                    className="shadow-lg bg-white rounded-xl"
                    style={{
                        height: '100%',
                        border: '1px solid #e5e7eb',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <PieCharts/>
                </div>
                <div
                    key="4"
                    className="shadow-lg bg-white rounded-xl"
                    style={{
                        height: '100%',
                        border: '1px solid #e5e7eb',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <AreaCharts/>
                </div>
                <div
                    key="5"
                    className="shadow-lg bg-white rounded-xl"
                    style={{
                        height: '100%',
                        border: '1px solid #e5e7eb',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <BarChartHorizontal/>
                </div>
                <div
                    key="6"
                    className="shadow-lg bg-white rounded-xl"
                    style={{
                        height: '100%',
                        border: '1px solid #e5e7eb',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                   <AreaChartStacked/>
                </div>
            </ResponsiveGridLayout>
        </div>
    );
}
